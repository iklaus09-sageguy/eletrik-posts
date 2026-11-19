/* EletriK - Choque no chuveiro */
const GR='#22A55A';
const registro = () => `<circle r="34" fill="#DDE3EF" class="ol"/><rect x="-10" y="-60" width="20" height="40" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/><rect x="-40" y="-72" width="80" height="18" rx="9" fill="#B9C2DA" class="ol" style="stroke-width:4"/>`;
const hand = () => `<path d="M60,0 H-10 Q-30,0 -30,-16 Q-30,-32 -10,-32 H40 L60,-20 Z" fill="${K.skin}" class="ol"/><path d="M60,-20 H160 V10 H60 Z" fill="#8A5CF6" class="ol"/>`;
const zaps = (id) => `<g id="${id}" opacity="0">${[[-40,-70],[30,-80],[-60,30]].map(([x,y])=>`<path d="${BOLT}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(${x},${y})"/>`).join('')}</g>`;
const banho = (id) => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#E7F3FF" class="ol"/>
  ${[0,1,2,3,4].map(r=>`<path d="M-270,${-150+r*80} H270" stroke="#D3E6F8" stroke-width="4"/>`).join('')}
  <g transform="translate(-40,-60) scale(1.6)">${showerIcon()}</g>
  <g transform="translate(170,40)">${registro()}</g><g id="${id}_hand" transform="translate(250,40)">${hand()}</g><g transform="translate(170,40)">${zaps(id+'_z')}</g>`;
const wireCut = () => `<path d="M-100,0 H-20" stroke="${K.navy}" stroke-width="22" stroke-linecap="round"/><path d="M-100,0 H-20" stroke="${GR}" stroke-width="12" stroke-linecap="round"/><path d="M20,10 H100" stroke="${K.navy}" stroke-width="22" stroke-linecap="round"/><path d="M20,10 H100" stroke="${GR}" stroke-width="12" stroke-linecap="round"/>`;
const coilS = () => { let d='M-90,0'; for(let i=0;i<9;i++) d+=` Q${-80+i*20},${i%2?26:-26} ${-70+i*20},0`; return `<path d="${d}" stroke="${K.navy}" stroke-width="14" fill="none"/><path d="${d}" stroke="#D9822B" stroke-width="7" fill="none"/><path d="M-30,40 q-6,12 0,22 M10,44 q-6,12 0,22" stroke="#4FC3F7" stroke-width="6" fill="none"/>`; };
const bareWire = () => `<path d="M-100,0 H100" stroke="${K.navy}" stroke-width="26" stroke-linecap="round"/><path d="M-100,0 H-20 M20,0 H100" stroke="#2A2A2A" stroke-width="16" stroke-linecap="round"/><path d="M-20,0 H20" stroke="#D9822B" stroke-width="8"/><path d="${star(8,22,8)}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(0,-28)"/>`;
const drX = () => `<rect x="-70" y="-90" width="140" height="180" rx="16" fill="#EEF1FA" class="ol"/>${T(0,-30,40,'DR',{c:'r9',fill:K.blue})}<g transform="translate(0,40) scale(.8)">${badgeX('drxb')}</g>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'CHOQUINHO NO') + T(540,495,78,'CHUVEIRO É NORMAL?') +
    T(540,640,104,'NUNCA É!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990) scale(.85)">${banho('cv')}</g>` +
    `<g transform="translate(880,800) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,36,'PERIGO!',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('CORRENTE ESCAPANDO'),
  init: () => { $('cv_z').setAttribute('opacity',1); },
  titles: [[0,2,'Choque no chuveiro?','chuveiro'],[3,4,'Mas atenção!','atenção'],[5,5,'Molhado é pior','pior'],[6,6,'Fica até o final!','final'],
    [7,11,'Os 3 culpados','culpados'],[12,15,'Vamos fazer uma conta','conta'],[16,19,'Sentiu choque?','choque'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.45),820,400,8,'ZAP!','buzz']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[13,13],[20,20]], worry: [[4,5],[11,11],[14,15]],
  drop: [[s(4,.4),s(6)],[s(14,.5),s(16)]], sizzle: [], events: [],
  specs: () => {
    el('banho', banho('a'), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('É normal, todo','chuveiro dá!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('inofTag', pill(340,84,'inofensivo?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4,.3)});
    el('nunca', stampSVG('NUNCA É','NORMAL',K.orange,520), {x:540,y:880,r:-7, in:s(4,.4), out:s(5), sfx:'buzz'});
    el('molh', box(820,440,null,`<g transform="translate(-240,30) scale(1.2)">${personIcon('#8A5CF6')}</g><g transform="translate(-140,-80) scale(.8)">${dropIcon()}</g>${T(-100,-20,50,'molhado, o corpo',{a:'start'})}${T(-100,70,68,'conduz MAIS',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(5,.15), out:s(6)});
    [['1','Por quê',T(0,70,120,'?',{c:'r9',fill:K.orange})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Resolver',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('big3', bigNum('3'), {x:540,y:620, in:s(7,.4), out:s(8), sfx:'boing'});
    el('row0', row(1,'Sem fio terra','o fio verde solto ou cortado',`<g transform="scale(.8)">${wireCut()}</g>`), {x:540,y:450, in:s(8), out:s(11)});
    el('row1', row(2,'Resistência com defeito','vazando corrente pra água',`<g transform="scale(.9)">${coilS()}</g>`), {x:540,y:620, in:s(9), out:s(11)});
    el('row2', row(3,'Capa danificada','na parede ou no chuveiro',`<g transform="scale(.8)">${bareWire()}</g>`), {x:540,y:790, in:s(10), out:s(11)});
    el('semDR', box(820,440,null,`<g transform="translate(-230,10) scale(1.2)">${drX()}</g>${T(-110,-20,54,'sem DR,',{a:'start'})}${T(-110,70,66,'NADA desliga',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(11), out:s(12)});
    el('seco', card('secoC','seco', `<g transform="translate(0,20) scale(.9)">${personIcon()}</g>${T(0,150,60,'1.000 Ω',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(13), out:s(14)});
    el('molhC', card('molhCC','molhado', `<g transform="translate(0,20) scale(.9)">${personIcon('#8A5CF6')}</g><g transform="translate(90,-60) scale(.6)">${dropIcon()}</g>${T(0,150,60,'500 Ω',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(13,.5), out:s(14)});
    el('form', box(860,440,null,`${T(0,-80,64,'220 V ÷ 500 Ω')}<path d="M-260,-40 H260" stroke="${K.navy}" stroke-width="6"/>`+sub('fr',0,70,T(0,0,130,'≈ 440 mA',{c:'r9',fill:K.orange}))+T(0,160,32,'valores de referência',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(14), out:s(16), subs:[['fr',s(14,.55)]]});
    el('x15', starBadge('15x','o limite do DR'), {x:210,y:960,s:.9,r:-8, in:s(15), out:s(16), sfx:'boing'});
    el('st0', row(1,'Desliga o disjuntor','e não usa até resolver',`<g transform="scale(.6)">${breakerIcon('sb0')}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('st1', row(2,'Não mexe ligado','nada com a energia ligada',`<g transform="scale(.7)">${badgeX('sbx')}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('st2', row(3,'Chama um eletricista','terra, resistência, fiação',`<g transform="scale(.55)">${helmetIcon()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,440,'chuveiro seguro',`${sub('ru0',-200,40,pill(340,110,'fio terra ✓',GR,'#fff',50))}${sub('ru1',200,40,pill(300,110,'DR ✓',K.blue,'#fff',56))}`), {x:540,y:620, in:s(20), out:s(21), subs:[['ru0',s(20,.4)],['ru1',s(20,.7)]]});
    el('link', box(880,440,null,`${sub('lk0',0,-70,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#E3F6EA"/>${T(-360,16,46,'terra:',{a:'start',c:'r9',fill:GR})}${T(-200,16,46,'dá o caminho',{a:'start'})}`)}${sub('lk1',0,80,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#E3E9FF"/>${T(-360,16,46,'DR:',{a:'start',c:'r9',fill:K.blue})}${T(-200,16,46,'desliga na hora',{a:'start'})}`)}`), {x:540,y:620, in:s(21), out:s(22), subs:[['lk0',s(21,.3)],['lk1',s(21,.6)]]});
    el('resumo', box(860,480,null,`<g transform="translate(0,-120) scale(.8)">${alertIcon()}</g>${T(0,40,54,'choque no chuveiro =')}${T(0,145,110,'AVISO',{c:'r9',fill:K.orange})}`+sub('resNo',0,210,T(0,0,34,'desliga e chama quem entende',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(22), out:s(23), subs:[['resNo',s(22,.6)]]});
  },
  fx: (t) => {
    const reach = eio(C(s(0,.1),s(0,.4),t)); $('a_hand').setAttribute('transform',`translate(${lerp(320,210,reach)},40)`);
    $('a_z').setAttribute('opacity', t>s(0,.45) ? (Math.floor(t*10)%2?1:.3) : 0);
  },
});
