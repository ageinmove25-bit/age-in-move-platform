// Ficha de atividade "Bola a Dois" — coordenação e cooperação em pares.
// Duas pessoas seguram uma bola leve entre as palmas das mãos e movem-na juntas, sem a deixar cair.

// Trajetórias desenhadas em SVG (viewBox 0 0 200 200), com seta no fim.
const SETA = '<defs><marker id="s" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>';
const traj = d => `<svg viewBox="0 0 200 200" width="100%" height="100%" style="color:currentColor">${SETA}<circle cx="${d.cx || 100}" cy="${d.cy || 100}" r="0"/><path d="${d.p}" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#s)" ${d.both ? 'marker-start="url(#s)"' : ''}/></svg>`;

module.exports = {
  slug: 'bola-a-dois',
  titulo: 'Bola a Dois',
  subtitulo: 'Mexer juntos, sem deixar cair',
  kicker: 'Ficha de atividade · em pares · sentados',
  cor: '#EA580C', corClara: '#FFEDD5', corEscura: '#7C2D12',
  paraQue: 'Duas pessoas seguram uma bola entre as palmas das mãos e movem-na juntas, sem a deixar cair. Para isso, têm de olhar uma para a outra, combinar o ritmo e ajustar a força. Treina os braços e os ombros, a coordenação, o equilíbrio sentado, a atenção e a comunicação — e é muito divertido.',
  duracao: '15 a 20 min', grupo: 'Pares (2 pessoas ou 1 pessoa + animador)', custo: '3 a 15 € (balão grande ou bola leve)',
  paraGrupos: {
    fisico: 'Grupo 1 e Grupo 2, sentados. Grupo 3: com o animador como par e um balão.',
    cognitivo: 'Só movimentos: todos os grupos. Letras no ar: Grupo A (e Grupo B com letras simples).',
    ebook: 'Física em "Corpo em Movimento" (Grupo 2); com letras no ar, combinada em "Corpo e Mente" (Grupo 1).'
  },
  materiais: [
    'Uma bola grande e leve (de praia, de espuma ou de pilates mal cheia) — ou um balão grande, bem cheio',
    '2 cadeiras firmes, sem rodas, colocadas frente a frente, joelhos a cerca de um palmo',
    'Os cartões "Movimentos" e "Letras no ar", impressos (ou mostrados no ecrã)',
    'Opcional: música calma de fundo'
  ],
  preparar: [
    'Cadeiras frente a frente, com espaço à volta para mexer os braços.',
    'Para o nível 1, faça par com a pessoa (o animador é o parceiro).',
    'Junte em pares pessoas com força e altura parecidas.',
    'Teste a bola: deve ser leve e grande o suficiente para ser segura com as palmas abertas.'
  ],
  passos: [
    { faz: 'Sente-se à frente da pessoa e mostre a bola.', diz: 'Vamos segurar esta bola os dois, só com as palmas das mãos.' },
    { faz: 'Ponham as mãos na bola, ao nível do peito.', diz: 'Aperte devagarinho, como eu. Não a deixamos cair!' },
    { faz: 'Mostre o primeiro cartão de movimento e façam-no devagar.', diz: 'Vamos subir… e descer. Olhe para mim.' },
    { faz: 'Passe aos outros cartões, um de cada vez.', diz: 'Agora uma roda grande. Quem manda é a bola!' },
    { faz: 'No nível 2 ou 3, escrevam juntos uma letra no ar.', diz: 'Vamos escrever um O… e agora um M.' },
    { faz: 'Pousem a bola no colo e respirem fundo.', diz: 'Somos uma boa equipa!' }
  ],
  niveis: {
    n1: 'O animador é o par. Só o movimento "subir e descer" e o "lado para lado", lentos, 5 vezes. Bola grande ou balão, bem perto do peito. Se a pessoa largar, não faz mal: o animador segura.',
    n2: 'Pares de participantes. Os 6 movimentos do cartão, 5 a 8 vezes cada. Depois, "escrever" letras grandes no ar: O, L, V, M.',
    n3: 'Uma pessoa desenha uma letra ou um número em segredo e a outra tem de adivinhar qual foi. Escrever juntos o nome de cada um, letra a letra. Pode ser feito de pé, de lado para uma mesa ou parede para apoio, só com quem tem bom equilíbrio.'
  },
  atencao: 'Sempre sentados, salvo no nível 3 com bom equilíbrio. Não levar a bola acima da cabeça com quem tem dor ou limitação nos ombros. Usar bolas leves: nunca bolas medicinais pesadas. Com pessoas com demência, prefira um balão (mais lento e menos assustador se cair).',
  seCorrerMal: 'Se a bola cair muitas vezes, use um balão ou uma bola maior, e reduza a um só movimento. Se o par não se entender, troque de pares ou faça o animador de parceiro. Se alguém se cansar, façam uma pausa com a bola no colo.',
  variantes: [
    'Em roda: todos seguram juntos um lençol ou uma toalha e fazem uma bola saltar no meio sem a deixar cair.',
    'Com música: mexer a bola ao ritmo de uma música conhecida (devagar numa valsa, mais depressa numa marcha).',
    'Espelho: um conduz e o outro segue, sem falar; depois trocam.',
    'Com os olhos: o animador diz uma direção ("para a janela!", "para a porta!") e o par leva a bola até lá.'
  ],
  registo: true,
  cartoes: [
    {
      titulo: 'MOVIMENTOS', sub: 'Façam juntos, devagar, sem deixar cair a bola',
      itens: [
        { nome: 'Subir e descer', svg: traj({ p: 'M100,170 L100,30', both: true }) },
        { nome: 'Lado para lado', svg: traj({ p: 'M30,100 L170,100', both: true }) },
        { nome: 'Roda grande', svg: traj({ p: 'M100,30 A70,70 0 1,1 40,65' }) },
        { nome: 'Oito deitado', svg: traj({ p: 'M100,100 C130,50 180,50 180,100 C180,150 130,150 100,100 C70,50 20,50 20,100 C20,150 70,150 95,108' }) },
        { nome: 'Para a frente e para trás', svg: '<svg viewBox="0 0 200 200" width="100%" height="100%"><circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" stroke-width="12"/><circle cx="100" cy="100" r="28" fill="currentColor"/></svg>' },
        { nome: 'Ziguezague', svg: traj({ p: 'M25,150 L65,50 L100,150 L140,50 L175,150' }) }
      ]
    },
    {
      titulo: 'LETRAS NO AR', sub: 'Escrevam juntos, bem grande',
      letras: ['O', 'L', 'V', 'M', 'S', '8']
    }
  ]
};
