// Ilustrações simples em SVG, usadas nos ebooks e nas fichas (sem fotografias).
// Todas usam viewBox 0 0 200 200 e "currentColor" para a cor de destaque.

const INK = '#1F2937', CINZA = '#9CA3AF', CHAO = '<line x1="10" y1="188" x2="190" y2="188" stroke="#D1D5DB" stroke-width="4"/>';
const svg = (inner, vb = '0 0 200 200') => `<svg viewBox="${vb}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
const SETA = '<defs><marker id="sa" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>';
const traco = (d, w = 8, c = INK) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const cabeca = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${INK}"/>`;

// Cadeira vista de lado (costas à direita)
const cadeira = (x = 0, flip = false) => `<g transform="translate(${x},0)${flip ? ' scale(-1,1) translate(-200,0)' : ''}" stroke="${CINZA}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M112,122 L168,122 M166,122 L166,52 M116,122 L116,186 M162,122 L162,186"/></g>`;

// Pessoa sentada de lado, virada para a esquerda, com opções para braços e pernas
function sentado({ bracos = 'M118,62 L96,96', pernas = 'M140,118 L92,120 L92,184 M80,184 L94,184', extra = '' } = {}) {
  return cadeira() + CHAO + traco('M140,118 L132,56') + traco(pernas) + traco(bracos) + cabeca(128, 40) + extra;
}

const ILU = {
  // Dado com várias faces
  dados: () => {
    const P = { 1: [[50, 50]], 3: [[25, 25], [50, 50], [75, 75]], 5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]], 6: [[27, 22], [73, 22], [27, 50], [73, 50], [27, 78], [73, 78]] };
    const d = (n, x, y, s, c, r) => `<g transform="translate(${x},${y}) rotate(${r} 50 50) scale(${s})"><rect x="4" y="4" width="92" height="92" rx="18" fill="${c}" stroke="${INK}" stroke-width="3"/>${P[n].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="9" fill="#fff"/>`).join('')}</g>`;
    return svg(d(5, 18, 30, .8, '#16A34A', -12) + d(3, 100, 20, .8, '#D97706', 10) + d(6, 60, 100, .85, '#2563EB', 4) + d(1, 0, 118, .55, '#BE123C', -20));
  },
  // Duas pessoas sentadas frente a frente a segurar uma bola
  bolaDois: () => svg(
    `<g stroke="${CINZA}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M4,120 L44,120 M8,120 L8,60 M10,120 L10,186 M42,120 L42,186"/><path d="M156,120 L196,120 M192,120 L192,60 M158,120 L158,186 M190,120 L190,186"/></g>` + CHAO +
    traco('M30,116 L36,58') + traco('M30,116 L72,120 L72,184') + traco('M36,66 L84,82') + cabeca(38, 42) +
    traco('M170,116 L164,58') + traco('M170,116 L128,120 L128,184') + traco('M164,66 L116,82') + cabeca(162, 42) +
    `<circle cx="100" cy="80" r="20" fill="currentColor"/>`),
  // Pessoa a levantar-se da cadeira (meio agachada)
  levantar: () => svg(cadeira() + CHAO + `<circle cx="132" cy="109" r="12" fill="currentColor" opacity=".35"/>` +
    traco('M128,94 L96,50') + traco('M128,94 L70,104 L78,184 M62,184 L80,184') + traco('M100,58 L58,72') + cabeca(86, 36, 13)),
  // Marchar sentado (joelho levantado)
  marcha: () => svg(sentado({ pernas: 'M140,118 L100,122 L102,184 M88,184 L104,184 M140,118 L88,88 L74,140 M58,140 L76,140', bracos: 'M134,66 L150,104' }) +
    `<g color="currentColor">${SETA}${traco('M28,160 L28,100', 7, 'currentColor').replace('/>', ' marker-end="url(#sa)"/>')}</g>`),
  // Pessoa sentada a bater num balão no ar
  balao: () => svg(sentado({ bracos: 'M134,64 L98,58' }) +
    `<ellipse cx="104" cy="22" rx="0" ry="0"/><g transform="translate(0,-2)"><path d="M78,6 C58,6 50,26 56,42 C62,58 76,64 82,66 L80,72 L88,72 L86,66 C94,62 104,52 104,34 C104,16 94,6 78,6 Z" fill="currentColor"/></g>` +
    traco('M84,72 C80,90 92,100 86,118', 2.5, '#6B7280')),
  // Semáforo
  semaforo: () => svg(`<rect x="66" y="10" width="68" height="160" rx="16" fill="${INK}"/><rect x="94" y="170" width="12" height="20" fill="${INK}"/>
    <circle cx="100" cy="42" r="20" fill="#DC2626"/><circle cx="100" cy="90" r="20" fill="#F59E0B"/><circle cx="100" cy="138" r="20" fill="#16A34A"/>`),
  // Roda de pessoas a passar uma bola
  roda: () => {
    const pts = [...Array(7)].map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 7; return [100 + 70 * Math.cos(a), 100 + 70 * Math.sin(a)]; });
    return svg(SETA + `<circle cx="100" cy="100" r="70" fill="none" stroke="#E5E7EB" stroke-width="4" stroke-dasharray="6 8"/>` +
      pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="15" fill="${INK}"/>`).join('') +
      `<g color="currentColor">${traco(`M${pts[0][0] + 12},${pts[0][1] + 18} Q105,80 ${pts[2][0] - 18},${pts[2][1] - 4}`, 6, 'currentColor').replace('/>', ' marker-end="url(#sa)"/>')}</g>` +
      `<circle cx="100" cy="100" r="16" fill="currentColor"/>`);
  },
  // Folha de calendário
  calendario: () => svg(`<rect x="30" y="30" width="140" height="150" rx="14" fill="#fff" stroke="${INK}" stroke-width="6"/><rect x="30" y="30" width="140" height="42" rx="14" fill="currentColor"/>
    <rect x="30" y="58" width="140" height="14" fill="currentColor"/><path d="M62,18 L62,44 M138,18 L138,44" stroke="${INK}" stroke-width="8" stroke-linecap="round"/>
    <text x="100" y="150" text-anchor="middle" font-family="Fraunces, serif" font-weight="700" font-size="70" fill="${INK}">17</text>`),
  // Aspas de provérbio com espaço em branco
  proverbio: () => svg(`<text x="20" y="110" font-family="Fraunces, serif" font-weight="700" font-size="150" fill="currentColor">“</text>
    <rect x="40" y="120" width="120" height="12" rx="6" fill="#D1D5DB"/><rect x="40" y="146" width="70" height="12" rx="6" fill="#D1D5DB"/><rect x="118" y="146" width="42" height="12" rx="6" fill="currentColor"/>`),
  // Pessoa sentada a escrever letras no ar com o dedo
  letrasAr: () => svg(sentado({ bracos: 'M134,64 L96,52' }) + SETA +
    `<g color="currentColor">${traco('M30,80 L48,20 L66,80 M38,56 L58,56', 7, 'currentColor')}</g>`)
};

module.exports = { ILU, svg };
