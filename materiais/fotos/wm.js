// Utilitários para o Wikimedia Commons sem usar a API (que está limitada nesta rede):
// lê a página de pesquisa e a página de cada ficheiro, e vai buscar as miniaturas a upload.wikimedia.org.
const crypto = require('crypto');
const UA = 'AgeInMoveMaterials/1.0 (educational materials generator)';
const sleep = ms => new Promise(r => setTimeout(r, ms));
// Usa o curl (o fetch do Node não funciona bem através do proxy desta rede).
const { execFile } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
function curl(url) {
  const tmp = path.join(os.tmpdir(), 'wm-' + process.pid + '-' + Math.random().toString(36).slice(2));
  return new Promise((res, rej) => execFile('curl', ['-sS', '--max-time', '60', '-A', UA, '-o', tmp, '-w', '%{http_code} %header{retry-after}', url], (err, out) => {
    if (err) return rej(err);
    const [code, ra] = out.trim().split(' ');
    const body = fs.existsSync(tmp) ? fs.readFileSync(tmp) : Buffer.alloc(0);
    fs.rmSync(tmp, { force: true });
    res({ status: +code, retry: +ra || 0, body });
  }));
}
async function get(url) {
  for (let i = 0; i < 8; i++) {
    const r = await curl(url);
    if (r.status === 200) { await sleep(800); return { ok: true, status: 200, arrayBuffer: async () => r.body, text: async () => r.body.toString('utf8'), json: async () => JSON.parse(r.body) }; }
    if (r.status !== 429 && r.status < 500) throw new Error(r.status + ' ' + url);
    const wait = Math.max(r.retry, 5) * 1000 + 1000 * (i + 1);
    process.stderr.write(`  (${r.status}, a aguardar ${wait / 1000}s)\n`); await sleep(wait);
  }
  throw new Error('demasiadas tentativas ' + url);
}
const dec = s => s.replace(/&#8211;/g, '–').replace(/&#95;/g, '_').replace(/&amp;/g, '&').replace(/&#039;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&#160;/g, ' ').replace(/&#58;/g, ':');
const strip = s => dec((s || '').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

// "File:Nome do ficheiro.jpg" -> URL da miniatura com a largura pedida
function thumb(title, w) {
  const name = title.replace(/^File:/, '').replace(/ /g, '_');
  const h = crypto.createHash('md5').update(name).digest('hex');
  const enc = encodeURIComponent(name);
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${h[0]}/${h.slice(0, 2)}/${enc}/${w}px-${enc}`;
}
async function search(q, n = 8) {
  const u = 'https://commons.wikimedia.org/w/index.php?' + new URLSearchParams({ search: q + ' filetype:bitmap', title: 'Special:Search', ns6: '1', fulltext: '1', limit: '30' });
  const html = await (await get(u)).text();
  const titles = [...html.matchAll(/mw-search-result-heading"><a href="\/wiki\/(File:[^"]+)"/g)].map(m => decodeURIComponent(m[1]).replace(/_/g, ' '));
  return titles.filter(t => /\.(jpe?g|png)$/i.test(t)).slice(0, n);
}
async function info(title) {
  const html = await (await get('https://commons.wikimedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_')))).text();
  const lic = [...html.matchAll(/licensetpl&#95;short" style="display:none;">([^<]*)</g)].map(m => strip(m[1]));
  const aut = html.match(/id="fileinfotpl&#95;aut"[^>]*>[^<]*<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/);
  return { titulo: title, licencas: [...new Set(lic)], autor: aut ? strip(aut[1]).slice(0, 120) : 'Desconhecido', pagina: 'https://commons.wikimedia.org/wiki/' + encodeURIComponent(title.replace(/ /g, '_')) };
}
const LIVRE = l => /^(cc0|public domain|pd\b|cc by(-sa)? \d)/i.test(l);
module.exports = { get, sleep, thumb, search, info, LIVRE };
