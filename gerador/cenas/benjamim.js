/* EletriK - Benjamim e T */
const tower = (id) => `<g transform="translate(0,-20)">${outletIcon('',10)}</g><g transform="translate(0,-20) scale(.8)">${adapterT()}</g><g transform="translate(70,60) rotate(20) scale(.6)">${adapterT()}</g><g id="${id}_sm">${heatWaves(id+'_hw',[-40,0,40],-130)}</g>`;
const coffee = () => `<rect x="-60" y="-90" width="120" height="180" rx="16" fill="#3A4152" class="ol"/><rect x="-40" y="0" width="80" height="70" rx="10" fill="#C9D3F0" class="ol" style="stroke-width:4"/><rect x="-40" y="-70" width="80" height="40" rx="8" fill="#2B2F3A"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'BENJAMIM E T:') + T(540,495,78,'POR QUE É PERIGOSO?') +
    T(540,640,94,'1 CONTATO, 17 A',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,460,null,`<g transform="translate(0,20)">${tower('cvt')}</g>`)}</g>` + kikoCover() + coverBanner('O T NÃO CRIA TOMADA'),
  init: () => animWaves('cvt_hw',0,1),
  titles: [[0,2,'Benjamim e T','T'],[3,4,'Mas atenção!','atenção'],[5,5,'Ainda pior','pior'],[6,6,'Fica até o final!','final'],
    [7,10,'Vamos fazer uma conta','conta'],[11,14,'3 perigos escondidos','perigos'],[15,18,'O que fazer no lugar','no lugar'],[19,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[7,7],[16,16],[19,19]], worry: [[4,5],[10,10],[14,14]], drop: [[s(10),s(11)]], sizzle: [[s(10),s(11)]], events: [],
  specs: () => {
    el('torre', box(500,460,null,`<g transform="translate(0,20)">${tower('ta')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Tomada é pouca,','o T resolve!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('resTag', pill(320,84,'resolve?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('mult', box(820,440,null,`<g transform="translate(-230,10) scale(.8)">${adapterT()}</g>${T(-80,-30,46,'multiplica aparelhos,',{a:'start'})}${T(-80,50,58,'NÃO a tomada',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('pilha', box(440,460,'um em cima do outro',`<g transform="translate(0,40) scale(.9)">${tower('tp')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('pilhaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','Os perigos',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`],['3','No lugar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('lim', box(820,440,'uma tomada comum',`<g transform="translate(-220,10) scale(.9)">${outletIcon('',10)}</g>${T(-60,-20,70,'10 A',{a:'start',c:'r9',fill:K.blue})}${T(-60,50,46,'≈ 1.270 W em 127 V',{a:'start'})}${T(-60,110,40,'no TOTAL',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('cMic', card('cMicC','micro-ondas', `<g transform="translate(0,0) scale(.6)">${microIcon()}</g>${T(0,140,52,'1.400 W',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(9), out:s(11)});
    el('cCaf', card('cCafC','cafeteira', `<g transform="translate(0,0) scale(.7)">${coffee()}</g>${T(0,140,52,'800 W',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(9,.5), out:s(11)});
    el('soma', pill(560,90,'2.200 W ≈ 17 A num contato de 10',K.orange,'#fff',36), {x:510,y:920, in:s(10), out:s(11), sfx:'buzz'});
    el('p0', row(1,'A soma num contato só','toda a corrente no mesmo ponto',`<g transform="scale(.4)">${outletIcon('',10)}</g>`), {x:540,y:450, in:s(12), out:s(15)});
    el('p1', row(2,'Mola fraca','pino frouxo: mau contato',`<g transform="scale(.7)">${screwIcon()}</g>`), {x:540,y:620, in:s(13), out:s(15)});
    el('p2', row(3,'Pendurado ou empilhado','o peso afrouxa tudo',`<g transform="scale(.32)">${tower('tr')}</g>`), {x:540,y:790, in:s(14), out:s(15)});
    el('mais', box(820,440,'falta tomada?',`<g transform="translate(-260,10) scale(.6)">${outletIcon('',10)}</g><g transform="translate(-120,10) scale(.6)">${outletIcon('',20)}</g>${T(30,-10,52,'instala MAIS',{a:'start',c:'r9',fill:K.blue})}${T(30,60,52,'tomadas',{a:'start'})}${T(30,120,32,'com circuito adequado',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(16), out:s(17)});
    el('leve', box(820,440,'aparelho leve',`<rect x="-340" y="-30" width="300" height="70" rx="22" fill="#fff" class="ol"/>${[-300,-240,-180,-120].map(x=>`<circle cx="${x}" cy="5" r="8" fill="${K.navy}"/>`).join('')}${T(20,0,46,'régua com selo',{a:'start'})}${T(20,60,56,'do Inmetro',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('direto', box(820,440,'aparelho que esquenta',`<g transform="translate(-250,10) scale(.5)">${microIcon()}</g>${T(-80,-10,56,'sempre DIRETO',{a:'start',c:'r9',fill:K.orange})}${T(-80,60,52,'na tomada',{a:'start'})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('rule', box(880,460,null,`${T(0,-100,52,'um aparelho pesado,')}${T(0,10,110,'UMA tomada',{c:'r9',fill:K.orange})}`+sub('noT',0,120,pill(360,70,'nada de T',K.navy,'#fff',40))), {x:540,y:620, in:s(19), out:s(20), subs:[['noT',s(19,.6)]]});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-120) scale(.7)">${adapterT()}</g>${T(0,50,56,'o T não cria energia:')}${T(0,140,52,'junta tudo num contato só',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(21), out:s(22)});
  },
  fx: (t) => { ['ta','tp','tr'].forEach(i=>animWaves(i+'_hw',t,1)); },
});
