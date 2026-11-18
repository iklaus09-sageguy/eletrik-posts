/* EletriK - Lâmpada piscando */
const bulbIcon = (id) => `<g id="${id}_rays">${[0,1,2,3,4,5,6,7].map(i=>{ const a=i*Math.PI/4-Math.PI/2; return `<path d="M${(Math.cos(a)*105).toFixed(1)},${(Math.sin(a)*105-20).toFixed(1)} L${(Math.cos(a)*140).toFixed(1)},${(Math.sin(a)*140-20).toFixed(1)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`; }).join('')}</g>
  <circle id="${id}_halo" cx="0" cy="-20" r="110" fill="#FFE07A" opacity=".35"/>
  <path id="${id}_glass" d="M-70,-20 A70,70 0 1,1 70,-20 Q70,20 40,45 V70 H-40 V45 Q-70,20 -70,-20 Z" fill="#FFE07A" class="ol"/>
  <rect x="-40" y="70" width="80" height="22" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/><rect x="-36" y="92" width="72" height="20" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/><path d="M-16,112 H16 L8,128 H-8 Z" fill="${K.navy}"/>`;
const setBulb = (id, on) => { $(id+'_glass').setAttribute('fill', mixc('#E3E8F6','#FFE07A',on)); $(id+'_rays').style.opacity = on; $(id+'_halo').style.opacity = on*.35; };
const flick = (t, seed=0) => { const v = Math.sin(t*37+seed)*Math.sin(t*13.7+seed*2)+Math.sin(t*5.3+seed); return v>0.2?1:(v>-.4?.35:0); };
const switchIcon = (id, led=false) => `<rect x="-80" y="-120" width="160" height="240" rx="22" fill="#fff" class="ol"/><rect x="-40" y="-70" width="80" height="140" rx="12" fill="#EEF1FA" class="ol" style="stroke-width:4"/>
  <g id="${id}_r"><rect x="-34" y="-64" width="68" height="64" rx="10" fill="#C9D3F0" class="ol" style="stroke-width:3"/></g>${led?`<circle id="${id}_led" cx="0" cy="95" r="10" fill="${K.orange}"/>`:''}`;
const dimmerIcon = () => `<rect x="-80" y="-120" width="160" height="240" rx="22" fill="#fff" class="ol"/><circle r="50" fill="#EEF1FA" class="ol" style="stroke-width:4"/><rect x="-6" y="-46" width="12" height="36" rx="5" fill="${K.navy}" transform="rotate(30)"/>`;
const driverIcon = () => `<rect x="-90" y="-50" width="180" height="100" rx="12" fill="#2E8B57" class="ol"/>${[-50,0,50].map(x=>`<rect x="${x-16}" y="-26" width="32" height="24" rx="4" fill="#1F2A44"/>`).join('')}<circle cx="-50" cy="25" r="10" fill="#E0B13A"/><circle cx="20" cy="25" r="10" fill="#E0B13A"/>
  <path d="${star(8,26,10)}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(70,-48)"/>`;
const looseConn = (id) => `<path d="M-260,0 H-30" stroke="${K.navy}" stroke-width="22" stroke-linecap="round"/><path d="M260,0 H30" stroke="${K.navy}" stroke-width="22" stroke-linecap="round"/>
  <path d="M-260,0 H-30" stroke="#E0301E" stroke-width="10"/><path d="M260,0 H30" stroke="#E0301E" stroke-width="10"/>
  <circle id="${id}_g" r="60" fill="#FF3B1A" opacity="0" filter="url(#blur)"/><rect x="-45" y="-34" width="90" height="68" rx="12" fill="#fff" class="ol"/><circle cx="-14" cy="0" r="10" fill="#B9C2DA" class="ol" style="stroke-width:3"/><circle cx="14" cy="0" r="10" fill="#B9C2DA" class="ol" style="stroke-width:3"/>`;
const wiring = (wrong) => `<path d="M-380,-80 H${wrong?'230':'-120'} ${wrong?'':'M-40,-80 H230'}" stroke="#2A2A2A" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M-380,80 H${wrong?'-120':'230'} ${wrong?'M-40,80 H230':''}" stroke="#4FA3F7" stroke-width="12" fill="none" stroke-linecap="round"/>
  ${T(-380,-100,30,'fase',{a:'start',c:'r8'})}${T(-380,130,30,'neutro',{a:'start',c:'r8',fill:'#2F7DD1'})}
  <g transform="translate(-80,${wrong?80:-80})"><rect x="-44" y="-30" width="88" height="60" rx="12" fill="#fff" class="ol"/>${T(0,10,22,'interr.',{c:'r8'})}</g>
  <path d="M230,-80 V-30 M230,80 V30" stroke="#888" stroke-width="10"/><g transform="translate(300,0) scale(.55)">${bulbIcon(wrong?'wbW':'wbR')}</g>`;
const roomScene = (id) => `<rect x="-260" y="-250" width="520" height="500" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-260" y="-250" width="520" height="500" rx="30" fill="#FBF3E4" class="ol"/>
  <path d="M0,-250 V-120" stroke="${K.navy}" stroke-width="8"/><g transform="translate(0,-40) scale(1.1)">${bulbIcon(id)}</g>
  <rect x="-260" y="170" width="520" height="80" fill="#E8D8BD"/><rect x="140" y="40" width="70" height="100" rx="10" fill="#fff" class="ol" style="stroke-width:4"/><rect x="160" y="60" width="30" height="34" rx="6" fill="#C9D3F0"/>
  <g id="${id}_new" opacity="0"><path d="${star(8,60,22)}" fill="#fff" class="ol" transform="translate(160,-170)"/></g>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'SUA LÂMPADA') + T(540,495,78,'VIVE PISCANDO?') +
    T(540,640,104,'NÃO É A LÂMPADA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(610,990) scale(.8)">${roomScene('cvl')}</g>` +
    `<g transform="translate(890,790) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,34,'SINTOMA!',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('PODE SER SÉRIO'),
  init: () => setBulb('cvl', .35),
  titles: [[0,2,'Lâmpada piscando?','piscando'],[3,4,'Mas atenção!','atenção'],[5,5,'É só o sintoma','sintoma'],[6,6,'Pisca desligada?!','desligada'],[7,7,'Fica até o final!','final'],
    [8,11,'Causas simples','simples'],[12,13,'Sinal de alerta','alerta'],[14,18,'Vamos fazer uma conta','conta'],[19,22,'Pisca desligada?','desligada'],
    [23,25,'Regra de ouro','ouro'],[26,26,'Resumindo',''],[27,28,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [],
  palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 27,
  point: [[3,3],[7,7],[8,8],[12,12],[23,23],[24,24]], worry: [[4,4],[6,6],[17,18],[22,22]],
  drop: [[s(6),s(7)],[s(17),s(19)],[s(22),s(23)]], sizzle: [[s(17),s(18,.8)]],
  events: [[s(1,.7),'ding'],[s(1,.7),'whoosh']],
  specs: () => {
    el('room', roomScene('rA'), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Troca a lâmpada','que resolve!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('novaTag', pill(300,84,'novinha!',K.blue,'#fff',48), {x:540,y:880, in:s(2,.1), out:s(4,.3), sfx:'ding'});
    el('deNovo', stampSVG('PISCANDO','DE NOVO!',K.orange,600), {x:540,y:880,r:-7, in:s(4,.4), out:s(5), sfx:'buzz'});
    el('sint', box(820,440,null,`<g transform="translate(-230,10) scale(1.1)">${bulbIcon('sb')}</g>${T(-90,-30,54,'a lâmpada é',{a:'start'})}${T(-90,70,84,'SINTOMA',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(5,.1), out:s(6)});
    el('desl', box(440,460,'desligada?!',`<g transform="translate(-90,40) scale(.8)">${switchIcon('sw0')}</g><g transform="translate(90,20) scale(.75)">${bulbIcon('db')}</g>`), {x:470,y:620, in:s(6,.2), out:s(7)});
    el('deslQ', bigQ(), {x:860,y:480, in:s(6,.55), out:s(7), sfx:'boing'});
    [['1','Causas',`<g transform="translate(0,30) scale(.6)">${bulbIcon('pv1')}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','É sério?',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(7,[.2,.45,.72][i]), out:s(8)}));
    el('row0', row(1,'Lâmpada frouxa','ou soquete com mau contato',`<g transform="scale(.45) rotate(15)">${bulbIcon('r0b')}</g>`), {x:540,y:450, in:s(9), out:s(12)});
    el('row1', row(2,'LED de baixa qualidade','o circuito dentro falha',`<g transform="scale(.6)">${driverIcon()}</g>`), {x:540,y:620, in:s(10), out:s(12)});
    el('row2', row(3,'Dimmer incompatível','lâmpada não dimerizável',`<g transform="scale(.5)">${dimmerIcon()}</g>`), {x:540,y:790, in:s(11), out:s(12)});
    el('todas', box(880,460,'todas piscam?',`<g transform="translate(-300,40) scale(1.2)">${showerIcon()}</g>${[0,1,2].map(i=>`<g transform="translate(${-60+i*170},20) scale(.7)">${bulbIcon('tb'+i)}</g>`).join('')}`+sub('todTag',0,170,pill(560,66,'mau contato ou neutro ruim',K.orange,'#fff',34))),
       {x:540,y:620, in:s(12), out:s(14), subs:[['todTag',s(13,.1)]]});
    el('c25', card('c25C','chuveiro', `<g transform="translate(30,40) scale(1.1)">${showerIcon()}</g>${T(0,140,64,'25 A',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(15), out:s(17)});
    el('cConn', card('cConnC','conexão frouxa', `<g transform="translate(0,20) scale(.6)">${looseConn('lc')}</g>${T(0,140,64,'0,5 Ω',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(16), out:s(17)});
    el('calc', box(860,460,'P = I² × R',`${T(0,-60,60,'25² × 0,5')}`+sub('cR',0,70,T(0,0,120,'≈ 300 W',{c:'r9',fill:K.orange}))+sub('cTag',0,170,pill(480,66,'um aquecedor na parede',K.navy,'#fff',34))),
       {x:540,y:620, in:s(17), out:s(18), subs:[['cR',s(17,.35)],['cTag',s(17,.7)]]});
    el('fogo', box(860,440,null,`<g transform="translate(0,-20)">${looseConn('lf')}</g>${smokeSVG('lfs',5)}`+sub('fogoT',0,140,pill(520,80,'começo de INCÊNDIO','#E0301E','#fff',40))), {x:540,y:620, in:s(18), out:s(19), subs:[['fogoT',s(18,.4)]]});
    el('wrongW', box(900,460,'interruptor no NEUTRO',`<g transform="translate(-40,20) scale(.95)">${wiring(true)}</g>`), {x:540,y:620, in:s(20), out:s(21)});
    el('wrongX', badgeX('wrongXb'), {x:960,y:420, in:s(20,.5), out:s(21), sfx:'buzz'});
    el('swLed', card('swLedC','com luzinha', `<g transform="translate(0,30) scale(.8)">${switchIcon('sl',true)}</g>`), {x:290,y:640, in:s(21), out:s(23)});
    el('fraca', card('fracaC','LED fraquinho', `<g transform="translate(0,30) scale(.85)">${bulbIcon('fb')}</g>`), {x:790,y:640, in:s(22), out:s(23)});
    el('pouco', pill(520,80,'um pouquinho de corrente',K.orange,'#fff',38), {x:500,y:900, in:s(21,.5), out:s(23)});
    el('rule', box(880,480,null,`${sub('ru0',0,-100,`<rect x="-400" y="-70" width="800" height="140" rx="26" fill="#EEF1FA"/><g transform="translate(-320,0) scale(.5)">${bulbIcon('ru0b')}</g>${T(-230,-6,46,'UMA pisca?',{a:'start',c:'r9'})}${T(-230,44,38,'olha a lâmpada',{a:'start',fill:K.blue})}`)}
       ${sub('ru1',0,90,`<rect x="-400" y="-70" width="800" height="140" rx="26" fill="#FFE4D2"/>${[0,1,2].map(i=>`<g transform="translate(${-350+i*50},0) scale(.32)">${bulbIcon('ru1b'+i)}</g>`).join('')}${T(-200,-6,46,'TODAS piscam?',{a:'start',c:'r9',fill:K.orange})}${T(-200,44,38,'olha a instalação',{a:'start',fill:K.orange})}`)}`),
       {x:540,y:630, in:s(23), out:s(24), subs:[['ru0',s(23,.3)],['ru1',s(23,.65)]]});
    el('rightW', box(900,460,'o certo: corta a FASE',`<g transform="translate(-40,20) scale(.95)">${wiring(false)}</g>`), {x:540,y:620, in:s(24), out:s(25)});
    el('rightOk', badgeOK('rightOkb'), {x:960,y:420, in:s(24,.5), out:s(25), sfx:'ding'});
    el('pro', proCard(), {x:540,y:620, in:s(25), out:s(26), subs:[['proOk',s(25,.6)]]});
    el('resumo', box(860,480,null,`<g transform="translate(0,-120) scale(.7)">${bulbIcon('rsb')}</g>${T(0,40,56,'lâmpada piscando é')}${T(0,140,100,'SINTOMA',{c:'r9',fill:K.orange})}`+sub('resNo',0,205,T(0,0,34,'às vezes simples, às vezes sério',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(26), out:s(27), subs:[['resNo',s(26,.6)]]});
  },
  fx: (t) => {
    const fl = (t<s(1,.7) && t>s(0,.1)) || t>s(4,.1);
    setBulb('rA', fl ? flick(t) : 1);
    $('rA_new').setAttribute('opacity', C(s(1,.7),s(1,.75),t)*(1-C(s(2,.8),s(3),t)));
    setBulb('sb', flick(t,1)); setBulb('db', .25+.2*flick(t,2)); setBulb('pv1', 1); setBulb('r0b', flick(t,3)); setBulb('rsb', flick(t,4));
    const showerOn = t>s(12,.4); [0,1,2].forEach(i=>setBulb('tb'+i, showerOn ? (flick(t,7)>.5?1:.3) : 1));
    $('lc_g').setAttribute('opacity', .6+.3*Math.sin(t*20)); $('lf_g').setAttribute('opacity', .9);
    animSmoke('lfs', t, s(18,.1), 0, -40, 5, 120, 180);
    setBulb('wbW', .25+.25*flick(t,5)); setBulb('wbR', 0); setBulb('fb', .2+.25*flick(t,6));
    $('sw0_r').setAttribute('transform','translate(0,64)'); $('sl_r').setAttribute('transform','translate(0,64)');
    $('sl_led').style.opacity = .6+.4*Math.sin(t*6);
    setBulb('ru0b', flick(t,8)); [0,1,2].forEach(i=>setBulb('ru1b'+i, flick(t,9)));
  },
});
