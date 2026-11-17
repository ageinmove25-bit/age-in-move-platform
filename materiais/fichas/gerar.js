// Gera as fichas de atividade (PDF A4) a partir dos ficheiros desta pasta.
// Uso: node fichas/gerar.js [slug]   (a partir da pasta materiais/)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'pdf');
const FONTS = path.join(ROOT, 'node_modules', '@fontsource');
const font = (fam, file) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(FONTS, fam, 'files', file)).toString('base64');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LARANJA = '#FF6200';
const FICHAS = fs.readdirSync(__dirname).filter(f => f !== 'gerar.js' && f.endsWith('.js')).map(f => require(path.join(__dirname, f)));

// Face de dado desenhada em SVG
const PONTOS = { 1: [[50, 50]], 2: [[27, 27], [73, 73]], 3: [[25, 25], [50, 50], [75, 75]], 4: [[27, 27], [73, 27], [27, 73], [73, 73]], 5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]], 6: [[27, 22], [73, 22], [27, 50], [73, 50], [27, 78], [73, 78]] };
const dado = (n, cor, size) => `<svg width="${size}" height="${size}" viewBox="0 0 100 100"><rect x="4" y="4" width="92" height="92" rx="18" fill="${cor}" stroke="#1F2937" stroke-width="3"/>${PONTOS[n].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="#fff"/>`).join('')}</svg>`;

const NIVEIS = [
  { k: 'n1', nome: 'Nível 1 · Mais apoio', cor: '#047857', fundo: '#ECFDF5' },
  { k: 'n2', nome: 'Nível 2 · Algum apoio', cor: '#B45309', fundo: '#FFFBEB' },
  { k: 'n3', nome: 'Nível 3 · Autónomos', cor: '#1D4ED8', fundo: '#EFF6FF' }
];

const css = f => `
@font-face{font-family:Nunito;font-weight:400;src:url(${font('nunito', 'nunito-latin-400-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:700;src:url(${font('nunito', 'nunito-latin-700-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:800;src:url(${font('nunito', 'nunito-latin-800-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:700;src:url(${font('fraunces', 'fraunces-latin-700-normal.woff2')})}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
:root{--c:${f.cor};--cl:${f.corClara};--ce:${f.corEscura};--ink:#1F2937;--muted:#6B7280;--line:#E5E7EB}
body{font-family:Nunito,sans-serif;color:var(--ink);font-size:11.5pt;line-height:1.45}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:15mm 16mm 20mm}
.page:last-child{page-break-after:auto}
h1,h2,h3{font-family:Fraunces,serif;font-weight:700;line-height:1.12;color:var(--ce)}
h1{font-size:32pt;margin-bottom:2mm}
h3{font-size:13pt;margin:4mm 0 2mm}
.kicker{text-transform:uppercase;letter-spacing:.14em;font-size:9pt;font-weight:800;color:var(--c);margin-bottom:1.5mm}
.lead{font-size:12pt;color:#374151;margin-bottom:3mm}
.foot{position:absolute;left:16mm;right:16mm;bottom:9mm;display:flex;justify-content:space-between;font-size:8.5pt;color:var(--muted)}
.foot b{color:${LARANJA}}
.info{display:grid;grid-template-columns:1fr 1fr 1.5fr;gap:3mm;margin-bottom:4mm}
.info div{background:#F9FAFB;border:1px solid var(--line);border-radius:3mm;padding:2.2mm 3mm}
.info small{display:block;font-size:7.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:800}
.info b{font-size:10.5pt}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:4mm}
.box{border:1.5px solid var(--line);border-radius:4mm;padding:3.5mm 4.5mm;font-size:10.5pt}
.box h3{margin-top:0}
ul.dots{list-style:none}
ul.dots li{padding-left:5.5mm;position:relative;margin-bottom:1.4mm}
ul.dots li:before{content:'';position:absolute;left:0;top:2.1mm;width:2.4mm;height:2.4mm;border-radius:50%;background:var(--c)}
.steps{width:100%;border-collapse:separate;border-spacing:0 1.4mm}
.steps td{vertical-align:top;padding:2.3mm 3.5mm;font-size:10.8pt}
.steps td.n{width:9mm;padding:2.3mm 0 0}
.steps td.n span{display:flex;width:7mm;height:7mm;border-radius:50%;background:var(--c);color:#fff;font-weight:800;font-size:10pt;align-items:center;justify-content:center}
.steps td.faz{width:72mm;background:#F9FAFB;border-radius:3mm 0 0 3mm}
.steps td.diz{background:var(--cl);border-radius:0 3mm 3mm 0;font-style:italic;color:var(--ce)}
.steps th{text-align:left;font-size:8pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);padding:0 3.5mm}
.lv3{display:grid;grid-template-columns:repeat(3,1fr);gap:3mm}
.lv3 div{border-radius:3.5mm;padding:4mm;font-size:11pt;line-height:1.45}
.lv3 b{display:block;font-size:8.5pt;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.2mm}
.warn{display:grid;grid-template-columns:1fr 1fr;gap:3mm;margin-top:3mm}
.warn div{border-radius:3.5mm;padding:4mm 4.5mm;font-size:11pt}
.warn .a{background:#FEF2F2}.warn .a b{color:#B91C1C}
.warn .s{background:#F5F3FF}.warn .s b{color:#6D28D9}
.warn b{display:block;font-size:8.5pt;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1mm}
/* tabuleiros */
table.reg{width:100%;border-collapse:collapse;font-size:10pt;margin-top:1mm}table.reg th{background:var(--c);color:#fff;text-align:left;padding:2mm 2.5mm}table.reg td{border:1px solid var(--line);height:10mm}
.board{padding:14mm 14mm 18mm;display:flex;flex-direction:column}
.board .frame{flex:1;border:5mm solid var(--c);border-radius:8mm;padding:9mm 11mm;display:flex;flex-direction:column}
.board h2{font-size:38pt;text-align:center;color:var(--ce);margin-bottom:2mm;letter-spacing:.02em}
.board .sub{text-align:center;font-size:14pt;color:var(--muted);margin-bottom:6mm}
.rows{flex:1;display:flex;flex-direction:column;justify-content:space-between}
.row{display:flex;align-items:center;gap:8mm}
.row .t{font-size:27pt;font-weight:800;line-height:1.1}
.row .d{font-size:13.5pt;color:#374151;margin-top:1mm}
.row .e{display:inline-block;margin-top:1.5mm;font-size:10pt;font-weight:700;color:var(--c);background:var(--cl);border-radius:10mm;padding:.5mm 3mm}
.cards{flex:1;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,1fr);gap:6mm}
.card{border:1.5px solid var(--line);border-radius:6mm;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4mm;color:var(--c);background:#fff}
.card .art{width:36mm;height:36mm}
.card .nm{margin-top:3mm;font-size:19pt;font-weight:800;color:var(--ink);text-align:center;line-height:1.1}
.card .letra{font-family:Nunito,sans-serif;font-weight:800;font-size:120pt;line-height:1;color:var(--c)}
.row.pas .fig{width:52mm;height:52mm;flex:none}
.row.pas .e{font-size:12pt}
.lembrar{margin-top:5mm;background:var(--cl);border-radius:4mm;padding:4mm 5mm;font-size:14pt;color:var(--ce);text-align:center}
.board .foot{bottom:6mm;left:14mm;right:14mm}
`;

function build(f) {
  let pg = 1;
  const foot = () => `<div class="foot"><span><b>Age in Move</b> · Ficha de atividade · ${esc(f.titulo)}</span><span><b>${pg}</b></span></div>`;
  const pages = [];
  pages.push(`<section class="page">
    <div class="kicker">${esc(f.kicker || "Ficha de atividade · jogo de grupo · sentados")}</div><h1>${esc(f.titulo)}</h1>
    <p class="lead">${esc(f.paraQue)}</p>
    <div class="info"><div><small>Duração</small><b>${esc(f.duracao)}</b></div><div><small>Grupo</small><b>${esc(f.grupo)}</b></div><div><small>Custo</small><b>${esc(f.custo)}</b></div></div>
    <div class="grid2"><div class="box"><h3>Materiais</h3><ul class="dots">${f.materiais.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div>
    <div class="box"><h3>Preparar antes</h3><ul class="dots">${f.preparar.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div></div>
    <h3>Passo a passo</h3>
    <table class="steps"><tr><th></th><th>O que faz</th><th>O que diz</th></tr>
    ${f.passos.map((p, j) => `<tr><td class="n"><span>${j + 1}</span></td><td class="faz">${esc(p.faz)}</td><td class="diz">"${esc(p.diz)}"</td></tr>`).join('')}</table>
    ${foot()}</section>`);
  pg++;
  pages.push(`<section class="page">
    <div class="kicker">${esc(f.titulo)} · continuação</div>
    <h3 style="margin-top:0">Adaptar a cada pessoa</h3>
    <div class="lv3">${NIVEIS.map(n => `<div style="background:${n.fundo}"><b style="color:${n.cor}">${n.nome}</b>${esc(f.niveis[n.k])}</div>`).join('')}</div>
    <div class="warn"><div class="a"><b>Atenção</b>${esc(f.atencao)}</div><div class="s"><b>Se não correr bem</b>${esc(f.seCorrerMal)}</div></div>
    ${f.variantes ? `<h3>Variantes</h3><ul class="dots">${f.variantes.map(v => `<li>${esc(v)}</li>`).join('')}</ul>` : ''}
    ${f.registo ? `<h3>Registo rápido</h3><table class="reg"><tr><th>Data</th><th>Nº de pessoas</th><th>Nível</th><th>${f.exercicios ? 'Exercícios que saíram' : f.cartoesPassos ? 'Passos e segundos' : 'Movimentos feitos'}</th><th>Observações</th></tr>${'<tr><td></td><td></td><td></td><td></td><td></td></tr>'.repeat(4)}</table>` : ''}
    ${foot()}</section>`);
  pg++;
  if (f.exercicios) {
    pages.push(`<section class="page board"><div class="frame">
    <h2>LANÇA O DADO!</h2><div class="sub">Dado dos Exercícios · tudo sentado</div>
    <div class="rows">${f.exercicios.map(e => `<div class="row">${dado(e.n, e.cor, 118)}<div><div class="t">${esc(e.nome)}</div><div class="d">${esc(e.como)}</div>${e.elastico !== 'Sem elástico' ? `<span class="e">${esc(e.elastico)}</span>` : ''}</div></div>`).join('')}</div>
    </div>${foot()}</section>`);
    pg++;
  }
  if (f.palavras) {
    pages.push(`<section class="page board" style="--c:#7C3AED;--cl:#EDE9FE;--ce:#4C1D95"><div class="frame">
    <h2>DADO DAS PALAVRAS</h2><div class="sub">Diga uma palavra a cada repetição do exercício</div>
    <div class="rows">${f.palavras.map(e => `<div class="row">${dado(e.n, e.cor, 118)}<div><div class="t">${esc(e.t)}</div></div></div>`).join('')}</div>
    </div>${foot()}</section>`);
    pg++;
  }
  if (f.cartoesPassos) {
    const c = f.cartoesPassos;
    pages.push(`<section class="page board"><div class="frame">
    <h2>${esc(c.titulo)}</h2><div class="sub">${esc(c.sub)}</div>
    <div class="rows">${c.itens.map(it => `<div class="row pas"><div class="fig" style="color:var(--c)">${it.svg}</div><div><div class="t">${esc(it.nome)}</div><div class="d">${esc(it.desc)}</div><span class="e">⏱ ${esc(it.tempo)}</span></div></div>`).join('')}</div>
    <div class="lembrar"><b>Lembrar sempre:</b> ${c.lembrar.map(esc).join(' · ')}</div>
    </div>${foot()}</section>`);
    pg++;
  }
  for (const c of f.cartoes || []) {
    const cards = c.itens
      ? c.itens.map(it => `<div class="card"><div class="art">${it.svg}</div><div class="nm">${esc(it.nome)}</div></div>`).join('')
      : c.letras.map(l => `<div class="card"><div class="letra">${esc(l)}</div></div>`).join('');
    pages.push(`<section class="page board"><div class="frame">
    <h2>${esc(c.titulo)}</h2><div class="sub">${esc(c.sub)}</div>
    <div class="cards">${cards}</div>
    </div>${foot()}</section>`);
    pg++;
  }
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>${esc(f.titulo)} — Age in Move</title><style>${css(f)}</style></head><body>${pages.join('\n')}</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const f of FICHAS) {
    if (process.argv[2] && f.slug !== process.argv[2]) continue;
    await page.setContent(build(f), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const over = await page.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => [i + 1, p.scrollHeight - p.clientHeight]).filter(x => x[1] > 1));
    if (over.length) console.warn(`  ⚠ ${f.slug}: páginas com overflow`, over);
    const file = path.join(OUT, `${f.slug}.pdf`);
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.relative(ROOT, file));
  }
  await browser.close();
})();
