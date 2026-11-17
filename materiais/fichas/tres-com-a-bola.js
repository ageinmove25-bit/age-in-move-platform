// Ficha de atividade "Três com a Bola" — 3 exercícios sentados com uma bola pequena.
// Física: ligação entre o pé, o tornozelo, o joelho e a anca, força de preensão e coordenação.

const SET = '<defs><marker id="tb" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const L = (d, w = 8, c = '#1F2937') => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="#1F2937" stroke-width="5" stroke-linecap="round" marker-end="url(#tb)" ${both ? 'marker-start="url(#tb)"' : ''}/>`;
const BALL = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor"/>`;
const CHAO = '<line x1="10" y1="188" x2="190" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const CAD = '<g stroke="#9CA3AF" stroke-width="5" fill="none" stroke-linecap="round"><path d="M112,122 L168,122 M166,122 L166,52 M116,122 L116,186 M162,122 L162,186"/></g>';
const svg = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;

// 1. Passar a bola por baixo da perna (vista de frente)
const OITO = svg(`<g stroke="#9CA3AF" stroke-width="5" fill="none" stroke-linecap="round"><path d="M46,130 L154,130 M52,130 L52,186 M148,130 L148,186"/></g>${CHAO}
  ${L('M100,126 L100,62')}<circle cx="100" cy="42" r="14" fill="#1F2937"/>
  ${L('M90,126 L80,186 M68,186 L84,186')}
  ${L('M110,126 L140,96 L146,150 M138,150 L156,150')}
  ${L('M100,76 L132,134')}${L('M100,76 L74,112 L106,128')}${BALL(124, 132, 14)}
  ${A('M168,92 C186,120 180,160 150,166 C126,170 112,154 116,146')}`);
// 2. Pressionar a bola com o pé (vista de lado)
const PRESS = svg(`${CAD}${CHAO}${L('M140,118 L132,56')}<circle cx="128" cy="40" r="12" fill="#1F2937"/>${L('M134,66 L140,108')}
  ${L('M140,118 L92,120 L92,184 M80,184 L94,184')}${L('M140,118 L80,112 L66,152 M50,152 L70,152')}${BALL(60, 170)}
  ${A('M38,112 L38,148')}`);
// 3. Rolar a bola para a frente e para trás em linha reta
const ROLAR = svg(`${CAD}${CHAO}<line x1="10" y1="188" x2="110" y2="188" stroke="currentColor" stroke-width="5" stroke-dasharray="8 7"/>
  ${L('M140,118 L132,56')}<circle cx="128" cy="40" r="12" fill="#1F2937"/>${L('M134,66 L140,108')}
  ${L('M140,118 L92,120 L92,184 M80,184 L94,184')}${L('M140,118 L70,126 L48,154 M34,158 L52,154')}${BALL(42, 172)}
  ${A('M20,138 L78,138', true)}`);

module.exports = {
  slug: 'tres-com-a-bola',
  titulo: 'Três com a Bola',
  subtitulo: 'Pés, pernas e mãos a trabalhar juntos, sentados',
  kicker: 'Ficha de atividade · física · sentados',
  cor: '#0369A1', corClara: '#E0F2FE', corEscura: '#0C4A6E',
  paraQue: 'Três exercícios simples com uma bola pequena e macia, feitos sentado: passar a bola de uma mão para a outra por baixo da perna, pressionar a bola com o pé e rolar a bola para a frente e para trás em linha reta. Ligam o pé, o tornozelo, o joelho e a anca, fortalecem a mão e treinam a coordenação. Seguros mesmo para pessoas muito idosas.',
  duracao: '10 a 15 min', grupo: 'Individual ou até 10 pessoas', custo: '3 a 10 € (uma bola pequena por pessoa)',
  paraGrupos: {
    fisico: 'Grupo 1 e Grupo 2 (os 3 exercícios, sentado). Grupo 3: só os exercícios 2 e 3 com o pé que a pessoa conseguir, com o animador a segurar a bola.',
    cognitivo: 'Exercício físico: adequado a todos os grupos que o consigam fazer por imitação. Para o Grupo C, demonstrar ao lado e fazer uma de cada vez.',
    ebook: 'Física — "Corpo em Movimento" (Grupo 2) e "Em Forma" (Grupo 1). Com contagens em voz alta ou regras, passa a combinada.'
  },
  materiais: [
    'Uma bola pequena e macia (20 a 25 cm, tipo pilates), uma por pessoa',
    'Cadeira firme, sem rodas, de preferência com braços',
    'Fita-cola para marcar uma linha reta no chão à frente de cada cadeira (exercício 3)',
    'O cartão "Os 3 exercícios", impresso ou no ecrã'
  ],
  preparar: [
    'Cadeiras com espaço à frente para esticar a perna.',
    'Marque com fita-cola uma linha de 50 cm a partir do pé da pessoa.',
    'Encha pouco a bola: mais macia é mais fácil de segurar e não foge debaixo do pé.',
    'Calçado fechado ou meias antiderrapantes.'
  ],
  passos: [
    { faz: 'Dê uma bola a cada pessoa e sentem-se bem atrás na cadeira.', diz: 'Costas apoiadas, pés no chão. Hoje a bola trabalha connosco.' },
    { faz: 'Exercício 1: levantar um joelho e passar a bola de uma mão para a outra por baixo da perna.', diz: 'Joelho para cima… a bola passa por baixo… e troca de mão!' },
    { faz: 'Exercício 2: pôr a planta do pé em cima da bola e pressionar e soltar.', diz: 'Pé em cima da bola. Carrega… e solta. Sem a deixar fugir.' },
    { faz: 'Exercício 3: com o pé em cima da bola, rolar para a frente e para trás, seguindo a linha.', diz: 'Rola para a frente pela linha… e volta. Sempre em linha reta!' },
    { faz: 'Trocar de perna em cada exercício.', diz: 'Agora o outro pé.' },
    { faz: 'Terminar a rodar os tornozelos e a abrir e fechar as mãos.', diz: 'Muito bem! Os pés e as mãos agradecem.' }
  ],
  niveis: {
    n1: 'Exercício 1 sem levantar a perna: passar a bola de mão em mão à frente do corpo ou à volta da cintura. Exercícios 2 e 3: o animador segura a bola no sítio e a pessoa só pousa o pé e carrega. 5 a 8 vezes.',
    n2: 'Os 3 exercícios, 10 vezes cada perna. Mãos nos braços da cadeira se precisar de equilíbrio.',
    n3: 'Como no vídeo: exercício 1 — 20 vezes × 2; exercícios 2 e 3 — 30 vezes por perna × 2. Rolar mais longe e devagar, a manter a linha. Passar a bola em "oito" por baixo das duas pernas, alternadas.'
  },
  atencao: 'Sempre sentado, com as costas apoiadas. No exercício 1, levantar o joelho só até onde for confortável (cuidado com próteses da anca: não cruzar a perna nem dobrar muito). A bola não deve ficar dura: se fugir debaixo do pé pode desequilibrar. O animador apanha as bolas que caem.',
  seCorrerMal: 'Se a bola fugir, esvazie-a um pouco ou ponha-a encostada a uma parede. Se a pessoa não conseguir levantar o joelho, passe a bola à volta da cintura. Se aparecer cãibra no pé, pare e rode o tornozelo devagar.',
  variantes: [
    'Contar em voz alta, ou dizer os dias da semana a cada repetição (passa a atividade combinada).',
    'Rolar a bola para os lados (como um limpa-para-brisas) em vez de para a frente.',
    'Desenhar com o pé um círculo ou um 8 em cima da bola.',
    'Em pares: rolar a bola com o pé para o colega sentado à frente, e ele devolve.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 3 EXERCÍCIOS', sub: 'Sentado, costas apoiadas · trocar de perna em cada um',
    itens: [
      { svg: OITO, nome: '1 · Bola por baixo da perna', desc: 'Levantar o joelho e passar a bola de uma mão para a outra por baixo da perna', tempo: '10 a 20 vezes × 2' },
      { svg: PRESS, nome: '2 · Pressionar com o pé', desc: 'Pé em cima da bola: carregar e soltar, sem a deixar fugir', tempo: '10 a 30 vezes por perna' },
      { svg: ROLAR, nome: '3 · Rolar em linha reta', desc: 'Com o pé em cima da bola, rolar para a frente e para trás pela linha', tempo: '10 a 30 vezes por perna' }
    ],
    lembrar: ['Costas apoiadas', 'Bola macia', 'Devagar e controlado', 'Trocar de perna']
  }
};
