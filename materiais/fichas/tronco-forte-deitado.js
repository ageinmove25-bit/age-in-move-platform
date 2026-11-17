// Ficha de atividade "Tronco Forte, Deitado" — 5 exercícios de abdominais e tronco feitos deitado
// (na cama, na marquesa ou num colchão). Física. Muito útil para pessoas acamadas ou com pouca mobilidade.

const K = '#1F2937', G = '#9CA3AF';
const SET = '<defs><marker id="tf" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#tf)" ${both ? 'marker-start="url(#tf)"' : ''}/>`;
const CAMA = `<rect x="6" y="150" width="188" height="16" rx="4" fill="#E5E7EB" stroke="${G}" stroke-width="3"/><rect x="10" y="134" width="40" height="16" rx="8" fill="#F3F4F6" stroke="${G}" stroke-width="3"/>`;
const CABECA = '<circle cx="30" cy="124" r="12" fill="#1F2937"/>';
const TRONCO = L('M42,138 L104,140');

// 1. Báscula da bacia + marcha (levantar um pé, depois o outro)
const MARCHA = s(`${CAMA}${CABECA}${TRONCO}${L('M104,140 L138,100 L166,146')}${L('M104,140 L134,96 L132,62')}${L('M50,140 L86,146')}${A('M150,90 L150,50')}`);
// 2. Báscula da bacia + deslizar o calcanhar
const DESLIZAR = s(`${CAMA}${CABECA}${TRONCO}${L('M104,140 L140,104 L166,146')}${L('M104,140 L176,146')}${L('M50,140 L86,146')}${A('M120,122 L184,122', true)}`);
// 3. "Cortar lenha": braços esticados com elástico, puxar na diagonal
const CORTAR = s(`${CAMA}${CABECA}${TRONCO}${L('M104,140 L140,104 L166,146')}${L('M48,134 L92,90')}<path d="M92,90 L6,40" stroke="#14B8A6" stroke-width="4" stroke-dasharray="6 5"/>${A('M100,70 C110,90 116,110 112,124')}`);
// 4. Rodar os joelhos para os lados (bola grande ou almofada debaixo das pernas)
const RODAR = s(`${CAMA}${CABECA}${TRONCO}<circle cx="150" cy="114" r="34" fill="currentColor" opacity=".8"/>${L('M104,140 L132,98 L178,96')}${L('M50,140 L86,146')}${A('M128,50 C150,36 172,40 184,58', true)}`);
// 5. Alcançar alvos: deitado de lado ou de costas, tocar em cartões/campainha
const ALVOS = s(`${CAMA}${CABECA}${TRONCO}${L('M104,140 L140,104 L166,146')}${L('M48,134 L84,96')}
  <rect x="78" y="70" width="22" height="22" rx="3" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/><rect x="128" y="40" width="22" height="22" rx="3" fill="#3B82F6"/><rect x="14" y="70" width="22" height="22" rx="3" fill="#EF4444"/>`);

module.exports = {
  slug: 'tronco-forte-deitado',
  titulo: 'Tronco Forte, Deitado',
  subtitulo: 'Cinco exercícios para a barriga e as costas, na cama ou no colchão',
  kicker: 'Ficha de atividade · física · deitado',
  cor: '#7C3AED', corClara: '#EDE9FE', corEscura: '#4C1D95',
  paraQue: 'Um tronco forte ajuda a virar-se na cama, a sentar-se na beira da cama, a manter-se direito na cadeira e a não cair. Fazem-se deitado de costas, na cama ou num colchão — servem mesmo para quem passa muito tempo deitado.',
  duracao: '10 a 20 min', grupo: 'Individual (ou até 4 pessoas em colchões, com supervisão)', custo: '0 a 15 €',
  paraGrupos: {
    fisico: 'Grupo 3 (acamados ou muito dependentes): exercícios 1, 2 e 5, na própria cama, com ajuda. Grupos 1 e 2: os 5 exercícios, em marquesa ou colchão.',
    cognitivo: 'Todos os grupos, por imitação e com toque guiado. O exercício 5 (alvos de cores) junta atenção — passa a combinado para os Grupos A e B.',
    ebook: 'Física — "Movimento Suave" (Grupo 3) e "Corpo em Movimento" (Grupo 2).'
  },
  materiais: [
    'Cama, marquesa ou colchão firme (não demasiado mole)',
    'Uma almofada para a cabeça',
    'Uma bola grande ou uma almofada grande (exercício 4)',
    'Opcional: banda elástica leve (exercício 3) e cartões de cores ou uma campainha (exercício 5)'
  ],
  preparar: [
    'Pessoa deitada de costas, joelhos dobrados, pés apoiados.',
    'Na cama: travar as rodas, baixar a cabeceira, retirar o que estiver à volta.',
    'Prenda a banda elástica a um ponto fixo atrás da cabeça (ou o animador segura).',
    'Confirmar com a equipa: osteoporose grave, hérnias, cirurgia abdominal recente.'
  ],
  passos: [
    { faz: 'Ensine a "báscula da bacia": encostar a parte baixa das costas à cama.', diz: 'Encoste as costas à cama, como se quisesse esmagar a minha mão.' },
    { faz: 'Exercício 1: mantendo as costas encostadas, levantar um pé e depois o outro.', diz: 'Costas encostadas… levanta o pé… e pousa. Agora o outro.' },
    { faz: 'Exercício 2: deslizar o calcanhar até a perna ficar esticada e voltar.', diz: 'O calcanhar escorrega pela cama… e volta.' },
    { faz: 'Exercícios 3 a 5: elástico na diagonal, rodar os joelhos, tocar nos alvos.', diz: 'Joelhos para este lado… e para o outro. Toque no vermelho!' },
    { faz: 'Terminar a respirar fundo e levantar devagar (passar de lado, sentar, esperar).', diz: 'Vamos virar de lado e sentar devagarinho.' }
  ],
  niveis: {
    n1: 'Na própria cama, com ajuda: só a báscula da bacia e o deslizar do calcanhar, 5 vezes. Alvos (cartões) seguros pelo animador perto da mão.',
    n2: 'Exercícios 1, 2, 4 e 5, 8 a 10 vezes. Rodar os joelhos com uma almofada entre eles em vez da bola.',
    n3: 'Os 5 exercícios, 10 a 15 vezes. Elástico no exercício 3. Na marcha, braço contrário estica para trás ao mesmo tempo. Alvos mais longe, a cruzar o corpo.'
  },
  atencao: 'Respirar sempre — não prender o ar ao fazer força. Movimentos lentos, sem dor nas costas. Com osteoporose grave ou cirurgia recente, só com indicação do fisioterapeuta e sem rotações fortes. Ao levantar no fim, fazê-lo devagar (virar de lado, sentar, esperar um minuto): pode haver tonturas.',
  seCorrerMal: 'Se doer as costas, ponha uma almofada debaixo dos joelhos e faça só a báscula. Se a pessoa não conseguir levantar o pé, ajude a apoiar a perna e peça só a intenção do movimento. Registe e informe a equipa.',
  variantes: [
    'Na cama de manhã, antes de levantar: uma rotina de 5 minutos.',
    'Alvos com números: tocar pela ordem 1, 2, 3 (sequência).',
    'Música calma e contagem em voz alta para dar ritmo.',
    'Deitado de lado: alcançar os alvos à frente (como no vídeo).'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 5 EXERCÍCIOS', sub: 'Deitado de costas · joelhos dobrados · respirar sempre',
    itens: [
      { svg: MARCHA, nome: '1 · Báscula + marcha', desc: 'Costas encostadas à cama; levantar um pé, depois o outro', tempo: '8 a 10 de cada' },
      { svg: DESLIZAR, nome: '2 · Deslizar o calcanhar', desc: 'Costas encostadas; esticar a perna a escorregar o calcanhar e voltar', tempo: '8 a 10 de cada' },
      { svg: CORTAR, nome: '3 · Cortar lenha', desc: 'Braços esticados a segurar o elástico; puxar na diagonal até à anca', tempo: '8 de cada lado' },
      { svg: RODAR, nome: '4 · Rodar os joelhos', desc: 'Pernas em cima de uma bola ou almofada; levar os joelhos de lado a lado', tempo: '8 a 10 vezes' },
      { svg: ALVOS, nome: '5 · Tocar nos alvos', desc: 'Tocar nos cartões de cores que o animador mostra ou segura', tempo: '10 a 15 toques' }
    ],
    lembrar: ['Respirar sempre', 'Sem dor', 'Levantar devagar no fim']
  }
};
