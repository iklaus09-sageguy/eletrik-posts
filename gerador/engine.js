/* ================= MOTOR PADRÃO ELETRIK =================
   Requer: timeline.js (window.TL) + lib.js. A página chama VIDEO({...}). */
const TL = window.TL, D = TL.D, S = TL.S, E = TL.E;
const s = (i,f=0) => S[i] + f*(E[i]-S[i]);
const e = i => E[i];
const HANDLE = '@eletrikhub';

/* ---------- marca d'água: logo empilhada, topo/centro ---------- */
function watermark2(){
  return `<g id="wm" opacity=".92">
    <g transform="translate(${540-663*.13},${26-184*.13}) scale(.13)">${logoMark()}</g>
    <text x="540" y="160" text-anchor="middle" class="r9" font-size="46" fill="${K.navy}" letter-spacing="-1">Eletri<tspan fill="${K.orange}">K</tspan></text>
    <text x="540" y="190" text-anchor="middle" class="f6" font-size="24" fill="${K.blue}">${HANDLE}</text></g>`;
}

/* ---------- componentes base ---------- */
const T = (x,y,size,txt,o={}) => `<text x="${x}" y="${y}" text-anchor="${o.a||'middle'}" class="${o.c||'f'}" font-size="${size}" fill="${o.fill||K.navy}" ${o.extra||''}>${txt}</text>`;
const O = s2 => `<tspan fill="${K.orange}">${s2}</tspan>`;
function box(w,h,title,inner,hc){
  const hh = title?74:0;
  return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="28" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/>
   <rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="28" fill="#fff" class="ol"/>
   ${title?`<path d="M${-w/2+28},${-h/2} H${w/2-28} Q${w/2},${-h/2} ${w/2},${-h/2+28} V${-h/2+hh} H${-w/2} V${-h/2+28} Q${-w/2},${-h/2} ${-w/2+28},${-h/2} Z" fill="${hc||K.blue}" class="ol"/>
   ${T(0,-h/2+52,44,title,{fill:'#fff'})}`:''}
   ${inner}`;
}
const pill = (w,h,txt,bg,fg='#fff',size=44) => `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="${h/2}" fill="${bg}" class="ol"/>${T(0,size*.36,size,txt,{fill:fg})}`;
const sub = (id,x,y,inner) => `<g transform="translate(${x},${y})"><g id="${id}">${inner}</g></g>`;
const stampSVG = (l1,l2,col=K.orange,w=800) => `<rect x="${-w/2}" y="-95" width="${w}" height="190" rx="18" fill="#fff" stroke="${col}" stroke-width="14"/>${T(0,-15,58,l1,{c:'r9',fill:col})}${T(0,58,58,l2,{c:'r9',fill:col})}`;
const starBadge = (big,small) => `<path d="${star(14,150,110)}" fill="${K.orange}" class="ol"/>${T(0,10,110,big,{c:'r9',fill:'#fff'})}${T(0,62,34,small,{fill:'#fff'})}`;
const bigNum = n => `<circle r="120" fill="${K.orange}" class="ol"/>${T(0,52,150,n,{c:'r9',fill:'#fff'})}`;
const bigQ = () => T(0,0,230,'?',{c:'r9',fill:K.orange,extra:`paint-order="stroke" stroke="${K.navy}" stroke-width="14"`});
function row(i,t1,t2,ic){
  return `<rect x="-450" y="-72" width="900" height="144" rx="26" fill="${K.navy}" opacity=".18" transform="translate(8,10)"/>
    <rect x="-450" y="-72" width="900" height="144" rx="26" fill="#fff" class="ol"/>
    <circle cx="-385" cy="0" r="40" fill="${K.blue}" class="ol"/>${T(-385,18,48,i,{c:'r9',fill:'#fff'})}
    <g transform="translate(-255,0) scale(.72)">${ic}</g>
    ${T(-140,-8,52,t1,{a:'start'})}${T(-140,40,32,t2,{a:'start',c:'f6',fill:'#55608A'})}`;
}
const proCard = () => box(760,380,null,`<g transform="translate(0,-60)">${helmetIcon()}</g>${T(0,70,60,'eletricista')}${T(0,135,60,'qualificado',{fill:K.orange})}`+sub('proOk',300,-120,badgeOK('proOkb')));
const previewCard = (n,label,ic) => box(300,320,null,`<circle cx="0" cy="-110" r="40" fill="${K.orange}" class="ol"/>${T(0,-94,46,n,{c:'r9',fill:'#fff'})}${ic}${T(0,135,40,label)}`);

/* ---------- ícones ---------- */
const breakerIcon = (p='') => `<rect x="-50" y="-80" width="100" height="160" rx="16" fill="#EEF1FA" class="ol"/><rect x="-27" y="-50" width="54" height="100" rx="9" fill="${K.navy}" class="ol"/><g id="${p}lev"><rect x="-21" y="-45" width="42" height="45" rx="8" fill="${K.orange}" class="ol" style="stroke-width:4"/></g>`;
const showerIcon = () => `<path d="M-60,-70 Q-60,-110 -10,-110 H40" fill="none" stroke="${K.navy}" stroke-width="16" stroke-linecap="round"/>
  <path d="M-95,-45 Q-60,-85 -25,-45 Z" fill="#C9D3F0" class="ol"/>
  ${[-80,-60,-40].map((x,i)=>`<path d="M${x},-20 L${x-6+i*6},20" stroke="#4FC3F7" stroke-width="8" stroke-linecap="round"/>`).join('')}`;
const alertIcon = (sz=1) => `<g transform="scale(${sz})"><path d="M0,-70 L72,60 H-72 Z" fill="${K.orange}" class="ol"/><path d="M0,-25 V18" stroke="#fff" stroke-width="14" stroke-linecap="round"/><circle cx="0" cy="40" r="8" fill="#fff"/></g>`;
const helmetIcon = () => `<path d="M-70,10 Q-68,-66 0,-68 Q68,-66 70,10 Z" fill="${K.orange}" class="ol"/><path d="M-88,12 H88" stroke="${K.navy}" stroke-width="16" stroke-linecap="round"/><path d="M-86,12 H86" stroke="${K.orange}" stroke-width="7" stroke-linecap="round"/>`;
const sparkIcon = () => `<path d="M-60,30 H-15 M60,30 H15" stroke="${K.navy}" stroke-width="14" stroke-linecap="round"/><path d="M-15,30 H-6 M15,30 H6" stroke="#D9822B" stroke-width="8" stroke-linecap="round"/><path d="${star(8,34,14)}" fill="#FFD84D" class="ol" style="stroke-width:4" transform="translate(0,-5)"/>`;
const screwIcon = () => `<circle r="40" fill="#C9D3F0" class="ol"/><path d="M-24,-10 L24,10 M-10,24 L10,-24" stroke="${K.navy}" stroke-width="9" stroke-linecap="round"/>
  <path d="M-30,-55 q8,-12 0,-24 M0,-60 q8,-12 0,-24 M30,-55 q8,-12 0,-24" stroke="${K.orange}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
// tomada padrão brasileiro (NBR 14136). amp 10 ou 20; id opcional p/ animar derretimento
function outletIcon(id='', amp=10){
  const r = amp===20?15:11;
  return `<rect x="-110" y="-110" width="220" height="220" rx="30" fill="#fff" class="ol"/>
   <path d="M-62,-36 L-36,-72 H36 L62,-36 V36 L36,72 H-36 L-62,36 Z" fill="#E8ECF6" class="ol" style="stroke-width:4"/>
   <circle cx="-30" cy="8" r="${r}" fill="${K.navy}"/><circle cx="30" cy="8" r="${r}" fill="${K.navy}"/><circle cx="0" cy="-26" r="${r}" fill="${K.navy}"/>
   ${id?`<g id="${id}_melt" opacity="0">
     <path d="M-70,-40 Q-30,-70 10,-50 Q60,-60 66,-10 Q80,40 40,60 Q30,100 10,72 Q-20,90 -40,60 Q-80,40 -70,-40 Z" fill="#6B3E2A" opacity=".75"/>
     <path d="M-40,-10 Q-10,-30 30,-10 Q50,20 20,40 Q-20,50 -40,20 Z" fill="#2A1A12" opacity=".8"/>
     <path d="M10,72 Q8,100 14,118" stroke="#6B3E2A" stroke-width="12" stroke-linecap="round" opacity=".8"/></g>`:''}
   ${T(0,98,30,amp+' A',{c:'r9',fill: amp===20?K.orange:K.blue})}`;
}
const plugIcon = (thick=false) => { const w = thick?14:9;
  return `<rect x="${-30-w/2}" y="-120" width="${w}" height="50" rx="3" fill="#B9C2DA" class="ol" style="stroke-width:3"/><rect x="${30-w/2}" y="-120" width="${w}" height="50" rx="3" fill="#B9C2DA" class="ol" style="stroke-width:3"/>
   <rect x="${-w/2}" y="-130" width="${w}" height="60" rx="3" fill="#B9C2DA" class="ol" style="stroke-width:3"/>
   <path d="M-62,-74 H62 L50,40 Q48,60 28,60 H-28 Q-48,60 -50,40 Z" fill="#fff" class="ol"/>
   <path d="M0,60 Q0,110 30,140" stroke="${K.navy}" stroke-width="16" fill="none" stroke-linecap="round"/>
   ${T(0,8,30,thick?'20 A':'10 A',{c:'r9',fill:thick?K.orange:K.blue})}`; };
const adapterT = () => `<rect x="-120" y="-60" width="240" height="120" rx="24" fill="#fff" class="ol"/><rect x="-40" y="50" width="80" height="80" rx="14" fill="#fff" class="ol"/>
   ${[-70,0,70].map(x=>`<g transform="translate(${x},0)"><circle cx="-14" cy="6" r="6" fill="${K.navy}"/><circle cx="14" cy="6" r="6" fill="${K.navy}"/><circle cx="0" cy="-12" r="6" fill="${K.navy}"/></g>`).join('')}
   ${T(0,110,34,'T',{c:'r9',fill:K.orange})}`;
const fryerIcon = (dark=false) => { const c = dark?K.navy:'#2B2F3A', c2 = dark?K.navy:'#4A5063';
  return `<path d="M-90,-110 Q-90,-140 -60,-140 H60 Q90,-140 90,-110 L100,110 Q100,130 80,130 H-80 Q-100,130 -100,110 Z" fill="${c}" class="ol"/>
   ${dark?'':`<circle cx="0" cy="-95" r="20" fill="${K.orange}" class="ol" style="stroke-width:4"/><rect x="-70" y="-40" width="140" height="130" rx="18" fill="${c2}" class="ol" style="stroke-width:4"/>
   <rect x="-50" y="-10" width="100" height="20" rx="10" fill="#B9C2DA"/><rect x="-60" y="96" width="120" height="18" rx="6" fill="#B9C2DA"/>`}`; };
const microIcon = () => `<rect x="-140" y="-90" width="280" height="180" rx="20" fill="#E8ECF6" class="ol"/><rect x="-115" y="-65" width="170" height="130" rx="12" fill="#2B2F3A" class="ol" style="stroke-width:4"/>
   <rect x="75" y="-60" width="45" height="22" rx="5" fill="#4FC3F7"/>${[0,1,2].map(i=>`<circle cx="97" cy="${-10+i*28}" r="9" fill="${K.navy}"/>`).join('')}`;
const dropIcon = () => `<path d="M0,-60 Q45,0 40,25 Q35,60 0,60 Q-35,60 -40,25 Q-45,0 0,-60 Z" fill="#3D8BFF" class="ol"/><path d="M-15,15 Q-15,35 0,40" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>`;
const personIcon = (c=K.blue) => `<circle cx="0" cy="-70" r="34" fill="${K.skin}" class="ol"/><path d="M-50,60 Q-50,-20 0,-25 Q50,-20 50,60 Z" fill="${c}" class="ol"/>`;
const thermoIcon = () => `<rect x="-18" y="-90" width="36" height="130" rx="18" fill="#fff" class="ol"/><circle cx="0" cy="58" r="34" fill="#E0301E" class="ol"/><rect x="-8" y="-50" width="16" height="100" rx="8" fill="#E0301E"/>`;
const stainIcon = () => `<path d="M-60,-20 Q-40,-60 0,-50 Q50,-60 60,-10 Q70,40 20,50 Q-30,70 -55,30 Z" fill="#6B3E2A" class="ol"/><path d="M-20,-60 q8,-14 0,-28 M10,-64 q8,-14 0,-28" stroke="#9AA3BD" stroke-width="8" fill="none" stroke-linecap="round"/>`;
const loosePlug = () => `<g transform="rotate(25) translate(10,30) scale(.55)">${plugIcon(false)}</g><path d="M-70,-60 l-14,-14 M-50,-74 l-6,-20" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>`;

function pipe(){
  return `<rect id="pipeGlow" x="-430" y="-60" width="860" height="120" rx="60" fill="#FF3B1A" opacity="0" filter="url(#blur)"/>
   <rect id="pipeOut" x="-420" width="840" rx="20" fill="#B9C2DA" class="ol"/>
   <rect id="pipeWater" x="-410" width="820" rx="14" fill="#3D8BFF"/>
   <path id="pipeFlow" d="M-400,0 H400" stroke="#BFE0FF" stroke-linecap="round" fill="none"/>
   <rect x="-440" y="-70" width="34" height="140" rx="8" fill="#8F9AB8" class="ol"/><rect x="406" y="-70" width="34" height="140" rx="8" fill="#8F9AB8" class="ol"/>
   <g id="pipeHeat" opacity="0">${[-200,-60,80,220].map(x=>`<path class="hwv" d="M${x},-80 q12,-18 0,-36 q-12,-18 0,-36" fill="none" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>`).join('')}</g>`;
}
function setPipe(t, th, speed, heat){
  $('pipeOut').setAttribute('y',-th/2-12); $('pipeOut').setAttribute('height',th+24);
  $('pipeWater').setAttribute('y',-th/2); $('pipeWater').setAttribute('height',th);
  $('pipeFlow').setAttribute('stroke-width',th*.22); $('pipeFlow').setAttribute('stroke-dasharray','50 60'); $('pipeFlow').setAttribute('stroke-dashoffset',-t*260*speed);
  $('pipeGlow').setAttribute('opacity',heat*.8); $('pipeHeat').setAttribute('opacity',heat);
  document.querySelectorAll('.hwv').forEach((p,i)=>{ const q=((t*1.6+i*.27)%1); p.setAttribute('transform',`translate(0,${-q*40})`); p.style.opacity=Math.sin(q*Math.PI); });
}
function heatWaves(id, xs, y){ return `<g id="${id}">${xs.map(x=>`<path class="hw_${id}" d="M${x},${y} q12,-18 0,-36 q-12,-18 0,-36" fill="none" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>`).join('')}</g>`; }
function animWaves(id, t, op){ $(id).style.opacity=op; document.querySelectorAll('.hw_'+id).forEach((p,i)=>{ const q=((t*1.6+i*.31)%1); p.setAttribute('transform',`translate(0,${-q*40})`); p.style.opacity=Math.sin(q*Math.PI); }); }
function smokeSVG(id,n=4){ return `<g id="${id}">${Array.from({length:n},(_,i)=>`<circle id="${id}${i}" r="20" fill="#9AA3BD" class="ol" style="stroke-width:4"/>`).join('')}</g>`; }
function animSmoke(id,t,t0,cx,cy,n=4,spread=60,rise=170){
  for(let i=0;i<n;i++){ const ph=((((t-t0)*0.8+i/n)%1)+1)%1, c=$(id+i); const on=t>t0;
    c.setAttribute('cx',cx+Math.sin(i*2.1)*spread+ph*20); c.setAttribute('cy',cy-ph*rise); c.setAttribute('r',14+ph*30); c.style.opacity=on?(1-ph)*.9:0; }
}
function phone(){
  const tiles=[['#1630D8',breakerIcon('ph1_')],['#FF6A13',`<g transform="scale(.9)">${showerIcon()}</g>`],['#0B1A4F',`<path d="${BOLT}" fill="#FFD84D" transform="scale(2.2)"/>`],
               ['#FF6A13',`<g transform="scale(.8)">${sparkIcon()}</g>`],['#0B1A4F',`<g transform="scale(.7)">${outletIcon('',10)}</g>`],['#1630D8',`<g transform="scale(.6)">${helmetIcon()}</g>`]];
  let g=''; tiles.forEach(([c,ic],i)=>{ const x=-135+(i%3)*135, y=150+Math.floor(i/3)*170;
    g+=`<g id="tile${i}" transform="translate(${x},${y})"><rect x="-62" y="-78" width="124" height="156" rx="14" fill="${c}"/><g transform="scale(.62)">${ic}</g><path d="M-10,52 L10,62 L-10,72 Z" fill="#fff" opacity=".9"/></g>`; });
  return `<rect x="-232" y="-372" width="464" height="744" rx="56" fill="${K.navy}" opacity=".2" transform="translate(12,14)"/>
   <rect x="-232" y="-372" width="464" height="744" rx="56" fill="${K.navy}" class="ol"/>
   <rect x="-210" y="-350" width="420" height="700" rx="40" fill="#fff"/>
   <rect x="-60" y="-340" width="120" height="22" rx="11" fill="${K.navy}"/>
   <circle cx="-140" cy="-215" r="58" fill="${K.cream}" stroke="${K.orange}" stroke-width="7"/>
   <g transform="translate(${-140-663*.09},${-215-510*.09}) scale(.09)">${logoMark()}</g>
   ${T(-68,-228,34,HANDLE,{a:'start',c:'r8'})}
   ${T(-68,-194,21,'Elétrica sem complicação',{a:'start',c:'f6',fill:'#55608A'})}
   <g id="followBtn" transform="translate(65,-135)">
     <rect id="fbBg" x="-130" y="-34" width="260" height="68" rx="20" fill="${K.blue}"/>
     <text id="fbTx" y="13" text-anchor="middle" class="f" font-size="38" fill="#fff">+ Seguir</text></g>
   <path d="M-190,-75 H190" stroke="#E3E8F6" stroke-width="4"/>
   ${g}
   <g id="hand" transform="translate(140,-60)"><path d="M0,0 L0,-62 Q0,-76 12,-76 Q24,-76 24,-62 L24,-28 L54,-22 Q72,-18 70,2 L62,48 H8 Z" fill="${K.skin}" class="ol"/></g>`;
}
const shareSVG = () => `<circle r="62" fill="${K.orange}" class="ol"/><path d="M-30,4 L30,-26 L12,32 L2,10 Z" fill="#fff" class="ol" style="stroke-width:4"/>`+sub('shareTx',0,96,pill(260,62,'compartilhe',K.navy,'#fff',34));
const bubbleSVG = (l1,l2) => `<path d="M-230,-95 H230 Q262,-95 262,-63 V63 Q262,95 230,95 H-120 L-190,150 L-170,95 H-230 Q-262,95 -262,63 V-63 Q-262,-95 -230,-95 Z" fill="#fff" class="ol"/>${T(0,-10,54,l1)}${T(0,56,54,l2)}`;
function coverBase(){ return scene().replace(/id="sp(\d)"/g,'id="csp$1"').replace('id="skyG"','id="skyG2"').replace('url(#skyG)','url(#skyG2)').replace('id="blur"','id="blur2"')
  + `<g transform="translate(${540-663*.2},${40-184*.2}) scale(.2)">${logoMark()}</g>` + T(540,270,70,'Eletri'+O('K'),{c:'r9',extra:'letter-spacing="-1"'}); }
const coverBanner = (txt) => `<g transform="translate(540,1520) rotate(-3)"><rect x="-420" y="-72" width="840" height="144" rx="22" fill="${K.orange}" stroke="#fff" stroke-width="8"/>${T(0,26,68,txt,{c:'r9',fill:'#fff'})}</g>${T(540,1690,52,'entenda em 1 minuto',{fill:'#fff'})}`;
const kikoCover = () => `<g transform="translate(190,1290) scale(1.1)">${person('cvk',{shirt:K.blue,pants:'#2A3566',hat:'helmet',collar:K.orange,logo:true,shoes:K.orange})}</g>`;

/* ---------- elementos e eventos ---------- */
const SPEC = [], EVENTS = [];
function el(id, html, o){ SPEC.push(Object.assign({id, html, x:540, y:620, s:1, r:0}, o)); }
let V = null;

function setText(tid, txt, kw){
  const t=$(tid); t.textContent=''; const i = kw ? txt.indexOf(kw) : -1;
  const parts = i<0 ? [[txt,0]] : [[txt.slice(0,i),0],[kw,1],[txt.slice(i+kw.length),0]];
  parts.forEach(([s2,k])=>{ if(!s2) return; const sp=document.createElementNS(svg.namespaceURI,'tspan'); sp.textContent=s2; if(k) sp.setAttribute('fill',K.orange); t.appendChild(sp); });
}
function build(){
  svg.innerHTML = `${scene()}
  <g id="stage">${SPEC.map(o=>`<g id="${o.id}">${o.html}</g>`).join('')}
    <g id="burst"><path d="${star(12,120,80)}" fill="${K.orange}" class="ol"/><text id="burstTx" y="16" text-anchor="middle" class="r9" font-size="46" fill="#fff" transform="rotate(-8)">CLACK!</text></g>
    <g id="palpW">${person('palp',{shirt:'#8A5CF6',pants:'#3E4C7E',hat:'hair'})}</g>
    <g id="kikoW">${person('kiko',{shirt:K.blue,pants:'#2A3566',hat:'helmet',collar:K.orange,logo:true,shoes:K.orange})}</g>
  </g>
  <g id="title"><rect id="title_bg" rx="34" fill="${K.navy}"/><text id="title_t" x="540" y="305" text-anchor="middle" class="f" font-size="64" fill="#fff"></text></g>
  <g id="cap"><text id="cap_t" x="540" y="1585" text-anchor="middle" class="f" font-size="76" fill="#fff" paint-order="stroke" stroke="${K.navy}" stroke-width="14" stroke-linejoin="round"></text></g>
  ${watermark2()}
  <rect x="40" y="1872" width="1000" height="10" rx="5" fill="#fff" opacity=".18"/>
  <rect id="prog" x="40" y="1872" width="0" height="10" rx="5" fill="${K.orange}"/>
  <g id="cover">${V.cover()}</g>`;
  SPEC.forEach(o=>{ if(o.in!=null && o.sfx!=='none') EVENTS.push([o.in, o.sfx||'pop']); (o.subs||[]).forEach(([_,ti])=>EVENTS.push([ti,'pop'])); });
  V.clacks.forEach(c=>EVENTS.push([c[0], c[5]||'clack']));
  V.titles.forEach(tt=>{ if(tt[2]) EVENTS.push([tt[0],'swish']); });
  if(V.palp) EVENTS.push([V.palp.in,'whoosh']);
  EVENTS.push([V.kikoIn,'whoosh'],[0.5,'whoosh'],[s(V.cta,.62),'tap'],[s(V.cta,.66),'ding'], ...(V.events||[]));
}

let lastCap=-1, lastTitle=-1;
const inL = (t,a,b) => t>=S[a] && t<(b+1<S.length?S[b+1]:D+1);
function posOf(o,t){ let x=o.x,y=o.y,sc=o.s; (o.moves||[]).forEach(([tm,mx,my,ms])=>{ const p=eio(C(tm,tm+.5,t)); x=lerp(x,mx,p); y=lerp(y,my,p); sc=lerp(sc,ms,p); }); return [x,y,sc]; }
function idle(id,t,o){
  $(id+'_body').setAttribute('transform',`translate(0,${Math.sin((t+o)*3.2)*3})`);
  const sy=((t+o)%2.7)<.12?.15:1; $(id+'_eyes').setAttribute('transform',`translate(0,-256) scale(1,${sy}) translate(0,256)`);
}
function render(t){
  const cv = 1 - C(.5,.65,t); $('cover').style.opacity=cv; show($('cover'),cv);
  [[120,420],[330,170],[610,520],[880,560],[760,330],[200,640]].forEach(([x,y],i)=>{
    const k=.5+.5*Math.max(0,Math.sin(t*2.4+i*1.7)); $('sp'+i).setAttribute('transform',`translate(${x},${y}) rotate(${t*30+i*20}) scale(${k})`); $('sp'+i).style.opacity=.85*k; });
  $('prog').setAttribute('width', 1000*Math.min(1,t/D));
  // título
  const ti = V.titles.findIndex(c=>t>=c[0]&&t<c[1]);
  if(ti!==lastTitle){ lastTitle=ti; if(ti>=0 && V.titles[ti][2]){ setText('title_t',V.titles[ti][2],V.titles[ti][3]); const bb=$('title_t').getBBox();
    const r=$('title_bg'); r.setAttribute('x',bb.x-36); r.setAttribute('y',bb.y-10); r.setAttribute('width',bb.width+72); r.setAttribute('height',bb.height+20);} }
  if(ti>=0 && V.titles[ti][2]){ const a=V.titles[ti][0], p=eb(C(a,a+.3,t)); $('title').style.opacity=Math.min(1,p*2); show($('title'),1);
    $('title').setAttribute('transform',`translate(540,285) scale(${p}) translate(-540,-285)`); } else show($('title'),0);
  // legenda
  const ci = TL.CAPS.findIndex(c=>t>=c[0]&&t<c[1]);
  if(ci!==lastCap && ci>=0){ setText('cap_t',TL.CAPS[ci][2],TL.CAPS[ci][3]); lastCap=ci; const ct=$('cap_t'); ct.setAttribute('font-size',76); const w=ct.getComputedTextLength(); if(w>960) ct.setAttribute('font-size',(76*960/w).toFixed(1)); }
  if(ci>=0){ const a=TL.CAPS[ci][0], k=.88+.12*eb(C(a,a+.18,t)); show($('cap'),1); $('cap').setAttribute('transform',`translate(540,1560) scale(${k}) translate(-540,-1560)`); } else show($('cap'),0);
  // elementos
  SPEC.forEach(o=>{ const k=pop(t,o.in,o.out); const [x,y,sc]=posOf(o,t); place(o.id,x,y,k*sc,o.r);
    (o.subs||[]).forEach(([sid,tin,tout])=>{ const q=pop(t,tin,tout); $(sid).setAttribute('transform',`scale(${q})`); show($(sid),q); }); });
  // burst (CLACK/ZAP...)
  let bk=0, bc=null; V.clacks.forEach(c=>{ const q=pop(t,c[0],c[0]+.42); if(q>bk){bk=q;bc=c;} });
  if(bc){ place('burst',bc[1],bc[2],bk,bc[3]); $('burstTx').textContent=bc[4]||'CLACK!'; } else show($('burst'),0);
  // palpiteiro
  if(V.palp){ const pin=eo(C(V.palp.in,V.palp.in+.4,t)), pout=eio(C(V.palp.out,V.palp.out+.35,t));
    place('palpW', lerp(-200,200,pin)-pout*450, 1290, 1.15); show($('palpW'), pin>0&&pout<1?1:0);
    $('palp_armR').setAttribute('transform',`translate(52,-182) rotate(${lerp(-18,-160,eo(C(V.palp.in+.4,V.palp.in+.65,t))*(1-C(V.palp.out,V.palp.out+.1,t)))})`); idle('palp',t,0);
  } else show($('palpW'),0);
  // Kiko
  const kin=eo(C(V.kikoIn,V.kikoIn+.4,t)); place('kikoW', lerp(1300,880,kin), 1290, 1.1); show($('kikoW'),kin>0?1:0);
  const pointing = V.point.some(([a,b])=>inL(t,a,b)), worry = V.worry.some(([a,b])=>inL(t,a,b)), waving = t>=S[V.cta];
  let ang=-18; if(pointing) ang=-165; if(waving) ang=-150+Math.sin(t*9)*18;
  $('kiko_armR').setAttribute('transform',`translate(52,-182) rotate(${ang})`);
  $('kiko_smile').style.display=worry?'none':''; $('kiko_oh').style.display=worry?'':'none';
  $('kiko_sweat').style.display=worry?'':'none'; $('kiko_sweat').setAttribute('transform',`translate(0,${(t*40)%30})`);
  idle('kiko',t,1.3);
  // CTA: mão toca "Seguir"
  const c=V.cta, hp=eio(C(s(c,.4),s(c,.6),t)), tap=C(s(c,.6),s(c,.64),t)-C(s(c,.66),s(c,.7),t);
  $('hand').setAttribute('transform',`translate(${lerp(260,90,hp)},${lerp(300,-110,hp)}) scale(${1-tap*.12})`);
  $('hand').style.opacity = C(s(c,.35),s(c,.45),t)*(1-C(s(c+1),s(c+1)+.3,t));
  const fol=t>s(c,.64); $('fbBg').setAttribute('fill',fol?'#E3E8F6':K.blue); $('fbTx').textContent=fol?'Seguindo ✓':'+ Seguir'; $('fbTx').setAttribute('fill',fol?K.navy:'#fff');
  for(let i=0;i<6;i++){ const q=pop(t,s(c,.1)+i*.08); $('tile'+i).setAttribute('transform',`translate(${-135+(i%3)*135},${150+Math.floor(i/3)*170}) scale(${q})`); }
  V.fx(t);
}

function VIDEO(cfg){
  V = cfg; cfg.specs();
  el('phoneW', phone(), {x:520,y:640, in:s(cfg.cta), out:null, sfx:'boing'});
  el('share', shareSVG(), {x:905,y:640, in:s(cfg.cta+1,.1), out:null, subs:[['shareTx',s(cfg.cta+1,.3)]]});
  build();
  window.ready = Promise.all(['700 50px Fredoka','600 50px Fredoka','800 50px Rubik','900 50px Rubik'].map(f=>document.fonts.load(f)))
   .then(()=>document.fonts.ready).then(()=>{ (cfg.init||(()=>{}))();
     [0,1,2,3,4,5].forEach(i=>{ const c2=$('csp'+i); if(c2){ c2.setAttribute('transform',`translate(${[120,330,610,880,760,200][i]},${[420,170,520,560,330,640][i]}) scale(.7)`); c2.style.opacity=.7; } });
     render(0); return true; });
  window.render = render; window.DURATION = D;
  window.AUDIO = () => ({events: EVENTS.map(([t,k])=>[+t.toFixed(3),k]).sort((a,b)=>a[0]-b[0]), drop: cfg.drop, sizzle: cfg.sizzle, D});
}
