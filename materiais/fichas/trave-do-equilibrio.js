// Ficha de atividade "A Trave do Equilíbrio" — equilíbrio dinâmico ao longo de uma "trave" no chão.
// Substitui a trave de espuma por uma linha de fita-cola ou uma toalha dobrada. Física.

const K = '#1F2937', G = '#9CA3AF';
const SET = '<defs><marker id="tv" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#tv)" ${both ? 'marker-start="url(#tv)"' : ''}/>`;
const H = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const TRAVE = (y = 186) => `<rect x="10" y="${y - 8}" width="180" height="12" rx="4" fill="currentColor"/>`;
const CONE = (x, y, sc = 1) => `<path d="M${x - 12 * sc},${y} L${x},${y - 30 * sc} L${x + 12 * sc},${y} Z" fill="#A855F7" stroke="${K}" stroke-width="3"/>`;
const GARRAFA = (x, y) => `<rect x="${x - 6}" y="${y - 6}" width="12" height="20" rx="4" fill="#38BDF8" stroke="${K}" stroke-width="2"/>`;

// 1. Andar na trave com garrafas nas mãos
const ANDAR = s(`${TRAVE()}${L('M100,114 L100,58')}${H(100, 40)}
  ${L('M100,114 L82,150 L84,178 M74,178 L92,178')}${L('M100,114 L120,150 L128,178 M120,178 L138,178')}
  ${L('M100,68 L80,106')}${L('M100,68 L120,106')}${GARRAFA(78, 112)}${GARRAFA(122, 112)}${A('M30,150 L70,150')}`);
// 2. Pé à frente do outro, rolar a bola até tocar nos cones
const BOLA = s(`${TRAVE()}${CONE(30, 176)}${CONE(170, 176)}${L('M110,100 L94,56')}${H(90, 38)}
  ${L('M110,100 L104,178 M96,178 L112,178')}${L('M110,100 L124,140 L120,178 M114,178 L130,178')}
  ${L('M96,64 L60,100')}<circle cx="54" cy="122" r="26" fill="#FB7185" stroke="${K}" stroke-width="3"/>${A('M80,152 C60,166 44,166 34,150')}`);
// 3. Apanhar cones do chão e pô-los do outro lado
const CONES = s(`${TRAVE()}${CONE(36, 176)}${CONE(166, 176)}${L('M104,104 L80,64')}${H(72, 48)}
  ${L('M104,104 L100,178 M92,178 L108,178')}${L('M104,104 L130,132 L136,166')}${L('M84,72 L44,150')}${CONE(44, 166, .8)}
  ${A('M60,30 C90,10 130,10 160,30')}`);

module.exports = {
  slug: 'trave-do-equilibrio',
  titulo: 'A Trave do Equilíbrio',
  subtitulo: 'Equilíbrio em movimento, com uma "trave" feita de fita-cola',
  kicker: 'Ficha de atividade · física · equilíbrio dinâmico',
  cor: '#0284C7', corClara: '#E0F2FE', corEscura: '#0C4A6E',
  paraQue: 'Ficar parado em equilíbrio cansa e aborrece; no dia a dia, o equilíbrio é preciso em movimento — a andar, a baixar para apanhar algo, a esticar o braço. Aqui a pessoa anda e faz tarefas em cima de uma "trave" no chão: andar com garrafas nas mãos, rolar uma bola para tocar em cones e apanhar cones do chão. Treina o equilíbrio de forma ativa e variada.',
  duracao: '15 a 20 min', grupo: '1 a 3 pessoas por animador', custo: '0 a 10 €',
  paraGrupos: {
    fisico: 'Grupo 1 (os 3 exercícios, em cima da trave). Grupo 2: ao lado de uma barra ou parede, pés de cada lado da linha (não em cima), só os exercícios 1 e 2. Grupo 3: não indicado.',
    cognitivo: 'Grupos A e B. Com cones de cores e instruções ("o cone azul"), passa a combinada.',
    ebook: 'Física — "Em Forma" (Grupo 1); versão junto à barra em "Corpo em Movimento" (Grupo 2).'
  },
  materiais: [
    'A "trave": uma linha de fita-cola larga no chão (3 m), ou uma toalha de banho dobrada e presa com fita',
    'Duas garrafas de água pequenas (0,33 a 0,5 L)',
    'Uma bola grande e leve (de praia ou de pilates)',
    '4 a 6 cones, copos de plástico ou garrafas vazias'
  ],
  preparar: [
    'Cole a trave junto a uma parede, barra ou corrimão, com espaço livre dos dois lados.',
    'Coloque os cones dos dois lados da trave, a um passo de distância.',
    'Calçado fechado. Retire tapetes e objetos à volta.',
    'Quem usa bengala tem-na à mão; com andarilho, faz a versão ao lado da trave.'
  ],
  passos: [
    { faz: 'Mostre a trave e caminhe sobre ela devagar.', diz: 'Vamos andar em cima desta linha, como numa trave.' },
    { faz: 'Exercício 1: andar na trave com uma garrafa em cada mão.', diz: 'Garrafas nas mãos, olhar em frente, passo a passo.' },
    { faz: 'Exercício 2: um pé à frente do outro, rolar a bola para tocar nos cones.', diz: 'Fique firme e role a bola até ao cone… agora o do outro lado.' },
    { faz: 'Exercício 3: apanhar um cone do chão e pô-lo do outro lado da trave.', diz: 'Dobre os joelhos, apanhe o cone e passe-o para o outro lado.' },
    { faz: 'Descansar sentado entre exercícios.', diz: 'Muito bem! Sente-se um bocadinho.' }
  ],
  niveis: {
    n1: 'Pés afastados, um de cada lado da linha, com uma mão na barra. Andar ao longo da linha e tocar na bola pousada numa cadeira. Sem apanhar objetos do chão.',
    n2: 'Andar com um pé de cada lado da linha (sem barra) ou em cima da linha com a mão na parede. Exercícios 1 e 2. Cones em cima de uma cadeira em vez do chão.',
    n3: 'Os 3 exercícios em cima da trave (toalha dobrada), um pé à frente do outro. Cones no chão, cada vez mais longe. Andar para trás no fim (só com o animador ao lado).'
  },
  atencao: 'O animador fica sempre ao lado, do lado mais fraco, com uma mão pronta junto à cintura. A toalha dobrada é instável: só no nível 3 e bem presa ao chão. Baixar para apanhar cones só para quem o faz com segurança — os outros apanham cones em cima de uma cadeira. Parar se houver tonturas ao baixar a cabeça.',
  seCorrerMal: 'Se a pessoa se desequilibrar, volte a pôr os pés de cada lado da linha e dê a mão. Se tiver medo, faça os exercícios junto à parede, sem trave. Termine sempre com uma tarefa bem-sucedida.',
  variantes: [
    'Cones de cores: o animador diz a cor do cone a tocar ou a apanhar (passa a combinada).',
    'Contar os passos em voz alta ou dizer uma palavra a cada passo.',
    'Trave em curva ou em zigue-zague com fita-cola.',
    'Em pares: um rola a bola, o outro, na trave, devolve-a.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 3 EXERCÍCIOS', sub: 'Na "trave" de fita-cola · animador sempre ao lado',
    itens: [
      { svg: ANDAR, nome: '1 · Andar com garrafas', desc: 'Andar ao longo da trave com uma garrafa de água em cada mão', tempo: '3 a 4 idas e voltas' },
      { svg: BOLA, nome: '2 · Bola aos cones', desc: 'Um pé à frente do outro; rolar a bola para tocar nos cones de cada lado', tempo: '6 a 8 toques' },
      { svg: CONES, nome: '3 · Apanhar os cones', desc: 'Apanhar um cone do chão e pô-lo do outro lado da trave', tempo: '4 a 6 cones' }
    ],
    lembrar: ['Animador ao lado', 'Olhar em frente', 'Descansar sentado']
  }
};
