/* EletriK - Energia solar */
const panel = (w=1) => `<g transform="scale(${w})"><rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/><path d="M-100,-60 L-60,-60" stroke="#fff" stroke-width="6" opacity=".5"/></g>`;
const sun = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*92).toFixed(0)},${(Math.sin(a)*92).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
const solarHouse = () => `<g transform="translate(0,170) scale(1.1)">${house()}</g><g transform="translate(-60,-90) rotate(-40) scale(.55,.4)">${panel()}</g><g transform="translate(70,-90) rotate(40) scale(.55,.4)">${panel()}</g>`;
const bill = (v,id) => `<path d="M-130,-170 H130 V150 L105,170 L80,150 L55,170 L30,150 L5,170 L-20,150 L-45,170 L-70,150 L-95,170 L-130,150 Z" fill="#fff" class="ol"/><rect x="-130" y="-170" width="260" height="56" fill="${K.blue}" class="ol"/>${T(0,-132,26,'CONTA DE LUZ',{fill:'#fff'})}
  ${[0,1,2].map(i=>`<rect x="-100" y="${-90+i*36}" width="${130-i*20}" height="14" rx="7" fill="#E3E8F6"/>`).join('')}<text id="${id}" x="100" y="110" text-anchor="end" class="r9" font-size="56" fill="${K.navy}">${v}</text>`;
const tree = () => `<rect x="-14" y="20" width="28" height="90" fill="#8A6A52" class="ol" style="stroke-width:4"/><circle cy="-10" r="70" fill="#4FA85A" class="ol"/>`;
const docOk = () => `<rect x="-90" y="-120" width="180" height="240" rx="14" fill="#fff" class="ol"/>${[0,1,2,3].map(i=>`<rect x="-60" y="${-85+i*34}" width="${120-i*15}" height="12" rx="6" fill="#E3E8F6"/>`).join('')}<g transform="translate(20,70) rotate(-12)"><rect x="-80" y="-26" width="160" height="52" rx="8" fill="none" stroke="#22A55A" stroke-width="7"/>${T(0,12,28,'APROVADO',{c:'r9',fill:'#22A55A'})}</g>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'ENERGIA SOLAR') + T(540,495,78,'ZERA A CONTA?') +
    T(540,640,104,'NÃO ZERA, MAS...',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1010) scale(.85)">${box(540,460,null,`<g transform="translate(-60,-20) scale(.8)">${solarHouse()}</g><g transform="translate(170,-140) scale(.7)">${sun()}</g>`)}</g>` + kikoCover() + coverBanner('SE PAGA EM ~4 ANOS'),
  titles: [[0,2,'Solar zera a conta?','zera'],[3,4,'Mas atenção!','atenção'],[5,5,'Mesmo assim...','assim'],[6,6,'Fica até o final!','final'],
    [7,9,'Como dimensionar','dimensionar'],[10,16,'Vamos fazer uma conta','conta'],[17,20,'3 erros caros','erros'],[21,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[7,7],[10,10],[21,21]], worry: [[4,4],[18,18]],
  drop: [[s(18),s(19)]], sizzle: [], events: [],
  specs: () => {
    el('casaS', box(600,460,null,`<g transform="translate(-40,-10) scale(.9)">${solarHouse()}</g><g id="sunA" transform="translate(200,-150) scale(.7)">${sun()}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Nunca mais','paga nada!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('sonhoTag', pill(340,84,'o sonho...',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    const SOB=['taxa mínima','iluminação pública','parte do uso da rede'];
    el('naoZera', box(880,500,'a conta NÃO zera',`<g transform="translate(-260,30) scale(.85)">${bill('R$ 50','bz')}</g>`+SOB.map((r,i)=>sub('sb'+i,140,-90+i*100,`<rect x="-240" y="-40" width="480" height="80" rx="18" fill="#EEF1FA"/>${T(-210,13,38,'+ '+r,{a:'start'})}`)).join('')),
       {x:540,y:630, in:s(4), out:s(5), subs:SOB.map((r,i)=>['sb'+i,s(4,.35)+i*.18])});
    el('mas', box(820,440,null,`<g transform="translate(-230,0) scale(.9)">${panel()}</g>${T(-60,-20,52,'pode compensar',{a:'start'})}${T(-60,60,80,'MUITO',{a:'start',c:'r9',fill:'#22A55A'})}${T(-60,120,36,'se for bem feito',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(5,.15), out:s(6)});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O retorno',T(0,70,60,'anos',{c:'r9',fill:K.orange})],['3','Os erros',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('dim', box(860,440,'dimensiona pelo consumo',`${sub('dk',-200,0,pill(300,110,'kWh ✓',K.blue,'#fff',60))}${sub('dr',200,0,pill(300,110,'R$ ✗',K.orange,'#fff',60))}`), {x:540,y:620, in:s(7), out:s(8), subs:[['dk',s(7,.3)],['dr',s(7,.75)]]});
    el('gera', box(860,460,'no Brasil, em média',`<g transform="translate(-260,0) scale(.85)">${panel()}</g>${T(-90,-40,52,'1 kWp gera',{a:'start'})}${T(-90,60,84,'≈ 120 kWh',{a:'start',c:'r9',fill:K.blue})}${T(-90,120,40,'por mês',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(8), out:s(10)});
    el('dep', pill(560,80,'depende da região e do sol',K.navy,'#fff',38), {x:510,y:910, in:s(9), out:s(10)});
    el('kwp', box(860,440,'casa de 300 kWh/mês',`${T(0,-30,60,'300 ÷ 120')}`+sub('kp',0,90,T(0,0,120,'≈ 2,5 kWp',{c:'r9',fill:K.blue}))), {x:540,y:620, in:s(11), out:s(12), subs:[['kp',s(11,.55)]]});
    el('custo', box(860,440,'a R$ 3.600 por kWp',`${T(0,-30,60,'2,5 × R$ 3.600')}`+sub('cu',0,90,T(0,0,120,'≈ R$ 9.000',{c:'r9',fill:K.orange}))), {x:540,y:620, in:s(12), out:s(13), subs:[['cu',s(12,.55)]]});
    el('antes', card('antesC','antes', `<g transform="translate(0,20) scale(.6)">${bill('R$ 250','b1')}</g>`), {x:290,y:640, in:s(13), out:s(14)});
    el('depois', card('depoisC','com solar', `<g transform="translate(0,20) scale(.6)">${bill('R$ 50','b2')}</g>`), {x:790,y:640, in:s(13,.35), out:s(14)});
    el('econ', pill(480,84,'≈ R$ 200 por mês',K.blue,'#fff',44), {x:510,y:910, in:s(13,.7), out:s(14), sfx:'ding'});
    el('payb', box(860,460,'em quanto tempo se paga',`${T(0,-40,60,'R$ 9.000 ÷ R$ 200')}`+sub('pb',0,70,T(0,0,110,'≈ 45 meses',{c:'r9',fill:K.orange}))+sub('pb2',0,160,pill(380,70,'menos de 4 anos',K.navy,'#fff',38))), {x:540,y:620, in:s(14), out:s(15), subs:[['pb',s(14,.4)],['pb2',s(14,.75)]]});
    el('vida', box(820,440,null,`<g transform="translate(-220,0) scale(.85)">${panel()}</g>${T(-60,-20,52,'garantia de',{a:'start'})}${T(-60,70,80,'≈ 25 anos',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(15), out:s(17)});
    el('aprox', pill(620,80,'valores aproximados · peça simulação',K.orange,'#fff',34), {x:500,y:910, in:s(16), out:s(17)});
    el('e0', row(1,'Sombra','árvore, caixa d\'água, prédio',`<g transform="scale(.45)">${tree()}</g>`), {x:540,y:450, in:s(18), out:s(21)});
    el('e1', row(2,'Sem projeto','precisa de aprovação e responsável',`<g transform="scale(.32)">${docOk()}</g>`), {x:540,y:620, in:s(19), out:s(21)});
    el('e2', row(3,'Instalação ruim','aterramento e DPS fazem parte',`<g transform="scale(.6)">${alertIcon()}</g>`), {x:540,y:790, in:s(20), out:s(21)});
    const RU=['Dimensiona pelo kWh','Sem sombra nas placas','Projeto aprovado'];
    el('rule', box(880,500,null,RU.map((r,i)=>sub('rl'+i,0,-140+i*130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.75)">${badgeOK('rlb'+i)}</g>${T(-270,16,46,r,{a:'start'})}`)).join('')), {x:540,y:620, in:s(21), out:s(22), subs:RU.map((r,i)=>['rl'+i,s(21,.2)+i*.3])});
    el('resumo', box(880,480,null,`<g transform="translate(0,-120) scale(.55)">${panel()}</g>${T(0,40,52,'não zera a conta, mas')}${T(0,120,56,'pode cortar boa parte',{fill:K.blue})}`+sub('rs',0,200,pill(460,70,'e se pagar em poucos anos',K.orange,'#fff',34))), {x:540,y:620, in:s(22), out:s(23), subs:[['rs',s(22,.6)]]});
  },
  fx: (t) => { $('sunA').setAttribute('transform',`translate(200,-150) scale(.7) rotate(${t*20})`); },
});
