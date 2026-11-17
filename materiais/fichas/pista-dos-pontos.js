// Ficha de atividade "A Pista dos Pontos" — rolar uma bola por uma pista com pratos numerados.
// Atividade COMBINADA: controlo da força (empurrar com o pé ou com a mão) + cálculo (somar pontos).

const COR = ['#DC2626', '#DC2626', '#DC2626', '#EAB308', '#EAB308', '#EAB308', '#16A34A', '#16A34A', '#16A34A', '#CA8A04'];

module.exports = {
  slug: 'pista-dos-pontos',
  titulo: 'A Pista dos Pontos',
  subtitulo: 'Rolar a bola, parar no prato certo e somar os pontos',
  kicker: 'Ficha de atividade · combinada · jogo de grupo',
  cor: '#BE185D', corClara: '#FCE7F3', corEscura: '#831843',
  paraQue: 'Uma pista feita com dois esparguetes de piscina, com pratos de papel numerados no meio. A pessoa empurra a bola — com o pé, sentada, ou com a mão — e ganha os pontos do prato onde a bola parar. Não é preciso força: é preciso controlar a força. Treina as pernas ou os braços e a pontaria — e depois a cabeça: somar os pontos.',
  duracao: '20 a 30 min', grupo: '3 a 10 pessoas, à vez', custo: '5 a 10 €',
  paraGrupos: {
    fisico: 'Grupo 1 (de pé, com apoio) e Grupo 2 (sentado ou em cadeira de rodas, com o pé). Grupo 3: com a mão, a partir de uma calha (ver variantes).',
    cognitivo: 'Grupo A (somar de cabeça) e Grupo B (contar com ajuda do placar). Grupo C: só o jogo, sem pontos.',
    ebook: 'Atividade combinada — encaixa nos ebooks "Corpo e Mente" (Grupo 1) e "Mexer e Pensar" (Grupo 2).'
  },
  materiais: [
    '2 esparguetes de piscina (ou 2 tubos de cartão, ou 2 réguas de madeira) para fazer as paredes da pista',
    '10 pratos de papel ou de plástico (cores diferentes, se possível)',
    'Os números "10 a 100" desta ficha, impressos, recortados e colados nos pratos',
    'Uma bola leve que role bem (de basquete pequena, de borracha ou de espuma)',
    'Fita adesiva para fixar a pista ao chão; a folha do placar e um marcador'
  ],
  preparar: [
    'Monte a pista no chão (3 a 4 m), com os pratos em fila entre os esparguetes: os números baixos perto, os altos longe.',
    'Fixe os esparguetes e os pratos com fita adesiva, para não escorregarem nem fazerem tropeçar.',
    'Ponha uma cadeira com braços (ou a cadeira de rodas, travada) no início da pista.',
    'Afixe o placar à vista de todos.'
  ],
  passos: [
    { faz: 'Mostre a pista e explique o jogo.', diz: 'Vamos rolar a bola. Onde ela parar, são os seus pontos!' },
    { faz: 'Demonstre: empurrar a bola com o pé (sentado) ou com a mão.', diz: 'Nem muito forte, nem muito fraco… assim.' },
    { faz: 'Cada pessoa joga 3 vezes, à vez.', diz: 'Agora é a sua vez, Dona Fernanda.' },
    { faz: 'Leia o número do prato em voz alta e escreva no placar.', diz: 'Parou no 60! São 60 pontos.' },
    { faz: 'No fim de cada ronda, somem os pontos juntos.', diz: '60 mais 30… quanto dá?' },
    { faz: 'No fim, aplaudam todos e vejam o placar.', diz: 'Parabéns a todos! Quem fez o lançamento mais bonito?' }
  ],
  niveis: {
    n1: 'Sentado ou em cadeira de rodas travada, com a mão: a bola está numa mesa ou numa calha inclinada e a pessoa só a empurra. Pista curta (1,5 m). Sem pontos: só ver a bola rolar e dizer a cor do prato.',
    n2: 'Sentado, a empurrar com o pé (alternar o pé direito e o esquerdo). Pista de 3 m. O animador lê o número e escreve no placar; somam juntos com a ajuda do placar.',
    n3: 'De pé, com apoio (bengala ou cadeira ao lado), a empurrar com o pé ou a lançar com a mão. Pista de 4 m. A pessoa soma de cabeça os seus pontos. Desafio: "Quero fazer 150 em 3 lançamentos — onde tenho de parar?"'
  },
  atencao: 'Quem joga de pé tem sempre um apoio ao lado e o animador por perto: o pontapé desequilibra. Cadeiras de rodas travadas. Pista bem fixa ao chão e fora da zona de passagem. Ninguém se baixa para apanhar a bola: o animador recolhe.',
  seCorrerMal: 'Se a bola sair da pista muitas vezes, aproxime os esparguetes ou use uma bola maior. Se a soma causar ansiedade, deixe o placar fazer a conta e foque no jogo. Se a pessoa não tiver força para chegar aos pratos, encurte a pista.',
  variantes: [
    'Calha: para o Grupo 3, faça uma rampa com um tabuleiro ou uma placa de cartão inclinada — a pessoa só larga a bola.',
    'Por equipas: duas equipas, somam os pontos de todos os jogadores.',
    'Números ao contrário: subtrair em vez de somar (começar com 300 pontos e chegar a zero).',
    'Cores em vez de números: cada cor vale uma tarefa (vermelho = dizer um nome, amarelo = uma terra, verde = cantar uma linha de canção).'
  ],
  registo: false,
  etiquetas: { titulo: 'NÚMEROS', sub: 'Imprima, recorte pelo tracejado e cole um número em cada prato', valores: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((v, i) => ({ v, cor: COR[i] })) },
  placar: { titulo: 'PLACAR', jogadores: 8, rondas: 3 }
};
