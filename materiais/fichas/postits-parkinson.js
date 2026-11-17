// Ficha de atividade "5 Exercícios com Post-its" — para pessoas com doença de Parkinson.
// Os post-its servem de alvos visuais: ajudam a fazer movimentos amplos, a transferir o peso
// e a manter os pés afastados. Física, com componente de atenção.

const K = '#1F2937', G = '#9CA3AF', Y = '#FACC15';
const SET = '<defs><marker id="pk" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1F2937"/></marker></defs>';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${SET}${i}</svg>`;
const L = (d, w = 8, c = K) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const A = (d, both) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="5" stroke-linecap="round" marker-end="url(#pk)" ${both ? 'marker-start="url(#pk)"' : ''}/>`;
const H = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}"/>`;
const P = (x, y, w = 18, r = 0) => `<rect x="${x - w / 2}" y="${y - w / 2}" width="${w}" height="${w}" rx="2" fill="${Y}" stroke="#CA8A04" stroke-width="2" transform="rotate(${r} ${x} ${y})"/>`;
const CHAO = '<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const CAD = (x = 0) => `<g transform="translate(${x},0)" stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M112,122 L168,122 M166,122 L166,52 M116,122 L116,186 M162,122 L162,186"/></g>`;

// 1. Alcançar alvos na parede (de frente para a parede)
const ALVOS = s(`<rect x="0" y="0" width="200" height="188" fill="#F9FAFB"/>${CHAO}${P(40, 40)}${P(160, 40)}${P(24, 110)}${P(176, 110)}
  ${L('M100,122 L100,70')}${H(100, 52)}${L('M100,122 L86,186 M100,122 L120,186')}${L('M100,78 L48,46')}${L('M100,78 L118,108')}`);
// 2. Levantar e rodar para tocar no post-it (pessoa de pé à frente da cadeira, braço para o lado)
const RODAR = s(`<rect x="160" y="0" width="40" height="188" fill="#F9FAFB"/>${P(176, 60)}${P(176, 120)}
  <g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M14,122 L70,122 M18,122 L18,52 M22,122 L22,186 M66,122 L66,186"/></g>${CHAO}
  ${L('M100,118 L100,62')}${H(100, 44)}${L('M100,118 L88,186 M76,186 L90,186')}${L('M100,118 L114,186 M112,186 L126,186')}${L('M100,72 L166,60')}${L('M100,72 L78,104')}
  ${A('M90,24 C110,8 140,10 160,30')}`);
// 3. Sentado: inclinar para um lado, levantar a anca do outro e passar o post-it (vista de frente)
const ANCA = s(`<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M40,130 L160,130 M46,130 L46,186 M154,130 L154,186"/></g>${CHAO}
  ${P(140, 122)}${P(62, 122)}
  <g transform="rotate(-14 96 126)">${L('M96,126 L96,64')}${H(96, 46)}${L('M96,76 L64,116')}${L('M96,76 L130,104')}</g>
  ${L('M86,128 L70,186 M58,186 L74,186')}${L('M108,120 L128,186 M124,186 L140,186')}
  ${A('M138,102 C126,82 90,80 70,108')}`);
// 4. Passo à frente e atrás, com apoio na parede
const PASSO = s(`<rect x="0" y="0" width="34" height="188" fill="#F9FAFB"/>${CHAO}${P(60, 184, 16)}${P(160, 184, 16)}
  ${L('M104,110 L94,52')}${H(90, 34)}${L('M96,64 L36,78')}${L('M104,110 L74,150 L64,180')}${L('M104,110 L130,148 L152,178')}${A('M66,160 L156,160', true)}`);
// 5. Marcha de pé com pés afastados, mão no apoio (vista de frente), sem pisar o post-it do meio
const MARCHA = s(`<g stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M150,96 L196,96 M154,96 L154,186 M192,96 L192,186"/></g>${CHAO}${P(96, 180, 16)}
  ${L('M96,116 L96,60')}${H(96, 42)}${L('M96,70 L150,96')}${L('M96,70 L66,104')}
  ${L('M88,116 L62,184 M50,184 L66,184')}${L('M104,116 L124,138 L126,170 M118,170 L134,170')}${A('M150,166 L150,126')}`);

module.exports = {
  slug: 'postits-parkinson',
  titulo: '5 Exercícios com Post-its',
  subtitulo: 'Movimentos grandes e passos seguros para pessoas com Parkinson',
  kicker: 'Ficha de atividade · física · doença de Parkinson',
  cor: '#CA8A04', corClara: '#FEF9C3', corEscura: '#713F12',
  paraQue: 'Na doença de Parkinson os movimentos tendem a ficar pequenos e lentos, os pés juntam-se e o equilíbrio falha nas viragens. Os post-its funcionam como alvos visuais: dizem ao corpo "até onde ir". Com eles treinam-se movimentos amplos, a passagem do peso de uma perna para a outra, levantar da cadeira a rodar, ajeitar-se na cadeira e marchar com os pés afastados — gestos do dia a dia, como chegar a um armário, sentar na sanita ou virar-se na cozinha.',
  duracao: '15 a 25 min', grupo: 'Individual ou até 4 pessoas por animador', custo: 'Menos de 3 € (um bloco de post-its)',
  paraGrupos: {
    fisico: 'Grupo 1 (os 5 exercícios). Grupo 2: exercícios 1 e 3 sentado, 2 com apoio, 4 e 5 só com o animador ao lado. Grupo 3: só o exercício 3 e o 1 sentado.',
    cognitivo: 'Grupo A e Grupo B. Os alvos coloridos ajudam quem tem dificuldade em seguir instruções verbais. Com cores ou números nos post-its, passa a combinada.',
    ebook: 'Física — "Em Forma" (Grupo 1) e "Corpo em Movimento" (Grupo 2). Pode integrar um futuro conjunto específico para Parkinson.'
  },
  materiais: [
    'Um bloco de post-its de cor viva (ou papéis colados com fita-cola)',
    'Uma parede livre e uma cadeira firme com braços, encostada à parede',
    'Opcional: post-its de cores diferentes ou com números'
  ],
  preparar: [
    'Cole 4 a 6 post-its na parede, à altura dos ombros e acima da cabeça, bem afastados.',
    'Cole 2 post-its no chão, um à frente e outro atrás dos pés (exercício 4).',
    'Cole 1 post-it no chão entre os pés, à largura dos ombros (exercício 5).',
    'Faça os exercícios no período "on" da medicação (quando a pessoa se mexe melhor).'
  ],
  passos: [
    { faz: 'Mostre os post-its e explique que são alvos.', diz: 'Cada papel amarelo é um alvo. Vamos lá chegar com movimentos grandes!' },
    { faz: 'Demonstre cada exercício devagar e com movimentos amplos.', diz: 'Grande! Mais longe! Estique bem.' },
    { faz: 'A pessoa faz 5 a 10 vezes cada exercício, com descanso entre eles.', diz: 'Toque no alvo… e volte. Muito bem.' },
    { faz: 'Use palavras curtas e ritmo marcado (contar em voz alta ajuda).', diz: 'Um… dois… três… e passo!' },
    { faz: 'No fim, sentar, respirar e perguntar qual foi o mais fácil.', diz: 'Qual destes faz parte do seu dia a dia?' }
  ],
  niveis: {
    n1: 'Tudo sentado: tocar nos post-its da parede (colados mais baixos) e mudar o post-it de um lado para o outro do assento (exercício 3). 5 vezes cada.',
    n2: 'Exercícios 1 a 3, de pé com apoio de uma mão na cadeira ou na parede. Exercícios 4 e 5 com o animador ao lado. 5 a 8 vezes.',
    n3: 'Os 5 exercícios, 10 vezes cada. Alvos mais longe e mais altos, a cruzar o corpo (mão direita no post-it da esquerda). Ritmo com música ou metrónomo. Juntar cores: o animador diz a cor do alvo a tocar.'
  },
  atencao: 'O risco de queda na doença de Parkinson é alto: animador sempre ao lado nos exercícios de pé, cadeira atrás e parede perto. Atenção às viragens e ao passo para trás (os mais arriscados). Se a pessoa "congelar" (bloqueio da marcha), não a puxe: peça para olhar para o post-it no chão e dar um passo grande por cima, ou conte em voz alta. Respeitar os períodos "off" da medicação.',
  seCorrerMal: 'Se a pessoa ficar presa ou com medo, volte a sentá-la e faça os exercícios sentados. Se os movimentos ficarem cada vez mais pequenos, pare, descanse e recomece com a palavra "GRANDE!". Registe e informe o fisioterapeuta.',
  variantes: [
    'Cores: post-its de várias cores; o animador diz a cor e a pessoa vai lá tocar (atenção e rapidez).',
    'Números: tocar nos post-its pela ordem 1, 2, 3, 4 (sequência).',
    'Com música: marchar e tocar nos alvos ao ritmo de uma marcha.',
    'Corredor: colar post-its no chão a cada passo largo, para treinar o comprimento do passo ao andar.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'OS 5 EXERCÍCIOS', sub: 'Os post-its são alvos · movimentos GRANDES',
    itens: [
      { svg: ALVOS, nome: '1 · Alvos na parede', desc: 'Passar o peso de uma perna para a outra e tocar nos post-its, também a cruzar o corpo', tempo: '5 a 10 vezes' },
      { svg: RODAR, nome: '2 · Levantar e rodar', desc: 'Levantar da cadeira e rodar o tronco para tocar no post-it ao lado', tempo: '5 a 8 vezes' },
      { svg: ANCA, nome: '3 · Levantar a anca', desc: 'Sentado: inclinar, levantar uma anca e passar o post-it para o outro lado', tempo: '5 a 10 de cada lado' },
      { svg: PASSO, nome: '4 · Passo à frente e atrás', desc: 'Mão na parede: passo largo até ao post-it da frente e depois ao de trás', tempo: '5 a 8 com cada pé' },
      { svg: MARCHA, nome: '5 · Marcha no lugar', desc: 'Com apoio, marchar com os pés afastados, sem pisar o post-it do meio', tempo: '20 a 30 passos' }
    ],
    lembrar: ['Movimentos GRANDES', 'Animador ao lado', 'Contar em voz alta']
  }
};
