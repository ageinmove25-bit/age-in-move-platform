// Ficha de atividade "A Bola no Sapato" — treino de marcha com feedback para pessoas após AVC.
// Uma base de plástico presa à frente do sapato do lado afetado, com uma bola pequena em cima.
// Para não deixar a bola cair, a pessoa tem de controlar o pé durante o passo. Uso terapêutico.

const K = '#1F2937', G = '#9CA3AF';
const s = i => `<svg viewBox="0 0 200 200" width="100%" height="100%">${i}</svg>`;
const SAP = (x, y, sc = 1) => `<g transform="translate(${x},${y}) scale(${sc})"><path d="M0,0 L0,-34 Q0,-44 12,-44 L34,-44 Q44,-30 70,-24 Q96,-18 96,-4 L96,0 Z" fill="#E5E7EB" stroke="${K}" stroke-width="5" stroke-linejoin="round"/><rect x="-2" y="0" width="100" height="10" rx="4" fill="${K}"/></g>`;

// 1. Material
const MATERIAL = s(`<ellipse cx="70" cy="120" rx="54" ry="40" fill="currentColor" opacity=".85"/><circle cx="70" cy="110" r="16" fill="#FDE68A" stroke="${K}" stroke-width="4"/>
  <circle cx="156" cy="70" r="28" fill="none" stroke="${G}" stroke-width="14"/><circle cx="156" cy="70" r="12" fill="#F3F4F6"/>
  <text x="156" y="128" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="18" fill="${K}">fita</text>
  <text x="70" y="186" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="18" fill="${K}">disco + bola</text>`);
// 2. Montar: disco preso à frente do sapato (vista de lado), rebordo levantado à frente, bola em cima
const MONTAR = s(`<line x1="8" y1="170" x2="192" y2="170" stroke="#D1D5DB" stroke-width="4"/>
  <path d="M20,160 L20,108 Q20,96 34,96 L60,96 Q74,116 104,122 Q128,126 128,146 L128,160 Z" fill="#E5E7EB" stroke="${K}" stroke-width="5" stroke-linejoin="round"/>
  <rect x="18" y="160" width="112" height="10" rx="4" fill="${K}"/>
  <path d="M86,160 L184,160 L184,132" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M94,118 L94,168 M110,122 L110,168" stroke="${G}" stroke-width="9"/>
  <circle cx="160" cy="141" r="15" fill="#FDE68A" stroke="${K}" stroke-width="4"/>
  <text x="184" y="120" text-anchor="end" font-family="Nunito, sans-serif" font-weight="800" font-size="16" fill="${K}">rebordo</text>
  <text x="102" y="104" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="16" fill="${K}">fita</text>`);
// 3. Andar: o pé do lado afetado levanta e a bola mantém-se em cima do disco
const ANDAR = s(`<line x1="8" y1="188" x2="192" y2="188" stroke="#D1D5DB" stroke-width="4"/>
  <path d="M16,184 L16,152 Q16,144 26,144 L44,144 Q54,156 74,160 Q90,164 90,176 L90,184 Z" fill="#E5E7EB" stroke="${K}" stroke-width="4"/><rect x="14" y="184" width="78" height="6" rx="3" fill="${K}"/>
  <g transform="translate(74,62) rotate(-8) scale(.9)">
    <path d="M0,60 L0,28 Q0,20 10,20 L28,20 Q38,32 58,36 Q74,40 74,52 L74,60 Z" fill="#E5E7EB" stroke="${K}" stroke-width="4"/><rect x="-2" y="60" width="78" height="6" rx="3" fill="${K}"/>
    <path d="M52,66 L100,66 L100,46" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="84" cy="54" r="11" fill="#FDE68A" stroke="${K}" stroke-width="3"/></g>
  <path d="M84,44 C104,22 134,22 152,38" fill="none" stroke="${K}" stroke-width="5" marker-end="url(#bs)"/>
  <defs><marker id="bs" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${K}"/></marker></defs>`);

module.exports = {
  slug: 'bola-no-sapato',
  titulo: 'A Bola no Sapato',
  subtitulo: 'Treino de marcha com uma bola que avisa — para pessoas após AVC',
  kicker: 'Ficha de atividade · reabilitação após AVC · só com fisioterapeuta',
  cor: '#0E7490', corClara: '#CFFAFE', corEscura: '#164E63',
  paraQue: 'Depois de um AVC, muitas pessoas arrastam o pé do lado afetado ou não o controlam bem ao dar o passo. Este truque simples dá um "aviso" imediato: prende-se um disco de plástico à frente do sapato, com uma bola pequena em cima. Se o pé não for controlado durante o passo, a bola cai. A pessoa vê e sente na hora o que tem de corrigir — e o treino torna-se um desafio.',
  duracao: '10 a 15 min', grupo: 'Individual, com fisioterapeuta', custo: '0 a 5 €',
  paraGrupos: {
    fisico: 'Pessoas após AVC que andam com ou sem auxiliar de marcha (habitualmente Grupo 1 ou 2), com indicação do fisioterapeuta. Não indicado para quem não faz marcha.',
    cognitivo: 'Grupo A e Grupo B (precisa de perceber e manter a tarefa). Grupo C: não indicado.',
    ebook: 'Física — atividade terapêutica. Não é uma atividade de grupo: é usada pelo fisioterapeuta no plano individual.'
  },
  materiais: [
    'Um disco de plástico flexível com cerca de 20 cm (tampa de balde, base de plástico fino, tapete de rato de silicone)',
    'Fita adesiva forte (tipo "fita americana")',
    'Uma bola pequena e leve (de espuma ou de pingue-pongue grande)',
    'O sapato da pessoa (fechado, com atacadores ou velcro)'
  ],
  preparar: [
    'Fixe o disco à parte da frente do sapato do lado afetado, passando a fita por baixo da sola e à volta do pé.',
    'Dobre um pedaço de fita sobre si mesmo várias vezes e cole-o na ponta do disco: é o rebordo que segura a bola.',
    'Confirme que o disco não fica solto nem prende no chão ao andar.',
    'Prepare um percurso livre de obstáculos, com uma barra ou corrimão ao lado.'
  ],
  passos: [
    { faz: 'Mostre o sapato preparado e explique o objetivo.', diz: 'A bola vai connosco a passear. O nosso trabalho é não a deixar cair.' },
    { faz: 'Primeiro sem andar: de pé com apoio, levantar o pé devagar e voltar a pousar.', diz: 'Levante o pé… a bola ficou? Muito bem.' },
    { faz: 'Dar 3 a 5 passos, devagar, ao lado da barra.', diz: 'Passo a passo. Olhe para a bola quando precisar.' },
    { faz: 'Se a bola cair, pare, volte a pô-la e explique o que aconteceu.', diz: 'Caiu porque o pé desceu à frente. Vamos tentar levantar um bocadinho mais.' },
    { faz: 'Aumentar a distância conforme o controlo melhora.', diz: 'Desta vez chegou ao fim com a bola! Mais uma volta?' }
  ],
  niveis: {
    n1: 'Sem andar: sentado ou de pé com apoio, levantar e pousar o pé com a bola em cima. Bola maior e mais leve, rebordo alto.',
    n2: 'Andar 3 a 5 m junto à barra, com o fisioterapeuta ao lado. Pausas frequentes.',
    n3: 'Percurso mais longo, com curvas e mudanças de direção. Rebordo mais baixo (mais difícil). Contar os passos ou dizer palavras enquanto anda (dupla tarefa).'
  },
  atencao: 'Usar só com indicação e acompanhamento do fisioterapeuta que conhece o caso: é uma ferramenta de reabilitação, não um jogo de grupo. Confirmar que o disco não prende no chão (risco de tropeçar). Barra ou corrimão sempre ao lado. Não usar sobre feridas, edema ou pele frágil. Parar se houver cansaço, dor ou desequilíbrio.',
  seCorrerMal: 'Se a bola cair sempre, volte ao nível sentado ou use um rebordo mais alto. Se a pessoa ficar frustrada, lembre que cair a bola é informação, não um erro — e termine com uma tentativa fácil e bem-sucedida.',
  variantes: [
    'Sem bola: só com o disco, para a pessoa sentir o pé antes de juntar a bola.',
    'Copo de plástico vazio em vez da bola (exige mais controlo).',
    'Marcar passos no chão com fita para treinar o comprimento do passo.',
    'Registar quantos metros consegue fazer sem a bola cair, de semana para semana.'
  ],
  registo: true,
  cartoesPassos: {
    titulo: 'COMO FAZER', sub: 'Material simples · só com fisioterapeuta',
    itens: [
      { svg: MATERIAL, nome: '1 · O material', desc: 'Disco de plástico flexível, fita forte e uma bola pequena e leve', tempo: '0 a 5 €' },
      { svg: MONTAR, nome: '2 · Montar no sapato', desc: 'Fita à volta da frente do pé; um rebordo de fita dobrada na ponta do disco', tempo: '5 min' },
      { svg: ANDAR, nome: '3 · Andar sem a deixar cair', desc: 'Passos lentos junto à barra; a bola mostra se o pé está controlado', tempo: '10 a 15 min' }
    ],
    lembrar: ['Só com fisioterapeuta', 'Barra ao lado', 'Disco bem preso', 'Cair a bola é informação']
  }
};
