/* EletriK - Geladeira 5 erros */
const fridge = (id) => `<rect x="-100" y="-170" width="200" height="340" rx="22" fill="#F4F6FB" class="ol"/><path d="M-100,-40 H100" stroke="${K.navy}" stroke-width="6"/><rect x="62" y="-140" width="14" height="70" rx="7" fill="${K.navy}"/><rect x="62" y="-10" width="14" height="90" rx="7" fill="${K.navy}"/>`;
const paper = () => `<rect x="-30" y="-60" width="90" height="120" rx="6" fill="#fff" class="ol" style="stroke-width:4"/><path d="M-15,-35 H40 M-15,-15 H40 M-15,5 H30" stroke="#C9D3F0" stroke-width="5"/>`;
const pot = () => `<path d="M-70,-20 H70 V40 Q70,70 40,70 H-40 Q-70,70 -70,40 Z" fill="#9AA3BD" class="ol"/><rect x="-80" y="-34" width="160" height="18" rx="8" fill="#7A84A0" class="ol" style="stroke-width:4"/>${[-30,0,30].map(x=>`<path d="M${x},-44 q-12,-20 0,-40 t0,-40" stroke="#C9D3F0" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}`;
const ice = () => `<rect x="-90" y="-60" width="180" height="120" rx="14" fill="#DDF3FF" class="ol"/><rect x="-80" y="-50" width="160" height="34" rx="10" fill="#fff" opacity=".9"/>`;
const wall = () => `<rect x="-20" y="-170" width="40" height="340" fill="#C9B79A" class="ol"/>`;
const door = (id) => `<g transform="translate(-100,0)"><rect x="0" y="-170" width="200" height="340" rx="22" fill="#F4F6FB" class="ol" transform="skewY(-12) scale(.6,1)"/></g><rect x="-100" y="-170" width="200" height="340" rx="22" fill="#BFE9FF" class="ol" opacity=".6"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'GELADEIRA:') + T(540,495,78,'5 ERROS QUE') +
    T(540,640,100,'AUMENTAM A CONTA',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,460,null,`<g transform="translate(-60,10) scale(1.05)">${fridge('cv')}</g><g transform="translate(130,40) scale(1.3)">${paper()}</g>`)}</g>` + kikoCover() + coverBanner('TESTE DO PAPEL'),
  titles: [[0,2,'Geladeira gastando?','gastando'],[3,4,'Mas atenção!','atenção'],[5,5,'O teste do papel','papel'],[6,6,'Fica até o final!','final'],
    [7,12,'5 erros comuns','erros'],[13,17,'Vamos fazer uma conta','conta'],[18,18,'Geladeira antiga?','antiga'],[19,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[10,10],[13,13],[19,19]], worry: [[9,9],[16,16]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('gA', box(440,460,null,`<g transform="scale(1.15)">${fridge('ga')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Geladeira é assim,','gasta o que gasta!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('jTag', pill(380,84,'não tem jeito?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('calor', box(880,460,'ela joga o calor atrás',`<g transform="translate(-220,0) scale(1.05)">${fridge('cl')}</g><g id="clW">${heatWaves('clw',[-100,-75,-50],40)}</g>${T(30,-20,46,'atrapalhou?',{a:'start'})}${T(30,60,60,'motor sofre',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('pap', box(440,460,'o teste do papel',`<g transform="translate(0,30) scale(1.8)">${paper()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('papQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Os 5 erros',T(0,70,110,'5',{c:'r9',fill:K.orange})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Teste do papel',`<g transform="translate(-10,45) scale(.7)">${paper()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    const ER=[['Colada na parede','perto do fogão ou no sol',`<g transform="scale(.3)">${fridge('i1')}</g>`],['Comida quente','amornar, até 2 h fora',`<g transform="scale(.45)">${pot()}</g>`],['Porta aberta','pensando no que pegar',`<g transform="scale(.3)">${bigQ()}</g>`],['Borracha ressecada','faz o teste do papel',`<g transform="scale(.5)">${paper()}</g>`],['Gelo grosso','passou de 0,5 cm? descongela',`<g transform="scale(.4)">${ice()}</g>`]];
    el('erros', box(900,560,null,ER.map(([a,b,ic],i)=>sub('er'+i,0,-212+i*106,`<rect x="-420" y="-48" width="840" height="96" rx="22" fill="#FFE4D2"/><circle cx="-370" cy="0" r="32" fill="${K.blue}" class="ol" style="stroke-width:4"/>${T(-370,13,36,i+1,{c:'r9',fill:'#fff'})}<g transform="translate(-280,0)">${ic}</g>${T(-220,-4,38,a,{a:'start'})}${T(-220,34,28,b,{a:'start',c:'f6',fill:'#55608A'})}`)).join('')), {x:540,y:630, in:s(7), out:s(11), subs:ER.map((e,i)=>['er'+i,s(7+i+(i>3?1:0))])});
    el('tp', box(880,480,'o teste do papel',`<g transform="translate(-230,10) scale(1.1)">${fridge('tp')}</g><g id="tpP" transform="translate(-130,0) scale(.9)">${paper()}</g>${T(0,-40,46,'saiu FÁCIL?',{a:'start',c:'r9',fill:K.orange})}${T(0,30,44,'vedação ruim',{a:'start'})}${T(0,100,36,'testa vários pontos',{a:'start',fill:K.blue})}`), {x:540,y:640, in:s(11), out:s(12)});
    el('gelo', box(880,440,'gelo grosso isola',`<g transform="translate(-230,0) scale(1.3)">${ice()}</g>${T(-50,-20,52,'passou de',{a:'start'})}${T(-50,70,80,'0,5 cm?',{a:'start',c:'r9',fill:K.blue})}${T(-50,130,36,'descongela',{a:'start',fill:K.orange})}`), {x:540,y:620, in:s(12,.1), out:s(13)});
    el('k0', box(860,440,'pela etiqueta',`<g transform="translate(-250,0) scale(.95)">${fridge('k0')}</g>${T(-100,-30,64,'40 kWh/mês',{a:'start',c:'r9',fill:K.blue})}`+sub('k0b',-100,60,T(0,0,52,'× R$ 0,90 = R$ 36',{a:'start'}))), {x:540,y:620, in:s(13), out:s(15), subs:[['k0b',s(14)]]});
    el('k1', box(880,460,'com os erros',`${sub('x0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,42,'~30% a mais',{a:'start'})}${T(360,18,52,'~52 kWh',{a:'end',c:'r9',fill:K.orange})}`)}${sub('x1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,42,'jogado fora',{a:'start'})}${T(360,18,52,'R$ 130/ano',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(15), out:s(18), subs:[['x0',s(15,.2)],['x1',s(16,.2)]]});
    el('aprox', pill(560,76,'números aproximados',K.navy,'#fff',38), {x:540,y:930, in:s(17), out:s(18)});
    el('velha', box(860,420,'geladeira muito antiga?',`<g transform="translate(-250,0) scale(.95)">${fridge('vl')}</g>${T(-110,-20,48,'às vezes trocar',{a:'start'})}${T(-110,60,64,'sai + barato',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('rule', box(880,440,null,`${T(0,-60,60,'deixa ela',{})}${T(0,40,90,'RESPIRAR',{c:'r9',fill:K.blue})}${T(0,130,60,'e FECHAR bem',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-90) scale(.6)">${fridge('rs')}</g>${T(0,90,48,'erro pequeno vira')}${T(0,180,84,'CONTA GRANDE',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(20), out:s(21)});
  },
  fx: (t) => { animWaves('clw',t,1); const p=eio(C(s(11,.5),s(11,.5)+1,t)); $('tpP').setAttribute('transform',`translate(${-130+p*90},0) scale(.9)`); },
});
