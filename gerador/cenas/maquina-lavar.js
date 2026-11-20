/* EletriK - Máquina de lavar */
const washer = (id) => `<rect x="-130" y="-160" width="260" height="320" rx="22" fill="#F4F6FB" class="ol"/><rect x="-130" y="-160" width="260" height="60" rx="22" fill="#DDE3EF" class="ol" style="stroke-width:4"/><circle cx="80" cy="-130" r="12" fill="${K.blue}"/>
  <circle cx="0" cy="40" r="90" fill="#fff" class="ol"/><circle cx="0" cy="40" r="66" fill="#8FB4FF" class="ol" style="stroke-width:4"/><g id="${id}"><path d="M-40,40 Q0,0 40,40 Q0,80 -40,40" fill="#fff" opacity=".6"/></g>`;
const dryer = (id) => `<rect x="-130" y="-160" width="260" height="320" rx="22" fill="#F4F6FB" class="ol"/><rect x="-130" y="-160" width="260" height="60" rx="22" fill="#FFE4D2" class="ol" style="stroke-width:4"/><circle cx="80" cy="-130" r="12" fill="${K.orange}"/>
  <circle cx="0" cy="40" r="90" fill="#fff" class="ol"/><circle cx="0" cy="40" r="66" fill="#FFB98A" class="ol" style="stroke-width:4"/>${heatWaves(id,[-30,0,30],10)}`;
const laundry = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#EAF3FF" class="ol"/>
  <rect x="-280" y="150" width="560" height="80" fill="#C9D3F0"/><g transform="translate(-120,20) scale(.75)">${washer('wl')}</g><g transform="translate(120,20) scale(.75)">${dryer('dl')}</g>`;
const sunI = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*90).toFixed(0)},${(Math.sin(a)*90).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'ÁGUA QUENTE NA') + T(540,495,78,'MÁQUINA PESA?') +
    T(540,640,100,'O VILÃO É OUTRO',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${laundry()}</g>` + kikoCover() + coverBanner('SECADORA x ÁGUA'),
  init: () => animWaves('dl', 0, 1),
  titles: [[0,2,'Água quente pesa?','quente'],[3,4,'Mas atenção!','atenção'],[5,5,'O vilão ao lado','vilão'],[6,6,'Fica até o final!','final'],[7,8,'A lavagem fria','fria'],
    [9,12,'Vamos fazer uma conta','conta'],[13,15,'O vilão','vilão'],[16,19,'Como gastar menos','menos'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[9,9],[13,13],[20,20]], worry: [[5,5],[14,15]], drop: [[s(13),s(14)]], sizzle: [], events: [],
  specs: () => {
    el('lav', laundry(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Água quente','DOBRA a conta!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('exTag', pill(320,84,'exagero?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('outro', box(820,440,null,`<g transform="translate(-220,10) scale(.8)">${washer('wo')}</g>${T(-60,-20,50,'gasta, sim. Mas o',{a:'start'})}${T(-60,60,76,'VILÃO',{a:'start',c:'r9',fill:K.orange})}${T(110,60,50,'é outro',{a:'start'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('lado', box(440,460,'bem do lado',`<g transform="translate(0,40) scale(.95)" opacity=".95">${dryer('dq').replace('#FFB98A',K.navy).replace('#FFE4D2',K.navy)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('ladoQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O vilão',T(0,70,110,'?',{c:'r9',fill:K.orange})],['3','Gastar menos',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('fria', box(820,460,'lavagem fria',`<g transform="translate(-220,20) scale(.85)">${washer('wf')}</g>${T(-60,-10,52,'por ciclo:',{a:'start'})}${T(-60,80,84,'≈ 0,3 kWh',{a:'start',c:'r9',fill:K.blue})}`+sub('etq',150,170,pill(400,60,'aprox. · confere a etiqueta',K.navy,'#fff',28))), {x:540,y:620, in:s(7), out:s(9), subs:[['etq',s(8)]]});
    el('agua', box(880,460,'esquentar 15 litros',`${sub('a0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFF1E6"/>${T(-360,14,46,'de 20 a 40 °C',{a:'start'})}${T(360,16,56,'0,35 kWh',{a:'end',c:'r9',fill:K.orange})}`)}${sub('a1',0,80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,14,46,'de 20 a 60 °C',{a:'start'})}${T(360,16,56,'0,7 kWh',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(10), out:s(12), subs:[['a0',s(10,.4)],['a1',s(11,.3)]]});
    el('mes', box(880,460,'12 lavagens por mês (R$ 0,80/kWh)',`${sub('m0',-210,20,`<g transform="translate(0,-50) scale(.8)">${dropIcon()}</g>${T(0,90,80,'R$ 3',{c:'r9',fill:K.blue})}${T(0,140,34,'fria',{c:'f6',fill:'#55608A'})}`)}${sub('m1',210,20,`<g transform="translate(0,-60) scale(.62)">${thermoIcon()}</g>${T(0,90,80,'R$ 10',{c:'r9',fill:K.orange})}${T(0,140,34,'a 60 °C',{c:'f6',fill:'#55608A'})}`)}`), {x:540,y:620, in:s(12), out:s(13), subs:[['m0',s(12,.3)],['m1',s(12,.6)]]});
    el('sec', box(860,460,'a secadora elétrica',`<g transform="translate(-220,20) scale(.85)">${dryer('ds')}</g>${T(-60,-20,52,'≈ 3 kWh',{a:'start',c:'r9',fill:K.orange})}${T(-60,40,46,'por ciclo',{a:'start'})}`+sub('x10',120,140,pill(420,76,'10x uma lavagem fria',K.orange,'#fff',38))), {x:540,y:620, in:s(13), out:s(15), subs:[['x10',s(14,.5)]]});
    el('r29', starBadge('R$ 29','12 secagens'), {x:540,y:620,s:1.1, in:s(15), out:s(16), sfx:'boing'});
    el('g0', row(1,'Água fria no dia a dia','quente só pra sujeira pesada',`<g transform="scale(.8)">${dropIcon()}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('g1', row(2,'Máquina cheia','meia carga gasta quase igual',`<g transform="scale(.3)">${washer('wg')}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('g2', row(3,'Dia de sol: varal','secadora só quando precisa',`<g transform="scale(.5)">${sunI()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,460,null,`<g transform="translate(-260,10) scale(1.1)">${thermoIcon()}</g>${T(-140,-40,50,'o que pesa é o',{a:'start'})}${T(-140,60,96,'CALOR',{a:'start',c:'r9',fill:K.orange})}${T(-140,120,28,'água quente e secadora: só se precisar',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(20), out:s(21)});
    el('dr', box(820,420,'lavanderia = área molhada',`${sub('d0',-190,20,pill(320,110,'terra ✓','#22A55A','#fff',52))}${sub('d1',190,20,pill(280,110,'DR ✓',K.blue,'#fff',56))}`), {x:540,y:620, in:s(21), out:s(22), subs:[['d0',s(21,.3)],['d1',s(21,.6)]]});
    el('resumo', box(880,480,null,`${sub('z0',0,-90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,48,'água quente:',{a:'start'})}${T(360,18,56,'POUCO',{a:'end',c:'r9',fill:K.blue})}`)}${sub('z1',0,80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,48,'secadora:',{a:'start'})}${T(360,18,56,'MUITO',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(22), out:s(23), subs:[['z0',s(22,.2)],['z1',s(22,.5)]]});
  },
  fx: (t) => { ['wl','wo','wf','wg'].forEach(i=>$(i).setAttribute('transform',`rotate(${t*200} 0 40)`)); ['dl','ds'].forEach(i=>animWaves(i,t,1)); },
});
