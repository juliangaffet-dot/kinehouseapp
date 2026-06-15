// ── BANCO DATA ────────────────────────────────────────────────────────────────
const CATS = Object.keys(BANCO);
const BLOQUES_DEFAULT = ["A1","A2","A3","B1","B2","B3","C1","C2","D1","D2","Aux","Aux"];
const CAT_SHORT = {
  "Rodilla Dom. Empujes":"Rod.Emp","Cadera Dom. Tracción":"Cad.Trac",
  "Cadera Dom. Empujes":"Cad.Emp","Rodilla Dom. Tracción":"Rod.Trac",
  "Isométricos MMII":"Isom","Empujes MMSS":"EmpMS","Tracciones MMSS":"TracMS",
  "Pliometría MMII":"Plio","Otros Auxiliares":"Aux","Zona Media":"ZM","Pliometría MMSS":"PlioMS"
};
const GRUPOS = [
  ["Cuádriceps","Rod.Emp"],["Isquiotibiales","Rod.Trac"],["Glúteos","Cad.Emp"],
  ["Cadera Trac.","Cad.Trac"],["Isométricos","Isom"],["Empujes MMSS","EmpMS"],
  ["Tracciones MMSS","TracMS"],["Pliometría MMII","Plio"],["Pliometría MMSS","PlioMS"],
  ["Zona Media","ZM"],["Auxiliares","Aux"]
];

// ── ESTADO ────────────────────────────────────────────────────────────────────
let pacienteActual = null;
let rutinaActual = null; // {id, nombre, fecha, sesiones}
let editandoPacId = null;
let currentSes = 1;
const sesState = {1:[], 2:[], 3:[]};
let chartInstance = null;

// ── NAVEGACIÓN ────────────────────────────────────────────────────────────────
function navTo(pageId, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.topbar nav a').forEach(a => a.classList.remove('active'));
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  if (tabId === 'tab-cargas') cargarSelectEjercicios();
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function toast(msg, dur=2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ── MODALES ───────────────────────────────────────────────────────────────────
function abrirModal(id) { document.getElementById(id).classList.add('open'); }
function cerrarModal(id) { document.getElementById(id).classList.remove('open'); }

document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ── PACIENTES ─────────────────────────────────────────────────────────────────
async function cargarPacientes() {
  const res = await fetch('/api/pacientes');
  const pacs = await res.json();
  renderPacientes(pacs);
  document.getElementById('buscar-pac').oninput = e => {
    const q = e.target.value.toLowerCase();
    renderPacientes(pacs.filter(p => p.nombre.toLowerCase().includes(q)));
  };
}

function renderPacientes(pacs) {
  const el = document.getElementById('lista-pacientes');
  if (!pacs.length) {
    el.innerHTML = `<div class="empty" style="grid-column:1/-1"><div class="empty-icon">👤</div><p>No hay pacientes todavía</p><button class="btn btn-primary" onclick="abrirModalPac()">＋ Agregar primero</button></div>`;
    return;
  }
  el.innerHTML = pacs.map(p => `
    <div class="pac-card" onclick="abrirFicha(${p.id})">
      <div class="pac-avatar">${p.nombre.charAt(0).toUpperCase()}</div>
      <div class="pac-name">${p.nombre}</div>
      <div class="pac-meta">
        ${p.edad ? `<span>🎂 ${p.edad} años</span>` : ''}
        ${p.ultima_rutina ? `<span>📅 ${formatFecha(p.ultima_rutina)}</span>` : '<span>Sin rutinas aún</span>'}
      </div>
      ${p.objetivo ? `<div><span class="pac-badge">${p.objetivo.substring(0,30)}${p.objetivo.length>30?'...':''}</span></div>` : ''}
      ${p.total_rutinas ? `<div style="font-size:11px;color:var(--muted)">${p.total_rutinas} rutina${p.total_rutinas>1?'s':''} guardada${p.total_rutinas>1?'s':''}</div>` : ''}
    </div>
  `).join('');
}

function abrirModalPac() {
  editandoPacId = null;
  document.getElementById('modal-pac-title').textContent = 'Nuevo paciente';
  ['mp-nombre','mp-edad','mp-obj','mp-les','mp-notas'].forEach(id => document.getElementById(id).value = '');
  abrirModal('modal-pac');
  setTimeout(() => document.getElementById('mp-nombre').focus(), 100);
}

async function guardarPaciente() {
  const nombre = document.getElementById('mp-nombre').value.trim();
  if (!nombre) { toast('⚠️ El nombre es obligatorio'); return; }
  const data = {
    nombre,
    edad: document.getElementById('mp-edad').value || null,
    objetivo: document.getElementById('mp-obj').value,
    lesiones: document.getElementById('mp-les').value,
    notas: document.getElementById('mp-notas').value
  };
  if (editandoPacId) {
    await fetch(`/api/pacientes/${editandoPacId}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    toast('✅ Paciente actualizado');
    pacienteActual = { ...pacienteActual, ...data };
    renderFicha();
  } else {
    const res = await fetch('/api/pacientes', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    const { id } = await res.json();
    toast('✅ Paciente creado');
    cargarPacientes();
    cerrarModal('modal-pac');
    abrirFicha(id);
    return;
  }
  cerrarModal('modal-pac');
  cargarPacientes();
}

async function abrirFicha(id) {
  const res = await fetch(`/api/pacientes/${id}`);
  pacienteActual = await res.json();
  navTo('page-ficha', null);
  renderFicha();
  cargarRutinas();
  // Reset tab
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-rutinas').classList.add('active');
  document.querySelectorAll('.tab-btn')[0].classList.add('active');
}

function renderFicha() {
  const p = pacienteActual;
  const inicial = p.nombre.charAt(0).toUpperCase();
  document.getElementById('ficha-avatar').textContent = inicial;
  document.getElementById('ficha-nombre').textContent = p.nombre;
  const meta = [p.edad ? `${p.edad} años` : null].filter(Boolean).join(' · ');
  document.getElementById('ficha-meta').textContent = meta || 'Sin datos adicionales';
  const tags = document.getElementById('ficha-tags');
  tags.innerHTML = '';
  if (p.objetivo) tags.innerHTML += `<span class="tag tag-obj">🎯 ${p.objetivo}</span>`;
  if (p.lesiones) tags.innerHTML += `<span class="tag tag-les">⚠️ ${p.lesiones}</span>`;
}

function editarPaciente() {
  editandoPacId = pacienteActual.id;
  document.getElementById('modal-pac-title').textContent = 'Editar paciente';
  document.getElementById('mp-nombre').value = pacienteActual.nombre || '';
  document.getElementById('mp-edad').value = pacienteActual.edad || '';
  document.getElementById('mp-obj').value = pacienteActual.objetivo || '';
  document.getElementById('mp-les').value = pacienteActual.lesiones || '';
  document.getElementById('mp-notas').value = pacienteActual.notas || '';
  abrirModal('modal-pac');
}

async function eliminarPaciente() {
  if (!confirm(`¿Eliminar a ${pacienteActual.nombre} y todas sus rutinas? Esta acción no se puede deshacer.`)) return;
  await fetch(`/api/pacientes/${pacienteActual.id}`, { method:'DELETE' });
  toast('🗑 Paciente eliminado');
  navTo('page-pacientes', document.querySelector('.topbar nav a'));
  cargarPacientes();
}

// ── RUTINAS ───────────────────────────────────────────────────────────────────
async function cargarRutinas() {
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`);
  const rutinas = await res.json();
  const el = document.getElementById('lista-rutinas');
  if (!rutinas.length) {
    el.innerHTML = `<div class="empty"><div class="empty-icon">📋</div><p>Este paciente no tiene rutinas todavía</p><button class="btn btn-primary" onclick="nuevaRutina()">＋ Crear primera rutina</button></div>`;
    return;
  }
  el.innerHTML = rutinas.map(r => `
    <div class="rutina-item" onclick="abrirRutina(${r.id})">
      <div class="ri-icon">📋</div>
      <div class="ri-info">
        <div class="ri-name">${r.nombre}</div>
        <div class="ri-meta">📅 ${formatFecha(r.fecha)} · Guardada ${formatFechaCorta(r.creado_en)}</div>
      </div>
      <div class="ri-actions" onclick="event.stopPropagation()">
        <button class="btn btn-sm" onclick="abrirRutina(${r.id})">✏️ Editar</button>
        <button class="btn btn-sm btn-danger" onclick="eliminarRutina(${r.id})">🗑</button>
      </div>
    </div>
  `).join('');
}

function nuevaRutina() {
  rutinaActual = null;
  sesState[1] = []; sesState[2] = []; sesState[3] = [];
  initSesiones();
  currentSes = 1;
  document.getElementById('rut-nombre').value = '';
  document.getElementById('rut-fecha').value = hoy();
  navTo('page-rutina', null);
  renderSesion();
  actualizarVolumen();
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===0));
}

async function abrirRutina(id) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  rutinaActual = r;
  // Cargar sesiones guardadas
  [1,2,3].forEach(s => {
    sesState[s] = r.sesiones[s] ? r.sesiones[s].map(row => ({...row})) : defaultFilas();
  });
  currentSes = 1;
  document.getElementById('rut-nombre').value = r.nombre;
  document.getElementById('rut-fecha').value = r.fecha;
  navTo('page-rutina', null);
  renderSesion();
  actualizarVolumen();
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===0));
}

async function guardarRutina() {
  const nombre = document.getElementById('rut-nombre').value.trim();
  const fecha = document.getElementById('rut-fecha').value;
  if (!nombre) { toast('⚠️ Poné un nombre a la rutina'); return; }
  if (!fecha) { toast('⚠️ Seleccioná una fecha'); return; }
  guardarSesActual();
  const sesiones = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  if (rutinaActual) {
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, sesiones })
    });
    toast('✅ Rutina actualizada');
  } else {
    const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, sesiones })
    });
    const { id } = await res.json();
    rutinaActual = { id, nombre, fecha, sesiones };
    toast('✅ Rutina guardada');
  }
}

async function eliminarRutina(id) {
  if (!confirm('¿Eliminar esta rutina?')) return;
  await fetch(`/api/rutinas/${id}`, { method:'DELETE' });
  toast('🗑 Rutina eliminada');
  cargarRutinas();
}

function volverFicha() {
  navTo('page-ficha', null);
  cargarRutinas();
}

// ── ARMADOR DE RUTINA ─────────────────────────────────────────────────────────
const COLS_SES_COLOR = ['','#2E75B6','#375623','#843C0C'];

function defaultFilas() {
  return BLOQUES_DEFAULT.map(b => ({ blq:b, met:'', cat:'', ej:'', ser:'', r1:'', r2:'', r3:'', kg1:'', kg2:'', obs:'' }));
}

function initSesiones() {
  [1,2,3].forEach(s => { if (!sesState[s].length) sesState[s] = defaultFilas(); });
}

function switchSes(s) {
  guardarSesActual();
  currentSes = s;
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===s-1));
  renderSesion();
}

function guardarSesActual() {
  const rows = document.querySelectorAll('#rut-tbody tr');
  rows.forEach((tr, i) => {
    if (!sesState[currentSes][i]) return;
    const r = sesState[currentSes][i];
    r.met = v(tr, '.inp-met');
    r.cat = v(tr, '.sel-cat');
    r.ej  = v(tr, '.sel-ej');
    r.ser = v(tr, '.inp-ser');
    r.r1  = v(tr, '.inp-r1');
    r.r2  = v(tr, '.inp-r2');
    r.r3  = v(tr, '.inp-r3');
    r.kg1 = v(tr, '.inp-kg1');
    r.kg2 = v(tr, '.inp-kg2');
    r.obs = v(tr, '.inp-obs');
  });
}

function v(tr, sel) { return tr.querySelector(sel)?.value || ''; }

function renderSesion() {
  const tbody = document.getElementById('rut-tbody');
  const color = COLS_SES_COLOR[currentSes];
  tbody.innerHTML = sesState[currentSes].map((r, i) => buildFila(r, i, color)).join('');
  actualizarVolumen();
}

function buildFila(r, i, color) {
  const catOpts = CATS.map(c => `<option value="${c}"${r.cat===c?' selected':''}>${c}</option>`).join('');
  const ejOpts = r.cat
    ? BANCO[r.cat].map(e => `<option value="${e}"${r.ej===e?' selected':''}>${e}</option>`).join('')
    : '';
  return `<tr>
    <td class="td-blq" style="color:${color}"><input class="inp-blq" value="${r.blq}" style="text-align:center;font-weight:700;font-size:10px;color:${color}"/></td>
    <td class="td-met"><input class="inp-met" value="${r.met}" placeholder="RDE"/></td>
    <td class="td-cat"><select class="sel-cat" onchange="onCatChange(this,${i})" style="background:#eaf4ea">
      <option value="">— Categoría —</option>${catOpts}
    </select></td>
    <td class="td-ej"><select class="sel-ej" style="background:#fffde7">
      <option value="">— Ejercicio —</option>${ejOpts}
    </select></td>
    <td><input class="inp-ser" value="${r.ser}" placeholder="3" style="text-align:center"/></td>
    <td><input class="inp-r1" value="${r.r1}" placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r2" value="${r.r2}" placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r3" value="${r.r3}" placeholder="10" style="text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg1" value="${r.kg1}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg2" value="${r.kg2}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td><input class="inp-obs" value="${r.obs}" placeholder="..."/></td>
    <td class="td-vid"><button class="btn-yt" onclick="openYT(${i})" ${r.ej?'':'disabled'} title="Ver en YouTube">▶</button></td>
    <td><button onclick="eliminarFila(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:13px" title="Eliminar fila">✕</button></td>
  </tr>`;
}

function onCatChange(sel, i) {
  guardarSesActual();
  sesState[currentSes][i].cat = sel.value;
  sesState[currentSes][i].ej = '';
  const tr = sel.closest('tr');
  const ejSel = tr.querySelector('.sel-ej');
  const opts = sel.value
    ? BANCO[sel.value].map(e => `<option value="${e}">${e}</option>`).join('')
    : '';
  ejSel.innerHTML = `<option value="">— Ejercicio —</option>${opts}`;
  actualizarVolumen();
}

function openYT(i) {
  guardarSesActual();
  const ej = sesState[currentSes][i]?.ej;
  if (!ej) return;
  window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent(ej + ' ejercicio tecnica'), '_blank');
}

function agregarFila() {
  guardarSesActual();
  sesState[currentSes].push({ blq:'', met:'', cat:'', ej:'', ser:'', r1:'', r2:'', r3:'', kg1:'', kg2:'', obs:'' });
  renderSesion();
}

function eliminarFila(i) {
  guardarSesActual();
  sesState[currentSes].splice(i, 1);
  if (!sesState[currentSes].length) sesState[currentSes] = defaultFilas();
  renderSesion();
}

function limpiarSes() {
  if (!confirm(`¿Limpiar sesión ${currentSes}?`)) return;
  sesState[currentSes] = defaultFilas();
  renderSesion();
}

function actualizarVolumen() {
  guardarSesActual();
  const counts = {};
  [1,2,3].forEach(s => {
    sesState[s].forEach(r => {
      const short = CAT_SHORT[r.cat];
      if (!short || !r.ser) return;
      const n = parseInt(r.ser) || 0;
      counts[short] = (counts[short] || 0) + n;
    });
  });
  const grid = document.getElementById('vol-grid');
  const activos = GRUPOS.filter(([,c]) => counts[c] > 0);
  if (!activos.length) {
    grid.innerHTML = '<p style="color:var(--muted);font-size:12px">El resumen aparece al cargar series y categorías.</p>';
    return;
  }
  grid.innerHTML = activos.map(([g,c]) => `
    <div class="vol-card">
      <div class="vg">${g}</div>
      <div class="vn">${counts[c]}</div>
      <div class="vl">series totales</div>
    </div>
  `).join('');
}

// ── EVOLUCIÓN DE CARGAS ───────────────────────────────────────────────────────
async function cargarSelectEjercicios() {
  // Populamos con todos los ejercicios del banco para buscar
  const sel = document.getElementById('carga-ej');
  const actual = sel.value;
  sel.innerHTML = '<option value="">— Elegí ejercicio —</option>';

  // Primero los que ya tienen registros
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/ejercicios-con-cargas`);
  const conCargas = await res.json();

  if (conCargas.length) {
    const grp = document.createElement('optgroup');
    grp.label = '📊 Con historial';
    conCargas.forEach(e => {
      const o = document.createElement('option');
      o.value = e; o.textContent = e;
      grp.appendChild(o);
    });
    sel.appendChild(grp);
  }

  // Luego todos del banco
  CATS.forEach(cat => {
    const grp = document.createElement('optgroup');
    grp.label = cat;
    BANCO[cat].forEach(e => {
      if (conCargas.includes(e)) return; // ya está arriba
      const o = document.createElement('option');
      o.value = e; o.textContent = e;
      grp.appendChild(o);
    });
    sel.appendChild(grp);
  });

  if (actual) { sel.value = actual; cargarHistorialCarga(); }
  document.getElementById('carga-fecha').value = hoy();
}

async function cargarHistorialCarga() {
  const ej = document.getElementById('carga-ej').value;
  document.getElementById('carga-ej-label').textContent = ej || 'seleccioná un ejercicio';
  if (!ej) { renderChartVacio(); document.getElementById('carga-hist').innerHTML=''; return; }

  const res = await fetch(`/api/pacientes/${pacienteActual.id}/cargas?ejercicio=${encodeURIComponent(ej)}`);
  const cargas = await res.json();
  renderChart(cargas);
  renderHistorial(cargas);
}

function renderChart(cargas) {
  const ctx = document.getElementById('chart-cargas').getContext('2d');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  if (!cargas.length) { renderChartVacio(); return; }
  const labels = cargas.map(c => formatFechaCorta(c.fecha));
  const data = cargas.map(c => c.kg);
  chartInstance = new Chart(ctx, {
    type:'line',
    data:{
      labels,
      datasets:[{
        label:'Kg',
        data,
        borderColor:'#2E75B6',
        backgroundColor:'rgba(46,117,182,.1)',
        pointBackgroundColor:'#2E75B6',
        pointRadius:5,
        tension:.3,
        fill:true
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ color:'#f0f0f0' }, ticks:{ font:{ size:11 } } },
        y:{ grid:{ color:'#f0f0f0' }, ticks:{ font:{ size:11 } }, beginAtZero:false }
      }
    }
  });
}

function renderChartVacio() {
  const ctx = document.getElementById('chart-cargas').getContext('2d');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function renderHistorial(cargas) {
  const el = document.getElementById('carga-hist');
  if (!cargas.length) {
    el.innerHTML = '<p style="color:var(--muted);font-size:12px;padding:10px 0">Sin registros todavía. Agregá el primero arriba.</p>';
    return;
  }
  el.innerHTML = [...cargas].reverse().map(c => `
    <div class="carga-row">
      <span class="cr-fecha">${formatFechaCorta(c.fecha)}</span>
      <span class="cr-kg">${c.kg ? c.kg+'kg' : '—'}</span>
      <span class="cr-extra">${[c.reps?c.reps+' reps':'', c.rir?'RIR '+c.rir:'', c.notas].filter(Boolean).join(' · ') || ''}</span>
      <span class="cr-del" onclick="eliminarCarga(${c.id})" title="Eliminar">✕</span>
    </div>
  `).join('');
}

async function guardarCarga() {
  const ej = document.getElementById('carga-ej').value;
  const fecha = document.getElementById('carga-fecha').value;
  const kg = document.getElementById('carga-kg').value;
  if (!ej) { toast('⚠️ Seleccioná un ejercicio'); return; }
  if (!fecha) { toast('⚠️ Seleccioná una fecha'); return; }
  await fetch(`/api/pacientes/${pacienteActual.id}/cargas`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ ejercicio:ej, fecha, kg:kg||null,
      reps: document.getElementById('carga-reps').value,
      rir: document.getElementById('carga-rir').value })
  });
  document.getElementById('carga-kg').value = '';
  document.getElementById('carga-reps').value = '';
  document.getElementById('carga-rir').value = '';
  toast('✅ Carga registrada');
  cargarHistorialCarga();
  cargarSelectEjercicios();
}

async function eliminarCarga(id) {
  if (!confirm('¿Eliminar este registro?')) return;
  await fetch(`/api/cargas/${id}`, { method:'DELETE' });
  toast('🗑 Registro eliminado');
  cargarHistorialCarga();
}

// ── UTILS ─────────────────────────────────────────────────────────────────────
function hoy() { return new Date().toISOString().split('T')[0]; }

function formatFecha(str) {
  if (!str) return '—';
  const d = new Date(str.includes('T') ? str : str + 'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short', year:'numeric' });
}
function formatFechaCorta(str) {
  if (!str) return '—';
  const d = new Date(str.includes('T') ? str : str + 'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short' });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
cargarPacientes();

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
});
