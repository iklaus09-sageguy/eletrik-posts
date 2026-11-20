/* EletriK - Carro elétrico em casa */
const car = (id) => `<path d="M-200,40 V0 Q-200,-20 -170,-24 L-120,-30 L-70,-90 Q-60,-100 -40,-100 H70 Q90,-100 100,-90 L150,-30 L180,-24 Q205,-20 205,0 V40 Z" fill="${K.blue}" class="ol"/>
  <path d="M-110,-34 L-64,-84 H-10 V-34 Z M10,-34 V-84 H66 L106,-34 Z" fill="#BFD6FF" class="ol" style="stroke-width:4"/><circle cx="-120" cy="44" r="36" fill="${K.navy}"/><circle cx="-120" cy="44" r="14" fill="#B9C2DA"/><circle cx="130" cy="44" r="36" fill="${K.navy}"/><circle cx="130" cy="44" r="14" fill="#B9C2DA"/>
  <path d="${BOLT}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(30,0) scale(.9)"/><g id="${id}_bat"></g>`;
const wallbox = () => `<rect x="-70" y="-110" width="140" height="220" rx="22" fill="#fff" class="ol"/><rect x="-46" y="-80" width="92" height="50" rx="8" fill="#C8F0D4" class="ol" style="stroke-width:4"/>${T(0,-46,26,'7 kW',{c:'r9'})}<circle cx="0" cy="30" r="22" fill="${K.blue}" class="ol" style="stroke-width:4"/><path d="M0,110 Q0,170 60,190" stroke="${K.navy}" stroke-width="14" fill="none"/>`;
const battery = (id) => `<rect x="-140" y="-50" width="280" height="100" rx="18" fill="#fff" class="ol"/><rect x="140" y="-20" width="20" height="40" rx="6" fill="${K.navy}"/><rect id="${id}" x="-128" y="-38" width="0" height="76" rx="10" fill="#22A55A"/>`;
const pump = () => `<rect x="-60" y="-110" width="120" height="220" rx="16" fill="#E0301E" class="ol"/><rect x="-40" y="-85" width="80" height="50" rx="8" fill="#fff" class="ol" style="stroke-width:4"/><path d="M60,-40 H90 V60 Q90,80 70,80" stroke="${K.navy}" stroke-width="10" fill="none"/>`;
const meterBox = () => `<rect x="-90" y="-120" width="180" height="240" rx="16" fill="#C9D3F0" class="ol"/><rect x="-60" y="-90" width="120" height="80" rx="10" fill="#fff" class="ol" style="stroke-width:4"/>${T(0,-40,30,'kWh',{c:'r9'})}<g transform="translate(0,55) scale(.45)">${breakerIcon('mbb')}</g>`;
const garage = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#E3E8F6" class="ol"/>
  <rect x="-280" y="140" width="560" height="90" fill="#B9C2DA"/><g transform="translate(-30,80) scale(.95)">${car('cg')}</g><g transform="translate(-210,-80) scale(.5)">${outletIcon('',10)}</g>
  <path id="extG" d="M-210,-40 Q-220,60 -150,90" stroke="#E0301E" stroke-width="10" fill="none" stroke-dasharray="16 10"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'CARRO ELÉTRICO') + T(540,495,78,'NA TOMADA DE CASA?') +
    T(540,640,104,'PEDE PROJETO!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${garage()}</g>` + kikoCover() + coverBanner('R$ 32 x R$ 150'),
  titles: [[0,2,'Carregar na garagem?','garagem'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,9,'Formas de carregar','carregar'],
    [10,15,'Vamos fazer uma conta','conta'],[16,20,'O que a casa precisa','precisa'],[21,22,'Regra de ouro','ouro'],[23,23,'Resumindo',''],[24,25,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 24,
  point: [[3,3],[6,6],[10,10],[16,16],[21,21]], worry: [[4,5]],
  drop: [[s(5),s(6)]], sizzle: [], events: [],
  specs: () => {
    el('gar', garage(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Puxa uma extensão','e pronto!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('praTag', pill(320,84,'prático?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('horas', box(840,440,null,`<g transform="translate(-200,30) scale(.7)">${car('ch')}</g>${T(60,-40,46,'corrente alta',{a:'start'})}${T(60,30,46,'por',{a:'start'})}${T(140,30,60,'HORAS',{a:'start',c:'r9',fill:K.orange})}${T(40,100,28,'o que mais exige da casa',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('ext', stampSVG('EXTENSÃO?','NEM PENSAR',K.orange,600), {x:540,y:620,r:-6, in:s(5,.2), out:s(6), sfx:'buzz'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','A instalação',`<g transform="translate(0,25) scale(.45)">${breakerIcon('pvi')}</g>`],['3','x Gasolina',`<g transform="translate(0,25) scale(.5)">${pump()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cTom', card('cTomC','tomada comum', `<g transform="translate(0,0) scale(.75)">${outletIcon('',10)}</g>${T(0,140,52,'≈ 2 kW',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(8), out:s(10)});
    el('cWb', card('cWbC','wallbox', `<g transform="translate(0,-10) scale(.7)">${wallbox()}</g>${T(0,150,52,'≈ 7 kW',{c:'r9',fill:'#22A55A'})}`), {x:790,y:640, in:s(9), out:s(10)});
    el('bat', box(880,460,'carregar 40 kWh',`<g transform="translate(0,-40)">${battery('bL')}</g>`+sub('t1',-200,110,pill(340,76,'tomada: ~20 h',K.orange,'#fff',38))+sub('t2',200,110,pill(340,76,'wallbox: ~6 h','#22A55A','#fff',38))), {x:540,y:620, in:s(11), out:s(13), subs:[['t1',s(12)],['t2',s(12,.5)]]});
    el('cCar', card('cCarC','carga elétrica', `<g transform="translate(0,-10) scale(.6)">${car('cc')}</g>${T(0,140,64,'R$ 32',{c:'r9',fill:'#22A55A'})}`), {x:290,y:640, in:s(13), out:s(16)});
    el('cGas', card('cGasC','gasolina, 300 km', `<g transform="translate(0,-10) scale(.6)">${pump()}</g>${T(0,140,64,'R$ 150',{c:'r9',fill:'#E0301E'})}`), {x:790,y:640, in:s(14), out:s(16)});
    el('km', pill(480,80,'≈ 300 km de autonomia',K.blue,'#fff',38), {x:510,y:910, in:s(14,.3), out:s(15)});
    el('aprox', pill(620,80,'valores aproximados · variam por carro',K.navy,'#fff',34), {x:500,y:910, in:s(15), out:s(16)});
    el('i0', row(1,'Circuito exclusivo','fio e disjuntor dimensionados',`<g transform="scale(.6)">${breakerIcon('i0b')}</g>`), {x:540,y:450, in:s(17), out:s(21)});
    el('i1', row(2,'DR e aterramento','proteção de verdade',`<g transform="scale(.7)"><path d="M0,-50 V0 M-50,0 H50 M-32,20 H32 M-14,40 H14" stroke="#22A55A" stroke-width="12" stroke-linecap="round" fill="none"/></g>`), {x:540,y:620, in:s(18), out:s(21)});
    el('i2', row(3,'Padrão de entrada','às vezes, aumento de carga',`<g transform="scale(.4)">${meterBox()}</g>`), {x:540,y:790, in:s(19), out:s(21)});
    el('nbr', pill(480,84,'norma: NBR 17019',K.orange,'#fff',44), {x:510,y:960, in:s(20), out:s(21), sfx:'ding'});
    el('rule', box(880,460,null,`<g transform="translate(-250,20) scale(.85)">${wallbox()}</g>${T(-130,-50,50,'carro elétrico pede',{a:'start'})}${T(-130,40,90,'PROJETO',{a:'start',c:'r9',fill:K.orange})}${T(-130,110,34,'circuito exclusivo, sem extensão',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('pro', proCard(), {x:540,y:620, in:s(22), out:s(23), subs:[['proOk',s(22,.6)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.55)">${car('rc')}</g>${T(0,40,52,'bem mais barato que gasolina,')}${T(0,120,52,'mas a instalação tem que')}${T(0,195,64,'estar à ALTURA',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(23), out:s(24)});
  },
  fx: (t) => {
    $('extG').setAttribute('stroke-dashoffset', -t*60);
    $('bL').setAttribute('width', 256*C(s(11),s(12,.9),t));
  },
});
