/* EletriK - BTUs */
const ac = () => `<rect x="-170" y="-55" width="340" height="110" rx="26" fill="#fff" class="ol"/><path d="M-140,20 H140" stroke="${K.navy}" stroke-width="5"/><path d="M-140,36 H140" stroke="#C9D3F0" stroke-width="5"/><circle cx="130" cy="-22" r="8" fill="#22A55A"/>${[-80,-20,40,100].map(x=>`<path d="M${x},70 q10,22 0,44" stroke="#4FC3F7" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}`;
const roomPlan = (w,h,lab) => `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="10" fill="#EEF1FA" stroke="${K.navy}" stroke-width="8"/>${T(0,14,44,lab,{c:'r9',fill:K.blue})}`;
const sunI = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*90).toFixed(0)},${(Math.sin(a)*90).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
const drops = () => `${[[-30,0],[10,-30],[40,10]].map(([x,y])=>`<g transform="translate(${x},${y}) scale(.4)">${dropIcon()}</g>`).join('')}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'QUANTOS BTUs') + T(540,495,78,'PRO SEU QUARTO?') +
    T(540,640,100,'NEM O MAIOR!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(0,-40) scale(1.1)">${ac()}</g>${T(0,150,60,'? BTUs',{c:'r9',fill:K.orange})}`)}</g>` + kikoCover() + coverBanner('O TAMANHO CERTO'),
  titles: [[0,2,'Quantos BTUs?','BTUs'],[3,4,'Mas atenção!','atenção'],[5,5,'O detalhe do quarto','detalhe'],[6,6,'Fica até o final!','final'],[7,8,'O que é BTU','BTU'],
    [9,13,'Vamos fazer uma conta','conta'],[14,17,'3 erros comuns','erros'],[18,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[9,9],[14,14],[18,18]], worry: [[4,4],[13,13]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('acA', box(560,440,null,`<g transform="translate(0,-20) scale(1.2)">${ac()}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Compra o maior,','gela mais rápido!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('logTag', pill(300,84,'lógico?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('gde', card('gdeC','grande demais', `<g transform="translate(0,0) scale(1.3)">${drops()}</g>${T(0,130,34,'liga-desliga, úmido',{c:'r8',fill:K.orange})}`), {x:290,y:640, in:s(4,.1), out:s(5)});
    el('peq', card('peqC','pequeno demais', `<g transform="translate(0,10) scale(.8)">${thermoIcon()}</g>${T(0,130,34,'trabalha sem parar',{c:'r8',fill:K.orange})}`), {x:790,y:640, in:s(4,.5), out:s(5)});
    el('det', box(440,460,'o detalhe do quarto',`<g transform="translate(0,30) scale(1.1)">${sunI()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('detQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','O que é BTU',T(0,60,60,'BTU',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','O que aumenta',T(0,60,90,'+',{c:'r9',fill:K.orange})]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('btu', box(860,440,'BTU = capacidade de tirar calor',`<g transform="translate(-220,0) scale(.7)">${ac()}</g>${T(30,-20,48,'não é o',{a:'start'})}${T(30,60,64,'consumo',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(7), out:s(8)});
    el('cop', box(880,460,'ar de 9.000 BTUs',`${sub('b0',0,-70,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#E3E9FF"/>${T(-360,16,40,'calor que tira',{a:'start'})}${T(360,18,50,'~2.600 W',{a:'end',c:'r9',fill:K.blue})}`)}${sub('b1',0,80,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#FFE4D2"/>${T(-360,16,40,'eletricidade que gasta',{a:'start'})}${T(360,18,50,'~800 W',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(8), out:s(9), subs:[['b0',s(8,.2)],['b1',s(8,.6)]]});
    el('regra', pill(560,90,'≈ 600 BTUs por m²',K.navy,'#fff',46), {x:540,y:440, in:s(9), out:s(13)});
    el('q12', box(860,400,null,`<g transform="translate(-240,10)">${roomPlan(220,180,'12 m²')}</g>${T(-60,-20,52,'12 × 600 =',{a:'start'})}${T(-60,70,70,'7.200',{a:'start',c:'r9',fill:K.blue})}`+sub('mod',150,140,pill(380,70,'→ modelo de 9.000',K.orange,'#fff',36))), {x:540,y:700, in:s(10), out:s(12), subs:[['mod',s(11)]]});
    el('mais', box(880,460,'o que aumenta',`${[['+600 por pessoa a mais',personIcon()],['+600 por aparelho que esquenta',`<g transform="scale(.7)">${tv()}</g>`]].map(([l,ic],i)=>sub('ma'+i,0,-70+i*140,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#EEF1FA"/><g transform="translate(-330,0) scale(.45)">${ic}</g>${T(-260,16,40,l,{a:'start'})}`)).join('')}`), {x:540,y:620, in:s(12), out:s(13), subs:[['ma0',s(12,.2)],['ma1',s(12,.6)]]});
    el('sol', box(860,440,null,`<g transform="translate(-240,0) scale(1.1)">${sunI()}</g>${T(-110,-30,52,'sol da tarde',{a:'start',c:'r9',fill:K.orange})}${T(-110,40,46,'na parede?',{a:'start'})}${T(-110,110,40,'um tamanho acima',{a:'start',fill:K.blue})}`), {x:540,y:620, in:s(13), out:s(14)});
    el('e0', row(1,'Escolher pelo preço','e não pelo cálculo',T(0,16,50,'R$',{c:'r9',fill:K.orange})), {x:540,y:450, in:s(15), out:s(18)});
    el('e1', row(2,'Esquecer sol e pessoas','e os aparelhos',`<g transform="scale(.45)">${sunI()}</g>`), {x:540,y:620, in:s(16), out:s(18)});
    el('e2', row(3,'Tomada qualquer','precisa de circuito próprio',`<g transform="scale(.42)">${outletIcon('',20)}</g>`), {x:540,y:790, in:s(17), out:s(18)});
    el('rule', box(880,460,null,`${T(0,-90,60,'≈ 600 BTUs/m²',{c:'r9',fill:K.blue})}${T(0,0,46,'+ pessoas + aparelhos + sol')}`+sub('rv',0,110,pill(420,70,'na dúvida, avaliação',K.orange,'#fff',36))), {x:540,y:620, in:s(18), out:s(19), subs:[['rv',s(18,.7)]]});
    el('pro', proCard(), {x:540,y:620, in:s(19), out:s(20), subs:[['proOk',s(19,.6)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.8)">${ac()}</g>${T(0,60,46,'nem o maior, nem o mais barato')}${T(0,150,70,'TAMANHO CERTO',{c:'r9',fill:K.orange})}${T(0,210,26,'valores de referência',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(20), out:s(21)});
  },
  fx: (t) => {},
});
