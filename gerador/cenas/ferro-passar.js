/* EletriK - Ferro de passar */
const iron = (id) => `<path d="M-130,40 Q-130,-30 -60,-50 H110 Q140,-50 140,-20 V40 Z" fill="#E3E8F6" class="ol"/><path d="M-130,40 H140 V60 Q140,70 130,70 H-120 Q-130,70 -130,60 Z" fill="#B9C2DA" class="ol"/>
  <path d="M-30,-50 Q-30,-110 30,-110 H90 Q110,-110 110,-90 V-50" fill="none" stroke="${K.navy}" stroke-width="16"/><rect x="-20" y="-40" width="60" height="30" rx="8" fill="${K.orange}" class="ol" style="stroke-width:3"/>
  <g id="${id}st">${[-90,-50,-10].map(x=>`<path class="hw_${id}st" d="M${x},-60 q10,-16 0,-32 q-10,-16 0,-32" fill="none" stroke="#C9D3F0" stroke-width="7" stroke-linecap="round"/>`).join('')}</g>`;
const shirt = (c='#7EC8F2') => `<path d="M-60,-70 L-100,-40 L-80,-10 L-60,-25 V80 H60 V-25 L80,-10 L100,-40 L60,-70 Q30,-50 0,-50 Q-30,-50 -60,-70 Z" fill="${c}" class="ol"/>`;
const pile = () => `${['#7EC8F2','#FFB98A','#B9E3C6','#FFE07A'].map((c,i)=>`<rect x="-110" y="${40-i*30}" width="220" height="34" rx="10" fill="${c}" class="ol" style="stroke-width:4"/>`).join('')}`;
const clock = (id) => `<circle r="70" fill="#fff" class="ol"/><path id="${id}" d="M0,0 V-48" stroke="${K.navy}" stroke-width="9" stroke-linecap="round"/><circle r="9" fill="${K.orange}"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'FERRO DE PASSAR') + T(540,495,78,'PESA NA CONTA?') +
    T(540,640,100,'O HÁBITO CARO',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(0,30) scale(1.2)">${iron('cvi')}</g>`)}</g>` + kikoCover() + coverBanner('PASSA DE UMA VEZ'),
  init: () => animWaves('cvist',0,1),
  titles: [[0,2,'Ferro pesa na conta?','conta'],[3,4,'Mas atenção!','atenção'],[5,5,'O hábito caro','hábito'],[6,6,'Fica até o final!','final'],[7,8,'A potência','potência'],
    [9,12,'Vamos fazer uma conta','conta'],[13,16,'Como gastar menos','menos'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[9,9],[13,13],[17,17]], worry: [[5,5],[12,12]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('fA', box(560,460,null,`<g transform="translate(-60,40) scale(1.1)">${iron('fa')}</g><g transform="translate(150,-60) scale(.6)">${shirt()}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Ferro é rapidinho,','não gasta nada!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('pouTag', pill(320,84,'pouco?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('chuv', box(820,440,null,`<g transform="translate(-220,40) scale(.85)">${iron('fc')}</g>${T(-80,-20,46,'potência de',{a:'start'})}${T(-80,60,54,'CHUVEIRINHO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('hab', box(440,460,'o hábito caro',`<g transform="translate(0,40) scale(1.1)">${shirt('#C9D3F0')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('habQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A potência',T(0,60,70,'W',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Gastar menos',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cSeco', card('cSecoC','a seco', `<g transform="translate(0,30) scale(.75)">${iron('fs')}</g>${T(0,150,52,'≈ 1.000 W',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(7), out:s(9)});
    el('cVap', card('cVapC','a vapor', `<g transform="translate(0,30) scale(.75)">${iron('fv')}</g>${T(0,150,36,'1.200–2.000 W',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(7,.5), out:s(9)});
    el('term', pill(560,80,'termostato liga e desliga',K.navy,'#fff',38), {x:510,y:910, in:s(8), out:s(9)});
    el('uso', box(860,440,'ferro a vapor de 1.200 W',`${T(0,-50,56,'1 h × 3x por semana')}`+sub('u1',0,60,T(0,0,100,'≈ 12 h/mês',{c:'r9',fill:K.blue}))), {x:540,y:620, in:s(10), out:s(11), subs:[['u1',s(10,.35)]]});
    el('mes', box(860,440,'no mês',`${T(0,-30,72,'até ≈ 14 kWh',{c:'r9'})}`+sub('m1',0,90,T(0,0,120,'≈ R$ 11',{c:'r9',fill:K.orange}))+T(0,170,28,'valores ilustrativos',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(11), out:s(12), subs:[['m1',s(11,.3)]]});
    el('caro', box(860,460,'o hábito caro',`<g transform="translate(-230,10)">${clock('ck')}</g><g transform="translate(-60,20) scale(.5)">${shirt()}</g>${T(10,-30,46,'uma peça por dia:',{a:'start'})}${T(10,50,46,'esquenta do ZERO',{a:'start',c:'r9',fill:K.orange})}${T(10,110,34,'toda vez',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(12), out:s(13)});
    el('d0', row(1,'Junta a roupa','passa tudo de uma vez',`<g transform="scale(.45)">${pile()}</g>`), {x:540,y:450, in:s(14), out:s(17)});
    el('d1', row(2,'Delicado primeiro','e vai subindo o calor',`<g transform="scale(.5)">${shirt('#FFE07A')}</g>`), {x:540,y:620, in:s(15), out:s(17)});
    el('d2', row(3,'Desliga antes do fim','o calor que sobra termina',`<g transform="scale(.42)">${iron('fd')}</g>`), {x:540,y:790, in:s(16), out:s(17)});
    el('rule', box(880,460,null,`<g transform="translate(-250,30) scale(.8)">${pile()}</g>${T(-90,-40,50,'ligado UMA vez,',{a:'start',c:'r9',fill:K.orange})}${T(-90,40,46,'com a roupa',{a:'start'})}${T(-90,100,46,'toda separada',{a:'start'})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('seg', box(820,440,'segurança',`${sub('sg0',-190,-30,pill(340,90,'direto na tomada',K.blue,'#fff',34))}${sub('sg1',190,-30,pill(300,90,'sem T',K.orange,'#fff',44))}`+sub('sg2',0,100,pill(520,80,'nunca ligado sozinho',K.navy,'#fff',38))), {x:540,y:620, in:s(18), out:s(19), subs:[['sg0',s(18,.2)],['sg1',s(18,.4)],['sg2',s(18,.65)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.6)">${iron('rf')}</g>${T(0,40,50,'gasta pouco por vez,')}${T(0,110,50,'muito ligado toda hora')}`+sub('rs',0,190,pill(460,76,'junta e passa de uma vez',K.orange,'#fff',36))), {x:540,y:620, in:s(19), out:s(20), subs:[['rs',s(19,.6)]]});
  },
  fx: (t) => { ['fa','fc','fv','rf'].forEach(i=>animWaves(i+'st',t,1)); $('ck').setAttribute('transform',`rotate(${t*120})`); },
});
