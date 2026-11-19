/* EletriK - DPS */
const GR='#22A55A';
const cloudBolt = () => `<path d="M-120,0 Q-130,-60 -70,-60 Q-50,-110 10,-100 Q60,-120 90,-70 Q140,-70 130,-20 Q130,10 100,10 H-100 Q-120,10 -120,0 Z" fill="#5A6378" class="ol"/><path d="M10,10 L-30,90 L0,90 L-20,160 L50,60 L15,60 L40,10 Z" fill="#FFD84D" class="ol" style="stroke-width:4"/>`;
const dpsIcon = (id) => `<rect x="-70" y="-110" width="140" height="220" rx="16" fill="#EEF1FA" class="ol"/>${T(0,-62,40,'DPS',{c:'r9',fill:K.blue})}<rect id="${id}_win" x="-40" y="-30" width="80" height="44" rx="8" fill="#22A55A" class="ol" style="stroke-width:4"/>
  <path d="M0,110 V160" stroke="${GR}" stroke-width="14"/>${T(0,80,22,'surto → terra',{c:'r8',fill:'#55608A'})}`;
const stripCheap = () => `<rect x="-200" y="-40" width="400" height="80" rx="26" fill="#fff" class="ol"/>${[-130,-45,40].map(x=>`<g transform="translate(${x},0)"><circle cx="-9" cy="6" r="6" fill="${K.navy}"/><circle cx="9" cy="6" r="6" fill="${K.navy}"/><circle cx="0" cy="-9" r="6" fill="${K.navy}"/></g>`).join('')}<rect x="120" y="-24" width="50" height="48" rx="8" fill="#E0301E"/>`;
const spike = (id) => `<path d="M-380,40 H380" stroke="#C9D3F0" stroke-width="4"/><path id="${id}" d="M-380,40 Q-340,0 -300,40 T-220,40 T-140,40 T-60,40 L-20,40 L0,-170 L20,40 L60,40 Q100,0 140,40 T220,40 T300,40 T380,40" stroke="${K.blue}" stroke-width="8" fill="none" stroke-linejoin="round"/>`;
const houseScene = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#DCE4F7" class="ol"/>
  <g transform="translate(-120,-120) scale(.8)">${cloudBolt()}</g><g transform="translate(120,190) scale(.75)">${house()}</g>
  <g id="dpsTv" transform="translate(130,-20) scale(.55)">${tv()}</g><path id="dpsSm" d="${star(8,30,12)}" fill="#FFD84D" class="ol" opacity="0" transform="translate(180,-60)"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'CAIU UM RAIO') + T(540,495,78,'E QUEIMOU TUDO?') +
    T(540,640,104,'CONHEÇA O DPS',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-120,-40) scale(.8)">${cloudBolt()}</g><g transform="translate(140,20) scale(.9)">${dpsIcon('cvd')}</g>`)}</g>` + kikoCover() + coverBanner('DPS + TERRA'),
  titles: [[0,2,'Raio queimou tudo?','raio'],[3,4,'Mas atenção!','atenção'],[5,5,'O nome é DPS','DPS'],[6,6,'Fica até o final!','final'],
    [7,10,'O que é um surto','surto'],[11,14,'Vamos fazer uma conta','conta'],[15,18,'3 coisas que importam','3 coisas'],[19,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.3),820,400,8,'BUM!','buzz']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[10,10],[16,16],[19,19]], worry: [[0,0],[4,4],[13,13],[18,18]],
  drop: [[s(13),s(14)],[s(18),s(19)]], sizzle: [], events: [],
  specs: () => {
    el('casa', houseScene(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Põe num filtro','de linha!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('protTag', pill(320,84,'protege?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('filtro', box(820,440,'filtro de linha barato',`<g transform="translate(0,-20)">${stripCheap()}</g>`+sub('fNo',0,120,pill(520,80,'NÃO segura surto',K.orange,'#fff',42))), {x:540,y:620, in:s(4), out:s(5), subs:[['fNo',s(4,.45)]]});
    el('nome', box(820,440,null,`<g transform="translate(-220,10) scale(1.1)">${dpsIcon('nd')}</g>${T(-80,-30,52,'o nome é',{a:'start'})}${T(-80,80,130,'DPS',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(5,.2), out:s(6)});
    [['1','O DPS',`<g transform="translate(0,25) scale(.5)">${dpsIcon('pv1')}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','O terra',`<g transform="translate(0,40)"><path d="M0,-50 V0 M-50,0 H50 M-32,20 H32 M-14,40 H14" stroke="${GR}" stroke-width="12" stroke-linecap="round" fill="none"/></g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('pico', box(900,460,'surto: um pico de tensão',`<g transform="translate(0,40)">${spike('spk')}</g>`+sub('pk1',0,-110,pill(480,64,'milionésimos de segundo',K.navy,'#fff',32))+sub('pk2',260,-40,pill(280,64,'MILHARES de V',K.orange,'#fff',32))), {x:540,y:620, in:s(7), out:s(10), subs:[['pk1',s(7,.5)],['pk2',s(9,.3)]]});
    el('origem', pill(660,80,'raio, mesmo longe · manobra na rede',K.blue,'#fff',32), {x:500,y:910, in:s(8), out:s(10)});
    el('desvio', box(880,480,'o DPS é o desvio',`<path d="M-380,-60 H380" stroke="#2A2A2A" stroke-width="14" stroke-linecap="round"/><path id="surge" d="M-380,-60 H0 V140" stroke="#FFD84D" stroke-width="10" fill="none" stroke-dasharray="26 22"/>
       <g transform="translate(0,40) scale(.7)">${dpsIcon('dv')}</g><g transform="translate(0,170)"><path d="M0,-10 V10 M-40,10 H40 M-26,24 H26 M-12,38 H12" stroke="${GR}" stroke-width="10" stroke-linecap="round"/></g>${T(260,-80,30,'rede',{c:'r8',fill:'#55608A'})}${T(90,190,30,'terra',{a:'start',c:'r8',fill:GR})}`), {x:540,y:640, in:s(10), out:s(11)});
    el('lim', box(860,460,'DPS residencial comum',`${T(0,-60,48,'limita o pico em')}${T(0,40,110,'≈ 1.500 V',{c:'r9',fill:K.blue})}`+sub('ka',0,140,pill(480,70,'e escoa dezenas de kA',K.navy,'#fff',36))+T(0,205,26,'valores típicos · variam por modelo',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(12), out:s(13), subs:[['ka',s(12,.6)]]});
    el('semEle', box(820,440,'sem DPS',`<g transform="translate(-200,10)">${tv()}</g><path d="${star(10,70,30)}" fill="#FFD84D" class="ol" transform="translate(-140,-40)"/>${T(30,-10,52,'o surto passa',{a:'start'})}${T(30,70,70,'DIRETO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(13), out:s(14)});
    el('cDps', card('cDpsC','DPS', `<g transform="translate(0,-25) scale(.58)">${dpsIcon('cp')}</g>${T(0,155,56,'R$ 80',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(14,.2), out:s(15)});
    el('cTv', card('cTvC','TV nova', `<g transform="translate(0,-10) scale(.85)">${tv()}</g>${T(0,155,56,'R$ 2.000',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(14,.55), out:s(15)});
    el('k0', row(1,'Sem terra não funciona','lembra do vídeo do 3º pino',`<g transform="translate(0,10) scale(.8)"><path d="M0,-50 V0 M-50,0 H50 M-32,20 H32 M-14,40 H14" stroke="${GR}" stroke-width="12" stroke-linecap="round" fill="none"/></g>`), {x:540,y:450, in:s(16), out:s(19)});
    el('k1', row(2,'Janelinha: verde ok','vermelha: troca (muitos modelos)',`<g transform="scale(.45)">${dpsIcon('k1d')}</g>`), {x:540,y:620, in:s(17), out:s(19)});
    el('k2', row(3,'Raio direto','na tempestade, tira da tomada',`<g transform="scale(.4) translate(0,-30)">${cloudBolt()}</g>`), {x:540,y:790, in:s(18), out:s(19)});
    const RU=['DPS no quadro','Aterramento de verdade','Fora da tomada na tempestade'];
    el('rule', box(880,500,null,RU.map((r,i)=>sub('rl'+i,0,-140+i*130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.75)">${badgeOK('rlb'+i)}</g>${T(-270,16,44,r,{a:'start'})}`)).join('')), {x:540,y:620, in:s(19), out:s(20), subs:RU.map((r,i)=>['rl'+i,s(19,.2)+i*.3])});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(880,480,null,`${T(0,-100,52,'filtro de linha')}${T(0,-10,76,'NÃO é para-raio',{c:'r9',fill:K.orange})}<path d="M-300,40 H300" stroke="#E3E8F6" stroke-width="5"/>${T(0,120,56,'quem protege é o')}${T(0,200,70,'DPS + terra',{c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(21), out:s(22)});
  },
  fx: (t) => {
    const hit = t>s(0,.3); $('dpsSm').setAttribute('opacity', hit?(Math.floor(t*8)%2?1:.4):0);
    $('surge').setAttribute('stroke-dashoffset', -t*150);
    const sp = .6+.4*Math.abs(Math.sin(t*3)); $('spk').setAttribute('transform',`translate(0,${(1-sp)*40}) scale(1,${sp})`);
    ['nd','cvd','pv1','dv','cp','k1d'].forEach(i=>{ const w=$(i+'_win'); if(w) w.setAttribute('fill','#22A55A'); });
  },
});
