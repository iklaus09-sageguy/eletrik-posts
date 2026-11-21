/* EletriK - Solar com bateria */
const panel = () => `<rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/>`;
const batt = (id) => `<rect x="-110" y="-150" width="220" height="300" rx="24" fill="#fff" class="ol"/><rect x="-40" y="-170" width="80" height="26" rx="8" fill="${K.navy}"/><rect id="${id}" x="-86" y="-126" width="172" height="252" rx="14" fill="#22A55A"/>${T(0,20,40,'5 kWh',{c:'r9',fill:'#fff'})}`;
const tower = () => `<path d="M-40,120 L0,-120 L40,120 M-30,60 H30 M-20,0 H20 M-60,-80 H60" stroke="${K.navy}" stroke-width="10" fill="none" stroke-linejoin="round"/>`;
const sceneS = (id) => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#DCE8FF" class="ol"/>
  <g transform="translate(-60,140) scale(.85)">${house()}</g><g transform="translate(-60,-90) scale(.5,.35)">${panel()}</g><g transform="translate(170,40) scale(.6)">${batt(id+'_b')}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'BATERIA NA SOLAR') + T(540,495,78,'VALE A PENA?') +
    T(540,640,100,'DEPENDE DISSO',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${sceneS('cv')}</g>` + kikoCover() + coverBanner('PRA QUE SERVE?'),
  titles: [[0,2,'Bateria na solar?','Bateria'],[3,4,'Mas atenção!','atenção'],[5,5,'Pra que serve?','serve'],[6,6,'Fica até o final!','final'],[7,8,'No apagão','apagão'],
    [9,13,'Vamos fazer uma conta','conta'],[14,17,'Quando vale a pena','vale'],[18,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[9,9],[14,14],[18,18]], worry: [[5,5],[12,13]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('cena', sceneS('a'), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Com bateria, nunca','mais paga conta!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('perfTag', pill(320,84,'perfeito?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('rede', box(860,440,null,`<g transform="translate(-260,10) scale(.8)">${tower()}</g>${T(-140,-30,50,'a rede já é a sua',{a:'start'})}${T(-140,60,84,'BATERIA',{a:'start',c:'r9',fill:K.blue})}${T(-140,120,34,'pelos créditos de energia',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('serve', box(440,460,'pra que serve?',`<g transform="translate(0,30) scale(.85)">${batt('sb')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('serveQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Pra que serve',T(0,70,110,'?',{c:'r9',fill:K.orange})],['2','Autonomia',T(0,60,70,'h',{c:'r9',fill:K.blue})],['3','Quando vale',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('apaga', box(860,460,'sistema comum: faltou luz',`<g transform="translate(-200,150) scale(.6)">${house()}</g>${T(30,-20,50,'o inversor',{a:'start'})}${T(30,60,72,'DESLIGA',{a:'start',c:'r9',fill:'#E0301E'})}${T(30,120,34,'por segurança',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(7), out:s(8)});
    el('hib', box(860,460,'com bateria + inversor híbrido',`<g transform="translate(-220,150) scale(.6)">${house()}</g><g transform="translate(-60,60) scale(.35)">${batt('hb')}</g>${T(60,-10,50,'a casa segue',{a:'start'})}${T(60,70,60,'no APAGÃO',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('bat5', box(400,480,'bateria',`<g transform="translate(0,20) scale(.85)">${batt('b5')}</g>`), {x:280,y:640, in:s(10), out:s(13)});
    el('leve', box(420,220,null,`${T(0,-40,34,'geladeira, luz, internet, TV')}${T(0,20,44,'≈ 300 W',{c:'r9'})}${T(0,80,52,'≈ 16 HORAS',{c:'r9',fill:'#22A55A'})}`), {x:790,y:530, in:s(11), out:s(13)});
    el('chuv', box(420,220,null,`${T(0,-40,36,'chuveiro de 5.500 W')}${T(0,40,52,'< 1 HORA',{c:'r9',fill:'#E0301E'})}`), {x:790,y:790, in:s(12), out:s(13)});
    el('preco', box(860,440,'o preço',`${T(0,-20,64,'dezenas de MIL reais',{c:'r9',fill:K.orange})}${T(0,60,48,'só pela economia,')}${T(0,120,52,'quase nunca se paga',{c:'r9'})}${T(0,180,26,'valores aproximados',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(13), out:s(14)});
    el('q0', row(1,'Falta luz sempre','na sua região',`<g transform="scale(.5)">${alertIcon()}</g>`), {x:540,y:450, in:s(15), out:s(18)});
    el('q1', row(2,'Não pode ficar sem luz','home office, médico, comércio',`<g transform="scale(.55)">${personIcon()}</g>`), {x:540,y:620, in:s(16), out:s(18)});
    el('q2', row(3,'Lugar sem rede','sítio afastado',`<g transform="scale(.4)">${house()}</g>`), {x:540,y:790, in:s(17), out:s(18)});
    el('rule', box(880,460,null,`<g transform="translate(-280,20) scale(.6)">${batt('rb')}</g>${T(-150,-50,50,'bateria é',{a:'start'})}${T(-150,40,80,'SEGURO',{a:'start',c:'r9',fill:K.blue})}${T(-150,110,40,'contra apagão,',{a:'start'})}${T(-150,160,40,'não economia',{a:'start',fill:K.orange})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('proj', box(820,420,null,`${sub('p0',-200,-30,pill(340,90,'projeto',K.blue,'#fff',44))}${sub('p1',200,-30,pill(340,90,'inversor certo',K.orange,'#fff',38))}`+sub('p2',0,100,pill(560,80,'instalação profissional',K.navy,'#fff',40))), {x:540,y:620, in:s(19), out:s(20), subs:[['p0',s(19,.2)],['p1',s(19,.45)],['p2',s(19,.7)]]});
    el('resumo', box(880,480,null,`${sub('z0',0,-90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,44,'sem apagão:',{a:'start'})}${T(360,18,48,'a REDE basta',{a:'end',c:'r9',fill:K.blue})}`)}${sub('z1',0,80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,44,'com apagão:',{a:'start'})}${T(360,18,48,'BATERIA salva',{a:'end',c:'r9',fill:'#22A55A'})}`)}${T(0,200,28,'valores aproximados · peça simulação',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(20), out:s(21), subs:[['z0',s(20,.2)],['z1',s(20,.5)]]});
  },
  fx: (t) => { const lv=.4+.6*Math.abs(Math.sin(t*.8)); $('b5').setAttribute('height',252*lv); $('b5').setAttribute('y',126-252*lv); },
});
