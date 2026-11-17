// Gera volumes (ebooks) juntando fichas já geradas: capa + introdução + índice + fichas.
// Uso: node volumes/gerar.js [slug]   (a partir da pasta materiais/; corre primeiro node fichas/gerar.js)
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const VOLS = require('./colecoes');
const ROOT = path.join(__dirname, '..'), OUT = path.join(__dirname, 'pdf'), FICHAS = path.join(ROOT, 'fichas');
const FONTS = path.join(ROOT, 'node_modules', '@fontsource');
const font = (fam, file) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(FONTS, fam, 'files', file)).toString('base64');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const paginas = f => +execFileSync('pdfinfo', [f]).toString().match(/Pages:\s+(\d+)/)[1];

function html(v, entradas) {
  const css = `@font-face{font-family:Nunito;font-weight:400;src:url(${font('nunito', 'nunito-latin-400-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:800;src:url(${font('nunito', 'nunito-latin-800-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:700;src:url(${font('fraunces', 'fraunces-latin-700-normal.woff2')})}
@page{size:A4;margin:0}*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Nunito,sans-serif;color:#1F2937;font-size:12pt;line-height:1.5}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:18mm 18mm 20mm}
h1,h2,h3{font-family:Fraunces,serif;color:${v.corEscura};line-height:1.15}
h2{font-size:24pt;margin-bottom:4mm}h3{font-size:15pt;margin:5mm 0 2mm}p{margin-bottom:3mm}
.k{text-transform:uppercase;letter-spacing:.14em;font-size:9pt;font-weight:800;color:${v.cor};margin-bottom:2mm}
.cover{background:${v.corEscura};color:#fff;padding:24mm 20mm}
.cover h1{color:#fff;font-size:52pt;margin:60mm 0 6mm}.cover .s{font-size:16pt;max-width:150mm;opacity:.95}
.cover .logo{font-weight:800;font-size:14pt}.cover .logo span{color:#FF6200}
.cover .b{position:absolute;left:20mm;right:20mm;bottom:18mm;border-top:1px solid rgba(255,255,255,.35);padding-top:4mm;display:flex;justify-content:space-between;font-size:10pt}
.cover .ring{position:absolute;right:-40mm;top:150mm;width:120mm;height:120mm;border-radius:50%;border:16mm solid ${v.cor};opacity:.6}
.sec{background:${v.corClara};border-radius:4mm;padding:4mm 6mm;margin-bottom:4mm;font-size:11.5pt}
.sec ul{margin:2mm 0 0 5mm}.sec li{margin-bottom:1mm}
.idx .row{display:flex;gap:4mm;align-items:baseline;padding:2.6mm 0;border-bottom:1px solid #E5E7EB}
.idx .t{flex:0 0 62mm;font-weight:800}.idx .row>span:nth-child(2){flex:1;font-size:10.5pt;color:#4B5563}.idx .g{font-size:9pt;color:#6B7280;text-transform:uppercase;letter-spacing:.08em;margin-top:5mm;font-weight:800}
.idx .p{font-family:Fraunces,serif;color:${v.cor};font-size:14pt}
.warn{background:#FEF2F2;border-radius:4mm;padding:5mm 6mm;margin-top:4mm}.warn b{color:#B91C1C}`;
  const fichasDe = sec => sec.fichas.map(sl => entradas.find(e => e.slug === sl));
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><style>${css}</style></head><body>
  <section class="page cover"><div class="ring"></div><div class="logo">Age <span>in</span> Move · idade em movimento</div>
    <h1>${esc(v.titulo)}</h1><div class="s">${esc(v.subtitulo)}</div>
    <div class="b"><span>Coleção de fichas de atividade</span><span>${entradas.length} fichas · uso com fisioterapeuta</span></div></section>
  <section class="page"><div class="k">Antes de começar</div><h2>Sobre este volume</h2>${v.introducao.map(p => `<p>${esc(p)}</p>`).join('')}
    ${v.seccoes.map(sec => `<div class="sec"><h3 style="margin-top:0">${esc(sec.titulo)}</h3><p>${esc(sec.texto)}</p><b>Na prática:</b><ul>${sec.dicas.map(d => `<li>${esc(d)}</li>`).join('')}</ul></div>`).join('')}
    <div class="warn"><b>Importante:</b> estas fichas não substituem a avaliação e o plano do fisioterapeuta ou do médico. Pare sempre perante dor, tonturas, falta de ar ou desequilíbrio, e registe o que aconteceu.</div></section>
  <section class="page"><div class="k">Índice</div><h2>As fichas deste volume</h2><div class="idx">
    ${v.seccoes.map(sec => `<div class="g">${esc(sec.titulo)}</div>${fichasDe(sec).map(e => `<div class="row"><span class="t">${esc(e.titulo)}</span><span>${esc(e.subtitulo)}</span><span class="p">p. ${e.inicio}</span></div>`).join('')}`).join('')}
    </div><p style="margin-top:6mm;font-size:10pt;color:#6B7280">Cada ficha tem o guia do animador, os níveis de adaptação, os grupos de dependência a que se destina, uma folha de registo e o cartão com os exercícios ilustrados. Os números de página no rodapé das fichas referem-se a cada ficha.</p></section>
  </body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch(); const page = await browser.newPage();
  for (const v of VOLS) {
    if (process.argv[2] && v.slug !== process.argv[2]) continue;
    const slugs = v.seccoes.flatMap(s => s.fichas);
    let p = 4; // capa, introdução e índice ocupam 3 páginas
    const entradas = slugs.map(sl => {
      const pdf = path.join(FICHAS, 'pdf', sl + '.pdf');
      if (!fs.existsSync(pdf)) throw new Error('Falta gerar a ficha: ' + sl + ' (node fichas/gerar.js)');
      const f = require(path.join(FICHAS, sl + '.js'));
      const e = { slug: sl, titulo: f.titulo, subtitulo: f.subtitulo, pdf, inicio: p };
      p += paginas(pdf); return e;
    });
    await page.setContent(html(v, entradas), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const over = await page.evaluate(() => [...document.querySelectorAll('.page')].map((x, i) => [i + 1, x.scrollHeight - x.clientHeight]).filter(x => x[1] > 1));
    if (over.length) console.warn('  ⚠ overflow', over);
    const abertura = path.join(OUT, `_${v.slug}-abertura.pdf`);
    await page.pdf({ path: abertura, format: 'A4', printBackground: true, preferCSSPageSize: true });
    const file = path.join(OUT, `${v.slug}.pdf`);
    execFileSync('pdfunite', [abertura, ...entradas.map(e => e.pdf), file]);
    fs.rmSync(abertura);
    console.log('✓', path.relative(ROOT, file), '—', paginas(file), 'páginas');
  }
  await browser.close();
})();
