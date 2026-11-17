// Gera os ebooks v2 (para animadores e auxiliares, com 3 níveis e fotografias reais).
// Uso: node ebooks/v2/gerar.js [slug]   (a partir da pasta materiais/)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(__dirname, '..', 'pdf', 'v2');
const IMG = path.join(ROOT, 'fotos', 'img');
const CRED = JSON.parse(fs.readFileSync(path.join(ROOT, 'fotos', 'creditos.json'), 'utf8'));
const FONTS = path.join(ROOT, 'node_modules', '@fontsource');
const font = (fam, file) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(FONTS, fam, 'files', file)).toString('base64');
const foto = k => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(IMG, k + '.jpg')).toString('base64');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LARANJA = '#FF6200';
const LIVROS = fs.readdirSync(__dirname).filter(f => f !== 'gerar.js' && f.endsWith('.js')).map(f => require(path.join(__dirname, f)));

const NIVEIS = [
  { k: 'n1', nome: 'Nível 1 · Mais apoio', cor: '#047857', fundo: '#ECFDF5', quem: 'Demência moderada, pessoas muito dependentes, muitos residentes em lar.', sinais: ['Precisa que lhe mostrem cada gesto', 'Distrai-se depressa', 'Percebe uma palavra ou um gesto de cada vez'] },
  { k: 'n2', nome: 'Nível 2 · Algum apoio', cor: '#B45309', fundo: '#FFFBEB', quem: 'Esquecimentos frequentes ou demência ligeira.', sinais: ['Percebe uma instrução de cada vez', 'Precisa de lembretes durante a tarefa', 'Cansa-se com tarefas longas'] },
  { k: 'n3', nome: 'Nível 3 · Autónomos', cor: '#1D4ED8', fundo: '#EFF6FF', quem: 'Pessoas que vivem em casa e tratam das suas coisas.', sinais: ['Segue instruções de vários passos', 'Gosta de desafios e de competir', 'Aborrece-se se a tarefa for fácil demais'] }
];

const css = (f) => `
@font-face{font-family:Nunito;font-weight:400;src:url(${font('nunito', 'nunito-latin-400-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:700;src:url(${font('nunito', 'nunito-latin-700-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:800;src:url(${font('nunito', 'nunito-latin-800-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:700;src:url(${font('fraunces', 'fraunces-latin-700-normal.woff2')})}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
:root{--c:${f.cor};--cl:${f.corClara};--ce:${f.corEscura};--ink:#1F2937;--muted:#6B7280;--line:#E5E7EB}
body{font-family:Nunito,sans-serif;color:var(--ink);font-size:12.5pt;line-height:1.5}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:18mm 17mm 22mm}
.page:last-child{page-break-after:auto}
h1,h2,h3{font-family:Fraunces,serif;font-weight:700;line-height:1.15;color:var(--ce)}
h2{font-size:25pt;margin-bottom:4mm}
h3{font-size:14pt;margin:5mm 0 2.5mm}
p{margin-bottom:3mm}
.kicker{text-transform:uppercase;letter-spacing:.14em;font-size:9pt;font-weight:800;color:var(--c);margin-bottom:2mm}
.foot{position:absolute;left:17mm;right:17mm;bottom:9mm;display:flex;justify-content:space-between;font-size:8.5pt;color:var(--muted)}
.foot b{color:${LARANJA}}
ul.dots{list-style:none}
ul.dots li{padding-left:6mm;position:relative;margin-bottom:1.8mm}
ul.dots li:before{content:'';position:absolute;left:0;top:2.4mm;width:2.6mm;height:2.6mm;border-radius:50%;background:var(--c)}
ul.check{list-style:none}
ul.check li{padding-left:8mm;position:relative;margin-bottom:2mm}
ul.check li:before{content:'';position:absolute;left:0;top:1mm;width:4.2mm;height:4.2mm;border:1.6px solid var(--c);border-radius:1mm}
/* capa */
.cover{padding:0;background:var(--ce);color:#fff}
.cover .ph{height:178mm;background-size:cover;background-position:center}
.cover .txt{padding:12mm 18mm}
.cover .serie{text-transform:uppercase;letter-spacing:.18em;font-size:9.5pt;font-weight:800;color:var(--cl);margin-bottom:3mm}
.cover h1{color:#fff;font-size:44pt;margin-bottom:3mm}
.cover .sub{font-size:15pt;opacity:.95;max-width:160mm}
.cover .for{position:absolute;left:18mm;right:18mm;bottom:14mm;display:flex;justify-content:space-between;font-size:10pt;border-top:1px solid rgba(255,255,255,.35);padding-top:4mm}
.cover .logo{position:absolute;top:10mm;left:12mm;background:rgba(255,255,255,.95);color:var(--ce);border-radius:3mm;padding:2.5mm 4mm;font-weight:800;font-size:11pt}
.cover .logo span{color:${LARANJA}}
/* níveis */
.lvls{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm;margin:4mm 0}
.lvl{border-radius:4mm;padding:4.5mm 5mm;font-size:11pt}
.lvl b.t{display:block;font-size:12pt;margin-bottom:1.5mm}
.lvl p{font-weight:700;margin-bottom:2mm}
.lvl ul{list-style:none}.lvl li{margin-bottom:1mm;padding-left:4mm;position:relative}
.lvl li:before{content:'·';position:absolute;left:0;font-weight:800}
.note{background:var(--cl);border-radius:3mm;padding:4mm 5mm;font-size:11.5pt}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:6mm}
.box{border:1.5px solid var(--line);border-radius:4mm;padding:4.5mm 5.5mm}
.box h3{margin-top:0}
.rules{counter-reset:r;list-style:none}
.rules li{counter-increment:r;position:relative;padding:0 0 3mm 11mm}
.rules li:before{content:counter(r);position:absolute;left:0;top:0;width:7.5mm;height:7.5mm;border-radius:50%;background:var(--c);color:#fff;font-weight:800;font-size:10.5pt;display:flex;align-items:center;justify-content:center}
.rules b{color:var(--ce)}
/* atividade */
.ph-act{height:72mm;border-radius:5mm;background-size:cover;background-position:center;margin:4mm 0 4mm}
.lead{font-size:13pt;color:#374151}
.info{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin-bottom:5mm}
.info div{background:#F9FAFB;border:1px solid var(--line);border-radius:3mm;padding:2.5mm 3mm}
.info small{display:block;font-size:7.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:800}
.info b{font-size:10.5pt}
.steps{width:100%;border-collapse:separate;border-spacing:0 2.5mm;margin-top:-2mm}
.steps td{vertical-align:top;padding:3mm 4mm;font-size:11.5pt}
.steps td.n{width:10mm;padding:3mm 0 0}
.steps td.n span{display:flex;width:7.5mm;height:7.5mm;border-radius:50%;background:var(--c);color:#fff;font-weight:800;font-size:10.5pt;align-items:center;justify-content:center}
.steps td.faz{width:72mm;background:#F9FAFB;border-radius:3mm 0 0 3mm}
.steps td.diz{background:var(--cl);border-radius:0 3mm 3mm 0;font-style:italic;color:var(--ce)}
.steps th{text-align:left;font-size:8.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);padding:0 4mm}
.lv3{display:grid;grid-template-columns:repeat(3,1fr);gap:3mm}
.lv3 div{border-radius:3.5mm;padding:4mm;font-size:10.8pt;line-height:1.45}
.lv3 b{display:block;font-size:9pt;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1.5mm}
.warn{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:4mm}
.warn div{border-radius:3.5mm;padding:4mm 4.5mm;font-size:11pt}
.warn .a{background:#FEF2F2}.warn .a b{color:#B91C1C}
.warn .s{background:#F5F3FF}.warn .s b{color:#6D28D9}
.warn b{display:block;font-size:9pt;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1mm}
/* registo */
table.reg{width:100%;border-collapse:collapse;font-size:10pt}
table.reg th{background:var(--c);color:#fff;text-align:left;padding:2.5mm;font-weight:700}
table.reg td{border:1px solid var(--line);padding:2mm 2.5mm;height:12mm;vertical-align:middle}
table.reg td.a{font-weight:700;width:46mm}
table.reg td.o{text-align:center;color:#9CA3AF;font-size:13pt}
.fields{display:grid;grid-template-columns:2fr 1fr;gap:5mm;margin-bottom:5mm;font-size:11pt}
.fields div{border-bottom:1px solid #9CA3AF;padding-bottom:1mm}
.cred{font-size:8.5pt;color:#4B5563}
.cred li{margin-bottom:1.6mm}
.endbox{position:absolute;left:17mm;right:17mm;bottom:20mm;background:var(--ce);color:#fff;border-radius:5mm;padding:6mm 8mm}
.endbox h3{color:#fff;margin:0 0 2mm}
`;

function build(f) {
  let pg = 1;
  const pages = [];
  const foot = () => `<div class="foot"><span><b>Age in Move</b> · ${esc(f.titulo)} — ${esc(f.fator)}</span><span><b>${pg}</b></span></div>`;
  const fotosUsadas = [f.capaFoto, ...f.atividades.map(a => a.foto)];

  // 1. Capa
  pages.push(`<section class="page cover"><div class="ph" style="background-image:url(${foto(f.capaFoto)})"></div>
    <div class="logo">Age <span>in</span> Move</div>
    <div class="txt"><div class="serie">Coleção Fatores Psicomotores · ${esc(f.fator)}</div><h1>${esc(f.titulo)}</h1><div class="sub">${esc(f.subtitulo)}</div></div>
    <div class="for"><span>Guia prático para animadores e auxiliares</span><span>Para todos os níveis · tudo sentado</span></div></section>`);
  pg++;

  // 2. Como usar
  pages.push(`<section class="page">
    <div class="kicker">Antes de começar</div><h2>Como usar este guia</h2>
    <p class="lead">${esc(f.introducao)}</p>
    <h3>Cada atividade tem três níveis</h3>
    <p>Escolha o nível pelo que vê no dia a dia da pessoa, não pelo diagnóstico.</p>
    <div class="lvls">${NIVEIS.map(n => `<div class="lvl" style="background:${n.fundo}"><b class="t" style="color:${n.cor}">${n.nome}</b><p>${esc(n.quem)}</p><ul>${n.sinais.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>`).join('')}</div>
    <div class="note"><b>Na dúvida, comece pelo nível mais fácil.</b> Se a pessoa fizer bem e com gosto, suba um nível na sessão seguinte. Num grupo, cada pessoa pode estar num nível diferente da mesma atividade.</div>
    <h3>Em cada atividade encontra</h3>
    <ul class="dots"><li>Uma fotografia, para que serve, quanto tempo leva e quanto custa</li><li>A lista de materiais e o que preparar antes</li><li>O passo a passo, com <b>o que fazer</b> e <b>o que dizer</b></li><li>Como adaptar aos três níveis, cuidados de segurança e o que fazer se não correr bem</li></ul>
    ${foot()}</section>`);
  pg++;

  // 3. Regras de ouro + checklist
  pages.push(`<section class="page">
    <div class="kicker">Antes de começar</div><h2>Regras de ouro</h2>
    <ol class="rules">
      <li><b>Fale de frente, devagar e com frases curtas.</b> Uma instrução de cada vez.</li>
      <li><b>Mostre primeiro, depois peça.</b> Faça o gesto ao lado da pessoa.</li>
      <li><b>Não diga "está mal".</b> Mostre o caminho certo com naturalidade.</li>
      <li><b>Ajude o mínimo necessário</b>, mas não deixe a pessoa ficar frustrada.</li>
      <li><b>Dê sentido à tarefa:</b> "Preciso da sua ajuda" funciona melhor do que "vamos fazer um exercício".</li>
      <li><b>Elogie o esforço</b>, não só o resultado.</li>
      <li><b>Sessões curtas:</b> 15 a 20 minutos por atividade chegam.</li>
      <li><b>Termine sempre com sucesso:</b> acabe com algo que a pessoa consiga fazer.</li>
    </ol>
    <div class="grid2" style="margin-top:3mm">
      <div class="box"><h3>Antes de cada sessão</h3><ul class="check">
        <li>Óculos e aparelho auditivo postos</li><li>Já foi à casa de banho e tem água por perto</li><li>Boa luz, sem reflexos na mesa</li><li>Mesa à altura dos cotovelos; cadeira com braços (ou cadeira de rodas travada)</li><li>Materiais prontos e contados</li><li>Televisão e rádio desligados</li></ul></div>
      <div class="box"><h3>Pare se a pessoa…</h3><ul class="dots">
        <li>Tiver dor nas mãos ou nos braços</li><li>Parecer cansada ou com sono</li><li>Ficar agitada, chorosa ou irritada</li><li>Disser que não quer — respeite e tente mais tarde ou noutro dia</li></ul>
        <p style="margin-top:3mm;font-size:11pt;color:#4B5563">Registe o que aconteceu e avise a equipa se notar algo diferente do habitual.</p></div>
    </div>
    ${foot()}</section>`);
  pg++;

  // Atividades: 2 páginas cada
  f.atividades.forEach((a, i) => {
    pages.push(`<section class="page">
      <div class="kicker">Atividade ${i + 1} de ${f.atividades.length}</div><h2>${esc(a.nome)}</h2>
      <p class="lead">${esc(a.paraQue)}</p>
      <div class="ph-act" style="background-image:url(${foto(a.foto)})"></div>
      <div class="info"><div><small>Duração</small><b>${esc(a.duracao)}</b></div><div><small>Grupo</small><b>${esc(a.grupo)}</b></div><div><small>Custo</small><b>${esc(a.custo)}</b></div><div><small>Posição</small><b>Sentado à mesa</b></div></div>
      <div class="grid2"><div class="box"><h3>Materiais</h3><ul class="dots">${a.materiais.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div>
      <div class="box"><h3>Preparar antes</h3><ul class="check">${a.preparar.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div></div>
      ${foot()}</section>`);
    pg++;
    pages.push(`<section class="page">
      <div class="kicker">Atividade ${i + 1} · ${esc(a.nome)}</div><h2>Passo a passo</h2>
      <table class="steps"><tr><th></th><th>O que faz</th><th>O que diz</th></tr>
      ${a.passos.map((p, j) => `<tr><td class="n"><span>${j + 1}</span></td><td class="faz">${esc(p.faz)}</td><td class="diz">"${esc(p.diz)}"</td></tr>`).join('')}</table>
      <h3>Adaptar a cada pessoa</h3>
      <div class="lv3">${NIVEIS.map(n => `<div style="background:${n.fundo}"><b style="color:${n.cor}">${n.nome}</b>${esc(a.niveis[n.k])}</div>`).join('')}</div>
      <div class="warn"><div class="a"><b>Atenção</b>${esc(a.atencao)}</div><div class="s"><b>Se não correr bem</b>${esc(a.seCorrerMal)}</div></div>
      ${foot()}</section>`);
    pg++;
  });

  // Registo
  pages.push(`<section class="page">
    <div class="kicker">Para fotocopiar</div><h2>Registo simples</h2>
    <div class="fields"><div>Nome:</div><div>Mês:</div></div>
    <table class="reg"><thead><tr><th>Atividade</th><th style="width:16mm">Data</th><th style="width:17mm">Nível</th><th style="width:18mm">Sozinho</th><th style="width:18mm">Com ajuda</th><th style="width:16mm">Não quis</th><th style="width:16mm">Gostou?</th></tr></thead>
    <tbody>${f.atividades.map(a => `<tr><td class="a">${esc(a.nome)}</td><td></td><td class="o">1 · 2 · 3</td><td class="o">○</td><td class="o">○</td><td class="o">○</td><td class="o">○</td></tr>`).join('')}</tbody></table>
    <h3>Notas para a equipa</h3>
    <p style="font-size:11pt;color:#4B5563">O que correu bem, o que foi difícil, mudanças que notou (dor, cansaço, mais confusão, mais alegria…).</p>
    <div style="height:62mm;border:1px dashed #D1D5DB;border-radius:3mm;background:repeating-linear-gradient(transparent 0 9mm,#E5E7EB 9mm calc(9mm + 1px))"></div>
    ${foot()}</section>`);
  pg++;

  // Créditos
  pages.push(`<section class="page">
    <div class="kicker">Créditos</div><h2>Fotografias</h2>
    <p style="font-size:10.5pt">Fotografias do Wikimedia Commons, usadas de acordo com as respetivas licenças livres.</p>
    <ul class="cred">${[...new Set(fotosUsadas)].map(k => { const c = CRED[k]; return `<li><b>${esc(c.titulo.replace(/^File:/, ''))}</b> — ${esc(c.autor)} · ${esc(c.licenca)} · ${esc(c.pagina)}</li>`; }).join('')}</ul>
    <div class="endbox"><h3>Age in Move · idade em movimento</h3>Mover o corpo. Despertar a mente. Cuidar com propósito.<br><span style="opacity:.85;font-size:9.5pt">@age_in_move · Este guia apoia o trabalho das equipas e não substitui a orientação do terapeuta ou do médico de cada pessoa.</span></div>
    </section>`);
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>${esc(f.titulo)} — Age in Move</title><style>${css(f)}</style></head><body>${pages.join('\n')}</body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const f of LIVROS) {
    if (process.argv[2] && f.slug !== process.argv[2]) continue;
    await page.setContent(build(f), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const over = await page.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => [i + 1, p.scrollHeight - p.clientHeight]).filter(x => x[1] > 1));
    if (over.length) console.warn(`  ⚠ ${f.slug}: páginas com overflow`, over);
    const file = path.join(OUT, `Vol${f.vol}-${f.slug}.pdf`);
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.relative(ROOT, file));
  }
  await browser.close();
})();
