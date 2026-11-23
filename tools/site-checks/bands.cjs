const sharp = require(require('path').join(process.cwd(),'node_modules','sharp'));
(async()=>{ const f=process.argv[2]; const {data,info}=await sharp(f).raw().toBuffer({resolveWithObject:true});
 const ch=info.channels,H=info.height,W=info.width,B=500; const out=[];
 for(let y0=0;y0<H;y0+=B){let red=0,n=0;for(let y=y0;y<Math.min(H,y0+B);y++)for(let x=0;x<W;x++){const i=(y*W+x)*ch;n++; if(data[i]==255&&data[i+1]==0&&data[i+2]==0)red++;} out.push(`${y0}:${(100*red/n).toFixed(1)}%`);} console.log(out.join('  ')); })();
