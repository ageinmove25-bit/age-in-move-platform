// Copia o conteúdo dos ebooks (dados.js) para dentro da app (index.html),
// para que as atividades possam ser consultadas e juntadas ao plano do paciente.
// Usar depois de editar dados.js:   node ebooks/exportar-para-app.js   (dentro da pasta materiais)
const fs = require('fs');
const path = require('path');

const dados = require('./dados.js');
const appPath = path.join(__dirname, '..', '..', 'index.html');
const INICIO = '// <EBOOKS> gerado por materiais/ebooks/exportar-para-app.js — não editar à mão';
const FIM = '// </EBOOKS>';

const ebooks = dados.map(v => ({
  slug: v.slug, vol: v.vol, titulo: v.titulo, subtitulo: v.subtitulo, cor: v.cor, corClara: v.corClara,
  definicao: v.definicao, envelhecimento: v.envelhecimento, sinais: v.sinais, cognicao: v.cognicao, objetivos: v.objetivos,
  pdf: `materiais/ebooks/pdf/Vol${v.vol}-${v.slug}.pdf`,
  atividades: v.atividades.map(a => ({
    nome: a.nome, objetivo: a.objetivo, cognitivo: a.cognitivo, duracao: a.duracao, nivel: a.nivel, posicao: a.posicao,
    materiais: a.materiais, passos: a.passos, facilitar: a.facilitar, dificultar: a.dificultar, dica: a.dica,
  })),
}));

// Confirma que os PDFs referidos existem
for (const e of ebooks) {
  if (!fs.existsSync(path.join(__dirname, '..', '..', e.pdf))) console.warn('Aviso: PDF em falta →', e.pdf);
}

const bloco = `${INICIO}\nconst EBOOKS=${JSON.stringify(ebooks)};\n${FIM}`;
let html = fs.readFileSync(appPath, 'utf8');
const a = html.indexOf(INICIO), b = html.indexOf(FIM);
if (a === -1 || b === -1) {
  console.error('Não encontrei os marcadores <EBOOKS> no index.html.');
  process.exit(1);
}
html = html.slice(0, a) + bloco + html.slice(b + FIM.length);
fs.writeFileSync(appPath, html);
console.log(`OK: ${ebooks.length} ebooks e ${ebooks.reduce((n, e) => n + e.atividades.length, 0)} atividades copiados para index.html`);
