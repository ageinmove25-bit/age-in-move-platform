// Ficha de atividade "Coordenação em Parkinson" — 5 exercícios de coordenação com bolas e cones,
// adaptados de material de ginásio (step, bosu, bola de pilates) para material simples. Física/combinada.

const K = '#1F2937', G = '#9CA3AF';
const SET = '<defs><marker id="cp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#cp)" ${both ? 'marker-start="url(#cp)"' : ''}/>`;
const H = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const CHAO = '<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const BOLA = (x, y, r = 14, c = '#F472B6') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${K}" stroke-width="3"/>`;
const PRATO = (x, y, c) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="7" fill="${c}" stroke="${K}" stroke-width="2"/>`;
const CONE = (x, y, c = '#3B82F6', sc = 1) => `<path d="M${x - 12 * sc},${y} L${x},${y - 30 * sc} L${x + 12 * sc},${y} Z" fill="${c}" stroke="${K}" stroke-width="3"/>`;
const PESSOA = (x, flip = 1) => `${L(`M${x},120 L${x},66`)}${H(x, 48)}${L(`M${x},120 L${x - 10 * flip},186 M${x},120 L${x + 10 * flip},186`)}`;

// 1. Passar a bola a um parceiro, em cima de um degrau baixo / no chão
const PASSAR = s(`${CHAO}<rect x="14" y="176" width="44" height="10" rx="3" fill="#94A3B8"/><rect x="142" y="176" width="44" height="10" rx="3" fill="#94A3B8"/>
  ${PESSOA(36)}${PESSOA(164, -1)}${L('M36,80 L64,96')}${L('M164,80 L136,96')}${BOLA(100, 80)}${A('M70,64 C86,50 114,50 130,64', true)}`);
// 2. Duas bolas: uma rola no chão (empurrada), a outra passa de mão
const DUAS = s(`${CHAO}${PESSOA(46)}${PESSOA(154, -1)}${L('M46,80 L76,100')}${BOLA(84, 104, 12)}${L('M154,82 L132,140')}${BOLA(124, 160, 26, '#7DD3FC')}${A('M100,176 L60,176')}`);
// 3. Rodar o tronco: passar um prato/cone de uma mão para a outra por trás das costas e pôr num poste
const RODAR = s(`${CHAO}${PESSOA(96)}${L('M96,80 L128,104')}${PRATO(140, 106, '#EC4899')}${L('M96,80 L70,110')}
  <rect x="150" y="150" width="40" height="36" rx="3" fill="#E5E7EB" stroke="${G}" stroke-width="3"/>${CONE(170, 150, '#22C55E', .9)}${A('M60,60 C80,36 120,36 140,60')}`);
// 4. Sentado: pés a rolar uma bola até aos pratos de cores
const PES = s(`<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M110,110 L170,110 M168,110 L168,40 M114,110 L114,186 M166,110 L166,186"/></g>${CHAO}
  ${L('M140,106 L132,48')}${H(128, 32)}${L('M140,106 L90,110 L84,176 M70,176 L86,176')}${BOLA(56, 168, 16)}${PRATO(20, 184, '#EF4444')}${PRATO(56, 196, '#FACC15')}${A('M44,140 L16,160')}`);
// 5. Passar por cima de obstáculos à volta de uma almofada (estrela)
const ESTRELA = s(`${CHAO}<ellipse cx="100" cy="176" rx="26" ry="10" fill="#60A5FA" stroke="${K}" stroke-width="3"/>
  ${[[30, 178], [170, 178], [56, 150], [144, 150]].map(([x, y]) => `<path d="M${x - 14},${y} L${x - 14},${y - 14} L${x + 14},${y - 14} L${x + 14},${y}" fill="none" stroke="#A3E635" stroke-width="6"/>`).join('')}
  ${L('M100,112 L100,58')}${H(100, 40)}${L('M100,112 L96,166')}${L('M100,112 L134,124 L150,148')}${L('M100,66 L76,98')}${L('M100,66 L124,98')}`);

module.exports = {
  slug: 'coordenacao-parkinson',
  titulo: 'Coordenação em Parkinson',
  subtitulo: 'Cinco exercícios com bolas e cones para mãos, pés e tronco',
  kicker: 'Ficha de atividade · física · doença de Parkinson',
  cor: '#DB2777', corClara: '#FCE7F3', corEscura: '#831843',
  paraQue: 'Na doença de Parkinson, coordenar os dois lados do corpo, rodar o tronco e reagir a uma bola tornam-se difíceis. Estes cinco exercícios treinam isso de forma divertida, com um parceiro (colaborador ou outro residente).',
  duracao: '20 a 30 min', grupo: 'Pares (pessoa + animador ou dois residentes)', custo: '5 a 15 €',
  paraGrupos: {
    fisico: 'Grupo 1 (os 5, de pé com apoio por perto). Grupo 2: exercícios 1 a 4 sentados ou com apoio; o 5 não. Grupo 3: exercício 4 sentado e passar a bola sentado.',
    cognitivo: 'Grupos A e B. Com pratos de cores e instruções ("ao vermelho!"), passa a combinada.',
    ebook: 'Física — "Em Forma" (Grupo 1) e "Corpo em Movimento" (Grupo 2). Junta-se à ficha "5 Exercícios com Post-its" num conjunto Parkinson.'
  },
  materiais: [
    'Uma bola pequena e macia e uma bola grande e leve (de praia)',
    '4 pratos de plástico de cores (ou cones baixos) e um rolo de papel de cozinha em pé como "poste"',
    '4 obstáculos baixos: livros finos, rolos de espuma ou toalhas enroladas; uma almofada firme',
    'Cadeira firme com braços'
  ],
  preparar: [
    'Espaço livre, sem tapetes. Cadeira por perto para descansar.',
    'Sem step nem bosu: tudo no chão ou numa almofada firme.',
    'Fazer no período "on" da medicação.'
  ],
  passos: [
    { faz: 'Exercício 1: frente a frente, passar a bola um ao outro com as duas mãos.', diz: 'Olhe para a bola… apanhe! Agora devolva.' },
    { faz: 'Exercício 2: uma bola grande rola no chão com a mão, a pequena passa no ar.', diz: 'A grande rola, a pequena voa. As duas ao mesmo tempo!' },
    { faz: 'Exercício 3: passar o prato de uma mão para a outra, rodando o tronco, e pô-lo no "poste".', diz: 'Rode para trás… troque de mão… e ponha no poste.' },
    { faz: 'Exercício 4: sentado, levar a bola com os pés até ao prato da cor dita.', diz: 'Com os pés, leve a bola ao amarelo!' },
    { faz: 'Exercício 5: passar por cima dos obstáculos à volta da almofada, com o animador ao lado.', diz: 'Passo grande por cima… e volte ao centro.' }
  ],
  niveis: {
    n1: 'Sentado: passar a bola de mão em mão e a um parceiro sentado; exercício 4 (pés) com 2 pratos. 5 a 8 vezes.',
    n2: 'De pé com apoio ou sentado: exercícios 1 a 4. Bola grande e lenta. 8 a 10 vezes.',
    n3: 'Os 5 exercícios, de pé. Bolas mais pequenas, passes mais rápidos, cores ditas pelo animador. Exercício 5 com o pé sempre a voltar à almofada.'
  },
  atencao: 'Risco de queda elevado: de pé, sempre com o animador ao lado e cadeira atrás. Não usar step nem bosu (do vídeo) sem fisioterapeuta. Atenção às viragens rápidas no exercício 3. Se houver bloqueio da marcha ("congelar"), não puxar: contar em voz alta ou pedir um passo grande por cima de um obstáculo.',
  seCorrerMal: 'Se a bola cair muitas vezes, passe-a mais devagar e mais perto. Se a pessoa se desequilibrar, sente-a e continue sentada. Diga "GRANDE!" para incentivar movimentos amplos.',
  variantes: [
    'Cores: "ao vermelho!" — levar a bola ou o prato à cor dita.',
    'Contar os passes em voz alta (ritmo).',
    'Com música de marcha, passar a bola no tempo forte.',
    'Em roda: passar a bola dizendo o nome de quem recebe.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 5 EXERCÍCIOS', sub: 'Com um parceiro · movimentos GRANDES',
    itens: [
      { svg: PASSAR, nome: '1 · Passar a bola', desc: 'Frente a frente, passar a bola com as duas mãos', tempo: '10 passes' },
      { svg: DUAS, nome: '2 · Duas bolas', desc: 'A grande rola no chão, a pequena passa no ar, ao mesmo tempo', tempo: '8 vezes' },
      { svg: RODAR, nome: '3 · Rodar e pôr no poste', desc: 'Passar o prato de mão rodando o tronco e encaixá-lo no poste', tempo: '6 de cada lado' },
      { svg: PES, nome: '4 · Bola nos pés', desc: 'Sentado, levar a bola com os pés até ao prato da cor dita', tempo: '8 a 10 vezes' },
      { svg: ESTRELA, nome: '5 · A estrela', desc: 'Passo por cima dos obstáculos à volta da almofada e voltar ao centro', tempo: '4 a 6 passos' }
    ],
    lembrar: ['Animador ao lado', 'Movimentos GRANDES', 'Fazer no período "on"']
  }
};
