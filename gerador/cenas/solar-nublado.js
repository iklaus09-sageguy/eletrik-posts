/* EletriK - Solar nublado e noite */
const panel = () => `<rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/>`;
const sunI = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*90).toFixed(0)},${(Math.sin(a)*90).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
const cloud = (c='#C9D3F0') => `<path d="M-110,30 Q-120,-30 -60,-30 Q-40,-80 20,-70 Q70,-90 90,-40 Q130,-40 120,10 Q120,40 90,40 H-90 Q-110,40 -110,30 Z" fill="${c}" class="ol"/>`;
const moon = () => `<path d="M30,-60 A70,70 0 1,0 30,60 A55,55 0 1,1 30,-60 Z" fill="#FFE07A" class="ol"/>`;
const sky = (kind) => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="${kind==='noite'?'#2B3A6E':kind==='nublado'?'#B9C2DA':'#DCE8FF'}" class="ol"/>
  ${kind==='sol'?`<g transform="translate(150,-130) scale(.8)">${sunI()}</g>`:kind==='nublado'?`<g transform="translate(120,-130) scale(.5)">${sunI()}</g><g transform="translate(60,-110) scale(.9)">${cloud('#8F9AB8')}</g>`:`<g transform="translate(150,-130) scale(.9)">${moon()}</g>`}
  <g transform="translate(-20,90) scale(1.1)">${panel()}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'SOLAR NO NUBLADO') + T(540,495,78,'E À NOITE?') +
    T(540,640,100,'GERA OU NÃO?',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${sky('nublado')}</g>` + kikoCover() + coverBanner('LUZ, NÃO CALOR'),
  titles: [[0,2,'Nublado e noite?','Nublado'],[3,4,'Mas atenção!','atenção'],[5,5,'O calor atrapalha','atrapalha'],[6,6,'Fica até o final!','final'],
    [7,11,'Vamos fazer uma conta','conta'],[12,13,'E à noite?','noite'],[14,16,'O mito do calor','calor'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[7,7],[14,14],[17,17]], worry: [[5,5],[12,12]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('ceu', sky('nublado'), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Cidade que chove,','solar não compensa!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('logTag', pill(320,84,'lógico?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('luz', box(860,460,null,`${sub('l0',-190,-30,`<g transform="scale(.8)">${sunI()}</g>${T(0,130,44,'LUZ ✓',{c:'r9',fill:'#22A55A'})}`)}${sub('l1',190,-30,`<g transform="scale(.9)">${thermoIcon()}</g>${T(0,130,44,'calor ✗',{c:'r9',fill:'#E0301E'})}`)}${T(0,200,32,'e o projeto usa a MÉDIA do ano',{c:'r8',fill:K.blue})}`), {x:540,y:620, in:s(4), out:s(5), subs:[['l0',s(4,.1)],['l1',s(4,.35)]]});
    el('atrap', box(440,460,'calor demais...',`<g transform="translate(0,40) scale(1.2)">${thermoIcon()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('atrapQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Nublado',`<g transform="translate(0,30) scale(.5)">${cloud()}</g>`],['2','Noite',`<g transform="translate(0,30) scale(.6)">${moon()}</g>`],['3','O calor',`<g transform="translate(0,30) scale(.7)">${thermoIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cSol', card('cSolC','dia de sol', `<g transform="translate(0,0) scale(.6)">${sunI()}</g>${T(0,150,52,'≈ 15 kWh',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(8), out:s(12)});
    el('cNub', card('cNubC','bem nublado', `<g transform="translate(0,0) scale(.7)">${cloud('#8F9AB8')}</g>${T(0,150,52,'≈ 3 a 4 kWh',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(9), out:s(12)});
    el('k3', pill(480,80,'sistema de 3 kWp, por dia',K.navy,'#fff',36), {x:540,y:385, in:s(7), out:s(10)});
    el('naoZ', pill(460,84,'cai, mas NÃO ZERA',K.orange,'#fff',42), {x:510,y:910, in:s(10), out:s(11)});
    el('media', pill(560,84,'os dias bons compensam',K.blue,'#fff',40), {x:510,y:910, in:s(11), out:s(12)});
    el('noite', box(860,460,null,`<g transform="translate(-230,0) scale(1.2)">${moon()}</g>${T(-90,-10,56,'à noite, gera',{a:'start'})}${T(-90,90,100,'ZERO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(12), out:s(13)});
    el('cred', box(880,480,'sistema ligado à rede',`${sub('c0',0,-70,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFF6D6"/><g transform="translate(-330,0) scale(.4)">${sunI()}</g>${T(-260,-4,40,'de dia: sobra vira',{a:'start'})}${T(-260,40,44,'CRÉDITO',{a:'start',c:'r9',fill:'#22A55A'})}`)}${sub('c1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/><g transform="translate(-330,0) scale(.5)">${moon()}</g>${T(-260,-4,40,'à noite: usa a rede,',{a:'start'})}${T(-260,40,44,'o crédito ABATE',{a:'start',c:'r9',fill:K.blue})}`)}`), {x:540,y:620, in:s(13), out:s(14), subs:[['c0',s(13,.1)],['c1',s(13,.5)]]});
    el('quente', box(860,460,'placa quente rende menos',`<g transform="translate(-260,20) scale(1.1)">${thermoIcon()}</g>${T(-120,-20,72,'−0,4% por °C',{a:'start',c:'r9',fill:K.orange})}${T(-120,50,44,'acima de 25 °C',{a:'start'})}${T(-120,110,28,'valor típico · varia por placa',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(15), out:s(16)});
    el('frio', box(820,440,null,`<g transform="translate(-220,0) scale(.8)">${sunI()}</g>${T(-90,-20,52,'dia FRIO e',{a:'start',c:'r9',fill:K.blue})}${T(-90,40,52,'ensolarado',{a:'start'})}${T(-90,110,44,'pode render mais',{a:'start',fill:'#22A55A'})}`), {x:540,y:620, in:s(16), out:s(17)});
    el('rule', box(880,460,null,`${T(0,-110,52,'importa a geração do')}${T(0,-10,110,'ANO',{c:'r9',fill:K.orange})}${T(0,70,48,'não a de um dia')}`+sub('sim',0,150,pill(560,70,'simulação com dados da sua cidade',K.navy,'#fff',30))), {x:540,y:620, in:s(17), out:s(18), subs:[['sim',s(17,.6)]]});
    el('vent', box(820,420,null,`${sub('v0',-190,0,pill(340,100,'ventilada ✓',K.blue,'#fff',46))}${sub('v1',190,0,pill(340,100,'sem sombra ✓','#22A55A','#fff',42))}`), {x:540,y:620, in:s(18), out:s(19), subs:[['v0',s(18,.2)],['v1',s(18,.5)]]});
    el('resumo', box(880,480,null,`${[['nublado','gera MENOS',K.orange],['noite','não gera',K.navy],['média do ano','é que PAGA','#22A55A']].map(([a,b,c],i)=>sub('rz'+i,0,-120+i*110,`<rect x="-400" y="-46" width="800" height="92" rx="20" fill="#EEF1FA"/>${T(-360,14,40,a,{a:'start'})}${T(360,16,44,b,{a:'end',c:'r9',fill:c})}`)).join('')}${T(0,210,26,'valores aproximados',{c:'f6',fill:'#55608A'})}`), {x:540,y:630, in:s(19), out:s(20), subs:[0,1,2].map(i=>['rz'+i,s(19,.1)+i*.25])});
  },
  fx: (t) => {},
});
