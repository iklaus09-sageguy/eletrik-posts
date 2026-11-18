// uso: node render.js <arquivo.html> test "t1,t2"  |  node render.js <arquivo.html> full
const {chromium}=require('playwright'); const path=require('path'); const fs=require('fs');
(async()=>{
  const [file,mode,times]=process.argv.slice(2); const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:1080,height:1920}});
  const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('file://'+path.resolve(file)); await p.evaluate(()=>window.ready);
  if(errs.length) console.log(errs);
  const audio = await p.evaluate(()=>window.AUDIO?window.AUDIO():null); const NAME=await p.evaluate(()=>window.NAME||'video'); fs.mkdirSync('out/'+NAME,{recursive:true}); if(audio) fs.writeFileSync('out/'+NAME+'/events.json', JSON.stringify(audio));
  if(mode==='test'){
    fs.mkdirSync('test',{recursive:true});
    for(const t of times.split(',').map(Number)){ await p.evaluate(t=>render(t),t); await p.screenshot({path:`test/t${t}.png`}); }
  } else {
    fs.rmSync('frames',{recursive:true,force:true}); fs.mkdirSync('frames');
    const N=Math.ceil((await p.evaluate(()=>window.DURATION))*30);
    for(let i=0;i<N;i++){ await p.evaluate(t=>render(t),i/30); await p.screenshot({path:`frames/${String(i).padStart(5,'0')}.png`}); }
  }
  console.log('errors:',errs.length); await b.close();
})();
