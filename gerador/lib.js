/* ================= IDENTIDADE ELETRIK =================
   Cores tiradas da logo: azul royal, marinho, laranja.   */
const K = {
  blue:'#1630D8', navy:'#0B1A4F', orange:'#FF6A13', cream:'#FBF8F1',
  sky1:'#CBDAFF', sky2:'#F4F7FF', city:'#B4C4F5', city2:'#9DB0EE', walk:'#E3E8F6',
  white:'#FFFFFF', skin:'#F3C9A2', ok:'#1630D8', bad:'#FF6A13'
};


/* ================= helpers ================= */
const svg = document.getElementById('svg');
const $ = id => document.getElementById(id);
const C = (a,b,t) => Math.min(1, Math.max(0, (t-a)/(b-a)));
const eo = x => 1 - Math.pow(1-x, 3);
const eio = x => x<.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2;
const eb = x => { if(x<=0) return 0; if(x>=1) return 1; const c1=1.9,c3=c1+1; return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2); };
const lerp = (a,b,x) => a+(b-a)*x;
const mixc = (c1,c2,x) => { const h=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)); const a=h(c1),b=h(c2);
  return 'rgb('+a.map((v,i)=>Math.round(lerp(v,b[i],x))).join(',')+')'; };
let seed = 7; const rnd = () => (seed = (seed*16807) % 2147483647) / 2147483647;
const pop = (t, tin, tout) => { let s = eb(C(tin, tin+.38, t)); if (tout!=null) s *= 1 - eo(C(tout, tout+.22, t)); return Math.max(0,s); };
const show = (el, s) => { el.style.display = s<=0.001 ? 'none' : ''; };
const place = (id, x, y, s=1, r=0) => { const el=$(id); el.setAttribute('transform',`translate(${x},${y}) rotate(${r}) scale(${s})`); show(el,s); };

/* ================= LOGO (redesenho vetorial) ================= */
function logoMark(){ // caixa 1254x1254 da logo original
  return `<path d="M296,184 H512 V432 L760,184 H1030 L728,522 L1020,836 H735 L518,598 V836 H296 Z" fill="${K.blue}"/>
   <path d="M296,548 H380 Q420,548 448,582 Q470,606 500,590 L690,505 Q740,340 820,318 Q870,306 925,306" fill="none" stroke="${K.cream}" stroke-width="44" stroke-linejoin="round"/>
   <path d="M440,566 Q476,612 506,545 Q540,420 580,470 Q615,560 660,525 L702,505" fill="none" stroke="${K.orange}" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function wordmark(x,y,size){
  return `<text x="${x}" y="${y}" class="r9" font-size="${size}" fill="${K.navy}" letter-spacing="-1">Eletri<tspan fill="${K.orange}">K</tspan></text>`;
}
function watermark(){ // marca d'água fixa (canto superior esquerdo)
  return `<g id="wm" transform="translate(30,32) scale(1.18)" opacity=".93">
    <rect width="300" height="96" rx="26" fill="${K.cream}" stroke="${K.navy}" stroke-width="4"/>
    <g transform="translate(6,6) scale(.0675)">${logoMark()}</g>
    ${wordmark(92,52,40)}
    <text x="94" y="80" class="f6" font-size="23" fill="${K.blue}">@eletrik</text></g>`;
}

/* ================= personagens ================= */
function person(id, o){
  return `<g id="${id}">
   <ellipse cx="0" cy="4" rx="72" ry="12" fill="${K.navy}" opacity=".18"/>
   <g id="${id}_body">
    <rect x="-40" y="-100" width="34" height="100" rx="14" fill="${o.pants}" class="ol"/>
    <rect x="6" y="-100" width="34" height="100" rx="14" fill="${o.pants}" class="ol"/>
    <ellipse cx="-26" cy="-4" rx="27" ry="13" fill="${o.shoes||K.white}" class="ol"/>
    <ellipse cx="26" cy="-4" rx="27" ry="13" fill="${o.shoes||K.white}" class="ol"/>
    <g id="${id}_armL" transform="translate(-52,-182) rotate(18)"><path d="M0,0 L0,78" stroke="${K.navy}" stroke-width="32" stroke-linecap="round"/><path d="M0,0 L0,78" stroke="${o.shirt}" stroke-width="20" stroke-linecap="round"/><circle cx="0" cy="88" r="15" fill="${K.skin}" class="ol"/></g>
    <g id="${id}_armR" transform="translate(52,-182) rotate(-18)"><path d="M0,0 L0,78" stroke="${K.navy}" stroke-width="32" stroke-linecap="round"/><path d="M0,0 L0,78" stroke="${o.shirt}" stroke-width="20" stroke-linecap="round"/><circle cx="0" cy="88" r="15" fill="${K.skin}" class="ol"/></g>
    <path d="M-58,-92 L-52,-176 Q-50,-196 -28,-198 L28,-198 Q50,-196 52,-176 L58,-92 Z" fill="${o.shirt}" class="ol"/>
    ${o.collar?`<path d="M-26,-197 L0,-172 L26,-197" fill="none" stroke="${o.collar}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`:''}
    ${o.logo?`<g transform="translate(-26,-160) scale(.042)"><rect x="200" y="100" width="900" height="820" rx="160" fill="${K.cream}"/>${logoMark()}</g>`:''}
    <g id="${id}_head">
     <rect x="-12" y="-214" width="24" height="22" fill="${K.skin}" class="ol"/>
     <circle cx="0" cy="-262" r="58" fill="${K.skin}" class="ol"/>
     ${o.hat==='hair'?`<path d="M-58,-262 Q-62,-326 -10,-330 Q40,-336 58,-290 Q30,-300 8,-292 Q-20,-312 -40,-282 Z" fill="#6B4226" class="ol"/>`:''}
     ${o.hat==='helmet'?`<path d="M-62,-272 Q-60,-340 0,-342 Q60,-340 62,-272 Z" fill="${K.orange}" class="ol"/><path d="M-78,-272 L78,-272" stroke="${K.navy}" stroke-width="15" stroke-linecap="round"/><path d="M-76,-272 L76,-272" stroke="${K.orange}" stroke-width="6" stroke-linecap="round"/><path d="M0,-338 L0,-284" stroke="${K.navy}" stroke-width="5" opacity=".3"/><circle cx="-30" cy="-308" r="8" fill="#fff" opacity=".55"/>`:''}
     <g id="${id}_eyes"><ellipse cx="-20" cy="-256" rx="6.5" ry="9" fill="${K.navy}"/><ellipse cx="20" cy="-256" rx="6.5" ry="9" fill="${K.navy}"/></g>
     <circle cx="-36" cy="-234" r="10" fill="#FF8C6B" opacity=".4"/><circle cx="36" cy="-234" r="10" fill="#FF8C6B" opacity=".4"/>
     <path id="${id}_smile" d="M-16,-232 Q0,-216 16,-232" fill="none" stroke="${K.navy}" stroke-width="5" stroke-linecap="round"/>
     <ellipse id="${id}_oh" cx="0" cy="-226" rx="11" ry="14" fill="#7A2E2A" class="ol" style="stroke-width:4;display:none"/>
     <path id="${id}_sweat" d="M58,-300 Q48,-282 58,-276 Q68,-282 58,-300 Z" fill="#7EC8F2" class="ol" style="stroke-width:3;display:none"/>
    </g>
   </g></g>`;
}

/* ================= cenário ================= */
function star(n, r1, r2){ let d=''; for(let i=0;i<n*2;i++){ const r=i%2?r2:r1, a=Math.PI*i/n-Math.PI/2; d+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+','+(r*Math.sin(a)).toFixed(1);} return d+'Z'; }
const SPARK = 'M0,-22 Q3,-3 22,0 Q3,3 0,22 Q-3,3 -22,0 Q-3,-3 0,-22 Z';
const BOLT = 'M10,-30 L-14,4 L2,4 L-6,30 L18,-6 L2,-6 Z';

function city(){
  let s=''; seed=21; let x=-20;
  while(x<1100){ const w=90+rnd()*90, h=180+rnd()*300, c = rnd()>.5?K.city:K.city2;
    s+=`<rect x="${x}" y="${1235-h}" width="${w}" height="${h}" fill="${c}"/>`;
    for(let wy=1235-h+30; wy<1200; wy+=48) for(let wx=x+18; wx<x+w-26; wx+=36) if(rnd()>.35) s+=`<rect x="${wx}" y="${wy}" width="16" height="22" rx="3" fill="${K.sky2}" opacity=".7"/>`;
    x+=w+8; }
  return s;
}
function scene(){
  return `<defs>
    <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${K.sky1}"/><stop offset="1" stop-color="${K.sky2}"/></linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <rect width="1080" height="1920" fill="url(#skyG)"/>
  <g id="sparks">${[0,1,2,3,4,5].map(i=>`<path id="sp${i}" d="${SPARK}" fill="#fff"/>`).join('')}</g>
  <g opacity=".9">${city()}</g>
  <rect x="992" y="760" width="26" height="480" fill="#8A6A52" class="ol" style="stroke-width:4"/>
  <rect x="930" y="790" width="150" height="18" rx="4" fill="#8A6A52" class="ol" style="stroke-width:4"/>
  <path d="M945,790 Q470,880 -20,800" fill="none" stroke="${K.navy}" stroke-width="5"/>
  <path d="M1065,790 Q520,900 -20,840" fill="none" stroke="${K.navy}" stroke-width="5"/>
  <rect x="-10" y="1232" width="1100" height="74" fill="${K.walk}" class="ol"/>
  <path d="M0,1269 H1080" stroke="#C9D2EC" stroke-width="3"/>
  <rect x="-10" y="1306" width="1100" height="22" fill="#C4CDE8" class="ol" style="stroke-width:4"/>
  <rect x="-10" y="1328" width="1100" height="600" fill="${K.navy}"/>
  ${[0,1,2,3,4,5].map(i=>`<rect x="${i*220-60}" y="1760" width="120" height="16" rx="8" fill="${K.orange}" opacity=".85"/>`).join('')}`;
}

function house(){
  return `<g id="house">
   <rect x="58" y="-330" width="40" height="90" fill="#6C7BB8" class="ol"/>
   <rect x="-135" y="-205" width="270" height="205" fill="${K.white}" class="ol"/>
   <path d="M-170,-196 L0,-340 L170,-196 Z" fill="${K.blue}" class="ol"/>
   <rect x="-32" y="-118" width="64" height="118" rx="6" fill="${K.orange}" class="ol"/><circle cx="18" cy="-58" r="5" fill="${K.navy}"/>
   <g id="glow"><circle cx="-80" cy="-128" r="62" fill="#FFD84D" opacity=".3"/><circle cx="80" cy="-128" r="62" fill="#FFD84D" opacity=".3"/></g>
   <rect id="win1" x="-110" y="-160" width="60" height="60" rx="6" fill="#FFE07A" class="ol"/>
   <rect id="win2" x="50" y="-160" width="60" height="60" rx="6" fill="#FFE07A" class="ol"/>
   <path d="M-80,-160 V-100 M-110,-130 H-50 M80,-160 V-100 M50,-130 H110" stroke="${K.navy}" stroke-width="4"/>
  </g>`;
}

function quadro(p=''){
  return `<g id="${p}quadro">
   <rect x="-240" y="-175" width="480" height="350" rx="28" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/>
   <rect x="-240" y="-175" width="480" height="350" rx="28" fill="${K.white}" class="ol"/>
   <path d="M-212,-175 H212 Q240,-175 240,-147 V-100 H-240 V-147 Q-240,-175 -212,-175 Z" fill="${K.blue}" class="ol"/>
   <path d="${BOLT}" fill="${K.orange}" transform="translate(-150,-138) scale(.75)"/>
   <text x="15" y="-125" text-anchor="middle" class="f" font-size="38" fill="#fff">QUADRO DE LUZ</text>
   <g transform="translate(-110,32)">
    <rect x="-62" y="-100" width="124" height="200" rx="18" fill="#EEF1FA" class="ol"/>
    <rect x="-34" y="-62" width="68" height="124" rx="10" fill="${K.navy}" class="ol"/>
    <g id="${p}lev"><rect x="-27" y="-56" width="54" height="56" rx="9" fill="${K.orange}" class="ol" style="stroke-width:4"/></g>
    <circle cx="0" cy="-84" r="7" fill="#B4C4F5" class="ol" style="stroke-width:3"/><circle cx="0" cy="84" r="7" fill="#B4C4F5" class="ol" style="stroke-width:3"/>
   </g>
   <text id="${p}lab20" x="105" y="40" text-anchor="middle" class="r9" font-size="92" fill="${K.navy}">20A</text>
   <path id="${p}strike" d="M25,-10 L185,30" stroke="${K.orange}" stroke-width="12" stroke-linecap="round" fill="none"/>
   <text id="${p}lab40" x="105" y="40" text-anchor="middle" class="r9" font-size="92" fill="${K.orange}">40A</text>
   <g id="${p}stOn" transform="translate(105,112)"><rect x="-90" y="-28" width="180" height="56" rx="28" fill="${K.blue}" class="ol" style="stroke-width:4"/><text y="11" text-anchor="middle" class="f" font-size="30" fill="#fff">LIGADO</text></g>
   <g id="${p}stOff" transform="translate(105,112)"><rect x="-104" y="-28" width="208" height="56" rx="28" fill="${K.orange}" class="ol" style="stroke-width:4"/><text y="11" text-anchor="middle" class="f" font-size="30" fill="#fff">DESARMOU!</text></g>
  </g>`;
}
function tv(){ return `<g transform="translate(0,25)">
   <rect x="-110" y="-72" width="220" height="144" rx="16" fill="${K.navy}" class="ol"/>
   <rect x="-92" y="-56" width="184" height="112" rx="8" fill="#8FB4FF" class="ol" style="stroke-width:4"/>
   <path d="M-60,-30 L-30,-46" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".7"/>
   <path d="M-40,72 L-56,100 M40,72 L56,100" stroke="${K.navy}" stroke-width="8" stroke-linecap="round"/></g>`; }
function card(id, title, inner){
  return `<g id="${id}">
   <rect x="-200" y="-190" width="400" height="380" rx="28" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/>
   <rect x="-200" y="-190" width="400" height="380" rx="28" fill="${K.white}" class="ol"/>
   <path d="M-172,-190 H172 Q200,-190 200,-162 V-112 H-200 V-162 Q-200,-190 -172,-190 Z" fill="${K.blue}" class="ol"/>
   <text id="${id}_ttl" x="0" y="-136" text-anchor="middle" class="f" font-size="46" fill="#fff">${title}</text>
   ${inner}</g>`;
}
function cable(){ return `<g id="cab" transform="translate(0,30)">
   <g id="heat" opacity="0">
    <path id="hw1" d="M-70,-40 q12,-18 0,-36 q-12,-18 0,-36" fill="none" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>
    <path id="hw2" d="M0,-50 q12,-18 0,-36 q-12,-18 0,-36" fill="none" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>
    <path id="hw3" d="M70,-40 q12,-18 0,-36 q-12,-18 0,-36" fill="none" stroke="${K.orange}" stroke-width="8" stroke-linecap="round"/>
   </g>
   <path id="cabGlow" d="M-140,30 C-60,-30 60,90 140,30" fill="none" stroke="#FF3B1A" stroke-width="64" stroke-linecap="round" opacity="0" filter="url(#blur)"/>
   <path d="M-140,30 C-60,-30 60,90 140,30" fill="none" stroke="${K.navy}" stroke-width="46" stroke-linecap="round"/>
   <path id="cabIns" d="M-140,30 C-60,-30 60,90 140,30" fill="none" stroke="#4FC3F7" stroke-width="34" stroke-linecap="round"/>
   <path d="M-120,14 C-60,-30 40,60 110,22" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".4"/>
   <circle id="cu1" cx="-142" cy="30" r="13" fill="#D9822B" class="ol" style="stroke-width:4"/><circle id="cu2" cx="142" cy="30" r="13" fill="#D9822B" class="ol" style="stroke-width:4"/>
  </g>`; }
const badgeX = id => `<g id="${id}"><circle r="46" fill="${K.bad}" class="ol"/><path d="M-18,-18 L18,18 M18,-18 L-18,18" stroke="#fff" stroke-width="12" stroke-linecap="round"/></g>`;
const badgeOK = id => `<g id="${id}"><circle r="46" fill="${K.ok}" class="ol"/><path d="M-20,2 L-5,18 L22,-16" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>`;

