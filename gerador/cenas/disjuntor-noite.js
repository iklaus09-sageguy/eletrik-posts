/* EletriK - Mito ou verdade: desligar o disjuntor à noite economiza? */
const moon = () => `<path d="M30,-60 A70,70 0 1,0 30,60 A55,55 0 1,1 30,-60 Z" fill="#FFE07A" class="ol"/>`;
const tvSb = (id) => `<g transform="scale(1.2)">${tv()}</g><circle id="${id}_led" cx="110" cy="100" r="11" fill="#E0301E" class="ol" style="stroke-width:3"/>`;
const fridgeS = () => `<rect x="-90" y="-150" width="180" height="300" rx="20" fill="#F4F6FB" class="ol"/><path d="M-90,-40 H90" stroke="${K.navy}" stroke-width="6"/><rect x="55" y="-125" width="12" height="60" rx="6" fill="${K.navy}"/><rect x="55" y="-10" width="12" height="80" rx="6" fill="${K.navy}"/>`;
const wifi = () => `${[60,40,20].map(r=>`<path d="M${-r},${-r*.2} A${r},${r} 0 0,1 ${r},${-r*.2}" stroke="${K.blue}" stroke-width="12" fill="none" stroke-linecap="round" transform="translate(0,${30-r*.6})"/>`).join('')}<circle cx="0" cy="40" r="10" fill="${K.blue}"/>`;
const stripSw = (id) => `<rect x="-220" y="-45" width="440" height="90" rx="30" fill="#fff" class="ol"/>${[-150,-60,30].map(x=>`<g transform="translate(${x},0)"><circle cx="-9" cy="6" r="6" fill="${K.navy}"/><circle cx="9" cy="6" r="6" fill="${K.navy}"/><circle cx="0" cy="-9" r="6" fill="${K.navy}"/></g>`).join('')}<rect x="110" y="-28" width="80" height="56" rx="10" fill="#EEF1FA" class="ol" style="stroke-width:4"/><rect x="116" y="-22" width="34" height="44" rx="8" fill="#E0301E"/>`;
const suitcase = () => `<rect x="-90" y="-60" width="180" height="140" rx="20" fill="${K.orange}" class="ol"/><rect x="-36" y="-90" width="72" height="34" rx="10" fill="none" stroke="${K.navy}" stroke-width="10"/><path d="M-50,-60 V80 M50,-60 V80" stroke="${K.navy}" stroke-width="6"/>`;
const shield = () => `<path d="M0,-80 L70,-55 Q70,40 0,85 Q-70,40 -70,-55 Z" fill="${K.blue}" class="ol"/><path d="M-28,0 L-8,22 L30,-22" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'DESLIGAR O DISJUNTOR') + T(540,495,78,'À NOITE ECONOMIZA?') +
    T(540,640,104,'MITO OU VERDADE?',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(610,970) scale(.8)">${quadro('cv_')}</g><g transform="translate(860,820) scale(.9)">${moon()}</g>` + kikoCover() + coverBanner('A CONTA SURPREENDE'),
  init: () => { $('cv_lev').setAttribute('transform','translate(0,56)'); $('cv_stOn').style.display='none'; $('cv_lab40').style.display='none'; $('cv_strike').style.display='none'; $('cv_stOff').querySelector('text').textContent='DESLIGADO'; },
  titles: [[0,2,'Desligar à noite?','noite'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,9,'Mito ou verdade?','verdade'],
    [10,12,'Vamos fazer uma conta','conta'],[13,16,'O que você arrisca','arrisca'],[17,19,'O que fazer no lugar','no lugar'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(1,.55),820,390,8,'CLACK!','clack']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[7,7],[20,20]], worry: [[4,5],[14,14]],
  drop: [[s(5),s(6)],[s(13),s(14)]], sizzle: [], events: [],
  specs: () => {
    el('houseW', house(), {x:650,y:1262,s:1.2, in:s(0), out:s(3), sfx:'boing'});
    el('moonW', moon(), {x:880,y:420, in:s(0,.2), out:s(3)});
    el('quadroW', quadro(), {x:470,y:560, in:s(0,.3), out:s(4)});
    el('bubble', bubbleSVG('Desliga tudo,','economiza!'), {x:540,y:830, in:s(1,.15), out:s(2,.1), sfx:'boing'});
    el('espTag', pill(300,84,'esperto?',K.navy,'#fff',46), {x:540,y:830, in:s(2,.1), out:s(4)});
    el('pouca', stampSVG('ECONOMIA','PEQUENA',K.orange,520), {x:540,y:880,r:-7, in:s(4,.3), out:s(5), sfx:'buzz'});
    el('sofre', box(440,460,'quem sofre?',`<g transform="translate(0,30) scale(1.1)" opacity=".9">${fridgeS().replace('#F4F6FB',K.navy)}</g>`), {x:470,y:620, in:s(5,.15), out:s(6)});
    el('sofreQ', bigQ(), {x:860,y:480, in:s(5,.45), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O risco',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`],['3','No lugar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('mito', box(860,440,null,`${T(0,-60,60,'mito ou verdade?')}`+sub('meio',0,70,`<rect x="-330" y="-70" width="660" height="140" rx="22" fill="#fff" stroke="${K.orange}" stroke-width="12" transform="rotate(-4)"/>${T(0,28,84,'MEIO VERDADE',{c:'r9',fill:K.orange,extra:'transform="rotate(-4)"'})}`)), {x:540,y:620, in:s(7), out:s(8), subs:[['meio',s(7,.55)]]});
    el('sb', box(820,460,'corta o standby',`<g transform="translate(-200,20)">${tvSb('ts')}</g>${T(30,-20,52,'do circuito',{a:'start'})}${T(30,50,52,'desligado',{a:'start'})}`+sub('w30',150,150,pill(320,70,'≈ 30 W na casa',K.blue,'#fff',36))), {x:540,y:620, in:s(8), out:s(10), subs:[['w30',s(9,.3)]]});
    el('calc', box(860,440,'por noite',`${T(0,-50,64,'30 W × 8 h')}<path d="M-240,-10 H240" stroke="${K.navy}" stroke-width="6"/>`+sub('c1',0,100,T(0,0,110,'= 0,24 kWh',{c:'r9',fill:K.blue}))), {x:540,y:620, in:s(11), out:s(12), subs:[['c1',s(11,.6)]]});
    el('mes', box(860,440,'no mês',`${T(0,-40,76,'≈ 7 kWh',{c:'r9'})}`+sub('c2',0,90,T(0,0,120,'≈ R$ 5,70',{c:'r9',fill:K.orange}))+T(0,170,30,'valor ilustrativo',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(12), out:s(13), subs:[['c2',s(12,.5)]]});
    el('poucoT', pill(320,90,'POUCO.',K.orange,'#fff',56), {x:540,y:620, in:s(13), out:s(14), sfx:'boing'});
    el('r0', row(1,'Geladeira esquenta','gasta pra esfriar de novo',`<g transform="scale(.32)">${fridgeS()}</g>`), {x:540,y:450, in:s(14), out:s(17)});
    el('r1', row(2,'Fica tudo sem energia','freezer, roteador, alarme',`<g transform="scale(.8)">${wifi()}</g>`), {x:540,y:620, in:s(15), out:s(17)});
    el('r2', row(3,'Disjuntor ≠ interruptor','não é pro dia a dia',`<g transform="scale(.6)">${breakerIcon('rb')}</g>`), {x:540,y:790, in:s(16), out:s(17)});
    el('regua', box(880,440,'no lugar',`<g transform="translate(0,-20) scale(1.3)">${stripSw('rg')}</g>`+sub('rgT',0,140,pill(560,70,'tira da tomada o que fica em standby',K.blue,'#fff',32))), {x:540,y:620, in:s(18), out:s(19), subs:[['rgT',s(18,.4)]]});
    el('viagem', box(820,440,'viagem longa',`<g transform="translate(-230,20) scale(1.1)">${suitcase()}</g>${T(-80,-30,46,'desliga o que',{a:'start'})}${T(-80,30,46,'não precisa',{a:'start'})}`+sub('gl',110,140,pill(460,70,'geladeira fica LIGADA',K.orange,'#fff',34))), {x:540,y:620, in:s(19), out:s(20), subs:[['gl',s(19,.6)]]});
    el('rule', box(860,440,null,`${T(0,-80,56,'corta o standby no')}${T(0,40,110,'APARELHO',{c:'r9',fill:K.blue})}${T(0,130,52,'não no quadro',{fill:K.orange})}`), {x:540,y:620, in:s(20,.15), out:s(21)});
    el('protege', box(820,440,null,`<g transform="translate(-230,10) scale(1.3)">${shield()}</g>${T(-80,-20,52,'o quadro é pra',{a:'start'})}${T(-80,70,80,'PROTEGER',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('resumo', box(860,480,null,`<g transform="translate(-140,-120) scale(.7)">${moon()}</g><g transform="translate(120,-120) scale(.5)">${breakerIcon('rsb')}</g>${T(0,50,56,'desligar à noite')}${T(0,150,72,'ECONOMIZA POUCO',{c:'r9',fill:K.orange})}`+sub('resNo',0,215,T(0,0,34,'e pode sair caro',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(22), out:s(23), subs:[['resNo',s(22,.6)]]});
  },
  fx: (t) => {
    const off = C(s(1,.55),s(1,.62),t); $('lev').setAttribute('transform',`translate(0,${off*56})`); show($('stOn'),off<.5?1:0); show($('stOff'),off>=.5?1:0);
    show($('lab40'),0); show($('strike'),0);
    ['win1','win2'].forEach(w=>$(w).setAttribute('fill', mixc('#56608A','#FFE07A',1-off))); $('glow').setAttribute('opacity',1-off);
    const b = .55+.45*Math.sin(t*4); $('ts_led').style.opacity=b; $('stOff').querySelector('text').textContent='DESLIGADO';
  },
});
