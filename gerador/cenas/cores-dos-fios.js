/* EletriK - Cores dos fios */
const COL = {azul:'#7EC8F2', verde:'#22A55A', preto:'#2A2A2A', vermelho:'#E0301E', marrom:'#8B5A2B', amarelo:'#FFD400'};
const wire = (c, len=300, va=false) => `<path d="M${-len/2},0 H${len/2}" stroke="${K.navy}" stroke-width="30" stroke-linecap="round"/><path d="M${-len/2},0 H${len/2}" stroke="${c}" stroke-width="18" stroke-linecap="round"/>${va?`<path d="M${-len/2+10},0 H${len/2-10}" stroke="${COL.amarelo}" stroke-width="18" stroke-dasharray="22 22"/>`:''}`;
const meter = (id) => `<rect x="-90" y="-120" width="180" height="240" rx="22" fill="${K.orange}" class="ol"/><rect x="-62" y="-92" width="124" height="70" rx="10" fill="#C8F0D4" class="ol" style="stroke-width:4"/>
  <text id="${id}_d" x="0" y="-42" text-anchor="middle" class="r9" font-size="38" fill="${K.navy}">127 V</text><circle cx="0" cy="30" r="40" fill="${K.navy}"/>
  <path d="M-40,120 Q-60,180 -120,190" stroke="#2A2A2A" stroke-width="10" fill="none"/><path d="M40,120 Q60,180 120,190" stroke="#E0301E" stroke-width="10" fill="none"/>`;
const fiosA = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#fff" class="ol"/>
  ${[[COL.azul,false],[COL.verde,true],[COL.preto,false],[COL.vermelho,false]].map(([c,va],i)=>`<g transform="translate(-40,${-150+i*100})">${wire(c,340,va)}</g>${T(200,-136+i*100,56,'?',{c:'r9',fill:K.orange})}`).join('')}`;
const trow = (id,y,c,va,label,txt,txtc) => sub(id,0,y,`<rect x="-410" y="-46" width="820" height="92" rx="20" fill="#EEF1FA"/><g transform="translate(-300,0) scale(.6)">${wire(c,260,va)}</g>${T(-140,-4,42,label,{a:'start',c:'r9',fill:txtc||K.navy})}${T(-140,34,30,txt,{a:'start',c:'f6',fill:'#55608A'})}`);

VIDEO({
  cover: () => coverBase() + T(540,410,78,'CORES DOS FIOS:') + T(540,495,78,'VOCÊ SABE?') +
    T(540,640,104,'NÃO É ENFEITE!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,990) scale(.85)">${fiosA()}</g>` +
    `<g transform="translate(880,800) rotate(12)"><path d="${star(12,100,70)}" fill="${K.orange}" class="ol"/>${T(0,14,36,'NBR 5410',{c:'r9',fill:'#fff'})}</g>` + kikoCover() + coverBanner('A COR ERRADA ENGANA'),
  titles: [[0,2,'O que cada cor diz?','cor'],[3,4,'Mas atenção!','atenção'],[5,5,'A cor proibida','proibida'],[6,6,'Fica até o final!','final'],
    [7,11,'O que diz a norma','norma'],[12,16,'A conta da medição','medição'],[17,20,'3 erros comuns','erros'],[21,22,'Regra de ouro','ouro'],[23,23,'Resumindo',''],[24,25,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(18,.6),820,420,8,'ZAP!','buzz']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 24,
  point: [[3,3],[6,6],[7,7],[12,12],[21,21]], worry: [[4,5],[18,18]],
  drop: [[s(5),s(6)],[s(18,.3),s(19)]], sizzle: [], events: [],
  specs: () => {
    el('fiosA', fiosA(), {x:540,y:560, in:s(0), out:s(5)});
    el('bubble', bubbleSVG('Cor não importa,','o que vale é ligar!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('funcTag', pill(340,84,'funciona...',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4,.3)});
    el('engana', stampSVG('A COR ERRADA','ENGANA',K.orange,560), {x:540,y:880,r:-7, in:s(4,.35), out:s(5), sfx:'buzz'});
    el('proib', box(440,460,'nunca pode ser fase',`<g transform="translate(0,40)">${wire('#55608A',280)}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('proibQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A norma',T(0,70,60,'NBR',{c:'r9',fill:K.blue})],['2','A medição',`<g transform="translate(0,25) scale(.5)">${meter('pm')}</g>`],['3','3 erros',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('nbr', box(900,560,'NBR 5410',`${trow('t0',-170,COL.azul,false,'NEUTRO','azul-claro',K.blue)}${trow('t1',-60,COL.verde,true,'TERRA','verde e amarelo, ou verde','#22A55A')}${trow('t2',50,COL.preto,false,'FASE','preto, vermelho, marrom...',K.orange)}${trow('t3',160,'#B9C2DA',false,'RETORNO','costuma ter outra cor')}`),
       {x:540,y:640, in:s(7), out:s(12), subs:[['t0',s(8)],['t1',s(9)],['t2',s(10)],['t3',s(11)]]});
    el('med', box(900,560,'como o eletricista confere',`<g transform="translate(-300,30) scale(.95)">${meter('mt')}</g>
       ${sub('m0',170,-150,`<rect x="-260" y="-42" width="520" height="84" rx="20" fill="#EEF1FA"/>${T(-240,13,32,'fase ↔ neutro',{a:'start'})}${T(245,14,34,'127/220 V',{a:'end',c:'r9',fill:K.blue})}`)}
       ${sub('m1',170,-40,`<rect x="-260" y="-42" width="520" height="84" rx="20" fill="#EEF1FA"/>${T(-240,13,32,'fase ↔ terra',{a:'start'})}${T(245,14,34,'≈ igual',{a:'end',c:'r9',fill:K.blue})}`)}
       ${sub('m2',170,70,`<rect x="-260" y="-42" width="520" height="84" rx="20" fill="#FFE4D2"/>${T(-240,13,32,'neutro ↔ terra',{a:'start'})}${T(245,14,34,'≈ 0 V',{a:'end',c:'r9',fill:K.orange})}`)}`+sub('m3',170,190,pill(440,70,'deu diferente? ERRADO',K.orange,'#fff',34))),
       {x:540,y:640, in:s(12), out:s(17), subs:[['m0',s(13)],['m1',s(14)],['m2',s(15)],['m3',s(16)]]});
    el('big3', bigNum('3'), {x:540,y:620, in:s(17,.3), out:s(18), sfx:'boing'});
    el('e0', row(1,'Verde como fase','quem vem depois leva choque',`<g transform="scale(.5)">${wire(COL.verde,260,true)}</g>`), {x:540,y:450, in:s(18), out:s(21)});
    el('e1', row(2,'Azul-claro como fase','o azul-claro é do neutro',`<g transform="scale(.5)">${wire(COL.azul,260)}</g>`), {x:540,y:620, in:s(19), out:s(21)});
    el('e2', row(3,'Confiar só na cor','em casa antiga, nada garante',`<g transform="scale(.7)">${alertIcon()}</g>`), {x:540,y:790, in:s(20), out:s(21)});
    el('rule', box(860,460,null,`<g transform="translate(-260,0) scale(.95)">${meter('mr')}</g>${T(-120,-50,48,'quem confirma é o',{a:'start'})}${T(-120,40,58,'INSTRUMENTO',{a:'start',c:'r9',fill:K.blue})}`+sub('rl',100,140,pill(460,70,'com o disjuntor DESLIGADO',K.orange,'#fff',34))), {x:540,y:620, in:s(21), out:s(22), subs:[['rl',s(21,.7)]]});
    el('pro', proCard(), {x:540,y:620, in:s(22), out:s(23), subs:[['proOk',s(22,.6)]]});
    el('resumo', box(880,520,null,`${trow('r0',-150,COL.azul,false,'azul-claro: NEUTRO','',K.blue)}${trow('r1',-40,COL.verde,true,'verde/amarelo: TERRA','','#22A55A')}${trow('r2',70,COL.vermelho,false,'o resto: FASE','',K.orange)}`+sub('r3',0,180,pill(420,76,'na dúvida, MEDE',K.navy,'#fff',40))),
       {x:540,y:630, in:s(23), out:s(24), subs:[['r0',s(23,.1)],['r1',s(23,.3)],['r2',s(23,.5)],['r3',s(23,.75)]]});
  },
  fx: (t) => { const v = t<s(14) ? '127 V' : (t<s(15) ? '126 V' : '0,4 V'); $('mt_d').textContent = v; $('mr_d').textContent='127 V'; },
});
