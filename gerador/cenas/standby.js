/* EletriK - Standby */
const tvSb = (id) => `<g transform="scale(1.3)">${tv()}</g><circle id="${id}_led" cx="120" cy="105" r="11" fill="#E0301E" class="ol" style="stroke-width:3"/>`;
const decoder = (id) => `<rect x="-150" y="-45" width="300" height="90" rx="16" fill="#2B2F3A" class="ol"/><rect x="-110" y="-20" width="110" height="40" rx="8" fill="#0F1420"/>
  <text x="-55" y="12" text-anchor="middle" class="r9" font-size="30" fill="#3DF07A">12:00</text><circle id="${id}_led" cx="110" cy="0" r="10" fill="#3DF07A"/>`;
const consoleIcon = (id) => `<rect x="-60" y="-150" width="120" height="300" rx="26" fill="#fff" class="ol"/><rect x="-40" y="-150" width="80" height="300" rx="18" fill="#2B2F3A"/><circle id="${id}_led" cx="0" cy="-110" r="10" fill="#FF9A3C"/>`;
const pcIcon = () => `<rect x="-70" y="-120" width="140" height="240" rx="16" fill="#3A4152" class="ol"/><circle cx="0" cy="-80" r="14" fill="#9FB3FF" class="ol" style="stroke-width:3"/><path d="M-40,0 H40 M-40,20 H40" stroke="#5A6378" stroke-width="6"/>`;
const remoteIcon = () => `<rect x="-36" y="-110" width="72" height="220" rx="24" fill="#2B2F3A" class="ol"/><circle cx="0" cy="-70" r="14" fill="#E0301E"/>${[0,1,2].map(r=>[0,1].map(c=>`<circle cx="${-14+c*28}" cy="${-20+r*36}" r="9" fill="#5A6378"/>`).join('')).join('')}`;
const plugMeter = (id) => `<rect x="-110" y="-140" width="220" height="280" rx="30" fill="#fff" class="ol"/><rect x="-80" y="-110" width="160" height="80" rx="12" fill="#C8F0D4" class="ol" style="stroke-width:4"/>
  <text id="${id}_d" x="0" y="-55" text-anchor="middle" class="r9" font-size="44" fill="${K.navy}">15,2 W</text><g transform="translate(0,55) scale(.55)">${outletIcon('',10).replace(/<text[^]*?<\/text>/,'')}</g>`;
const stripSw = (id) => `<rect x="-220" y="-45" width="440" height="90" rx="30" fill="#fff" class="ol"/>${[-150,-60,30].map(x=>`<g transform="translate(${x},0)"><circle cx="-9" cy="6" r="6" fill="${K.navy}"/><circle cx="9" cy="6" r="6" fill="${K.navy}"/><circle cx="0" cy="-9" r="6" fill="${K.navy}"/></g>`).join('')}
  <rect x="110" y="-28" width="80" height="56" rx="10" fill="#EEF1FA" class="ol" style="stroke-width:4"/><g id="${id}_sw"><rect x="116" y="-22" width="34" height="44" rx="8" fill="#E0301E"/></g>`;
const fridgeS = () => `<rect x="-90" y="-150" width="180" height="300" rx="20" fill="#F4F6FB" class="ol"/><path d="M-90,-40 H90" stroke="${K.navy}" stroke-width="6"/><rect x="55" y="-125" width="12" height="60" rx="6" fill="${K.navy}"/><rect x="55" y="-10" width="12" height="80" rx="6" fill="${K.navy}"/>`;
const listRow = (id,ic,label,w,y) => sub(id,0,y,`<rect x="-400" y="-48" width="800" height="96" rx="22" fill="#EEF1FA"/><g transform="translate(-330,0) scale(.32)">${ic}</g>${T(-260,14,42,label,{a:'start'})}${T(370,16,48,w,{a:'end',c:'r9',fill:K.orange})}`);

VIDEO({
  cover: () => coverBase() + T(540,410,78,'TV DESLIGADA') + T(540,495,78,'GASTA ENERGIA?') +
    T(540,640,104,'GASTA SIM!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990)">${box(560,420,null,`<g transform="translate(0,-10)">${tvSb('cvt')}</g>`)}</g>` +
    `<g transform="translate(880,800) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,30,'R$ 200/ANO',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('O GASTO INVISÍVEL'),
  titles: [[0,2,'TV desligada gasta?','gasta'],[3,4,'Mas atenção!','atenção'],[5,5,'Os gastões','gastões'],[6,6,'Fica até o final!','final'],
    [7,8,'Como saber','saber'],[9,12,'Os gastões da casa','gastões'],[13,18,'Vamos fazer uma conta','conta'],[19,21,'Como medir e cortar','cortar'],
    [22,23,'Regra de ouro','ouro'],[24,24,'Resumindo',''],[25,26,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 25,
  point: [[3,3],[6,6],[8,8],[13,13],[22,22]], worry: [[5,5],[18,18],[21,21]],
  drop: [[s(5),s(6)],[s(18,.2),s(19)]], sizzle: [],
  events: [[s(20,.6),'clack2']],
  specs: () => {
    el('tvA', box(600,440,null,`<g transform="translate(0,-10)">${tvSb('ta')}</g>`), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Desligada não','gasta nada!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('logTag', pill(360,84,'parece lógico',K.navy,'#fff',44), {x:540,y:880, in:s(2,.1), out:s(4,.2)});
    el('sbTag', stampSVG('NÃO ESTÁ DESLIGADA','ESTÁ EM ESPERA',K.orange,820), {x:540,y:880,r:-6, in:s(4,.3), out:s(5), sfx:'buzz'});
    el('gast', box(440,460,'o gastão',`<g transform="translate(0,40) scale(1.2)" opacity=".95">${decoder('gq').replace('#3DF07A','#2B2F3A')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('gastQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Os gastões',`<g transform="translate(0,30) scale(.6)">${decoder('pv1')}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Cortar',`<g transform="translate(0,25) scale(.4)">${stripSw('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('sinais', box(880,460,'sinais de standby',`${sub('si0',-280,10,`<circle r="34" fill="#E0301E" class="ol"/>${T(0,110,34,'luzinha',{c:'r8'})}`)}${sub('si1',0,10,`<rect x="-80" y="-36" width="160" height="72" rx="10" fill="#0F1420"/>${T(0,14,36,'12:00',{c:'r9',fill:'#3DF07A'})}${T(0,110,34,'relógio',{c:'r8'})}`)}${sub('si2',280,0,`<g transform="scale(.6)">${remoteIcon()}</g>${T(0,120,34,'controle',{c:'r8'})}`)}`+sub('gasT',0,170,pill(320,66,'= GASTANDO',K.orange,'#fff',36))),
       {x:540,y:620, in:s(8), out:s(9), subs:[['si0',s(8,.05)],['si1',s(8,.25)],['si2',s(8,.5)],['gasT',s(8,.8)]]});
    el('aprox', pill(600,76,'valores aproximados · variam por modelo',K.navy,'#fff',32), {x:540,y:400, in:s(9,.4), out:s(13)});
    el('lista', box(880,440,null,`${listRow('l0',decoder('ld'),'Decodificador / TV box','15 W',-120)}${listRow('l1',consoleIcon('lc'),'Videogame em espera','10 W',0)}${listRow('l2',pcIcon(),'PC, micro-ondas, som','5 W',120)}`),
       {x:540,y:680, in:s(10), out:s(14), subs:[['l0',s(10)],['l1',s(11)],['l2',s(12)]]});
    el('total', box(700,360,'somando',`${T(0,60,140,'≈ 30 W',{c:'r9',fill:K.orange})}${T(0,130,40,'parece pouco...',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(14), out:s(15), sfx:'boing'});
    el('horas', box(820,400,'o dia inteiro, o mês inteiro',`${T(0,-10,72,'24 h × 30 dias',{c:'r9'})}`+sub('h720',0,90,T(0,0,90,'= 720 h',{c:'r9',fill:K.blue}))), {x:540,y:620, in:s(15), out:s(16), subs:[['h720',s(15,.6)]]});
    el('kwh', box(820,400,null,`${T(0,-60,64,'30 W × 720 h')}<path d="M-250,-20 H250" stroke="${K.navy}" stroke-width="6"/>`+sub('kw',0,80,T(0,0,110,'≈ 21 kWh',{c:'r9',fill:K.orange}))+T(0,150,34,'por mês',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(16), out:s(17), subs:[['kw',s(16,.5)]]});
    el('reais', box(820,400,null,`${T(0,-60,60,'21 kWh × R$ 0,80')}`+sub('rs',0,70,T(0,0,120,'≈ R$ 17',{c:'r9',fill:K.orange}))+T(0,150,32,'por mês · valor ilustrativo',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(17), out:s(18), subs:[['rs',s(17,.5)]]});
    el('ano', box(860,440,'no ano',`${T(0,40,150,'R$ 200+',{c:'r9',fill:'#E0301E'})}${T(0,130,40,'por aparelho que nem está em uso',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(18), out:s(19), sfx:'boing'});
    el('medidor', box(820,460,'medidor de tomada',`<g transform="translate(-200,10) scale(1.05)">${plugMeter('pm')}</g>${T(20,-30,48,'mostra o',{a:'start'})}${T(20,40,48,'consumo de',{a:'start'})}${T(20,110,48,'cada aparelho',{a:'start',fill:K.blue})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('regua', box(880,440,'régua com interruptor',`<g transform="translate(-20,0) scale(1.4)">${stripSw('rg')}</g>`+sub('rgT',0,150,pill(520,70,'desliga tudo de uma vez',K.blue,'#fff',36))), {x:540,y:620, in:s(20), out:s(21), subs:[['rgT',s(20,.5)]]});
    el('geladeira', box(820,460,'mas atenção',`<g transform="translate(-220,20) scale(.95)">${fridgeS()}</g>${T(-80,-20,52,'geladeira e',{a:'start'})}${T(-80,50,52,'freezer:',{a:'start'})}${T(-80,130,62,'NÃO desliga',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('rule', box(880,440,null,`<circle cx="-300" cy="-30" r="44" fill="#E0301E" class="ol"/>${T(-220,-40,52,'luzinha acesa',{a:'start'})}${T(-220,20,40,'e não está usando?',{a:'start',c:'f6',fill:'#55608A'})}`+sub('ruT',0,130,pill(560,90,'TIRA DA TOMADA',K.orange,'#fff',50))), {x:540,y:620, in:s(22,.15), out:s(23), subs:[['ruT',s(22,.6)]]});
    el('inm', box(820,420,null,`<g transform="translate(0,-40) scale(1.1)">${stripSw('in')}</g>`+sub('inT',0,110,pill(460,76,'com selo do Inmetro ✓',K.blue,'#fff',38))), {x:540,y:620, in:s(23), out:s(24), subs:[['inT',s(23,.4)]]});
    el('resumo', box(860,480,null,`<g transform="translate(0,-120) scale(.7)">${tvSb('rt')}</g>${T(0,60,56,'desligado')}${T(0,160,100,'NÃO é zero',{c:'r9',fill:K.orange})}`+sub('resNo',0,215,T(0,0,34,'pouquinho, mas o tempo todo',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(24), out:s(25), subs:[['resNo',s(24,.6)]]});
  },
  fx: (t) => {
    const blink = .55+.45*Math.sin(t*4);
    ['ta','rt'].forEach(i=>$(i+'_led').style.opacity = blink);
    ['ld','pv1'].forEach(i=>$(i+'_led').style.opacity = blink); $('lc_led').style.opacity = blink;
    $('pm_d').textContent = (15 + Math.round(Math.sin(t*3)*3)/10).toFixed(1).replace('.',',')+' W';
    const off = C(s(20,.6),s(20,.65),t); $('rg_sw').setAttribute('transform',`translate(${off*34},0)`); $('rg_sw').firstChild.setAttribute('fill', off>.5?'#9AA3BD':'#E0301E');
  },
});
