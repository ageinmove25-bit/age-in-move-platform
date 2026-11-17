// Ficha de atividade "Caras Divertidas" — montar caras com olhos, nariz e boca de papel
// numa cara de cartão segura à frente do próprio rosto. Combinada: noção do corpo e motricidade fina
// + atenção, linguagem e humor.

const K = '#1F2937';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${i}</svg>`;
const olho = (cx, cy, r = 30, pupila = 14) => `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.35}" ry="${r}" fill="#fff" stroke="${K}" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="${pupila}" fill="${K}"/><circle cx="${cx + 5}" cy="${cy - 5}" r="4" fill="#fff"/>`;

const OLHOS = s(olho(58, 100) + olho(142, 100) + `<path d="M22,62 Q58,40 96,62 M104,62 Q142,40 178,62" fill="none" stroke="${K}" stroke-width="6" stroke-linecap="round"/>`);
const OLHOS2 = s(olho(58, 100, 34, 22) + olho(142, 100, 34, 8));
const NARIZ = s(`<path d="M100,30 C90,80 60,120 66,146 C74,170 126,170 134,146 C140,120 110,80 100,30 Z" fill="#FBCFE8" stroke="${K}" stroke-width="5"/><circle cx="84" cy="146" r="7" fill="${K}"/><circle cx="116" cy="146" r="7" fill="${K}"/>`);
const NARIZ2 = s(`<circle cx="100" cy="100" r="56" fill="#DC2626" stroke="${K}" stroke-width="5"/><circle cx="82" cy="82" r="12" fill="#fff" opacity=".6"/>`);
const BOCA = s(`<path d="M24,86 Q100,60 176,86 Q150,156 100,158 Q50,156 24,86 Z" fill="#F87171" stroke="${K}" stroke-width="5"/><path d="M40,92 Q100,104 160,92 L156,108 Q100,118 44,108 Z" fill="#fff" stroke="${K}" stroke-width="3"/>`);
const BOCA2 = s(`<path d="M30,110 Q100,60 170,110" fill="none" stroke="${K}" stroke-width="12" stroke-linecap="round"/><ellipse cx="100" cy="110" rx="30" ry="22" fill="#F87171" stroke="${K}" stroke-width="5"/>`);
const BIGODE = s(`<path d="M100,96 C80,70 40,74 30,96 C22,112 6,108 4,96 C10,140 70,138 100,112 C130,138 190,140 196,96 C194,108 178,112 170,96 C160,74 120,70 100,96 Z" fill="${K}"/>`);
const SOBRANCELHAS = s(`<path d="M18,110 Q52,60 92,96" fill="none" stroke="${K}" stroke-width="16" stroke-linecap="round"/><path d="M108,96 Q148,60 182,110" fill="none" stroke="${K}" stroke-width="16" stroke-linecap="round"/>`);
const OCULOS = s(`<circle cx="58" cy="104" r="40" fill="#E0F2FE" stroke="${K}" stroke-width="8"/><circle cx="142" cy="104" r="40" fill="#E0F2FE" stroke="${K}" stroke-width="8"/><path d="M98,100 Q100,88 102,100" fill="none" stroke="${K}" stroke-width="8"/>`);
const ORELHAS = s(`<path d="M54,40 C14,40 10,110 30,140 C40,156 66,150 62,132 C58,112 74,100 70,72 C68,54 64,40 54,40 Z" fill="#FBCFE8" stroke="${K}" stroke-width="5"/><path d="M146,40 C186,40 190,110 170,140 C160,156 134,150 138,132 C142,112 126,100 130,72 C132,54 136,40 146,40 Z" fill="#FBCFE8" stroke="${K}" stroke-width="5"/>`);
const CHAPEU = s(`<path d="M50,140 L64,50 Q100,30 136,50 L150,140 Z" fill="#7C3AED" stroke="${K}" stroke-width="5"/><rect x="14" y="134" width="172" height="26" rx="12" fill="#7C3AED" stroke="${K}" stroke-width="5"/><rect x="62" y="114" width="76" height="16" fill="#FDE047"/>`);
const LACO = s(`<path d="M100,100 L24,58 L24,142 Z M100,100 L176,58 L176,142 Z" fill="#DC2626" stroke="${K}" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="100" r="18" fill="#DC2626" stroke="${K}" stroke-width="5"/>`);
const BRINCOS = s(`<circle cx="56" cy="70" r="14" fill="#FDE047" stroke="${K}" stroke-width="5"/><circle cx="56" cy="128" r="26" fill="#FDE047" stroke="${K}" stroke-width="5"/><circle cx="144" cy="70" r="14" fill="#FDE047" stroke="${K}" stroke-width="5"/><circle cx="144" cy="128" r="26" fill="#FDE047" stroke="${K}" stroke-width="5"/><path d="M56,84 L56,102 M144,84 L144,102" stroke="${K}" stroke-width="5"/>`);

const MOLDE = s(`<path d="M100,10 C150,10 176,52 176,98 C176,150 146,192 100,192 C54,192 24,150 24,98 C24,52 50,10 100,10 Z" fill="none" stroke="${K}" stroke-width="2.5" stroke-dasharray="7 6"/>
  <line x1="100" y1="16" x2="100" y2="186" stroke="#D1D5DB" stroke-width="1.2" stroke-dasharray="3 4"/><line x1="30" y1="96" x2="170" y2="96" stroke="#D1D5DB" stroke-width="1.2" stroke-dasharray="3 4"/>`);

module.exports = {
  slug: 'caras-divertidas',
  titulo: 'Caras Divertidas',
  subtitulo: 'Montar uma cara de papel sem a ver — e rir com o resultado',
  kicker: 'Ficha de atividade · combinada · à mesa',
  cor: '#DB2777', corClara: '#FCE7F3', corEscura: '#831843',
  paraQue: 'Cada pessoa segura uma cara de cartão à frente do próprio rosto e, sem ver, tenta pôr os olhos, o nariz e a boca de papel no sítio certo — usando o próprio rosto como guia. O resultado é quase sempre uma cara muito engraçada. Treina a noção do corpo, as mãos e a atenção — e dá muitas gargalhadas.',
  duracao: '20 a 30 min', grupo: 'Pares ou até 8 pessoas', custo: '0 a 5 € (cartão, tesoura, fita-cola)',
  paraGrupos: {
    fisico: 'Todos os grupos (sentados à mesa). Grupo 3: com a cara de cartão pousada na mesa ou segura pelo animador.',
    cognitivo: 'Grupo A e Grupo B (de olhos abertos primeiro). Grupo C: montar uma cara de olhos abertos, nomeando cada parte com o animador.',
    ebook: 'Combinada — "Corpo e Mente" (Grupo 1) e "Mexer e Pensar" (Grupo 2); versão de olhos abertos também em "Mente Ativa" (Grupo B).'
  },
  materiais: [
    'Cartão (caixas de cartão reaproveitadas) para as caras — uma por pessoa',
    'As peças desta ficha (olhos, narizes, bocas, bigode…) impressas, de preferência em papel grosso',
    'Massa adesiva (tipo "Blu Tack") para colar as peças',
    'Uma pega por cara: rolo de cartão colado por trás'
  ],
  preparar: [
    'Recorte as caras de cartão a partir do molde desta ficha (ampliar para A3, se possível).',
    'Recorte as peças e ponha um bocadinho de massa adesiva atrás de cada uma.',
    'Separe as peças por tipo em pratos ou taças.'
  ],
  passos: [
    { faz: 'Mostre uma cara de cartão já montada, a rir.', diz: 'Hoje vamos fazer caras divertidas!' },
    { faz: 'Nomeiem juntos as partes da cara, tocando no próprio rosto.', diz: 'Onde estão os olhos? E o nariz? E a boca?' },
    { faz: 'Primeira ronda, de olhos abertos: a pessoa monta a cara em cima da mesa.', diz: 'Escolha uns olhos… onde ficam? Muito bem.' },
    { faz: 'Segunda ronda: segurar a cara de cartão à frente do rosto e colar as peças sem ver.', diz: 'Agora segure a cara à frente da sua. O nariz vai… onde está o seu nariz!' },
    { faz: 'Baixar a cara de cartão, ver o resultado e dar um nome à personagem.', diz: 'Que cara tão engraçada! Como se chama este senhor?' }
  ],
  niveis: {
    n1: 'De olhos abertos, com a cara de cartão pousada na mesa. Só 3 peças grandes (olhos, nariz, boca). O animador nomeia cada peça e mostra no próprio rosto onde fica.',
    n2: 'Primeiro de olhos abertos; depois a segurar a cara à frente do rosto (sem ver), só com olhos, nariz e boca. O animador pode guiar: "mais para cima, mais para o lado".',
    n3: 'Sem ver e com todas as peças (bigode, sobrancelhas, óculos, orelhas, chapéu). Em pares: um segura a cara à frente do rosto do outro e este dá as indicações ("o olho vai mais para a esquerda!"). Inventar uma história para a personagem.'
  },
  atencao: 'Segurar a cara de cartão à frente do rosto pode assustar ou desorientar algumas pessoas com demência: faça sempre primeiro de olhos abertos e não insista. Tesouras só com supervisão. Massa adesiva e peças pequenas fora do alcance de quem leva coisas à boca. Pedir autorização antes de fotografar.',
  seCorrerMal: 'Se a pessoa não gostar de tapar a cara, faça só de olhos abertos, na mesa. Se ficar frustrada com o resultado "torto", ria-se com ela e diga que é esse o objetivo. O importante é a gargalhada, não a cara perfeita.',
  variantes: [
    'Emoções: montar uma cara triste, contente, zangada, surpreendida — e o grupo adivinha a emoção.',
    'Retrato: tentar montar a cara de alguém do grupo (óculos, bigode, brincos) e adivinhar quem é.',
    'Memória: mostrar uma cara montada 30 segundos, desmontar, e a pessoa volta a montá-la igual.',
    'Desenhar: em vez de peças recortadas, desenhar os olhos, o nariz e a boca com marcadores grossos, de olhos fechados.'
  ],
  registo: true,
  cartoes: [
    { titulo: 'PEÇAS · 1', sub: 'Imprima em papel grosso e recorte pelo tracejado', recortar: true,
      itens: [{ nome: 'Olhos', svg: OLHOS }, { nome: 'Olhos malucos', svg: OLHOS2 }, { nome: 'Nariz', svg: NARIZ }, { nome: 'Nariz de palhaço', svg: NARIZ2 }, { nome: 'Boca a sorrir', svg: BOCA }, { nome: 'Boca de espanto', svg: BOCA2 }] },
    { titulo: 'PEÇAS · 2', sub: 'Os extras para as caras mais divertidas', recortar: true,
      itens: [{ nome: 'Bigode', svg: BIGODE }, { nome: 'Sobrancelhas', svg: SOBRANCELHAS }, { nome: 'Óculos', svg: OCULOS }, { nome: 'Orelhas', svg: ORELHAS }, { nome: 'Chapéu', svg: CHAPEU }, { nome: 'Laço', svg: LACO }] },
    { titulo: 'MOLDE DA CARA', sub: 'Amplie para A3, recorte, passe para cartão e cole uma pega por trás', molde: MOLDE }
  ]
};
