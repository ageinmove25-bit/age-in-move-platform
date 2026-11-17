// Ficha de atividade "Sem Esmagar a Bola" — força das pernas para levantar e sentar.
// Uma bola pequena e macia fica no assento da cadeira. A pessoa baixa-se até quase lhe tocar,
// sem se sentar, e mantém a posição (pairar), depois sobe e desce pouco (pulsar), e por fim
// faz o mesmo com um pé à frente e outro atrás.

const CADEIRA = '<g stroke="#9CA3AF" stroke-width="5" fill="none" stroke-linecap="round"><path d="M112,122 L168,122 M166,122 L166,52 M116,122 L116,186 M162,122 L162,186"/></g><line x1="10" y1="188" x2="190" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const BOLA = '<circle cx="132" cy="109" r="12" fill="currentColor" opacity=".35"/>';
const corpo = (pernas, extra = '') => `<svg viewBox="0 0 200 200" width="100%" height="100%">${CADEIRA}${BOLA}
<g stroke="#1F2937" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M128,94 L96,50"/>${pernas}<path d="M100,58 L58,72"/></g><circle cx="86" cy="36" r="13" fill="#1F2937"/>${extra}</svg>`;

const PAIRAR = corpo('<path d="M128,94 L70,104 L78,184"/><path d="M62,184 L80,184"/>');
const PULSAR = corpo('<path d="M128,94 L70,104 L78,184"/><path d="M62,184 L80,184"/>',
  '<g stroke="currentColor" stroke-width="7" stroke-linecap="round" fill="none"><path d="M30,60 L30,130"/><path d="M18,74 L30,58 L42,74"/><path d="M18,116 L30,132 L42,116"/></g>');
const PASSADA = corpo('<path d="M128,94 L66,104 L58,184"/><path d="M42,184 L60,184"/><path d="M128,94 L104,142 L126,184"/><path d="M118,184 L136,184"/>');

module.exports = {
  slug: 'sem-esmagar-a-bola',
  titulo: 'Sem Esmagar a Bola',
  subtitulo: 'Pernas fortes para levantar e sentar com segurança',
  kicker: 'Ficha de atividade · força das pernas · junto à cadeira',
  cor: '#0F766E', corClara: '#CCFBF1', corEscura: '#134E4A',
  paraQue: 'Uma bola pequena e macia fica no assento da cadeira. A pessoa baixa-se até quase lhe tocar — sem se sentar e sem a esmagar — e aguenta aí uns segundos. Fortalece as pernas e as ancas, que são os músculos que usamos para levantar e sentar, subir escadas e evitar quedas. A bola dá uma referência fácil de sentir e torna o exercício num pequeno desafio.',
  duracao: '10 a 15 min, com pausas', grupo: 'Individual ou até 8 pessoas', custo: '0 a 10 € (bola pequena macia ou almofada)',
  paraGrupos: {
    fisico: 'Grupo 1 (os 3 passos). Grupo 2: só o nível 1, sentado, ou "Levantar e Sentar com Apoio". Grupo 3: não indicado.',
    cognitivo: 'Só exercício: todos os grupos que o possam fazer. Com contagens: Grupo A (e Grupo B com contagens simples).',
    ebook: 'Física em "Corpo em Movimento" (Grupo 2, versão com apoio); combinada em "Corpo e Mente" (Grupo 1).'
  },
  materiais: [
    'Uma cadeira firme com braços, sem rodas, encostada à parede para não deslizar',
    'Uma bola pequena e macia (20 a 25 cm) — ou uma almofada pequena dobrada',
    'O cartão "Os 3 passos", impresso ou mostrado no ecrã',
    'Relógio ou telemóvel para contar os 30 segundos'
  ],
  preparar: [
    'Encoste as cadeiras à parede ou trave-as. Retire tapetes soltos.',
    'Ponha a bola no meio do assento, encostada às costas da cadeira.',
    'Confirme com a equipa quem tem próteses recentes da anca ou do joelho, tonturas ou tensão alta não controlada.',
    'Calçado fechado e confortável. Água por perto.'
  ],
  passos: [
    { faz: 'Peça à pessoa que se levante, de frente para si, com a cadeira atrás.', diz: 'Vamos pôr-nos de pé. A cadeira fica aqui atrás, a proteger-nos.' },
    { faz: 'Mostre a bola no assento e demonstre a descida.', diz: 'Vamos baixar devagar, como quem se vai sentar… mas sem esmagar a bola.' },
    { faz: 'Passo 1 — pairar: a pessoa fica quase sentada e aguenta. Conte em voz alta.', diz: 'Fique aí! Olhe em frente, peito alto. Conte comigo até 10.' },
    { faz: 'Passo 2 — pulsar: subir e descer um pouco, sem sentar.', diz: 'Agora sobe um bocadinho e desce outra vez. Sem tocar na bola!' },
    { faz: 'Passo 3 — um pé à frente e outro atrás, e pulsar. Depois trocar.', diz: 'Põe este pé à frente… e sobe e desce. Agora o outro pé.' },
    { faz: 'Sentar devagar e descansar. Pergunte como se sente.', diz: 'Pode sentar-se. As pernas trabalharam muito! Como estão?' }
  ],
  niveis: {
    n1: 'Fica sentado. A partir da cadeira, com as mãos nos braços dela, levanta o rabo só um bocadinho do assento (2 a 3 dedos) e volta a pousar devagar. 5 vezes. Sem bola. Sempre com o animador ao lado.',
    n2: 'Só os passos 1 e 2, com as mãos nas coxas ou num braço da cadeira. 10 a 15 segundos de cada vez em vez de 30. Descansar sentado entre passos. Juntar a contagem dos números ou dos dias da semana.',
    n3: 'Os 3 passos, 30 segundos cada, sem usar as mãos. Dupla tarefa: enquanto paira, contar de 30 para trás, dizer os meses ao contrário ou nomes de terras de Portugal. O animador pode lançar uma pergunta a cada pulsação.'
  },
  atencao: 'Só para quem se levanta da cadeira com segurança; os restantes fazem o nível 1, sentados. O animador fica ao lado das pessoas mais frágeis. Respirar sempre — nunca prender o ar. Joelhos afastados e apontados para os pés (não deixar fechar para dentro). Não descer mais do que é confortável. Parar se houver dor no joelho ou na anca, tonturas ou falta de ar.',
  seCorrerMal: 'Se a pessoa se sentar na bola, não faz mal: ria-se com ela e recomecem. Se as pernas tremerem muito, diminua o tempo para 10 segundos e deixe usar as mãos nas coxas. Se alguém ficar com medo, volte ao nível 1 sentado.',
  variantes: [
    'Sem bola: ponha uma folha de papel no assento — "não se pode amarrotar a folha".',
    'Com música: pairar enquanto a música toca; quando parar, sentar devagar.',
    'Em roda: cada pessoa diz uma palavra (cor, nome, terra) enquanto o grupo paira — quem disser a palavra senta-se e descansa.',
    'Progressão semanal: começar com 10 segundos e aumentar 5 segundos por semana até chegar aos 30.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 3 PASSOS', sub: 'Baixar devagar até quase tocar na bola — sem a esmagar',
    itens: [
      { svg: PAIRAR, nome: '1 · Pairar', desc: 'Ficar quase sentado, sem tocar na bola', tempo: '30 segundos' },
      { svg: PULSAR, nome: '2 · Subir e descer', desc: 'Pequenos movimentos, sempre sem sentar', tempo: '30 segundos' },
      { svg: PASSADA, nome: '3 · Um pé à frente', desc: 'Um pé à frente e outro atrás, subir e descer; depois trocar', tempo: '30 segundos cada perna' }
    ],
    lembrar: ['Olhar em frente', 'Peito alto', 'Joelhos afastados', 'Respirar sempre', 'Mãos nas coxas, se precisar']
  }
};
