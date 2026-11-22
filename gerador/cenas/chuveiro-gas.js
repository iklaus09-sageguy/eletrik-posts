/* EletriK - Chuveiro x gás */
const heaterG = (id) => `<rect x="-90" y="-140" width="180" height="280" rx="18" fill="#fff" class="ol"/><rect x="-50" y="40" width="100" height="60" rx="10" fill="#2B2F3A" class="ol" style="stroke-width:4"/><g id="${id}">${[-25,0,25].map(x=>`<path d="M${x},90 q10,-20 0,-36 q-10,-14 0,-26" fill="#4FA3F7" opacity=".9"/>`).join('')}</g><rect x="-50" y="-110" width="100" height="40" rx="8" fill="#C8F0D4" class="ol" style="stroke-width:3"/>`;
const bottle = () => `<path d="M-70,-90 Q-70,-120 -40,-120 H40 Q70,-120 70,-90 V110 Q70,130 50,130 H-50 Q-70,130 -70,110 Z" fill="#E0301E" class="ol"/><rect x="-30" y="-160" width="60" height="44" rx="10" fill="#9AA3BD" class="ol"/>${T(0,20,30,'P13',{c:'r9',fill:'#fff'})}`;
const co = () => `<circle r="80" fill="#9AA3BD" opacity=".6"/>${T(0,16,52,'CO',{c:'r9',fill:K.navy})}`;
const win = () => `<rect x="-60" y="-60" width="120" height="120" rx="10" fill="#8FB4FF" class="ol"/><path d="M0,-60 V60 M-60,0 H60" stroke="${K.navy}" stroke-width="5"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'CHUVEIRO OU') + T(540,495,78,'AQUECEDOR A GÁS?') +
    T(540,640,100,'QUASE EMPATA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(-130,30) scale(1.2)">${showerIcon()}</g>${T(0,10,60,'x',{c:'r9',fill:K.orange})}<g transform="translate(140,0) scale(.8)">${heaterG('cvh')}</g>`)}</g>` + kikoCover() + coverBanner('E O PERIGO DO GÁS'),
  titles: [[0,2,'Chuveiro ou gás?','gás'],[3,4,'Mas atenção!','atenção'],[5,5,'O perigo do gás','perigo'],[6,6,'Fica até o final!','final'],
    [7,10,'Vamos fazer uma conta','conta'],[11,13,'Vantagens','Vantagens'],[14,16,'Monóxido de carbono','Monóxido'],[17,17,'Regra de ouro','ouro'],[18,18,'Resumindo',''],[19,20,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 19,
  point: [[3,3],[6,6],[7,7],[11,11],[17,17]], worry: [[5,5],[14,16]], drop: [[s(14),s(17)]], sizzle: [], events: [],
  specs: () => {
    el('vs', box(600,460,null,`<g transform="translate(-150,40) scale(1.3)">${showerIcon()}</g>${T(0,10,70,'x',{c:'r9',fill:K.orange})}<g transform="translate(160,10) scale(.9)">${heaterG('ha')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Gás é SEMPRE','mais barato!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('verTag', pill(320,84,'verdade?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('mesma', box(860,440,null,`<g transform="translate(-250,10) scale(.9)">${thermoIcon()}</g>${T(-130,-30,48,'a energia pra esquentar',{a:'start'})}${T(-130,50,72,'é a MESMA',{a:'start',c:'r9',fill:K.blue})}${T(-130,110,36,'muda o PREÇO na sua cidade',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('peri', box(440,460,'o perigo do gás',`<g transform="translate(0,40) scale(1.2)">${co()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('periQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','Vantagens',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv2')}</g>`],['3','O cuidado',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('casa', pill(560,84,'4 pessoas · 40 min de banho/dia',K.navy,'#fff',36), {x:540,y:400, in:s(7), out:s(11)});
    el('cE', card('cEC','chuveiro 5.500 W', `<g transform="translate(30,10) scale(1.1)">${showerIcon()}</g>${T(0,100,40,'≈ 110 kWh',{c:'r8'})}${T(0,160,60,'R$ 88',{c:'r9',fill:K.blue})}`), {x:290,y:660, in:s(8), out:s(11)});
    el('cG', card('cGC','gás de botijão', `<g transform="translate(0,-10) scale(.6)">${bottle()}</g>${T(0,100,40,'≈ 10 kg',{c:'r8'})}${T(0,160,60,'R$ 85',{c:'r9',fill:K.orange})}`), {x:790,y:660, in:s(9), out:s(11)});
    el('emp', pill(720,84,'quase EMPATE · encanado costuma ganhar',K.orange,'#fff',32), {x:500,y:950, in:s(10), out:s(11), sfx:'ding'});
    el('v0', row(1,'Chuveiro elétrico','barato e fácil de instalar',`<g transform="translate(20,20) scale(.6)">${showerIcon()}</g>`), {x:540,y:520, in:s(12), out:s(14)});
    el('v1', row(2,'Aquecedor a gás','mais vazão e conforto',`<g transform="scale(.32)">${heaterG('vh')}</g>`), {x:540,y:700, in:s(13), out:s(14)});
    el('mon', box(860,460,'monóxido de carbono',`<g transform="translate(-240,10) scale(1.1)">${co()}</g>${T(-110,-30,48,'sem cheiro, sem cor',{a:'start'})}${T(-110,50,60,'em lugar fechado',{a:'start'})}${T(-110,130,84,'MATA',{a:'start',c:'r9',fill:'#E0301E'})}`), {x:540,y:620, in:s(14), out:s(16)});
    el('vent', box(860,460,null,`<g transform="translate(-260,0) scale(1.1)">${win()}</g>${T(-140,-40,48,'NUNCA no banheiro',{a:'start',c:'r9',fill:'#E0301E'})}${T(-140,20,48,'fechado',{a:'start',c:'r9',fill:'#E0301E'})}${T(-140,90,40,'ventilação + profissional',{a:'start',fill:K.blue})}`), {x:540,y:620, in:s(16), out:s(17)});
    el('rule', box(880,460,null,`${sub('r0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,42,'faz a conta com os',{a:'start'})}${T(360,18,46,'preços locais',{a:'end',c:'r9',fill:K.blue})}`)}${sub('r1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,42,'se for gás:',{a:'start'})}${T(360,18,46,'VENTILAÇÃO',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(17), out:s(18), subs:[['r0',s(17,.2)],['r1',s(17,.6)]]});
    el('resumo', box(880,480,null,`${T(0,-110,52,'no botijão, quase')}${T(0,-20,96,'EMPATA',{c:'r9',fill:K.orange})}${T(0,70,44,'gás: mais conforto,')}${T(0,130,44,'mais cuidado')}${T(0,200,26,'valores aproximados',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(18), out:s(19)});
  },
  fx: (t) => { ['ha','vh'].forEach(i=>$(i).style.opacity=.6+.4*Math.sin(t*8)); },
});
