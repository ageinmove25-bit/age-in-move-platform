// Ficha de atividade "Circuito das Mãos" — 5 estações de motricidade fina e força das mãos.
// Física (praxia fina). Materiais baratos em substituição do material clínico de terapia ocupacional.

const K = '#1F2937';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${i}</svg>`;
const POMS = ['#EF4444', '#3B82F6', '#22C55E', '#EAB308', '#A855F7', '#F97316'];
const pom = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 3}" fill="#fff" opacity=".35"/>`;

// 1. Pinos num tabuleiro com pinça de cozinha
const PINOS = s(`<rect x="20" y="70" width="160" height="110" rx="10" fill="#FDE047" stroke="${K}" stroke-width="4"/>
  ${[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => `<circle cx="${45 + c * 37}" cy="${92 + r * 25}" r="5" fill="${K}"/>`).join('')).join('')}
  ${pom(45, 92, 11, POMS[0])}${pom(82, 92, 11, POMS[1])}${pom(45, 117, 11, POMS[4])}
  <path d="M150,20 L118,74 M170,28 L126,78" stroke="#9CA3AF" stroke-width="8" stroke-linecap="round"/><path d="M150,20 Q168,10 170,28" fill="none" stroke="#9CA3AF" stroke-width="8"/>${pom(122, 80, 10, POMS[2])}`);
// 2. Pompons numa grelha (cesto de plástico)
const REDE = s(`<circle cx="100" cy="104" r="80" fill="#FDA4AF" stroke="${K}" stroke-width="4"/>
  ${[...Array(7)].map((_, r) => [...Array(7)].map((_, c) => { const x = 40 + c * 20, y = 44 + r * 20; return Math.hypot(x - 100, y - 104) < 66 ? `<rect x="${x - 6}" y="${y - 6}" width="12" height="12" rx="2" fill="#fff"/>` : ''; }).join('')).join('')}
  ${pom(80, 84, 8, POMS[1])}${pom(120, 104, 8, POMS[2])}${pom(100, 124, 8, POMS[3])}${pom(60, 124, 8, POMS[4])}
  <path d="M150,170 C160,140 150,120 136,118 M136,118 L128,108 M150,170 L172,180" stroke="${K}" stroke-width="7" fill="none" stroke-linecap="round"/>`);
// 3. "Come-come": bola de ténis com fenda a apanhar berlindes
const COMECOME = s(`<g transform="translate(96,100)"><circle r="62" fill="#D9F99D" stroke="#65A30D" stroke-width="4"/>
  <path d="M-62,0 L0,0 L-52,-34 Z" fill="#fff" stroke="#65A30D" stroke-width="3"/><circle cx="6" cy="-28" r="7" fill="${K}"/>
  <path d="M-30,46 C-10,20 10,20 30,46" fill="none" stroke="#fff" stroke-width="4"/></g>
  ${pom(24, 100, 8, POMS[0])}${pom(178, 60, 9, POMS[1])}${pom(176, 150, 9, POMS[5])}
  <path d="M60,170 L40,190 M140,170 L160,190" stroke="${K}" stroke-width="6" stroke-linecap="round"/>`);
// 4. Plasticina com berlindes escondidos
const MASSA = s(`<path d="M30,120 C30,70 80,56 110,70 C150,56 178,90 172,122 C168,160 120,170 96,160 C60,172 30,156 30,120 Z" fill="#FDE047" stroke="${K}" stroke-width="4"/>
  ${pom(80, 110, 10, POMS[1])}${pom(130, 120, 10, POMS[0])}<circle cx="104" cy="96" r="10" fill="#22C55E" opacity=".5"/>
  <path d="M60,40 L74,70 M150,36 L134,68" stroke="${K}" stroke-width="7" stroke-linecap="round"/>`);
// 5. Pompon entre os dedos (juntar os dedos)
const ADUCAO = s(`<path d="M40,190 L40,110 M70,190 L70,50 M100,190 L100,40 M130,190 L130,56 M160,190 L172,100" stroke="#FBCFE8" stroke-width="24" stroke-linecap="round"/>
  <path d="M40,190 L40,110 M70,190 L70,50 M100,190 L100,40 M130,190 L130,56 M160,190 L172,100" stroke="${K}" stroke-width="2" stroke-linecap="round" fill="none" opacity=".2"/>
  ${pom(85, 110, 13, POMS[4])}${pom(115, 130, 13, POMS[2])}`);

module.exports = {
  slug: 'circuito-das-maos',
  titulo: 'Circuito das Mãos',
  subtitulo: 'Cinco estações para dedos fortes e mãos hábeis',
  kicker: 'Ficha de atividade · física · motricidade fina',
  cor: '#9333EA', corClara: '#F3E8FF', corEscura: '#581C87',
  paraQue: 'Cinco pequenas estações, como as que os terapeutas ocupacionais usam, mas com materiais baratos: pôr pinos com uma pinça, tirar pompons de uma grelha, "comer" bolinhas com uma bola de ténis, procurar tesouros na plasticina e transportar pompons entre os dedos. Fortalecem os dedos para abotoar, abrir frascos ou tirar comprimidos da embalagem.',
  duracao: '20 a 30 min (4 a 5 min por estação)', grupo: 'Individual ou 5 pessoas em rotação', custo: '5 a 15 €',
  paraGrupos: {
    fisico: 'Grupo 1 e Grupo 2 (sentados à mesa). Grupo 3: estações 1 e 2 com objetos grandes, com ajuda.',
    cognitivo: 'Grupo A e Grupo B. Grupo C: só com objetos grandes (rolhas, bolas de espuma) e supervisão permanente — nada de berlindes nem pompons pequenos.',
    ebook: 'Física — "Corpo em Movimento" (Grupo 2) e "Em Forma" (Grupo 1). Com cores ou contagens, passa a combinada.'
  },
  materiais: [
    '1: placa de cortiça com furos, rolhas e uma pinça de cozinha',
    '2: cesto de plástico com buracos e pompons grandes',
    '3: bola de ténis com uma fenda de 4 cm e bolinhas de espuma',
    '4: plasticina macia e 5 objetos grandes para esconder',
    '5: pompons grandes e um frasco de boca larga'
  ],
  preparar: [
    'Monte as 5 estações em 5 lugares da mesa, cada uma num tabuleiro.',
    'Corte a fenda na bola de ténis antes da sessão (nunca à frente das pessoas).',
    'Conte os objetos pequenos de cada estação, no início e no fim.',
    'Aqueça as mãos antes: abrir e fechar, rodar os pulsos.'
  ],
  passos: [
    { faz: 'Mostre as estações e o cartão "As 5 estações".', diz: 'Hoje as mãos vão trabalhar em cinco sítios diferentes!' },
    { faz: 'Demonstre a estação e deixe a pessoa experimentar devagar.', diz: 'Veja como eu faço… agora é a sua vez.' },
    { faz: 'Ao fim de 4 a 5 minutos, troque de estação (ou de mão).', diz: 'Muito bem! Vamos passar para a próxima.' },
    { faz: 'No fim, contem juntos os objetos e relaxem as mãos.', diz: 'Quantos conseguiu? Agora sacudimos as mãos.' }
  ],
  niveis: {
    n1: 'Uma só estação por sessão (a 2 ou a 4). Objetos grandes: rolhas, bolas de espuma. A pessoa pode usar a mão toda. O animador segura o tabuleiro.',
    n2: 'Três estações, 4 minutos cada. Pompons grandes. Pinça larga. Contar em voz alta quantos objetos passou.',
    n3: 'As cinco estações em circuito, 3 a 5 minutos cada. Objetos mais pequenos, plasticina mais dura. Fazer com a mão menos hábil. Desafios: só pompons de uma cor, ou pôr os pinos a formar uma letra.'
  },
  atencao: 'Objetos pequenos podem ser engolidos: com pessoas com demência use só objetos maiores que uma rolha, conte-os e nunca deixe a pessoa sozinha. A fenda da bola de ténis corta-a um adulto, antes da sessão. Pare se houver dor nas articulações dos dedos (artrose): use a mão toda e objetos maiores.',
  seCorrerMal: 'Se a pinça for difícil, troque por uma pinça de açúcar maior ou deixe usar os dedos. Se a bola de ténis for dura demais, alargue a fenda. Se a pessoa se cansar, pare e faça só a plasticina — é a mais relaxante.',
  variantes: [
    'Cores: separar pompons ou pinos por cor (passa a combinada).',
    'Padrões: copiar no tabuleiro de pinos um desenho mostrado num cartão.',
    'Contra o relógio: quantos pompons consegue passar em 1 minuto? (repetir semanalmente e comparar)',
    'Em pares: um esconde os tesouros na plasticina, o outro procura.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'AS 5 ESTAÇÕES', sub: '4 a 5 minutos em cada · trocar de mão a meio',
    itens: [
      { svg: PINOS, nome: '1 · Pinos com a pinça', desc: 'Com a pinça de cozinha, pôr rolhas ou pinos nos furos', tempo: '4 a 5 min' },
      { svg: REDE, nome: '2 · Pompons na grelha', desc: 'Tirar os pompons dos buracos só com o polegar e o indicador', tempo: '4 a 5 min' },
      { svg: COMECOME, nome: '3 · O come-come', desc: 'Apertar a bola de ténis para abrir a "boca" e apanhar bolinhas', tempo: '4 a 5 min' },
      { svg: MASSA, nome: '4 · Tesouros escondidos', desc: 'Encontrar os objetos escondidos na plasticina', tempo: '4 a 5 min' },
      { svg: ADUCAO, nome: '5 · Entre os dedos', desc: 'Segurar um pompon entre dois dedos e levá-lo ao frasco', tempo: '4 a 5 min' }
    ],
    lembrar: ['Contar os objetos', 'Objetos grandes na demência', 'Parar se doer']
  }
};
