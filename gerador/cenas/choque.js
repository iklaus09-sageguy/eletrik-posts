/* EletriK - O que fazer quando alguém leva choque */
const washerC = () => `<rect x="-120" y="-150" width="240" height="300" rx="22" fill="#DDE3EF" class="ol"/><rect x="-120" y="-150" width="240" height="56" rx="22" fill="#C9D3F0" class="ol" style="stroke-width:4"/>
  <circle cx="0" cy="40" r="80" fill="#fff" class="ol"/><circle cx="0" cy="40" r="56" fill="#8FB4FF" class="ol" style="stroke-width:4"/>`;
const victim = (id,c) => `<g id="${id}"><g transform="scale(1.1)">${personIcon(c)}</g><path d="M-40,-10 L-100,-30" stroke="${K.skin}" stroke-width="22" stroke-linecap="round"/>
  <g id="${id}_z" opacity="0">${[[-60,-110],[50,-120],[60,20],[-70,40]].map(([x,y])=>`<path d="${BOLT}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(${x},${y})"/>`).join('')}</g></g>`;
const handX = () => `<path d="M-30,60 V-30 Q-30,-46 -16,-46 Q-2,-46 -2,-30 V-60 Q-2,-76 12,-76 Q26,-76 26,-60 V-20 Q40,-34 54,-20 V40 Q54,70 24,80 H-6 Q-30,80 -30,60 Z" fill="${K.skin}" class="ol"/>`;
const broom = () => `<path d="M-150,60 L120,-60" stroke="#B5813F" stroke-width="20" stroke-linecap="round"/><path d="M120,-60 L170,-90 L190,-50 L140,-30 Z" fill="#E8C35A" class="ol" style="stroke-width:4"/>`;
const chair = () => `<rect x="-60" y="-100" width="120" height="90" rx="14" fill="#4FA3F7" class="ol"/><rect x="-70" y="-10" width="140" height="30" rx="10" fill="#4FA3F7" class="ol"/><path d="M-55,20 V90 M55,20 V90" stroke="${K.navy}" stroke-width="12" stroke-linecap="round"/>`;
const phoneCall = () => `<rect x="-70" y="-120" width="140" height="240" rx="24" fill="${K.navy}" class="ol"/><rect x="-56" y="-100" width="112" height="190" rx="12" fill="#fff"/><path d="M-26,-20 Q-30,20 0,40 Q30,50 34,30 L22,16 Q10,24 0,14 Q-12,2 -6,-8 L-16,-26 Z" fill="${GREEN2}"/>`;
const GREEN2 = '#22A55A';
const heartIcon = (ecg=false) => `<path d="M0,70 Q-110,0 -90,-50 Q-70,-95 -20,-75 Q-5,-68 0,-55 Q5,-68 20,-75 Q70,-95 90,-50 Q110,0 0,70 Z" fill="#E0301E" class="ol"/>${ecg?`<path d="M-80,-10 H-35 L-20,-40 L-5,20 L10,-25 L22,-10 H80" stroke="#fff" stroke-width="8" fill="none" stroke-linejoin="round"/>`:''}`;
const clockIcon = () => `<circle r="80" fill="#fff" class="ol"/><path id="clkH" d="M0,0 V-55" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/><circle r="10" fill="${K.orange}"/>`;
const poleDown = () => `<rect x="-100" y="-90" width="22" height="180" fill="#8A6A52" class="ol" style="stroke-width:4"/><path d="M-80,-80 Q20,-60 40,60 Q50,90 110,80" stroke="${K.navy}" stroke-width="8" fill="none"/><path d="${star(8,26,10)}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(110,80)"/>`;
const flow3 = (a,b,c) => [a,b,c].map((tx,i)=>`<g transform="translate(${-280+i*280},0)"><circle r="90" fill="${i===2?K.orange:K.blue}" class="ol"/>${T(0,14,36,tx,{fill:'#fff'})}</g>`).join('')+`<path d="M-175,0 H-110 M-130,-16 L-110,0 L-130,16 M105,0 H170 M150,-16 L170,0 L150,16" stroke="${K.navy}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'ALGUÉM LEVOU') + T(540,495,78,'CHOQUE. E AGORA?') +
    T(540,640,104,'NÃO PUXE!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990)">${box(560,420,null,`<g transform="translate(-140,10) scale(.8)">${washerC()}</g><g transform="translate(110,20)">${victim('cvv','#8A5CF6')}</g>`)}</g>` +
    `<g transform="translate(880,800) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,34,'SALVE VIDAS',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('A ORDEM CERTA'),
  init: () => { $('cvv_z').setAttribute('opacity',1); },
  titles: [[0,2,'Alguém levou choque!','choque'],[3,4,'Mas atenção!','atenção'],[5,5,'A ordem salva','ordem'],[6,6,'Fica até o final!','final'],
    [7,7,'Passo 1','1'],[8,10,'Passo 2','2'],[11,11,'Passo 3','3'],[12,12,'Passo 4','4'],[13,15,'A conta do tempo','tempo'],[16,19,'Nunca faça isso','Nunca'],
    [20,22,'Regra de ouro','ouro'],[23,23,'Resumindo',''],[24,25,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.3),800,400,8,'ZAP!','buzz'],[s(4,.35),800,400,8,'ZAP!','buzz'],[s(8,.6),820,400,8,'CLACK!','clack']],
  palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 24,
  point: [[3,3],[6,6],[7,7],[11,11],[20,20],[21,21]], worry: [[4,4],[14,15],[18,18]],
  drop: [[s(4,.3),s(5)],[s(14),s(16)],[s(18),s(19)]], sizzle: [[s(0,.3),s(1)]],
  events: [],
  specs: () => {
    el('cena', box(640,460,null,`<g transform="translate(-170,10) scale(.85)">${washerC()}</g><g transform="translate(70,40)">${victim('vv','#8A5CF6')}</g><g id="resc" opacity="0"><g transform="translate(220,40)">${victim('rr','#55B26B')}</g></g>`), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Puxa ele,','rápido!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('certoTag', pill(380,84,'parece o certo',K.navy,'#fff',44), {x:540,y:880, in:s(2,.1), out:s(4,.3)});
    el('duas', stampSVG('AGORA SÃO','DUAS VÍTIMAS',K.orange,640), {x:540,y:880,r:-7, in:s(4,.55), out:s(5), sfx:'buzz'});
    el('ordem', box(880,420,'a ordem certa salva',`<g transform="translate(0,20) scale(.9)">${flow3('1','2','3')}</g>`), {x:540,y:620, in:s(5,.1), out:s(6)});
    [['1','Passos',T(0,60,110,'1·2·3',{c:'r9',fill:K.blue,extra:'font-size="70"'})],['2','O tempo',`<g transform="translate(0,30) scale(.7)">${clockIcon().replace('id="clkH"','')}</g>`],['3','Nunca',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('p1', box(820,460,null,`<g transform="translate(-220,20) scale(1.6)">${handX()}</g><g transform="translate(-150,-80) scale(1.1)">${badgeX('p1x')}</g>${T(-20,-20,70,'NÃO',{a:'start',c:'r9',fill:K.orange})}${T(-20,60,54,'toque na pessoa',{a:'start'})}`), {x:540,y:620, in:s(7), out:s(8)});
    el('p2', box(820,460,null,`<g transform="translate(-230,20) scale(1.3)">${breakerIcon('p2b')}</g>${T(-80,-30,56,'desliga a',{a:'start'})}${T(-80,50,70,'ENERGIA',{a:'start',c:'r9',fill:K.blue})}${T(-80,110,34,'disjuntor ou chave geral',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('p2b', box(880,480,'não dá pra desligar?',`<g transform="translate(-180,20)">${broom()}</g>${T(-180,140,34,'cabo de madeira',{c:'r8'})}<g transform="translate(220,30)">${chair()}</g>${T(220,160,34,'cadeira de plástico',{c:'r8'})}`+sub('seco',0,-120+0,pill(320,64,'algo SECO',K.orange,'#fff',36))),
       {x:540,y:620, in:s(9), out:s(11), subs:[['seco',s(9,.3)]]});
    el('pisa', pill(420,80,'e pisa no seco também',K.navy,'#fff',38), {x:500,y:910, in:s(10), out:s(11)});
    el('p3', box(820,460,null,`<g transform="translate(-230,10) scale(1.1)">${phoneCall()}</g>`+sub('n192',120,-60,pill(380,110,'192 SAMU','#E0301E','#fff',56))+sub('n193',120,90,pill(380,110,'193 Bombeiros',K.orange,'#fff',48))), {x:540,y:620, in:s(11), out:s(12), subs:[['n192',s(11,.25)],['n193',s(11,.6)]]});
    el('p4', box(820,460,null,`<g transform="translate(-230,20) scale(1.3)">${heartIcon()}</g>${T(-80,-40,50,'não respira?',{a:'start'})}${T(-80,40,58,'massagem',{a:'start',c:'r9',fill:K.orange})}${T(-80,110,34,'o atendente te orienta',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(12), out:s(13)});
    el('tempo', box(880,460,'chance de sobreviver',`<g transform="translate(-300,20) scale(.9)">${clockIcon()}</g>
       <rect x="-160" y="-30" width="520" height="70" rx="18" fill="#EEF1FA"/><rect id="chBar" x="-160" y="-30" width="520" height="70" rx="18" fill="${GREEN2}"/>
       <text id="chTx" x="100" y="18" text-anchor="middle" class="r9" font-size="44" fill="#fff">100%</text>${T(100,110,40,'−10% por minuto',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(14), out:s(16)});
    el('metade', stampSVG('EM 5 MINUTOS','PELA METADE',K.orange,620), {x:540,y:900,r:-6, in:s(15,.2), out:s(16), sfx:'buzz'});
    el('big3', bigNum('3'), {x:540,y:620, in:s(16,.4), out:s(17), sfx:'boing'});
    el('row0', row(1,'Puxar com a mão','ou algo molhado ou de metal',`<g transform="scale(.7)">${handX()}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('row1', row(2,'Fio da rua caído','fica LONGE, liga 193',`<g transform="scale(.6)">${poleDown()}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('row2', row(3,'Achar que passou','leva ao médico',`<g transform="scale(.6)">${heartIcon(true)}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,440,null,`${T(0,-90,60,'primeiro')}${T(0,20,110,'DESLIGA',{c:'r9',fill:K.blue})}${T(0,110,56,'depois socorre')}`), {x:540,y:620, in:s(20,.15), out:s(21)});
    el('quadroC', box(880,500,'onde fica o seu?',`<g transform="translate(-170,40) scale(.75)">${quadro('qc_')}</g>`+sub('hoje',250,40,pill(300,84,'confere hoje',K.orange,'#fff',40))), {x:540,y:630, in:s(21), out:s(22), subs:[['hoje',s(21,.6)]]});
    el('prev', box(820,420,'prevenir é melhor',`${sub('pv0',-190,20,pill(320,110,'DR ✓',K.blue,'#fff',56))}${sub('pv1',190,20,pill(340,110,'terra ✓',GREEN2,'#fff',56))}`), {x:540,y:620, in:s(22), out:s(23), subs:[['pv0',s(22,.3)],['pv1',s(22,.55)]]});
    el('resumo', box(900,420,'nessa ordem',`<g transform="translate(0,30) scale(.95)">${flow3('não toca','desliga','liga 192')}</g>`), {x:540,y:620, in:s(23), out:s(24)});
  },
  fx: (t) => {
    const z1 = t>s(0,.3); $('vv_z').setAttribute('opacity', z1 ? (Math.floor(t*10)%2?1:.3) : 0);
    $('vv').setAttribute('transform', `translate(${z1?Math.sin(t*60)*3:0},0)`);
    const rin = eio(C(s(4,.05),s(4,.35),t)); $('resc').setAttribute('opacity', rin>0?1:0); $('rr').setAttribute('transform',`translate(${lerp(200,-40,rin)},0)`);
    $('rr_z').setAttribute('opacity', t>s(4,.35) ? (Math.floor(t*10)%2?1:.3) : 0);
    $('p2blev').setAttribute('transform',`translate(0,${C(s(8,.55),s(8,.62),t)*45})`);
    const m = C(s(14,.2),s(15,.9),t); const pct = Math.round(100 - 50*m);
    $('chBar').setAttribute('width', 520*pct/100); $('chBar').setAttribute('fill', mixc('#22A55A','#E0301E',m)); $('chTx').textContent = pct+'%';
    $('clkH').setAttribute('transform',`rotate(${m*300})`);
    $('qc_lev').setAttribute('transform','translate(0,0)'); $('qc_stOff').style.display='none'; $('qc_lab40').style.display='none'; $('qc_strike').style.display='none';
  },
});
