/* EletriK - Disjuntor bipolar x monopolar */
const F1='#E0301E', F2='#2A2A2A', NN='#4FA3F7';
const mono = (id) => `<rect x="-45" y="-80" width="90" height="160" rx="14" fill="#EEF1FA" class="ol"/><rect x="-22" y="-48" width="44" height="96" rx="8" fill="${K.navy}" class="ol" style="stroke-width:4"/><g id="${id}"><rect x="-18" y="-44" width="36" height="42" rx="6" fill="${K.orange}" class="ol" style="stroke-width:3"/></g>`;
const bipo = (id) => `<rect x="-95" y="-80" width="190" height="160" rx="14" fill="#EEF1FA" class="ol"/>${[-45,45].map(x=>`<rect x="${x-22}" y="-48" width="44" height="96" rx="8" fill="${K.navy}" class="ol" style="stroke-width:4"/>`).join('')}
  <g id="${id}">${[-45,45].map(x=>`<rect x="${x-18}" y="-44" width="36" height="42" rx="6" fill="${K.orange}" class="ol" style="stroke-width:3"/>`).join('')}<rect x="-30" y="-30" width="60" height="12" rx="4" fill="${K.orange}" class="ol" style="stroke-width:3"/></g>`;
const showerH = () => `<path d="M-50,-60 Q-50,-100 0,-100 H40" fill="none" stroke="${K.navy}" stroke-width="14" stroke-linecap="round"/><path d="M-90,-36 Q-50,-76 -10,-36 Z" fill="#C9D3F0" class="ol"/>`;
const diag = (id, bip) => `<path id="${id}_f1" d="M-380,-120 H120 V-20" stroke="${F1}" stroke-width="12" fill="none" stroke-linecap="round"/><path id="${id}_f2" d="M-380,-40 H60 V-20" stroke="${F2}" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M-380,40 H360" stroke="${NN}" stroke-width="10" stroke-linecap="round" stroke-dasharray="20 14"/>${T(-390,-135,28,'F1',{a:'start',c:'r9',fill:F1})}${T(-390,-55,28,'F2',{a:'start',c:'r9',fill:F2})}${T(-390,85,28,'N',{a:'start',c:'r9',fill:NN})}
  <g transform="translate(-180,-80) scale(.7)">${bip?bipo(id+'_b'):mono(id+'_b')}</g><g transform="translate(110,60) scale(.9)">${showerH()}</g>
  <g id="${id}_z" opacity="0"><path d="${star(8,34,14)}" fill="#FFD84D" class="ol" style="stroke-width:3" transform="translate(70,-40)"/></g>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'DESLIGOU O DISJUNTOR') + T(540,495,78,'E LEVOU CHOQUE?') +
    T(540,640,104,'BIPOLAR!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-120,0)">${mono('cvm')}</g>${T(-10,20,60,'≠',{c:'r9',fill:K.orange})}<g transform="translate(130,0) scale(.85)">${bipo('cvb')}</g>`)}</g>` + kikoCover() + coverBanner('DESLIGADO ≠ SEGURO'),
  titles: [[0,2,'Desligou e levou choque?','choque'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,10,'A rede de duas fases','duas fases'],
    [11,15,'Vamos fazer uma conta','conta'],[16,19,'Quando usar cada um','cada um'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.6),800,420,8,'ZAP!','buzz'],[s(12,.5),780,420,8,'CLACK!','clack']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[7,7],[16,16],[20,20]], worry: [[4,5],[14,15]],
  drop: [[s(4,.4),s(6)],[s(14),s(16)]], sizzle: [], events: [],
  specs: () => {
    el('diagA', box(860,460,null,`<g transform="translate(0,20)">${diag('a',false)}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Impossível, estava','desligado!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('impTag', pill(340,84,'impossível?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('duas', box(860,460,null,`<g transform="translate(0,20)">${diag('d',false)}</g>`+sub('dT',0,-170,pill(560,70,'desligou só UMA fase',K.orange,'#fff',38))), {x:540,y:620, in:s(4), out:s(6), subs:[['dT',s(4,.6)]]});
    el('outra', stampSVG('A OUTRA FASE','CONTINUA LIGADA',K.orange,700), {x:540,y:900,r:-6, in:s(5), out:s(6), sfx:'buzz'});
    [['1','Duas fases',T(0,60,60,'F1 F2',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','O bipolar',`<g transform="translate(0,25) scale(.6)">${bipo('pvb')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('rede', box(880,500,'rede 127/220 V',`<path d="M-380,-110 H380" stroke="${F1}" stroke-width="12" stroke-linecap="round"/><path d="M-380,-10 H380" stroke="${F2}" stroke-width="12" stroke-linecap="round"/><path d="M-380,90 H380" stroke="${NN}" stroke-width="10" stroke-dasharray="20 14"/>
       ${T(-400,-125,28,'F1',{a:'start',c:'r9',fill:F1})}${T(-400,-25,28,'F2',{a:'start',c:'r9',fill:F2})}${T(-400,135,28,'N',{a:'start',c:'r9',fill:NN})}`+
       sub('v1',-120,40,`<path d="M0,-150 V130" stroke="${K.orange}" stroke-width="6" stroke-dasharray="10 8"/>${pill(200,64,'127 V',K.blue,'#fff',36)}`)+
       sub('v2',160,-60,`<path d="M0,-50 V50" stroke="${K.orange}" stroke-width="6" stroke-dasharray="10 8"/>${pill(200,64,'220 V',K.orange,'#fff',36)}`)),
       {x:540,y:640, in:s(7), out:s(10), subs:[['v1',s(8)],['v2',s(9)]]});
    el('ch220', box(860,460,'chuveiro 220 V nessa rede',`<g transform="translate(0,20)">${diag('c',true)}</g>`), {x:540,y:620, in:s(10), out:s(11)});
    el('monoC', box(860,460,'disjuntor MONOPOLAR',`<g transform="translate(0,20)">${diag('m',false)}</g>`), {x:540,y:620, in:s(12), out:s(16)});
    el('parece', pill(460,76,'para de esquentar...',K.navy,'#fff',38), {x:510,y:910, in:s(13), out:s(14)});
    el('v127', pill(520,84,'127 V entre F2 e VOCÊ',K.orange,'#fff',42), {x:510,y:910, in:s(14), out:s(16), sfx:'buzz'});
    el('ma', starBadge('250','mA molhado'), {x:210,y:960,s:.85,r:-8, in:s(15), out:s(16), sfx:'boing'});
    el('u0', row(1,'Fase + neutro (127 V)','monopolar',`<g transform="scale(.6)">${mono('u0m')}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('u1', row(2,'Fase + fase (220 V)','bipolar: desliga as duas',`<g transform="scale(.45)">${bipo('u1b')}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('u2', row(3,'Nunca 2 monopolares','soltos, em circuito de 2 fases',`<g transform="scale(.7)">${badgeX('u2x')}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(860,460,null,`<rect x="-330" y="-60" width="120" height="200" rx="20" fill="#FFD84D" class="ol"/><rect x="-310" y="-40" width="80" height="60" rx="8" fill="#C8F0D4" class="ol" style="stroke-width:4"/>${T(-270,0,26,'0 V',{c:'r9'})}
       ${T(-160,-40,52,'desligou?',{a:'start'})}${T(-160,40,76,'CONFIRMA',{a:'start',c:'r9',fill:K.orange})}${T(-160,100,36,'com testador antes de tocar',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(20), out:s(21)});
    el('pro', proCard(), {x:540,y:620, in:s(21), out:s(22), subs:[['proOk',s(21,.6)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-120) scale(.7)">${bipo('rb')}</g>${T(0,50,52,'duas fases pede')}${T(0,135,90,'BIPOLAR',{c:'r9',fill:K.orange})}`+sub('rs',0,205,T(0,0,34,'senão, desligado não quer dizer seguro',{c:'f6',fill:'#55608A'}))), {x:540,y:620, in:s(22), out:s(23), subs:[['rs',s(22,.6)]]});
  },
  fx: (t) => {
    const g = (id,on)=>{ $(id).style.opacity = on?1:.25; };
    // abertura e "duas": F1 cortada, F2 viva + zap
    ['a','d','m'].forEach(p=>{ g(p+'_f1',false); g(p+'_f2',true); $(p+'_b').setAttribute('transform','translate(0,42)'); $(p+'_f2').style.filter='drop-shadow(0 0 6px #FFD84D)'; });
    $('a_z').setAttribute('opacity', t>s(0,.6)?(Math.floor(t*10)%2?1:.3):0);
    $('d_z').setAttribute('opacity', Math.floor(t*10)%2?1:.3);
    const mOff = C(s(12,.5),s(12,.6),t); $('m_b').setAttribute('transform',`translate(0,${mOff*42})`); g('m_f1', mOff<.5);
    $('m_z').setAttribute('opacity', t>s(14)?(Math.floor(t*10)%2?1:.3):0);
    g('c_f1',true); g('c_f2',true);
  },
});
