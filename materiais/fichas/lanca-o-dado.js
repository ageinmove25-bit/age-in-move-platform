// Ficha de atividade "Lança o Dado" — jogo de grupo com exercícios sentados.
// Para animadores e auxiliares. Inclui tabuleiros para imprimir (A4 ou A3).

module.exports = {
  slug: 'lanca-o-dado',
  titulo: 'Lança o Dado',
  subtitulo: 'Um jogo de grupo para mexer o corpo e a cabeça',
  cor: '#1D4ED8', corClara: '#DBEAFE', corEscura: '#1E3A8A',
  paraQue: 'O dado decide o exercício, e isso transforma a ginástica num jogo. Ninguém sabe o que vem a seguir, todos ficam atentos e o grupo ri-se junto. Treina a força das pernas e dos braços, o equilíbrio sentado, a atenção e — com o segundo dado — a memória e a linguagem.',
  duracao: '20 a 30 min', grupo: '4 a 12 pessoas', custo: '5 a 15 € (dado de espuma + elásticos opcionais)',
  materiais: [
    '1 dado grande de espuma (15 a 20 cm) — ou uma caixa de cartão forrada com pintas desenhadas',
    'Cadeiras firmes, sem rodas, de preferência com braços',
    'O tabuleiro "Dado dos Exercícios" impresso (A3 se possível) ou mostrado no ecrã',
    'Opcional: bandas elásticas leves (uma por pessoa)',
    'Opcional: segundo dado de outra cor, para o "Dado das Palavras"'
  ],
  preparar: [
    'Cadeiras em roda ou meia-lua, com espaço para lançar o dado no meio.',
    'Afixe o tabuleiro onde todos o vejam (ou segure-o na mão e mostre-o após cada lançamento).',
    'Confirme se alguém tem indicação para não fazer algum exercício (ombro, anca, joelho operado).',
    'Experimente cada exercício antes da sessão, para o saber demonstrar bem.'
  ],
  passos: [
    { faz: 'Mostre o dado e o tabuleiro.', diz: 'Hoje é o dado que manda! Cada número é um exercício.' },
    { faz: 'Lance o dado você primeiro e leia o número em voz alta.', diz: 'Saiu o 3! O 3 é… marchar.' },
    { faz: 'Demonstre o exercício e façam juntos, contando em voz alta.', diz: 'Vamos todos: um, dois, três…' },
    { faz: 'Passe o dado à pessoa seguinte.', diz: 'Agora é a sua vez de lançar, Dona Maria.' },
    { faz: 'Repita até todos terem lançado pelo menos uma vez.', diz: 'Muito bem! Quem quer lançar a seguir?' },
    { faz: 'Termine com respiração lenta e uma salva de palmas.', diz: 'Fizemos muito exercício hoje. Obrigada a todos!' }
  ],
  exercicios: [
    { n: 1, cor: '#BE123C', nome: 'Boxe', como: 'Socos para a frente, alternando os braços', elastico: 'Sem elástico' },
    { n: 2, cor: '#EA580C', nome: 'Remar', como: 'Braços à frente e puxar para trás, juntando as costas', elastico: 'Elástico preso nos pés' },
    { n: 3, cor: '#D97706', nome: 'Marchar', como: 'Levantar os joelhos, um de cada vez, a balançar os braços', elastico: 'Sem elástico' },
    { n: 4, cor: '#16A34A', nome: 'Pontas dos pés', como: 'Levantar os calcanhares e voltar a pousar', elastico: 'Sem elástico' },
    { n: 5, cor: '#0D9488', nome: 'Esticar a perna', como: 'Esticar o joelho até a perna ficar direita, uma de cada vez', elastico: 'Sem elástico' },
    { n: 6, cor: '#2563EB', nome: 'Abrir os braços', como: 'Braços à frente e abrir para os lados, como num abraço', elastico: 'Elástico entre as mãos' }
  ],
  palavras: [
    { n: 1, cor: '#7C3AED', t: 'Uma flor' },
    { n: 2, cor: '#C026D3', t: 'Um nome de pessoa' },
    { n: 3, cor: '#DB2777', t: 'Uma terra de Portugal' },
    { n: 4, cor: '#E11D48', t: 'Um animal' },
    { n: 5, cor: '#0891B2', t: 'Uma profissão' },
    { n: 6, cor: '#4F46E5', t: 'Uma cor' }
  ],
  variantes: [
    'Sem dado: escreva os números de 1 a 6 em papelinhos e tire-os de um saco ou de um chapéu.',
    'No ecrã: mostre o tabuleiro na televisão ou no projetor, para todos o verem bem.',
    'Escolha o exercício: depois de algumas voltas, quem lançou escolhe o número que quer.',
    'Em pares: um lança e conta as repetições, o outro faz o exercício; depois trocam.',
    'Troque os exercícios do tabuleiro conforme o objetivo do grupo (mais pernas, mais braços, mais equilíbrio).'
  ],
  registo: true,
  niveis: {
    n1: 'É o animador que lança o dado. Mostre o tabuleiro e aponte para o desenho do número. Faça o exercício à frente da pessoa, 5 vezes, sem elástico. Se a pessoa não fizer o movimento todo, valorize o que fizer. Pode ajudar a lançar o dado (é bom para os braços).',
    n2: 'Cada pessoa lança o dado e diz o número em voz alta. 8 repetições, contadas em voz alta pelo grupo. Elástico leve nos exercícios 2 e 6, se a pessoa o conseguir segurar sem dor.',
    n3: 'Dois dados: o primeiro dá o exercício, o segundo dá o número de repetições (multiplicar por 2). Ou use o Dado das Palavras: a cada repetição, a pessoa diz uma palavra da categoria que saiu (ex.: marchar e dizer um animal a cada passo). Exercícios 3 e 4 podem ser feitos de pé, atrás da cadeira.'
  },
  atencao: 'Tudo sentado, com os pés bem assentes no chão e as costas apoiadas. Respirar normalmente, sem prender o ar. Pare se houver dor, tonturas ou falta de ar. Elásticos só para quem os segura bem — nunca enrolados nos dedos ou no pulso. Lance o dado para o chão, nunca para as pessoas.',
  seCorrerMal: 'Se o grupo se dispersar, volte a ser o animador a lançar o dado e reduza para 3 exercícios. Se alguém não quiser lançar, pode só escolher um número com o dedo. Se o mesmo número sair muitas vezes, deixe o grupo escolher o próximo exercício.'
};
