// Descarrega as fotografias escolhidas (Wikimedia Commons) e guarda os créditos/licenças.
// As escolhas estão em fotos/escolhidas.json: { "chave": "File:Nome do ficheiro.jpg", ... }
// Uso: node fotos/descarregar.js   (precisa de acesso a commons.wikimedia.org e upload.wikimedia.org)
const fs = require('fs'), path = require('path'), sharp = require('sharp');
const { get, thumb, info, LIVRE } = require('./wm');
const DIR = path.join(__dirname, 'img');

(async () => {
  const escolhidas = JSON.parse(fs.readFileSync(path.join(__dirname, 'escolhidas.json'), 'utf8'));
  const credFile = path.join(__dirname, 'creditos.json');
  const creditos = fs.existsSync(credFile) ? JSON.parse(fs.readFileSync(credFile, 'utf8')) : {};
  fs.mkdirSync(DIR, { recursive: true });
  for (const [k, t] of Object.entries(escolhidas)) {
    if (creditos[k] && creditos[k].titulo === t && fs.existsSync(path.join(DIR, k + '.jpg'))) continue;
    const meta = await info(t);
    const livre = meta.licencas.find(LIVRE);
    if (!livre) { console.warn(`✗ ${k}: licença não reconhecida como livre (${meta.licencas.join(', ') || 'nenhuma'}) — escolha outra`); continue; }
    let buf;
    try { buf = Buffer.from(await (await get(thumb(t, 1280))).arrayBuffer()); }
    catch { buf = Buffer.from(await (await get(thumb(t, 960))).arrayBuffer()); }
    await sharp(buf).rotate().resize(1280, 1280, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 82 }).toFile(path.join(DIR, k + '.jpg'));
    creditos[k] = { titulo: t, autor: meta.autor, licenca: livre, pagina: meta.pagina };
    fs.writeFileSync(credFile, JSON.stringify(creditos, null, 1));
    console.log('✓', k, '—', livre);
  }
})().catch(e => { console.error(e); process.exit(1); });
