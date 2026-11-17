// Coleção Age in Move — organização dos ebooks por TIPO de atividade e GRAU DE DEPENDÊNCIA.
// Físicas: grupo definido pelo Índice de Barthel.
// Cognitivas: grupo definido pelo estado cognitivo (MMSE ajustado à escolaridade e/ou Escala de Deterioração Global de Reisberg).
// Combinadas: usa-se o grupo MAIS LIMITATIVO das duas avaliações.

module.exports = {
  tipos: {
    fisicas: { nome: 'Físicas', desc: 'Só movimento: força, equilíbrio, mobilidade e resistência.', cor: '#0F766E' },
    cognitivas: { nome: 'Cognitivas', desc: 'Só mente: memória, atenção, linguagem, orientação e reminiscência.', cor: '#7C3AED' },
    combinadas: { nome: 'Combinadas', desc: 'Movimento e mente ao mesmo tempo (dupla tarefa).', cor: '#C2410C' }
  },
  gruposFisicos: [
    { id: 1, nome: 'Grupo 1 · Autónomos', escala: 'Barthel 91–100', quem: 'Independentes ou com dependência ligeira. Andam sozinhos (com ou sem bengala), levantam-se da cadeira sem ajuda.', onde: 'Centro de dia, universidade sénior, comunidade' },
    { id: 2, nome: 'Grupo 2 · Dependência moderada', escala: 'Barthel 61–90', quem: 'Precisam de ajuda nalgumas tarefas (banho, escadas, vestir). Andam com andarilho ou com supervisão. Fazem a maioria dos exercícios sentados.', onde: 'Centro de dia, ERPI, apoio domiciliário' },
    { id: 3, nome: 'Grupo 3 · Dependência grave', escala: 'Barthel 0–60', quem: 'Precisam de ajuda na maioria das tarefas. Passam o dia em cadeirão ou cadeira de rodas, ou na cama. Exercícios muito curtos, sentados ou deitados.', onde: 'ERPI, unidades de cuidados continuados, domicílio' }
  ],
  gruposCognitivos: [
    { id: 'A', nome: 'Grupo A · Cognição preservada', escala: 'MMSE acima do ponto de corte* · GDS-R 1–3', quem: 'Sem défice ou com queixas ligeiras de memória. Seguem instruções de vários passos e gostam de desafios.', onde: 'Centro de dia, universidade sénior, comunidade' },
    { id: 'B', nome: 'Grupo B · Demência ligeira a moderada', escala: 'MMSE ≈ 12 até ao ponto de corte* · GDS-R 4–5', quem: 'Esquecem-se de acontecimentos recentes, precisam de lembretes e de uma instrução de cada vez. Mantêm memórias antigas e o gosto de conversar.', onde: 'Centro de dia, ERPI' },
    { id: 'C', nome: 'Grupo C · Demência grave', escala: 'MMSE < 12 · GDS-R 6–7', quem: 'Comunicação muito reduzida. Respondem melhor ao toque, à música, às vozes conhecidas e a estímulos sensoriais.', onde: 'ERPI, cuidados continuados, domicílio' }
  ],
  notaMMSE: '* Pontos de corte do MMSE para a população portuguesa (Morgado et al., 2009), segundo os anos de escolaridade: 0–2 anos ≤ 22 · 3–6 anos ≤ 24 · 7 ou mais anos ≤ 27. GDS-R = Escala de Deterioração Global de Reisberg (não confundir com a Escala de Depressão Geriátrica). Os valores são orientativos: na dúvida, observe a pessoa e escolha o grupo mais protetor.',
  // Matriz de 9 ebooks
  ebooks: [
    { tipo: 'fisicas', grupo: 1, titulo: 'Em Forma' }, { tipo: 'fisicas', grupo: 2, titulo: 'Corpo em Movimento' }, { tipo: 'fisicas', grupo: 3, titulo: 'Movimento Suave' },
    { tipo: 'cognitivas', grupo: 'A', titulo: 'Mente Desperta' }, { tipo: 'cognitivas', grupo: 'B', titulo: 'Mente Ativa' }, { tipo: 'cognitivas', grupo: 'C', titulo: 'Sentidos e Memórias' },
    { tipo: 'combinadas', grupo: 1, titulo: 'Corpo e Mente' }, { tipo: 'combinadas', grupo: 2, titulo: 'Mexer e Pensar' }, { tipo: 'combinadas', grupo: 3, titulo: 'Toque e Ritmo' }
  ]
};
