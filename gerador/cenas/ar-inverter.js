/* EletriK - Ar inverter */
const ac = (lab) => `<rect x="-170" y="-55" width="340" height="110" rx="26" fill="#fff" class="ol"/><path d="M-140,20 H140" stroke="${K.navy}" stroke-width="5"/><path d="M-140,36 H140" stroke="#C9D3F0" stroke-width="5"/><circle cx="130" cy="-22" r="8" fill="#22A55A"/>${lab?T(-60,-12,26,lab,{c:'r9',fill:K.blue}):''}`;
const car = (c) => `<rect x="-110" y="-30" width="220" height="60" rx="20" fill="${c}" class="ol"/><path d="M-60,-30 L-30,-70 H40 L70,-30 Z" fill="${c}" class="ol"/><circle cx="-60" cy="34" r="24" fill="#2A2A2A" class="ol" style="stroke-width:4"/><circle cx="60" cy="34" r="24" fill="#2A2A2A" class="ol" style="stroke-width:4"/>`;
const graph = (id, w=600) => `<path d="M${-w/2},70 H${w/2} M${-w/2},70 V-90" stroke="${K.navy}" stroke-width="5" fill="none"/><path id="${id}" d="" stroke-width="9" fill="none" stroke-linejoin="round"/>`;
const sq = (w=600) => { let d=`M${-w/2},60`; for(let i=0;i<5;i++){const x=-w/2+i*w/5; d+=` L${x},-70 L${x+w/10},-70 L${x+w/10},60 L${x+w/5},60`;} return d; };
const flat = (w=600) => `M${-w/2},60 Q${-w/2+40},-70 ${-w/2+90},-20 L${w/2},-20`;
const filt = () => `<rect x="-70" y="-50" width="140" height="100" rx="10" fill="#C9B79A" class="ol"/>${[-40,-10,20].map(y=>`<path d="M-55,${y} H55" stroke="#8A6A52" stroke-width="5"/>`).join('')}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'AR INVERTER') + T(540,495,78,'COMPENSA?') +
    T(540,640,100,'FAZ A CONTA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(0,-60) scale(1.1)">${ac('INVERTER')}</g>${T(0,140,64,'R$ ?',{c:'r9',fill:K.orange})}`)}</g>` + kikoCover() + coverBanner('DEPENDE DAS HORAS'),
  titles: [[0,2,'Ar inverter compensa?','inverter'],[3,4,'Mas atenção!','atenção'],[5,5,'Depende de quê?','quê'],[6,6,'Fica até o final!','final'],[7,8,'Pensa num carro','carro'],
    [9,15,'Vamos fazer uma conta','conta'],[16,19,'3 vilões da economia','vilões'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[9,9],[16,16],[20,20]], worry: [[14,14]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('aA', box(560,440,null,`<g transform="translate(0,-40) scale(1.2)">${ac('INVERTER')}</g>${T(0,140,60,'vale a pena?',{c:'r9',fill:K.orange})}`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Inverter é propaganda,','gasta tudo igual!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('jTag', pill(300,84,'será?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('g1', card('g1C','convencional', `<g transform="translate(0,-10) scale(.38)">${graph('gq',600)}</g>${T(0,110,36,'liga e desliga',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(4), out:s(5)});
    el('g2', card('g2C','inverter', `<g transform="translate(0,-10) scale(.38)">${graph('gf',600)}</g>${T(0,110,36,'velocidade leve',{c:'r9',fill:'#22A55A'})}`), {x:790,y:640, in:s(4,.5), out:s(5)});
    el('hrs', box(440,460,'depende de...',`<g transform="translate(0,30)"><circle r="100" fill="#fff" class="ol"/><path d="M0,0 V-70 M0,0 L50,30" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/></g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('hrsQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Como funciona',`<g transform="translate(0,40) scale(.4)">${ac()}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Quando vale',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('c1', card('c1C','cidade', `<g transform="translate(0,-10)">${car(K.orange)}</g>${T(0,110,36,'para e arranca',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(7), out:s(9)});
    el('c2', card('c2C','estrada', `<g transform="translate(0,-10)">${car(K.blue)}</g>${T(0,110,36,'constante',{c:'r9',fill:'#22A55A'})}`), {x:790,y:640, in:s(7,.6), out:s(9)});
    el('base', pill(620,84,'12.000 BTUs · 8 h por noite',K.navy,'#fff',38), {x:470,y:940, in:s(9), out:s(12)});
    el('cmp', box(880,420,'consumo por mês',`
       ${T(-410,-55,36,'convencional',{a:'start'})}<rect x="-410" y="-40" width="620" height="56" rx="14" fill="#EEF1FA"/><rect id="bC" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bCt',320,-2,T(0,10,40,'240 kWh',{c:'r9',fill:K.orange}))}
       ${T(-410,70,36,'inverter',{a:'start'})}<rect x="-410" y="85" width="620" height="56" rx="14" fill="#EEF1FA"/><rect id="bI" x="-410" y="85" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bIt',320,123,T(0,10,40,'144 kWh',{c:'r9',fill:K.blue}))}`), {x:540,y:660, in:s(10), out:s(12), subs:[['bCt',s(10,.6)],['bIt',s(11,.6)]]});
    el('k40', starBadge('-40%','aprox.'), {x:200,y:960,s:.85,r:-8, in:s(11,.5), out:s(12), sfx:'ding'});
    el('eco', box(880,460,'kWh a R$ 0,90',`${T(0,-60,52,'economia de')}${T(0,50,110,'~R$ 85/mês',{c:'r9',fill:'#22A55A'})}`+sub('pg',0,150,pill(560,72,'R$ 1.000 a mais: paga em ~1 ano',K.blue,'#fff',34))), {x:540,y:640, in:s(12), out:s(14), subs:[['pg',s(13)]]});
    el('pouco', box(880,440,'usa 1 hora por dia?',`<g transform="translate(-260,0)"><circle r="90" fill="#fff" class="ol"/><path d="M0,0 V-60 M0,0 L45,0" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/></g>${T(-110,-20,52,'~R$ 11/mês',{a:'start',c:'r9',fill:K.orange})}${T(-110,60,48,'leva ANOS',{a:'start'})}`), {x:540,y:620, in:s(14), out:s(15)});
    el('etq', box(860,420,'consumo real',`<g transform="translate(-250,0)"><rect x="-90" y="-120" width="180" height="240" rx="14" fill="#fff" class="ol"/>${['#22A55A','#7CC242','#FFD400','#FF9A3C','#E0301E'].map((c,i)=>`<rect x="-70" y="${-90+i*34}" width="${70+i*18}" height="24" rx="4" fill="${c}"/>`).join('')}</g>${T(-110,-20,48,'na etiqueta',{a:'start'})}${T(-110,60,64,'INMETRO',{a:'start',c:'r9',fill:K.blue})}${T(-110,120,32,'kWh/mês · valores aproximados',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(15), out:s(16)});
    el('e0', row(1,'Tamanho errado','a conta de BTUs no outro vídeo',T(0,16,40,'BTU',{c:'r9',fill:K.orange})), {x:540,y:450, in:s(17), out:s(20)});
    el('e1', row(2,'Instalação malfeita','vazamento, tubo sem isolamento',`<g transform="scale(.5)">${alertIcon()}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('e2', row(3,'Filtro sujo','limpa a cada 15 a 30 dias',`<g transform="scale(.42)">${filt()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(900,460,null,`${sub('r0',0,-80,`<rect x="-410" y="-60" width="820" height="120" rx="24" fill="#E3F6EA"/>${T(-370,16,42,'usa todo dia, horas?',{a:'start'})}${T(370,18,50,'INVERTER',{a:'end',c:'r9',fill:'#22A55A'})}`)}${sub('r1',0,90,`<rect x="-410" y="-60" width="820" height="120" rx="24" fill="#FFE4D2"/>${T(-370,16,42,'de vez em quando?',{a:'start'})}${T(370,18,50,'faz a conta',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(20), out:s(21), subs:[['r0',s(20,.3)],['r1',s(20,.6)]]});
    el('circ', box(820,420,null,`<g transform="translate(-230,0) scale(1.3)">${breakerIcon('cb')}</g>${T(-90,-20,52,'circuito',{a:'start'})}${T(-90,60,64,'PRÓPRIO',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.9)">${ac('INVERTER')}</g>${T(0,40,52,'não é mágica: economiza')}${T(0,140,84,'NO USO LONGO',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  init: () => { $('gq').setAttribute('d',sq()); $('gq').setAttribute('stroke',K.orange); $('gf').setAttribute('d',flat()); $('gf').setAttribute('stroke','#22A55A'); },
  fx: (t) => { $('bC').setAttribute('width',620*eo(C(s(10,.3),s(10,.3)+.7,t))); $('bI').setAttribute('width',372*eo(C(s(11,.3),s(11,.3)+.7,t))); },
});
