/* EletriK - Tomada 10 x 20 A */
const pinHole = (r,c) => `<circle r="${r}" fill="${K.navy}"/><circle r="${r}" fill="none" stroke="${c}" stroke-width="4"/>`;
const ruler = (w,label,c) => `<path d="M${-w/2},0 H${w/2} M${-w/2},-14 V14 M${w/2},-14 V14" stroke="${c}" stroke-width="6"/>${T(0,-24,30,label,{c:'r9',fill:c})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'SUA TOMADA É DE') + T(540,495,78,'10 OU 20 A?') +
    T(540,640,100,'VEJA COMO SABER',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(-130,0) scale(1.05)">${outletIcon('',10)}</g><g transform="translate(130,0) scale(1.05)">${outletIcon('',20)}</g>`)}</g>` + kikoCover() + coverBanner('E O ERRO DA TROCA'),
  titles: [[0,2,'10 ou 20 A?','20 A'],[3,4,'Mas atenção!','atenção'],[5,5,'O erro da troca','erro'],[6,6,'Fica até o final!','final'],[7,9,'Como identificar','identificar'],
    [10,13,'Vamos fazer uma conta','conta'],[14,16,'O erro da troca','erro'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[7,7],[10,10],[17,17]], worry: [[4,5],[16,16]], drop: [[s(15),s(17)]], sizzle: [], events: [],
  specs: () => {
    el('duas', box(600,460,null,`<g transform="translate(-140,0) scale(1.1)">${outletIcon('',10)}</g><g transform="translate(140,0) scale(1.1)">${outletIcon('',20)}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Tudo igual,','só muda o furo!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('detTag', pill(320,84,'detalhe?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('dobro', box(860,440,null,`<g transform="translate(-250,10) scale(.95)">${outletIcon('',20)}</g>${T(-110,-30,50,'a de 20 aguenta o',{a:'start'})}${T(-110,60,90,'DOBRO',{a:'start',c:'r9',fill:K.orange})}${T(-110,120,34,'pesado na de 10 derrete',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('troca', box(440,460,'o erro da troca',`<g transform="translate(0,40) scale(1.05)">${outletIcon('',20)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('trocaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Identificar',`<g transform="translate(0,30) scale(.5)">${outletIcon('',20)}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','O erro',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('furo', box(880,460,'1: o furo',`${sub('f0',-210,0,`<g transform="scale(2)">${pinHole(11,K.blue)}</g><g transform="translate(0,90)">${ruler(46,'~4 mm',K.blue)}</g>${T(0,-80,40,'10 A',{c:'r9',fill:K.blue})}`)}${sub('f1',210,0,`<g transform="scale(2)">${pinHole(15,K.orange)}</g><g transform="translate(0,90)">${ruler(60,'~4,8 mm',K.orange)}</g>${T(0,-80,40,'20 A',{c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(7), out:s(8), subs:[['f0',s(7,.3)],['f1',s(7,.6)]]});
    el('marca', box(860,440,'2: a marcação',`<g transform="translate(-200,10) scale(1.1)">${outletIcon('',20)}</g>${T(30,-10,52,'vem escrito:',{a:'start'})}${T(30,70,64,'10 A / 20 A',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('plug', box(880,440,'3: o plugue',`${sub('p0',0,-60,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#E3F6EA"/>${T(-370,16,40,'plugue de 10 na tomada de 20',{a:'start'})}${T(370,18,48,'✓',{a:'end',c:'r9',fill:'#22A55A'})}`)}${sub('p1',0,80,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#FFE4D2"/>${T(-370,16,40,'plugue de 20 na tomada de 10',{a:'start'})}${T(370,18,48,'✗',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(9), out:s(10), subs:[['p0',s(9,.2)],['p1',s(9,.6)]]});
    el('pvi', pill(420,84,'P = V × I',K.navy,'#fff',52), {x:540,y:420, in:s(10), out:s(13)});
    el('tab', box(880,420,null,`${T(-110,-120,34,'127 V',{c:'r9',fill:'#55608A'})}${T(250,-120,34,'220 V',{c:'r9',fill:'#55608A'})}
       ${sub('t0',0,-30,`<rect x="-410" y="-50" width="820" height="100" rx="22" fill="#EEF1FA"/>${T(-380,16,44,'10 A',{a:'start',c:'r9',fill:K.blue})}${T(-110,16,44,'~1.270 W',{c:'r9'})}${T(250,16,44,'~2.200 W',{c:'r9'})}`)}
       ${sub('t1',0,100,`<rect x="-410" y="-50" width="820" height="100" rx="22" fill="#FFE4D2"/>${T(-380,16,44,'20 A',{a:'start',c:'r9',fill:K.orange})}${T(-110,16,44,'~2.540 W',{c:'r9'})}${T(250,16,44,'~4.400 W',{c:'r9'})}`)}`), {x:540,y:680, in:s(11), out:s(13), subs:[['t0',s(11,.3)],['t1',s(11,.6)]]});
    el('pes', box(860,440,'aparelhos pesados (127 V)',`<g transform="translate(-280,20) scale(.45)">${fryerIcon()}</g><g transform="translate(-130,20) scale(.38)">${microIcon()}</g>${T(30,0,48,'vêm com',{a:'start'})}${T(30,70,48,'PINO GROSSO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(13), out:s(14)});
    el('so', box(860,440,'o erro',`<g transform="translate(-230,10)">${outletIcon('',20)}</g>${T(-90,-30,42,'trocar SÓ a tomada',{a:'start',c:'r9',fill:'#E0301E'})}${T(-90,40,44,'sem trocar o fio',{a:'start'})}${T(-90,100,44,'nem o disjuntor',{a:'start'})}`), {x:540,y:620, in:s(15), out:s(16)});
    el('fino', box(880,440,null,`<g transform="translate(0,-40) scale(.9)">${cable()}</g>${T(0,110,48,'quem esquenta é o')}${T(0,180,72,'FIO',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(16), out:s(17)});
    el('rule', box(880,460,null,`${T(0,-100,52,'tomada de 20 A pede')}${T(0,0,84,'CIRCUITO de 20',{c:'r9',fill:K.blue})}`+sub('rc',0,120,pill(620,76,'fio 2,5 mm²+ e disjuntor compatível',K.orange,'#fff',32))), {x:540,y:620, in:s(17), out:s(18), subs:[['rc',s(17,.6)]]});
    el('pro', proCard(), {x:540,y:620, in:s(18), out:s(19), subs:[['proOk',s(18,.6)]]});
    el('resumo', box(880,480,null,`${[['furo largo + marcação','20 A',K.orange],['aparelho pesado','vai nela',K.blue],['sem fio certo','NÃO adianta','#E0301E']].map(([a,b,c],i)=>sub('rz'+i,0,-120+i*110,`<rect x="-400" y="-46" width="800" height="92" rx="20" fill="#EEF1FA"/>${T(-360,14,40,a,{a:'start'})}${T(360,16,44,b,{a:'end',c:'r9',fill:c})}`)).join('')}`), {x:540,y:630, in:s(19), out:s(20), subs:[0,1,2].map(i=>['rz'+i,s(19,.1)+i*.25])});
  },
  fx: (t) => { const h=C(s(16),s(16,.6),t); $('cabIns').setAttribute('stroke',mixc('#4FC3F7','#E0301E',h)); $('cabGlow').setAttribute('opacity',h*.8); $('heat').setAttribute('opacity',h); ['hw1','hw2','hw3'].forEach((id,i)=>{ const ph=((t*1.6+i*.33)%1); $(id).setAttribute('transform',`translate(0,${-ph*40})`); $(id).style.opacity=Math.sin(ph*Math.PI); }); },
});
