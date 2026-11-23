/* EletriK - Fusível x disjuntor */
const fuse = (id, blown=false) => `<rect x="-60" y="-110" width="120" height="220" rx="20" fill="#E8DCC6" class="ol"/><rect x="-40" y="-60" width="80" height="120" rx="10" fill="#fff" class="ol" style="stroke-width:4"/>
  <path id="${id}_w" d="M0,-60 V${blown?'-10':'60'} ${blown?'M0,10 V60':''}" stroke="#B9C2DA" stroke-width="8"/>${blown?`<path d="${star(8,18,7)}" fill="#FFD84D" class="ol" style="stroke-width:3"/>`:''}<rect x="-30" y="-140" width="60" height="34" rx="6" fill="#9AA3BD" class="ol" style="stroke-width:4"/>`;
const coin = () => `<circle r="50" fill="#FFD84D" class="ol"/>${T(0,14,40,'R$',{c:'r9',fill:K.navy})}`;
const curve = () => `<path d="M-350,-130 V130 H350" stroke="${K.navy}" stroke-width="6" fill="none"/><path d="M-320,-120 Q-200,-110 -120,0 Q-60,60 0,80 L20,110 H340" stroke="${K.blue}" stroke-width="10" fill="none"/>${T(-260,-80,26,'minutos',{c:'r8',fill:K.blue})}${T(220,95,26,'centésimos de s',{c:'r8',fill:K.orange})}
  ${T(-150,170,26,'sobrecarga',{c:'r9',fill:K.blue})}${T(200,170,26,'curto',{c:'r9',fill:K.orange})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'FUSÍVEL OU') + T(540,495,78,'DISJUNTOR?') +
    T(540,640,100,'NUNCA UM FIO!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-120,0)">${fuse('cvf',true)}</g>${T(0,20,60,'x',{c:'r9',fill:K.orange})}<g transform="translate(130,0) scale(1.1)">${breakerIcon('cvb')}</g>`)}</g>` + kikoCover() + coverBanner('O QUE MUDOU'),
  titles: [[0,2,'Fusível ou disjuntor?','disjuntor'],[3,4,'Mas atenção!','atenção'],[5,5,'O truque','truque'],[6,6,'Fica até o final!','final'],[7,9,'Como funcionam','funcionam'],
    [10,12,'Duas proteções','Duas'],[13,16,'A conta do curto','curto'],[17,18,'Quando trocar','trocar'],[19,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(16,.6),800,420,8,'FOGO!','buzz']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[10,10],[13,13],[19,19]], worry: [[4,4],[16,16]], drop: [[s(16),s(17)]], sizzle: [[s(16),s(17)]], events: [],
  specs: () => {
    el('fA', box(480,460,null,`<g transform="translate(-100,10)">${fuse('fa',true)}</g><g transform="translate(110,10)"><path d="M-30,-110 Q20,-40 -20,20 T10,110" stroke="#D9822B" stroke-width="12" fill="none"/></g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Coloca um fio de','cobre no lugar!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('espTag', pill(300,84,'esperto?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('zero', stampSVG('FIO NO FUSÍVEL','= ZERO PROTEÇÃO','#E0301E',760), {x:540,y:620,r:-5, in:s(4,.2), out:s(5), sfx:'buzz'});
    el('truq', box(440,460,'o truque',`<g transform="translate(0,30) scale(1.2)">${breakerIcon('tb')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('truqQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Como funciona',`<g transform="translate(0,30) scale(.5)">${fuse('pv1')}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Quando trocar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cF', card('cFC','fusível', `<g transform="translate(0,-10) scale(.8)"><g id="fu1">${fuse('fu')}</g><g id="fu2" opacity="0">${fuse('fv',true)}</g></g>${T(0,150,38,'derrete: TROCA',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(7), out:s(10)});
    el('tent', pill(460,80,'aí mora a gambiarra',K.orange,'#fff',38), {x:300,y:920, in:s(8), out:s(10)});
    el('cD', card('cDC','disjuntor', `<g transform="translate(0,-10) scale(1.2)">${breakerIcon('cdb')}</g>${T(0,150,38,'desarma: REARMA',{c:'r9',fill:K.blue})}`), {x:790,y:640, in:s(9), out:s(10)});
    el('curva', box(880,480,'duas proteções em uma',`<g transform="translate(0,0)">${curve()}</g>`), {x:540,y:640, in:s(10,.3), out:s(13)});
    el('t1', pill(380,70,'térmica: sobrecarga',K.blue,'#fff',34), {x:300,y:935, in:s(11), out:s(13)});
    el('t2', pill(380,70,'magnética: curto',K.orange,'#fff',34), {x:780,y:935, in:s(12), out:s(13)});
    el('k1', box(860,440,'num curto-circuito',`<g transform="translate(-260,10) scale(1.3)">${sparkIcon()}</g>${T(-110,-10,52,'a corrente passa de',{a:'start'})}${T(-110,80,96,'1.000 A',{a:'start',c:'r9',fill:'#E0301E'})}`), {x:540,y:620, in:s(14), out:s(15)});
    el('k2', box(880,460,null,`${sub('d0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,42,'disjuntor de 20 A',{a:'start'})}${T(360,18,46,'corta na hora',{a:'end',c:'r9',fill:'#22A55A'})}`)}${sub('d1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,42,'fio no fusível',{a:'start'})}${T(360,18,46,'CENTENAS de A',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(15), out:s(17), subs:[['d0',s(15,.1)],['d1',s(16,.1)]]});
    el('ant', box(880,460,'ainda tem fusível?',`<g transform="translate(-260,10)">${fuse('af')}</g>${T(-130,-30,52,'já passou da',{a:'start'})}${T(-130,60,90,'HORA',{a:'start',c:'r9',fill:K.orange})}`+sub('nv',80,150,pill(500,70,'disjuntores + DR + DPS',K.blue,'#fff',36))), {x:540,y:620, in:s(17,.3), out:s(19), subs:[['nv',s(18,.4)]]});
    el('rule', box(880,460,null,`${T(0,-110,44,'proteção NÃO se improvisa',{c:'r9',fill:K.orange})}<g transform="translate(-200,40)"><path d="M-40,-60 Q0,0 -20,60" stroke="#D9822B" stroke-width="12" fill="none"/>${T(0,110,32,'fio',{c:'r8'})}</g><g transform="translate(0,40) scale(.8)">${coin()}</g>${T(0,150,32,'moeda',{c:'r8'})}<g transform="translate(200,40)"><path d="M-30,-60 L30,60" stroke="#9AA3BD" stroke-width="8"/>${T(0,110,32,'arame',{c:'r8'})}</g>`), {x:540,y:620, in:s(19), out:s(20)});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(880,480,null,`${sub('z0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,44,'fusível:',{a:'start'})}${T(360,18,46,'derrete e troca',{a:'end',c:'r9',fill:K.orange})}`)}${sub('z1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,44,'disjuntor:',{a:'start'})}${T(360,18,46,'rearma, protege 2x',{a:'end',c:'r9',fill:K.blue})}`)}`), {x:540,y:620, in:s(21), out:s(22), subs:[['z0',s(21,.2)],['z1',s(21,.5)]]});
  },
  fx: (t) => { const b=t>s(7,.6); $('fu1').setAttribute('opacity',b?0:1); $('fu2').setAttribute('opacity',b?1:0); },
});
