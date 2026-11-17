// Gera os PowerPoints temáticos (sessões de grupo de estimulação cognitiva e motora).
// Uso: node powerpoints/gerar-powerpoints.js [slug]   (a partir da pasta materiais/)
const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const sharp = require('sharp');
const pptxgen = require('pptxgenjs');
const TEMAS = require('./temas');

const OUT = path.join(__dirname, 'pptx');
const SETS = { fa: require('react-icons/fa'), gi: require('react-icons/gi') };
const W = 10, H = 5.625, M = 0.5;
const cache = new Map();

async function icon(name, color) {
  const key = name + color;
  if (cache.has(key)) return cache.get(key);
  const [set, comp] = name.split(':');
  const C = SETS[set] && SETS[set][comp];
  if (!C) throw new Error('Ícone inexistente: ' + name);
  const svg = renderToStaticMarkup(React.createElement(C, { size: 256, color: '#' + color }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  const data = 'image/png;base64,' + buf.toString('base64');
  cache.set(key, data);
  return data;
}

async function build(t) {
  const P = t.paleta, F = t.fontes;
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = `${t.titulo} — Age in Move`;
  pres.author = 'Age in Move';
  pres.company = 'Age in Move';
  pres.theme = { headFontFace: F.titulo, bodyFontFace: F.corpo };

  const holder = t.motivo === 'circle' ? pres.ShapeType.ellipse : pres.ShapeType.roundRect;
  const holderOpts = t.motivo === 'circle' ? {} : { rectRadius: 0.18 };
  const foot = (dark) => [
    { text: { text: `Age in Move · ${t.titulo}`, options: { x: M, y: H - 0.42, w: 5, h: 0.3, fontFace: F.corpo, fontSize: 10, color: dark ? 'FFFFFF' : '6B7280', margin: 0 } } }];

  pres.defineSlideMaster({ title: 'CONTEUDO', background: { color: 'FFFFFF' },
    objects: [...foot(false), { placeholder: { options: { name: 'title', type: 'title', x: M, y: 0.32, w: 6.75, h: 0.8, fontFace: F.titulo, fontSize: 30, bold: true, color: P.escuro, align: 'left', valign: 'middle', margin: 0 }, text: '' } }],
    slideNumber: { x: W - M - 0.5, y: H - 0.42, w: 0.5, h: 0.3, fontFace: F.corpo, fontSize: 10, color: '6B7280', align: 'right' } });
  pres.defineSlideMaster({ title: 'ESCURO', background: { color: P.escuro },
    objects: [...foot(true), { placeholder: { options: { name: 'title', type: 'title', x: M, y: 0.32, w: 6.75, h: 0.8, fontFace: F.titulo, fontSize: 30, bold: true, color: 'FFFFFF', align: 'left', valign: 'middle', margin: 0 }, text: '' } }],
    slideNumber: { x: W - M - 0.5, y: H - 0.42, w: 0.5, h: 0.3, fontFace: F.corpo, fontSize: 10, color: 'FFFFFF', align: 'right' } });

  // ---- helpers ----
  const box = (s, x, y, w, h, fill, extra = {}) => s.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: fill }, line: { color: fill }, rectRadius: 0.12, ...extra });
  const txt = (s, text, o) => s.addText(text, { isTextBox: true, fontFace: F.corpo, color: P.texto, margin: 0, valign: 'middle', ...o });
  const ico = async (s, name, x, y, d, bg, fg = 'FFFFFF') => {
    s.addShape(holder, { x, y, w: d, h: d, fill: { color: bg }, line: { color: bg }, ...holderOpts });
    const p = d * 0.22;
    s.addImage({ data: await icon(name, fg), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
  };
  const chip = async (s, label, name, dark = false) => {
    const x = W - M - 2.1, y = 0.47;
    s.addShape(pres.ShapeType.roundRect, { x, y, w: 2.1, h: 0.5, fill: { color: dark ? P.primaria : P.suave }, line: { color: dark ? P.primaria : P.suave }, rectRadius: 0.25 });
    s.addImage({ data: await icon(name, dark ? 'FFFFFF' : P.primaria), x: x + 0.15, y: y + 0.1, w: 0.3, h: 0.3 });
    txt(s, label, { x: x + 0.55, y, w: 1.5, h: 0.5, fontSize: 13, bold: true, color: dark ? 'FFFFFF' : P.primaria });
  };
  const slide = (master = 'CONTEUDO') => pres.addSlide({ masterName: master });
  const titulo = (s, text) => s.addText(text, { placeholder: 'title' });
  const sol = [];

  // 1. Capa
  { const s = pres.addSlide(); s.background = { color: P.escuro };
    s.addShape(pres.ShapeType.ellipse, { x: 6.1, y: 0.75, w: 4.6, h: 4.6, fill: { color: P.primaria }, line: { color: P.primaria } });
    s.addShape(pres.ShapeType.ellipse, { x: 8.7, y: 3.8, w: 1.5, h: 1.5, fill: { color: P.acento }, line: { color: P.acento } });
    s.addImage({ data: await icon(t.icone, 'FFFFFF'), x: 7.35, y: 2.0, w: 2.1, h: 2.1 });
    txt(s, 'AGE IN MOVE · IDADE EM MOVIMENTO', { x: M, y: 0.5, w: 5.5, h: 0.35, fontSize: 12, bold: true, color: P.acento, charSpacing: 3 });
    s.addText(t.titulo, { isTextBox: true, x: M, y: 1.55, w: 5.6, h: 1.5, fontFace: F.titulo, fontSize: 44, bold: true, color: 'FFFFFF', margin: 0, valign: 'bottom' });
    txt(s, t.subtitulo, { x: M, y: 3.15, w: 5.4, h: 0.8, fontSize: 20, color: 'FFFFFF', valign: 'top' });
    txt(s, 'Sessão de grupo · Estimulação cognitiva e motora', { x: M, y: 4.75, w: 5.4, h: 0.35, fontSize: 12, color: P.suave });
    s.addNotes(`Sessão temática "${t.titulo}". Duração prevista: 45–60 min. Materiais: cadeiras em semicírculo, ecrã visível para todos, opcionalmente música e objetos relacionados com o tema. Comece por cumprimentar cada participante pelo nome.`); }

  // 2. Orientação
  { const s = slide(); titulo(s, 'Hoje é…'); await chip(s, 'Orientação', 'fa:FaCalendarAlt');
    const cards = [['fa:FaCalendarAlt', 'Dia da semana'], ['fa:FaClock', 'Data de hoje'], ['fa:FaCloudSun', 'Estação do ano'], ['fa:FaMapMarkerAlt', 'Onde estamos']];
    for (const [i, [ic, lab]] of cards.entries()) {
      const x = M + (i % 2) * 4.6, y = 1.4 + Math.floor(i / 2) * 1.8;
      box(s, x, y, 4.4, 1.6, P.claro);
      await ico(s, ic, x + 0.3, y + 0.35, 0.9, P.primaria);
      txt(s, lab, { x: x + 1.45, y: y + 0.25, w: 2.8, h: 0.55, fontSize: 22, bold: true, color: P.escuro });
      s.addShape(pres.ShapeType.line, { x: x + 1.45, y: y + 1.2, w: 2.65, h: 0, line: { color: P.primaria, width: 1.5, dashType: 'dash' } });
    }
    s.addNotes(`Orientação para a realidade. Preencha em conjunto (pode escrever num quadro). Pergunta extra: ${t.orientacao.lugar}`); }

  // 3. Aquecimento
  { const s = slide(); titulo(s, 'Vamos aquecer o corpo'); await chip(s, 'Aquecimento', 'fa:FaWalking');
    for (const [i, a] of t.aquecimento.entries()) {
      const x = M + i * 2.3, y = 1.4;
      box(s, x, y, 2.1, 3.5, P.claro);
      await ico(s, a.i, x + 0.5, y + 0.3, 1.1, P.primaria);
      txt(s, a.t, { x: x + 0.12, y: y + 1.5, w: 1.86, h: 0.75, fontSize: 17, bold: true, color: P.escuro, align: 'center' });
      txt(s, a.d, { x: x + 0.12, y: y + 2.25, w: 1.86, h: 0.6, fontSize: 14, align: 'center' });
      txt(s, a.n, { x: x + 0.12, y: y + 2.85, w: 1.86, h: 0.5, fontSize: 26, bold: true, color: P.destaque, align: 'center' });
    }
    s.addNotes('Todos os exercícios podem ser feitos sentados. Demonstre cada um, conte em voz alta com o grupo e respeite os limites de cada pessoa. Respiração tranquila, sem prender o ar.'); }

  // 4. Memorizar
  const tile = async (s, it, x, y, w = 2.8, h = 1.6) => {
    box(s, x, y, w, h, P.claro);
    await ico(s, it.i, x + 0.25, y + (h - 0.85) / 2, 0.85, P.primaria);
    const longa = Math.max(...it.t.split(' ').map(x => x.length)) > 11;
    txt(s, it.t, { x: x + 1.25, y, w: w - 1.35, h, fontSize: longa ? 16 : 19, bold: true, color: P.escuro });
  };
  { const s = slide(); titulo(s, 'Memorize estes objetos'); await chip(s, 'Memória', 'fa:FaBrain');
    for (const [i, it] of t.memoria.itens.entries()) await tile(s, it, M + (i % 3) * 3.1, 1.4 + Math.floor(i / 3) * 1.85);
    s.addNotes('Leia os nomes em voz alta com o grupo e deixe o diapositivo visível 30–45 segundos. Diga: "Daqui a pouco vamos ver se alguém dá pela falta de algum." Não volte atrás depois de avançar.'); }

  // 5–6. Quiz
  for (const [qi, q] of t.quiz.entries()) {
    const s = slide(); titulo(s, `Sabe a resposta?`); await chip(s, 'Conhecimento', 'fa:FaSearch');
    txt(s, q.p, { x: M, y: 1.3, w: 9, h: 1.05, fontSize: 26, bold: true, color: P.texto, fontFace: F.titulo });
    for (const [i, o] of q.o.entries()) {
      const x = M + (i % 2) * 4.6, y = 2.55 + Math.floor(i / 2) * 1.2;
      box(s, x, y, 4.4, 1.0, P.claro);
      s.addShape(holder, { x: x + 0.2, y: y + 0.17, w: 0.66, h: 0.66, fill: { color: P.acento }, line: { color: P.acento }, ...holderOpts });
      txt(s, 'ABCD'[i], { x: x + 0.2, y: y + 0.17, w: 0.66, h: 0.66, fontSize: 22, bold: true, color: 'FFFFFF', align: 'center' });
      txt(s, o, { x: x + 1.05, y, w: 3.25, h: 1.0, fontSize: 22 });
    }
    const r = `${'ABCD'[q.r]}) ${q.o[q.r]}`;
    sol.push(`Pergunta ${qi + 1}: ${r}`);
    s.addNotes(`Resposta: ${r}. Dê tempo para todos pensarem antes de aceitar respostas. Aproveite para conversar sobre o tema.`);
  }

  // 7. Intruso
  { const s = slide(); titulo(s, 'Qual é o intruso?'); await chip(s, 'Raciocínio', 'fa:FaSearch');
    for (const [i, it] of t.intruso.itens.entries()) {
      const x = M + i * 2.3, y = 1.4;
      box(s, x, y, 2.1, 2.95, P.claro);
      await ico(s, it.i, x + 0.4, y + 0.35, 1.3, P.primaria);
      txt(s, it.t, { x: x + 0.1, y: y + 1.9, w: 1.9, h: 0.8, fontSize: 20, bold: true, color: P.escuro, align: 'center' });
    }
    txt(s, 'Três destes têm algo em comum. Qual não pertence ao grupo — e porquê?', { x: M, y: 4.5, w: 9, h: 0.45, fontSize: 16, color: '4B5563', italic: true });
    sol.push(`Intruso: ${t.intruso.itens[t.intruso.r].t} — ${t.intruso.porque}`);
    s.addNotes(`Resposta: ${t.intruso.itens[t.intruso.r].t}. ${t.intruso.porque} Valorize outras justificações que façam sentido.`); }

  // 8. Recordar
  { const s = slide(); titulo(s, 'Qual desapareceu?'); await chip(s, 'Memória', 'fa:FaBrain');
    const rest = t.memoria.itens.filter((_, i) => i !== t.memoria.falta);
    const order = [2, 0, 4, 1, 3].map(i => rest[i]);
    for (const [i, it] of order.entries()) await tile(s, it, M + (i % 3) * 3.1, 1.4 + Math.floor(i / 3) * 1.85);
    const x = M + 2 * 3.1, y = 1.4 + 1.85;
    s.addShape(pres.ShapeType.roundRect, { x, y, w: 2.8, h: 1.6, fill: { color: 'FFFFFF' }, line: { color: P.primaria, width: 2, dashType: 'dash' }, rectRadius: 0.12 });
    txt(s, '?', { x, y, w: 2.8, h: 1.6, fontSize: 54, bold: true, color: P.primaria, align: 'center', fontFace: F.titulo });
    const f = t.memoria.itens[t.memoria.falta].t;
    sol.push(`Objeto que desapareceu: ${f}`);
    s.addNotes(`Resposta: ${f}. Depois, peça ao grupo que tente dizer os 6 objetos de memória, sem olhar para o ecrã.`); }

  // 9. Provérbios
  { const s = slide(); titulo(s, 'Complete o provérbio'); await chip(s, 'Linguagem', 'fa:FaQuoteLeft');
    for (const [i, p] of t.proverbios.entries()) {
      const y = 1.4 + i * 1.18;
      box(s, M, y, 9, 1.0, P.claro);
      await ico(s, 'fa:FaQuoteLeft', M + 0.2, y + 0.18, 0.64, P.acento);
      txt(s, [{ text: p.a + ' ' }, { text: '________', options: { color: P.primaria, bold: true } }], { x: M + 1.05, y, w: 7.8, h: 1.0, fontSize: 22 });
    }
    sol.push('Provérbios: ' + t.proverbios.map(p => p.b).join(' · '));
    s.addNotes(`Respostas: ${t.proverbios.map(p => `"${p.a} ${p.b}"`).join(' | ')}. Pergunte o que significa cada provérbio e em que situações se usa.`); }

  // 10. Sequência
  { const s = slide(); titulo(s, 'Ponha por ordem'); await chip(s, 'Executivas', 'fa:FaListOl');
    txt(s, t.sequencia.titulo, { x: M, y: 1.2, w: 9, h: 0.5, fontSize: 20, bold: true, color: P.primaria });
    for (const [i, idx] of t.sequencia.ordemMostrada.entries()) {
      const x = M + (i % 2) * 4.6, y = 1.85 + Math.floor(i / 2) * 1.5;
      box(s, x, y, 4.4, 1.3, P.claro);
      s.addShape(holder, { x: x + 0.2, y: y + 0.32, w: 0.66, h: 0.66, fill: { color: P.acento }, line: { color: P.acento }, ...holderOpts });
      txt(s, 'ABCD'[i], { x: x + 0.2, y: y + 0.32, w: 0.66, h: 0.66, fontSize: 22, bold: true, color: 'FFFFFF', align: 'center' });
      txt(s, t.sequencia.passos[idx], { x: x + 1.05, y, w: 3.2, h: 1.3, fontSize: 18 });
    }
    const ordem = t.sequencia.passos.map((_, k) => 'ABCD'[t.sequencia.ordemMostrada.indexOf(k)]).join(' → ');
    sol.push(`Sequência (${t.sequencia.titulo}): ${ordem}`);
    s.addNotes(`Ordem correta: ${ordem}. Peça a cada participante que diga um passo. Variante: alguém faz a mímica de cada passo.`); }

  // 11. Pares (opcional)
  if (t.extraSlide) { const e = t.extraSlide; const s = slide(); titulo(s, 'Ligue os pares'); await chip(s, 'Associação', 'fa:FaBrain');
    txt(s, e.titulo, { x: M, y: 1.2, w: 9, h: 0.5, fontSize: 20, bold: true, color: P.primaria });
    const shuffled = [2, 0, 3, 1];
    for (let i = 0; i < 4; i++) {
      const y = 1.85 + i * 0.8;
      box(s, M, y, 3.8, 0.65, P.claro);
      txt(s, `${i + 1}.  ${e.pares[i][0]}`, { x: M + 0.25, y, w: 3.4, h: 0.65, fontSize: 20, bold: true, color: P.escuro });
      box(s, W - M - 3.8, y, 3.8, 0.65, P.suave);
      txt(s, `${'ABCD'[i]}.  ${e.pares[shuffled[i]][1]}`, { x: W - M - 3.55, y, w: 3.4, h: 0.65, fontSize: 20 });
      s.addShape(pres.ShapeType.line, { x: M + 4.05, y: y + 0.325, w: 0.9, h: 0, line: { color: 'D1D5DB', width: 1.5, dashType: 'sysDot' } });
    }
    const resp = e.pares.map((_, i) => `${i + 1}-${'ABCD'[shuffled.indexOf(i)]}`).join(' · ');
    sol.push(`Pares: ${resp}`);
    s.addNotes(`Respostas: ${resp}. Conversar sobre cada par.`); }

  // 12. Movimento (dupla tarefa)
  { const s = slide(); titulo(s, t.movimento.titulo); await chip(s, 'Dupla tarefa', 'fa:FaWalking');
    for (const [i, r] of t.movimento.regras.entries()) {
      const y = 1.4 + i * 1.18;
      box(s, M, y, 6.1, 1.0, P.claro);
      await ico(s, r.i, M + 0.2, y + 0.15, 0.7, P.primaria);
      txt(s, [{ text: `Quando ouvir ${r.ouvir}`, options: { fontSize: 15, color: '4B5563', breakLine: true } }, { text: r.fazer, options: { fontSize: 22, bold: true, color: P.escuro } }], { x: M + 1.1, y, w: 4.9, h: 1.0 });
    }
    s.addShape(pres.ShapeType.ellipse, { x: 7.0, y: 1.55, w: 2.5, h: 2.5, fill: { color: P.acento }, line: { color: P.acento } });
    s.addImage({ data: await icon('fa:FaRunning', 'FFFFFF'), x: 7.6, y: 2.15, w: 1.3, h: 1.3 });
    txt(s, 'Ouça com atenção e mexa-se!', { x: 6.8, y: 4.2, w: 2.9, h: 0.5, fontSize: 15, italic: true, color: P.primaria, align: 'center' });
    s.addNotes(`Treino de atenção dividida e controlo inibitório com movimento. ${t.movimento.notas} Pode ser feito sentado.`); }

  // 13. Cálculo
  { const s = slide(); titulo(s, t.calculo.titulo); await chip(s, 'Cálculo', 'fa:FaCalculator');
    for (const [i, it] of t.calculo.itens.entries()) {
      const y = 1.4 + i * 0.85;
      box(s, M, y, 4.2, 0.7, P.claro);
      txt(s, it.t, { x: M + 0.25, y, w: 2.6, h: 0.7, fontSize: 18 });
      txt(s, it.p, { x: M + 2.85, y, w: 1.15, h: 0.7, fontSize: 20, bold: true, color: P.primaria, align: 'right' });
    }
    box(s, 5.0, 1.4, 4.5, 3.25, P.escuro);
    s.addImage({ data: await icon('fa:FaEuroSign', P.acento), x: 5.3, y: 1.6, w: 0.5, h: 0.5 });
    for (const [i, q] of t.calculo.perguntas.entries())
      txt(s, `${i + 1}. ${q}`, { x: 5.3, y: 2.25 + i * 1.15, w: 3.95, h: 1.05, fontSize: 18, color: 'FFFFFF', valign: 'top' });
    sol.push(`Cálculo: ${t.calculo.respostas}`);
    s.addNotes(`Respostas: ${t.calculo.respostas}. Permita o uso de papel e lápis ou moedas reais. Valorize as estratégias de cada um.`); }

  // 14. Conversa
  { const s = slide('ESCURO'); titulo(s, 'Vamos conversar'); await chip(s, 'Reminiscência', 'fa:FaComments', true);
    s.addImage({ data: await icon('fa:FaQuoteLeft', P.acento), x: M, y: 1.45, w: 0.7, h: 0.7 });
    s.addText(t.conversa.p, { isTextBox: true, x: M + 0.95, y: 1.35, w: 8.0, h: 1.5, fontFace: F.titulo, fontSize: 32, bold: true, color: 'FFFFFF', margin: 0, valign: 'middle' });
    for (const [i, p] of t.conversa.pistas.entries()) {
      const x = M + i * 3.05;
      s.addShape(pres.ShapeType.roundRect, { x, y: 3.35, w: 2.85, h: 1.1, fill: { color: P.primaria }, line: { color: P.primaria }, rectRadius: 0.15 });
      txt(s, p, { x: x + 0.2, y: 3.35, w: 2.45, h: 1.1, fontSize: 16, color: 'FFFFFF' });
    }
    s.addNotes('Reminiscência: dê a palavra a cada participante, sem pressa. Escute, valide emoções e faça ligações entre as histórias do grupo. Evite corrigir memórias.'); }

  // 15. Fecho
  { const s = slide('ESCURO'); titulo(s, 'Respirar e relaxar'); await chip(s, 'Relaxamento', 'fa:FaLungs', true);
    const steps = [['Inspirar pelo nariz', '4 tempos'], ['Segurar o ar', '2 tempos'], ['Soltar pela boca', '6 tempos']];
    for (const [i, [a, b]] of steps.entries()) {
      const y = 1.45 + i * 1.05;
      s.addShape(holder, { x: M, y, w: 0.8, h: 0.8, fill: { color: P.acento }, line: { color: P.acento }, ...holderOpts });
      txt(s, String(i + 1), { x: M, y, w: 0.8, h: 0.8, fontSize: 26, bold: true, color: 'FFFFFF', align: 'center' });
      txt(s, [{ text: a, options: { fontSize: 22, bold: true, breakLine: true } }, { text: b, options: { fontSize: 15, color: P.suave } }], { x: M + 1.05, y: y - 0.05, w: 3.6, h: 0.9, color: 'FFFFFF' });
    }
    s.addShape(pres.ShapeType.ellipse, { x: 5.6, y: 1.25, w: 3.6, h: 3.6, fill: { color: P.primaria }, line: { color: P.primaria } });
    s.addImage({ data: await icon('fa:FaHeart', P.acento), x: 7.05, y: 1.65, w: 0.7, h: 0.7 });
    s.addText('Obrigado!', { isTextBox: true, x: 5.7, y: 2.45, w: 3.4, h: 0.8, fontFace: F.titulo, fontSize: 36, bold: true, color: 'FFFFFF', align: 'center', margin: 0 });
    txt(s, 'Até à próxima sessão', { x: 5.7, y: 3.25, w: 3.4, h: 0.5, fontSize: 18, color: 'FFFFFF', align: 'center' });
    s.addNotes('Repita a respiração 3 a 5 vezes. Termine pedindo a cada participante uma palavra sobre a sessão de hoje ou algo de que gostou. Recorde a data da próxima sessão.'); }

  // 16. Soluções
  { const s = slide(); titulo(s, 'Soluções'); await chip(s, 'Dinamizador', 'fa:FaListOl');
    txt(s, 'Para o dinamizador — não mostrar ao grupo', { x: M, y: 1.15, w: 9, h: 0.35, fontSize: 14, italic: true, color: P.destaque });
    txt(s, sol.map((x, i) => ({ text: x, options: { bullet: true, breakLine: i < sol.length - 1 } })), { x: M, y: 1.6, w: 9, h: 3.35, fontSize: 14, valign: 'top', paraSpaceAfter: 6 });
    s.addNotes('Diapositivo de apoio. Pode ocultá-lo (Ocultar diapositivo) antes da apresentação.'); }

  const file = path.join(OUT, `${t.slug}.pptx`);
  await pres.writeFile({ fileName: file });
  return file;
}

(async () => {
  const only = process.argv[2];
  for (const t of TEMAS) {
    if (only && t.slug !== only) continue;
    console.log('✓', path.basename(await build(t)));
  }
})().catch(e => { console.error(e); process.exit(1); });
