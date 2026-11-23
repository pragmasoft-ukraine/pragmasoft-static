const sharp = require(require('path').join(process.cwd(),'node_modules','sharp'));
const fs = require('fs'), path = require('path');
const [,, A, B, OUT] = process.argv;
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const dir of fs.readdirSync(A)) for (const f of fs.readdirSync(path.join(A, dir))) {
    const pa = path.join(A, dir, f), pb = path.join(B, dir, f);
    if (!fs.existsSync(pb)) { console.log(dir, f, 'MISSING'); continue; }
    const [ia, ib] = [sharp(pa), sharp(pb)];
    const [ma, mb] = [await ia.metadata(), await ib.metadata()];
    const w = Math.min(ma.width, mb.width), h = Math.min(ma.height, mb.height);
    const ra = await sharp(pa).extract({left:0,top:0,width:w,height:h}).removeAlpha().raw().toBuffer();
    const rb = await sharp(pb).extract({left:0,top:0,width:w,height:h}).removeAlpha().raw().toBuffer();
    let diff = 0; const out = Buffer.alloc(w*h*3, 255);
    for (let i = 0; i < w*h; i++) { const d = Math.abs(ra[i*3]-rb[i*3])+Math.abs(ra[i*3+1]-rb[i*3+1])+Math.abs(ra[i*3+2]-rb[i*3+2]); if (d > 48) { diff++; out[i*3]=255; out[i*3+1]=0; out[i*3+2]=0; } else { out[i*3]=ra[i*3]>>1|128; out[i*3+1]=ra[i*3+1]>>1|128; out[i*3+2]=ra[i*3+2]>>1|128; } }
    console.log(dir.padEnd(18), f.padEnd(18), `size ${ma.width}x${ma.height} -> ${mb.width}x${mb.height}`.padEnd(32), `diff ${(100*diff/(w*h)).toFixed(2)}%`);
    await sharp(out, {raw:{width:w,height:h,channels:3}}).png().toFile(path.join(OUT, `${dir}_${f}`));
  }
})();
