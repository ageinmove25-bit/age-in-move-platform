// Procura fotografias no Wikimedia Commons e cria folhas de contacto numeradas para escolher.
// Uso: node fotos/procurar.js <pasta-saida> "chave|termo de pesquisa" ...
const fs = require('fs'), path = require('path'), sharp = require('sharp');
const { get, search, thumb } = require('./wm');
const blank = c => sharp({ create: { width: 300, height: 225, channels: 3, background: c } }).png().toBuffer();
(async () => {
  const [out, ...qs] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
  const resFile = path.join(out, 'resultados.json');
  const all = fs.existsSync(resFile) ? JSON.parse(fs.readFileSync(resFile, 'utf8')) : {};
  for (const item of qs) {
    const [key, q] = item.split('|');
    if (all[key] && fs.existsSync(path.join(out, key + '.jpg'))) continue;
    const res = await search(q); all[key] = res;
    const tiles = [];
    for (const [i, t] of res.entries()) {
      try {
        const buf = Buffer.from(await (await get(thumb(t, 330))).arrayBuffer());
        const img = await sharp(buf).resize(300, 225, { fit: 'cover' }).toBuffer();
        const lab = Buffer.from(`<svg width="300" height="225"><rect width="40" height="34" fill="black"/><text x="10" y="26" font-size="24" fill="yellow" font-family="sans-serif">${i}</text></svg>`);
        tiles.push(await sharp(img).composite([{ input: lab }]).png().toBuffer());
      } catch (e) { process.stderr.write(`  ✗ ${t}: ${e.message}\n`); tiles.push(await blank('#ccc')); }
    }
    while (tiles.length < 8) tiles.push(await blank('#fff'));
    await sharp({ create: { width: 1200, height: 490, channels: 3, background: '#fff' } })
      .composite([...tiles.map((t, i) => ({ input: t, left: (i % 4) * 300, top: 40 + Math.floor(i / 4) * 225 })),
        { input: Buffer.from(`<svg width="1200" height="40"><text x="10" y="28" font-size="24" font-family="sans-serif">${key}: ${q}</text></svg>`), left: 0, top: 0 }])
      .jpeg({ quality: 70 }).toFile(path.join(out, key + '.jpg'));
    fs.writeFileSync(resFile, JSON.stringify(all, null, 1));
    console.log(key, res.length);
  }
})();
