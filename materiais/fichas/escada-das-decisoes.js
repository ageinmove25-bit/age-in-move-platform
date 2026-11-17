// Ficha de atividade "A Escada das Decisões" — andar numa escada no chão e seguir setas.
// Combinada: marcha e equilíbrio + atenção, decisão e controlo inibitório.

const SET = '<defs><marker id="ed" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>';
const seta = (x1, y1, x2, y2) => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="22" stroke-linecap="round" marker-end="url(#ed)"/></svg>`;
const icon = inner => `<svg viewBox="0 0 200 200" width="100%" height="100%">${inner}</svg>`;

// Escada vista de cima
const degraus = (x, y, n, w = 50, h = 34) => `<g stroke="#1F2937" stroke-width="5" fill="none"><rect x="${x}" y="${y}" width="${w}" height="${n * h}" rx="3"/>${[...Array(n - 1)].map((_, i) => `<line x1="${x}" y1="${y + (i + 1) * h}" x2="${x + w}" y2="${y + (i + 1) * h}" stroke="#EAB308" stroke-width="6"/>`).join('')}</g>`;
const mini = (x, y, rot) => `<g transform="translate(${x},${y}) rotate(${rot})" color="currentColor"><path d="M-14,0 L8,0" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M4,-9 L16,0 L4,9 z" fill="currentColor"/></g>`;
const PERCURSO = icon(`${degraus(76, 10, 5)}${mini(150, 27, 0)}${mini(45, 61, 180)}${mini(150, 95, -90)}${mini(45, 129, 0)}${mini(150, 163, 90)}`);
const SENTADO = icon(`<g stroke="#9CA3AF" stroke-width="5" fill="none"><rect x="70" y="10" width="60" height="42" rx="6"/><path d="M70,52 L70,66 M130,52 L130,66"/></g>
  <g stroke="#1F2937" stroke-width="4" fill="none"><rect x="40" y="86" width="120" height="100" rx="3"/><line x1="100" y1="86" x2="100" y2="186" stroke="#EAB308" stroke-width="5"/><line x1="40" y1="136" x2="160" y2="136" stroke="#EAB308" stroke-width="5"/></g>
  <ellipse cx="88" cy="70" rx="9" ry="13" fill="#1F2937"/><ellipse cx="112" cy="70" rx="9" ry="13" fill="#1F2937"/>${mini(72, 112, -90)}${mini(130, 160, 90)}`);
const FITA = icon(`${degraus(70, 22, 4, 60, 36)}<rect x="138" y="20" width="44" height="26" rx="5" fill="#EAB308"/><circle cx="160" cy="33" r="7" fill="#fff"/><text x="100" y="196" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="20" fill="#1F2937">40 × 40 cm</text>`);

module.exports = {
  slug: 'escada-das-decisoes',
  titulo: 'A Escada das Decisões',
  subtitulo: 'Não é só caminhar: é pensar, decidir e mexer',
  kicker: 'Ficha de atividade · combinada · marcha e decisão',
  cor: '#A16207', corClara: '#FEF9C3', corEscura: '#713F12',
  paraQue: 'Uma escada desenhada no chão com fita-cola e setas ao lado de cada casa. A pessoa avança casa a casa e, em cada uma, olha para a seta e decide para onde dar o passo: em frente, para o lado ou para trás. Treina a marcha, o equilíbrio e a mudança de direção, e ao mesmo tempo a atenção e a decisão rápida — exatamente o que precisamos para andar na rua com segurança.',
  duracao: '15 a 20 min', grupo: '1 pessoa de cada vez (até 6 à espera, sentadas)', custo: '0 a 5 €',
  paraGrupos: {
    fisico: 'Grupo 1, de pé, com o animador ao lado. Grupo 2: versão sentada (escada pequena à frente da cadeira). Grupo 3: não indicado de pé; sentado, só com o pé que a pessoa conseguir.',
    cognitivo: 'Grupo A (setas, cores e regras trocadas). Grupo B: uma seta de cada vez, mostrada pelo animador. Grupo C: não indicado.',
    ebook: 'Combinada — "Corpo e Mente" (Grupo 1, de pé) e "Mexer e Pensar" (Grupo 2, sentado).'
  },
  materiais: [
    'Fita-cola larga de cor viva (de pintor ou de marcação), para desenhar a escada no chão',
    'Os cartões de setas desta ficha, impressos (de preferência plastificados) — ou cones deitados a apontar',
    'Uma cadeira com braços no início e outra no fim da escada, para descansar',
    'Calçado fechado e antiderrapante (nada de chinelos nem meias sem sola)'
  ],
  preparar: [
    'Desenhe com fita-cola uma escada de 5 a 6 casas de 40 × 40 cm, longe de mesas e de zonas de passagem.',
    'Coloque um cartão de seta ao lado de cada casa (ou cole-o no chão com fita).',
    'Junto a uma parede ou corrimão é melhor: dá apoio, se for preciso.',
    'Para a versão sentada: uma escada pequena de 4 casas (2 × 2) à frente da cadeira.'
  ],
  passos: [
    { faz: 'Mostre a escada e as setas.', diz: 'Vamos andar casa a casa. Em cada casa, a seta diz para onde vai o pé.' },
    { faz: 'Faça o percurso devagar à frente da pessoa.', diz: 'Esta seta é para a direita: passo para o lado. Esta é em frente.' },
    { faz: 'A pessoa faz o percurso, com o animador ao lado (do lado mais fraco).', diz: 'Olhe para a seta… decida… e passo!' },
    { faz: 'No fim, volta a sentar-se e o animador muda as setas de lugar.', diz: 'Muito bem! Agora mudei as setas — vai ser diferente.' },
    { faz: 'Repetir 2 a 3 vezes, com descanso entre percursos.', diz: 'Descanse um bocadinho. Quem é o próximo?' }
  ],
  niveis: {
    n1: 'Sentado: escada pequena (4 casas) à frente da cadeira. O animador mostra um cartão de seta e a pessoa toca com o pé na casa certa e volta ao centro. 5 a 8 vezes.',
    n2: 'De pé, com apoio (corrimão, parede ou mão do animador). Só setas "em frente" e "para o lado". Andar devagar, um pé de cada vez em cada casa. Ou: sentado, com todas as setas.',
    n3: 'De pé, sem apoio. Setas para os 4 lados. Regra trocada: "faça o contrário da seta". Setas com cor: seta vermelha = parar 3 segundos. O animador diz uma palavra a cada casa e a pessoa responde com outra da mesma categoria.'
  },
  atencao: 'De pé só para quem anda sem ajuda ou com bengala e tem bom equilíbrio. O animador fica sempre ao lado, a um braço de distância. Passo para trás é o mais difícil: só no nível 3 e devagar. Fita bem colada (sem pontas levantadas) e chão seco.',
  seCorrerMal: 'Se a pessoa hesitar muito ou se desequilibrar, passe para a versão sentada ou tire as setas para trás. Se a confusão for grande, diga a direção em voz alta ao mesmo tempo que aponta.',
  variantes: [
    'Cones: em vez de cartões, use cones deitados a apontar para a direção do passo (como no vídeo).',
    'Cores: cada casa tem uma cor e o animador diz a cor onde a pessoa tem de pôr o pé.',
    'Números: as casas têm números e a pessoa segue uma sequência ditada ("1, 3, 2, 4").',
    'Memória: mostrar a sequência de setas, esconder, e a pessoa faz o percurso de memória (Grupo A).'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'MONTAR A ESCADA', sub: 'Fita-cola no chão e uma seta ao lado de cada casa',
    itens: [
      { svg: FITA, nome: '1 · Desenhar a escada', desc: '5 a 6 casas de 40 × 40 cm, com fita-cola de cor viva', tempo: '10 min a montar' },
      { svg: PERCURSO, nome: '2 · De pé: seguir as setas', desc: 'Em cada casa, um passo para onde a seta aponta', tempo: '2 a 3 percursos' },
      { svg: SENTADO, nome: '3 · Sentado: tocar com o pé', desc: 'Escada pequena à frente da cadeira; tocar na casa que a seta indica', tempo: '5 a 8 toques' }
    ],
    lembrar: ['Animador ao lado', 'Calçado fechado', 'Olhar, decidir, passo', 'Descansar entre percursos']
  },
  cartoes: [
    {
      titulo: 'SETAS', sub: 'Imprima 2 vezes, recorte e ponha uma ao lado de cada casa',
      itens: [
        { nome: 'Em frente', svg: seta(100, 175, 100, 45) },
        { nome: 'Para a direita', svg: seta(25, 100, 155, 100) },
        { nome: 'Para a esquerda', svg: seta(175, 100, 45, 100) },
        { nome: 'Para trás (nível 3)', svg: seta(100, 25, 100, 155) },
        { nome: 'Parar 3 segundos', svg: icon('<polygon points="70,20 130,20 175,65 175,135 130,180 70,180 25,135 25,65" fill="#DC2626"/><text x="100" y="118" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="46" fill="#fff">PARA</text>') },
        { nome: 'Joelho ao alto', svg: icon('<path d="M110,30 L66,84 L84,160 M68,160 L92,160" fill="none" stroke="#1F2937" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M110,30 L118,172" stroke="#9CA3AF" stroke-width="16" stroke-linecap="round"/><path d="M150,150 L150,60" stroke="currentColor" stroke-width="14" stroke-linecap="round"/><path d="M128,78 L150,50 L172,78 z" fill="currentColor"/>') }
      ]
    }
  ]
};
