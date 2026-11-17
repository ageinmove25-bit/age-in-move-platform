// Gera os ebooks v3: organizados por TIPO (físicas, cognitivas, combinadas) e GRAU DE DEPENDÊNCIA.
// Uso: node ebooks/v3/gerar.js [slug]   (a partir da pasta materiais/)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const COL = require('./colecao');
const { ILU } = require('../../lib/ilustracoes');

const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(__dirname, '..', 'pdf', 'v3');
const IMG = path.join(ROOT, 'fotos', 'img');
const CRED = JSON.parse(fs.readFileSync(path.join(ROOT, 'fotos', 'creditos.json'), 'utf8'));
const FONTS = path.join(ROOT, 'node_modules', '@fontsource');
const font = (fam, file) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(FONTS, fam, 'files', file)).toString('base64');
const foto = k => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(IMG, k + '.jpg')).toString('base64');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LARANJA = '#FF6200';
const LIVROS = fs.readdirSync(__dirname).filter(f => !['gerar.js', 'colecao.js'].includes(f) && f.endsWith('.js')).map(f => require(path.join(__dirname, f)));

const PALETA = {
  fisicas: { c: '#0F766E', cl: '#CCFBF1', ce: '#134E4A' },
  cognitivas: { c: '#7C3AED', cl: '#EDE9FE', ce: '#4C1D95' },
  combinadas: { c: '#C2410C', cl: '#FFEDD5', ce: '#7C2D12' }
};

function grupoInfo(f) {
  if (f.tipo === 'fisicas') return { lista: COL.gruposFisicos, atual: COL.gruposFisicos.find(g => g.id === f.grupo) };
  if (f.tipo === 'cognitivas') return { lista: COL.gruposCognitivos, atual: COL.gruposCognitivos.find(g => g.id === f.grupo) };
  const fis = COL.gruposFisicos.find(g => g.id === f.grupo), cog = COL.gruposCognitivos[f.grupo - 1];
  return { lista: null, atual: { nome: fis.nome.replace('Grupo ' + f.grupo, 'Grupo ' + f.grupo), escala: `${fis.escala} e ${cog.escala}`, quem: `${fis.quem} ${cog.quem}`, onde: fis.onde }, fis, cog };
}

const css = P => `
@font-face{font-family:Nunito;font-weight:400;src:url(${font('nunito', 'nunito-latin-400-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:700;src:url(${font('nunito', 'nunito-latin-700-normal.woff2')})}
@font-face{font-family:Nunito;font-weight:800;src:url(${font('nunito', 'nunito-latin-800-normal.woff2')})}
@font-face{font-family:Fraunces;font-weight:700;src:url(${font('fraunces', 'fraunces-latin-700-normal.woff2')})}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
:root{--c:${P.c};--cl:${P.cl};--ce:${P.ce};--ink:#1F2937;--muted:#6B7280;--line:#E5E7EB}
body{font-family:Nunito,sans-serif;color:var(--ink);font-size:12pt;line-height:1.5}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:17mm 17mm 21mm}
.page:last-child{page-break-after:auto}
h1,h2,h3{font-family:Fraunces,serif;font-weight:700;line-height:1.15;color:var(--ce)}
h2{font-size:24pt;margin-bottom:3.5mm}
h3{font-size:14pt;margin:5mm 0 2.5mm}
p{margin-bottom:3mm}
.kicker{text-transform:uppercase;letter-spacing:.14em;font-size:9pt;font-weight:800;color:var(--c);margin-bottom:2mm}
.lead{font-size:12.5pt;color:#374151}
.foot{position:absolute;left:17mm;right:17mm;bottom:9mm;display:flex;justify-content:space-between;font-size:8.5pt;color:var(--muted)}
.foot b{color:${LARANJA}}
ul.dots{list-style:none}
ul.dots li{padding-left:6mm;position:relative;margin-bottom:1.7mm}
ul.dots li:before{content:'';position:absolute;left:0;top:2.4mm;width:2.6mm;height:2.6mm;border-radius:50%;background:var(--c)}
ul.check{list-style:none}
ul.check li{padding-left:8mm;position:relative;margin-bottom:1.8mm}
ul.check li:before{content:'';position:absolute;left:0;top:1mm;width:4.2mm;height:4.2mm;border:1.6px solid var(--c);border-radius:1mm}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:5mm}
.box{border:1.5px solid var(--line);border-radius:4mm;padding:4.5mm 5mm}
.box h3{margin-top:0}
.badge{display:inline-block;border-radius:10mm;padding:1mm 4mm;font-weight:800;font-size:10pt}
/* capa */
.cover{padding:0;background:var(--ce);color:#fff}
.cover .art{position:absolute;right:12mm;top:34mm;width:150mm;height:150mm;background:#fff;border-radius:50%;padding:22mm;color:var(--c)}
.cover .logo{position:absolute;top:12mm;left:17mm;font-weight:800;font-size:12pt}
.cover .logo span{color:${LARANJA}}
.cover .txt{position:absolute;left:17mm;right:17mm;bottom:40mm}
.cover .tags{display:flex;gap:3mm;margin-bottom:5mm}
.cover .tags span{background:#fff;color:var(--ce);border-radius:10mm;padding:1.5mm 5mm;font-weight:800;font-size:11pt}
.cover .tags span.g{background:var(--cl)}
.cover h1{color:#fff;font-size:48pt;margin-bottom:3mm}
.cover .sub{font-size:15pt;opacity:.95;max-width:165mm}
.cover .for{position:absolute;left:17mm;right:17mm;bottom:14mm;display:flex;justify-content:space-between;font-size:10pt;border-top:1px solid rgba(255,255,255,.35);padding-top:4mm}
/* perfil */
.perfil{background:var(--cl);border-radius:5mm;padding:6mm 7mm;margin:4mm 0}
.perfil .n{font-family:Fraunces,serif;font-size:19pt;color:var(--ce);font-weight:700}
.perfil .e{display:inline-block;background:var(--c);color:#fff;border-radius:10mm;padding:1mm 4mm;font-weight:800;font-size:10.5pt;margin:2mm 0 3mm}
table.g{width:100%;border-collapse:separate;border-spacing:0 2mm;font-size:10.5pt}
table.g td{padding:3mm 4mm;vertical-align:top;background:#F9FAFB}
table.g td:first-child{border-radius:3mm 0 0 3mm;width:52mm;font-weight:800}
table.g td:last-child{border-radius:0 3mm 3mm 0}
table.g tr.on td{background:var(--cl);color:var(--ce)}
table.g small{display:block;font-weight:700;color:var(--muted);font-size:9pt}
.nota{font-size:9.5pt;color:var(--muted);margin-top:2mm}
/* mapa */
.mapa{display:grid;grid-template-columns:30mm repeat(3,1fr);gap:2.5mm;font-size:10pt;margin:4mm 0}
.mapa .h{font-weight:800;font-size:9pt;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);display:flex;align-items:flex-end;padding:0 2mm 1mm}
.mapa .r{font-weight:800;display:flex;align-items:center;padding:0 2mm;border-radius:3mm;color:#fff}
.mapa .cel{border:1.5px solid var(--line);border-radius:3mm;padding:2.5mm 3mm;min-height:17mm}
.mapa .cel b{display:block;font-family:Fraunces,serif;font-size:12pt}
.mapa .cel.on{border:2.5px solid var(--c);background:var(--cl)}
.mapa .cel.on:after{content:'este ebook';display:inline-block;margin-top:1mm;font-size:8pt;font-weight:800;color:var(--c);text-transform:uppercase;letter-spacing:.08em}
.rules{counter-reset:r;list-style:none;columns:2;column-gap:6mm}
.rules li{counter-increment:r;position:relative;padding:0 0 1.8mm 9mm;break-inside:avoid;font-size:11pt}
.rules li:before{content:counter(r);position:absolute;left:0;top:.3mm;width:6.5mm;height:6.5mm;border-radius:50%;background:var(--c);color:#fff;font-weight:800;font-size:9.5pt;display:flex;align-items:center;justify-content:center}
/* atividade */
.vis{height:86mm;border-radius:5mm;margin:4mm 0;overflow:hidden}
.vis.ilu{background:var(--cl);color:var(--c);display:flex;align-items:center;justify-content:center;padding:6mm}
.vis.ilu svg{width:74mm;height:74mm}
.vis.ph{background-size:cover;background-position:center}
.vis.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2mm;background:none}
.vis.grid div{background-size:cover;background-position:center;border-radius:4mm}
.info{display:grid;grid-template-columns:repeat(3,1fr);gap:3mm;margin-bottom:4mm}
.info div{background:#F9FAFB;border:1px solid var(--line);border-radius:3mm;padding:2.5mm 3mm}
.info small{display:block;font-size:7.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:800}
.info b{font-size:10.5pt}
.steps{width:100%;border-collapse:separate;border-spacing:0 2.2mm;margin-top:-2mm}
.steps td{vertical-align:top;padding:2.8mm 4mm;font-size:11.5pt}
.steps td.n{width:10mm;padding:2.8mm 0 0}
.steps td.n span{display:flex;width:7.5mm;height:7.5mm;border-radius:50%;background:var(--c);color:#fff;font-weight:800;font-size:10.5pt;align-items:center;justify-content:center}
.steps td.faz{width:72mm;background:#F9FAFB;border-radius:3mm 0 0 3mm}
.steps td.diz{background:var(--cl);border-radius:0 3mm 3mm 0;font-style:italic;color:var(--ce)}
.steps th{text-align:left;font-size:8.5pt;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);padding:0 4mm}
.adapt{display:grid;grid-template-columns:1fr 1fr;gap:3mm}
.adapt div{border-radius:3.5mm;padding:4mm 4.5mm;font-size:11pt}
.adapt .f{background:#ECFDF5}.adapt .f b{color:#047857}
.adapt .d{background:#EFF6FF}.adapt .d b{color:#1D4ED8}
.adapt b,.warn b{display:block;font-size:9pt;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1mm}
.warn{display:grid;grid-template-columns:1fr 1fr;gap:3mm;margin-top:3mm}
.warn div{border-radius:3.5mm;padding:4mm 4.5mm;font-size:11pt}
.warn .a{background:#FEF2F2}.warn .a b{color:#B91C1C}
.warn .s{background:#F5F3FF}.warn .s b{color:#6D28D9}
.lista{columns:2;column-gap:6mm;background:var(--cl);border-radius:4mm;padding:4mm 5mm;font-size:11pt;margin-top:3mm}
.lista div{break-inside:avoid;margin-bottom:1.5mm}
/* anexos */
.cut{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,1fr);gap:0;height:226mm;margin-top:4mm}
.cut div{border:1.5px dashed #9CA3AF;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5mm}
.cut .im{width:100%;flex:1;border-radius:4mm;background-size:cover;background-position:center}
.cut b{font-size:20pt;margin-top:3mm}
/* registo */
table.reg{width:100%;border-collapse:collapse;font-size:10pt}
table.reg th{background:var(--c);color:#fff;text-align:left;padding:2.5mm;font-weight:700}
table.reg td{border:1px solid var(--line);padding:2mm 2.5mm;height:12mm;vertical-align:middle}
table.reg td.a{font-weight:700;width:52mm}
table.reg td.o{text-align:center;color:#9CA3AF;font-size:13pt}
.fields{display:grid;grid-template-columns:2fr 1fr 1fr;gap:5mm;margin-bottom:5mm;font-size:11pt}
.fields div{border-bottom:1px solid #9CA3AF;padding-bottom:1mm}
.cred{font-size:8.5pt;color:#4B5563}
.cred li{margin-bottom:1.6mm}
.endbox{position:absolute;left:17mm;right:17mm;bottom:20mm;background:var(--ce);color:#fff;border-radius:5mm;padding:6mm 8mm}
.endbox h3{color:#fff;margin:0 0 2mm}
`;

function build(f) {
  const T = COL.tipos[f.tipo];
  const P = PALETA[f.tipo];
  const G = grupoInfo(f);
  const etiquetaGrupo = f.tipo === 'cognitivas' ? `Grupo ${f.grupo}` : `Grupo ${f.grupo}`;
  let pg = 1;
  const pages = [];
  const foot = () => `<div class="foot"><span><b>Age in Move</b> · ${esc(T.nome)} · ${esc(etiquetaGrupo)} · ${esc(f.titulo)}</span><span><b>${pg}</b></span></div>`;
  const fotosUsadas = new Set();
  const vis = a => {
    if (a.ilu) return `<div class="vis ilu">${ILU[a.ilu]()}</div>`;
    if (a.foto) { fotosUsadas.add(a.foto); return `<div class="vis ph" style="background-image:url(${foto(a.foto)})"></div>`; }
    a.fotos.forEach(k => fotosUsadas.add(k));
    return `<div class="vis grid">${a.fotos.map(k => `<div style="background-image:url(${foto(k)})"></div>`).join('')}</div>`;
  };

  // 1. Capa
  pages.push(`<section class="page cover"><div class="logo">Age <span>in</span> Move</div>
    <div class="art">${ILU[f.capa]()}</div>
    <div class="txt"><div class="tags"><span>Atividades ${esc(T.nome.toLowerCase())}</span><span class="g">${esc(G.atual.nome)}</span></div>
    <h1>${esc(f.titulo)}</h1><div class="sub">${esc(f.subtitulo)}</div></div>
    <div class="for"><span>Guia prático para animadores e auxiliares</span><span>${esc(G.atual.escala)}</span></div></section>`);
  pg++;

  // 2. Para quem é
  const tabela = (lista, atualId, titulo) => `<h3>${titulo}</h3><table class="g">${lista.map(g => `<tr class="${g.id === atualId ? 'on' : ''}"><td>${esc(g.nome)}<small>${esc(g.escala)}</small></td><td>${esc(g.quem)}</td></tr>`).join('')}</table>`;
  pages.push(`<section class="page">
    <div class="kicker">Antes de começar</div><h2>Para quem é este ebook</h2>
    <p class="lead">${esc(f.introducao)}</p>
    <div class="perfil"><div class="n">${esc(G.atual.nome)}</div><span class="e">${esc(G.atual.escala)}</span><div>${esc(G.atual.quem)}</div><div style="margin-top:2mm;font-size:10.5pt;color:var(--muted)"><b>Onde:</b> ${esc(G.atual.onde)}</div></div>
    ${f.tipo === 'fisicas' ? tabela(COL.gruposFisicos, f.grupo, 'Os 3 grupos das atividades físicas (Índice de Barthel)') : ''}
    ${f.tipo === 'cognitivas' ? tabela(COL.gruposCognitivos, f.grupo, 'Os 3 grupos das atividades cognitivas') + `<p class="nota">${esc(COL.notaMMSE)}</p>` : ''}
    ${f.tipo === 'combinadas' ? `<h3>Como escolher o grupo nas atividades combinadas</h3><p>Avalie a pessoa nas duas escalas — <b>Índice de Barthel</b> (parte física) e <b>estado cognitivo</b> (MMSE ou GDS-R) — e use o grupo <b>mais limitativo</b> dos dois. Este ebook é para quem está no <b>Grupo 1 físico</b> (${esc(G.fis.escala)}) <b>e</b> no <b>Grupo A cognitivo</b> (${esc(G.cog.escala)}).</p><p class="nota">${esc(COL.notaMMSE)}</p>` : ''}
    ${foot()}</section>`);
  pg++;

  // 3. Mapa da coleção + regras
  const linha = (tipo, grupos) => `<div class="r" style="background:${PALETA[tipo].c}">${esc(COL.tipos[tipo].nome)}</div>` + grupos.map(g => {
    const e = COL.ebooks.find(x => x.tipo === tipo && x.grupo === g);
    return `<div class="cel ${tipo === f.tipo && g === f.grupo ? 'on' : ''}"><b>${esc(e.titulo)}</b>${tipo === 'cognitivas' ? 'Grupo ' + g : 'Grupo ' + g}</div>`;
  }).join('');
  pages.push(`<section class="page">
    <div class="kicker">A coleção</div><h2>Nove ebooks, um para cada grupo</h2>
    <p>As atividades estão separadas em três tipos — <b>físicas</b> (só movimento), <b>cognitivas</b> (só mente) e <b>combinadas</b> (as duas ao mesmo tempo) — e cada tipo tem um ebook para cada grau de dependência.</p>
    <div class="mapa"><div></div><div class="h">Grupo 1 / A · mais autónomos</div><div class="h">Grupo 2 / B · dependência moderada</div><div class="h">Grupo 3 / C · dependência grave</div>
      ${linha('fisicas', [1, 2, 3])}${linha('cognitivas', ['A', 'B', 'C'])}${linha('combinadas', [1, 2, 3])}</div>
    <h3>Objetivos deste ebook</h3><ul class="dots">${f.objetivos.map(o => `<li>${esc(o)}</li>`).join('')}</ul>
    <h3>Regras de ouro</h3>
    <ol class="rules"><li><b>Fale de frente, devagar</b>, com frases curtas.</li><li><b>Mostre primeiro</b>, depois peça.</li><li><b>Não diga "está mal"</b>: mostre o caminho certo.</li><li><b>Ajude o mínimo</b>, sem deixar frustrar.</li><li><b>Dê sentido à tarefa</b>: "preciso da sua ajuda".</li><li><b>Elogie o esforço</b>, não só o resultado.</li><li><b>Sessões curtas</b>, com pausas.</li><li><b>Acabe sempre com sucesso.</b></li></ol>
    <div class="box" style="margin-top:3mm"><b>Antes de cada sessão:</b> óculos e aparelho auditivo postos · casa de banho e água · boa luz · cadeiras firmes, travadas · materiais prontos · televisão desligada. <b>Pare</b> se houver dor, cansaço, tonturas, falta de ar ou agitação.</div>
    ${foot()}</section>`);
  pg++;

  // Atividades
  f.atividades.forEach((a, i) => {
    pages.push(`<section class="page">
      <div class="kicker">Atividade ${i + 1} de ${f.atividades.length} · ${esc(T.nome)}</div><h2>${esc(a.nome)}</h2>
      <p class="lead">${esc(a.paraQue)}</p>
      ${vis(a)}
      <div class="info"><div><small>Duração</small><b>${esc(a.duracao)}</b></div><div><small>Grupo</small><b>${esc(a.grupo)}</b></div><div><small>Custo</small><b>${esc(a.custo)}</b></div></div>
      <div class="grid2"><div class="box"><h3>Materiais</h3><ul class="dots">${a.materiais.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div>
      <div class="box"><h3>Preparar antes</h3><ul class="check">${a.preparar.map(m => `<li>${esc(m)}</li>`).join('')}</ul></div></div>
      ${foot()}</section>`);
    pg++;
    pages.push(`<section class="page">
      <div class="kicker">Atividade ${i + 1} · ${esc(a.nome)}</div><h2>Passo a passo</h2>
      <table class="steps"><tr><th></th><th>O que faz</th><th>O que diz</th></tr>
      ${a.passos.map((p, j) => `<tr><td class="n"><span>${j + 1}</span></td><td class="faz">${esc(p.faz)}</td><td class="diz">"${esc(p.diz)}"</td></tr>`).join('')}</table>
      ${a.lista ? `<div class="lista">${a.lista.map(l => `<div>• ${esc(l)}</div>`).join('')}</div>` : ''}
      <h3>Ajustar dentro do grupo</h3>
      <div class="adapt"><div class="f"><b>Mais fácil</b>${esc(a.adaptar.facil)}</div><div class="d"><b>Mais difícil</b>${esc(a.adaptar.dificil)}</div></div>
      <div class="warn"><div class="a"><b>Atenção</b>${esc(a.atencao)}</div><div class="s"><b>Se não correr bem</b>${esc(a.seCorrerMal)}</div></div>
      ${foot()}</section>`);
    pg++;
  });

  // Anexos para recortar
  for (const an of f.anexos || []) {
    an.fotos.forEach(([k]) => fotosUsadas.add(k));
    pages.push(`<section class="page" style="padding-top:12mm">
      <div class="kicker">Anexo para recortar</div><h2 style="margin-bottom:1mm">${esc(an.titulo)}</h2><p style="font-size:10.5pt;color:var(--muted);margin:0">${esc(an.instrucao)}</p>
      <div class="cut">${an.fotos.map(([k, t]) => `<div><div class="im" style="background-image:url(${foto(k)})"></div><b>${esc(t)}</b></div>`).join('')}</div>
      ${foot()}</section>`);
    pg++;
  }

  // Registo
  pages.push(`<section class="page">
    <div class="kicker">Para fotocopiar</div><h2>Registo simples</h2>
    <div class="fields"><div>Nome:</div><div>Mês:</div><div>${esc(etiquetaGrupo)}</div></div>
    <table class="reg"><thead><tr><th>Atividade</th><th style="width:16mm">Data</th><th style="width:20mm">Sozinho</th><th style="width:20mm">Com ajuda</th><th style="width:18mm">Não quis</th><th style="width:18mm">Gostou?</th></tr></thead>
    <tbody>${f.atividades.map(a => `<tr><td class="a">${esc(a.nome)}</td><td></td><td class="o">○</td><td class="o">○</td><td class="o">○</td><td class="o">○</td></tr>`).join('')}</tbody></table>
    <h3>Mudanças que notou</h3>
    <p style="font-size:11pt;color:#4B5563">Mais força ou menos, mais confusão, mais alegria, dor, cansaço… Se a pessoa parecer ter mudado de grupo (mais ou menos autónoma), avise a equipa para reavaliar.</p>
    <div style="height:60mm;border:1px dashed #D1D5DB;border-radius:3mm;background:repeating-linear-gradient(transparent 0 9mm,#E5E7EB 9mm calc(9mm + 1px))"></div>
    ${foot()}</section>`);
  pg++;

  // Créditos e referências
  const creditos = [...fotosUsadas].map(k => CRED[k]).filter(Boolean);
  pages.push(`<section class="page">
    <div class="kicker">Créditos e referências</div><h2>Para saber mais</h2>
    <ul class="dots" style="font-size:10pt">
      <li>Mahoney, F. I., &amp; Barthel, D. W. (1965). Functional evaluation: The Barthel Index. <i>Maryland State Medical Journal, 14</i>, 61–65.</li>
      <li>Folstein, M. F., Folstein, S. E., &amp; McHugh, P. R. (1975). "Mini-Mental State". <i>Journal of Psychiatric Research, 12</i>(3), 189–198.</li>
      <li>Morgado, J., Rocha, C. S., Maruta, C., Guerreiro, M., &amp; Martins, I. P. (2009). Novos valores normativos do Mini-Mental State Examination. <i>Sinapse, 9</i>(2), 10–16.</li>
      <li>Reisberg, B., Ferris, S. H., de Leon, M. J., &amp; Crook, T. (1982). The Global Deterioration Scale for assessment of primary degenerative dementia. <i>American Journal of Psychiatry, 139</i>(9), 1136–1139.</li>
    </ul>
    ${creditos.length ? `<h3>Fotografias</h3><p style="font-size:10pt">Wikimedia Commons, licenças livres. Não remova estes créditos.</p><ul class="cred">${creditos.map(c => `<li><b>${esc(c.titulo.replace(/^File:/, ''))}</b> — ${esc(c.autor)} · ${esc(c.licenca)} · ${esc(c.pagina)}</li>`).join('')}</ul>` : '<p style="font-size:10pt;margin-top:4mm">As ilustrações deste ebook foram desenhadas para a coleção Age in Move.</p>'}
    <div class="endbox"><h3>Age in Move · idade em movimento</h3>Mover o corpo. Despertar a mente. Cuidar com propósito.<br><span style="opacity:.85;font-size:9.5pt">@age_in_move · Este guia apoia o trabalho das equipas e não substitui a avaliação e a orientação do terapeuta ou do médico de cada pessoa.</span></div>
    </section>`);
  return `<!doctype html><html lang="pt-PT"><head><meta charset="utf-8"><title>${esc(f.titulo)} — Age in Move</title><style>${css(P)}</style></head><body>${pages.join('\n')}</body></html>`;
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
    const file = path.join(OUT, `${f.slug}.pdf`);
    await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.relative(ROOT, file));
  }
  await browser.close();
})();
