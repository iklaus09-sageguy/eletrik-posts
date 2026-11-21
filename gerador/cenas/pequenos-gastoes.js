/* EletriK - Pequenos gastões */
const kettle = () => `<path d="M-80,90 L-70,-40 Q-60,-90 0,-90 Q60,-90 70,-40 L80,90 Z" fill="#E3E8F6" class="ol"/><path d="M70,-30 Q130,-20 110,50" stroke="${K.navy}" stroke-width="14" fill="none"/><path d="M-70,-20 L-120,-60" stroke="${K.navy}" stroke-width="16" stroke-linecap="round"/><rect x="-90" y="90" width="180" height="24" rx="8" fill="${K.navy}"/>`;
const sandw = () => `<rect x="-110" y="-30" width="220" height="60" rx="20" fill="#3A4152" class="ol"/><path d="M-110,-30 Q0,-110 110,-30" fill="#4A5063" class="ol"/><rect x="100" y="-14" width="70" height="20" rx="8" fill="${K.navy}"/>`;
const dryer = () => `<path d="M-100,-50 H40 Q80,-50 80,-10 Q80,30 40,30 H-100 Z" fill="${K.orange}" class="ol"/><rect x="-20" y="20" width="44" height="110" rx="16" fill="${K.orange}" class="ol"/><path d="M-110,-30 v40" stroke="${K.navy}" stroke-width="10"/>`;
const trio = (id) => `<g transform="translate(-170,0) scale(.7)">${kettle()}</g><g transform="translate(0,20) scale(.75)">${sandw()}</g><g transform="translate(170,-10) scale(.7)">${dryer()}</g>`;
const cRow = (id,y,ic,label,v,col) => sub(id,0,y,`<rect x="-420" y="-56" width="840" height="112" rx="22" fill="#EEF1FA"/><g transform="translate(-350,0) scale(.38)">${ic}</g>${T(-270,14,38,label,{a:'start'})}${T(400,16,52,v,{a:'end',c:'r9',fill:col})}`);
VIDEO({
  cover: () => coverBase() + T(540,410,78,'CHALEIRA, SECADOR') + T(540,495,78,'SANDUICHEIRA...') +
    T(540,640,100,'GASTAM MUITO?',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(560,440,null,`<g transform="translate(0,20)">${trio('cv')}</g>`)}</g>` + kikoCover() + coverBanner('E A TOMADA?'),
  titles: [[0,2,'Os pequenos gastões','gastões'],[3,4,'Mas atenção!','atenção'],[5,5,'Mora na tomada','tomada'],[6,6,'Fica até o final!','final'],[7,7,'A potência','potência'],
    [8,12,'Vamos fazer uma conta','conta'],[13,15,'O problema real','real'],[16,19,'3 cuidados','cuidados'],[20,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[8,8],[17,17],[20,20]], worry: [[5,5],[14,15]], drop: [[s(14),s(16)]], sizzle: [[s(15),s(16)]], events: [],
  specs: () => {
    el('tr', box(600,440,null,`<g transform="translate(0,20)">${trio('ta')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Esses são os que','MAIS pesam!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('verTag', pill(320,84,'verdade?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('pouca', box(860,440,null,`${T(0,-60,50,'potência alta, pouco tempo')}${T(0,30,84,'POUCA energia',{c:'r9',fill:'#22A55A'})}${T(0,110,44,'o problema é OUTRO',{fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('tom', box(440,460,'mora aqui',`<g transform="translate(0,40) scale(1.05)">${outletIcon('',10)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('tomQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A potência',T(0,60,70,'W',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','A tomada',`<g transform="translate(0,30) scale(.5)">${outletIcon('',20)}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('pot', box(900,520,'valores comuns',`${cRow('p0',-110,kettle(),'chaleira','≈ 2.000 W',K.orange)}${cRow('p1',20,dryer(),'secador','≈ 2.000 W',K.orange)}${cRow('p2',150,sandw(),'sanduicheira','≈ 750 W',K.blue)}`), {x:540,y:640, in:s(7), out:s(8), subs:[['p0',s(7,.2)],['p1',s(7,.45)],['p2',s(7,.75)]]});
    el('conta', box(900,520,'a conta (R$ 0,80/kWh)',`${cRow('c0',-110,kettle(),'chaleira, 1 L, 3 min','≈ R$ 0,08','#22A55A')}${cRow('c1',20,sandw(),'sanduicheira, 10 min','≈ R$ 0,10','#22A55A')}${cRow('c2',150,dryer(),'secador, 10 min/dia','≈ R$ 8/mês',K.blue)}`), {x:540,y:640, in:s(9), out:s(12), subs:[['c0',s(9,.3)],['c1',s(10,.3)],['c2',s(11,.3)]]});
    el('chuv', box(860,440,'compara com o chuveiro',`<g transform="translate(-260,40) scale(1.2)">${showerIcon()}</g>${T(-80,0,70,'100+ kWh',{a:'start',c:'r9',fill:K.orange})}${T(-80,70,48,'os pequenos pesam',{a:'start'})}${T(-80,130,56,'POUCO',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(12), out:s(13)});
    el('amp', box(860,460,'2.000 W em 127 V',`<g transform="translate(-240,20) scale(.9)">${outletIcon('oA',10)}</g>${heatWaves('ahw',[-290,-240,-190],-110)}${T(-90,-30,52,'quase',{a:'start'})}${T(60,-30,72,'16 A',{a:'start',c:'r9',fill:'#E0301E'})}${T(-90,50,44,'tomada comum:',{a:'start'})}${T(-90,110,52,'10 A',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(14), out:s(16)});
    el('noT', pill(460,84,'e no T, piora',K.orange,'#fff',44), {x:510,y:930, in:s(15), out:s(16)});
    el('d0', row(1,'Direto na tomada certa','20 A ou 220 V',`<g transform="scale(.42)">${outletIcon('',20)}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('d1', row(2,'Nunca dois no mesmo T','um aparelho, uma tomada',`<g transform="scale(.6)">${adapterT()}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('d2', row(3,'Esquentou? Para','e chama um eletricista',`<g transform="scale(.7)">${thermoIcon()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,460,null,`${sub('r0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,48,'na conta:',{a:'start'})}${T(360,18,56,'POUCO',{a:'end',c:'r9',fill:'#22A55A'})}`)}${sub('r1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,48,'na tomada:',{a:'start'})}${T(360,18,56,'MUITO',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(20), out:s(21), subs:[['r0',s(20,.2)],['r1',s(20,.55)]]});
    el('resumo', box(880,480,null,`${sub('z0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,44,'vilão da conta:',{a:'start'})}${T(360,18,52,'TEMPO',{a:'end',c:'r9',fill:K.blue})}`)}${sub('z1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,44,'vilão da tomada:',{a:'start'})}${T(360,18,52,'POTÊNCIA',{a:'end',c:'r9',fill:K.orange})}`)}${T(0,200,26,'valores ilustrativos',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(21), out:s(22), subs:[['z0',s(21,.2)],['z1',s(21,.5)]]});
  },
  fx: (t) => { animWaves('ahw',t,1); $('oA_melt').setAttribute('opacity', C(s(14,.5),s(16),t)*.6); },
});
