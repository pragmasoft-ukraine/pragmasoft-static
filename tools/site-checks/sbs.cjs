const sharp = require(require('path').join(process.cwd(),'node_modules','sharp'));
(async()=>{ const [,,a,b,top,h,out]=process.argv; const T=+top,Hh=+h;
 const A=await sharp(a).extract({left:0,top:T,width:(await sharp(a).metadata()).width,height:Hh}).png().toBuffer();
 const B=await sharp(b).extract({left:0,top:T,width:(await sharp(b).metadata()).width,height:Hh}).png().toBuffer();
 const w=(await sharp(A).metadata()).width;
 await sharp({create:{width:w*2+20,height:Hh,channels:3,background:'#ff00ff'}}).composite([{input:A,left:0,top:0},{input:B,left:w+20,top:0}]).png().toFile(out); })();
