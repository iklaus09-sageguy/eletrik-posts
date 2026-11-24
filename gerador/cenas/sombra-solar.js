/* EletriK - Sombra parcial */
const panel = (shade=0, id='') => `<rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/>${shade?`<rect ${id?`id="${id}"`:''} x="-120" y="-80" width="${240*shade}" height="160" rx="10" fill="#0B1A4F" opacity=".55"/>`:''}`;
const tree = () => `<rect x="-14" y="20" width="28" height="90" fill="#8A6A52" class="ol" style="stroke-width:4"/><circle cy="-10" r="70" fill="#4FA85A" class="ol"/>`;
const string = (n, shadeIdx, sc=.3, gap=82) => [...Array(n)].map((_,i)=>`<g transform="translate(${(i-(n-1)/2)*gap},0) scale(${sc})">${panel(i===shadeIdx?.5:0)}</g>`).join('') + `<path d="M${-(n-1)/2*gap-36},34 H${(n-1)/2*gap+36}" stroke="${K.orange}" stroke-width="6" stroke-dasharray="10 8"/>`;
const hose = (id) => `<path d="M-380,0 H-40 Q0,0 0,-40 Q0,0 40,0 H380" stroke="#22A55A" stroke-width="30" fill="none" stroke-linecap="round"/><g id="${id}">${[...Array(5)].map((_,i)=>`<circle cx="${-340+i*170}" cy="0" r="8" fill="#BFE9FF"/>`).join('')}</g>`;
const diode = () => `<path d="M-60,0 H-20 M20,0 H60" stroke="${K.navy}" stroke-width="8"/><path d="M-20,-28 L20,0 L-20,28 Z" fill="${K.orange}" class="ol" style="stroke-width:4"/><path d="M22,-28 V28" stroke="${K.navy}" stroke-width="8"/>`;
const microInv = () => `<rect x="-60" y="-40" width="120" height="80" rx="12" fill="#9AA3BD" class="ol"/>${T(0,10,22,'MICRO',{c:'r9',fill:'#fff'})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'UMA PLACA NA SOMBRA') + T(540,495,78,'DERRUBA AS OUTRAS?') +
    T(540,640,100,'ENTENDA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(-160,-60) scale(.9)">${tree()}</g><g transform="translate(60,30) scale(.85)">${panel(.5)}</g>`)}</g>` + kikoCover() + coverBanner('SOMBRA PARCIAL'),
  titles: [[0,2,'Sombra numa placa?','Sombra'],[3,4,'Mas atenção!','atenção'],[5,5,'A peça que salva','salva'],[6,6,'Fica até o final!','final'],[7,8,'A mangueira','mangueira'],
    [9,10,'O diodo de desvio','diodo'],[11,14,'Vamos fazer uma conta','conta'],[15,15,'Ponto quente','quente'],[16,19,'3 cuidados','cuidados'],[20,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[9,9],[11,11],[20,20]], worry: [[12,12],[15,15]], drop: [[s(12),s(13)]], sizzle: [], events: [],
  specs: () => {
    el('sA', box(600,440,null,`<g transform="translate(-180,-60)">${tree()}</g><g transform="translate(70,40)">${panel(.5)}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Sombrinha numa placa','não faz diferença!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('pcTag', pill(380,84,'pouca coisa?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('serie', box(900,440,'placas em série',`<g transform="translate(0,-30)">${string(5,2,.45,150)}</g>`+sub('fraca',0,130,pill(560,76,'corrente = a da mais fraca',K.orange,'#fff',36))), {x:540,y:620, in:s(4), out:s(5), subs:[['fraca',s(4,.55)]]});
    el('salva', box(440,460,'a peça que salva',`<g transform="translate(0,30) scale(1.6)">${diode()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('salvaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Por quê',`<g transform="translate(0,40) scale(.35)">${panel(.5)}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Como evitar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('mang', box(900,420,'dobrou num ponto só',`<g transform="translate(0,10)">${hose('hw')}</g>`+sub('mt',0,120,T(0,0,44,'a água cai na mangueira TODA',{c:'r9',fill:K.orange}))), {x:540,y:620, in:s(7), out:s(8), subs:[['mt',s(7,.6)]]});
    el('mang2', box(900,420,'na série é igual',`<g transform="translate(0,-30)">${string(5,2,.45,150)}</g>${T(0,130,44,'a placa na sombra = a dobra',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('dio', box(900,460,'diodo de desvio',`<g transform="translate(-200,0) scale(1.1)">${panel()}</g>${[-1,0,1].map(i=>`<g transform="translate(130,${i*90}) scale(.8)">${diode()}</g>`).join('')}${T(290,-60,44,'~3 por',{a:'start',c:'r9',fill:K.blue})}${T(290,0,44,'placa',{a:'start',c:'r9',fill:K.blue})}${T(290,70,36,'1/3 cada',{a:'start',fill:K.orange})}`), {x:520,y:620, in:s(9), out:s(10)});
    el('dio2', box(900,440,'pedaço na sombra?',`<g transform="translate(-220,0) scale(1.1)">${panel(.34)}</g><path d="M-340,-110 Q-220,-190 -100,-110" stroke="${K.orange}" stroke-width="10" fill="none" stroke-dasharray="16 10"/>${T(0,-30,52,'o diodo DESVIA',{a:'start',c:'r9',fill:K.orange})}${T(0,40,44,'e o resto',{a:'start'})}${T(0,100,44,'segue gerando',{a:'start',fill:'#22A55A'})}`), {x:540,y:620, in:s(10), out:s(11)});
    el('k0', box(900,400,'10 placas de 550 W',`<g transform="translate(0,-40)">${string(10,-1,.24,82)}</g>${T(0,110,80,'= 5.500 W',{c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(11), out:s(12)});
    el('k1', box(880,460,null,`${sub('w0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,42,'sem diodo',{a:'start'})}${T(360,18,50,'~2.750 W',{a:'end',c:'r9',fill:'#E0301E'})}`)}${sub('w1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,42,'com diodos',{a:'start'})}${T(360,18,50,'perde ~370 W',{a:'end',c:'r9',fill:'#22A55A'})}`)}`), {x:540,y:620, in:s(12), out:s(15), subs:[['w0',s(12,.3)],['w1',s(13,.1)]]});
    el('k7', starBadge('-7%','só'), {x:200,y:950,s:.85,r:-8, in:s(13,.6), out:s(15), sfx:'ding'});
    el('aprox', pill(420,70,'valores aproximados',K.navy,'#fff',32), {x:520,y:930, in:s(14), out:s(15)});
    el('hot', box(880,460,'ponto quente',`<g transform="translate(-220,0) scale(1.1)">${panel(.25)}</g><g id="hotW">${heatWaves('hotw',[-280,-220,-160],10)}</g><g transform="translate(170,-20) scale(1)">${thermoIcon()}</g>${T(170,150,40,'estraga a placa',{c:'r9',fill:'#E0301E'})}`), {x:540,y:620, in:s(15), out:s(16)});
    el('e0', row(1,'Estudo de sombra','no inverno a sombra cresce',`<g transform="scale(.45)">${tree()}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('e1', row(2,'Caixa d\'água, antena','árvore, prédio e sujeira',`<g transform="scale(.6)">${alertIcon()}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('e2', row(3,'Otimizador ou micro','cada placa trabalha sozinha',`<g transform="scale(.5)">${microInv()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,440,null,`${T(0,-80,52,'sombra se resolve no')}${T(0,30,100,'PROJETO',{c:'r9',fill:K.orange})}${T(0,110,44,'antes de instalar',{fill:K.blue})}`), {x:540,y:620, in:s(20), out:s(21)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110)">${string(5,2,.28,130)}</g>${T(0,50,46,'na série, a mais fraca')}${T(0,140,84,'DITA O RITMO',{c:'r9',fill:K.orange})}${T(0,200,26,'valores aproximados · peça um projeto',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(21), out:s(22)});
  },
  fx: (t) => { animWaves('hotw',t,1); const p=C(s(7,.3),s(7,.3)+3,t); [...$('hw').children].forEach((c,i)=>c.setAttribute('opacity', 1-.7*p*(i>2?1:0))); },
});
