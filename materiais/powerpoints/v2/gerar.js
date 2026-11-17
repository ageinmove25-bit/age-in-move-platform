// Gera os PowerPoints v2 (fotografias reais, letra grande, adaptados a grupos mistos).
// Uso: node powerpoints/v2/gerar.js [slug]   (a partir da pasta materiais/)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const pptxgen = require('pptxgenjs');
const { FaMusic, FaCheck } = require('react-icons/fa');

const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(__dirname, '..', 'pptx', 'v2');
const IMG = path.join(ROOT, 'fotos', 'img');
const CRED = JSON.parse(fs.readFileSync(path.join(ROOT, 'fotos', 'creditos.json'), 'utf8'));
const DECKS = fs.readdirSync(__dirname).filter(f => f !== 'gerar.js' && f.endsWith('.js')).map(f => require(path.join(__dirname, f)));
const W = 10, H = 5.625, M = 0.5, PPI = 150;

// Fotografia recortada (cover) exatamente para a caixa onde vai ficar — nunca deformada.
async function foto(k, w, h) {
  const buf = await sharp(path.join(IMG, k + '.jpg')).resize(Math.round(w * PPI), Math.round(h * PPI), { fit: 'cover', position: sharp.strategy.attention }).jpeg({ quality: 80 }).toBuffer();
  return 'image/jpeg;base64,' + buf.toString('base64');
}
async function icon(C, color) {
  const svg = renderToStaticMarkup(React.createElement(C, { size: 256, color: '#' + color }));
  return 'image/png;base64,' + (await sharp(Buffer.from(svg)).png().toBuffer()).toString('base64');
}

async function build(d) {
  const P = d.paleta, F = d.fontes;
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = `${d.titulo} — Age in Move`;
  pres.author = 'Age in Move';
  pres.company = 'Age in Move';
  pres.theme = { headFontFace: F.titulo, bodyFontFace: F.corpo };
  const VERDE = '15803D', CINZA = '6B7280';

  const footer = (cor) => [{ text: { text: `Age in Move · ${d.titulo}`, options: { x: M, y: H - 0.38, w: 5, h: 0.28, fontFace: F.corpo, fontSize: 10, color: cor, margin: 0 } } }];
  const title = (cor) => ({ placeholder: { options: { name: 'title', type: 'title', x: M, y: 0.25, w: W - 2 * M, h: 0.9, fontFace: F.titulo, fontSize: 36, bold: true, color: cor, align: 'left', valign: 'middle', margin: 0 }, text: '' } });
  pres.defineSlideMaster({ title: 'CLARO', background: { color: 'FFFFFF' }, objects: [...footer(CINZA), title(P.escuro)], slideNumber: { x: W - M - 0.5, y: H - 0.38, w: 0.5, h: 0.28, fontFace: F.corpo, fontSize: 10, color: CINZA, align: 'right' } });
  pres.defineSlideMaster({ title: 'ESCURO', background: { color: P.escuro }, objects: [...footer('FFFFFF'), title('FFFFFF')], slideNumber: { x: W - M - 0.5, y: H - 0.38, w: 0.5, h: 0.28, fontFace: F.corpo, fontSize: 10, color: 'FFFFFF', align: 'right' } });

  const txt = (s, text, o) => s.addText(text, { isTextBox: true, fontFace: F.corpo, color: P.texto, margin: 0, valign: 'middle', ...o });
  const img = async (s, k, x, y, w, h) => s.addImage({ data: await foto(k, w, h), x, y, w, h, altText: k });
  const add = (master, notas, opts = {}) => { const s = pres.addSlide({ masterName: master, ...opts }); if (notas) s.addNotes(notas); return s; };
  const T = (s, t) => s.addText(t, { placeholder: 'title' });
  const usadas = new Set();
  const use = k => { usadas.add(k); return k; };

  // Capa
  { const s = pres.addSlide(); s.background = { color: P.escuro };
    await img(s, use(d.capaFoto), 5.2, 0, 4.8, H);
    txt(s, 'AGE IN MOVE', { x: M, y: 0.55, w: 4.4, h: 0.35, fontSize: 12, bold: true, color: P.acento, charSpacing: 3 });
    s.addText(d.titulo, { isTextBox: true, x: M, y: 1.4, w: 4.5, h: 1.9, fontFace: F.titulo, fontSize: 46, bold: true, color: 'FFFFFF', margin: 0, valign: 'bottom' });
    txt(s, d.subtitulo, { x: M, y: 3.45, w: 4.4, h: 0.9, fontSize: 20, color: 'FFFFFF', valign: 'top' });
    txt(s, 'Sessão de grupo · cerca de 45 minutos · sentados', { x: M, y: 4.75, w: 4.4, h: 0.35, fontSize: 12, color: 'FFFFFF' });
    s.addNotes('Antes de começar, veja o diapositivo seguinte ("Para o animador"): está oculto e não aparece durante a apresentação.'); }

  for (const sl of d.diapositivos) {
    switch (sl.tipo) {
      case 'guia': {
        const s = add('CLARO', 'Este diapositivo está oculto: só se vê no modo de edição.', { hidden: true }); T(s, 'Para o animador');
        const itens = [
          ['Antes', 'Sentar o grupo em meia-lua, a 2–3 metros do ecrã. Óculos e aparelhos auditivos postos. Som da sala desligado.'],
          ['Durante', 'Leia as notas de cada diapositivo (o que dizer e como adaptar). Avance só quando todos tiverem respondido.'],
          ['Respostas', 'Ninguém "falha": se alguém não souber, diga a resposta com naturalidade e passe à frente.'],
          ['Adaptar', 'MAIS FÁCIL = pessoas com demência ou em lar. MAIS DIFÍCIL = pessoas autónomas. Pode usar os dois no mesmo grupo.'],
          ['Materiais', 'Opcional: um sino, um postal e um cachecol verdadeiros, para passar de mão em mão durante a sessão.']
        ];
        for (const [i, [a, b]] of itens.entries()) {
          const y = 1.3 + i * 0.75;
          txt(s, a, { x: M, y, w: 1.6, h: 0.65, fontSize: 16, bold: true, color: P.primaria, valign: 'top' });
          txt(s, b, { x: M + 1.7, y, w: 7.3, h: 0.65, fontSize: 15, valign: 'top' });
        }
        break; }
      case 'boasvindas': {
        const s = add('CLARO', sl.notas);
        await img(s, use(sl.foto), 0, 0, 4.6, H);
        s.addText(sl.titulo, { isTextBox: true, x: 5.1, y: 1.1, w: 4.4, h: 1.6, fontFace: F.titulo, fontSize: 38, bold: true, color: P.escuro, margin: 0, valign: 'bottom' });
        txt(s, sl.texto, { x: 5.1, y: 2.9, w: 4.4, h: 1.5, fontSize: 24, valign: 'top' });
        break; }
      case 'aquecimento': {
        const s = add('CLARO', sl.notas); T(s, sl.titulo);
        txt(s, sl.subtitulo, { x: M, y: 1.05, w: 9, h: 0.4, fontSize: 18, color: P.primaria, bold: true });
        for (const [i, it] of sl.itens.entries()) {
          const x = M + i * 2.3;
          await img(s, use(it.foto), x, 1.6, 2.1, 1.75);
          txt(s, it.t, { x, y: 3.45, w: 2.1, h: 0.75, fontSize: 19, bold: true, color: P.escuro, valign: 'top' });
          txt(s, it.d, { x, y: 4.15, w: 2.1, h: 0.8, fontSize: 15, valign: 'top' });
        }
        break; }
      case 'memorizar': case 'fotos3': {
        const s = add('CLARO', sl.notas); T(s, sl.titulo);
        const y0 = sl.subtitulo ? 1.55 : 1.35;
        if (sl.subtitulo) txt(s, sl.subtitulo, { x: M, y: 1.05, w: 9, h: 0.4, fontSize: 18, color: P.primaria, bold: true });
        for (const [i, it] of sl.itens.entries()) {
          const x = M + i * 3.075;
          await img(s, use(it.foto), x, y0, 2.85, 2.6);
          const show = sl.tipo === 'memorizar' || sl.revelar;
          txt(s, show ? it.t : '?', { x, y: y0 + 2.7, w: 2.85, h: 0.6, fontSize: 26, bold: true, color: show ? P.escuro : P.acento, align: show ? 'left' : 'center' });
        }
        break; }
      case 'escolha': case 'reconhecer': {
        const s = add('CLARO', sl.notas); T(s, sl.titulo);
        const revelada = sl.tipo === 'escolha' && sl.certa !== null;
        for (const [i, o] of sl.opcoes.entries()) {
          const x = M + i * 4.6, y = 1.35, w = 4.4, h = 2.95;
          await img(s, use(o.foto), x, y, w, h);
          if (revelada && i !== sl.certa) s.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { color: 'FFFFFF', transparency: 35 }, line: { type: 'none' } });
          if (revelada && i === sl.certa) {
            s.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { type: 'none' }, line: { color: VERDE, width: 6 } });
            s.addShape(pres.ShapeType.ellipse, { x: x + w - 0.85, y: y + 0.15, w: 0.7, h: 0.7, fill: { color: VERDE }, line: { color: 'FFFFFF', width: 2 } });
            s.addImage({ data: await icon(FaCheck, 'FFFFFF'), x: x + w - 0.69, y: y + 0.31, w: 0.38, h: 0.38 });
          }
          txt(s, o.t, { x, y: 4.38, w, h: 0.6, fontSize: 26, bold: true, color: revelada && i !== sl.certa ? '9CA3AF' : P.escuro });
        }
        break; }
      case 'natalverao': {
        const s = add('CLARO', sl.notas); T(s, sl.titulo);
        await img(s, use(sl.foto), M, 1.3, 5.4, 3.7);
        txt(s, sl.t, { x: 6.2, y: 1.3, w: 3.3, h: 0.9, fontSize: 32, bold: true, color: P.escuro, fontFace: F.titulo });
        const regras = [['NATAL', 'braços para cima', P.primaria], ['VERÃO', 'abanar-se com a mão', P.acento]];
        for (const [i, [a, b, c]] of regras.entries()) {
          const y = 2.45 + i * 1.3;
          s.addShape(pres.ShapeType.roundRect, { x: 6.2, y, w: 3.3, h: 1.1, fill: { color: c }, line: { color: c }, rectRadius: 0.15 });
          txt(s, [{ text: a, options: { fontSize: 24, bold: true, breakLine: true } }, { text: b, options: { fontSize: 17 } }], { x: 6.4, y, w: 3.0, h: 1.1, color: 'FFFFFF' });
        }
        break; }
      case 'cancao': {
        const s = add('ESCURO', sl.notas); T(s, sl.titulo);
        s.addImage({ data: await icon(FaMusic, P.acento), x: M, y: 1.45, w: 0.7, h: 0.7 });
        const runs = [];
        sl.linhas.forEach((l, i) => {
          const parts = l.split('___');
          parts.forEach((p, j) => {
            runs.push({ text: p, options: {} });
            if (j < parts.length - 1) runs.push({ text: '_______', options: { color: P.acento, bold: true } });
          });
          if (i < sl.linhas.length - 1) runs[runs.length - 1].options.breakLine = true;
        });
        s.addText(runs, { isTextBox: true, x: M + 1.0, y: 1.3, w: 8.0, h: 3.5, fontFace: F.titulo, fontSize: sl.linhas.length > 1 ? 32 : 40, bold: true, color: 'FFFFFF', margin: 0, valign: sl.linhas.length > 1 ? 'top' : 'middle', lineSpacingMultiple: 1.15 });
        break; }
      case 'contar': {
        const s = add('CLARO', sl.notas); T(s, sl.titulo);
        await img(s, use(sl.foto), M, 1.3, 5.8, 3.75);
        if (sl.resposta) {
          s.addShape(pres.ShapeType.ellipse, { x: 6.9, y: 1.7, w: 2.6, h: 2.6, fill: { color: P.acento }, line: { color: P.acento } });
          txt(s, String(d.numeros[sl.resposta]), { x: 6.9, y: 1.7, w: 2.6, h: 2.6, fontSize: 110, bold: true, color: 'FFFFFF', align: 'center', fontFace: F.titulo });
        } else {
          txt(s, 'Vamos contar juntos!', { x: 6.7, y: 2.3, w: 2.9, h: 1.2, fontSize: 26, bold: true, color: P.primaria });
        }
        break; }
      case 'conversa': {
        const s = add('CLARO', sl.notas);
        await img(s, use(sl.foto), 5.6, 0, 4.4, H);
        s.addText(sl.titulo, { isTextBox: true, x: M, y: 0.45, w: 4.8, h: 1.7, fontFace: F.titulo, fontSize: 34, bold: true, color: P.escuro, margin: 0, valign: 'middle' });
        for (const [i, p] of sl.pistas.entries()) {
          const y = 2.35 + i * 0.92;
          s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 4.8, h: 0.78, fill: { color: P.claro }, line: { color: P.claro }, rectRadius: 0.12 });
          txt(s, p, { x: M + 0.25, y, w: 4.4, h: 0.78, fontSize: 20 });
        }
        break; }
      case 'fecho': {
        const s = add('ESCURO', sl.notas); T(s, sl.titulo);
        await img(s, use(sl.foto), M, 1.3, 3.6, 3.7);
        for (const [i, p] of sl.passos.entries()) {
          const y = 1.4 + i * 1.05;
          s.addShape(pres.ShapeType.ellipse, { x: 4.5, y, w: 0.75, h: 0.75, fill: { color: P.acento }, line: { color: P.acento } });
          txt(s, String(i + 1), { x: 4.5, y, w: 0.75, h: 0.75, fontSize: 24, bold: true, color: 'FFFFFF', align: 'center' });
          txt(s, p, { x: 5.45, y: y - 0.1, w: 4.05, h: 0.95, fontSize: 21, color: 'FFFFFF' });
        }
        s.addText('Obrigado! Feliz Natal!', { isTextBox: true, x: 4.5, y: 3.75, w: 5.0, h: 1.0, fontFace: F.titulo, fontSize: 34, bold: true, color: P.acento, margin: 0 });
        break; }
      case 'creditos': {
        const s = add('CLARO', 'Créditos das fotografias. Pode ocultar este diapositivo durante a sessão, mas não o apague: as licenças pedem que o autor seja indicado.'); T(s, 'Créditos das fotografias');
        const lista = [...usadas].map(k => { const c = CRED[k]; return `${c.titulo.replace(/^File:/, '')} — ${c.autor} (${c.licenca})`; });
        txt(s, lista.map((t, i) => ({ text: t, options: { breakLine: i < lista.length - 1 } })), { x: M, y: 1.25, w: 9, h: 3.85, fontSize: 10, valign: 'top', color: '374151', paraSpaceAfter: 3 });
        break; }
      default: throw new Error('Tipo desconhecido: ' + sl.tipo);
    }
  }
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `${d.slug}.pptx`);
  await pres.writeFile({ fileName: file });
  // Remove entradas de pastas do ZIP (impedem abrir o ficheiro em alguns serviços na nuvem)
  require('child_process').execFileSync('zip', ['-dq', file, '*/'], { stdio: 'ignore' });
  return file;
}

(async () => {
  for (const d of DECKS) {
    if (process.argv[2] && d.slug !== process.argv[2]) continue;
    console.log('✓', path.relative(ROOT, await build(d)));
  }
})().catch(e => { console.error(e); process.exit(1); });
