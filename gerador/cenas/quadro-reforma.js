/* EletriK - Quadro: 5 sinais */
const oldPanel = (id) => `<rect x="-160" y="-170" width="320" height="340" rx="16" fill="#C9B79A" class="ol"/><rect x="-130" y="-140" width="260" height="280" rx="10" fill="#E8DCC6" class="ol" style="stroke-width:4"/>
  ${[-80,0,80].map(x=>`<g transform="translate(${x},-60)"><circle r="26" fill="#fff" class="ol" style="stroke-width:4"/><circle r="10" fill="#9AA3BD"/></g>`).join('')}
  <path d="M-100,40 Q-40,80 0,40 T100,60" stroke="#E0301E" stroke-width="8" fill="none"/><path d="M-90,70 Q-20,110 40,80 T110,100" stroke="#2A2A2A" stroke-width="8" fill="none"/><g id="${id}">${heatWaves(id+'hw',[-60,0,60],-150)}</g>`;
const newPanel = () => `<rect x="-200" y="-170" width="400" height="340" rx="16" fill="#fff" class="ol"/><rect x="-170" y="-140" width="340" height="40" rx="8" fill="${K.blue}"/>${T(0,-112,22,'QUADRO NOVO',{fill:'#fff'})}
  ${[...Array(6)].map((_,i)=>`<g transform="translate(${-140+i*56},-20)"><rect x="-20" y="-50" width="40" height="100" rx="8" fill="#EEF1FA" class="ol" style="stroke-width:3"/><rect x="-10" y="-30" width="20" height="26" rx="4" fill="${i===0?'#22A55A':i===1?K.orange:K.blue}"/></g>`).join('')}
  ${T(-140,70,18,'DR',{c:'r9'})}${T(-84,70,18,'DPS',{c:'r9'})}<path d="M-170,110 H170" stroke="#22A55A" stroke-width="10"/>${T(0,148,20,'barramento de terra',{c:'r8',fill:'#22A55A'})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'QUADRO DE LUZ') + T(540,495,78,'COM 20+ ANOS?') +
    T(540,640,100,'5 SINAIS DE ALERTA',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,460,null,`<g transform="translate(0,10) scale(1.1)">${oldPanel('cv')}</g>`)}</g>` + kikoCover() + coverBanner('HORA DE REFORMAR?'),
  init: () => animWaves('cvhw',0,1),
  titles: [[0,2,'Quadro antigo?','antigo'],[3,4,'Mas atenção!','atenção'],[5,5,'Ele avisa','avisa'],[6,6,'Fica até o final!','final'],
    [7,9,'Vamos fazer uma conta','conta'],[10,15,'5 sinais de alerta','sinais'],[16,17,'O quadro moderno','moderno'],[18,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[7,7],[16,16],[18,18]], worry: [[5,5],[9,9],[13,13]], drop: [[s(9),s(10)]], sizzle: [[s(11),s(14)]], events: [],
  specs: () => {
    el('qa', box(480,460,null,`<g transform="translate(0,10) scale(1.1)">${oldPanel('qa')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Está funcionando,','não mexe!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('senTag', pill(320,84,'sensato?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('feito', box(860,440,null,`<g transform="translate(-240,10) scale(.8)">${oldPanel('fo')}</g>${T(-90,-30,46,'feito pra casa de',{a:'start'})}${T(-90,50,72,'20 anos atrás',{a:'start',c:'r9',fill:K.orange})}${T(-90,110,36,'não pra casa de hoje',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('avisa', box(440,460,'ele avisa',`<g transform="translate(0,30) scale(1.1)">${alertIcon()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('avisaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','5 sinais',T(0,70,110,'5',{c:'r9',fill:K.orange})],['3','O moderno',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('carga', box(900,460,'carga instalada',`
       ${T(-410,-55,36,'20 anos atrás',{a:'start'})}<rect x="-410" y="-40" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bOld" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bOt',-410+300+80,-2,T(0,10,40,'~7 kW',{c:'r9',fill:K.blue}))}
       ${T(-410,70,36,'hoje',{a:'start'})}<rect x="-410" y="85" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bNew" x="-410" y="85" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bNt',-410+640-100,123,T(0,10,40,'15+ kW',{c:'r9',fill:'#fff'}))}`), {x:540,y:620, in:s(7), out:s(10), subs:[['bOt',s(7,.6)],['bNt',s(8,.6)]]});
    el('dobro', starBadge('2x','a carga'), {x:210,y:960,s:.9,r:-8, in:s(9), out:s(10), sfx:'boing'});
    const SG=[['quente ao toque',thermoIcon()],['cheiro / marca escura',stainIcon()],['estalo ou chiado',sparkIcon()],['fusível, sem DR/terra',alertIcon()],['disjuntor trocado por maior',`<g transform="scale(.8)">${breakerIcon('sgb')}</g>`]];
    el('sinais', box(900,620,null,SG.map(([l,ic],i)=>sub('sg'+i,0,-240+i*120,`<rect x="-420" y="-50" width="840" height="100" rx="22" fill="#FFE4D2"/><circle cx="-370" cy="0" r="32" fill="${K.blue}" class="ol" style="stroke-width:4"/>${T(-370,13,36,i+1,{c:'r9',fill:'#fff'})}<g transform="translate(-280,0) scale(.42)">${ic}</g>${T(-220,14,38,l,{a:'start'})}`)).join('')), {x:540,y:640, in:s(10,.5), out:s(16), subs:SG.map((g,i)=>['sg'+i,s(11+i)])});
    el('novo', box(880,520,'o quadro moderno',`<g transform="translate(0,20) scale(1.1)">${newPanel()}</g>`), {x:540,y:640, in:s(16,.5), out:s(18)});
    el('rule', box(880,460,null,`${T(0,-90,52,'a casa mudou?')}${T(0,20,96,'O QUADRO',{c:'r9',fill:K.orange})}${T(0,100,52,'também')}`), {x:540,y:620, in:s(18), out:s(19)});
    el('nbr', box(820,420,null,`<g transform="translate(0,-60)">${helmetIcon()}</g>${T(0,60,52,'eletricista qualificado')}${T(0,130,60,'NBR 5410',{c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('resumo', box(880,480,null,`${T(0,-100,52,'funcionar NÃO é')}${T(0,0,96,'estar seguro',{c:'r9',fill:K.orange})}`+sub('rs',0,120,pill(520,76,'viu um sinal? profissional',K.blue,'#fff',36))), {x:540,y:620, in:s(20), out:s(21), subs:[['rs',s(20,.6)]]});
  },
  fx: (t) => { ['qa','fo'].forEach(i=>animWaves(i+'hw',t,1)); $('bOld').setAttribute('width',300*eo(C(s(7,.3),s(7,.3)+.6,t))); $('bNew').setAttribute('width',640*eo(C(s(8,.3),s(8,.3)+.8,t))); },
});
