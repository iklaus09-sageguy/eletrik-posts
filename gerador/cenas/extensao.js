/* EletriK - Extensão esquentando */
const stripIcon = (id) => `<path id="${id}_glow" d="M-200,0 Q-280,0 -290,80 Q-300,160 -220,190" stroke="#FF3B1A" stroke-width="44" fill="none" opacity="0" filter="url(#blur)"/>
  <path d="M-200,0 Q-280,0 -290,80 Q-300,160 -220,190" stroke="${K.navy}" stroke-width="18" fill="none" stroke-linecap="round"/>
  <path id="${id}_cord" d="M-200,0 Q-280,0 -290,80 Q-300,160 -220,190" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>
  <g transform="translate(-200,200) rotate(-90) scale(.45)">${plugIcon(false).replace(/<text[^]*?<\/text>/,'')}</g>
  <rect x="-200" y="-48" width="400" height="96" rx="32" fill="#fff" class="ol"/>
  ${[-135,-45,45,135].map(x=>`<g transform="translate(${x},0)"><path d="M-26,-14 L-14,-30 H14 L26,-14 V14 L14,30 H-14 L-26,14 Z" fill="#E8ECF6" class="ol" style="stroke-width:3"/><circle cx="-9" cy="6" r="5" fill="${K.navy}"/><circle cx="9" cy="6" r="5" fill="${K.navy}"/><circle cx="0" cy="-9" r="5" fill="${K.navy}"/></g>`).join('')}
  <rect x="170" y="-20" width="20" height="40" rx="6" fill="${K.orange}"/>`;
const plugged = (id,x) => `<g id="${id}"><path d="M${x},-30 Q${x},-120 ${x+30},-170" stroke="${K.navy}" stroke-width="12" fill="none" stroke-linecap="round"/><rect x="${x-24}" y="-40" width="48" height="56" rx="10" fill="#fff" class="ol" style="stroke-width:5"/></g>`;
const extScene = (id) => `<g transform="translate(40,40)">${stripIcon(id)}${plugged(id+'p0',-135)}${plugged(id+'p1',-45)}${plugged(id+'p2',45)}${plugged(id+'p3',135)}</g>${heatWaves(id+'_hw',[-100,20,140],-60)}`;
const heaterIcon = () => `<rect x="-120" y="-110" width="240" height="210" rx="22" fill="#E3E8F6" class="ol"/>${[-80,-40,0,40,80].map(x=>`<rect x="${x-12}" y="-90" width="24" height="170" rx="10" fill="#C9D3F0" class="ol" style="stroke-width:3"/>`).join('')}
  <path d="M-90,100 V125 M90,100 V125" stroke="${K.navy}" stroke-width="12" stroke-linecap="round"/><circle cx="95" cy="-80" r="14" fill="${K.orange}" class="ol" style="stroke-width:3"/>`;
const reelIcon = () => `${[70,52,34].map(r=>`<circle r="${r}" fill="none" stroke="${K.navy}" stroke-width="16"/>`).join('')}<circle r="16" fill="${K.orange}" class="ol" style="stroke-width:3"/>`;
const cascadeIcon = () => `<g transform="translate(-60,-20) scale(.35)">${stripIcon('cs1')}</g><g transform="translate(60,30) scale(.35)">${stripIcon('cs2')}</g>`;
const rugIcon = () => `<rect x="-110" y="-30" width="220" height="60" rx="10" fill="#C0504D" class="ol"/><path d="M-90,-30 V30 M-60,-30 V30 M-30,-30 V30 M0,-30 V30 M30,-30 V30 M60,-30 V30 M90,-30 V30" stroke="#E07B78" stroke-width="5"/><path d="M-150,40 H150" stroke="${K.navy}" stroke-width="12" stroke-linecap="round"/>`;
const cableX = (thick, id) => `<path id="${id}_glow" d="M-300,0 H300" stroke="#FF3B1A" stroke-width="${thick?80:50}" opacity="0" filter="url(#blur)"/><path d="M-300,0 H300" stroke="${K.navy}" stroke-width="${thick?44:20}" stroke-linecap="round"/><path id="${id}_c" d="M-300,0 H300" stroke="#4FC3F7" stroke-width="${thick?32:10}" stroke-linecap="round"/>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'SUA EXTENSÃO') + T(540,495,78,'ESQUENTA?') +
    T(540,640,104,'NÃO É NORMAL!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,980)">${box(560,420,null,`<g transform="scale(.9)">${extScene('cv')}</g>`)}</g>` +
    `<g transform="translate(890,790) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,36,'PERIGO!',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('ELA TEM LIMITE!'),
  init: () => { $('cv_hw').style.opacity=1; $('cv_glow').setAttribute('opacity',.8); },
  titles: [[0,2,'Extensão quente?','quente'],[3,5,'Mas atenção!','atenção'],[6,6,'O jeito errado','errado'],[7,7,'Fica até o final!','final'],
    [8,10,'Lembra do fio fino?','fio fino'],[11,15,'Vamos fazer uma conta','conta'],[16,20,'3 erros comuns','erros'],[21,23,'Como escolher','escolher'],
    [24,25,'Regra de ouro','ouro'],[26,26,'Resumindo',''],[27,28,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(14,.65),830,420,8,'PASSOU!','boing']],
  palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 27,
  point: [[3,3],[7,7],[8,8],[12,12],[24,24]], worry: [[4,4],[10,10],[14,14],[20,20]],
  drop: [[s(4,.3),s(5)],[s(14,.4),s(15)],[s(20),s(21)]], sizzle: [[s(0,.2),s(1)],[s(10,.3),s(11)]],
  events: [[s(1,.6),'pop']],
  specs: () => {
    el('extA', box(620,440,null,extScene('a')), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Normal! Liga','mais coisa aí!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('bemTag', pill(320,84,'tudo bem?',K.blue,'#fff',48), {x:540,y:880, in:s(2,.1), out:s(4,.3)});
    el('limTag', stampSVG('NO','LIMITE!',K.orange,420), {x:540,y:880,r:-7, in:s(4,.3), out:s(5), sfx:'buzz'});
    el('limC', box(860,440,null,`<g transform="translate(-200,30) scale(.75)">${stripIcon('lc')}</g>${T(130,-40,52,'tem limite:',{a:'start'})}${T(130,70,110,'10 A',{a:'start',c:'r9',fill:K.orange})}${T(130,140,34,'ou 20 A',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(5), out:s(6)});
    el('jeito', box(440,460,'o jeito errado',`<g transform="translate(0,30) scale(1.6)"><g opacity=".9">${reelIcon().replaceAll(K.orange,K.navy)}</g></g>`), {x:470,y:620, in:s(6,.3), out:s(7)});
    el('jeitoQ', bigQ(), {x:860,y:480, in:s(6,.6), out:s(7), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','3 erros',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv2')}</g>`],['3','A certa',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(7,[.2,.45,.72][i]), out:s(8)}));
    el('fios', box(880,460,'mesma corrente',`${T(-380,-60,36,'fio grosso',{a:'start',c:'r8'})}<g transform="translate(0,-10)">${cableX(true,'fg')}</g>${T(-380,90,36,'fio fino (extensão barata)',{a:'start',c:'r8',fill:K.orange})}<g transform="translate(0,140)">${cableX(false,'ff')}</g>${heatWaves('ffhw',[-150,0,150],110)}`), {x:540,y:620, in:s(8), out:s(11)});
    el('baratTag', pill(520,80,'extensão barata = fio fino',K.orange,'#fff',38), {x:500,y:900, in:s(9,.4), out:s(11)});
    el('ext10', box(400,460,'extensão 10 A',`<g transform="translate(20,20) scale(.7)">${stripIcon('e10')}</g>${T(0,160,56,'127 V',{c:'r9',fill:K.blue})}`), {x:290,y:640, in:s(12), out:s(14)});
    el('calc', box(420,460,null,`${T(0,-100,52,'10 A')}${T(0,-30,52,'× 127 V')}<path d="M-150,0 H150" stroke="${K.navy}" stroke-width="6"/>`+sub('cRes',0,110,T(0,0,84,'≈ 1.270 W',{c:'r9',fill:K.orange}))), {x:790,y:640, in:s(12,.3), out:s(14), subs:[['cRes',s(12,.75)]]});
    el('somaTag', pill(380,84,'SOMANDO tudo!',K.navy,'#fff',44), {x:540,y:900, in:s(13), out:s(14)});
    el('barH', box(900,440,'aquecedor × extensão',`<g transform="translate(320,-120) scale(.35)">${heaterIcon()}</g>
       ${T(-410,-55,36,'extensão aguenta',{a:'start'})}<rect x="-410" y="-40" width="780" height="56" rx="14" fill="#EEF1FA"/><rect id="barA" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bA',-410+508+90,-2,T(0,10,36,'1.270 W',{c:'r9',fill:K.blue}))}
       ${T(-410,70,36,'aquecedor puxa',{a:'start'})}<rect x="-410" y="85" width="780" height="56" rx="14" fill="#EEF1FA"/><rect id="barB" x="-410" y="85" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bB',-410+600+90,123,T(0,10,36,'1.500 W',{c:'r9',fill:K.orange}))}
       <path d="M${-410+508},-60 V160" stroke="${K.navy}" stroke-width="5" stroke-dasharray="12 10"/>`), {x:540,y:640, in:s(14), out:s(15), subs:[['bA',s(14,.25)],['bB',s(14,.6)]]});
    el('v220', box(860,440,'em 220 V',`${T(0,-50,60,'10 A × 220 V')}${T(0,60,110,'≈ 2.200 W',{c:'r9',fill:K.blue})}`+sub('fol',0,150,pill(520,66,'mais folga, mas tem limite',K.orange,'#fff',34))), {x:540,y:620, in:s(15), out:s(16), subs:[['fol',s(15,.6)]]});
    el('big3', bigNum('3'), {x:540,y:620, in:s(16,.5), out:s(17), sfx:'boing'});
    el('row0', row(1,'Enrolada','o calor não sai',`<g transform="scale(.8)">${reelIcon()}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('row1', row(2,'Extensão em extensão','uma atrás da outra',cascadeIcon()), {x:540,y:620, in:s(18), out:s(20)});
    el('row2', row(3,'Embaixo do tapete','ou da porta: amassa',`<g transform="scale(.7)">${rugIcon()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('quente', box(860,440,null,`<g transform="translate(-280,0) scale(1.1)">${thermoIcon()}</g>${T(-160,-60,50,'quente, mole',{a:'start'})}${T(-160,10,50,'ou com cheiro?',{a:'start'})}`+sub('desl',80,120,pill(460,84,'DESLIGA NA HORA',K.orange,'#fff',42))), {x:540,y:620, in:s(20), out:s(21), subs:[['desl',s(20,.65)]]});
    el('escQ', box(440,460,'qual comprar?',`<g transform="translate(0,40) scale(.8)">${stripIcon('eq')}</g>`), {x:470,y:620, in:s(21), out:s(22)});
    el('escQm', bigQ(), {x:860,y:480, in:s(21,.3), out:s(22), sfx:'boing'});
    el('emb', box(860,460,'na embalagem',[['selo do Inmetro',K.blue],['corrente: 10 A ou 20 A',K.orange]].map(([l,c],i)=>sub('em'+i,0,-50+i*130,`<rect x="-380" y="-50" width="760" height="100" rx="22" fill="#EEF1FA"/><g transform="translate(-320,0) scale(.75)">${badgeOK('emb'+i)}</g>${T(-250,16,46,l,{a:'start',fill:c})}`)).join('')),
       {x:540,y:620, in:s(22), out:s(23), subs:[['em0',s(22,.3)],['em1',s(22,.65)]]});
    const ITEMS=[['TV','150 W'],['som','100 W'],['carregador','20 W']];
    el('somaC', box(860,500,'soma antes de ligar',ITEMS.map((r,i)=>sub('it'+i,0,-110+i*80,`<rect x="-380" y="-32" width="760" height="64" rx="16" fill="#EEF1FA"/>${T(-350,14,40,r[0],{a:'start'})}${T(350,14,40,r[1],{a:'end',c:'r9',fill:K.blue})}`)).join('')+
       sub('tot',0,170,pill(600,76,'total 270 W < 1.270 W ✓',K.blue,'#fff',38))), {x:540,y:630, in:s(23), out:s(24), subs:[...ITEMS.map((r,i)=>['it'+i,s(23,.15)+i*.3]),['tot',s(23,.7)]]});
    el('rule', box(880,460,null,`${T(0,-120,52,'extensão é')}${T(0,-20,96,'PROVISÓRIA',{c:'r9',fill:K.orange})}<g transform="translate(-260,120) scale(.45)">${stripIcon('rl')}</g><path d="M-60,120 H40 M16,96 L40,120 L16,144" stroke="${K.navy}" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(180,110) scale(.55)">${outletIcon('',10)}</g>${T(330,125,34,'tomada',{c:'r8',fill:K.blue})}${T(330,165,34,'nova',{c:'r8',fill:K.blue})}`), {x:520,y:620, in:s(24,.2), out:s(25)});
    el('pro', proCard(), {x:540,y:620, in:s(25), out:s(26), subs:[['proOk',s(25,.6)]]});
    el('resumo', box(860,480,null,`<g transform="translate(0,-130) scale(.85)">${thermoIcon()}</g>${T(0,30,58,'Extensão quente')}${T(0,135,110,'= AVISO',{c:'r9',fill:K.orange})}`+sub('resNo',0,205,T(0,0,34,'coisa demais ou extensão fraca demais',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(26), out:s(27), subs:[['resNo',s(26,.6)]]});
  },
  fx: (t) => {
    const hot = C(s(0,.2),s(0,.7),t)*(1-C(s(1,.9),s(2,.2),t)) + C(s(4),s(4,.3),t);
    animWaves('a_hw', t, Math.min(1,hot)); $('a_glow').setAttribute('opacity', Math.min(1,hot)*.8);
    $('a_cord').setAttribute('stroke', mixc('#FFFFFF','#FF6A13',Math.min(1,hot)));
    const p3 = pop(t,s(1,.6)); $('ap3').setAttribute('transform',`translate(135,-10) scale(${p3}) translate(-135,10)`); show($('ap3'),p3);
    const ff = C(s(10,.2),s(10,.7),t); $('ff_glow').setAttribute('opacity',ff*.8); $('ff_c').setAttribute('stroke',mixc('#4FC3F7','#E0301E',ff)); animWaves('ffhw',t,ff);
    $('barA').setAttribute('width', 508*eo(C(s(14,.1),s(14,.1)+.6,t))); $('barB').setAttribute('width', 600*eo(C(s(14,.45),s(14,.45)+.6,t)));
  },
});
