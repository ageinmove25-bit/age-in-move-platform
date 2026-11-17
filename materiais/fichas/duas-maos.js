// Ficha de atividade "Duas Mãos, Duas Tarefas" — cada mão faz uma coisa diferente ao mesmo tempo.
// Mão 1: peso leve (força). Mão 2: bola de ténis (preensão e coordenação). Combinada: corpo + atenção.

const PESO = (x, y, s = 1, rot = 0) => `<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})"><rect x="-34" y="-6" width="68" height="12" rx="4" fill="#1F2937"/><rect x="-46" y="-20" width="18" height="40" rx="6" fill="currentColor"/><rect x="28" y="-20" width="18" height="40" rx="6" fill="currentColor"/></g>`;
const BOLA = (x, y, r = 24) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="#D9F99D" stroke="#65A30D" stroke-width="3"/><path d="M${x - r * .8},${y - r * .5} C${x - r * .2},${y} ${x - r * .2},${y + r * .3} ${x - r * .7},${y + r * .7} M${x + r * .8},${y - r * .5} C${x + r * .2},${y} ${x + r * .2},${y + r * .3} ${x + r * .7},${y + r * .7}" fill="none" stroke="#fff" stroke-width="3"/></g>`;
const SETA = '<defs><marker id="dm" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const seta = (d, both) => `<path d="${d}" fill="none" stroke="#1F2937" stroke-width="5" stroke-linecap="round" marker-end="url(#dm)" ${both ? 'marker-start="url(#dm)"' : ''}/>`;
const txt = (x, y, t, s = 22) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="${s}" fill="#1F2937">${t}</text>`;
const fig = inner => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SETA}${inner}</svg>`;

const C1 = fig(PESO(60, 130, .8) + seta('M60,96 L60,40') + BOLA(150, 110) + txt(150, 170, 'apertar', 20) + txt(100, 116, '+', 34));
const C2 = fig(PESO(60, 130, .8) + seta('M60,96 L60,40') + BOLA(150, 110) + seta('M120,70 A34,34 0 1,1 178,80') + txt(150, 170, 'rodar', 20) + txt(100, 116, '+', 34));
const C3 = fig(PESO(60, 70, .8) + seta('M60,104 L60,170', true) + BOLA(150, 110) + seta('M150,150 L150,184') + txt(150, 66, 'bater', 20) + txt(100, 116, '+', 34));
const C4 = fig(PESO(60, 100, .8, 90) + seta('M80,100 L118,100', true) + BOLA(150, 100) + txt(150, 156, '2×', 30) + txt(60, 170, 'abrir', 20));
const C5 = fig(PESO(52, 70, .7) + BOLA(150, 70, 20) + seta('M70,110 C90,150 120,150 136,110') + seta('M136,110 C116,170 84,170 66,124') + txt(100, 190, 'trocar de mão', 18));
const C6 = fig(PESO(60, 130, .8) + seta('M60,96 L60,40') + BOLA(150, 110) + txt(150, 170, 'só nos', 18) + txt(150, 192, 'pares', 18) + txt(150, 50, '2·4·6', 22) + txt(100, 116, '+', 34));

module.exports = {
  slug: 'duas-maos',
  titulo: 'Duas Mãos, Duas Tarefas',
  subtitulo: 'Cada mão faz uma coisa diferente — ao mesmo tempo',
  kicker: 'Ficha de atividade · combinada · sentados',
  cor: '#4D7C0F', corClara: '#ECFCCB', corEscura: '#365314',
  paraQue: 'Numa mão, um peso leve para dobrar o braço; na outra, uma bola de ténis para apertar ou rodar. Fazer coisas diferentes com as duas mãos obriga o cérebro a coordenar os dois lados do corpo e a manter a atenção. Treina a força dos braços e das mãos, a coordenação e a concentração.',
  duracao: '15 min', grupo: 'Individual ou até 12 pessoas', custo: '0 a 15 €',
  paraGrupos: {
    fisico: 'Grupo 1 e Grupo 2, sentados. Grupo 3: só a bola (sem peso), uma tarefa de cada vez.',
    cognitivo: 'Grupo A (todas as combinações e regras com números). Grupo B: combinações 1 e 2, ao mesmo ritmo. Grupo C: só apertar a bola.',
    ebook: 'Atividade combinada — encaixa em "Corpo e Mente" (Grupo 1) e "Mexer e Pensar" (Grupo 2).'
  },
  materiais: [
    'Um peso leve por pessoa: halter de 0,5 a 1 kg, ou uma garrafa de água de 0,5 L',
    'Uma bola de ténis (ou bola anti-stress) por pessoa',
    'Cadeiras firmes, sem braços ou com braços largos',
    'O cartão "As 6 combinações", impresso ou no ecrã'
  ],
  preparar: [
    'Cadeiras em meia-lua, com o animador à frente, bem visível.',
    'Confirme quem tem dor no ombro, no cotovelo ou nas mãos (artrose): esses usam só a garrafa vazia ou nada.',
    'Combine qual a mão do peso e qual a mão da bola (a meio, trocam).'
  ],
  passos: [
    { faz: 'Dê a cada pessoa o peso e a bola.', diz: 'Peso nesta mão, bola na outra.' },
    { faz: 'Treinem cada mão sozinha: primeiro o peso, depois a bola.', diz: 'Só o braço do peso: dobra… e estica. Agora só aperta a bola.' },
    { faz: 'Juntem as duas: combinação 1, devagar, 8 vezes.', diz: 'Agora os dois juntos: dobra e aperta… estica e solta.' },
    { faz: 'Passe às combinações seguintes, uma de cada vez.', diz: 'Agora o braço sobe e a bola roda. Ui, isto é difícil!' },
    { faz: 'Troquem o peso e a bola de mão e repitam.', diz: 'Troca! A bola passa para a outra mão.' },
    { faz: 'Terminem a abrir e fechar as mãos, a relaxar.', diz: 'Sacudam as mãos. Muito bem, foi um desafio!' }
  ],
  niveis: {
    n1: 'Sem peso: só a bola, apertar e soltar 10 vezes em cada mão. Depois, a outra mão faz só "abrir e fechar" no ar. Uma tarefa de cada vez, se for preciso.',
    n2: 'Combinações 1 e 2, com as duas mãos ao mesmo ritmo, 8 vezes. Garrafa de água em vez de halter. Contar em voz alta com o grupo.',
    n3: 'As 6 combinações. Ritmos diferentes (o peso sobe 1 vez enquanto a bola aperta 2). Regras com números: o animador diz números e só se aperta a bola nos pares, ou só se dobra o braço quando ouvir uma cor.'
  },
  atencao: 'Pesos leves: o objetivo é coordenar, não levantar muito peso. Costas apoiadas, pés no chão. Respirar sempre. Não levantar o peso acima do ombro com quem tem dor. Ninguém se baixa para apanhar a bola que cai: o animador apanha.',
  seCorrerMal: 'Se as duas mãos começarem a fazer o mesmo (é muito comum!), pare, ria-se com o grupo e volte a treinar cada mão sozinha. Se cansar, pousem o peso e façam só a bola.',
  variantes: [
    'Com música: o peso sobe no ritmo forte e a bola aperta em todos os tempos.',
    'Em roda: a bola passa para o vizinho no fim de cada série, enquanto o peso continua a subir e a descer.',
    'Pés também: marchar sentado ao mesmo tempo (para o Grupo 1).',
    'Cores: bolas de cores diferentes; quando o animador diz uma cor, só quem tem essa bola aperta.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'AS 6 COMBINAÇÕES', sub: 'Da mais fácil (1) à mais difícil (6)',
    itens: [
      { svg: C1, nome: '1 · Dobrar e apertar', desc: 'O braço do peso dobra e a outra mão aperta a bola, ao mesmo tempo', tempo: '8 vezes' },
      { svg: C2, nome: '2 · Dobrar e rodar', desc: 'O braço dobra e a bola roda dentro da mão', tempo: '8 vezes' },
      { svg: C3, nome: '3 · Esticar e bater', desc: 'O braço do peso estica para baixo; a bola bate na coxa', tempo: '8 vezes' },
      { svg: C4, nome: '4 · Abrir e apertar 2 vezes', desc: 'O braço abre para o lado; a bola aperta duas vezes', tempo: '8 vezes' },
      { svg: C5, nome: '5 · Trocar de mão', desc: 'O peso e a bola passam para a mão contrária, ao mesmo tempo', tempo: '6 vezes' },
      { svg: C6, nome: '6 · Só nos pares', desc: 'Dobrar o braço sempre; apertar a bola só quando ouvir um número par', tempo: '1 minuto' }
    ],
    lembrar: ['Costas apoiadas', 'Pesos leves', 'Respirar', 'Trocar de mão']
  }
};
