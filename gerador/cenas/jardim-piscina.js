/* EletriK - Jardim e piscina */
const pool = () => `<rect x="-260" y="-110" width="520" height="220" rx="40" fill="#7EC8F2" class="ol"/>${[0,1,2].map(i=>`<path d="M${-200+i*40},${-40+i*40} q40,-20 80,0 t80,0 t80,0" stroke="#fff" stroke-width="7" fill="none" opacity=".7"/>`).join('')}<circle id="poolL" cx="0" cy="60" r="26" fill="#FFF3C4" class="ol" style="stroke-width:4"/>`;
const spot = () => `<path d="M0,60 V-10" stroke="${K.navy}" stroke-width="12"/><path d="M-50,-10 L-30,-60 H30 L50,-10 Z" fill="#3A4152" class="ol"/><path d="M-30,-60 L-90,-160 H90 L30,-60 Z" fill="#FFE07A" opacity=".5"/>`;
const ext = () => `<path d="M-200,40 Q-100,0 0,40 T200,40" stroke="#E0301E" stroke-width="12" fill="none"/><rect x="170" y="15" width="60" height="50" rx="10" fill="#fff" class="ol" style="stroke-width:4"/>`;
const ipBadge = (n,c) => `<rect x="-90" y="-60" width="180" height="120" rx="20" fill="${c}" class="ol"/>${T(0,20,56,'IP'+n,{c:'r9',fill:'#fff'})}`;
const garden = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#2B3A6E" class="ol"/>
  <rect x="-280" y="40" width="560" height="190" fill="#4FA85A"/><g transform="translate(0,140) scale(.8)">${pool()}</g><g transform="translate(-190,0) scale(.8)">${spot()}</g><g transform="translate(-40,40) scale(.7)">${ext()}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'LUZ NO JARDIM') + T(540,495,78,'E NA PISCINA?') +
    T(540,640,100,'ÁGUA NÃO PERDOA',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${garden()}</g>` + kikoCover() + coverBanner('DR, IP E 12 V'),
  titles: [[0,2,'Jardim e piscina','piscina'],[3,4,'Mas atenção!','atenção'],[5,5,'Na piscina, pior','pior'],[6,6,'Fica até o final!','final'],[7,9,'O que a norma pede','norma'],
    [10,14,'A conta da tensão','tensão'],[15,18,'3 erros comuns','erros'],[19,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[7,7],[14,14],[19,19]], worry: [[4,5],[12,12],[17,17]], drop: [[s(12),s(13)]], sizzle: [], events: [],
  specs: () => {
    el('gar', garden(), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Extensão e refletor','comum, pronto!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('simTag', pill(320,84,'simples?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('mol', box(860,440,null,`<g transform="translate(-250,20) scale(1.1)">${dropIcon()}</g>${T(-140,-30,52,'área externa é',{a:'start'})}${T(-140,50,72,'MOLHADA',{a:'start',c:'r9',fill:K.blue})}${T(-140,110,36,'água + eletricidade não perdoa',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('pis', box(440,460,'dentro da piscina',`<g transform="translate(0,40) scale(.7)">${pool()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('pisQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A norma',T(0,60,60,'NBR',{c:'r9',fill:K.blue})],['2','A tensão',T(0,60,64,'12 V',{c:'r9',fill:'#22A55A'})],['3','Os erros',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('dr', box(860,440,'área externa',`<rect x="-340" y="-100" width="170" height="200" rx="16" fill="#EEF1FA" class="ol"/>${T(-255,-30,44,'DR',{c:'r9',fill:K.blue})}${T(-255,40,26,'30 mA',{c:'r8',fill:'#55608A'})}${T(-110,-10,52,'DR é',{a:'start'})}${T(-110,70,64,'OBRIGATÓRIO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(7), out:s(8)});
    el('ip', box(880,460,'grau de proteção (IP)',`${sub('i0',-200,-10,`${ipBadge('65+',K.blue)}${T(0,110,36,'chuva',{c:'r8'})}`)}${sub('i1',200,-10,`${ipBadge('68','#22A55A')}${T(0,110,36,'debaixo d\'água',{c:'r8'})}`)}`), {x:540,y:620, in:s(8), out:s(10), subs:[['i0',s(8,.5)],['i1',s(9,.35)]]});
    el('corpo', box(860,440,'corpo molhado',`<g transform="translate(-220,20) scale(1.2)">${personIcon('#8A5CF6')}</g><g transform="translate(-120,-70) scale(.6)">${dropIcon()}</g>${T(-40,40,90,'≈ 500 Ω',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(11), out:s(12)});
    el('cmp', box(900,460,'quanto passa pelo corpo',`${sub('v0',0,-80,`<rect x="-410" y="-60" width="820" height="120" rx="24" fill="#FFE4D2"/>${T(-370,16,52,'127 V',{a:'start',c:'r9'})}${T(370,18,56,'≈ 250 mA',{a:'end',c:'r9',fill:'#E0301E'})}`)}${sub('v1',0,90,`<rect x="-410" y="-60" width="820" height="120" rx="24" fill="#E3F6EA"/>${T(-370,16,52,'12 V',{a:'start',c:'r9'})}${T(370,18,56,'≈ 24 mA',{a:'end',c:'r9',fill:'#22A55A'})}`)}`), {x:540,y:620, in:s(12), out:s(14), subs:[['v0',s(12,.3)],['v1',s(13,.1)]]});
    el('selv', box(880,460,'dentro da piscina',`<g transform="translate(-170,40) scale(.6)">${pool()}</g>${T(110,-20,48,'extra-baixa',{a:'start'})}${T(110,50,48,'tensão:',{a:'start'})}${T(110,130,84,'12 V',{a:'start',c:'r9',fill:'#22A55A'})}`+sub('trf',0,190,pill(560,60,'transformador próprio, fora da água',K.navy,'#fff',28))), {x:540,y:620, in:s(14), out:s(15), subs:[['trf',s(14,.6)]]});
    el('e0', row(1,'Extensão no gramado','ou fio sem eletroduto',`<g transform="scale(.32)">${ext()}</g>`), {x:540,y:450, in:s(16), out:s(19)});
    el('e1', row(2,'Emenda com fita','em área molhada',`<g transform="scale(.6)"><rect x="-60" y="-30" width="120" height="60" rx="12" fill="#2A2A2A" class="ol"/></g>`), {x:540,y:620, in:s(17), out:s(19)});
    el('e2', row(3,'Tomada sem tampa','e sem DR',`<g transform="scale(.42)">${outletIcon('',10)}</g>`), {x:540,y:790, in:s(18), out:s(19)});
    el('rule', box(880,460,null,`${sub('r0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,44,'área externa:',{a:'start'})}${T(360,18,52,'DR + IP',{a:'end',c:'r9',fill:K.blue})}`)}${sub('r1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,44,'piscina:',{a:'start'})}${T(360,18,48,'extra-baixa tensão',{a:'end',c:'r9',fill:'#22A55A'})}`)}`), {x:540,y:620, in:s(19), out:s(20), subs:[['r0',s(19,.2)],['r1',s(19,.55)]]});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(880,480,null,`${T(0,-110,52,'luz bonita, sim. Mas com')}${[['DR',K.blue],['grau IP','#22A55A'],['12 V na piscina',K.orange]].map(([l,c],i)=>sub('rz'+i,0,-20+i*90,pill(480,74,l,c,'#fff',38))).join('')}`), {x:540,y:620, in:s(21), out:s(22), subs:[0,1,2].map(i=>['rz'+i,s(21,.25)+i*.2])});
  },
  fx: (t) => { document.querySelectorAll('#poolL').forEach(e=>e.style.opacity=.6+.4*Math.sin(t*3)); },
});
