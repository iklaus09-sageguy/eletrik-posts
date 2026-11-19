/* EletriK - Lâmpada LED x fluorescente */
const bulbLED = (id) => `<g id="${id}_rays">${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4-Math.PI/2;return `<path d="M${(Math.cos(a)*100).toFixed(0)},${(Math.sin(a)*100-20).toFixed(0)} L${(Math.cos(a)*130).toFixed(0)},${(Math.sin(a)*130-20).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}</g>
  <path d="M-70,-20 A70,70 0 1,1 70,-20 Q70,20 40,45 V70 H-40 V45 Q-70,20 -70,-20 Z" fill="#FFF3C4" class="ol"/>${T(0,0,34,'LED',{c:'r9',fill:K.blue})}
  <rect x="-40" y="70" width="80" height="22" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/><rect x="-36" y="92" width="72" height="20" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/>`;
const bulbCFL = () => `<path d="M-50,40 V-60 Q-50,-90 -25,-90 Q0,-90 0,-60 V40 M0,40 V-60 Q0,-90 25,-90 Q50,-90 50,-60 V40" stroke="${K.navy}" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M-50,40 V-60 Q-50,-90 -25,-90 Q0,-90 0,-60 V40 M0,40 V-60 Q0,-90 25,-90 Q50,-90 50,-60 V40" stroke="#F4F6FB" stroke-width="18" fill="none" stroke-linecap="round"/>
  <rect x="-65" y="40" width="130" height="50" rx="12" fill="#fff" class="ol"/><rect x="-36" y="90" width="72" height="24" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/>`;
const pack = (lm,w,k) => `<rect x="-150" y="-180" width="300" height="360" rx="18" fill="#fff" class="ol"/><rect x="-150" y="-180" width="300" height="70" rx="18" fill="${K.blue}" class="ol"/>${T(0,-133,36,'LÂMPADA LED',{c:'r9',fill:'#fff'})}
  <g id="pk_lm"><rect x="-120" y="-90" width="240" height="70" rx="12" fill="#FFE4D2"/>${T(0,-42,46,lm,{c:'r9',fill:K.orange})}</g>${T(0,30,40,w,{c:'r8',fill:'#8A93B2'})}${T(0,100,40,k,{c:'r8',fill:'#55608A'})}`;
const kelvin = () => `<defs><linearGradient id="kg" x1="0" x2="1"><stop offset="0" stop-color="#FFB347"/><stop offset=".5" stop-color="#FFF3C4"/><stop offset="1" stop-color="#DDEBFF"/></linearGradient></defs>
  <rect x="-380" y="-40" width="760" height="80" rx="40" fill="url(#kg)" class="ol"/>${T(-240,90,40,'3.000 K',{c:'r9',fill:'#E08A1E'})}${T(-240,140,32,'amarelada: descansar',{c:'f6',fill:'#55608A'})}${T(240,90,40,'6.500 K',{c:'r9',fill:K.blue})}${T(240,140,32,'branca: trabalhar',{c:'f6',fill:'#55608A'})}`;
const recycle = () => `${[0,1,2].map(i=>`<path d="M0,-70 L50,15 M50,15 L28,10 M50,15 L56,-8" stroke="${'#22A55A'}" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="rotate(${i*120})"/>`).join('')}`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'FLUORESCENTE OU LED:') + T(540,495,78,'COMPENSA TROCAR?') +
    T(540,640,104,'SE PAGA EM MESES',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-130,10) scale(1.1)">${bulbCFL()}</g>${T(0,10,70,'→',{c:'r9',fill:K.orange})}<g transform="translate(130,0)">${bulbLED('cvl')}</g>`)}</g>` + kikoCover() + coverBanner('COMPRA PELO LÚMEN'),
  titles: [[0,2,'LED compensa?','LED'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,8,'LED x fluorescente','LED'],
    [9,14,'Vamos fazer uma conta','conta'],[15,17,'O número certo','certo'],[18,19,'Cuidado: mercúrio','mercúrio'],[20,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[9,9],[16,16],[20,20]], worry: [[5,5],[18,18]],
  drop: [], sizzle: [], events: [],
  specs: () => {
    el('casaA', box(600,440,null,`${[0,1,2,3,4].map(i=>`<g transform="translate(${-220+i*110},-30) scale(.55)">${bulbCFL()}</g>`).join('')}${T(0,150,40,'10 lâmpadas · 5 h por dia',{c:'r8',fill:'#55608A'})}`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Lâmpada é tudo','igual!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('pouTag', pill(360,84,'pouca coisa?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('varias', box(820,440,null,`${T(0,-60,60,'VÁRIAS lâmpadas',{c:'r9',fill:K.orange})}${T(0,20,52,'várias horas')}${T(0,90,52,'todo dia')}`), {x:540,y:620, in:s(4), out:s(5)});
    el('errado', box(440,460,'o número errado',`<g transform="translate(0,20) scale(.8)">${pack('? lm','10 W','')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('errQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O número',T(0,70,64,'lm',{c:'r9',fill:K.orange})],['3','Cuidado',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cF', card('cFC','fluorescente', `<g transform="translate(0,0) scale(.85)">${bulbCFL()}</g>`+sub('f1',0,150,T(0,0,56,'20 W',{c:'r9',fill:K.orange}))+sub('f2',0,-130+290,'')), {x:290,y:640, in:s(7), out:s(9), subs:[['f1',s(7,.4)]]});
    el('cL', card('cLC','LED', `<g transform="translate(0,-10) scale(.75)">${bulbLED('bl')}</g>`+sub('l1',0,150,T(0,0,56,'10 W',{c:'r9',fill:K.blue}))), {x:790,y:640, in:s(7,.3), out:s(9), subs:[['l1',s(7,.7)]]});
    el('dur', pill(600,80,'LED ≈ 15 mil h · fluor. ≈ 6 mil h',K.navy,'#fff',34), {x:500,y:910, in:s(8), out:s(9)});
    el('casa', box(860,400,'10 lâmpadas · 5 h por dia',`${[0,1,2,3,4,5,6,7,8,9].map(i=>`<g transform="translate(${-340+i*76},20) scale(.35)">${bulbCFL()}</g>`).join('')}`), {x:540,y:620, in:s(10), out:s(11)});
    el('bars', box(900,440,'consumo por mês',`
       ${T(-410,-55,36,'fluorescente',{a:'start'})}<rect x="-410" y="-40" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bF" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bFt',-410+600+80,-2,T(0,10,40,'30 kWh',{c:'r9',fill:K.orange}))}
       ${T(-410,70,36,'LED',{a:'start'})}<rect x="-410" y="85" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bL" x="-410" y="85" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bLt',-410+300+80,123,T(0,10,40,'15 kWh',{c:'r9',fill:K.blue}))}`),
       {x:540,y:620, in:s(11), out:s(14), subs:[['bFt',s(11,.6)],['bLt',s(12,.4)]]});
    el('eco', pill(520,84,'≈ R$ 12 por mês de economia',K.blue,'#fff',38), {x:510,y:910, in:s(13), out:s(14), sfx:'ding'});
    el('pay', box(860,440,'10 LEDs × R$ 10 = R$ 100',`${T(0,-30,60,'R$ 100 ÷ R$ 12/mês')}`+sub('pm',0,90,T(0,0,120,'≈ 8 MESES',{c:'r9',fill:K.orange}))+T(0,175,28,'valores ilustrativos',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(14), out:s(15), subs:[['pm',s(14,.5)]]});
    el('emb', box(860,520,null,`<g transform="translate(-200,0)">${pack('1.100 lm','10 W','6.500 K')}</g>${T(30,-60,52,'não é o watt:',{a:'start'})}${T(30,30,90,'LÚMEN',{a:'start',c:'r9',fill:K.orange})}${T(30,90,34,'quanta luz ela dá',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:640, in:s(15,.3), out:s(17)});
    el('kel', box(900,440,'a cor da luz',`<g transform="translate(0,-20)">${kelvin()}</g>`), {x:540,y:620, in:s(17), out:s(18)});
    el('merc', box(820,440,null,`<g transform="translate(-220,10) scale(1.1)">${bulbCFL()}</g>${T(-90,-40,52,'tem MERCÚRIO',{a:'start',c:'r9',fill:K.orange})}${T(-90,30,46,'não joga no',{a:'start'})}${T(-90,90,46,'lixo comum',{a:'start'})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('coleta', box(820,440,'ponto de coleta',`<g transform="translate(-200,20) scale(1.1)">${recycle()}</g>${T(-60,0,50,'muitas lojas',{a:'start'})}${T(-60,70,50,'recebem',{a:'start',fill:'#22A55A'})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('rule', box(880,460,null,`${T(0,-100,52,'compra pelo')}${T(0,10,110,'LÚMEN',{c:'r9',fill:K.orange})}${T(0,90,48,'não pelo watt')}`+sub('inm',0,170,pill(400,66,'com selo do Inmetro ✓',K.blue,'#fff',34))), {x:540,y:620, in:s(20), out:s(21), subs:[['inm',s(20,.7)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.6)">${bulbLED('rl')}</g>${T(0,60,52,'LED gasta METADE,')}${T(0,130,52,'dura mais e se paga em meses')}`+sub('rs',0,200,pill(420,70,'escolhe pelo lúmen',K.orange,'#fff',38))), {x:540,y:620, in:s(21), out:s(22), subs:[['rs',s(21,.6)]]});
  },
  fx: (t) => {
    $('bF').setAttribute('width', 600*eo(C(s(11,.2),s(11,.2)+.7,t))); $('bL').setAttribute('width', 300*eo(C(s(12),s(12)+.6,t)));
    const p=1+.06*Math.sin(t*6); $('pk_lm').setAttribute('transform',`scale(${p})`);
  },
});
