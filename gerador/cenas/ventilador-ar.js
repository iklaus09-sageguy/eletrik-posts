/* EletriK - Ventilador ou ar-condicionado */
const fan = (id) => `<path d="M0,70 V160 M-60,170 H60" stroke="${K.navy}" stroke-width="16" stroke-linecap="round"/><circle r="90" fill="#EEF1FA" class="ol"/><g id="${id}">${[0,1,2].map(i=>`<path d="M0,0 Q40,-70 0,-80 Q-30,-60 0,0 Z" fill="${K.blue}" class="ol" style="stroke-width:4" transform="rotate(${i*120})"/>`).join('')}</g><circle r="14" fill="${K.orange}" class="ol" style="stroke-width:4"/>`;
const ac = (id) => `<rect x="-170" y="-55" width="340" height="110" rx="26" fill="#fff" class="ol"/><path d="M-140,20 H140" stroke="${K.navy}" stroke-width="5"/><path d="M-140,36 H140" stroke="#C9D3F0" stroke-width="5"/><circle cx="130" cy="-22" r="8" fill="#22A55A"/>
  <g id="${id}">${[-80,-20,40,100].map(x=>`<path d="M${x},70 q10,22 0,44" stroke="#4FC3F7" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
const bedroom = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#2B3A6E" class="ol"/>
  <circle cx="190" cy="-160" r="34" fill="#FFE07A"/><circle cx="205" cy="-172" r="30" fill="#2B3A6E"/>
  <g transform="translate(-130,-120) scale(.7)">${ac('acA')}</g><g transform="translate(150,40) scale(.7)">${fan('fA')}</g>
  <rect x="-250" y="110" width="320" height="90" rx="16" fill="#C9D3F0" class="ol"/><rect x="-250" y="90" width="90" height="40" rx="12" fill="#fff" class="ol" style="stroke-width:4"/>`;
const thermo23 = () => `<rect x="-16" y="-80" width="32" height="120" rx="16" fill="#fff" class="ol"/><circle cx="0" cy="54" r="30" fill="${K.blue}" class="ol"/><rect x="-7" y="-20" width="14" height="70" rx="7" fill="${K.blue}"/>${T(70,10,52,'23 °C',{a:'start',c:'r9',fill:K.blue})}`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'VENTILADOR OU') + T(540,495,78,'AR-CONDICIONADO?') +
    T(540,640,104,'8X MAIS NA CONTA',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${bedroom()}</g>` + kikoCover() + coverBanner('A CONTA DA NOITE'),
  titles: [[0,2,'Ventilador ou ar?','ar'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,9,'A potência','potência'],
    [10,14,'Vamos fazer uma conta','conta'],[15,19,'Ar gastando menos','menos'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[10,10],[15,15],[20,20]], worry: [[4,4],[13,14]],
  drop: [], sizzle: [], events: [],
  specs: () => {
    el('quarto', bedroom(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Ar novo gasta','igual ventilador!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('verTag', pill(320,84,'verdade?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('vezes', box(820,440,null,`<g transform="translate(-230,-40) scale(.6)">${ac('acV')}</g>${T(-10,-10,50,'gasta MUITAS',{a:'start',c:'r9',fill:K.orange})}${T(-10,60,50,'vezes mais',{a:'start'})}${T(0,170,34,'mesmo os modelos econômicos',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('daPra', box(820,440,null,`<g transform="translate(-300,20)">${thermo23()}</g>${T(-50,-10,46,'dá pra usar',{a:'start'})}${T(-50,70,44,'gastando MENOS',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(5,.1), out:s(6)});
    [['1','A noite',T(0,60,70,'8 h',{c:'r9',fill:K.blue})],['2','O mês',T(0,60,60,'R$',{c:'r9',fill:K.orange})],['3','Gastar menos',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cFan', card('cFanC','ventilador', `<g transform="translate(0,-10) scale(.65)">${fan('fC')}</g>`+sub('w1',0,150,T(0,0,56,'≈ 100 W',{c:'r9',fill:K.blue}))), {x:290,y:640, in:s(7), out:s(10), subs:[['w1',s(7,.5)]]});
    el('cAc', card('cAcC','ar 9.000 BTUs', `<g transform="translate(0,-10) scale(.75)">${ac('acC')}</g>`+sub('w2',0,150,T(0,0,56,'≈ 800 W',{c:'r9',fill:K.orange}))), {x:790,y:640, in:s(8), out:s(10), subs:[['w2',s(8,.6)]]});
    el('etq', pill(500,80,'exemplo · confere a etiqueta',K.navy,'#fff',36), {x:510,y:910, in:s(9), out:s(10)});
    el('noite', box(900,460,'uma noite: 8 horas',`
       ${T(-410,-55,36,'ventilador',{a:'start'})}<rect x="-410" y="-40" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bV" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bVt',-410+75+115,-2,T(0,10,40,'0,8 kWh',{c:'r9',fill:K.blue}))}
       ${T(-410,70,36,'ar-condicionado',{a:'start'})}<rect x="-410" y="85" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bA" x="-410" y="85" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bAt',-410+600+80,123,T(0,10,40,'6,4 kWh',{c:'r9',fill:K.orange}))}`),
       {x:540,y:620, in:s(10), out:s(14), subs:[['bVt',s(11,.6)],['bAt',s(12,.6)]]});
    el('x8', starBadge('8x','mais'), {x:210,y:960,s:.9,r:-8, in:s(13), out:s(14), sfx:'boing'});
    el('mes', box(880,460,'no mês (R$ 0,80/kWh)',`${sub('m0',-210,20,`<g transform="translate(0,-60) scale(.45)">${fan('fM')}</g>${T(0,90,80,'R$ 19',{c:'r9',fill:K.blue})}`)}${sub('m1',210,20,`<g transform="translate(0,-60) scale(.55)">${ac('acM')}</g>${T(0,90,80,'R$ 154',{c:'r9',fill:K.orange})}`)}`+T(0,205,26,'valores ilustrativos',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(14), out:s(15), subs:[['m0',s(14,.3)],['m1',s(14,.6)]]});
    el('t0', row(1,'23 °C já é confortável','cada grau a menos gasta mais',`<g transform="scale(.5) translate(-60,0)">${thermo23()}</g>`), {x:540,y:450, in:s(16), out:s(20)});
    el('t1', row(2,'Filtro limpo','sujo, trabalha dobrado',`<g transform="scale(.55)">${ac('acT')}</g>`), {x:540,y:620, in:s(17), out:s(20)});
    el('t2', row(3,'Porta e janela fechadas','e cortina no sol',`<rect x="-50" y="-50" width="100" height="100" rx="8" fill="#8FB4FF" class="ol"/><path d="M0,-50 V50 M-50,0 H50" stroke="${K.navy}" stroke-width="5"/>`), {x:540,y:790, in:s(18), out:s(20)});
    el('inv', pill(560,84,'na compra: INVERTER e selo A',K.blue,'#fff',38), {x:510,y:960, in:s(19), out:s(20), sfx:'ding'});
    el('rule', box(880,460,null,`${sub('r0',0,-90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/><g transform="translate(-320,0) scale(.35)">${fan('fR')}</g>${T(-230,-2,44,'noite fresca:',{a:'start'})}${T(-230,44,44,'VENTILADOR',{a:'start',c:'r9',fill:K.blue})}`)}${sub('r1',0,80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/><g transform="translate(-320,-10) scale(.4)">${ac('acR')}</g>${T(-230,-2,44,'calor forte:',{a:'start'})}${T(-230,44,44,'ar no 23 °C',{a:'start',c:'r9',fill:K.orange})}`)}`),
       {x:540,y:620, in:s(20), out:s(21), subs:[['r0',s(20,.2)],['r1',s(20,.55)]]});
    el('circ', box(820,440,null,`<g transform="translate(-260,20) scale(1.1)">${breakerIcon('cb')}</g>${T(-120,-20,48,'o ar precisa de',{a:'start'})}${T(-120,60,50,'CIRCUITO PRÓPRIO',{a:'start',c:'r9',fill:K.blue})}${T(-120,120,32,'com eletricista qualificado',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('resumo', box(880,480,null,`<g transform="translate(-150,-110) scale(.45)">${fan('fZ')}</g>${T(0,-100,60,'vs',{c:'r9'})}<g transform="translate(150,-120) scale(.5)">${ac('acZ')}</g>${T(0,60,56,'o ar gasta uns')}${T(0,150,96,'8x MAIS',{c:'r9',fill:K.orange})}`+sub('rs',0,210,T(0,0,34,'usa quando precisa, e do jeito certo',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(22), out:s(23), subs:[['rs',s(22,.6)]]});
  },
  fx: (t) => {
    ['fA','fC','fM','fR','fZ'].forEach(i=>$(i).setAttribute('transform',`rotate(${t*400})`));
    ['acA','acC'].forEach(i=>$(i).style.opacity=.5+.5*Math.sin(t*4));
    $('bV').setAttribute('width', 75*eo(C(s(11),s(11)+.6,t))); $('bA').setAttribute('width', 600*eo(C(s(12),s(12)+.8,t)));
  },
});
