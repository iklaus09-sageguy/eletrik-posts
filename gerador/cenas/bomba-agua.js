/* EletriK - Bomba d'água */
const pump = (id) => `<rect x="-120" y="-60" width="200" height="120" rx="20" fill="#4FA3F7" class="ol"/><circle cx="110" cy="0" r="56" fill="#3D8BFF" class="ol"/><g id="${id}">${[0,1,2,3].map(i=>`<path d="M110,0 L110,-40" stroke="#fff" stroke-width="8" stroke-linecap="round" transform="rotate(${i*90} 110 0)"/>`).join('')}</g>
  <path d="M110,-56 V-120 H200" stroke="${K.navy}" stroke-width="18" fill="none"/><rect x="-100" y="60" width="160" height="30" rx="8" fill="#8F9AB8" class="ol" style="stroke-width:4"/>`;
const tank = (id) => `<rect x="-110" y="-120" width="220" height="240" rx="20" fill="#fff" class="ol"/><rect id="${id}" x="-96" y="0" width="192" height="106" rx="12" fill="#7EC8F2"/><path d="M-110,-80 H110" stroke="${K.navy}" stroke-width="5"/>`;
const drip = (id) => `<path d="M-60,-20 H40 Q60,-20 60,0 V20" stroke="#B9C2DA" stroke-width="22" fill="none" stroke-linecap="round"/><g id="${id}">${[0,1,2].map(i=>`<path class="dp_${id}" d="M60,40 q8,12 0,20 q-8,-8 0,-20" fill="#3D8BFF"/>`).join('')}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'BOMBA D\'ÁGUA') + T(540,495,78,'LIGA SOZINHA?') +
    T(540,640,104,'É VAZAMENTO!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-60,20) scale(1.1)">${pump('cvp')}</g>`)}</g>` + kikoCover() + coverBanner('E RODAR A SECO QUEIMA'),
  titles: [[0,2,'Bomba liga sozinha?','sozinha'],[3,4,'Mas atenção!','atenção'],[5,5,'Queima em minutos','Queima'],[6,6,'Fica até o final!','final'],
    [7,10,'Vamos fazer uma conta','conta'],[11,14,'O que faz queimar','queimar'],[15,18,'Proteções','Proteções'],[19,20,'Regra de ouro','ouro'],[21,21,'Resumindo',''],[22,23,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 22,
  point: [[3,3],[6,6],[7,7],[15,15],[19,19]], worry: [[4,5],[10,10],[12,12]], drop: [[s(12),s(13)]], sizzle: [[s(12),s(13)]], events: [],
  specs: () => {
    el('pA', box(560,460,null,`<g transform="translate(-60,40) scale(1.1)">${pump('pa')}</g>${T(0,-150,40,'zzz... VRUMMM',{c:'r9',fill:K.orange})}`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Normal, bomba','é assim mesmo!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('norTag', pill(300,84,'normal?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('vaz', box(820,440,null,`<g transform="translate(-200,20) scale(1.1)">${drip('dv')}</g>${T(-60,-20,50,'quase sempre é',{a:'start'})}${T(-60,70,76,'VAZAMENTO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('seco', box(440,460,'queima em minutos',`<g transform="translate(-30,40) scale(.85)">${pump('ps')}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('secoQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','Queima',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`],['3','Proteção',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('pot', box(860,440,'bomba de 1/2 cv',`<g transform="translate(-220,30) scale(.85)">${pump('pp')}</g>${T(30,0,70,'≈ 600 W',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:620, in:s(8), out:s(9)});
    el('bars', box(900,460,'por mês (R$ 0,80/kWh)',`
       ${T(-410,-55,36,'1 h por dia',{a:'start'})}<rect x="-410" y="-40" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bN" x="-410" y="-40" width="0" height="56" rx="14" fill="${K.blue}"/>${sub('bNt',-410+117+90,-2,T(0,10,40,'R$ 14',{c:'r9',fill:K.blue}))}
       ${T(-410,70,36,'com vazamento, 6 h por dia',{a:'start'})}<rect x="-410" y="85" width="700" height="56" rx="14" fill="#EEF1FA"/><rect id="bV" x="-410" y="85" width="0" height="56" rx="14" fill="${K.orange}"/>${sub('bVt',-410+700-80,123,T(0,10,40,'R$ 86',{c:'r9',fill:'#fff'}))}
       ${T(0,200,28,'valores ilustrativos · fora a água perdida',{c:'f6',fill:'#55608A'})}`), {x:540,y:630, in:s(9), out:s(11), subs:[['bNt',s(9,.6)],['bVt',s(10,.5)]]});
    el('q0', row(1,'Rodar a seco','sem água, o motor queima',`<g transform="scale(.42)">${pump('q0p')}</g>`), {x:540,y:450, in:s(12), out:s(15)});
    el('q1', row(2,'Boia com defeito','não liga ou não desliga',`<g transform="scale(.35)">${tank('q1t')}</g>`), {x:540,y:620, in:s(13), out:s(15)});
    el('q2', row(3,'Liga e desliga toda hora','cada partida puxa muita corrente',`<g transform="scale(.7)">${sparkIcon()}</g>`), {x:540,y:790, in:s(14), out:s(15)});
    el('prot', box(880,460,'proteções obrigatórias',`${sub('pr0',-260,-40,pill(260,90,'disjuntor',K.blue,'#fff',38))}${sub('pr1',0,-40,pill(220,90,'terra','#22A55A','#fff',42))}${sub('pr2',250,-40,pill(200,90,'DR',K.orange,'#fff',46))}`+sub('pr3',0,100,pill(620,80,'chave de nível: nunca a seco',K.navy,'#fff',36))), {x:540,y:620, in:s(16), out:s(18), subs:[['pr0',s(16,.1)],['pr1',s(16,.35)],['pr2',s(16,.6)],['pr3',s(17)]]});
    el('teste', box(860,460,'o teste',`<g transform="translate(-230,20) scale(.9)">${drip('dt')}</g>${T(-90,-30,46,'tudo fechado',{a:'start'})}${T(-90,30,46,'e a bomba liga?',{a:'start'})}${T(-90,110,60,'VAZAMENTO',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('rule', box(880,460,null,`${T(0,-80,52,'bomba boa liga quando')}${T(0,20,96,'PRECISA',{c:'r9',fill:K.blue})}${T(0,110,48,'ligou sozinha? problema',{fill:K.orange})}`), {x:540,y:620, in:s(19), out:s(20)});
    el('pro', proCard(), {x:540,y:620, in:s(20), out:s(21), subs:[['proOk',s(20,.6)]]});
    el('resumo', box(880,480,null,`${[['liga sozinha','VAZAMENTO',K.orange],['a seco','QUEIMA','#E0301E'],['proteção','obrigatória',K.blue]].map(([a,b,c],i)=>sub('rz'+i,0,-120+i*110,`<rect x="-400" y="-46" width="800" height="92" rx="20" fill="#EEF1FA"/>${T(-360,14,40,a,{a:'start'})}${T(360,16,44,b,{a:'end',c:'r9',fill:c})}`)).join('')}`), {x:540,y:630, in:s(21), out:s(22), subs:[0,1,2].map(i=>['rz'+i,s(21,.1)+i*.25])});
  },
  fx: (t) => {
    ['pa','ps','pp','q0p'].forEach(i=>$(i).setAttribute('transform',`rotate(${t*500} 110 0)`));
    ['dv','dt'].forEach(id=>document.querySelectorAll('.dp_'+id).forEach((p,i)=>{const q=((t*.9+i/3)%1); p.setAttribute('transform',`translate(0,${q*80})`); p.style.opacity=1-q;}));
    $('bN').setAttribute('width',117*eo(C(s(9,.3),s(9,.3)+.6,t))); $('bV').setAttribute('width',700*eo(C(s(10,.2),s(10,.2)+.8,t)));
  },
});
