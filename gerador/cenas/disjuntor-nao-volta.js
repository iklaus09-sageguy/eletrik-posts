/* EletriK - Disjuntor não volta */
const hand = () => `<path d="M-30,40 Q-40,-10 -20,-40 L-10,-60 Q0,-70 8,-58 L4,-30 L30,-36 Q44,-36 44,-22 L40,30 Q36,50 10,52 Z" fill="#F2C29B" class="ol" style="stroke-width:5"/>`;
const smell = () => `<g>${[-30,0,30].map(x=>`<path d="M${x},40 q-16,-25 0,-50 t0,-50" stroke="#7A7A7A" stroke-width="8" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'DISJUNTOR CAIU') + T(540,495,78,'E NÃO VOLTA?') +
    T(540,640,100,'FAÇA O TESTE!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,440,null,`<g transform="translate(-40,0) scale(1.4)">${breakerIcon('cvb')}</g><g transform="translate(110,60) scale(1.3)">${bigQ()}</g>`)}</g>` + kikoCover() + coverBanner('NÃO SEGURE!'),
  titles: [[0,2,'Disjuntor não volta?','volta'],[3,4,'Mas atenção!','atenção'],[5,5,'O teste','teste'],[6,6,'Fica até o final!','final'],[7,8,'Como ele cai','cai'],
    [9,11,'O teste','teste'],[12,15,'Vamos fazer uma conta','conta'],[16,16,'E o DR?','DR'],[17,20,'3 erros perigosos','erros'],[21,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.5),860,380,8,'CLACK!','clack'],[s(15,.6),560,990,-6,'CLACK!','clack']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[9,9],[12,12],[21,21]], worry: [[4,4],[11,11],[19,19]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('dA', box(480,460,null,`<g transform="scale(1.6)">${breakerIcon('da')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Segura a alavanca','que uma hora firma!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('resTag', pill(320,84,'resolve?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('trab', box(880,440,null,`<g transform="translate(-260,0) scale(1.3)">${breakerIcon('tr')}</g><g transform="translate(-200,40) scale(1.2)">${hand()}</g>${T(-80,-30,46,'forçar a alavanca =',{a:'start'})}${T(-80,50,60,'SEM PROTEÇÃO',{a:'start',c:'r9',fill:'#E0301E'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('teste', box(440,460,'o teste',`<g transform="translate(0,30) scale(1.4)">${plugIcon()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('testeQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','O teste',`<g transform="translate(0,40) scale(.8)">${plugIcon()}</g>`],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Chamar ajuda',`<g transform="translate(0,40) scale(.6)">${helmetIcon()}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cai1', card('cai1C','cai na hora', `<g transform="translate(0,-10) scale(1.3)">${sparkIcon()}</g>${T(0,140,44,'CURTO',{c:'r9',fill:'#E0301E'})}`), {x:290,y:640, in:s(7), out:s(9)});
    el('cai2', card('cai2C','cai em minutos', `<g transform="translate(0,-10) scale(1)">${thermoIcon()}</g>${T(0,140,40,'SOBRECARGA',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(8), out:s(9)});
    el('t1', row(1,'Tira tudo da tomada','e rearma o disjuntor',`<g transform="scale(.5)">${plugIcon()}</g>`), {x:540,y:450, in:s(9), out:s(12)});
    el('t2', row(2,'Liga um por vez','o que derrubar é o suspeito',`<g transform="scale(.5)">${bigQ()}</g>`), {x:540,y:620, in:s(10), out:s(12)});
    el('t3', row(3,'Caiu sem nada ligado?','fiação: chama o eletricista',`<g transform="scale(.6)">${helmetIcon()}</g>`), {x:540,y:790, in:s(11), out:s(12)});
    el('k0', box(860,420,'circuito de tomadas',`<g transform="translate(-260,0) scale(1.2)">${breakerIcon('k0b')}</g>${T(-120,-20,56,'20 A × 127 V',{a:'start'})}${T(-120,80,80,'≈ 2.500 W',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(12), out:s(14)});
    el('k1', box(880,460,null,`${sub('f0',0,-110,`<g transform="translate(-300,0) scale(.55)">${fryerIcon()}</g>${T(-200,16,44,'air fryer',{a:'start'})}${T(360,18,50,'1.500 W',{a:'end',c:'r9',fill:K.blue})}`)}${sub('f1',0,10,`<g transform="translate(-300,0) scale(.55)">${microIcon()}</g>${T(-200,16,44,'micro-ondas',{a:'start'})}${T(360,18,50,'1.400 W',{a:'end',c:'r9',fill:K.blue})}`)}${sub('f2',0,130,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#FFE4D2"/>${T(-360,16,44,'total',{a:'start'})}${T(360,18,56,'2.900 W',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(14), out:s(16), subs:[['f0',s(14,.1)],['f1',s(14,.4)],['f2',s(14,.75)]]});
    el('k23', starBadge('23 A','> 20 A'), {x:200,y:960,s:.9,r:-8, in:s(15), out:s(16), sfx:'buzz'});
    el('dr', box(880,440,'e se cair o DR?',`<g transform="translate(-240,0) scale(1.4)">${breakerIcon('drb')}</g>${T(-240,165,36,'DR',{c:'r9',fill:K.blue})}${T(-90,-20,52,'fuga de corrente',{a:'start',c:'r9',fill:K.orange})}${T(-90,60,44,'o teste é o mesmo',{a:'start'})}`), {x:540,y:620, in:s(16), out:s(17)});
    el('e0', row(1,'Segurar a alavanca','ou amarrar',`<g transform="scale(.7)">${hand()}</g>`), {x:540,y:450, in:s(18), out:s(21)});
    el('e1', row(2,'Trocar por um maior','o fio é o mesmo: FOGO',T(0,18,50,'40A',{c:'r9',fill:'#E0301E'})), {x:540,y:620, in:s(19), out:s(21)});
    el('e2', row(3,'Rearmar várias vezes','quando cai na hora',`<g transform="scale(.6)">${sparkIcon()}</g>`), {x:540,y:790, in:s(20), out:s(21)});
    el('rule', box(880,480,null,`<g transform="translate(-280,-60) scale(.8)">${smell()}</g>${T(-160,-80,44,'caiu sem nada ligado?',{a:'start'})}${T(-160,-10,44,'cheiro de queimado?',{a:'start'})}`+sub('rr',0,120,pill(620,90,'desliga e chama o eletricista',K.orange,'#fff',38))), {x:540,y:620, in:s(21), out:s(22), subs:[['rr',s(21,.55)]]});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(1.1)">${breakerIcon('rsb')}</g>${T(0,50,52,'disjuntor que cai')}${T(0,150,90,'TE AVISA',{c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  fx: (t) => {},
});
