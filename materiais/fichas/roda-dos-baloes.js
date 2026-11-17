// Ficha de atividade "A Roda dos Balões" — residentes e colaboradores em roda, ligados por balões
// seguros entre as mãos, a seguir instruções sem deixar cair nenhum balão. Combinada e social.

const K = '#1F2937';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${i}</svg>`;
const BAL = (x, y, c, r = 22) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.15}" fill="${c}" stroke="${K}" stroke-width="3"/><path d="M${x - 4},${y + r * 1.15} L${x},${y + r * 1.15 + 6} L${x + 4},${y + r * 1.15}" fill="${c}" stroke="${K}" stroke-width="2"/>`;
const T = (t, y = 182, sz = 22) => `<text x="100" y="${y}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="${sz}" fill="${K}">${t}</text>`;
const SET = '<defs><marker id="rb" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="6" stroke-linecap="round" marker-end="url(#rb)" ${both ? 'marker-start="url(#rb)"' : ''}/>`;
const C = ['#EF4444', '#22C55E', '#3B82F6', '#F59E0B', '#A855F7', '#EC4899'];

// Ícones das instruções
const MINDINHO = s(`${BAL(100, 80, C[0], 40)}<path d="M150,150 L150,104" stroke="${K}" stroke-width="12" stroke-linecap="round"/><rect x="126" y="140" width="48" height="40" rx="14" fill="#FBCFE8" stroke="${K}" stroke-width="3"/>`);
const CIMA = s(`${SET}${BAL(100, 96, C[1], 34)}${A('M40,150 L40,40')}${A('M160,150 L160,40')}`);
const BAIXO = s(`${SET}${BAL(100, 96, C[2], 34)}${A('M40,40 L40,150')}${A('M160,40 L160,150')}`);
const RODAR = s(`${SET}${[0, 1, 2, 3, 4, 5].map(i => { const a = i * Math.PI / 3; return BAL(100 + 60 * Math.cos(a), 100 + 60 * Math.sin(a), C[i], 14); }).join('')}${A('M150,30 C186,64 186,136 150,170')}`);
const SENTAR = s(`${SET}<g stroke="#9CA3AF" stroke-width="7" fill="none" stroke-linecap="round"><path d="M60,140 L140,140 M64,140 L64,186 M136,140 L136,186 M136,140 L136,70"/></g>${BAL(100, 70, C[3], 26)}${A('M30,40 L30,150')}`);
const TROCA = s(`${SET}${BAL(56, 96, C[4], 28)}${BAL(144, 96, C[5], 28)}${A('M70,46 C90,26 110,26 130,46', true)}${A('M70,150 C90,170 110,170 130,150', true)}`);

module.exports = {
  slug: 'roda-dos-baloes',
  titulo: 'A Roda dos Balões',
  subtitulo: 'Residentes e colaboradores, de mãos dadas por balões',
  kicker: 'Ficha de atividade · combinada · residentes + colaboradores',
  cor: '#E11D48', corClara: '#FFE4E6', corEscura: '#881337',
  paraQue: 'Residentes e colaboradores formam uma roda. Entre cada duas pessoas há um balão, seguro só com as mãos (palma com palma, ou dedo com dedo). O animador dá instruções — "mindinho para cima!", "balões ao alto!", "rodar para a direita!" — e o grupo tem de as cumprir sem deixar cair nenhum balão. Treina a atenção e a coordenação — e junta toda a casa a rir.',
  duracao: '15 a 20 min', grupo: '6 a 16 pessoas', custo: 'Menos de 3 € (balões)',
  paraGrupos: {
    fisico: 'Todos os grupos: de pé (Grupo 1), sentados em roda (Grupo 2) ou em cadeira de rodas, com um colaborador de cada lado (Grupo 3).',
    cognitivo: 'Grupo A e Grupo B (instruções simples, uma de cada vez). Grupo C: participa ao lado de um colaborador que ajuda a segurar o balão.',
    ebook: 'Combinada — "Corpo e Mente" e "Mexer e Pensar". Ideal para festas, dias abertos e atividades com famílias.'
  },
  materiais: [
    'Um balão por pessoa (sem látex, se houver alergias)',
    'Espaço para a roda, ou cadeiras em círculo',
    'Os cartões de instruções desta ficha (opcional)'
  ],
  preparar: [
    'Alterne residente e colaborador; colaboradores ao lado de quem precisa de ajuda.',
    'Confirme alergias ao látex e quem se assusta com balões a rebentar.'
  ],
  passos: [
    { faz: 'Forme a roda e ponha um balão entre cada duas pessoas, seguro com as palmas.', diz: 'Cada balão fica entre duas mãos. Não o podemos deixar cair!' },
    { faz: 'Comece com instruções fáceis e lentas.', diz: 'Balões para cima… e para baixo. Muito bem!' },
    { faz: 'Vá juntando instruções e mudando o ritmo.', diz: 'Rodar para a direita… parar! Sentar… levantar!' },
    { faz: 'Se cair um balão, ninguém sai: quem o deixou cair escolhe a próxima instrução.', diz: 'Caiu! A Dona Ana escolhe o que fazemos a seguir.' },
    { faz: 'Termine com todos os balões ao alto e uma salva de palmas.', diz: 'Balões ao alto… e palmas para esta equipa!' }
  ],
  niveis: {
    n1: 'Sentados, com um colaborador de cada lado. Balões grandes, seguros com as palmas. Só "para cima" e "para baixo", devagar.',
    n2: 'Sentados ou de pé. Instruções "cima", "baixo", "mindinho para cima", "trocar de mão". Mostrar sempre o cartão.',
    n3: 'De pé. Todas as instruções, mais depressa e misturadas. Instruções "armadilha": só cumprir se o animador disser "O mestre manda…".'
  },
  atencao: 'Na versão original quem falha "sai do jogo" — aqui ninguém é eliminado, para não envergonhar nem excluir. De pé, só quem tem bom equilíbrio; a roda não se desloca depressa. Cuidado com alergia ao látex e com o susto de um balão a rebentar (balões não demasiado cheios). Não puxar os braços de quem tem dor nos ombros.',
  seCorrerMal: 'Se os balões caírem muitas vezes, use balões maiores ou passe a segurar com as palmas em vez dos dedos. Se alguém se cansar dos braços, faça uma pausa com os balões no colo. Se a roda for grande demais, divida em duas.',
  variantes: [
    'Cores: quando o animador diz uma cor, só os balões dessa cor sobem.',
    'Música: mexer os balões ao ritmo; quando a música para, todos ficam "estátua".',
    'Passar a palavra: cada pessoa diz o nome de quem está ao lado antes de cumprir a instrução.',
    'Dia de famílias: fazer com netos e familiares em visita.'
  ],
  registo: true,
  cartoes: [
    { titulo: 'INSTRUÇÕES', sub: 'Mostre o cartão enquanto diz a instrução',
      itens: [{ nome: 'Mindinho para cima!', svg: MINDINHO }, { nome: 'Balões ao alto!', svg: CIMA }, { nome: 'Balões em baixo!', svg: BAIXO }, { nome: 'Rodar!', svg: RODAR }, { nome: 'Sentar / levantar!', svg: SENTAR }, { nome: 'Trocar de mão!', svg: TROCA }] }
  ]
};
