// Ebook v2 — Praxia Fina ("Mãos Ativas")
// Escrito para animadores e auxiliares, para pessoas idosas autónomas, com défice cognitivo
// ligeiro, com demência ligeira a moderada e residentes em lar. Tudo sentado, à mesa.

module.exports = {
  slug: 'praxia-fina', vol: 7,
  titulo: 'Mãos Ativas',
  fator: 'Praxia Fina',
  subtitulo: 'Atividades para as mãos com materiais que há em qualquer casa',
  cor: '#B45309', corClara: '#FEF3C7', corEscura: '#78350F',
  capaFoto: 'capa-maos',
  introducao: 'As mãos fazem quase tudo no dia a dia: abotoar, pegar no copo, contar o dinheiro, tomar a medicação. Com a idade, a artrose, o tremor e a falta de prática tornam estas tarefas mais difíceis — e muitas pessoas deixam de as fazer. Estas atividades usam coisas que já conhecem: botões, molas, panos, moedas, lã. São tarefas com sentido, que lembram a vida de casa, e treinam ao mesmo tempo as mãos, a atenção e a memória.',
  atividades: [
    {
      nome: 'A Caixa da Costura',
      foto: 'botoes',
      paraQue: 'Treina os dedos, a atenção e a capacidade de separar por categorias. Lembra a caixa de costura que havia em todas as casas.',
      duracao: '15 a 20 min', grupo: 'Individual ou até 6 pessoas', custo: 'Menos de 5 €',
      materiais: ['Botões grandes de várias cores (no mínimo do tamanho de uma moeda de 2 €)', 'Carrinhos de linha vazios e rolhas de cortiça', '1 caixa de lata ou de sapatos', '2 ou 3 taças de plástico', 'Toalha de cor lisa (para os botões se verem bem)'],
      preparar: ['Misture os botões, as rolhas e os carrinhos de linha na caixa.', 'Ponha as taças do lado da mão com que a pessoa escreve.', 'Tenha uma taça "modelo" já com um objeto de cada tipo, para mostrar.', 'Conte os botões antes de começar.'],
      passos: [
        { faz: 'Mostre a caixa e converse um pouco.', diz: 'Lembra-se da caixa da costura lá de casa? Está toda desarrumada.' },
        { faz: 'Mostre a taça modelo e aponte para cada uma.', diz: 'Os botões vão para esta taça. As rolhas vão para aquela.' },
        { faz: 'Faça os primeiros dois com a pessoa, devagar.', diz: 'Pegue num… muito bem. Para onde vai este?' },
        { faz: 'Deixe a pessoa continuar ao seu ritmo. Não apresse.', diz: 'Está a ficar muito bem arrumado.' },
        { faz: 'No fim, olhem juntos para as taças e contem os botões.', diz: 'Fez um ótimo trabalho. Ajudou-me imenso!' }
      ],
      niveis: {
        n1: 'Só objetos grandes (rolhas e carrinhos de linha) e 2 taças, cada uma com o objeto colado por fora. Trabalhe ao lado da pessoa, mão sobre mão se for preciso.',
        n2: 'Botões grandes e rolhas, 2 taças. Depois, separar os botões por cor. Uma instrução de cada vez.',
        n3: 'Separar por cor e por tamanho, com 3 ou 4 taças. Contar 10 botões de cada cor, ou enfiar os botões num fio grosso.'
      },
      atencao: 'Botões podem ser levados à boca. Com pessoas com demência, use só objetos maiores do que uma rolha, conte-os no início e no fim, e nunca deixe a pessoa sozinha com a caixa.',
      seCorrerMal: 'Se a pessoa misturar tudo ou ficar irritada, mude para "pôr tudo de volta na caixa" — também é uma tarefa útil. Termine sempre com um elogio.'
    },
    {
      nome: 'Estender a Roupa',
      foto: 'molas',
      paraQue: 'Fortalece a pinça dos dedos (polegar e indicador), que é a que usamos para abrir embalagens e abotoar. É uma tarefa do dia a dia que dá sentido de utilidade.',
      duracao: '15 min', grupo: 'Individual ou até 4 pessoas', custo: 'Menos de 5 €',
      materiais: ['10 a 20 molas da roupa (de madeira ou plástico)', '1 cordel', '2 cadeiras para prender o cordel (à altura do peito, sentado)', 'Meias, panos da loiça ou peças pequenas de roupa'],
      preparar: ['Prenda o cordel entre as costas de duas cadeiras, à frente da pessoa sentada.', 'Ponha as molas numa taça e a roupa num cesto.', 'Experimente as molas: se forem muito duras, troque por outras mais macias.'],
      passos: [
        { faz: 'Mostre o cesto da roupa.', diz: 'Temos aqui roupa lavada para estender. Ajuda-me?' },
        { faz: 'Demonstre: pegar na mola, abrir, prender o pano.', diz: 'Aperta assim com os dedos… e prende.' },
        { faz: 'Dê à pessoa uma peça e uma mola de cada vez.', diz: 'Agora é a sua vez. Esta meia.' },
        { faz: 'Quando a roupa estiver toda estendida, invertam.', diz: 'Já secou! Vamos tirar e pôr no cesto.' }
      ],
      niveis: {
        n1: 'Comece por TIRAR as molas (é mais fácil do que pôr). Use molas de plástico macias e panos grandes. Uma peça de cada vez.',
        n2: 'Estender 5 a 8 peças. Pode pedir por cores: "primeiro as meias azuis, depois as brancas".',
        n3: 'Emparelhar as meias antes de estender, ou estender pela ordem ditada: "meia, pano, meia, lenço". Use só a mão menos hábil durante 2 minutos.'
      },
      atencao: 'Algumas molas apertam muito e podem magoar dedos com artrose. Experimente primeiro. Pare se houver dor nas articulações.',
      seCorrerMal: 'Se a pessoa não conseguir abrir a mola, segure-a aberta e peça-lhe só para pôr o pano. A ajuda deve ser a menor possível, mas sem frustração.'
    },
    {
      nome: 'Dobrar e Arrumar',
      foto: 'toalhas',
      paraQue: 'Treina os movimentos das duas mãos em conjunto, a sequência de passos e a noção de espaço. Muitas pessoas sentem-se úteis e tranquilas a dobrar roupa.',
      duracao: '15 a 20 min', grupo: 'Individual ou em grupo à volta de uma mesa', custo: '0 € (roupa da instituição ou de casa)',
      materiais: ['Guardanapos de pano, panos da loiça ou toalhas de mão (5 a 10)', 'Meias soltas para emparelhar', '1 cesto', 'Uma peça já dobrada para servir de modelo'],
      preparar: ['Ponha a roupa amarrotada num cesto ao lado da pessoa.', 'Deixe na mesa uma peça já dobrada como exemplo.', 'Limpe bem a mesa e deixe espaço livre à frente da pessoa.'],
      passos: [
        { faz: 'Tire uma peça do cesto e estique-a na mesa.', diz: 'Vamos arrumar esta roupa como deve ser.' },
        { faz: 'Dobre devagar ao meio, alisando com as mãos.', diz: 'Primeiro ao meio… e alisa bem.' },
        { faz: 'Dobre outra vez e ponha ao lado do modelo.', diz: 'Ficou igual a este. Agora é a sua vez.' },
        { faz: 'Faça uma pilha com as peças dobradas.', diz: 'Que pilha tão arrumada!' }
      ],
      niveis: {
        n1: 'Só alisar o pano na mesa e dobrar uma vez ao meio. Peças grandes e lisas. Faça ao lado da pessoa, ao mesmo tempo, como um espelho.',
        n2: 'Dobrar em quatro, seguindo o modelo. Emparelhar meias de cores bem diferentes.',
        n3: 'Dobrar camisolas ou toalhas grandes, emparelhar meias parecidas e arrumar por tipo (meias, panos, guardanapos).'
      },
      atencao: 'Use roupa lavada e seca. Em pessoas com demência, esta tarefa ajuda muito em momentos de agitação ao fim da tarde.',
      seCorrerMal: 'Se a pessoa desdobrar o que já está feito, não corrija: deixe-a repetir. O que importa é a atividade, não a pilha perfeita.'
    },
    {
      nome: 'O Porta-Moedas',
      foto: 'moedas',
      paraQue: 'Treina os dedos com objetos pequenos e mantém uma capacidade muito importante para a independência: lidar com o dinheiro.',
      duracao: '15 min', grupo: 'Individual ou em pares', custo: 'Moedas reais (cerca de 10 €)',
      materiais: ['Moedas reais: 2 €, 1 €, 50, 20 e 10 cêntimos', '1 porta-moedas com fecho', '1 prato raso', 'Cartões com preços escritos em letra grande (jornal 1,50 €, selo 1 €, bilhete de autocarro 2 €)'],
      preparar: ['Ponha as moedas dentro do porta-moedas.', 'Escreva os preços em cartões com letra bem grande, com a imagem do objeto.', 'Para o nível 1, retire as moedas mais pequenas (1, 2 e 5 cêntimos).'],
      passos: [
        { faz: 'Dê o porta-moedas à pessoa.', diz: 'Vamos às compras! Abra o porta-moedas, por favor.' },
        { faz: 'Peça para despejar as moedas no prato.', diz: 'Vamos ver quanto dinheiro temos.' },
        { faz: 'Mostre um cartão de preço.', diz: 'O selo custa 1 euro. Pode pagar-me?' },
        { faz: 'Receba as moedas e confirme em voz alta.', diz: 'Uma moeda de 1 euro. Certinho, obrigada!' },
        { faz: 'No fim, guardar as moedas e fechar o porta-moedas.', diz: 'Guarde o dinheiro, que é seu.' }
      ],
      niveis: {
        n1: 'Só moedas grandes (2 €, 1 € e 50 cêntimos). Tirar do porta-moedas e voltar a guardar. Separar as "douradas" das "prateadas".',
        n2: 'Pagar valores redondos: o selo (1 €), o bilhete de autocarro (2 €). Juntar 1 € com moedas de 50 e 20 cêntimos.',
        n3: 'Pagar valores com cêntimos (1,80 €; 3,45 €) com o menor número de moedas. Calcular o troco de uma nota de 5 €.'
      },
      atencao: 'Moedas pequenas podem ser engolidas: no nível 1 use só as grandes e conte as moedas no início e no fim. Lave as mãos depois.',
      seCorrerMal: 'Se a pessoa ficar ansiosa com o dinheiro ("estão a tirar-me o dinheiro"), diga que as moedas são dela e deixe-a guardar o porta-moedas. Passe para outra atividade.'
    },
    {
      nome: 'Enrolar o Novelo',
      foto: 'novelo',
      paraQue: 'Treina as duas mãos em conjunto, a coordenação e a concentração. É um gesto calmo e repetitivo, que muitas pessoas fizeram durante anos e que ajuda a acalmar.',
      duracao: '15 a 20 min', grupo: 'Individual ou em pares', custo: 'Menos de 5 €',
      materiais: ['Lã grossa (meada ou novelo desfeito), de cor viva', 'Um rolo de papel higiénico vazio ou um cartão para enrolar', 'Opcional: um segundo par de mãos para segurar a meada'],
      preparar: ['Desfaça um pouco o novelo, deixando a lã solta num cesto.', 'Dê um nó no início da lã à volta do rolo de cartão.', 'Escolha lã grossa: é mais fácil de ver e de agarrar.'],
      passos: [
        { faz: 'Mostre o cesto com a lã solta.', diz: 'Esta lã está toda solta. Ajuda-me a fazer um novelo?' },
        { faz: 'Demonstre: segurar o rolo numa mão e enrolar com a outra.', diz: 'Segura aqui… e dá voltas, assim.' },
        { faz: 'Segure a lã solta para não se enrolar.', diz: 'Eu seguro a lã, a senhora enrola.' },
        { faz: 'Vá elogiando o novelo a crescer.', diz: 'Já está a ficar redondinho!' },
        { faz: 'No fim, prendam a ponta e guardem o novelo.', diz: 'Ficou um novelo muito bem feito.' }
      ],
      niveis: {
        n1: 'O animador segura a meada e a pessoa só enrola à volta do rolo de cartão. Enrolar 2 a 3 minutos de cada vez já é muito bom.',
        n2: 'Enrolar sozinha, com a lã solta no colo. Trocar a mão que enrola a meio da atividade.',
        n3: 'Enrolar sem o rolo de cartão (novelo à mão). Em pares: uma pessoa segura a meada nos braços, a outra enrola. Conversar sobre malhas e bordados.'
      },
      atencao: 'Não deixe a lã enrolada à volta dos dedos ou do pulso. Use lã macia e sem fios soltos que se metam na boca.',
      seCorrerMal: 'Se a lã fizer nós, não insista: corte o nó e continue. Se a pessoa se cansar, guarde o novelo para a sessão seguinte e mostre o que já foi feito.'
    },
    {
      nome: 'A Caixa das Tarefas',
      foto: 'frascos',
      paraQue: 'Treina os movimentos de abrir, fechar, rodar e abotoar — os mesmos que usamos para tomar a medicação, vestir e cozinhar.',
      duracao: '15 a 20 min', grupo: 'Individual', custo: '0 a 5 € (objetos de casa)',
      materiais: ['Uma caixa de sapatos com:', '3 frascos de plástico com tampa de rosca (tamanhos diferentes)', 'Uma camisa ou casaco velho com botões grandes', 'Um porta-moedas com fecho de correr', 'Um cadeado pequeno com chave (opcional)'],
      preparar: ['Feche todos os frascos e objetos antes de começar.', 'Escolha tampas que rodam facilmente.', 'Dentro de cada frasco, ponha uma pequena surpresa (uma fotografia antiga, um postal, uma flor de tecido).'],
      passos: [
        { faz: 'Ponha a caixa à frente da pessoa.', diz: 'Tenho aqui uma caixa com surpresas. Vamos ver o que tem?' },
        { faz: 'Dê um objeto de cada vez.', diz: 'Consegue abrir este frasco? Roda para este lado.' },
        { faz: 'Celebre o que encontra lá dentro.', diz: 'Olhe, uma fotografia! Quem é?' },
        { faz: 'Depois, voltar a fechar tudo.', diz: 'Agora fechamos tudo para guardar.' }
      ],
      niveis: {
        n1: 'Um objeto de cada vez: um frasco largo com tampa grande, ou abrir um porta-moedas. Mostre o gesto de rodar com a sua mão ao lado.',
        n2: 'Abrir e fechar 3 a 4 objetos diferentes. Abotoar 3 botões grandes de uma camisa pousada na mesa.',
        n3: 'Frascos misturados com as tampas trocadas: encontrar a tampa certa para cada um. Botões pequenos, cadeado com chave.'
      },
      atencao: 'Não use frascos de vidro nem objetos cortantes. As surpresas devem ser maiores do que a tampa de uma garrafa, para não irem à boca.',
      seCorrerMal: 'Se uma tampa estiver muito dura, desaperte-a um pouco às escondidas antes de entregar. O objetivo é a pessoa conseguir.'
    }
  ]
};
