// Ficha de atividade "Demência em Ação" — 4 estações que juntam movimento e cognição para pessoas
// com demência, cada uma com "mais fácil" e "mais difícil". Combinada.

const K = '#1F2937', G = '#9CA3AF';
const SET = '<defs><marker id="da" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = d => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#da)"/>`;
const H = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const T = (x, y, t, sz = 18, c = K) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="${sz}" fill="${c}">${t}</text>`;

// 1. Cartas cortadas ao meio: juntar as metades
const meia = (x, y, r, n, naipe, c, up) => `<g transform="translate(${x},${y}) rotate(${r})"><path d="${up ? 'M-26,-36 L26,-36 L26,36 Z' : 'M-26,-36 L-26,36 L26,36 Z'}" fill="#fff" stroke="${K}" stroke-width="3"/>${T(up ? 12 : -12, up ? -14 : 26, n, 18, c)}${T(up ? 14 : -14, up ? 6 : 8, naipe, 16, c)}</g>`;
const CARTAS = s(`${meia(50, 60, -10, '7', '♥', '#DC2626', true)}${meia(150, 54, 12, '3', '♠', K, false)}${meia(56, 148, 8, '3', '♠', K, true)}${meia(146, 146, -6, '7', '♥', '#DC2626', false)}${A('M76,80 C100,100 112,110 120,124')}`);
// 2. Rolar bolas para os cones numerados
const CONE = (x, y, n) => `<path d="M${x - 18},${y} L${x},${y - 46} L${x + 18},${y} Z" fill="#F97316" stroke="${K}" stroke-width="3"/><rect x="${x - 9}" y="${y - 30}" width="18" height="18" fill="#fff"/>${T(x, y - 15, n, 15)}`;
const BOLAS = s(`<rect x="10" y="96" width="180" height="90" rx="6" fill="#FDE68A" stroke="#D97706" stroke-width="3"/>${CONE(66, 130, 1)}${CONE(134, 130, 2)}
  <circle cx="100" cy="168" r="12" fill="#D9F99D" stroke="#65A30D" stroke-width="3"/>${A('M100,154 L72,138')}${T(100, 60, '"Cone 2!"', 22)}`);
// 3. Sopa de letras na parede, de pé com apoio
const SOPA = s(`<rect x="70" y="16" width="112" height="118" rx="4" fill="#fff" stroke="${K}" stroke-width="3"/>
  ${['F L O R', 'A S O L', 'M A R X', 'G A T O'].map((r, i) => T(126, 44 + i * 25, r, 17)).join('')}<rect x="80" y="26" width="92" height="24" rx="12" fill="none" stroke="#E11D48" stroke-width="3"/>
  ${L('M40,120 L40,66')}${H(40, 48)}${L('M40,120 L30,186 M40,120 L52,186')}${L('M40,76 L84,40')}<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>`);
// 4. Pedalar/marchar sentado e dizer palavras pelo alfabeto
const PEDAL = s(`<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M110,110 L170,110 M168,110 L168,40 M114,110 L114,186 M166,110 L166,186"/></g>
  <line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>${L('M140,106 L132,48')}${H(128, 32)}${L('M140,106 L90,110 L74,160')}${L('M140,106 L96,124 L86,174')}
  <circle cx="80" cy="168" r="18" fill="none" stroke="${K}" stroke-width="5"/>${T(46, 50, 'A… B… C…', 18, '#7C3AED')}`);

// Sopa de letras para imprimir (10×10, palavras na horizontal e na vertical)
const PALAVRAS = ['FLOR', 'GATO', 'PRAIA', 'SOL', 'MAR', 'LUA', 'CASA', 'RIO'];
function sopa() {
  const N = 10, g = [...Array(N)].map(() => Array(N).fill(''));
  const pos = [[0, 0, 'h'], [0, 9, 'v'], [2, 1, 'h'], [4, 7, 'v'], [5, 0, 'h'], [6, 4, 'v'], [9, 5, 'h'], [6, 1, 'v']];
  PALAVRAS.forEach((w, i) => { const [r, c, d] = pos[i]; [...w].forEach((ch, k) => { g[d === 'h' ? r : r + k][d === 'h' ? c + k : c] = ch; }); });
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const AB = 'ABCDEFGHIJLMNOPRSTUV';
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!g[r][c]) g[r][c] = AB[Math.floor(rnd() * AB.length)];
  const cell = 17;
  return `<svg viewBox="0 0 200 230" width="100%" height="100%"><rect x="13" y="4" width="174" height="174" rx="4" fill="#fff" stroke="${K}" stroke-width="1.5"/>
    ${g.map((row, r) => row.map((ch, c) => `<text x="${22 + c * cell}" y="${20 + r * cell}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="12" fill="${K}">${ch}</text>`).join('')).join('')}
    <text x="100" y="196" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="9" fill="#6B7280">PROCURE:</text>
    <text x="100" y="212" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="11" fill="${K}">${PALAVRAS.slice(0, 4).join(' · ')}</text>
    <text x="100" y="226" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="11" fill="${K}">${PALAVRAS.slice(4).join(' · ')}</text></svg>`;
}

module.exports = {
  slug: 'demencia-em-acao',
  titulo: 'Demência em Ação',
  subtitulo: 'Quatro estações para mexer o corpo e a mente ao mesmo tempo',
  kicker: 'Ficha de atividade · combinada · demência',
  cor: '#7C3AED', corClara: '#EDE9FE', corEscura: '#4C1D95',
  paraQue: 'Cuidar de pessoas com demência não tem de ser só jogos de mesa. Estas quatro estações juntam movimento e pensamento: juntar cartas cortadas ao meio, rolar bolas para o cone que o animador diz, procurar palavras numa sopa de letras afixada na parede (de pé) e pedalar ou marchar a dizer palavras pelo alfabeto. Cada estação tem uma versão mais fácil e outra mais difícil.',
  duracao: '20 a 40 min (5 a 10 min por estação)', grupo: 'Individual ou 4 pessoas em rotação', custo: '0 a 10 €',
  paraGrupos: {
    fisico: 'Grupo 1 e Grupo 2 (estação 3 de pé com apoio ou sentado). Grupo 3: estações 1 e 2 sentado, com ajuda.',
    cognitivo: 'Pensada para o Grupo B (demência ligeira a moderada); com as versões mais difíceis, também para o Grupo A. Grupo C: estação 1 com poucas cartas e muita ajuda.',
    ebook: 'Combinada — "Mexer e Pensar" (Grupo 2) e "Corpo e Mente" (Grupo 1).'
  },
  materiais: [
    '1: um baralho de cartas velho, com cada carta cortada ao meio na diagonal',
    '2: 2 a 3 cones ou copos com números (1, 2, 3) e 6 bolas de ténis numa mesa',
    '3: a sopa de letras desta ficha (ampliada para A3) afixada na parede e um marcador',
    '4: pedaleira de mesa (mini-bicicleta) ou marcha sentada; papel e caneta para o animador'
  ],
  preparar: [
    'Corte as cartas antes da sessão e guarde-as num saco.',
    'Afixe a sopa de letras à altura dos olhos, ao lado de uma cadeira ou barra de apoio.',
    'Cadeira firme em todas as estações. Mesa à altura dos cotovelos.',
    'Comece sempre pela versão mais fácil.'
  ],
  passos: [
    { faz: '1 · Espalhe as meias-cartas na mesa e peça para juntar as metades.', diz: 'Estas cartas partiram-se! Ajuda-me a juntar as metades?' },
    { faz: '2 · Role uma bola para a pessoa e diga o número do cone onde ela a deve levar.', diz: 'Apanhe a bola… e leve-a ao cone número 2!' },
    { faz: '3 · De pé (com apoio), procurar e circular as palavras na sopa de letras.', diz: 'Encontre a palavra FLOR. Está escondida aqui.' },
    { faz: '4 · Pedalar ou marchar sentado e dizer uma palavra para cada letra.', diz: 'A de… árvore! B de… barco! Sem parar de pedalar.' },
    { faz: 'Elogie e mostre o resultado de cada estação.', diz: 'Olhe: juntou as cartas todas! Muito bem.' }
  ],
  niveis: {
    n1: 'Mais fácil: 1 — poucas cartas (5 a 6), só cartas com números. 2 — sentado, bola lenta, um só cone. 3 — sentado, sopa de letras na mesa, mostrar a palavra escrita. 4 — uma palavra por letra, com ajuda ("A de… a… árvore?") e mais tempo.',
    n2: 'Base: 1 — meio baralho. 2 — 2 cones, bolas a velocidade normal. 3 — de pé com apoio, procurar com a lista à vista. 4 — 1 a 2 palavras por letra, a pedalar a ritmo constante.',
    n3: 'Mais difícil: 1 — baralho inteiro, cronometrar. 2 — dizer 2 números seguidos para memorizar ("2 e depois 1"). 3 — memorizar 3 palavras e procurá-las com a lista tapada. 4 — 6 palavras por letra em tempo limite, sem perder o ritmo.'
  },
  atencao: 'Na estação 3 de pé, sempre com apoio ao lado e o animador perto (a atenção na parede faz esquecer o equilíbrio). Bolas a rolar devagar e sempre na mesa, nunca atiradas. Cartas cortadas sem pontas afiadas. Parar se houver cansaço ou frustração.',
  seCorrerMal: 'Se a pessoa ficar frustrada, passe para a versão mais fácil ou para outra estação de que goste. Se não encontrar a palavra, aponte para a primeira letra. O objetivo é ter sucesso, não acertar tudo.',
  variantes: [
    'Cartas portuguesas ou cartas com fotografias da família em vez do baralho.',
    'Sopa de letras com nomes dos residentes, das terras de cada um ou do tema da semana.',
    'Na estação 4, em vez do alfabeto: nomes de terras, de flores ou de animais.',
    'Fazer as 4 estações em circuito, com 2 a 4 pessoas a rodar.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'AS 4 ESTAÇÕES', sub: 'Corpo e mente ao mesmo tempo',
    itens: [
      { svg: CARTAS, nome: '1 · Cartas partidas', desc: 'Juntar as metades das cartas cortadas ao meio', tempo: '5 a 10 min' },
      { svg: BOLAS, nome: '2 · Bola ao cone', desc: 'Apanhar a bola que rola e levá-la ao cone do número dito', tempo: '10 bolas' },
      { svg: SOPA, nome: '3 · Sopa de letras de pé', desc: 'Com apoio, procurar as palavras na folha afixada na parede', tempo: '5 a 10 min' },
      { svg: PEDAL, nome: '4 · Pedalar pelo alfabeto', desc: 'Pedalar ou marchar sentado e dizer uma palavra por letra', tempo: '5 a 10 min' }
    ],
    lembrar: ['Começar pelo mais fácil', 'Apoio ao lado de pé', 'Acabar com sucesso']
  },
  cartoes: [
    { titulo: 'SOPA DE LETRAS', sub: 'Amplie para A3 e afixe na parede, à altura dos olhos', molde: sopa() }
  ]
};
