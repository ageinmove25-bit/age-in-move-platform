// Gera os ebooks da Coleção "Fatores Psicomotores" em PDF (A4).
// Uso: node ebooks/gerar-ebooks.js   (a partir da pasta materiais/)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const FATORES = require('./dados');

const OUT = path.join(__dirname, 'pdf');
const FONTS = path.join(__dirname, '..', 'node_modules', '@fontsource');
const font = (fam, file) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(FONTS, fam, 'files', file)).toString('base64');

const LARANJA = '#FF6200';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const css = (f) => `
@font-face{font-family:Nunito;font-weight:400;src:url(${font('nunito', 'nunito-latin-400-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:700;src:url(${font('nunito', 'nunito-latin-700-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:800;src:url(${font('nunito', 'nunito-latin-800-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:600;src:url(${font('fraunces', 'fraunces-latin-600-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:700;src:url(${font('fraunces', 'fraunces-latin-700-normal.woff2')})}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
:root{--c:${f.cor};--cl:${f.corClara};--ce:${f.corEscura};--ink:#1F2937;--muted:#6B7280;--line:#E5E7EB}
body{font-family:Nunito,sans-serif;color:var(--ink);font-size:11.5pt;line-height:1.5}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:20mm 18mm 22mm}
.page:last-child{page-break-after:auto}
h1,h2,h3{font-family:Fraunces,serif;font-weight:700;line-height:1.15;color:var(--ce)}
h2{font-size:24pt;margin-bottom:5mm}
h3{font-size:13pt;margin:5mm 0 2mm}
p{margin-bottom:3mm}
.foot{position:absolute;left:18mm;right:18mm;bottom:10mm;display:flex;justify-content:space-between;font-size:8.5pt;color:var(--muted)}
.foot b{color:${LARANJA}}
.brand{font-weight:800;letter-spacing:.02em}
.brand span{color:${LARANJA}}
/* capa */
.cover{background:var(--ce);color:#fff;padding:22mm 20mm}
.cover .blob{position:absolute;right:-40mm;top:40mm;width:190mm;opacity:.95}
.cover .top{display:flex;justify-content:space-between;align-items:center;font-size:10pt;position:relative}
.cover .logo{font-weight:800;font-size:15pt}
.cover .logo small{display:block;font-weight:400;font-size:9pt;opacity:.8;letter-spacing:.08em}
.cover .vol{font-family:Fraunces,serif;font-size:120pt;line-height:1;position:absolute;left:20mm;top:62mm;color:var(--cl);opacity:.9}
.cover .tit{position:absolute;left:20mm;right:20mm;bottom:48mm}
.cover .serie{text-transform:uppercase;letter-spacing:.18em;font-size:9.5pt;font-weight:700;color:var(--cl);margin-bottom:4mm}
.cover h1{color:#fff;font-size:42pt;margin-bottom:5mm}
.cover .sub{font-size:15pt;max-width:140mm;opacity:.92}
.cover .bottom{position:absolute;left:20mm;right:20mm;bottom:18mm;display:flex;justify-content:space-between;font-size:9.5pt;border-top:1px solid rgba(255,255,255,.3);padding-top:4mm}
/* blocos */
.lead{font-size:13pt;color:var(--ce);margin-bottom:6mm}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:6mm}
.card{background:var(--cl);border-radius:4mm;padding:5mm 6mm}
.card h3{margin-top:0}
ul.dots{list-style:none}
ul.dots li{padding-left:6mm;position:relative;margin-bottom:1.6mm}
ul.dots li:before{content:'';position:absolute;left:0;top:2.2mm;width:2.4mm;height:2.4mm;border-radius:50%;background:var(--c)}
.kicker{text-transform:uppercase;letter-spacing:.14em;font-size:8.5pt;font-weight:800;color:var(--c);margin-bottom:2mm}
/* índice */
.toc{margin-top:4mm}
.toc .row{display:flex;align-items:baseline;gap:3mm;padding:2mm 0;border-bottom:1px solid var(--line)}
.toc .n{font-family:Fraunces,serif;font-size:16pt;color:var(--c);width:12mm}
.toc .t{flex:1;font-weight:700}
.toc .m{font-size:9.5pt;color:var(--muted)}
/* atividade */
.act-head{display:flex;gap:5mm;align-items:flex-start;margin-bottom:5mm}
.act-num{flex:none;width:18mm;height:18mm;border-radius:50%;background:var(--c);color:#fff;font-family:Fraunces,serif;font-size:22pt;display:flex;align-items:center;justify-content:center}
.act-head h2{margin:1mm 0 1mm;font-size:22pt}
.obj{font-size:12pt;color:#374151}
.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin:2mm 0 5mm}
.meta div{background:#F9FAFB;border:1px solid var(--line);border-radius:3mm;padding:2.5mm 3mm}
.meta small{display:block;font-size:7.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:700}
.meta b{font-size:10.5pt}
.chips{display:flex;flex-wrap:wrap;gap:2mm;margin-bottom:4mm}
.chip{background:var(--cl);color:var(--ce);font-weight:700;font-size:9pt;border-radius:10mm;padding:1mm 3.5mm}
.chip.f{background:var(--c);color:#fff}
ol.steps{list-style:none;counter-reset:s}
ol.steps li{counter-increment:s;position:relative;padding:0 0 3mm 10mm}
ol.steps li:before{content:counter(s);position:absolute;left:0;top:.2mm;width:6.5mm;height:6.5mm;border-radius:50%;border:1.5px solid var(--c);color:var(--c);font-weight:800;font-size:9pt;display:flex;align-items:center;justify-content:center}
.adapt{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:3mm}
.adapt div{border-radius:3mm;padding:3.5mm 4.5mm;font-size:10.5pt}
.adapt .easy{background:#ECFDF5}.adapt .hard{background:#FEF2F2}
.adapt b{display:block;font-size:8.5pt;text-transform:uppercase;letter-spacing:.1em;margin-bottom:1mm}
.adapt .easy b{color:#047857}.adapt .hard b{color:#B91C1C}
.tip{margin-top:4mm;background:#FFF7ED;border-radius:3mm;padding:3.5mm 4.5mm;font-size:10.5pt}
.tip b{color:${LARANJA}}
.mat{font-size:11pt;color:#374151;margin-bottom:3mm}
.page.act{display:flex;flex-direction:column}
.page.act ol.steps li{font-size:12.5pt;padding-bottom:3.5mm}
.page.act .adapt div,.page.act .tip{font-size:11.5pt}
.notes{flex:1;margin-top:6mm;border-radius:3mm;border:1px dashed #D1D5DB;padding:3mm 4.5mm;background:repeating-linear-gradient(transparent 0 9mm,#E5E7EB 9mm calc(9mm + 1px));background-origin:content-box;min-height:20mm}
.notes b{font-size:8.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
/* registo */
table{width:100%;border-collapse:collapse;font-size:9.5pt}
th{background:var(--c);color:#fff;text-align:left;padding:2.5mm;font-weight:700}
td{border:1px solid var(--line);padding:2.5mm;height:11mm;vertical-align:top}
td.a{font-weight:700;width:52mm}
.fields{display:grid;grid-template-columns:2fr 1fr 1fr;gap:4mm;margin-bottom:5mm;font-size:10pt}
.fields div{border-bottom:1px solid #9CA3AF;padding-bottom:1mm}
.scale{font-size:9pt;color:var(--muted);margin-top:3mm}
/* contracapa */
.back{background:var(--cl)}
.refs li{margin-bottom:2.5mm;font-size:10pt}
.endbox{position:absolute;left:18mm;right:18mm;bottom:22mm;background:var(--ce);color:#fff;border-radius:5mm;padding:7mm 8mm}
.endbox h3{color:#fff;margin:0 0 2mm}
`;

const blob = (f) => `<svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path fill="${f.cor}" d="M44.6,-58.5C57.1,-48.2,66.3,-34.4,70.6,-19.1C74.9,-3.8,74.2,13,67.4,26.6C60.6,40.2,47.7,50.6,33.3,58.4C18.9,66.2,3,71.4,-13.5,70.4C-30,69.4,-47.1,62.2,-58.6,49.4C-70.1,36.6,-76,18.3,-75.2,0.7C-74.4,-16.9,-66.9,-33.8,-55,-44.6C-43.1,-55.4,-26.8,-60.1,-11,-62.5C4.8,-64.9,32.1,-68.8,44.6,-58.5Z" transform="translate(100 100)"/>
<path fill="${LARANJA}" opacity=".85" d="M30,-38C38,-31,43,-20,46,-7C49,6,49,21,42,31C35,41,21,46,7,48C-7,50,-21,49,-31,41C-41,33,-47,18,-48,3C-49,-12,-45,-27,-35,-34C-25,-41,-12,-41,0,-41C12,-41,22,-45,30,-38Z" transform="translate(150 150) scale(.55)"/>
<g transform="translate(96 92)" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round">
<circle cx="0" cy="-34" r="9" fill="#fff" stroke="none"/><path d="M0,-22 L-3,8"/><path d="M-1,-14 L-24,-30"/><path d="M-1,-14 L22,-2"/><path d="M-3,8 L-20,34"/><path d="M-3,8 L14,32"/></g></svg>`;

const footer = (f, n) => `<div class="foot"><span class="brand">Age <span>in</span> Move · Coleção Fatores Psicomotores · Vol. ${f.vol} — ${esc(f.titulo)}</span><span><b>${n}</b></span></div>`;

function build(f) {
  let pg = 1;
  const pages = [];
  // 1. Capa
  pages.push(`<section class="page cover">${blob(f)}
    <div class="top"><div class="logo">Age in Move<small>IDADE EM MOVIMENTO</small></div><div>@age_in_move</div></div>
    <div class="vol">${String(f.vol).padStart(2, '0')}</div>
    <div class="tit"><div class="serie">Coleção Fatores Psicomotores · Volume ${f.vol} de 7</div><h1>${esc(f.titulo)}</h1><div class="sub">${esc(f.subtitulo)}</div></div>
    <div class="bottom"><span>Atividades de estimulação cognitivo-motora para pessoas idosas</span><span>Guia prático para profissionais</span></div></section>`);
  pg++;
  // 2. Como usar + índice
  pages.push(`<section class="page">
    <div class="kicker">Antes de começar</div><h2>Como usar este ebook</h2>
    <p class="lead">Este volume reúne ${f.atividades.length} atividades que trabalham a <b>${esc(f.titulo.toLowerCase())}</b> em articulação com funções cognitivas — porque o corpo e a mente envelhecem juntos e treinam-se melhor juntos.</p>
    <div class="grid2">
      <div class="card"><h3>Para quem</h3><p>Fisioterapeutas, psicomotricistas, terapeutas ocupacionais, psicólogos, animadores socioculturais e cuidadores formais que trabalham com pessoas idosas, em sessão individual ou em grupo.</p></div>
      <div class="card"><h3>Cada atividade inclui</h3><ul class="dots"><li>Objetivo e funções cognitivas treinadas</li><li>Duração, nível e posição</li><li>Materiais e passos numerados</li><li>Como facilitar e como dificultar</li><li>Dica clínica ou de segurança</li></ul></div>
    </div>
    <h3>Princípios de segurança</h3>
    <ul class="dots"><li>Avalie o risco de queda antes de atividades em pé; mantenha sempre um apoio estável por perto.</li><li>Ajuste o nível à pessoa: o objetivo é um desafio possível, não o erro.</li><li>Interrompa perante dor, tonturas, falta de ar ou sinais de cansaço excessivo.</li><li>Valorize o esforço e a participação mais do que o resultado.</li></ul>
    <h3>Atividades deste volume</h3>
    <div class="toc">${f.atividades.map((a, i) => `<div class="row"><span class="n">${i + 1}</span><span class="t">${esc(a.nome)}</span><span class="m">${a.nivel} · ${a.duracao} · ${a.posicao}</span></div>`).join('')}</div>
    ${footer(f, pg)}</section>`);
  pg++;
  // 3. O fator
  pages.push(`<section class="page">
    <div class="kicker">O fator psicomotor</div><h2>O que é a ${esc(f.titulo.toLowerCase())}?</h2>
    <p class="lead">${esc(f.definicao)}</p>
    <h3>No envelhecimento</h3><p>${esc(f.envelhecimento)}</p>
    <div class="grid2" style="margin-top:5mm">
      <div class="card"><h3>Sinais a observar</h3><ul class="dots">${f.sinais.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
      <div class="card"><h3>Objetivos de intervenção</h3><ul class="dots">${f.objetivos.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
    </div>
    <h3>A ponte com a cognição</h3><p>${esc(f.cognicao)}</p>
    <div class="tip"><b>Enquadramento.</b> Os sete fatores psicomotores — tonicidade, equilibração, lateralização, noção do corpo, estruturação espácio-temporal, praxia global e praxia fina — organizam-se de forma hierárquica (modelo de Vítor da Fonseca, inspirado em Luria): os primeiros dão suporte aos seguintes. Esta coleção dedica um volume a cada fator.</div>
    ${footer(f, pg)}</section>`);
  pg++;
  // 4. Atividades
  f.atividades.forEach((a, i) => {
    pages.push(`<section class="page act">
      <div class="act-head"><div class="act-num">${i + 1}</div><div><div class="kicker">Atividade ${i + 1} · ${esc(f.titulo)}</div><h2>${esc(a.nome)}</h2><div class="obj">${esc(a.objetivo)}</div></div></div>
      <div class="meta"><div><small>Duração</small><b>${a.duracao}</b></div><div><small>Nível</small><b>${a.nivel}</b></div><div><small>Posição</small><b>${a.posicao}</b></div><div><small>Formato</small><b>Individual / grupo</b></div></div>
      <div class="chips"><span class="chip f">${esc(f.titulo)}</span>${a.cognitivo.map(c => `<span class="chip">${esc(c)}</span>`).join('')}</div>
      <p class="mat"><b>Materiais:</b> ${esc(a.materiais)}</p>
      <h3>Como fazer</h3>
      <ol class="steps">${a.passos.map(p => `<li>${esc(p)}</li>`).join('')}</ol>
      <div class="adapt"><div class="easy"><b>Para facilitar</b>${esc(a.facilitar)}</div><div class="hard"><b>Para dificultar</b>${esc(a.dificultar)}</div></div>
      <div class="tip"><b>Dica do terapeuta:</b> ${esc(a.dica)}</div>
      <div class="notes"><b>Notas da sessão</b></div>
      ${footer(f, pg)}</section>`);
    pg++;
  });
  // 5. Ficha de registo
  pages.push(`<section class="page">
    <div class="kicker">Material fotocopiável</div><h2>Ficha de registo de sessão</h2>
    <div class="fields"><div>Nome:</div><div>Data:</div><div>Sessão n.º:</div></div>
    <table><thead><tr><th>Atividade</th><th style="width:20mm">Nível</th><th style="width:24mm">Desempenho (1–5)</th><th style="width:22mm">Ajuda</th><th>Observações</th></tr></thead>
    <tbody>${f.atividades.map(a => `<tr><td class="a">${esc(a.nome)}</td><td>F · M · E</td><td></td><td>N · V · F</td><td></td></tr>`).join('')}</tbody></table>
    <p class="scale"><b>Nível:</b> F = facilitado · M = base · E = exigente &nbsp;|&nbsp; <b>Desempenho:</b> 1 = não realiza · 3 = realiza com erros · 5 = realiza com fluidez &nbsp;|&nbsp; <b>Ajuda:</b> N = nenhuma · V = verbal · F = física</p>
    <h3>Humor e participação</h3>
    <table><tbody><tr><td class="a">Início da sessão</td><td>☐ Em baixo &nbsp; ☐ Neutro &nbsp; ☐ Bem &nbsp; ☐ Muito bem</td></tr><tr><td class="a">Fim da sessão</td><td>☐ Em baixo &nbsp; ☐ Neutro &nbsp; ☐ Bem &nbsp; ☐ Muito bem</td></tr><tr><td class="a">Sinais de cansaço / dor</td><td></td></tr><tr><td class="a">Objetivo para a próxima sessão</td><td style="height:18mm"></td></tr></tbody></table>
    ${footer(f, pg)}</section>`);
  pg++;
  // 6. Contracapa
  pages.push(`<section class="page back">
    <div class="kicker">Para saber mais</div><h2>Referências</h2>
    <ul class="dots refs">
      <li>Fonseca, V. (2010). <i>Manual de observação psicomotora: Significação psiconeurológica dos fatores psicomotores</i> (2.ª ed.). Âncora Editora.</li>
      <li>Luria, A. R. (1973). <i>The working brain: An introduction to neuropsychology</i>. Penguin Books.</li>
      <li>Michel, S., Soppelsa, R., &amp; Albaret, J.-M. (2011). <i>Examen Géronto-Psychomoteur (EGP)</i>. Hogrefe.</li>
      <li>Morais, A., Santos, S., &amp; Lebre, P. (2016). Psychometric properties of the Portuguese version of the Examen Géronto-Psychomoteur (P-EGP). <i>Educational Gerontology, 42</i>(7), 516–527.</li>
      <li>Sherrington, C., et al. (2019). Exercise for preventing falls in older people living in the community. <i>Cochrane Database of Systematic Reviews</i>, CD012424.</li>
      <li>Woods, B., et al. (2023). Cognitive stimulation to improve cognitive functioning in people with dementia. <i>Cochrane Database of Systematic Reviews</i>, CD005562.</li>
    </ul>
    <h3>Coleção Fatores Psicomotores</h3>
    <div class="toc">${FATORES.map(x => `<div class="row"><span class="n">${x.vol}</span><span class="t">${esc(x.titulo)}${x.vol === f.vol ? ' — este volume' : ''}</span><span class="m">${esc(x.subtitulo)}</span></div>`).join('')}</div>
    <div class="endbox"><h3>Age in Move · idade em movimento</h3>Mover o corpo. Despertar a mente. Cuidar com propósito.<br><span style="opacity:.8;font-size:9.5pt">@age_in_move · Este material destina-se a apoiar profissionais e não substitui a avaliação clínica individual.</span></div>
    </section>`);
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>${esc(f.titulo)} — Age in Move</title><style>${css(f)}</style></head><body>${pages.join('\n')}</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const only = process.argv[2];
  for (const f of FATORES) {
    if (only && f.slug !== only) continue;
    const html = build(f);
    if (process.env.HTML) fs.writeFileSync(path.join(OUT, `${f.slug}.html`), html);
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    // Verificação: nenhuma página deve transbordar
    const over = await page.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => [i + 1, p.scrollHeight - p.clientHeight]).filter(x => x[1] > 1));
    if (over.length) console.warn(`  ⚠ ${f.slug}: páginas com overflow`, over);
    const file = path.join(OUT, `Vol${f.vol}-${f.slug}.pdf`);
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.basename(file));
  }
  await browser.close();
})();
