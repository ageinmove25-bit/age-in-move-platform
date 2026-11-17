// Volumes que juntam várias fichas num só ebook.
// Para acrescentar uma ficha a um volume, basta pôr o seu "slug" (nome do ficheiro em fichas/, sem .js)
// na lista "fichas" e voltar a correr: node volumes/gerar.js
module.exports = [
  {
    slug: 'parkinson-e-avc',
    titulo: 'Parkinson e AVC',
    subtitulo: 'Exercícios para mexer com mais segurança depois de um AVC ou com doença de Parkinson',
    cor: '#0F766E', corClara: '#CCFBF1', corEscura: '#134E4A',
    introducao: [
      'Este volume junta fichas de atividade pensadas para duas situações frequentes nas pessoas idosas: a doença de Parkinson e as sequelas de um acidente vascular cerebral (AVC). Em ambas, o risco de queda é maior e o movimento precisa de ser treinado com cuidado, de forma regular e com objetivos claros.',
      'A maior parte destas fichas é terapêutica: deve ser usada com indicação e acompanhamento do fisioterapeuta, que conhece cada pessoa e ajusta os exercícios. Os animadores e auxiliares podem ajudar a preparar o material, a motivar e a repetir os exercícios mais simples no dia a dia, sempre de acordo com o plano da equipa.'
    ],
    seccoes: [
      { titulo: 'Doença de Parkinson', texto: 'Os movimentos ficam pequenos e lentos, a marcha encurta, os pés juntam-se e pode haver bloqueios ("congelar") e tendência a cair para trás.',
        dicas: ['Pedir movimentos GRANDES e dar pistas: contar em voz alta, ritmo, marcas no chão', 'Fazer os exercícios no período "on" da medicação', 'Nos bloqueios, nunca puxar: pedir um passo grande por cima de uma marca', 'Animador ao lado nas viragens e atrás em quem cai para trás'],
        fichas: ['postits-parkinson', 'coordenacao-parkinson', 'nao-cair-para-tras'] },
      { titulo: 'Depois de um AVC', texto: 'Um dos lados do corpo fica mais fraco. É frequente o pé "cair" e arrastar ao andar, e a pessoa pode esquecer-se do lado afetado.',
        dicas: ['Ficar sempre do lado afetado', 'Estimular o lado afetado sem forçar nem causar dor', 'Usar a ortótese e o calçado indicados', 'Repetir muitas vezes, com pausas: a repetição ajuda o cérebro a reaprender'],
        fichas: ['bola-no-sapato', 'pe-que-nao-arrasta'] }
    ]
  }
];
