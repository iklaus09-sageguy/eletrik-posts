/* EletriK - Carregador plugado */
const charger = (id, bad=false) => `<rect x="-60" y="-80" width="120" height="140" rx="20" fill="${bad?'#E8E2D5':'#fff'}" class="ol"/><rect x="-30" y="-115" width="14" height="40" rx="3" fill="#B9C2DA" class="ol" style="stroke-width:3"/><rect x="16" y="-115" width="14" height="40" rx="3" fill="#B9C2DA" class="ol" style="stroke-width:3"/>
  <rect x="-16" y="45" width="32" height="20" rx="4" fill="${K.navy}"/><path d="M0,65 Q0,130 60,150" stroke="${K.navy}" stroke-width="10" fill="none"/>${bad?T(0,0,30,'???',{c:'r9',fill:'#E0301E'}):T(0,0,26,'OK',{c:'r9',fill:'#22A55A'})}<g id="${id}_hot" opacity="0">${heatWaves(id+'_hw',[-30,0,30],-90)}</g>`;
const phoneI = () => `<rect x="-55" y="-100" width="110" height="200" rx="18" fill="${K.navy}" class="ol"/><rect x="-45" y="-82" width="90" height="160" rx="10" fill="#8FB4FF"/><rect x="-20" y="80" width="40" height="8" rx="4" fill="#fff"/>`;
const pillow = () => `<path d="M-180,-40 Q-200,-80 -150,-80 H150 Q200,-80 180,-40 V40 Q200,80 150,80 H-150 Q-200,80 -180,40 Z" fill="#fff" class="ol"/><path d="M-120,-60 Q0,-40 120,-60" stroke="#E3E8F6" stroke-width="6" fill="none"/>`;
const usbOutlet = () => `<rect x="-110" y="-110" width="220" height="220" rx="30" fill="#fff" class="ol"/><g transform="translate(0,-30) scale(.6)"><path d="M-62,-36 L-36,-72 H36 L62,-36 V36 L36,72 H-36 L-62,36 Z" fill="#E8ECF6" class="ol" style="stroke-width:4"/><circle cx="-30" cy="8" r="11" fill="${K.navy}"/><circle cx="30" cy="8" r="11" fill="${K.navy}"/><circle cx="0" cy="-26" r="11" fill="${K.navy}"/></g>
  ${[-30,30].map(x=>`<rect x="${x-20}" y="50" width="40" height="18" rx="4" fill="${K.navy}"/>`).join('')}`;
const cableBad = () => `<path d="M-150,0 H-20 M20,0 H150" stroke="${K.navy}" stroke-width="24" stroke-linecap="round"/><path d="M-20,0 H20" stroke="#D9822B" stroke-width="8"/><path d="M-20,-12 L-10,0 L-20,12 M20,-12 L10,0 L20,12" stroke="${K.navy}" stroke-width="5" fill="none"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'CARREGADOR PLUGADO') + T(540,495,78,'SEM O CELULAR...') +
    T(540,640,84,'GASTA? É PERIGOSO?',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(-120,-20) scale(.8)">${outletIcon('',10)}</g><g transform="translate(120,-10)">${charger('cvc')}</g>`)}</g>` + kikoCover() + coverBanner('O PERIGO É OUTRO'),
  titles: [[0,2,'Carregador plugado','plugado'],[3,4,'Mas atenção!','atenção'],[5,5,'O hábito arriscado','arriscado'],[6,6,'Fica até o final!','final'],
    [7,10,'Vamos fazer uma conta','conta'],[11,14,'Onde está o perigo','perigo'],[15,15,'E a tomada USB?','USB'],[16,17,'Regra de ouro','ouro'],[18,18,'Resumindo',''],[19,20,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 19,
  point: [[3,3],[6,6],[7,7],[16,16]], worry: [[5,5],[12,13]], drop: [[s(12),s(14)]], sizzle: [], events: [],
  specs: () => {
    el('tom', box(560,460,null,`<g transform="translate(-110,0)">${outletIcon('',10)}</g><g transform="translate(130,-10)">${charger('ca')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Gasta muito e','pode explodir!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('serTag', pill(300,84,'sério?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('nada', box(820,440,null,`<g transform="translate(-220,10)">${charger('cn')}</g>${T(-80,-30,50,'consumo:',{a:'start'})}${T(-80,60,60,'QUASE NADA',{a:'start',c:'r9',fill:'#22A55A'})}${T(-80,120,34,'o perigo está em outro lugar',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('habito', box(440,460,'na hora de dormir',`<g transform="translate(0,60) scale(.95)">${pillow()}</g><g transform="translate(40,20) rotate(80) scale(.6)">${phoneI()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('habQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','O perigo',`<g transform="translate(0,30) scale(.8)">${alertIcon()}</g>`],['3','Seguro',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('conta', box(860,460,'carregador bom, sem celular',`${T(0,-70,64,'< 0,5 W',{c:'r9',fill:K.blue})}`+sub('c1',0,30,T(0,0,48,'0,3 W × 8.760 h ≈ 2,6 kWh'))+sub('c2',0,140,pill(440,90,'≈ R$ 2 por ANO','#22A55A','#fff',48))), {x:540,y:620, in:s(8), out:s(11), subs:[['c1',s(9)],['c2',s(10)]]});
    el('p0', row(1,'Carregador pirata','sem proteção: esquenta',`<g transform="scale(.55)">${charger('pp',true)}</g>`), {x:540,y:450, in:s(12), out:s(15)});
    el('p1', row(2,'Embaixo do travesseiro','o calor não sai',`<g transform="scale(.32)">${pillow()}</g>`), {x:540,y:620, in:s(13), out:s(15)});
    el('p2', row(3,'Cabo descascado','fio aparecendo',`<g transform="scale(.5)">${cableBad()}</g>`), {x:540,y:790, in:s(14), out:s(15)});
    el('usb', box(820,460,'tomada com USB',`<g transform="translate(-220,10) scale(1.05)">${usbOutlet()}</g>${T(-60,-20,52,'pode usar, se for',{a:'start'})}${T(-60,70,64,'CERTIFICADA',{a:'start',c:'r9',fill:K.blue})}${T(-60,130,34,'e bem instalada',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(15), out:s(16)});
    const RU=['Carregador certificado','Celular em superfície dura','Cabo inteiro'];
    el('rule', box(880,500,null,RU.map((r,i)=>sub('rl'+i,0,-140+i*130,`<rect x="-400" y="-50" width="800" height="100" rx="22" fill="#EEF1FA"/><g transform="translate(-340,0) scale(.75)">${badgeOK('rlb'+i)}</g>${T(-270,16,46,r,{a:'start'})}`)).join('')), {x:540,y:620, in:s(16), out:s(17), subs:RU.map((r,i)=>['rl'+i,s(16,.2)+i*.25])});
    el('desl', stampSVG('ESQUENTOU?','DESLIGA NA HORA',K.orange,680), {x:540,y:620,r:-6, in:s(17,.1), out:s(18), sfx:'buzz'});
    el('resumo', box(880,480,null,`${sub('z0',0,-90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,46,'plugado gasta:',{a:'start'})}${T(360,18,50,'QUASE NADA',{a:'end',c:'r9',fill:'#22A55A'})}`)}${sub('z1',0,80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#FFE4D2"/>${T(-360,16,46,'o perigo:',{a:'start'})}${T(360,18,50,'RUIM + CALOR',{a:'end',c:'r9',fill:K.orange})}`)}`), {x:540,y:620, in:s(18), out:s(19), subs:[['z0',s(18,.2)],['z1',s(18,.55)]]});
  },
  fx: (t) => { $('pp_hot').setAttribute('opacity',1); animWaves('pp_hw',t,1); },
});
