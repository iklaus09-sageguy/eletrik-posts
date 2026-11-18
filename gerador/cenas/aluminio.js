/* EletriK - Alumínio e cobre */
const AL='#B8C0CC', CU='#D9822B';
const joint = (id) => `<path id="${id}_glow" d="M-60,0 H60" stroke="#FF3B1A" stroke-width="90" opacity="0" filter="url(#blur)"/>
  <path d="M-300,0 H-20" stroke="${K.navy}" stroke-width="30" stroke-linecap="round"/><path d="M-300,0 H-20" stroke="${AL}" stroke-width="18" stroke-linecap="round"/>
  <path d="M300,0 H20" stroke="${K.navy}" stroke-width="30" stroke-linecap="round"/><path d="M300,0 H20" stroke="${CU}" stroke-width="18" stroke-linecap="round"/>
  ${[-50,-20,10,40].map((x,i)=>`<path d="M${x},-22 Q${x+15},0 ${x},22" stroke="${i%2?CU:AL}" stroke-width="12" fill="none" stroke-linecap="round"/>`).join('')}
  <g id="${id}_cor" opacity="0">${[[-40,-18],[0,16],[30,-14],[-10,-6]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#7FD1A6"/><circle cx="${x+8}" cy="${y+4}" r="6" fill="#F4F6FB"/>`).join('')}</g>
  <g id="${id}_tape" opacity="0"><rect x="-80" y="-34" width="160" height="68" rx="14" fill="#2A2A2A" class="ol"/><path d="M-60,-34 L-50,34 M-15,-34 L-5,34 M30,-34 L40,34" stroke="#555" stroke-width="5"/></g>`;
const batt = () => `<rect x="-70" y="-40" width="140" height="80" rx="12" fill="#fff" class="ol"/><rect x="70" y="-16" width="14" height="32" rx="4" fill="${K.navy}"/><rect x="-62" y="-32" width="62" height="64" rx="8" fill="${AL}"/><rect x="0" y="-32" width="62" height="64" rx="8" fill="${CU}"/>${T(-31,12,30,'−',{c:'r9'})}${T(31,12,30,'+',{c:'r9'})}`;
const dilata = () => `<path d="M-60,0 H60" stroke="${AL}" stroke-width="22" stroke-linecap="round"/><path d="M-110,0 H-80 M-96,-14 L-110,0 L-96,14 M110,0 H80 M96,-14 L110,0 L96,14" stroke="${K.orange}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
const oxida = () => `<path d="M-90,0 H90" stroke="${AL}" stroke-width="30" stroke-linecap="round"/>${[-60,-20,20,60].map(x=>`<circle cx="${x}" cy="-6" r="7" fill="#8A93A6"/>`).join('')}`;
const crossSec = (id) => `<circle r="90" fill="${K.navy}"/><circle r="78" fill="${CU}"/><circle id="${id}_core" r="66" fill="${AL}"/>`;
const bimet = () => `<rect x="-120" y="-60" width="240" height="120" rx="18" fill="#fff" class="ol"/><rect x="-110" y="-50" width="105" height="100" rx="12" fill="${AL}"/><rect x="5" y="-50" width="105" height="100" rx="12" fill="${CU}"/>
  ${T(0,100,34,'AL/CU',{c:'r9',fill:K.navy})}<path d="M-220,0 H-120" stroke="${AL}" stroke-width="16" stroke-linecap="round"/><path d="M220,0 H120" stroke="${CU}" stroke-width="16" stroke-linecap="round"/>`;
const knife = () => `<path d="M0,0 L120,-30 L130,-18 L10,14 Z" fill="#DDE3EF" class="ol" style="stroke-width:4"/><rect x="-90" y="-8" width="95" height="30" rx="10" fill="${K.orange}" class="ol" style="stroke-width:4" transform="rotate(-14)"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'ALUMÍNIO + COBRE') + T(540,495,78,'DÁ PRA EMENDAR?') +
    T(540,640,104,'ELES BRIGAM!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990)">${box(560,380,null,`<g transform="scale(.85)">${joint('cvj')}</g>`)}</g>` +
    `<g transform="translate(880,820) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,32,'CUIDADO!',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('E O GOLPE DO FIO'),
  init: () => { $('cvj_glow').setAttribute('opacity',.8); $('cvj_cor').setAttribute('opacity',1); $('cvj_tape').setAttribute('opacity',1); },
  titles: [[0,2,'Alumínio + cobre?','cobre'],[3,4,'Mas atenção!','atenção'],[5,5,'Tem coisa pior','pior'],[6,6,'Fica até o final!','final'],
    [7,11,'Por que eles brigam','brigam'],[12,14,'Vamos fazer uma conta','conta'],[15,17,'O golpe do fio','golpe'],[18,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[13,13],[18,18]], worry: [[4,5],[11,11],[14,14],[17,17]],
  drop: [[s(4,.4),s(5)],[s(11),s(12)],[s(17,.4),s(18)]], sizzle: [[s(4,.3),s(5)],[s(11),s(12)]],
  events: [[s(1,.6),'pop']],
  specs: () => {
    el('jA', box(640,420,null,`${T(-250,-120,34,'alumínio',{a:'start',c:'r8',fill:'#6E7889'})}${T(250,-120,34,'cobre',{a:'end',c:'r8',fill:CU})}<g transform="translate(0,20)">${joint('ja')}</g>${heatWaves('jahw',[-60,0,60],-50)}`), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Torce e','passa fita!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('funcTag', pill(360,84,'funcionou!',K.blue,'#fff',48), {x:540,y:880, in:s(2,.1), out:s(4,.3), sfx:'ding'});
    el('esq', stampSVG('ESQUENTOU','COM O TEMPO',K.orange,640), {x:540,y:880,r:-7, in:s(4,.5), out:s(5), sfx:'buzz'});
    el('cobQ', box(440,460,'fio "de cobre"?',`<g transform="translate(0,30) scale(1.3)"><circle r="90" fill="${K.navy}"/><circle r="78" fill="${CU}"/></g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('cobQm', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A briga',`<g transform="translate(0,30) scale(.8)">${batt()}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','O golpe',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('big3', bigNum('3'), {x:540,y:620, in:s(7,.4), out:s(8), sfx:'boing'});
    el('row0', row(1,'Oxida','o óxido conduz mal',`<g transform="scale(.8)">${oxida()}</g>`), {x:540,y:450, in:s(8), out:s(11)});
    el('row1', row(2,'Vira uma pilha','metais diferentes + umidade',`<g transform="scale(.75)">${batt()}</g>`), {x:540,y:620, in:s(9), out:s(11)});
    el('row2', row(3,'Dilata e afrouxa','esquenta, esfria, solta',`<g transform="scale(.8)">${dilata()}</g>`), {x:540,y:790, in:s(10), out:s(11)});
    el('resul', box(880,440,'resultado',`<g transform="translate(0,-20) scale(.95)">${joint('jr')}</g>${heatWaves('jrhw',[-60,0,60],-80)}`+sub('resT',0,140,pill(560,76,'mau contato = aquecedor escondido',K.orange,'#fff',34))), {x:540,y:620, in:s(11), out:s(12), subs:[['resT',s(11,.5)]]});
    el('cCu', card('cCuC','cobre', `<path d="M-130,30 H130" stroke="${K.navy}" stroke-width="34" stroke-linecap="round"/><path d="M-130,30 H130" stroke="${CU}" stroke-width="22" stroke-linecap="round"/>${T(0,140,64,'R',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(13), out:s(15)});
    el('cAl', card('cAlC','alumínio', `<path d="M-130,30 H130" stroke="${K.navy}" stroke-width="34" stroke-linecap="round"/><path d="M-130,30 H130" stroke="${AL}" stroke-width="22" stroke-linecap="round"/>${T(0,140,64,'1,6 × R',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(13,.3), out:s(14)});
    el('calor', box(860,420,'mesma bitola, mesma corrente',`${T(0,40,130,'+60%',{c:'r9',fill:K.orange})}${T(0,120,52,'de calor')}`), {x:540,y:620, in:s(14), out:s(15), sfx:'boing'});
    el('fora', card('foraC','por fora', `<g transform="translate(0,30) scale(1.2)"><circle r="90" fill="${K.navy}"/><circle r="78" fill="${CU}"/></g>`), {x:290,y:640, in:s(16), out:s(17)});
    el('dentro', card('dentroC','por dentro', `<g transform="translate(0,30) scale(1.2)">${crossSec('cs')}</g>`), {x:790,y:640, in:s(16,.35), out:s(17)});
    el('raspa', box(860,460,'o teste: raspa a ponta',`<path d="M-360,40 H60" stroke="${K.navy}" stroke-width="44" stroke-linecap="round"/><path d="M-360,40 H60" stroke="${CU}" stroke-width="32" stroke-linecap="round"/><path id="rpS" d="M20,40 H60" stroke="${AL}" stroke-width="32" stroke-linecap="round"/>
       <g id="kn" transform="translate(40,-30)">${knife()}</g>`+sub('rasT',140,150,pill(460,76,'prateado = NÃO é cobre',K.orange,'#fff',36))), {x:540,y:620, in:s(17), out:s(18), subs:[['rasT',s(17,.6)]]});
    el('rule', box(880,460,'só com conector próprio',`<g transform="translate(0,10) scale(1.2)">${bimet()}</g>`+sub('ruleOk',330,-110,badgeOK('ruleOkb'))), {x:540,y:620, in:s(18), out:s(19), subs:[['ruleOk',s(18,.7)]]});
    el('casa', box(820,420,null,`<path d="M-340,-20 H-160" stroke="${K.navy}" stroke-width="40" stroke-linecap="round"/><path d="M-340,-20 H-160" stroke="${CU}" stroke-width="28" stroke-linecap="round"/>${T(-110,-40,50,'dentro de casa:',{a:'start'})}${T(-110,40,70,'COBRE',{a:'start',c:'r9',fill:CU})}`+sub('inm',0,140,pill(420,70,'com selo do Inmetro ✓',K.blue,'#fff',36))), {x:540,y:620, in:s(19), out:s(20), subs:[['inm',s(19,.5)]]});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(860,480,null,`<g transform="translate(0,-120) scale(.7)">${joint('jz')}</g>${T(0,40,56,'alumínio e cobre')}${T(0,140,110,'BRIGAM',{c:'r9',fill:K.orange})}`+sub('resNo',0,205,T(0,0,34,'sem o conector certo, a emenda esquenta',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(21), out:s(22), subs:[['resNo',s(21,.6)]]});
  },
  fx: (t) => {
    $('ja_tape').setAttribute('opacity', C(s(1,.55),s(1,.65),t));
    const h = C(s(4,.2),s(4,.6),t); $('ja_glow').setAttribute('opacity', h*.8*(.8+.2*Math.sin(t*20))); $('ja_cor').setAttribute('opacity', h); animWaves('jahw', t, h);
    $('jr_glow').setAttribute('opacity', .8); $('jr_cor').setAttribute('opacity',1); $('jr_tape').setAttribute('opacity',1); animWaves('jrhw', t, 1);
    $('jz_glow').setAttribute('opacity', .6); $('jz_cor').setAttribute('opacity',1);
    const sc = C(s(17,.15),s(17,.55),t); $('kn').setAttribute('transform',`translate(${lerp(40,-30,sc)+Math.sin(t*30)*6*(sc>0&&sc<1?1:0)},-30)`); $('rpS').setAttribute('d',`M${lerp(60,-60,sc)},40 H60`);
  },
});
