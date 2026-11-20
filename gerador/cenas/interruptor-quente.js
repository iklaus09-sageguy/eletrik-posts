/* EletriK - Interruptor esquentando */
const sw = (id) => `<rect x="-90" y="-130" width="180" height="260" rx="22" fill="#fff" class="ol"/><rect x="-45" y="-80" width="90" height="160" rx="12" fill="#EEF1FA" class="ol" style="stroke-width:4"/><rect x="-38" y="-74" width="76" height="72" rx="10" fill="#C9D3F0" class="ol" style="stroke-width:3"/>
  <g id="${id}_hot" opacity="0"><rect x="-96" y="-136" width="192" height="272" rx="26" fill="none" stroke="#FF6A13" stroke-width="10" opacity=".6"/>${heatWaves(id+'_hw',[-40,0,40],-150)}</g>`;
const heater = () => `<rect x="-120" y="-100" width="240" height="190" rx="22" fill="#E3E8F6" class="ol"/>${[-80,-40,0,40,80].map(x=>`<rect x="${x-12}" y="-80" width="24" height="150" rx="10" fill="#FFB98A" class="ol" style="stroke-width:3"/>`).join('')}<path d="M-90,90 V115 M90,90 V115" stroke="${K.navy}" stroke-width="12" stroke-linecap="round"/>`;
const borne = () => `<rect x="-90" y="-50" width="180" height="100" rx="14" fill="#EEF1FA" class="ol"/><g transform="translate(-35,0) scale(.6)">${screwIcon()}</g><path d="M-200,0 H-80" stroke="${K.navy}" stroke-width="18" stroke-linecap="round"/><path d="M-200,0 H-80" stroke="#E0301E" stroke-width="8"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'INTERRUPTOR') + T(540,495,78,'ESQUENTANDO?') +
    T(540,640,104,'NÃO É NORMAL!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,440,null,`<g transform="translate(0,20)">${sw('cvs')}</g>`)}</g>` + kikoCover() + coverBanner('VEJA OS SINAIS'),
  init: () => $('cvs_hot').setAttribute('opacity',1),
  titles: [[0,2,'Interruptor quente?','quente'],[3,4,'Mas atenção!','atenção'],[5,5,'A causa escondida','escondida'],[6,6,'Fica até o final!','final'],
    [7,10,'3 causas','causas'],[11,14,'Vamos fazer uma conta','conta'],[15,16,'Hora de trocar','trocar'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[11,11],[17,17]], worry: [[4,5],[13,14]], drop: [[s(13),s(15)]], sizzle: [[s(14),s(15)]], events: [],
  specs: () => {
    el('swA', box(480,460,null,`<g transform="translate(0,20)">${sw('sa')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('É normal, é a','energia passando!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('norTag', pill(300,84,'normal?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('nao', box(820,440,null,`<g transform="translate(-230,20) scale(.85)">${sw('sn')}</g>${T(-110,-30,50,'interruptor',{a:'start'})}${T(-110,50,58,'NÃO esquenta',{a:'start',c:'r9',fill:K.orange})}${T(-110,110,34,'calor no lugar errado',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('causa', box(440,460,'a causa escondida',`<g transform="translate(0,40) scale(.9)" opacity=".95">${heater().replace(/#FFB98A/g,K.navy).replace('#E3E8F6',K.navy)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('causaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','As causas',T(0,70,110,'?',{c:'r9',fill:K.orange})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Trocar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('big3', bigNum('3'), {x:540,y:620, in:s(7,.3), out:s(8), sfx:'boing'});
    el('c0', row(1,'Parafuso frouxo','mau contato no borne',`<g transform="scale(.75)">${screwIcon()}</g>`), {x:540,y:450, in:s(8), out:s(11)});
    el('c1', row(2,'Interruptor velho','contato interno gasto',`<g transform="scale(.35)">${sw('c1s')}</g>`), {x:540,y:620, in:s(9), out:s(11)});
    el('c2', row(3,'Carga pesada','aquecedor no interruptor',`<g transform="scale(.35)">${heater()}</g>`), {x:540,y:790, in:s(10), out:s(11)});
    el('lim', box(400,460,'interruptor comum',`<g transform="translate(0,-10) scale(.7)">${sw('sl')}</g>${T(0,130,52,'10 A',{c:'r9',fill:K.blue})}${T(0,180,34,'≈ 1.270 W em 127 V',{c:'f6',fill:'#55608A'})}`), {x:290,y:640, in:s(12), out:s(14)});
    el('aq', box(400,460,'aquecedor',`<g transform="translate(0,-20) scale(.75)">${heater()}</g>${T(0,130,52,'1.500 W',{c:'r9',fill:K.orange})}${T(0,180,34,'≈ 12 A: passou!',{c:'f6',fill:'#E0301E'})}`), {x:790,y:640, in:s(13), out:s(14)});
    el('bor', box(860,460,'mau contato no borne',`<g transform="translate(-60,-20)">${borne()}</g>${heatWaves('bhw',[-60,-20,20],-70)}`+sub('b1',0,110,T(0,0,46,'10² × 0,2 Ω ='))+sub('b2',0,180,T(0,0,72,'≈ 20 W de calor',{c:'r9',fill:K.orange}))), {x:540,y:620, in:s(14), out:s(15), subs:[['b1',s(14,.4)],['b2',s(14,.7)]]});
    const SG=[['quente ao toque',thermoIcon()],['cheiro de queimado',stainIcon()],['estalo ou chiado',sparkIcon()],['marca escura',`<circle r="40" fill="#6B3E2A" class="ol"/>`]];
    el('sinais', box(900,500,'sinais de troca',SG.map(([l,ic],i)=>sub('sg'+i,(i%2?215:-215),(i<2?-60:90),`<rect x="-200" y="-55" width="400" height="110" rx="24" fill="#FFE4D2"/><g transform="translate(-140,0) scale(.5)">${ic}</g>${T(-80,14,34,l,{a:'start'})}`)).join('')),
       {x:540,y:640, in:s(15), out:s(17), subs:SG.map((g,i)=>['sg'+i,s(16)+i*.4])});
    el('rule', box(880,460,null,`${T(0,-110,52,'interruptor de luz')}${T(0,0,110,'é pra LUZ',{c:'r9',fill:K.orange})}${T(0,90,44,'carga pesada: circuito próprio',{fill:K.blue})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('desl', box(820,440,null,`<g transform="translate(-230,20) scale(1.2)">${breakerIcon('dsb')}</g>${T(-90,-20,50,'antes de mexer,',{a:'start'})}${T(-90,60,70,'DESLIGA',{a:'start',c:'r9',fill:K.orange})}${T(-90,120,34,'com eletricista qualificado',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-130) scale(.45)">${sw('rs')}</g>${T(0,40,52,'interruptor quente')}${T(0,130,96,'NUNCA é normal',{c:'r9',fill:K.orange,extra:''})}`+sub('rn',0,200,T(0,0,34,'mau contato, peça gasta ou carga demais',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(19), out:s(20), subs:[['rn',s(19,.6)]]});
  },
  fx: (t) => {
    const h = C(s(0,.3),s(0,.7),t); $('sa_hot').setAttribute('opacity',h); animWaves('sa_hw',t,h);
    ['sn','rs'].forEach(i=>{ $(i+'_hot').setAttribute('opacity',1); animWaves(i+'_hw',t,1); });
    $('dsblev').setAttribute('transform',`translate(0,${C(s(18,.3),s(18,.4),t)*45})`);
    animWaves('bhw',t,1);
  },
});
