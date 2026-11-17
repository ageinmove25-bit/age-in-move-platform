// Ficha de atividade "Equilíbrio sem Aborrecer" — circuito de equilíbrio em 5 estações,
// do mais seguro (sentado) ao mais exigente (levantar do chão). Física.

const K = '#1F2937', G = '#9CA3AF';
const SET = '<defs><marker id="eq" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#eq)" ${both ? 'marker-start="url(#eq)"' : ''}/>`;
const H = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const CHAO = '<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const X = (x, y) => `<path d="M${x - 9},${y - 9} L${x + 9},${y + 9} M${x + 9},${y - 9} L${x - 9},${y + 9}" stroke="#16A34A" stroke-width="5" stroke-linecap="round"/>`;

// 1. Sentado: bola em "oito" por baixo das pernas (vista de frente)
const OITO = s(`<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M46,130 L154,130 M52,130 L52,186 M148,130 L148,186"/></g>${CHAO}
  ${L('M100,126 L100,62')}${H(100, 42, 14)}${L('M88,126 L76,186 M64,186 L80,186')}${L('M112,126 L142,98 L148,150 M140,150 L158,150')}
  ${L('M100,76 L130,132')}${L('M100,76 L72,110 L104,128')}<circle cx="122" cy="132" r="14" fill="currentColor"/>
  ${A('M24,150 C10,120 40,100 60,124 C80,148 120,170 150,150 C176,132 176,110 160,100')}`);
// 2. Agachar e rodar com bola, tocar nos X da parede
const RODAR = s(`<rect x="160" y="10" width="34" height="178" fill="#F3F4F6"/>${X(176, 50)}${X(176, 120)}${CHAO}
  ${L('M100,120 L96,64')}${H(94, 46)}${L('M100,120 L82,150 L90,186 M80,186 L96,186')}${L('M100,120 L118,150 L112,186 M106,186 L122,186')}
  ${L('M98,76 L140,70')}${L('M98,82 L138,86')}<circle cx="148" cy="78" r="18" fill="currentColor"/>
  ${A('M60,40 C80,20 120,20 140,40')}`);
// 3. Passar por cima de uma almofada (passo para cima e para baixo)
const ALMOFADA = s(`${CHAO}<rect x="70" y="168" width="70" height="20" rx="5" fill="currentColor"/>
  ${L('M104,110 L100,52')}${H(98, 34)}${L('M104,110 L100,168 M90,168 L108,168')}${L('M104,110 L128,124 L122,154 M114,154 L132,154')}
  ${L('M100,64 L76,98')}<g stroke="${G}" stroke-width="6" stroke-linecap="round"><path d="M40,60 L40,188 M40,60 L66,60"/></g>
  ${A('M150,150 C160,120 170,120 176,150')}`);
// 4. Levantar do chão com apoio (ajoelhado, mão numa cadeira)
const CHAO_PE = s(`${CHAO}<rect x="14" y="174" width="172" height="14" rx="4" fill="#E5E7EB"/>
  <g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M20,110 L70,110 M24,110 L24,174 M66,110 L66,174 M66,110 L66,50"/></g>
  ${L('M120,130 L104,72')}${H(100, 54)}${L('M120,130 L120,174 L160,174')}${L('M120,130 L84,138 L84,174 M76,174 L92,174')}${L('M106,84 L70,108')}
  ${A('M160,120 L160,60')}`);
// 5. Passeio com mochila leve
const MOCHILA = s(`${CHAO}${L('M100,120 L98,58')}${H(96, 40)}<rect x="104" y="58" width="30" height="44" rx="8" fill="currentColor"/>
  ${L('M100,120 L84,152 L78,186 M70,186 L86,186')}${L('M100,120 L116,152 L124,186 M118,186 L134,186')}${L('M98,70 L84,104')}${L('M98,70 L114,104')}
  ${A('M20,150 L60,150')}<path d="M10,170 L190,170" stroke="#D1D5DB" stroke-width="3" stroke-dasharray="6 8"/>`);

module.exports = {
  slug: 'equilibrio-sem-aborrecer',
  titulo: 'Equilíbrio sem Aborrecer',
  subtitulo: 'Um circuito de equilíbrio para quem não gosta de exercícios de equilíbrio',
  kicker: 'Ficha de atividade · física · equilíbrio e prevenção de quedas',
  cor: '#15803D', corClara: '#DCFCE7', corEscura: '#14532D',
  paraQue: 'Cinco estações que treinam o equilíbrio sem parecerem "exercícios de equilíbrio": brincar com a bola sentado, rodar o tronco a tocar em marcas na parede, passar por cima de uma almofada, levantar-se do chão com apoio e passear com uma mochila leve. São os movimentos de que precisamos para não cair — e para saber levantar-nos se cairmos.',
  duracao: '25 a 35 min', grupo: '1 a 3 pessoas por animador', custo: '0 a 15 €',
  paraGrupos: {
    fisico: 'Grupo 1: as 5 estações (a estação 4 só com fisioterapeuta). Grupo 2: estações 1, 2 (sentado) e 3 (com apoio dos dois lados). Grupo 3: só a estação 1.',
    cognitivo: 'Todos os grupos que consigam imitar. Com a variante das cores nos X da parede, passa a combinada (Grupos A e B).',
    ebook: 'Física — "Em Forma" (Grupo 1) e "Corpo em Movimento" (Grupo 2, estações 1 a 3).'
  },
  materiais: [
    'Bola pequena e macia (estação 1) e bola de praia grande (estação 2)',
    'Fita-cola de cor para marcar 2 a 4 X na parede',
    'Almofada firme de espuma ou colchão de ginástica dobrado (5 a 8 cm)',
    'Colchão no chão e cadeira firme com braços (estação 4)',
    'Mochila com 1 a 2 garrafas de água de 0,5 L (estação 5)'
  ],
  preparar: [
    'Estações encostadas à parede, com espaço livre à volta e sem tapetes soltos.',
    'Marque os X na parede à altura dos ombros e da cintura.',
    'Confirme com a equipa quem pode fazer a estação 4 (próteses, osteoporose grave, tonturas).',
    'Quem usa andarilho ou bengala tem-no sempre ao alcance.'
  ],
  passos: [
    { faz: 'Mostre o cartão "As 5 estações" e comecem pela 1, sentados.', diz: 'Vamos fazer um circuito. Começamos sentados, com calma.' },
    { faz: 'Em cada estação: demonstre, fique ao lado da pessoa e conte em voz alta.', diz: 'Veja como eu faço… agora o senhor. Estou aqui ao lado.' },
    { faz: 'Passe à estação seguinte só se a anterior correu bem.', diz: 'Muito bem! Está pronto para a próxima?' },
    { faz: 'Descanse sentado 1 minuto entre estações.', diz: 'Sentamos um bocadinho e bebemos água.' },
    { faz: 'No fim, pergunte qual foi a estação preferida e a mais difícil.', diz: 'De qual gostou mais? E qual custou mais?' }
  ],
  niveis: {
    n1: 'Só a estação 1, sentado, com a bola passada à volta da cintura em vez de por baixo das pernas. 5 a 8 vezes.',
    n2: 'Estações 1, 2 e 3. Na 2, rodar sentado a tocar nos X. Na 3, subir para a almofada com apoio dos dois lados (barra ou animador + cadeira). 6 a 8 repetições.',
    n3: 'As 5 estações. Na 2, agachar um pouco ao rodar. Na 3, passar por cima da almofada sem parar. Na 4, ajoelhar e levantar com uma mão na cadeira. Na 5, andar 2 voltas à sala com a mochila, mudando de direção.'
  },
  atencao: 'O animador fica sempre ao lado, do lado mais fraco, a um braço de distância — e com uma mão pronta junto à cintura nas estações de pé. A estação 4 (levantar do chão) só com fisioterapeuta e colchão, nunca com quem tem próteses recentes do joelho ou osteoporose grave. Mochila leve (no máximo 1 kg). Parar se houver tonturas, dor ou falta de ar.',
  seCorrerMal: 'Se a pessoa tiver medo, volte à estação anterior e diga que isso já é um ótimo treino. Se se desequilibrar, pare, sente-a e descanse antes de decidir continuar. Registe e avise a equipa.',
  variantes: [
    'Cores na parede: X de cores diferentes; o animador diz a cor a tocar (passa a combinada).',
    'Música: fazer o circuito ao som de uma música conhecida, mudando de estação quando a música para.',
    'Percurso: juntar as estações 3 e 5 num percurso pela sala (almofadas pelo caminho).',
    'Desafio: na estação 3, segurar a bola ao mesmo tempo que passa por cima da almofada.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'AS 5 ESTAÇÕES', sub: 'Do mais fácil (sentado) ao mais exigente · descansar entre estações',
    itens: [
      { svg: OITO, nome: '1 · Bola em oito', desc: 'Sentado: passar a bola por baixo de uma perna e depois da outra', tempo: '8 a 10 voltas' },
      { svg: RODAR, nome: '2 · Rodar e tocar', desc: 'Com a bola nas mãos, rodar o tronco e tocar nos X da parede', tempo: '6 a 8 de cada lado' },
      { svg: ALMOFADA, nome: '3 · Por cima da almofada', desc: 'Com apoio, subir para a almofada e voltar a descer', tempo: '6 a 8 com cada pé' },
      { svg: CHAO_PE, nome: '4 · Levantar do chão', desc: 'Só com fisioterapeuta: ajoelhado, mão na cadeira, levantar', tempo: '2 a 3 vezes' },
      { svg: MOCHILA, nome: '5 · Passeio com mochila', desc: 'Andar com uma mochila leve, costas direitas, olhar em frente', tempo: '1 a 2 voltas à sala' }
    ],
    lembrar: ['Animador ao lado', 'Descansar sentado', 'Estação 4 só com fisioterapeuta']
  }
};
