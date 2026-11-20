// Gera as páginas públicas por condição (condicoes/*.html), o índice, o sitemap.xml e o robots.txt
// a partir de condicoes/conteudos.js.   Uso: node scripts/gerar-paginas-condicoes.js
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const { baseUrl, condicoes } = require(path.join(raiz, 'condicoes', 'conteudos.js'));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const css = `
:root{--navy:#16224f;--violet:#4f3c94;--blue:#4361ee;--blue-d:#3448c5;--rose:#e9a6d6;--bg:#f5f6fb;--fg:#16224f;--muted:#5b6385;--card:#fff;--line:#dde1ef}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font-family:'Segoe UI',system-ui,-apple-system,sans-serif;font-size:17px;line-height:1.65}
a{color:var(--blue-d)}
.top{background:linear-gradient(135deg,var(--navy),var(--violet));color:#fff;padding:calc(14px + env(safe-area-inset-top)) max(16px,env(safe-area-inset-left)) 14px max(16px,env(safe-area-inset-right))}
.top .in{max-width:860px;margin:0 auto;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;flex:1;min-width:200px}
.brand img{width:40px;height:40px;border-radius:50%}
.brand b{display:block;font-size:18px}.brand i{display:block;font-size:12px;color:var(--rose)}
.btn{display:inline-block;padding:12px 20px;border-radius:12px;font-weight:700;text-decoration:none;font-size:16px}
.btn-p{background:var(--blue);color:#fff}.btn-p:hover{background:var(--blue-d)}
.btn-o{border:1px solid rgba(255,255,255,.4);color:#fff}
.btn-s{background:#eef1ff;color:var(--blue-d)}
.hero{background:linear-gradient(135deg,var(--navy),var(--violet));color:#fff;padding:28px max(16px,env(safe-area-inset-left)) 40px max(16px,env(safe-area-inset-right))}
.hero .in,.wrap{max-width:860px;margin:0 auto}
.eyebrow{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--rose);font-weight:700}
h1{font-size:clamp(28px,5vw,40px);line-height:1.15;margin:8px 0 12px;text-wrap:balance}
.hero p{color:#dfe4fb;max-width:65ch;margin:0 0 20px}
.cta{display:flex;gap:10px;flex-wrap:wrap}
.wrap{padding:24px max(16px,env(safe-area-inset-left)) 40px max(16px,env(safe-area-inset-right))}
section{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px 22px;margin-bottom:16px}
h2{font-size:22px;margin:0 0 10px}
ul{margin:0;padding-left:22px}li{margin:4px 0}
.alerta{border-left:5px solid #d97706;background:#fffbeb}
.faq h3{font-size:17px;margin:14px 0 4px}.faq p{margin:0;color:#334155}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px}
.card{display:block;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;text-decoration:none;color:var(--fg)}
.card:hover{border-color:var(--blue)}
.card b{display:block;font-size:18px;margin-bottom:4px}.card span{color:var(--muted);font-size:15px}
.note{font-size:13px;color:var(--muted)}
footer{max-width:860px;margin:0 auto;padding:0 max(16px,env(safe-area-inset-left)) calc(32px + env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-right));font-size:13px;color:var(--muted)}
a:focus-visible{outline:3px solid var(--rose);outline-offset:2px}
`;

const head = (titulo, descricao, url) => `<!doctype html>
<html lang="pt-PT">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(titulo)} · Age in Move</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(titulo)} · Age in Move">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${baseUrl}icons/icon-512.png">
<meta property="og:locale" content="pt_PT">
<meta name="theme-color" content="#16224f">
<link rel="icon" type="image/png" href="../icons/icon-192.png">
<link rel="apple-touch-icon" href="../icons/icon-180.png">
<style>${css}</style>
</head>
<body>
<header class="top"><div class="in">
  <a class="brand" href="../"><img src="../icons/icon-192.png" alt=""><span><b>Age in Move</b><i>idade em movimento</i></span></a>
  <a class="btn btn-o" href="../#teste">Teste grátis</a>
</div></header>`;

const footer = `<footer>
  <p>Age in Move · idade em movimento · @age_in_move — Exercício físico e estimulação cognitiva para o envelhecimento ativo.</p>
  <p>A informação desta página é geral e não substitui a avaliação por um profissional de saúde.</p>
</footer>
</body>
</html>
`;

const pagina = c => {
  const url = `${baseUrl}condicoes/${c.slug}.html`;
  const outras = condicoes.filter(x => x.slug !== c.slug);
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.perguntas.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
  return `${head(c.tituloSeo, c.descricao, url)}
<div class="hero"><div class="in">
  <div class="eyebrow">Condições que acompanhamos</div>
  <h1>${esc(c.titulo)}</h1>
  <p>${esc(c.intro)}</p>
  <div class="cta"><a class="btn btn-p" href="../#teste">Fazer o teste grátis</a><a class="btn btn-o" href="../">Sou profissional</a></div>
</div></div>
<main class="wrap">
  <section><h2>Como a Age in Move pode ajudar</h2><ul>${c.ajuda.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section><h2>O que avaliamos</h2><p>No início, ao longo do acompanhamento e no fim, para medir a evolução:</p><ul>${c.avaliamos.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section><h2>Programa intensivo</h2><p>Para quem quer resultados num período definido: um bloco de 4 a 8 semanas, com 3 a 5 sessões por semana, avaliação no início e reavaliação no fim para comparar.</p></section>
  <section class="alerta"><h2>Quando procurar ajuda médica</h2><ul>${c.alerta.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>
  <section class="faq"><h2>Perguntas frequentes</h2>${c.perguntas.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>
  <h2>Outras condições</h2>
  <div class="cards">${outras.map(o => `<a class="card" href="${o.slug}.html"><b>${esc(o.titulo)}</b><span>${esc(o.descricao)}</span></a>`).join('')}</div>
</main>
<script type="application/ld+json">${JSON.stringify(faqLd)}</script>
${footer}`;
};

const indice = () => {
  const url = `${baseUrl}condicoes/`;
  return `${head('Condições que acompanhamos', 'Exercício físico e estimulação cognitiva para Parkinson, pós-AVC, défice cognitivo e demência ligeira, risco de queda e depressão no idoso.', url)}
<div class="hero"><div class="in">
  <div class="eyebrow">Age in Move</div>
  <h1>Condições que acompanhamos</h1>
  <p>Programas de exercício físico e estimulação cognitiva adaptados a cada condição, com avaliação regular, plano para casa e acompanhamento da família.</p>
  <div class="cta"><a class="btn btn-p" href="../#teste">Fazer o teste grátis</a></div>
</div></div>
<main class="wrap"><div class="cards">${condicoes.map(c => `<a class="card" href="${c.slug}.html"><b>${esc(c.titulo)}</b><span>${esc(c.descricao)}</span></a>`).join('')}</div></main>
${footer}`;
};

const dir = path.join(raiz, 'condicoes');
for (const c of condicoes) fs.writeFileSync(path.join(dir, `${c.slug}.html`), pagina(c));
fs.writeFileSync(path.join(dir, 'index.html'), indice());

const hoje = new Date().toISOString().slice(0, 10);
const urls = [baseUrl, `${baseUrl}condicoes/`, ...condicoes.map(c => `${baseUrl}condicoes/${c.slug}.html`)];
fs.writeFileSync(path.join(raiz, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(raiz, 'robots.txt'), `User-agent: *
Allow: /
Sitemap: ${baseUrl}sitemap.xml
`);
console.log(`OK: ${condicoes.length} páginas + índice em condicoes/, sitemap.xml e robots.txt`);
