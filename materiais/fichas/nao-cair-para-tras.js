// Ficha de atividade "Não Cair para Trás" — exercícios para a retropulsão (tendência involuntária
// para cair para trás), frequente na doença de Parkinson e em algumas pessoas idosas. Só com fisioterapeuta.

const K = '#1F2937', G = '#9CA3AF', B = '#22C55E';
const SET = '<defs><marker id="nt" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = d => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#nt)"/>`;
const H = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const CHAO = '<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const CAD = `<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M112,122 L168,122 M166,122 L166,52 M116,122 L116,186 M162,122 L162,186"/></g>`;

// 1. Sentado, inclinar para a frente e tocar alvos na parede
const ALCANCAR = s(`<rect x="0" y="0" width="34" height="188" fill="#F3F4F6"/>
  <rect x="10" y="50" width="16" height="16" rx="3" fill="#EF4444"/><rect x="10" y="90" width="16" height="16" rx="3" fill="#FACC15"/><rect x="10" y="130" width="16" height="16" rx="3" fill="#3B82F6"/>
  ${CAD}${CHAO}${L('M140,118 L104,70')}${H(96, 58)}${L('M110,78 L36,62')}${L('M140,118 L92,120 L92,184 M80,184 L94,184')}${A('M120,40 L64,40')}`);
// 2. Rolar a bola para a frente e levantar
const BOLA = s(`${CAD}${CHAO}<circle cx="46" cy="150" r="36" fill="${B}" opacity=".85" stroke="${K}" stroke-width="3"/>
  ${L('M138,118 L106,76')}${H(98, 62)}${L('M110,82 L66,118')}${L('M138,118 L92,122 L94,184 M82,184 L96,184')}${A('M120,40 L70,40')}`);
// 3. Encostado à parede, empurrar para a frente
const PAREDE = s(`<rect x="150" y="0" width="50" height="188" fill="#F3F4F6"/>${CHAO}
  <g opacity=".3">${L('M140,118 L146,60')}${H(146, 42)}${L('M140,118 L120,186')}</g>
  ${L('M108,118 L106,60')}${H(106, 42)}${L('M106,70 L84,104')}${L('M108,118 L118,186 M108,186 L124,186')}${A('M140,30 L76,30')}`);
// 4. Levantar da cadeira com elástico a puxar para trás (empurrar a anca para a frente)
const ELASTICO = s(`${CAD}${CHAO}<path d="M96,118 L196,96" stroke="${B}" stroke-width="5"/>
  ${L('M96,118 L94,60')}${H(94, 42)}${L('M94,70 L74,96')}${L('M96,118 L100,186 M90,186 L106,186')}${A('M60,140 L20,140')}`);
// 5. Ajoelhado com almofada, empurrar a anca para a frente (só com fisioterapeuta)
const JOELHOS = s(`${CHAO}<rect x="58" y="176" width="90" height="12" rx="5" fill="#E5E7EB" stroke="${G}" stroke-width="2"/>
  <path d="M110,128 L196,150" stroke="${B}" stroke-width="5"/>${L('M110,128 L104,70')}${H(102, 52)}${L('M104,80 L84,30')}
  ${L('M110,128 L84,176 L140,178')}${A('M70,130 L30,130')}`);

module.exports = {
  slug: 'nao-cair-para-tras',
  titulo: 'Não Cair para Trás',
  subtitulo: 'Exercícios para a retropulsão — só com fisioterapeuta',
  kicker: 'Ficha de atividade · reabilitação · retropulsão',
  cor: '#15803D', corClara: '#DCFCE7', corEscura: '#14532D',
  paraQue: 'Algumas pessoas — sobretudo com doença de Parkinson — têm tendência involuntária para cair para trás quando se levantam, quando param ou quando recuam. Estes exercícios ensinam o corpo a ir para a frente: inclinar o tronco, levar o peso para a ponta dos pés e empurrar a anca para a frente.',
  duracao: '15 a 20 min', grupo: 'Individual, com fisioterapeuta', custo: '0 a 15 €',
  paraGrupos: {
    fisico: 'Pessoas com retropulsão que se levantam com ou sem ajuda (habitualmente Grupo 1 ou 2). Exercícios 1 e 2 adequados ao Grupo 2; 3 e 4 com supervisão próxima; 5 só para o Grupo 1, com fisioterapeuta.',
    cognitivo: 'Grupos A e B (percebem e repetem a instrução "para a frente"). Grupo C: só o exercício 1, guiado.',
    ebook: 'Física — atividade terapêutica individual. Junta-se às fichas de Parkinson num conjunto "Parkinson e AVC".'
  },
  materiais: [
    'Cadeira firme com braços, encostada à parede',
    'Uma bola grande (de pilates ou de praia)',
    'Alvos de cores colados na parede (post-its ou papéis)',
    'Banda elástica comprida (se indicada) e almofada grossa'
  ],
  preparar: [
    'Espaço junto a uma parede, sem tapetes, chão seco.',
    'O fisioterapeuta fica SEMPRE atrás da pessoa, com as mãos perto da cintura.',
    'Calçado fechado e antiderrapante.',
    'Fazer no período "on" da medicação.'
  ],
  passos: [
    { faz: '1 · Sentado, inclinar o tronco e tocar nos alvos da parede, cada vez mais longe.', diz: 'Estique-se para a frente e toque no vermelho!' },
    { faz: '2 · Sentado, rolar a bola para a frente até o peso passar para os pés, e levantar.', diz: 'A bola vai à frente… o peso vai aos pés… e para cima!' },
    { faz: '3 · De pé, costas perto da parede: encostar e empurrar para voltar à frente.', diz: 'Encoste-se… e empurre-se para a frente, até ao centro.' },
    { faz: '4 · Levantar da cadeira com o elástico a puxar para trás, empurrando a anca para a frente.', diz: 'O elástico puxa para trás — você vai para a frente!' }
  ],
  niveis: {
    n1: 'Só sentado: exercício 1 (alvos perto) e exercício 2 sem levantar, só rolar a bola para a frente e voltar. 5 a 8 vezes.',
    n2: 'Exercícios 1, 2 e 3. No 3, os pés ficam a um palmo da parede (pouca inclinação). Sem elástico. 5 a 8 vezes.',
    n3: 'Os 5 exercícios, com elástico leve nos exercícios 4 e 5 e alvos mais longe. Exercício 5 ajoelhado numa almofada grossa, só com fisioterapeuta.'
  },
  atencao: 'Só com indicação e acompanhamento do fisioterapeuta: a pessoa tende a cair para trás, por isso o terapeuta fica atrás dela, sempre. Exercício 5 (ajoelhado) só para quem se ajoelha e levanta em segurança, sem dor nos joelhos e com almofada grossa. O elástico nunca deve puxar com força. Parar se houver tonturas, medo ou desequilíbrio.',
  seCorrerMal: 'Se a pessoa cair para trás contra a parede ou a cadeira, pare, sente-a e volte ao nível sentado. Use a palavra "FRENTE!" em voz alta como pista. Registe para o fisioterapeuta ajustar.',
  variantes: [
    'Alvos de cores ditas pelo terapeuta (atenção e rapidez).',
    'Contar em voz alta "1, 2, 3 — FRENTE!" antes de levantar.',
    'Treinar a paragem: andar e parar com o peso à frente, nunca nos calcanhares.',
    'Treino em casa (com família): só o exercício 1 sentado.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 5 EXERCÍCIOS', sub: 'O corpo aprende a ir para a frente · fisioterapeuta atrás',
    itens: [
      { svg: ALCANCAR, nome: '1 · Alcançar sentado', desc: 'Inclinar o tronco e tocar nos alvos da parede, cada vez mais longe', tempo: '8 a 10 vezes' },
      { svg: BOLA, nome: '2 · Rolar a bola e levantar', desc: 'Rolar a bola para a frente até o peso passar aos pés, e levantar', tempo: '5 a 8 vezes' },
      { svg: PAREDE, nome: '3 · Descolar da parede', desc: 'Encostar as costas à parede e empurrar-se de volta à frente', tempo: '5 a 8 vezes' },
      { svg: ELASTICO, nome: '4 · Levantar contra o elástico', desc: 'Elástico a puxar para trás; levantar empurrando a anca para a frente', tempo: '5 a 8 vezes' },
      { svg: JOELHOS, nome: '5 · Anca à frente, ajoelhado', desc: 'Só com fisioterapeuta: ajoelhado em almofada, empurrar a anca à frente', tempo: '5 vezes' }
    ],
    lembrar: ['Só com fisioterapeuta', 'Terapeuta atrás', 'Nariz à frente dos pés']
  }
};
