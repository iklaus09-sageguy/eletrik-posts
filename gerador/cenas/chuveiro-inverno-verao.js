/* EletriK - Chuveiro inverno x verão */
const knob = (id) => `<circle r="100" fill="#fff" class="ol"/><circle r="62" fill="#EEF1FA" class="ol" style="stroke-width:4"/>
  ${T(-120,-70,30,'inverno',{a:'end',c:'r8',fill:K.orange})}${T(120,-70,30,'verão',{a:'start',c:'r8',fill:K.blue})}${T(0,140,28,'desligado',{c:'r8',fill:'#55608A'})}
  <g id="${id}"><rect x="-14" y="-92" width="28" height="80" rx="10" fill="${K.navy}"/></g><circle r="16" fill="${K.navy}"/>`;
const sunIcon = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*90).toFixed(0)},${(Math.sin(a)*90).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
const snowIcon = () => `${[0,1,2].map(i=>`<path d="M0,-80 V80" stroke="#4FA3F7" stroke-width="14" stroke-linecap="round" transform="rotate(${i*60})"/>`).join('')}<circle r="16" fill="#fff" class="ol" style="stroke-width:4"/>`;
const clock = (id) => `<circle r="80" fill="#fff" class="ol"/><path id="${id}" d="M0,0 V-55" stroke="${K.navy}" stroke-width="10" stroke-linecap="round"/><circle r="10" fill="${K.orange}"/>`;
const showerScene = (id) => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#E7F3FF" class="ol"/>
  <g transform="translate(-60,-40) scale(1.6)">${showerIcon()}</g><g transform="translate(150,30) scale(.85)">${knob(id+'_k')}</g>`;

VIDEO({
  cover: () => coverBase() + T(540,410,78,'CHUVEIRO NO VERÃO') + T(540,495,78,'ECONOMIZA MESMO?') +
    T(540,640,104,'R$ 40 POR MÊS',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990) scale(.85)">${showerScene('cv')}</g>` +
    `<g transform="translate(880,800) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,34,'FAZ A CONTA',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('INVERNO x VERÃO'),
  init: () => { $('cv_k').setAttribute('transform','rotate(-40)'); },
  titles: [[0,2,'Verão economiza?','economiza'],[3,5,'Mas atenção!','atenção'],[6,6,'Fica até o final!','final'],[7,10,'O que a chave faz','chave'],
    [11,17,'Vamos fazer uma conta','conta'],[18,21,'3 dicas','dicas'],[22,22,'Regra de ouro','ouro'],[23,23,'Resumindo',''],[24,25,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 24,
  point: [[3,3],[6,6],[11,11],[22,22]], worry: [[4,4],[15,16]],
  drop: [], sizzle: [], events: [[s(5,.4),'clack2']],
  specs: () => {
    el('chA', showerScene('a'), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Deixa no inverno,','tanto faz!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('tantoTag', pill(320,84,'tanto faz?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('top1', box(820,440,null,`<g transform="translate(-230,40) scale(1.6)">${showerIcon()}</g>${T(-60,-20,56,'o que MAIS',{a:'start'})}${T(-60,70,56,'gasta na casa',{a:'start'})}`), {x:540,y:620, in:s(4,.1), out:s(5)});
    el('n1', starBadge('#1','do consumo'), {x:860,y:430,s:.8,r:8, in:s(4,.5), out:s(5), sfx:'boing'});
    el('chave', box(560,460,'a chavinha',`<g transform="translate(0,40)">${knob('kn')}</g>`), {x:540,y:620, in:s(5), out:s(6)});
    [['1','A chave',`<g transform="translate(0,30) scale(.45)">${knob('pk')}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Dicas',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cInv', card('cInvC','inverno', `<g transform="translate(0,-10) scale(.8)">${snowIcon()}</g>${T(0,100,38,'potência MÁXIMA',{c:'r8',fill:K.orange})}`+sub('w1',0,155,T(0,0,52,'5.500 W',{c:'r9',fill:K.orange}))), {x:290,y:640, in:s(8), out:s(11), subs:[['w1',s(9,.4)]]});
    el('cVer', card('cVerC','verão', `<g transform="translate(0,-10) scale(.8)">${sunIcon()}</g>${T(0,100,38,'potência menor',{c:'r8',fill:K.blue})}`+sub('w2',0,155,T(0,0,52,'3.000 W',{c:'r9',fill:K.blue}))), {x:790,y:640, in:s(8,.5), out:s(11), subs:[['w2',s(9,.75)]]});
    el('etiq', pill(560,80,'por exemplo · confira a etiqueta',K.navy,'#fff',36), {x:520,y:910, in:s(10), out:s(11)});
    el('casa', box(880,440,'4 pessoas × 10 min',`${[0,1,2,3].map(i=>`<g transform="translate(${-270+i*120},10) scale(.7)">${personIcon(['#1630D8','#8A5CF6','#FF6A13','#22A55A'][i])}</g>`).join('')}<g transform="translate(260,10) scale(.7)">${clock('ck1')}</g>`+sub('min40',0,150,pill(420,76,'= 40 min por dia',K.orange,'#fff',40))), {x:540,y:620, in:s(12), out:s(13), subs:[['min40',s(12,.6)]]});
    el('calcI', box(420,460,'inverno',`${T(0,-80,40,'5,5 kW × 40 min')}${T(0,-30,40,'× 30 dias')}<path d="M-160,0 H160" stroke="${K.navy}" stroke-width="6"/>`+sub('ci',0,110,T(0,0,76,'≈ 110 kWh',{c:'r9',fill:K.orange}))), {x:280,y:640, in:s(13), out:s(15), subs:[['ci',s(13,.75)]]});
    el('calcV', box(420,460,'verão',`${T(0,-80,40,'3 kW × 40 min')}${T(0,-30,40,'× 30 dias')}<path d="M-160,0 H160" stroke="${K.navy}" stroke-width="6"/>`+sub('cv2',0,110,T(0,0,76,'≈ 60 kWh',{c:'r9',fill:K.blue}))), {x:800,y:640, in:s(14), out:s(15), subs:[['cv2',s(14,.3)]]});
    el('reais', box(900,440,'por mês (R$ 0,80/kWh)',`
       ${T(-410,-55,36,'inverno',{a:'start'})}<rect x="-410" y="-40" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bI" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bIt',-410+560+70,-2,T(0,10,40,'R$ 88',{c:'r9',fill:K.orange}))}
       ${T(-410,70,36,'verão',{a:'start'})}<rect x="-410" y="85" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bV" x="-410" y="85" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bVt',-410+305+70,123,T(0,10,40,'R$ 48',{c:'r9',fill:K.blue}))}`),
       {x:540,y:640, in:s(15), out:s(17), subs:[['bIt',s(15,.4)],['bVt',s(15,.7)]]});
    el('dif', pill(520,84,'≈ R$ 40 de diferença',K.orange,'#fff',44), {x:520,y:910, in:s(16), out:s(17), sfx:'ding'});
    el('minuto', box(860,460,'e o tempo de banho?',`<g transform="translate(-260,20)">${clock('ck2')}</g>${T(-110,-30,52,'1 minuto a menos',{a:'start'})}${T(-110,60,72,'≈ R$ 2/mês',{a:'start',c:'r9',fill:K.blue})}${T(-110,120,34,'por pessoa, no inverno',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('big3', bigNum('3'), {x:540,y:620, in:s(18,.3), out:s(19), sfx:'boing'});
    el('d0', row(1,'Dia quente? Verão','água morna, conta menor',`<g transform="scale(.55)">${sunIcon()}</g>`), {x:540,y:450, in:s(19), out:s(22)});
    el('d1', row(2,'Fecha a água antes','de trocar a chave',`<g transform="scale(.8)">${dropIcon()}</g>`), {x:540,y:620, in:s(20), out:s(22)});
    el('d2', row(3,'Desligado não gasta','água fria, consumo zero',`<g transform="scale(.42)">${knob('k3')}</g>`), {x:540,y:790, in:s(21), out:s(22)});
    el('rule', box(860,460,null,`${T(0,-110,56,'inverno só quando precisa')}<path d="M-300,-70 H300" stroke="#E3E8F6" stroke-width="5"/>${T(0,10,56,'e banho')}${T(0,120,120,'CURTO',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(22,.1), out:s(23)});
    el('resumo', box(860,480,null,`<g transform="translate(-160,-110) scale(.55)">${knob('k4')}</g><g transform="translate(160,-110) scale(.6)">${clock('ck3')}</g>${T(0,60,52,'a chave muda a conta,')}${T(0,150,70,'o RELÓGIO muda mais',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(23), out:s(24)});
  },
  fx: (t) => {
    $('a_k').setAttribute('transform','rotate(-40)'); $('pk').setAttribute('transform','rotate(40)'); $('k3').setAttribute('transform','rotate(180)'); $('k4').setAttribute('transform','rotate(40)');
    $('kn').setAttribute('transform',`rotate(${lerp(-40,40,eio(C(s(5,.35),s(5,.55),t)))})`);
    ['ck1','ck2','ck3'].forEach((c,i)=>$(c).setAttribute('transform',`rotate(${t*120+i*40})`));
    $('bI').setAttribute('width', 560*eo(C(s(15,.1),s(15,.1)+.6,t))); $('bV').setAttribute('width', 305*eo(C(s(15,.45),s(15,.45)+.6,t)));
  },
});
