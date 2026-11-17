// Ficha de atividade "O Pé que Não Arrasta" — exercícios para o pé pendente (dificuldade em levantar
// a ponta do pé ao andar), frequente após AVC e noutras doenças neurológicas. Só com fisioterapeuta.

const K = '#1F2937', G = '#9CA3AF', B = '#14B8A6';
const SET = '<defs><marker id="pe" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#pe)" ${both ? 'marker-start="url(#pe)"' : ''}/>`;
const H = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const CHAO = '<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const BARRA = `<g stroke="${G}" stroke-width="6" stroke-linecap="round"><path d="M150,96 L196,96 M154,96 L154,188"/></g>`;
const PAREDE = '<rect x="0" y="0" width="34" height="188" fill="#F3F4F6"/>';
const CONE = (x, y) => `<path d="M${x - 12},${y} L${x},${y - 30} L${x + 12},${y} Z" fill="#3B82F6" stroke="${K}" stroke-width="3"/>`;

// 1. Passar por cima de cones com elástico nos pés (barra ao lado)
const CONES = s(`${BARRA}${CHAO}${CONE(64, 186)}${L('M110,112 L106,56')}${H(104, 38)}${L('M106,66 L150,96')}
  ${L('M110,112 L114,186 M106,186 L122,186')}${L('M110,112 L74,118 L66,140 M54,140 L70,140')}
  ${L('M66,140 L114,182', 4, B)}${A('M30,150 C30,118 50,110 60,118')}`);
// 2. Passar o pé por cima de um bloco (joelho ao alto)
const BLOCO = s(`${BARRA}${CHAO}<rect x="66" y="160" width="40" height="28" rx="3" fill="${K}"/>${L('M110,112 L106,56')}${H(104, 38)}${L('M106,66 L150,96')}
  ${L('M110,112 L114,186 M106,186 L122,186')}${L('M110,112 L76,116 L72,148 M60,150 L78,150')}${A('M44,150 L44,110')}`);
// 3. Joelho à frente contra o elástico, mãos na barra
const JOELHO = s(`<g stroke="${G}" stroke-width="6" stroke-linecap="round"><path d="M10,90 L60,90 M14,90 L14,188"/></g>${CHAO}
  ${L('M120,110 L64,82')}${H(54, 76)}${L('M70,86 L24,90')}${L('M120,110 L156,186 M150,186 L166,186')}${L('M120,110 L92,134 L98,170 M86,170 L104,170')}
  ${L('M92,134 L150,180', 4, B)}${A('M110,152 L80,152')}`);
// 4. Costas na parede, joelhos dobrados, levantar as pontas dos pés
const PONTAS = s(`${PAREDE}${CHAO}${L('M42,120 L40,60')}${H(44, 42)}${L('M42,74 L72,108')}${L('M42,120 L96,124 L98,182 M98,182 L118,170')}
  ${A('M140,182 L140,142')}<text x="150" y="128" font-family="Nunito, sans-serif" font-weight="800" font-size="16" fill="${K}">pontas</text>`);
// 5. Encostar-se à parede e "descolar" usando os tornozelos
const DESCOLAR = s(`${PAREDE}${CHAO}
  <g opacity=".3">${L('M50,112 L38,54')}${H(36, 36)}${L('M50,112 L96,186')}</g>
  ${L('M80,112 L80,54')}${H(80, 36)}${L('M80,64 L104,100')}${L('M80,112 L96,186 M96,186 L116,186')}
  ${A('M48,70 L120,70')}<text x="140" y="74" font-family="Nunito, sans-serif" font-weight="800" font-size="15" fill="${K}">descolar</text>`);

module.exports = {
  slug: 'pe-que-nao-arrasta',
  titulo: 'O Pé que Não Arrasta',
  subtitulo: 'Cinco exercícios para o pé pendente — só com fisioterapeuta',
  kicker: 'Ficha de atividade · reabilitação · pé pendente',
  cor: '#0F766E', corClara: '#CCFBF1', corEscura: '#134E4A',
  paraQue: 'Após um AVC (e noutras doenças neurológicas), muitas pessoas têm dificuldade em levantar a ponta do pé ao andar: o pé "cai" e arrasta, e é fácil tropeçar. Estes cinco exercícios fortalecem os músculos que levantam a ponta do pé e o joelho, e treinam o gesto de passar por cima de obstáculos — tudo com materiais simples e sempre com apoio.',
  duracao: '15 a 20 min', grupo: 'Individual, com fisioterapeuta', custo: '0 a 10 €',
  paraGrupos: {
    fisico: 'Pessoas com pé pendente que andam com ou sem auxiliar de marcha (habitualmente Grupo 1 ou 2), com indicação do fisioterapeuta. Exercício 4 adaptável sentado para quem não aguenta de pé.',
    cognitivo: 'Grupos A e B (precisa de perceber e repetir o gesto). Grupo C: não indicado.',
    ebook: 'Física — atividade terapêutica individual. Pode juntar-se à ficha "A Bola no Sapato" num conjunto "Depois do AVC".'
  },
  materiais: [
    'Uma barra, corrimão ou bancada firme para apoio (ou o encosto de duas cadeiras pesadas)',
    'Uma parede livre',
    '2 cones, copos de plástico ou garrafas vazias; um bloco baixo (livro grosso ou caixa de sapatos cheia)',
    'Opcional: banda elástica leve (só com indicação do fisioterapeuta)'
  ],
  preparar: [
    'Espaço livre junto à barra, sem tapetes, chão seco.',
    'Calçado fechado e bem apertado (ou a ortótese, se a pessoa usar).',
    'Comece pelo bloco ou cone mais baixo.',
    'O fisioterapeuta fica do lado afetado.'
  ],
  passos: [
    { faz: 'Explique para que servem os exercícios.', diz: 'Vamos treinar o pé para não arrastar, para andar com mais segurança.' },
    { faz: 'Demonstre cada exercício devagar, ao lado da pessoa.', diz: 'Veja: levanto bem o joelho e a ponta do pé, e passo por cima.' },
    { faz: 'A pessoa faz 5 a 10 repetições de cada, sempre com apoio.', diz: 'Ponta do pé para cima… muito bem!' },
    { faz: 'Descanse sentado entre exercícios.', diz: 'Sente-se um bocadinho antes do próximo.' },
    { faz: 'No fim, peça para andar alguns passos a pensar em "ponta para cima".', diz: 'Agora a andar: calcanhar primeiro, ponta para cima.' }
  ],
  niveis: {
    n1: 'Sentado: levantar as pontas dos pés com os calcanhares no chão (exercício 4 sentado) e levantar o joelho. Bloco e cones só para tocar com o pé, sem passar por cima.',
    n2: 'De pé, com as duas mãos na barra: exercícios 2 e 4 (encostado à parede com pouca flexão dos joelhos). Cones baixos. 5 a 8 repetições.',
    n3: 'Os 5 exercícios, com uma mão na barra. Elástico leve nos exercícios 1 e 3, se indicado. Cones mais altos e mais afastados. 10 repetições.'
  },
  atencao: 'Só com indicação e acompanhamento do fisioterapeuta. Risco de queda: apoio sempre, terapeuta do lado afetado. O elástico à volta dos pés pode fazer tropeçar: só com indicação, nível 3 e bem perto da barra. No exercício 5 (encostar e descolar da parede), os pés começam perto da parede e afastam-se pouco a pouco. Parar se houver dor, cãibra ou cansaço.',
  seCorrerMal: 'Se a ponta do pé tocar no cone ou no bloco, baixe a altura — é sinal de que ainda é cedo. Se o pé ficar muito cansado, termine com exercícios sentados. Registe o que a pessoa conseguiu para o fisioterapeuta ajustar.',
  variantes: [
    'Sentado: escrever o alfabeto no ar com a ponta do pé.',
    'Andar sobre uma linha a "pisar com o calcanhar" primeiro.',
    'Cones de cores e o terapeuta diz qual a passar (atenção).',
    'Contar em voz alta para manter um ritmo regular.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 5 EXERCÍCIOS', sub: 'Sempre com apoio · terapeuta do lado afetado',
    itens: [
      { svg: CONES, nome: '1 · Passar os cones', desc: 'Com apoio, passar por cima de cones baixos (elástico só se indicado)', tempo: '5 a 10 vezes' },
      { svg: BLOCO, nome: '2 · Por cima do bloco', desc: 'Levantar bem o joelho e passar o pé por cima de um bloco baixo', tempo: '5 a 10 vezes' },
      { svg: JOELHO, nome: '3 · Joelho à frente', desc: 'Mãos na barra, corpo inclinado: levar o joelho à frente', tempo: '8 a 10 de cada' },
      { svg: PONTAS, nome: '4 · Pontas para cima', desc: 'Costas na parede (ou sentado): levantar as pontas dos pés', tempo: '10 a 15 vezes' },
      { svg: DESCOLAR, nome: '5 · Descolar da parede', desc: 'Encostar as costas à parede e voltar à frente usando os tornozelos', tempo: '5 a 8 vezes' }
    ],
    lembrar: ['Só com fisioterapeuta', 'Sempre com apoio', 'Ponta do pé para cima']
  }
};
