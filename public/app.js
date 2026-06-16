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

let pacienteActual = null;
let rutinaActual = null;
let editandoPacId = null;
let currentSes = 1;
const sesState = {1:[], 2:[], 3:[]};
let chartInstance = null;

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

function toast(msg, dur=2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

function abrirModal(id) { document.getElementById(id).classList.add('open'); }
function cerrarModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

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
    cerrarModal('modal-pac');
    cargarPacientes();
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
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-rutinas').classList.add('active');
  document.querySelectorAll('.tab-btn')[0].classList.add('active');
}

function renderFicha() {
  const p = pacienteActual;
  document.getElementById('ficha-avatar').textContent = p.nombre.charAt(0).toUpperCase();
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
  if (!confirm(`¿Eliminar a ${pacienteActual.nombre} y todas sus rutinas?`)) return;
  await fetch(`/api/pacientes/${pacienteActual.id}`, { method:'DELETE' });
  toast('🗑 Paciente eliminado');
  navTo('page-pacientes', document.querySelector('.topbar nav a'));
  cargarPacientes();
}

async function cargarRutinas() {
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`);
  const rutinas = await res.json();
  const el = document.getElementById('lista-rutinas');
  if (!rutinas.length) {
    el.innerHTML = `<div class="empty"><div class="empty-icon">📋</div><p>Este paciente no tiene rutinas todavía</p><button class="btn btn-primary" onclick="nuevaRutina()">＋ Crear primera rutina</button></div>`;
    return;
  }
  el.innerHTML = rutinas.map(r => `
    <div class="rutina-item">
      <div class="ri-icon">📋</div>
      <div class="ri-info" onclick="abrirRutina(${r.id})" style="cursor:pointer;flex:1">
        <div class="ri-name">${r.nombre}</div>
        <div class="ri-meta">📅 ${formatFecha(r.fecha)}</div>
      </div>
      <div class="ri-actions">
        <button class="btn btn-sm" onclick="abrirRutina(${r.id})">✏️ Editar</button>
        <button class="btn btn-sm" onclick="descargarPDFById(${r.id},'${r.nombre}')">📄 PDF</button>
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
  if (!fecha)  { toast('⚠️ Seleccioná una fecha'); return; }
  guardarSesActual();
  const sesiones = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  if (rutinaActual) {
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, sesiones })
    });
    rutinaActual = { ...rutinaActual, nombre, fecha, sesiones };
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
  document.querySelectorAll('#rut-tbody tr').forEach((tr, i) => {
    if (!sesState[currentSes][i]) return;
    const r = sesState[currentSes][i];
    r.blq = v(tr,'.inp-blq'); r.met = v(tr,'.inp-met');
    r.cat = v(tr,'.sel-cat'); r.ej  = v(tr,'.sel-ej');
    r.ser = v(tr,'.inp-ser'); r.r1  = v(tr,'.inp-r1');
    r.r2  = v(tr,'.inp-r2'); r.r3  = v(tr,'.inp-r3');
    r.kg1 = v(tr,'.inp-kg1'); r.kg2 = v(tr,'.inp-kg2');
    r.obs = v(tr,'.inp-obs');
  });
}

function v(tr, sel) { return tr.querySelector(sel)?.value || ''; }

function renderSesion() {
  const color = COLS_SES_COLOR[currentSes];
  document.getElementById('rut-tbody').innerHTML =
    sesState[currentSes].map((r, i) => buildFila(r, i, color)).join('');
  actualizarVolumen();
}

function buildFila(r, i, color) {
  const catOpts = CATS.map(c => `<option value="${c}"${r.cat===c?' selected':''}>${c}</option>`).join('');
  const ejOpts = r.cat ? BANCO[r.cat].map(e => `<option value="${e}"${r.ej===e?' selected':''}>${e}</option>`).join('') : '';
  return `<tr>
    <td class="td-blq"><input class="inp-blq" value="${r.blq}" style="text-align:center;font-weight:700;font-size:10px;color:${color}"/></td>
    <td class="td-met"><input class="inp-met" value="${r.met}" placeholder="RDE"/></td>
    <td class="td-cat"><select class="sel-cat" onchange="onCatChange(this,${i})" style="background:#eaf4ea"><option value="">— Categoría —</option>${catOpts}</select></td>
    <td class="td-ej"><select class="sel-ej" style="background:#fffde7"><option value="">— Ejercicio —</option>${ejOpts}</select></td>
    <td><input class="inp-ser" value="${r.ser}" placeholder="3" style="text-align:center"/></td>
    <td><input class="inp-r1"  value="${r.r1}"  placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r2"  value="${r.r2}"  placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r3"  value="${r.r3}"  placeholder="10" style="text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg1" value="${r.kg1}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg2" value="${r.kg2}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td><input class="inp-obs" value="${r.obs}" placeholder="..."/></td>
    <td class="td-vid"><button class="btn-yt" onclick="openYT(${i})" ${r.ej?'':'disabled'}>▶</button></td>
    <td><button onclick="eliminarFila(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:13px">✕</button></td>
  </tr>`;
}

function onCatChange(sel, i) {
  guardarSesActual();
  sesState[currentSes][i].cat = sel.value;
  sesState[currentSes][i].ej = '';
  const ejSel = sel.closest('tr').querySelector('.sel-ej');
  ejSel.innerHTML = `<option value="">— Ejercicio —</option>${
    sel.value ? BANCO[sel.value].map(e=>`<option value="${e}">${e}</option>`).join('') : ''
  }`;
  actualizarVolumen();
}

function openYT(i) {
  guardarSesActual();
  const ej = sesState[currentSes][i]?.ej;
  if (!ej) return;
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(ej+' ejercicio tecnica'),'_blank');
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
      counts[short] = (counts[short]||0) + (parseInt(r.ser)||0);
    });
  });
  const grid = document.getElementById('vol-grid');
  const activos = GRUPOS.filter(([,c]) => counts[c] > 0);
  grid.innerHTML = activos.length
    ? activos.map(([g,c]) => `<div class="vol-card"><div class="vg">${g}</div><div class="vn">${counts[c]}</div><div class="vl">series</div></div>`).join('')
    : '<p style="color:var(--muted);font-size:12px">Completá series y categorías para ver el resumen.</p>';
}

// ── PDF ───────────────────────────────────────────────────────────────────────
function generarPDFActual() {
  guardarSesActual();
  const nombre = document.getElementById('rut-nombre').value || 'Rutina';
  const fecha  = document.getElementById('rut-fecha').value || hoy();
  const sesiones = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  generarPDF(pacienteActual, nombre, fecha, sesiones);
}

async function descargarPDFById(id, nombre) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  generarPDF(pacienteActual, r.nombre, r.fecha, r.sesiones);
}

function generarPDF(paciente, nombreRutina, fecha, sesiones) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  const W = 210, H = 297, ML = 12, MR = 12, MT = 12;
  const CW = W - ML - MR;
  let y = MT;

  const SES_COLORS = [
    { h:[46,117,182],  light:[234,240,251] },
    { h:[55,86,35],    light:[234,244,234] },
    { h:[132,60,12],   light:[253,240,232] },
  ];

  // HEADER
  doc.setFillColor(28,28,30);
  doc.roundedRect(ML, y, CW, 18, 3, 3, 'F');
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.setTextColor(255,255,255);
  doc.text('KINE HOUSE', ML+5, y+7);
  doc.setFont('helvetica','normal');
  doc.setFontSize(7);
  doc.setTextColor(170,170,170);
  doc.text('Sistema de Rutinas', ML+5, y+12);

  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.setTextColor(255,255,255);
  doc.text(paciente.nombre.toUpperCase(), W/2, y+8, {align:'center'});
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(200,200,200);
  doc.text(`${paciente.edad ? paciente.edad+' años  ·  ':''} Lic. Julian Gaffet — M.P. 1321`, W/2, y+13, {align:'center'});
  doc.setFontSize(8);
  doc.setTextColor(200,200,200);
  doc.text(`${formatFecha(fecha)}`, W-MR-3, y+8, {align:'right'});
  doc.text(nombreRutina, W-MR-3, y+13, {align:'right'});
  y += 22;

  if (paciente.objetivo || paciente.lesiones) {
    doc.setFillColor(234,240,251);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','normal');
    doc.setFontSize(8);
    doc.setTextColor(28,28,30);
    let info = '';
    if (paciente.objetivo) info += `Objetivo: ${paciente.objetivo}   `;
    if (paciente.lesiones) info += `Lesiones: ${paciente.lesiones}`;
    doc.text(info, ML+4, y+5);
    y += 11;
  }

  // SESIONES
  [1,2,3].forEach(si => {
    const filas = (sesiones[si]||[]).filter(r => r.ej && r.ej.trim());
    if (!filas.length) return;
    const sc = SES_COLORS[(si-1) % SES_COLORS.length];

    if (y + 10 + filas.length * 7 > H - 15) { doc.addPage(); y = MT; }

    doc.setFillColor(...sc.h);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.setTextColor(255,255,255);
    doc.text(`SESIÓN ${si}`, ML+4, y+5.5);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(220,220,220);
    doc.text('Click en el ejercicio para ver el video en YouTube', W-MR-3, y+5.5, {align:'right'});
    y += 10;

    const cols = [
      {label:'BLQ', w:8, align:'center'},
      {label:'EJERCICIO', w:62, align:'left'},
      {label:'SER.', w:10, align:'center'},
      {label:'REPS', w:16, align:'center'},
      {label:'KG/RIR S1', w:20, align:'center'},
      {label:'KG/RIR S2', w:20, align:'center'},
      {label:'OBS.', w:CW-136, align:'left'},
    ];

    doc.setFillColor(58,58,60);
    doc.rect(ML, y, CW, 6, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(7);
    doc.setTextColor(255,255,255);
    let xc = ML;
    cols.forEach(c => {
      if (c.align==='center') doc.text(c.label, xc+c.w/2, y+4, {align:'center'});
      else doc.text(c.label, xc+2, y+4);
      xc += c.w;
    });
    y += 6;

    filas.forEach((r, ri) => {
      if (y + 7 > H - 15) { doc.addPage(); y = MT; }
      const bg = ri%2===0 ? sc.light : [255,255,255];
      doc.setFillColor(...bg);
      doc.rect(ML, y, CW, 6.5, 'F');
      doc.setDrawColor(210,220,235);
      doc.setLineWidth(0.2);
      doc.line(ML, y+6.5, ML+CW, y+6.5);

      xc = ML;
      doc.setFont('helvetica','bold');
      doc.setFontSize(8);
      doc.setTextColor(...sc.h);
      doc.text(r.blq||'', xc+cols[0].w/2, y+4.5, {align:'center'});
      xc += cols[0].w;

      const ejNombre = r.ej || '';
      const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ejNombre + ' ejercicio tecnica');
      doc.setFont('helvetica','normal');
      doc.setFontSize(8.5);
      doc.setTextColor(46,117,182);
      let ejLabel = ejNombre;
      while (doc.getTextWidth(ejLabel) > cols[1].w - 3 && ejLabel.length > 5) ejLabel = ejLabel.slice(0,-1);
      if (ejLabel !== ejNombre) ejLabel += '…';
      doc.textWithLink(ejLabel, xc+1, y+4.5, { url: ytUrl });
      doc.setDrawColor(46,117,182);
      doc.setLineWidth(0.15);
      doc.line(xc+1, y+5.2, xc+1+doc.getTextWidth(ejLabel), y+5.2);
      xc += cols[1].w;

      const resto = [r.ser||'', r.r1||'', r.kg1||'', r.kg2||'', r.obs||''];
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(28,28,30);
      [2,3,4,5,6].forEach((ci, i) => {
        const col = cols[ci];
        const txt = String(resto[i]);
        if (col.align==='center') doc.text(txt, xc+col.w/2, y+4.5, {align:'center'});
        else doc.text(txt.substring(0,18), xc+2, y+4.5);
        xc += col.w;
      });

      doc.setDrawColor(210,220,235);
      let xl = ML + cols[0].w;
      for(let ci=1; ci<cols.length-1; ci++){ doc.line(xl, y, xl, y+6.5); xl += cols[ci].w; }
      y += 6.5;
    });

    doc.setDrawColor(180,200,220);
    doc.setLineWidth(0.3);
    const tablaH = 6 + filas.length * 6.5;
    doc.rect(ML, y - tablaH, CW, tablaH);
    y += 5;
  });

  if (y + 10 < H - 8) {
    doc.setDrawColor(210,220,235);
    doc.setLineWidth(0.3);
    doc.line(ML, y, ML+CW, y);
    y += 4;
    doc.setFont('helvetica','italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100,100,100);
    doc.text('Los nombres de los ejercicios son hipervinculos — hace click para ver el video de tecnica en YouTube.', ML, y);
    y += 4;
    doc.setTextColor(160,160,160);
    doc.text(`Kine House  ·  Generado el ${new Date().toLocaleDateString('es-AR')}`, ML, y);
  }

  const totalPages = doc.internal.getNumberOfPages();
  for(let i=1; i<=totalPages; i++){
    doc.setPage(i);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(160,160,160);
    doc.text(`${i} / ${totalPages}`, W-MR, H-6, {align:'right'});
  }

  doc.save(`rutina_${paciente.nombre.replace(/\s+/g,'_')}_${nombreRutina.replace(/\s+/g,'_')}.pdf`);
  toast('📄 PDF descargado');
}

// ── CARGAS ────────────────────────────────────────────────────────────────────
async function cargarSelectEjercicios() {
  const sel = document.getElementById('carga-ej');
  const actual = sel.value;
  sel.innerHTML = '<option value="">— Elegí ejercicio —</option>';
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/ejercicios-con-cargas`);
  const conCargas = await res.json();
  if (conCargas.length) {
    const grp = document.createElement('optgroup');
    grp.label = '📊 Con historial';
    conCargas.forEach(e => { const o=document.createElement('option'); o.value=e; o.textContent=e; grp.appendChild(o); });
    sel.appendChild(grp);
  }
  CATS.forEach(cat => {
    const grp = document.createElement('optgroup');
    grp.label = cat;
    BANCO[cat].forEach(e => {
      if (conCargas.includes(e)) return;
      const o=document.createElement('option'); o.value=e; o.textContent=e; grp.appendChild(o);
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
  chartInstance = new Chart(ctx, {
    type:'line',
    data:{ labels: cargas.map(c=>formatFechaCorta(c.fecha)),
      datasets:[{ label:'Kg', data:cargas.map(c=>c.kg), borderColor:'#2E75B6',
        backgroundColor:'rgba(46,117,182,.1)', pointBackgroundColor:'#2E75B6',
        pointRadius:5, tension:.3, fill:true }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
      scales:{ x:{grid:{color:'#f0f0f0'},ticks:{font:{size:11}}},
               y:{grid:{color:'#f0f0f0'},ticks:{font:{size:11}},beginAtZero:false} } }
  });
}

function renderChartVacio() {
  const ctx = document.getElementById('chart-cargas').getContext('2d');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

function renderHistorial(cargas) {
  const el = document.getElementById('carga-hist');
  if (!cargas.length) { el.innerHTML='<p style="color:var(--muted);font-size:12px;padding:10px 0">Sin registros todavía.</p>'; return; }
  el.innerHTML = [...cargas].reverse().map(c=>`
    <div class="carga-row">
      <span class="cr-fecha">${formatFechaCorta(c.fecha)}</span>
      <span class="cr-kg">${c.kg?c.kg+'kg':'—'}</span>
      <span class="cr-extra">${[c.reps?c.reps+' reps':'',c.rir?'RIR '+c.rir:'',c.notas].filter(Boolean).join(' · ')||''}</span>
      <span class="cr-del" onclick="eliminarCarga(${c.id})" title="Eliminar">✕</span>
    </div>`).join('');
}

async function guardarCarga() {
  const ej = document.getElementById('carga-ej').value;
  const fecha = document.getElementById('carga-fecha').value;
  const kg = document.getElementById('carga-kg').value;
  if (!ej)    { toast('⚠️ Seleccioná un ejercicio'); return; }
  if (!fecha) { toast('⚠️ Seleccioná una fecha'); return; }
  await fetch(`/api/pacientes/${pacienteActual.id}/cargas`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ ejercicio:ej, fecha, kg:kg||null,
      reps: document.getElementById('carga-reps').value,
      rir:  document.getElementById('carga-rir').value })
  });
  document.getElementById('carga-kg').value='';
  document.getElementById('carga-reps').value='';
  document.getElementById('carga-rir').value='';
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
  const d = new Date(str.includes('T') ? str : str+'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short', year:'numeric' });
}
function formatFechaCorta(str) {
  if (!str) return '—';
  const d = new Date(str.includes('T') ? str : str+'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short' });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
cargarPacientes();
document.addEventListener('keydown', e => {
  if (e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
});
