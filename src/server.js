const express = require('express');
const Database = require('better-sqlite3');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

// DB — se guarda en /data (Volume persistente de Railway)
// Si /data no existe (entorno local), cae a src/../data/
const DATA_DIR = fs.existsSync('/data') ? '/data' : path.join(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const dbPath = path.join(DATA_DIR, 'kine.db');
console.log(`📦 Base de datos en: ${dbPath}`);

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS pacientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    edad INTEGER,
    objetivo TEXT,
    lesiones TEXT,
    notas TEXT,
    creado_en TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS rutinas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER NOT NULL,
    nombre TEXT NOT NULL,
    fecha TEXT NOT NULL,
    sesiones TEXT NOT NULL,
    creado_en TEXT DEFAULT (datetime('now','localtime')),
    FOREIGN KEY(paciente_id) REFERENCES pacientes(id)
  );

  CREATE TABLE IF NOT EXISTS cargas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER NOT NULL,
    ejercicio TEXT NOT NULL,
    fecha TEXT NOT NULL,
    kg REAL,
    reps TEXT,
    rir TEXT,
    notas TEXT,
    FOREIGN KEY(paciente_id) REFERENCES pacientes(id)
  );

  CREATE TABLE IF NOT EXISTS reglas_ia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER,          -- NULL = regla general para todas las rutinas
    texto TEXT NOT NULL,
    creado_en TEXT DEFAULT (datetime('now','localtime'))
  );

  CREATE TABLE IF NOT EXISTS historial_comandos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER NOT NULL,
    comando TEXT NOT NULL,
    modo TEXT DEFAULT 'nueva',     -- 'nueva' = generó de cero, 'corregir' = ajuste sobre la rutina
    creado_en TEXT DEFAULT (datetime('now','localtime'))
  );
`);

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// ── PACIENTES ─────────────────────────────────────────────────────────────────
app.get('/api/pacientes', (req, res) => {
  const rows = db.prepare(`
    SELECT p.*, 
      COUNT(DISTINCT r.id) as total_rutinas,
      MAX(r.fecha) as ultima_rutina
    FROM pacientes p
    LEFT JOIN rutinas r ON r.paciente_id = p.id
    GROUP BY p.id
    ORDER BY p.nombre
  `).all();
  res.json(rows);
});

app.post('/api/pacientes', (req, res) => {
  const { nombre, edad, objetivo, lesiones, notas } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Nombre requerido' });
  const r = db.prepare(
    'INSERT INTO pacientes (nombre, edad, objetivo, lesiones, notas) VALUES (?,?,?,?,?)'
  ).run(nombre, edad||null, objetivo||'', lesiones||'', notas||'');
  res.json({ id: r.lastInsertRowid });
});

app.get('/api/pacientes/:id', (req, res) => {
  const p = db.prepare('SELECT * FROM pacientes WHERE id = ?').get(req.params.id);
  if (!p) return res.status(404).json({ error: 'No encontrado' });
  res.json(p);
});

app.put('/api/pacientes/:id', (req, res) => {
  const { nombre, edad, objetivo, lesiones, notas } = req.body;
  db.prepare(
    'UPDATE pacientes SET nombre=?, edad=?, objetivo=?, lesiones=?, notas=? WHERE id=?'
  ).run(nombre, edad||null, objetivo||'', lesiones||'', notas||'', req.params.id);
  res.json({ ok: true });
});

app.delete('/api/pacientes/:id', (req, res) => {
  db.prepare('DELETE FROM rutinas WHERE paciente_id = ?').run(req.params.id);
  db.prepare('DELETE FROM cargas WHERE paciente_id = ?').run(req.params.id);
  db.prepare('DELETE FROM pacientes WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── RUTINAS ───────────────────────────────────────────────────────────────────
app.get('/api/pacientes/:id/rutinas', (req, res) => {
  const rows = db.prepare(
    'SELECT id, nombre, fecha, creado_en FROM rutinas WHERE paciente_id = ? ORDER BY fecha DESC'
  ).all(req.params.id);
  res.json(rows);
});

app.post('/api/pacientes/:id/rutinas', (req, res) => {
  const { nombre, fecha } = req.body;
  // El app.js guarda como "días" (con tilde), el server como "sesiones"
  const datos = req.body.sesiones || req.body['días'] || req.body.dias || [];
  const r = db.prepare(
    'INSERT INTO rutinas (paciente_id, nombre, fecha, sesiones) VALUES (?,?,?,?)'
  ).run(req.params.id, nombre, fecha, JSON.stringify(datos));
  res.json({ id: r.lastInsertRowid });
});

app.get('/api/rutinas/:id', (req, res) => {
  const r = db.prepare('SELECT * FROM rutinas WHERE id = ?').get(req.params.id);
  if (!r) return res.status(404).json({ error: 'No encontrada' });
  r.sesiones = JSON.parse(r.sesiones);
  res.json(r);
});

app.put('/api/rutinas/:id', (req, res) => {
  const { nombre, fecha } = req.body;
  const datos = req.body.sesiones || req.body['días'] || req.body.dias || [];
  db.prepare(
    'UPDATE rutinas SET nombre=?, fecha=?, sesiones=? WHERE id=?'
  ).run(nombre, fecha, JSON.stringify(datos), req.params.id);
  res.json({ ok: true });
});

app.delete('/api/rutinas/:id', (req, res) => {
  db.prepare('DELETE FROM rutinas WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── CARGAS ────────────────────────────────────────────────────────────────────
app.get('/api/pacientes/:id/cargas', (req, res) => {
  const { ejercicio } = req.query;
  let q = 'SELECT * FROM cargas WHERE paciente_id = ?';
  const params = [req.params.id];
  if (ejercicio) { q += ' AND ejercicio = ?'; params.push(ejercicio); }
  q += ' ORDER BY fecha ASC';
  res.json(db.prepare(q).all(...params));
});

app.post('/api/pacientes/:id/cargas', (req, res) => {
  const { ejercicio, fecha, kg, reps, rir, notas } = req.body;
  const r = db.prepare(
    'INSERT INTO cargas (paciente_id, ejercicio, fecha, kg, reps, rir, notas) VALUES (?,?,?,?,?,?,?)'
  ).run(req.params.id, ejercicio, fecha, kg||null, reps||'', rir||'', notas||'');
  res.json({ id: r.lastInsertRowid });
});

app.delete('/api/cargas/:id', (req, res) => {
  db.prepare('DELETE FROM cargas WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.get('/api/pacientes/:id/ejercicios-con-cargas', (req, res) => {
  const rows = db.prepare(
    'SELECT DISTINCT ejercicio FROM cargas WHERE paciente_id = ? ORDER BY ejercicio'
  ).all(req.params.id);
  res.json(rows.map(r => r.ejercicio));
});


// ── BANCO DE EJERCICIOS (para el asistente de IA) ──────────────────────────────
let BANCO_CATS = {};
try {
  const bancoSrc = fs.readFileSync(path.join(__dirname, '../public/banco.js'), 'utf8');
  // El archivo define `const BANCO = {...}`. Lo evaluamos de forma aislada.
  const m = bancoSrc.match(/const BANCO\s*=\s*(\{[\s\S]*?\n\})/);
  if (m) { BANCO_CATS = eval('(' + m[1] + ')'); console.log('✅ Banco cargado:', Object.keys(BANCO_CATS).length, 'categorías'); }
} catch(e) { console.error('No se pudo cargar el banco:', e.message); }

// Llamada a la API de Anthropic vía https nativo
function llamarClaude(systemPrompt, userPrompt) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    });
    const options = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-length': Buffer.byteLength(payload)
      }
    };
    const req = https.request(options, (resp) => {
      let data = '';
      resp.on('data', c => data += c);
      resp.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.error) return reject(new Error(j.error.message || 'Error de la API'));
          const texto = (j.content && j.content[0] && j.content[0].text) || '';
          resolve(texto);
        } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// ── REGLAS / MEMORIA DE INDICACIONES ───────────────────────────────────────────
// Listar reglas: generales (paciente_id NULL) + las del paciente si se pasa ?paciente_id=
app.get('/api/reglas', (req, res) => {
  const pid = req.query.paciente_id;
  let generales = db.prepare('SELECT * FROM reglas_ia WHERE paciente_id IS NULL ORDER BY id DESC').all();
  let delPaciente = [];
  if (pid) delPaciente = db.prepare('SELECT * FROM reglas_ia WHERE paciente_id = ? ORDER BY id DESC').all(pid);
  res.json({ generales, paciente: delPaciente });
});

// Crear una regla (general si no se manda paciente_id)
app.post('/api/reglas', (req, res) => {
  const { texto, paciente_id } = req.body;
  if (!texto || !texto.trim()) return res.status(400).json({ error: 'Texto vacío' });
  const r = db.prepare('INSERT INTO reglas_ia (paciente_id, texto) VALUES (?,?)')
    .run(paciente_id || null, texto.trim());
  res.json({ ok: true, id: r.lastInsertRowid });
});

// Editar una regla
app.put('/api/reglas/:id', (req, res) => {
  const { texto } = req.body;
  if (!texto || !texto.trim()) return res.status(400).json({ error: 'Texto vacío' });
  db.prepare('UPDATE reglas_ia SET texto = ? WHERE id = ?').run(texto.trim(), req.params.id);
  res.json({ ok: true });
});

// Borrar una regla
app.delete('/api/reglas/:id', (req, res) => {
  db.prepare('DELETE FROM reglas_ia WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── HISTORIAL DE COMANDOS POR PACIENTE ─────────────────────────────────────────
// Listar los comandos que se le dieron a la IA para este paciente (más nuevo primero)
app.get('/api/historial', (req, res) => {
  const pid = req.query.paciente_id;
  if (!pid) return res.json([]);
  const rows = db.prepare(
    'SELECT id, comando, modo, creado_en FROM historial_comandos WHERE paciente_id = ? ORDER BY id DESC LIMIT 50'
  ).all(pid);
  res.json(rows);
});

// Borrar un comando del historial
app.delete('/api/historial/:id', (req, res) => {
  db.prepare('DELETE FROM historial_comandos WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// ── ENDPOINT: GENERAR RUTINA CON IA ────────────────────────────────────────────
app.post('/api/generar-rutina', async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'Falta configurar ANTHROPIC_API_KEY en el servidor.' });
    }
    const { comando, paciente, modo, rutinaActual } = req.body;
    if (!comando || !comando.trim()) return res.status(400).json({ error: 'Escribí una indicación para la rutina.' });
    const esCorreccion = modo === 'corregir';

    // Lista de categorías y ejercicios del banco (para que la IA elija de ahí)
    const catálogo = Object.entries(BANCO_CATS)
      .map(([cat, ejs]) => `### ${cat}\n` + ejs.map(e => `- ${typeof e === 'string' ? e : (e.nombre || e.ej || JSON.stringify(e))}`).join('\n'))
      .join('\n\n');

    const system = `Sos un kinesiólogo experto que arma rutinas de rehabilitación y entrenamiento para el centro Kine House.
Tenés un BANCO DE EJERCICIOS oficial. Debés armar rutinas usando PREFERENTEMENTE ejercicios de ese banco, respetando EXACTAMENTE el nombre de la categoría y del ejercicio tal como figuran.

Si un ejercicio necesario no está en el banco, podés agregarlo igual, pero poné el campo "cat" como "Otros Auxiliares" y marcá "nuevo": true.

Estructura de la rutina: hasta 3 días. Cada día es una lista de filas. Cada fila tiene:
- "blq": bloque (A1, A2, A3, B1, B2, C1, etc. — agrupá ejercicios que se hacen juntos con la misma letra)
- "cat": nombre EXACTO de la categoría del banco
- "ej": nombre EXACTO del ejercicio
- "ser": número de series (ej "3")
- "r1","r2","r3","r4": repeticiones por serie (ej "12","10","8"; dejá "" las que no uses)
- "obs": observación breve opcional
Completá series y reps con valores TÍPICOS según el objetivo (fuerza: 3-5 series x 4-6 reps; hipertrofia: 3-4 x 8-12; resistencia/rehab: 2-3 x 12-20).

Respondé ÚNICAMENTE con un JSON válido, sin texto adicional, sin markdown, con esta forma exacta:
{"nombre":"Nombre corto de la rutina","dias":[[{"blq":"A1","cat":"...","ej":"...","ser":"3","r1":"12","r2":"10","r3":"8","r4":"","obs":"","nuevo":false}]]}
El array "dias" tiene 1, 2 o 3 elementos (uno por día). Cada día es un array de filas.

BANCO DE EJERCICIOS:
${catálogo}`;

    // Cargar reglas guardadas (generales + del paciente)
    const reglasGenerales = db.prepare('SELECT texto FROM reglas_ia WHERE paciente_id IS NULL ORDER BY id ASC').all();
    let reglasPaciente = [];
    if (paciente && paciente.id) {
      reglasPaciente = db.prepare('SELECT texto FROM reglas_ia WHERE paciente_id = ? ORDER BY id ASC').all(paciente.id);
    }

    // Historial de comandos previos de este paciente (para dar continuidad)
    let historialPrevios = [];
    if (paciente && paciente.id) {
      historialPrevios = db.prepare(
        'SELECT comando, modo FROM historial_comandos WHERE paciente_id = ? ORDER BY id DESC LIMIT 8'
      ).all(paciente.id).reverse(); // del más viejo al más nuevo
    }

    let userMsg;
    if (esCorreccion) {
      userMsg = `Esto es una CORRECCIÓN sobre una rutina que YA existe. NO armes una rutina nueva de cero.\n` +
        `Aplicá ÚNICAMENTE el cambio que se pide abajo y devolvé la rutina COMPLETA con ese cambio aplicado.\n` +
        `Todo lo que el pedido NO menciona debe quedar EXACTAMENTE IGUAL: mismos ejercicios, mismos bloques, mismas series y repeticiones.\n\n` +
        `CAMBIO PEDIDO: ${comando}`;
      // La rutina actual que está en pantalla
      if (rutinaActual && Array.isArray(rutinaActual) && rutinaActual.length) {
        userMsg += `\n\nRUTINA ACTUAL (la que tenés que corregir), en formato JSON, un array por día:\n` +
          JSON.stringify(rutinaActual);
      }
    } else {
      userMsg = `Indicación: ${comando}`;
    }

    if (reglasGenerales.length) {
      userMsg += `\n\nREGLAS GENERALES que SIEMPRE debés respetar (indicaciones previas del kinesiólogo):\n` +
        reglasGenerales.map(r => `- ${r.texto}`).join('\n');
    }
    if (reglasPaciente.length) {
      userMsg += `\n\nREGLAS ESPECÍFICAS de este paciente que SIEMPRE debés respetar:\n` +
        reglasPaciente.map(r => `- ${r.texto}`).join('\n');
    }
    if (historialPrevios.length) {
      userMsg += `\n\nPEDIDOS ANTERIORES para este paciente (en orden, para que mantengas coherencia con lo que ya se fue armando):\n` +
        historialPrevios.map(h => `- ${h.comando}`).join('\n');
    }
    if (paciente) {
      userMsg += `\n\nDatos del paciente:`;
      if (paciente.nombre) userMsg += `\n- Nombre: ${paciente.nombre}`;
      if (paciente.edad) userMsg += `\n- Edad: ${paciente.edad}`;
      if (paciente.objetivo) userMsg += `\n- Objetivo: ${paciente.objetivo}`;
      if (paciente.lesiones) userMsg += `\n- Lesiones: ${paciente.lesiones}`;
    }

    const texto = await llamarClaude(system, userMsg);
    // Extraer el JSON de la respuesta
    let jsonStr = texto.trim();
    const fence = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fence) jsonStr = fence[1].trim();
    const primero = jsonStr.indexOf('{');
    const ultimo = jsonStr.lastIndexOf('}');
    if (primero >= 0 && ultimo >= 0) jsonStr = jsonStr.slice(primero, ultimo + 1);

    let rutina;
    try { rutina = JSON.parse(jsonStr); }
    catch(e) { return res.status(500).json({ error: 'La IA devolvió un formato inesperado. Probá reformular la indicación.' }); }

    // Guardar el comando en el historial del paciente (para reutilizarlo y dar continuidad)
    if (paciente && paciente.id) {
      try {
        db.prepare('INSERT INTO historial_comandos (paciente_id, comando, modo) VALUES (?,?,?)')
          .run(paciente.id, comando.trim(), esCorreccion ? 'corregir' : 'nueva');
      } catch(e) { /* no bloquear la respuesta por esto */ }
    }

    res.json({ ok: true, rutina });
  } catch (err) {
    console.error('Error generar-rutina:', err.message);
    res.status(500).json({ error: 'No se pudo generar la rutina: ' + err.message });
  }
});

app.listen(PORT, () => console.log(`KineApp corriendo en puerto ${PORT}`));
