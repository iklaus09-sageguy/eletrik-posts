/* EletriK - Por que a conta de luz subiu? */
const billIcon = (id) => `<path d="M-170,-220 H170 V200 L140,225 L110,200 L80,225 L50,200 L20,225 L-10,200 L-40,225 L-70,200 L-100,225 L-130,200 L-170,225 Z" fill="#fff" class="ol"/>
  <rect x="-170" y="-220" width="340" height="70" fill="${K.blue}" class="ol"/><path d="${BOLT}" fill="${K.orange}" transform="translate(-130,-185) scale(.7)"/>${T(15,-172,30,'CONTA DE LUZ',{fill:'#fff'})}
  ${[0,1,2].map(i=>`<rect x="-140" y="${-120+i*45}" width="${180-i*30}" height="16" rx="8" fill="#E3E8F6"/><rect x="80" y="${-120+i*45}" width="60" height="16" rx="8" fill="#E3E8F6"/>`).join('')}
  <path d="M-140,40 H140" stroke="${K.navy}" stroke-width="4"/>${T(-140,95,32,'TOTAL',{a:'start',c:'r8',fill:'#55608A'})}
  <text id="${id}_v" x="140" y="150" text-anchor="end" class="r9" font-size="72" fill="${K.navy}">R$ 180</text>`;
const flagIcon = (c) => `<path d="M-40,-60 V70" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/><path d="M-40,-60 H50 L30,-30 L50,0 H-40 Z" fill="${c}" class="ol"/>`;
const acIcon = () => `<rect x="-150" y="-50" width="300" height="100" rx="24" fill="#fff" class="ol"/><path d="M-120,20 H120" stroke="${K.navy}" stroke-width="5"/><path d="M-120,35 H120" stroke="#C9D3F0" stroke-width="5"/>
  ${[-60,0,60].map(x=>`<path d="M${x},70 q10,20 0,40" stroke="#4FC3F7" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}<circle cx="110" cy="-20" r="8" fill="${K.blue}"/>`;
const fridgeIcon = (id) => `<rect x="-100" y="-170" width="200" height="340" rx="22" fill="#F4F6FB" class="ol"/><path d="M-100,-40 H100" stroke="${K.navy}" stroke-width="6"/>
  <rect x="62" y="-140" width="14" height="70" rx="7" fill="${K.navy}"/><rect x="62" y="-10" width="14" height="90" rx="7" fill="${K.navy}"/>
  <rect id="${id}_gap" x="94" y="-160" width="14" height="320" rx="7" fill="none" stroke="${K.orange}" stroke-width="6" stroke-dasharray="14 10"/>`;
const meter2 = (id) => `<rect x="-140" y="-170" width="280" height="340" rx="26" fill="#E3E8F6" class="ol"/><rect x="-110" y="-120" width="220" height="80" rx="12" fill="#C8F0D4" class="ol" style="stroke-width:4"/>
  <text id="${id}_d" x="0" y="-62" text-anchor="middle" class="r9" font-size="52" fill="${K.navy}">04521</text>${T(0,-10,24,'kWh',{c:'r8',fill:'#55608A'})}
  <circle id="${id}_led" cx="0" cy="60" r="22" fill="#E0301E" class="ol" style="stroke-width:4"/>${T(0,120,24,'luz de pulso',{c:'r8',fill:'#55608A'})}`;
const coin = (x,y,id) => `<g id="${id}" transform="translate(${x},${y})"><circle r="30" fill="#FFD84D" class="ol" style="stroke-width:4"/>${T(0,10,28,'R$',{c:'r9',fill:K.navy})}</g>`;
const calIcon = () => `<rect x="-90" y="-80" width="180" height="170" rx="18" fill="#fff" class="ol"/><path d="M-90,-40 V-60 Q-90,-80 -70,-80 H70 Q90,-80 90,-60 V-40 Z" fill="${K.orange}" class="ol"/>
  ${[0,1,2,3].map(r=>[0,1,2,3].map(c=>`<rect x="${-66+c*36}" y="${-20+r*26}" width="24" height="16" rx="4" fill="${r===2&&c===2?K.orange:'#E3E8F6'}"/>`).join('')).join('')}`;
const ghostIcon = () => `<path d="M-80,90 V-20 Q-80,-100 0,-100 Q80,-100 80,-20 V90 L50,65 L20,90 L-10,65 L-40,90 Z" fill="${K.navy}" class="ol"/><circle cx="-28" cy="-20" r="14" fill="#fff"/><circle cx="28" cy="-20" r="14" fill="#fff"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'SUA CONTA DE LUZ') + T(540,495,78,'SUBIU DO NADA?') +
    T(540,640,104,'TEM EXPLICAÇÃO!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(620,990) scale(.85)">${billIcon('cvb')}</g>` +
    `<g transform="translate(880,790) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,30,'4 SUSPEITOS',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('E UM TESTE DE FUGA'),
  init: () => { $('cvb_v').textContent='R$ 260'; $('cvb_v').setAttribute('fill','#E0301E'); },
  titles: [[0,2,'Conta de luz subiu?','subiu'],[3,4,'Mas atenção!','atenção'],[5,5,'O vilão invisível','invisível'],[6,6,'Fica até o final!','final'],
    [7,8,'Suspeito 1: bandeira','1'],[9,9,'Suspeito 2: estação','2'],[10,10,'Suspeito 3: defeito','3'],[11,11,'Suspeito 4: fuga','4'],
    [12,17,'Vamos fazer uma conta','conta'],[18,21,'Teste da fuga','fuga'],[22,23,'Regra de ouro','ouro'],[24,24,'Resumindo',''],[25,26,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.5),820,400,8,'SUBIU!','boing']],
  palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 25,
  point: [[3,3],[6,6],[12,12],[13,13],[22,22]], worry: [[5,5],[11,11],[20,20]],
  drop: [[s(5),s(6)],[s(11),s(12)],[s(20,.3),s(21)]], sizzle: [],
  events: [],
  specs: () => {
    el('billA', billIcon('b'), {x:540,y:560,s:1.05, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('É a companhia','roubando!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('erroTag', pill(360,84,'pode ser...',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('cCal', card('cCalC','calendário', `<g transform="translate(0,20) scale(.95)">${calIcon()}</g>`), {x:290,y:640, in:s(4,.3), out:s(5)});
    el('cCasa', card('cCasaC','sua casa', `<g transform="translate(0,120) scale(.62)">${house()}</g>`), {x:790,y:640, in:s(4,.6), out:s(5)});
    el('vilao', box(440,460,'gasta 24h por dia',`<g transform="translate(0,40) scale(1.2)">${ghostIcon()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('vilaoQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','4 suspeitos',T(0,70,120,'4',{c:'r9',fill:K.orange})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Teste',`<g transform="translate(0,25) scale(.45)">${meter2('pm')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('band', box(880,460,'bandeira tarifária',[['#2BA84A','verde'],['#FFC21A','amarela'],['#E0301E','vermelha']].map(([c,l],i)=>
       `<g id="fl${i}" transform="translate(${-260+i*260},-10)"><g transform="scale(1.2)">${flagIcon(c)}</g>${T(0,120,36,l,{c:'r8'})}</g>`).join('')+sub('bandTag',0,170,pill(480,66,'mesmo consumo, kWh mais caro',K.orange,'#fff',32))),
       {x:540,y:620, in:s(7), out:s(9), subs:[['bandTag',s(8,.4)]]});
    el('cInv', card('cInvC','inverno', `<g transform="translate(30,60) scale(1.2)">${showerIcon()}</g>`), {x:290,y:640, in:s(9,.2), out:s(10)});
    el('cVer', card('cVerC','verão', `<g transform="translate(0,10)">${acIcon()}</g>`), {x:790,y:640, in:s(9,.6), out:s(10)});
    el('fridge', box(820,460,null,`<g transform="translate(-200,10) scale(1.1)">${fridgeIcon('fr')}</g>${T(0,-60,48,'borracha',{a:'start'})}${T(0,0,48,'ressecada',{a:'start',fill:K.orange})}`+sub('frTag',170,110,pill(420,70,'liga o tempo todo',K.navy,'#fff',36))),
       {x:540,y:620, in:s(10), out:s(11), subs:[['frTag',s(10,.6)]]});
    el('fuga', box(860,460,'fuga de corrente',`<path d="M-380,-40 H380" stroke="${K.navy}" stroke-width="18" stroke-linecap="round"/><path d="M-380,-40 H380" stroke="#E0301E" stroke-width="8"/>
       <path id="leakL" d="M0,-30 V150" stroke="#E0301E" stroke-width="8" stroke-dasharray="14 14"/>${coin(-180,80,'co0')}${coin(160,60,'co1')}${coin(260,120,'co2')}`+sub('fugaTag',0,170,pill(560,66,'energia escapando, você pagando',K.orange,'#fff',32))),
       {x:540,y:620, in:s(11), out:s(12), subs:[['fugaTag',s(11,.55)]]});
    el('form', box(880,400,'a fórmula',`${T(0,20,90,'W × h ÷ 1.000',{c:'r9'})}`+sub('fkwh',0,120,T(0,0,70,'= kWh',{c:'r9',fill:K.orange}))), {x:540,y:620, in:s(13), out:s(14), subs:[['fkwh',s(13,.7)]]});
    el('cCh', box(400,460,'chuveiro',`<g transform="translate(30,30) scale(1.3)">${showerIcon()}</g>${T(0,120,52,'5.500 W',{c:'r9',fill:K.blue})}${T(0,175,36,'30 min/dia',{c:'f6',fill:'#55608A'})}`), {x:290,y:640, in:s(14), out:s(16)});
    el('calc1', box(420,460,null,`${T(0,-100,48,'5,5 kW')}${T(0,-30,48,'× 0,5 h')}<path d="M-150,0 H150" stroke="${K.navy}" stroke-width="6"/>`+sub('c1r',0,90,T(0,0,72,'2,75 kWh',{c:'r9',fill:K.orange}))+T(0,160,34,'por dia',{c:'f6',fill:'#55608A'})), {x:790,y:640, in:s(14,.3), out:s(16), subs:[['c1r',s(14,.75)]]});
    el('mes', pill(520,84,'× 30 dias ≈ 82 kWh',K.navy,'#fff',44), {x:500,y:900, in:s(15), out:s(16)});
    el('reais', box(860,440,'só de banho',`${T(0,-40,60,'82 kWh × R$ 0,80')}`+sub('rr',0,80,T(0,0,120,'≈ R$ 66',{c:'r9',fill:K.orange}))+T(0,160,34,'valor ilustrativo · depende da sua tarifa',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(16), out:s(17), subs:[['rr',s(16,.55)]]});
    el('econ', box(640,360,'economia',`${T(0,50,130,'≈ R$ 11',{c:'r9',fill:K.blue})}${T(0,130,40,'por mês',{c:'f6',fill:'#55608A'})}`), {x:540,y:600, in:s(17,.35), out:s(18), sfx:'boing'});
    el('econT', pill(440,84,'5 min a menos no banho',K.blue,'#fff',40), {x:540,y:900, in:s(17), out:s(18)});
    [['Tira tudo da tomada','aparelhos desconectados'],['Apaga as luzes','todas'],['Disjuntores LIGADOS','não desliga o quadro']]
      .forEach(([t1,t2],i)=>el('st'+i, row(i+1,t1,t2,[`<g transform="scale(.7)">${outletIcon('',10)}</g>`,`<circle r="40" fill="#E3E8F6" class="ol"/><path d="M-14,-10 Q0,-40 14,-10 V10 H-14 Z" fill="#B9C2DA" class="ol" style="stroke-width:3"/>`,`<g transform="scale(.6)">${breakerIcon('stb')}</g>`][i]), {x:540,y:[450,620,790][i], in:s(19,.05+i*.3), out:s(20)}));
    el('med', box(820,500,'olha o medidor',`<g transform="translate(-200,30) scale(.9)">${meter2('md')}</g>${T(20,-40,48,'continua',{a:'start'})}${T(20,20,48,'contando?',{a:'start'})}`+sub('medTag',190,120,pill(330,84,'= FUGA',K.orange,'#fff',48))),
       {x:540,y:640, in:s(20), out:s(21), subs:[['medTag',s(20,.7)]]});
    el('pro', proCard(), {x:540,y:620, in:s(21), out:s(22), subs:[['proOk',s(21,.5)]]});
    const RULES=['Confere a bandeira','Faz a conta dos aparelhos','Testa a fuga'];
    el('rule', box(880,500,null,RULES.map((r,i)=>sub('rl'+i,0,-140+i*130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.75)">${badgeOK('rlb'+i)}</g>${T(-270,16,46,r,{a:'start'})}`)).join('')),
       {x:540,y:620, in:s(22), out:s(23), subs:RULES.map((r,i)=>['rl'+i, s(22,.25)+i*.25])});
    el('drL', box(820,420,null,`<g transform="translate(-260,0)">${alertIcon(1.2)}</g>${T(-120,-30,52,'DR desarmando?',{a:'start'})}${T(-120,60,80,'pode ser FUGA',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(23), out:s(24)});
    el('resumo', box(880,480,null,`<g transform="translate(-300,-120) scale(.5)">${flagIcon('#E0301E')}</g><g transform="translate(-100,-110) scale(.4)">${showerIcon()}</g><g transform="translate(100,-120) scale(.3)">${fridgeIcon('rsf')}</g><g transform="translate(300,-120) scale(.35)">${ghostIcon()}</g>
       ${T(0,40,56,'conta alta tem')}${T(0,140,96,'EXPLICAÇÃO',{c:'r9',fill:K.orange})}`+sub('resNo',0,205,T(0,0,34,'agora você sabe onde procurar',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(24), out:s(25), subs:[['resNo',s(24,.7)]]});
  },
  fx: (t) => {
    const up = C(s(0,.45),s(0,.6),t); const v = Math.round(lerp(180,260,up)); $('b_v').textContent = 'R$ '+v; $('b_v').setAttribute('fill', up>0?'#E0301E':K.navy);
    const red = C(s(8,.1),s(8,.3),t); [0,1,2].forEach(i=>{ const on = i===2 ? red : (i===0?1-red*.6:.4+0*red); $('fl'+i).style.opacity = i===2? .4+.6*red : 1-.6*red; });
    $('fr_gap').setAttribute('stroke-dashoffset', -t*40);
    $('leakL').setAttribute('stroke-dashoffset', -t*60);
    ['co0','co1','co2'].forEach((c,i)=>{ const ph=((t*.6+i*.33)%1); const base=[[-180,80],[160,60],[260,120]][i]; $(c).setAttribute('transform',`translate(${base[0]+ph*40},${base[1]+ph*60})`); $(c).style.opacity=1-ph*.6; });
    const tick = Math.floor(Math.max(0,t-s(20))*3); $('md_d').textContent = String(4521+tick).padStart(5,'0');
    $('md_led').style.opacity = (Math.floor(t*3)%2)?1:.25;
  },
});
