/* EletriK - Geladeira velha */
const fridge = (id, old=false) => `<rect x="-100" y="-170" width="200" height="340" rx="22" fill="${old?'#EFE6CF':'#F4F6FB'}" class="ol"/><path d="M-100,-40 H100" stroke="${K.navy}" stroke-width="6"/>
  <rect x="62" y="-140" width="14" height="70" rx="7" fill="${K.navy}"/><rect x="62" y="-10" width="14" height="90" rx="7" fill="${K.navy}"/>
  ${old?`<circle cx="-60" cy="-120" r="8" fill="#C9A86A"/><circle cx="-40" cy="60" r="6" fill="#C9A86A"/>`:''}<rect id="${id}_gap" x="94" y="-160" width="14" height="320" rx="7" fill="none" stroke="${K.orange}" stroke-width="6" stroke-dasharray="14 10" opacity="0"/>`;
const ence = (cls, kwh) => `<rect x="-110" y="-150" width="220" height="300" rx="14" fill="#fff" class="ol"/>${T(0,-115,24,'ENERGIA',{c:'r9'})}
  ${['A','B','C','D','E'].map((l,i)=>`<rect x="-90" y="${-95+i*36}" width="${80+i*20}" height="28" rx="4" fill="${['#22A55A','#7CC242','#FFD400','#FF9A3C','#E0301E'][i]}"/>${T(-80,-74+i*36,22,l,{a:'start',c:'r9',fill:'#fff'})}`).join('')}
  <path d="M90,${-81+'ABCDE'.indexOf(cls)*36} l-20,-14 v28 Z" fill="${K.navy}"/>${T(0,125,30,kwh,{c:'r9',fill:K.navy})}`;
const paper = (id) => `<g id="${id}"><rect x="-30" y="-60" width="90" height="120" rx="6" fill="#fff" class="ol" style="stroke-width:4"/><path d="M-15,-35 H40 M-15,-15 H40 M-15,5 H30" stroke="#C9D3F0" stroke-width="5"/></g>`;
const clock9 = () => `<circle r="80" fill="#fff" class="ol"/>${T(0,28,80,'9',{c:'r9',fill:K.orange})}`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'GELADEIRA VELHA:') + T(540,495,78,'VALE TROCAR?') +
    T(540,640,104,'FAZ A CONTA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1010) scale(.8)">${box(520,460,null,`<g transform="translate(-100,10) scale(.9)">${fridge('cvf',true)}</g><g transform="translate(130,0) scale(.85)">${ence('E','70 kWh/mês')}</g>`)}</g>` + kikoCover() + coverBanner('TESTE DA BORRACHA'),
  titles: [[0,2,'Geladeira velha?','velha'],[3,4,'Mas atenção!','atenção'],[5,5,'O vilão escondido','escondido'],[6,6,'Fica até o final!','final'],
    [7,9,'Onde ver o consumo','consumo'],[10,14,'Vamos fazer uma conta','conta'],[15,17,'Teste da borracha','borracha'],[18,21,'3 dicas','dicas'],[22,22,'Regra de ouro','ouro'],[23,23,'Resumindo',''],[24,25,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 24,
  point: [[3,3],[6,6],[7,7],[15,15],[22,22]], worry: [[4,4],[13,13],[17,17]],
  drop: [[s(13),s(14)]], sizzle: [], events: [],
  specs: () => {
    el('velha', box(560,460,null,`<g transform="translate(-110,10) scale(1.05)">${fridge('fa',true)}</g>${T(140,-20,90,'15+',{c:'r9',fill:K.orange})}${T(140,40,36,'anos',{c:'r8'})}`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Troca, que a conta','despenca!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('obvTag', pill(300,84,'óbvio?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('anos', box(820,440,null,`<g transform="translate(-230,20)">${clock9()}</g>${T(-90,-30,50,'a economia pode',{a:'start'})}${T(-90,50,50,'levar',{a:'start'})}${T(40,50,64,'ANOS',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('borr', box(820,440,'o vilão escondido',`<g transform="translate(-200,40) scale(.75)">${fridge('fb')}</g>${T(-40,10,60,'a',{a:'start'})}${T(-40,90,64,'BORRACHA',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(5,.2), out:s(6)});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O teste',`<g transform="translate(0,25) scale(.6)">${paper('pvp')}</g>`],['3','Quando trocar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('etq', box(820,460,'etiqueta do Inmetro',`<g transform="translate(-200,15) scale(.95)">${ence('A','kWh/mês')}</g>${T(0,-20,52,'olha o',{a:'start'})}${T(0,60,70,'kWh/mês',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(7), out:s(8)});
    el('cOld', card('cOldC','antiga', `<g transform="translate(0,-10) scale(.5)">${fridge('fo',true)}</g>${T(0,150,52,'≈ 70 kWh',{c:'r9',fill:K.orange})}`), {x:290,y:640, in:s(8), out:s(10)});
    el('cNew', card('cNewC','nova, selo A', `<g transform="translate(0,-10) scale(.5)">${fridge('fn')}</g>${T(0,150,52,'≈ 35 kWh',{c:'r9',fill:'#22A55A'})}`), {x:790,y:640, in:s(8,.5), out:s(10)});
    el('modTag', pill(480,80,'exemplo · confere a etiqueta',K.navy,'#fff',36), {x:520,y:910, in:s(9), out:s(10)});
    el('eco', box(860,460,'35 kWh a menos por mês',`${T(0,-40,60,'× R$ 0,80')}`+sub('e1',0,60,T(0,0,100,'≈ R$ 28/mês',{c:'r9',fill:K.blue}))+sub('e2',0,160,pill(420,70,'≈ R$ 330 por ano',K.navy,'#fff',38))), {x:540,y:620, in:s(11), out:s(13), subs:[['e1',s(12,.1)],['e2',s(12,.6)]]});
    el('payb', box(860,460,'geladeira nova: R$ 3.000',`${T(0,-40,60,'R$ 3.000 ÷ R$ 330/ano')}`+sub('p1',0,90,T(0,0,120,'≈ 9 ANOS',{c:'r9',fill:K.orange}))+T(0,175,28,'valores ilustrativos',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(13), out:s(14), subs:[['p1',s(13,.5)]]});
    const Q=['Já tem defeito','Liga o tempo todo','Já ia trocar mesmo'];
    el('quando', box(880,520,'quando vale trocar',Q.map((r,i)=>sub('q'+i,0,-120+i*110,`<rect x="-400" y="-44" width="800" height="88" rx="20" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.65)">${badgeOK('qb'+i)}</g>${T(-270,14,42,r,{a:'start'})}`)).join('')+sub('selo',0,210,pill(360,70,'escolhe SELO A',K.orange,'#fff',38))),
       {x:540,y:630, in:s(14), out:s(15), subs:[...Q.map((r,i)=>['q'+i,s(14,.15)+i*.18]),['selo',s(14,.8)]]});
    el('teste', box(860,480,'o teste do papel',`<g transform="translate(-180,20)">${fridge('ft')}</g><g transform="translate(-60,0)">${paper('pp')}</g>${T(60,-20,48,'saiu fácil?',{a:'start'})}`+sub('venc',190,80,pill(360,84,'VENCIDA',K.orange,'#fff',48))), {x:540,y:630, in:s(15,.3), out:s(17), subs:[['venc',s(16,.6)]]});
    el('dobr', box(820,440,null,`<g transform="translate(-220,20) scale(.85)">${fridge('fd')}</g>${heatWaves('dhw',[-120,-60],-80)}${T(-60,-20,52,'frio escapa,',{a:'start'})}${T(-60,60,52,'motor trabalha',{a:'start'})}${T(-60,130,62,'DOBRADO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('big3', bigNum('3'), {x:540,y:620, in:s(18,.2), out:s(19), sfx:'boing'});
    el('d0', row(1,'10 cm atrás','espaço pra ventilar',`<path d="M-50,0 H50 M-34,-14 L-50,0 L-34,14 M34,-14 L50,0 L34,14" stroke="${K.blue}" stroke-width="10" fill="none" stroke-linecap="round"/>`), {x:540,y:450, in:s(19), out:s(22)});
    el('d1', row(2,'Nada de comida quente','espera esfriar antes',`<g transform="scale(.7)">${thermoIcon()}</g>`), {x:540,y:620, in:s(20), out:s(22)});
    el('d2', row(3,'Longe do fogão e do sol','calor faz o motor trabalhar mais',`<circle r="40" fill="#FFC21A" class="ol"/>`), {x:540,y:790, in:s(21), out:s(22)});
    el('rule', box(880,460,null,`${T(0,-110,50,'antes de trocar a geladeira')}${T(0,0,70,'troca a BORRACHA',{c:'r9',fill:K.orange})}${T(0,110,52,'e confere a etiqueta',{fill:K.blue})}`), {x:540,y:620, in:s(22,.1), out:s(23)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-130) scale(.5)">${fridge('rf',true)}</g>${T(0,60,50,'velha gasta mais, mas a troca')}${T(0,130,50,'nem sempre se paga rápido')}`+sub('rs',0,200,pill(360,70,'faz a CONTA',K.orange,'#fff',40))), {x:540,y:620, in:s(23), out:s(24), subs:[['rs',s(23,.6)]]});
  },
  fx: (t) => {
    ['fb','ft','fd'].forEach(i=>{ const g=$(i+'_gap'); g.setAttribute('opacity',1); g.setAttribute('stroke-dashoffset',-t*40); });
    const out = C(s(16,.2),s(16,.55),t); $('pp').setAttribute('transform',`translate(${out*90},${out*120}) rotate(${out*40})`);
    animWaves('dhw', t, 1);
  },
});
