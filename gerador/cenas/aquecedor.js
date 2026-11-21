/* EletriK - Aquecedor elétrico */
const oilH = (id) => `<rect x="-130" y="-110" width="260" height="200" rx="20" fill="#E3E8F6" class="ol"/>${[-100,-60,-20,20,60,100].map(x=>`<rect x="${x-14}" y="-95" width="28" height="170" rx="12" fill="#FFB98A" class="ol" style="stroke-width:3"/>`).join('')}<path d="M-100,90 V115 M100,90 V115" stroke="${K.navy}" stroke-width="12" stroke-linecap="round"/>${heatWaves(id,[-60,0,60],-120)}`;
const fanH = (id) => `<rect x="-90" y="-120" width="180" height="230" rx="24" fill="#fff" class="ol"/><rect x="-60" y="-90" width="120" height="120" rx="14" fill="#FF7A1A" class="ol" style="stroke-width:4"/>${[-30,0,30].map(y=>`<path d="M-50,${y-30} H50" stroke="#FFD7B8" stroke-width="6"/>`).join('')}<circle cx="0" cy="70" r="16" fill="${K.navy}"/>${heatWaves(id,[-30,0,30],-140)}`;
const haloH = (id) => `<rect x="-90" y="-120" width="180" height="230" rx="24" fill="#3A4152" class="ol"/>${[-70,-35,0].map(y=>`<rect x="-60" y="${y}" width="120" height="18" rx="9" fill="#FFC21A"/>`).join('')}<path d="M-40,110 L-60,140 M40,110 L60,140" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/>${heatWaves(id,[-30,0,30],-140)}`;
const curtain = () => `<rect x="-30" y="-150" width="60" height="300" rx="10" fill="#B97ACB" class="ol"/><path d="M-20,-150 V150 M0,-150 V150 M20,-150 V150" stroke="#9A5EAD" stroke-width="5"/>`;
const room = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#EEF1FA" class="ol"/>
  ${[0,1,2,3].map(i=>`<path d="M${-200+i*120},-200 l-20,30" stroke="#9DB0EE" stroke-width="6" stroke-linecap="round"/>`).join('')}<g transform="translate(0,90) scale(.95)">${oilH('rh')}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'AQUECEDOR ELÉTRICO') + T(540,495,78,'QUANTO CUSTA?') +
    T(540,640,100,'≈ R$ 144/MÊS',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${room()}</g>` + kikoCover() + coverBanner('E O PERIGO NA TOMADA'),
  init: () => animWaves('rh',0,1),
  titles: [[0,2,'Aquecedor pesa?','pesa'],[3,4,'Mas atenção!','atenção'],[5,5,'Perigo na tomada','tomada'],[6,6,'Fica até o final!','final'],[7,8,'Óleo, ventilador...','Óleo'],
    [9,12,'Vamos fazer uma conta','conta'],[13,16,'Como gastar menos','menos'],[17,20,'O perigo na tomada','perigo'],[21,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[9,9],[13,13],[21,21]], worry: [[5,5],[18,20]], drop: [[s(18),s(21)]], sizzle: [[s(18),s(19)]], events: [],
  specs: () => {
    el('quarto', room(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('O de óleo','gasta menos!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('senTag', pill(360,84,'faz sentido?',K.navy,'#fff',44), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('igual', box(880,460,'mesma potência = mesmo gasto',`${[['óleo',oilH('i0')],['ventilador',fanH('i1')],['halógeno',haloH('i2')]].map(([l,ic],i)=>`<g transform="translate(${-280+i*280},10) scale(.6)">${ic}</g>${T(-280+i*280,150,34,l,{c:'r8'})}`).join('')}${T(0,200,30,'1.500 W = 1.500 W',{c:'r9',fill:K.orange})}`), {x:540,y:630, in:s(4), out:s(5)});
    el('tom', box(440,460,'cuidado aqui',`<g transform="translate(0,40) scale(1.05)">${outletIcon('',10)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('tomQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','Gastar menos',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv2')}</g>`],['3','A tomada',`<g transform="translate(0,30) scale(.5)">${outletIcon('',20)}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cOil', card('cOilC','óleo', `<g transform="translate(0,20) scale(.7)">${oilH('co')}</g>${T(0,150,36,'lento, segura o calor',{c:'r8',fill:K.blue})}`), {x:290,y:640, in:s(7), out:s(9)});
    el('cFan', card('cFanC','ventilador', `<g transform="translate(0,20) scale(.7)">${fanH('cf')}</g>${T(0,150,36,'rápido, esfria rápido',{c:'r8',fill:K.orange})}`), {x:790,y:640, in:s(8), out:s(9)});
    el('uso', box(860,440,'aquecedor de 1.500 W',`${T(0,-50,60,'4 horas por noite')}`+sub('u1',0,60,T(0,0,100,'= 6 kWh',{c:'r9',fill:K.blue}))+sub('u2',0,150,pill(400,70,'no mês ≈ 180 kWh',K.navy,'#fff',38))), {x:540,y:620, in:s(10), out:s(12), subs:[['u1',s(11)],['u2',s(11,.6)]]});
    el('reais', box(860,440,'a R$ 0,80 o kWh',`${sub('r1',0,20,T(0,0,130,'≈ R$ 144',{c:'r9',fill:K.orange}))}${T(0,110,48,'por mês, pra UM cômodo')}${T(0,170,28,'valores ilustrativos',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(12), out:s(13), subs:[['r1',s(12,.3)]]});
    el('g0', row(1,'Usa o termostato','desliga quando o quarto aquece',`<g transform="scale(.7)">${thermoIcon()}</g>`), {x:540,y:450, in:s(14), out:s(17)});
    el('g1', row(2,'Porta e janela fechadas','e frestas vedadas',`<rect x="-50" y="-50" width="100" height="100" rx="8" fill="#8FB4FF" class="ol"/><path d="M0,-50 V50 M-50,0 H50" stroke="${K.navy}" stroke-width="5"/>`), {x:540,y:620, in:s(15), out:s(17)});
    el('g2', row(3,'Liga antes de deitar','desliga ou usa o timer',`<circle r="44" fill="#fff" class="ol"/><path d="M0,0 V-30 M0,0 L20,10" stroke="${K.navy}" stroke-width="7" stroke-linecap="round"/>`), {x:540,y:790, in:s(16), out:s(17)});
    el('amp', box(860,460,'1.500 W em 127 V',`<g transform="translate(-240,20) scale(.9)">${outletIcon('oA',10)}</g>${heatWaves('ahw',[-290,-240,-190],-110)}${T(-90,-30,52,'quase',{a:'start'})}${T(60,-30,72,'12 A',{a:'start',c:'r9',fill:'#E0301E'})}${T(-90,50,44,'a tomada comum',{a:'start'})}${T(-90,110,44,'aguenta 10',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(17), out:s(19)});
    el('t20', box(860,460,'lembra da tomada derretendo?',`<g transform="translate(-230,20) scale(.9)">${outletIcon('',20)}</g>${T(-90,-20,50,'tomada de 20 A',{a:'start',c:'r9',fill:K.orange})}${T(-90,50,46,'ou 220 V',{a:'start'})}${T(-90,120,46,'direto, sem T',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('dist', box(860,460,'distância segura',`<g transform="translate(-270,10) scale(.8)">${curtain()}</g><path d="M-200,40 H120 M-176,20 L-200,40 L-176,60 M96,20 L120,40 L96,60" stroke="${K.orange}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${T(-40,10,64,'1 metro',{c:'r9',fill:K.orange})}<g transform="translate(250,30) scale(.55)">${oilH('dh')}</g>`+sub('nunca',0,170,pill(540,66,'NUNCA seca roupa em cima','#E0301E','#fff',34))), {x:540,y:620, in:s(20), out:s(21), subs:[['nunca',s(20,.5)]]});
    const RU=['Termostato','Ambiente fechado','Tomada certa','Distância segura'];
    el('rule', box(880,540,null,RU.map((r,i)=>sub('rl'+i,0,-165+i*110,`<rect x="-400" y="-44" width="800" height="88" rx="20" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.65)">${badgeOK('rlb'+i)}</g>${T(-270,14,44,r,{a:'start'})}`)).join('')), {x:540,y:630, in:s(21), out:s(22), subs:RU.map((r,i)=>['rl'+i,s(21,.15)+i*.18])});
    el('resumo', box(880,480,null,`${T(0,-100,52,'mesma potência,')}${T(0,-10,80,'MESMO gasto',{c:'r9',fill:K.orange})}<path d="M-300,40 H300" stroke="#E3E8F6" stroke-width="5"/>${T(0,120,52,'economiza o')}${T(0,190,70,'JEITO de usar',{c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  fx: (t) => { ['rh','i0','i1','i2','co','cf','dh'].forEach(i=>animWaves(i,t,1)); animWaves('ahw',t,1); $('oA_melt').setAttribute('opacity', C(s(18),s(19),t)*.6); },
});
