/* EletriK - Fio 1,5 x 2,5 mm² */
const coil = (c, thick) => `<g>${[0,1,2,3].map(i=>`<ellipse cx="0" cy="0" rx="${110-i*18}" ry="${70-i*11}" fill="none" stroke="${K.navy}" stroke-width="${thick?26:18}"/><ellipse cx="0" cy="0" rx="${110-i*18}" ry="${70-i*11}" fill="none" stroke="${c}" stroke-width="${thick?16:10}"/>`).join('')}</g>`;
const wireH = (id,thick,c='#2A2A2A') => `<path id="${id}_g" d="M-280,0 H280" stroke="#FF3B1A" stroke-width="${thick?80:60}" opacity="0" filter="url(#blur)"/><path d="M-280,0 H280" stroke="${K.navy}" stroke-width="${thick?44:28}" stroke-linecap="round"/><path id="${id}_c" d="M-280,0 H280" stroke="${c}" stroke-width="${thick?32:18}" stroke-linecap="round"/><circle cx="290" cy="0" r="${thick?14:9}" fill="#D9822B"/>`;
const bulbS = () => `<path d="M-50,-20 A50,50 0 1,1 50,-20 Q50,10 28,30 V48 H-28 V30 Q-50,10 -50,-20 Z" fill="#FFF3C4" class="ol"/><rect x="-28" y="48" width="56" height="22" rx="5" fill="#B9C2DA" class="ol" style="stroke-width:3"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'FIO DE 1,5 OU 2,5?') + T(540,495,78,'TANTO FAZ?') +
    T(540,640,104,'NÃO FAZ!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-120,-20) scale(.8)">${coil('#2A2A2A',false)}</g>${T(-120,120,40,'1,5 mm²',{c:'r9'})}<g transform="translate(120,-20) scale(.8)">${coil('#E0301E',true)}</g>${T(120,120,40,'2,5 mm²',{c:'r9',fill:K.orange})}`)}</g>` + kikoCover() + coverBanner('O FINO ESQUENTA MAIS'),
  titles: [[0,2,'1,5 ou 2,5 mm²?','2,5'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,10,'O que a norma pede','norma'],
    [11,15,'Vamos fazer uma conta','conta'],[16,19,'3 erros comuns','erros'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[7,7],[11,11],[20,20]], worry: [[4,4],[15,15]], drop: [], sizzle: [[s(14,.3),s(16)]], events: [],
  specs: () => {
    el('rolos', box(600,460,null,`<g transform="translate(-140,-30) scale(.9)">${coil('#2A2A2A',false)}</g>${T(-140,120,44,'1,5 mm²',{c:'r9'})}<g transform="translate(140,-30) scale(.9)">${coil('#E0301E',true)}</g>${T(140,120,44,'2,5 mm²',{c:'r9',fill:K.orange})}`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Tanto faz,','fio é fio!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('ecoTag', pill(340,84,'economia?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('norma', box(820,440,null,`${T(0,-60,52,'a norma diz onde vai cada um')}${T(0,40,76,'errado ESQUENTA',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5,-.05)});
    el('dif', box(820,440,'a diferença de calor',`<g transform="translate(0,-20) scale(1.3)">${T(0,40,120,'?',{c:'r9',fill:K.orange})}</g>${T(0,150,40,'é maior do que parece',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(5,.15), out:s(6)});
    [['1','A norma',T(0,60,60,'NBR',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Onde usar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('nbr', box(900,540,'NBR 5410: seção mínima',`${sub('n0',0,-140,`<rect x="-410" y="-55" width="820" height="110" rx="22" fill="#EEF1FA"/><g transform="translate(-340,-5) scale(.6)">${bulbS()}</g>${T(-260,14,46,'iluminação',{a:'start'})}${T(390,16,56,'1,5 mm²',{a:'end',c:'r9',fill:K.blue})}`)}
       ${sub('n1',0,-10,`<rect x="-410" y="-55" width="820" height="110" rx="22" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.42)">${outletIcon('',10)}</g>${T(-260,14,46,'tomadas',{a:'start'})}${T(390,16,56,'2,5 mm²',{a:'end',c:'r9',fill:K.orange})}`)}
       ${sub('n2',0,120,`<rect x="-410" y="-55" width="820" height="110" rx="22" fill="#FFE4D2"/><g transform="translate(-330,10) scale(.6)">${showerIcon()}</g>${T(-260,14,40,'chuveiro, ar, forno',{a:'start'})}${T(390,16,40,'mais grosso',{a:'end',c:'r9',fill:'#E0301E'})}`)}`),
       {x:540,y:640, in:s(7), out:s(11), subs:[['n0',s(8)],['n1',s(9)],['n2',s(10)]]});
    el('ohm', box(880,460,'resistência do cobre',`${sub('o0',0,-70,`<g transform="translate(-190,0) scale(.55)">${wireH('w1',false)}</g>${T(390,14,48,'≈ 12 Ω/km',{a:'end',c:'r9'})}${T(-380,-40,32,'1,5 mm²',{a:'start',c:'r8'})}`)}${sub('o1',0,90,`<g transform="translate(-190,0) scale(.55)">${wireH('w2',true,'#E0301E')}</g>${T(390,14,48,'≈ 7,4 Ω/km',{a:'end',c:'r9',fill:K.orange})}${T(-380,-50,32,'2,5 mm²',{a:'start',c:'r8',fill:K.orange})}`)}`),
       {x:540,y:620, in:s(12), out:s(14), subs:[['o0',s(12,.1)],['o1',s(12,.5)]]});
    el('m40', pill(520,84,'20 m = 40 m de fio (ida e volta)',K.navy,'#fff',36), {x:510,y:910, in:s(13), out:s(14)});
    el('calor', box(900,480,'40 m com 10 A passando',`${sub('c0',0,-90,`<g transform="translate(-140,0) scale(.7)">${wireH('h1',false)}</g>${T(370,16,56,'≈ 48 W',{a:'end',c:'r9',fill:'#E0301E'})}${T(-400,-50,32,'1,5 mm²',{a:'start',c:'r8'})}`)}${sub('c1',0,90,`<g transform="translate(-140,0) scale(.7)">${wireH('h2',true,'#E0301E')}</g>${T(370,16,56,'≈ 30 W',{a:'end',c:'r9',fill:K.blue})}${T(-400,-55,32,'2,5 mm²',{a:'start',c:'r8',fill:K.orange})}`)}`),
       {x:540,y:620, in:s(14), out:s(16), subs:[['c0',s(14,.3)],['c1',s(14,.6)]]});
    el('x60', starBadge('+60%','de calor'), {x:210,y:960,s:.9,r:-8, in:s(15), out:s(16), sfx:'boing'});
    el('e0', row(1,'1,5 mm² nas tomadas','pra economizar',`<g transform="scale(.42)">${outletIcon('',10)}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('e1', row(2,'Disjuntor maior, fio igual','lembra do 1º vídeo',`<g transform="scale(.55)">${breakerIcon('eb')}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('e2', row(3,'Fio sem certificação','menos cobre que o anunciado',`<g transform="scale(.7)">${alertIcon()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,500,null,`${sub('r0',0,-130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/>${T(-360,16,46,'luz',{a:'start'})}${T(360,18,52,'1,5 mm²',{a:'end',c:'r9',fill:K.blue})}`)}${sub('r1',0,0,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/>${T(-360,16,46,'tomada',{a:'start'})}${T(360,18,52,'2,5 mm²',{a:'end',c:'r9',fill:K.orange})}`)}${sub('r2',0,130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#FFE4D2"/>${T(-360,16,46,'carga pesada',{a:'start'})}${T(360,18,52,'projeto',{a:'end',c:'r9',fill:'#E0301E'})}`)}`),
       {x:540,y:620, in:s(20), out:s(21), subs:[['r0',s(20,.25)],['r1',s(20,.45)],['r2',s(20,.65)]]});
    el('pro', proCard(), {x:540,y:620, in:s(21), out:s(22), subs:[['proOk',s(21,.6)]]});
    el('resumo', box(880,480,null,`${T(0,-110,56,'fio NÃO é tudo igual')}<path d="M-300,-70 H300" stroke="#E3E8F6" stroke-width="5"/>${T(0,30,60,'o fino esquenta mais',{fill:K.orange})}${T(0,130,64,'economizar sai caro',{c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  fx: (t) => { const g=.6+.3*Math.sin(t*10); $('h1_g').setAttribute('opacity',g); $('h1_c').setAttribute('stroke','#E0301E'); $('h2_g').setAttribute('opacity',g*.5); },
});
