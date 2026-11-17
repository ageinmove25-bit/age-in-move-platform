// Ebook — FÍSICAS · Grupo 2 (dependência moderada, Barthel 61–90) — "Corpo em Movimento"
module.exports = {
  slug: 'fisicas-2-corpo-em-movimento', tipo: 'fisicas', grupo: 2,
  titulo: 'Corpo em Movimento',
  subtitulo: 'Exercícios sentados para manter a força, o equilíbrio e a autonomia',
  capa: 'marcha',
  introducao: 'Estas pessoas já precisam de ajuda nalgumas tarefas, mas ainda fazem muito sozinhas. O objetivo é manter o que conseguem: levantar-se da cadeira, chegar a uma prateleira, segurar um copo, andar até à casa de banho. Todas as atividades começam sentadas e usam materiais simples. São só exercícios físicos — sem tarefas de memória — para que toda a atenção esteja no corpo e na segurança.',
  objetivos: ['Manter a força das pernas para levantar e sentar', 'Manter a amplitude dos braços e dos ombros', 'Melhorar o equilíbrio sentado e a coordenação', 'Aumentar a resistência ao esforço, sem cansar demais'],
  atividades: [
    {
      nome: 'Lança o Dado', ilu: 'dados',
      paraQue: 'Um dado grande decide o exercício. Torna a ginástica num jogo, em que todos querem lançar e ninguém sabe o que vem a seguir. Trabalha braços e pernas de forma variada.',
      duracao: '20 min', grupo: '4 a 10 pessoas', custo: '5 a 15 €',
      materiais: ['1 dado grande de espuma (ou caixa de cartão com pintas desenhadas)', 'Cadeiras com braços, em roda', 'Tabuleiro "Lança o Dado" impresso em A3 (ficha à parte)'],
      preparar: ['Cadeiras em roda, travadas ou encostadas.', 'Tabuleiro afixado à vista de todos.', 'Confirmar quem tem limitação de ombro, anca ou joelho.'],
      passos: [
        { faz: 'Mostre o dado e o tabuleiro.', diz: 'Hoje é o dado que escolhe o exercício!' },
        { faz: 'Lance você primeiro e diga o número.', diz: 'Saiu o 4: pontas dos pés!' },
        { faz: 'Demonstre e façam juntos, 8 vezes, a contar.', diz: 'Vamos todos: um, dois, três…' },
        { faz: 'Passe o dado a quem está ao lado.', diz: 'Agora lança o senhor José.' },
        { faz: 'Continue até todos terem lançado.', diz: 'Mais uma volta? Quem lança?' }
      ],
      adaptar: { facil: 'O animador lança e mostra o desenho. 5 repetições. Sem elástico.', dificil: '10 a 12 repetições. Elástico leve nos exercícios de braços. Lançar o dado para o colega do outro lado da roda.' },
      atencao: 'Tudo sentado, com os pés no chão e as costas apoiadas. Respirar sempre. Lançar o dado para o chão, nunca para as pessoas.',
      seCorrerMal: 'Se o grupo se dispersar, reduza para 3 exercícios e seja sempre o animador a lançar.'
    },
    {
      nome: 'Balão no Ar', ilu: 'balao',
      paraQue: 'O grupo, sentado em roda, mantém um balão no ar sem o deixar cair. Obriga a esticar os braços em todas as direções, a reagir depressa e a equilibrar o tronco. É uma das atividades preferidas: dá muitas gargalhadas.',
      duracao: '10 a 15 min', grupo: '4 a 10 pessoas', custo: 'Menos de 2 €',
      materiais: ['2 ou 3 balões grandes, bem cheios', 'Cadeiras com braços, em roda, a um braço de distância umas das outras', 'Opcional: raquetes de papel (prato de papel colado a uma colher de pau)'],
      preparar: ['Retire mesas e objetos do meio da roda.', 'Encha os balões antes da sessão (e tenha um de reserva).', 'Avise que é para bater com a mão aberta, sem se levantar.'],
      passos: [
        { faz: 'Mostre o balão e atire-o devagar para o ar.', diz: 'Não podemos deixar o balão tocar no chão!' },
        { faz: 'Bata o balão para alguém da roda, dizendo o nome.', diz: 'Para a Dona Rosa!' },
        { faz: 'Incentive a esticar o braço e a rodar o tronco.', diz: 'Estique bem esse braço. Muito bem!' },
        { faz: 'Contem em voz alta quantos toques fazem.', diz: 'Já vamos em 12 toques! Vamos chegar aos 20?' },
        { faz: 'No fim, segurar o balão com as duas mãos e respirar.', diz: 'Que equipa! Agora descansamos.' }
      ],
      adaptar: { facil: 'O animador fica no meio da roda e atira o balão a cada pessoa, devagar. Basta tocar no balão.', dificil: 'Só a mão esquerda (ou só a direita). Dois balões ao mesmo tempo. Usar a raquete de papel.' },
      atencao: 'Ninguém se levanta da cadeira para apanhar o balão — o animador vai buscá-lo. Cuidado com quem se inclina muito para o lado. Balões de látex: confirme se ninguém tem alergia.',
      seCorrerMal: 'Se alguém se assustar com o balão, use uma bola de espuma leve e atire-a mais devagar.'
    },
    {
      nome: 'Bola a Dois', ilu: 'bolaDois',
      paraQue: 'Duas pessoas, sentadas frente a frente, seguram uma bola leve entre as palmas e movem-na juntas sem a deixar cair. Trabalha os ombros, os braços e o equilíbrio do tronco, e obriga a combinar a força com o parceiro.',
      duracao: '10 a 15 min', grupo: 'Pares (ou pessoa + animador)', custo: '3 a 15 €',
      materiais: ['Uma bola leve e grande (de praia ou de espuma) ou um balão', '2 cadeiras frente a frente, joelhos a um palmo', 'Cartão "Movimentos" (ficha "Bola a Dois")'],
      preparar: ['Junte pares com força parecida, ou faça par com a pessoa.', 'Teste a bola: tem de se segurar bem com as palmas abertas.'],
      passos: [
        { faz: 'Sente-se em frente à pessoa e mostre a bola.', diz: 'Vamos segurar a bola os dois, só com as palmas.' },
        { faz: 'Mãos na bola, à altura do peito.', diz: 'Aperte devagarinho. Não a deixamos cair!' },
        { faz: 'Subam e desçam a bola juntos, devagar, 5 vezes.', diz: 'Para cima… e para baixo. Olhe para mim.' },
        { faz: 'Façam o "lado para lado" e a "roda grande".', diz: 'Agora para este lado… e para o outro.' },
        { faz: 'Pousem a bola no colo e respirem.', diz: 'Somos uma boa equipa!' }
      ],
      adaptar: { facil: 'Só "subir e descer" e "lado para lado", 5 vezes, com o animador como par.', dificil: 'Os 6 movimentos do cartão, 8 vezes cada. Fazer o "oito deitado" com os braços bem esticados.' },
      atencao: 'Não levar a bola acima da cabeça com quem tem dor no ombro. Usar só bolas leves.',
      seCorrerMal: 'Se a bola cair muitas vezes, use um balão e reduza a um movimento.'
    },
    {
      nome: 'Levantar e Sentar com Apoio', ilu: 'levantar',
      paraQue: 'Levantar-se da cadeira é o movimento mais importante para a autonomia: ir à casa de banho, ir para a mesa, sair da cama. Treinar este gesto devagar, com apoio, mantém as pernas fortes e dá confiança.',
      duracao: '10 min', grupo: 'Individual ou até 6 pessoas (1 animador para 3)', custo: '0 €',
      materiais: ['Cadeira firme com braços, encostada à parede', 'Opcional: almofada no assento (torna mais fácil)', 'Relógio para contar 30 segundos'],
      preparar: ['Encoste ou trave as cadeiras. Retire tapetes.', 'Calçado fechado. Andarilho ao alcance de quem o usa.', 'Fique ao lado da pessoa, nunca à frente.'],
      passos: [
        { faz: 'Peça para chegar à ponta da cadeira e recuar os pés.', diz: 'Chegue-se à frente e ponha os pés para trás.' },
        { faz: 'Mãos nos braços da cadeira, tronco inclinado para a frente.', diz: 'Nariz à frente dos joelhos…' },
        { faz: 'Levantar empurrando com as mãos e as pernas.', diz: '…e para cima! Muito bem.' },
        { faz: 'Ficar de pé 3 segundos e sentar devagar.', diz: 'Agora sente-se devagarinho, sem cair na cadeira.' },
        { faz: 'Repetir 3 a 5 vezes, com descanso.', diz: 'Mais uma. Está cada vez mais fácil!' }
      ],
      adaptar: { facil: 'Só levantar o rabo do assento 2 a 3 dedos e voltar a pousar. Almofada no assento.', dificil: '5 a 8 levantamentos sem pausa. Ao descer, parar a meio ("sem esmagar a bola") 3 segundos.' },
      atencao: 'Só com supervisão próxima. Parar se houver tonturas ao levantar (tensão baixa), dor ou falta de ar. Confirmar com a equipa quem tem próteses recentes.',
      seCorrerMal: 'Se a pessoa não conseguir levantar, fique no nível mais fácil e registe — é uma informação importante para o fisioterapeuta.'
    },
    {
      nome: 'Marcha Sentada com Música', ilu: 'marcha',
      paraQue: 'Marchar sentado, ao ritmo de uma música conhecida, aquece o corpo, trabalha as pernas e o coração e prepara para andar. A música ajuda a manter o ritmo e o ânimo.',
      duracao: '5 a 10 min', grupo: 'Até 12 pessoas', custo: '0 €',
      materiais: ['Cadeiras sem braços ou com braços largos', 'Música de marcha ou rancho, com ritmo moderado (2 a 3 músicas)'],
      preparar: ['Escolha músicas que o grupo conhece.', 'Experimente o volume: alto o suficiente, sem incomodar.'],
      passos: [
        { faz: 'Ponha a música e comece a bater os pés no chão.', diz: 'Vamos marchar sem sair do lugar!' },
        { faz: 'Levante os joelhos, um de cada vez, ao ritmo.', diz: 'Joelho para cima… e outro… como na tropa!' },
        { faz: 'Junte os braços a balançar.', diz: 'Agora os braços também.' },
        { faz: 'Mude: marchar devagar, depois mais depressa, depois devagar.', diz: 'Mais depressa! … E agora devagarinho.' },
        { faz: 'Termine a bater os pés cada vez mais suave.', diz: 'Chegámos! Respiramos fundo.' }
      ],
      adaptar: { facil: 'Só bater os calcanhares no chão, sem levantar os joelhos. 1 música.', dificil: 'Marchar 3 músicas seguidas. Joelhos bem altos. Tocar com a mão no joelho contrário.' },
      atencao: 'Observe a respiração: deve conseguir falar enquanto marcha. Pare quem ficar muito cansado ou com falta de ar.',
      seCorrerMal: 'Se a pessoa perder o ritmo, deixe-a marchar ao seu ritmo — o importante é mexer.'
    },
    {
      nome: 'Estender a Roupa no Alto', foto: 'molas',
      paraQue: 'Estender roupa num cordel um pouco acima da cabeça obriga a esticar os braços e os ombros, a usar a força dos dedos e a equilibrar o tronco. É um gesto conhecido e com sentido.',
      duracao: '15 min', grupo: 'Individual ou até 4 pessoas', custo: 'Menos de 5 €',
      materiais: ['Cordel preso entre dois pontos fixos, à altura dos olhos da pessoa sentada (ou um pouco acima)', 'Molas de plástico macias', 'Meias, panos da loiça, lenços'],
      preparar: ['Ajuste a altura do cordel a cada pessoa.', 'Ponha o cesto da roupa ao lado da cadeira, do lado da mão mais forte.', 'Teste as molas: devem abrir sem esforço.'],
      passos: [
        { faz: 'Mostre o cesto e o cordel.', diz: 'Temos roupa lavada para estender. Ajuda-me?' },
        { faz: 'Demonstre: pegar numa peça, esticar o braço, prender com a mola.', diz: 'Esticamos bem o braço… e prendemos.' },
        { faz: 'A pessoa estende 5 a 8 peças.', diz: 'Mais alto um bocadinho. Isso!' },
        { faz: 'Depois, recolher a roupa para o cesto.', diz: 'Já secou! Vamos recolher.' }
      ],
      adaptar: { facil: 'Cordel à altura do peito. Só tirar as molas (é mais fácil do que pôr). Peças grandes.', dificil: 'Cordel acima da cabeça. Estender com a mão menos hábil. Alternar braço direito e esquerdo.' },
      atencao: 'Não forçar o braço acima do confortável, sobretudo com dor de ombro. A pessoa fica sentada: o cordel vai até ela, não o contrário.',
      seCorrerMal: 'Se a mola for difícil, o animador abre-a e a pessoa só prende o pano.'
    }
  ]
};
