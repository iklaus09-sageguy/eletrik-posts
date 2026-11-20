/* EletriK - Micro-ondas, air fryer ou forno */
const oven = (id) => `<rect x="-160" y="-110" width="320" height="220" rx="20" fill="#3A4152" class="ol"/><rect x="-130" y="-80" width="200" height="160" rx="12" fill="#2B2F3A" class="ol" style="stroke-width:4"/>
  <rect id="${id}_glow" x="-124" y="-74" width="188" height="148" rx="10" fill="#FF7A1A" opacity=".25"/>${[0,1,2].map(i=>`<circle cx="115" cy="${-60+i*55}" r="14" fill="#B9C2DA" class="ol" style="stroke-width:3"/>`).join('')}`;
const clockI = (id) => `<circle r="70" fill="#fff" class="ol"/><path id="${id}" d="M0,0 V-48" stroke="${K.navy}" stroke-width="9" stroke-linecap="round"/><circle r="9" fill="${K.orange}"/>`;
const kitchen = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#FFF6E8" class="ol"/>
  <rect x="-280" y="80" width="560" height="150" fill="#E8D8BD"/><path d="M-280,80 H280" stroke="${K.navy}" stroke-width="6"/>
  <g transform="translate(-170,10) scale(.5)">${microIcon()}</g><g transform="translate(10,0) scale(.45)">${fryerIcon()}</g><g transform="translate(180,10) scale(.45)">${oven('ovK')}</g>`;
const costRow = (id,y,ic,label,kwh,rs,col) => sub(id,0,y,`<rect x="-420" y="-56" width="840" height="112" rx="22" fill="#EEF1FA"/><g transform="translate(-350,0) scale(.32)">${ic}</g>${T(-270,-6,38,label,{a:'start'})}${T(-270,34,30,kwh,{a:'start',c:'f6',fill:'#55608A'})}${T(400,16,52,rs,{a:'end',c:'r9',fill:col})}`);

VIDEO({
  cover: () => coverBase() + T(540,410,78,'MICRO-ONDAS, AIR FRYER') + T(540,495,78,'OU FORNO?') +
    T(540,640,88,'QUAL GASTA MENOS?',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${kitchen()}</g>` + kikoCover() + coverBanner('O TEMPO MANDA'),
  titles: [[0,2,'Qual gasta menos?','menos'],[3,4,'Mas atenção!','atenção'],[5,5,'O gasto escondido','escondido'],[6,6,'Fica até o final!','final'],
    [7,10,'A potência','potência'],[11,15,'Vamos fazer uma conta','conta'],[16,19,'Qual usar?','usar'],[20,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[11,11],[16,16],[20,20]], worry: [[5,5],[15,15]],
  drop: [], sizzle: [], events: [],
  specs: () => {
    el('coz', kitchen(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Menos watts,','gasta menos!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('logTag', pill(320,84,'lógico?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('tempo', box(820,440,null,`<g transform="translate(-230,10)">${clockI('ckT')}</g>${T(-110,-30,50,'não é só a potência:',{a:'start'})}${T(-110,60,70,'é o TEMPO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('esc', box(440,460,'o gasto escondido',`<g transform="translate(0,40) scale(.95)">${oven('ovE')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('escQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A potência',T(0,60,70,'W',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Qual usar',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('pot', box(900,520,'valores comuns, por exemplo',`${costRow('p0',-110,microIcon(),'micro-ondas','','1.200 W',K.blue)}${costRow('p1',20,fryerIcon(),'air fryer','','1.500 W',K.blue)}${costRow('p2',150,oven('ovP'),'forno elétrico','','2.000 W',K.orange)}`),
       {x:540,y:640, in:s(7), out:s(11), subs:[['p0',s(8)],['p1',s(9)],['p2',s(10)]]});
    el('form', pill(520,84,'W × h ÷ 1.000 = kWh',K.navy,'#fff',44), {x:540,y:450, in:s(11), out:s(12)});
    el('custo', box(900,520,'um uso (R$ 0,80/kWh)',`${costRow('c0',-110,microIcon(),'micro-ondas, 3 min','0,06 kWh','R$ 0,05','#22A55A')}${costRow('c1',20,fryerIcon(),'air fryer, 20 min','0,5 kWh','R$ 0,40',K.blue)}${costRow('c2',150,oven('ovC'),'forno, 40 min','até 1,3 kWh','R$ 1+',K.orange)}`),
       {x:540,y:640, in:s(12), out:s(16), subs:[['c0',s(12,.3)],['c1',s(13,.3)],['c2',s(14,.3)]]});
    el('pre', box(860,460,'o gasto escondido',`<g transform="translate(-220,10)">${oven('ovH')}</g>${heatWaves('phw',[-260,-200,-140],-120)}${T(-30,-20,52,'esquenta o ar',{a:'start'})}${T(-30,50,52,'antes da comida',{a:'start'})}`+sub('preT',100,150,pill(460,76,'PRÉ-AQUECIMENTO',K.orange,'#fff',40))), {x:540,y:620, in:s(15,.1), out:s(16), subs:[['preT',s(15,.4)]]});
    el('u0', row(1,'Só esquentar?','micro-ondas',`<g transform="scale(.36)">${microIcon()}</g>`), {x:540,y:450, in:s(17), out:s(20)});
    el('u1', row(2,'Porção pequena?','air fryer',`<g transform="scale(.36)">${fryerIcon()}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('u2', row(3,'Assado grande?','forno, e assa tudo junto',`<g transform="scale(.32)">${oven('ovU')}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('rule', box(880,460,null,`<g transform="translate(-260,10)">${clockI('ckR')}</g>${T(-140,-40,50,'o que manda é o',{a:'start'})}${T(-140,50,90,'TEMPO',{a:'start',c:'r9',fill:K.orange})}${T(-140,120,36,'escolhe pelo tamanho da tarefa',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(20), out:s(21)});
    el('tom', box(820,440,'lembra do vídeo da tomada',`<g transform="translate(-200,10) scale(.95)">${outletIcon('',20)}</g>${T(-40,-10,50,'aparelho potente:',{a:'start'})}${T(-40,60,60,'tomada 20 A',{a:'start',c:'r9',fill:K.orange})}${T(-40,120,40,'sem T',{a:'start',fill:K.blue})}`), {x:540,y:620, in:s(21), out:s(22)});
    el('resumo', box(880,480,null,`${T(0,-110,56,'watt sozinho não diz nada')}<path d="M-300,-70 H300" stroke="#E3E8F6" stroke-width="5"/>${T(0,40,90,'WATT × TEMPO',{c:'r9',fill:K.orange})}${T(0,130,56,'é que vira conta')}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  fx: (t) => {
    ['ckT','ckR'].forEach(i=>$(i).setAttribute('transform',`rotate(${t*90})`));
    ['ovK','ovE','ovH'].forEach(i=>$(i+'_glow').setAttribute('opacity',.25+.25*Math.sin(t*3)));
    animWaves('phw', t, 1);
  },
});
