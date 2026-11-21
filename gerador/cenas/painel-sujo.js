/* EletriK - Painel solar sujo */
const panel = (id, dirty=false) => `<rect x="-130" y="-85" width="260" height="170" rx="10" fill="#1F3FA8" class="ol"/>${[-65,0,65].map(x=>`<path d="M${x},-85 V85" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-130,0 H130" stroke="#7FA2FF" stroke-width="4"/>
  <g id="${id}_dirt" opacity="${dirty?1:0}">${[[-90,-50,30],[40,-30,40],[-20,40,34],[90,50,26],[-100,50,22],[60,-60,20]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#A88A5C" opacity=".55"/>`).join('')}<path d="M20,10 q8,-14 16,0 q-8,10 -16,0" fill="#fff"/><path d="M-60,-20 l20,8 l-6,10 z" fill="#5A8F3C"/></g>`;
const sunI = () => `<circle r="50" fill="#FFC21A" class="ol"/>${[0,1,2,3,4,5,6,7].map(i=>{const a=i*Math.PI/4;return `<path d="M${(Math.cos(a)*68).toFixed(0)},${(Math.sin(a)*68).toFixed(0)} L${(Math.cos(a)*90).toFixed(0)},${(Math.sin(a)*90).toFixed(0)}" stroke="#FFC21A" stroke-width="10" stroke-linecap="round"/>`}).join('')}`;
const phoneApp = (id) => `<rect x="-90" y="-160" width="180" height="320" rx="26" fill="${K.navy}" class="ol"/><rect x="-74" y="-140" width="148" height="270" rx="14" fill="#fff"/>${T(0,-110,22,'geração',{c:'r8',fill:'#55608A'})}
  ${[0,1,2,3,4,5].map(i=>`<rect id="${id}_b${i}" x="${-62+i*22}" y="${80-[110,105,100,88,80,70][i]}" width="16" height="${[110,105,100,88,80,70][i]}" rx="4" fill="${i<3?'#22A55A':K.orange}"/>`).join('')}<path d="M-64,80 H64" stroke="${K.navy}" stroke-width="3"/>`;
const cloth = () => `<path d="M-60,-40 Q0,-60 60,-40 L50,50 Q0,70 -50,50 Z" fill="#7EC8F2" class="ol"/><path d="M-40,-20 Q0,-30 40,-20 M-40,10 Q0,0 40,10" stroke="#fff" stroke-width="5" fill="none" opacity=".7"/>`;
const ladder = () => `<path d="M-50,90 L-20,-90 M50,90 L20,-90" stroke="${K.orange}" stroke-width="12" stroke-linecap="round"/>${[-60,-20,20,60].map(y=>`<path d="M${-44+(y+90)/180*0},${y} H${44}" stroke="${K.orange}" stroke-width="10" transform="scale(${1-(y+90)/600},1)"/>`).join('')}`;
const roof = () => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#DCE8FF" class="ol"/>
  <g transform="translate(170,-150) scale(.6)">${sunI()}</g><path d="M-260,200 L0,-30 L260,200 Z" fill="#C0504D" class="ol"/><g transform="translate(-70,90) rotate(-41) scale(.6,.45)">${panel('rA',false)}</g><g transform="translate(-70,90) rotate(-41) scale(.6,.45)" id="rAd"></g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'PLACA SOLAR SUJA') + T(540,495,78,'PERDE GERAÇÃO?') +
    T(540,640,100,'ATÉ R$ 300/ANO',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(520,440,null,`<g transform="translate(0,10) scale(1.3)">${panel('cvp',true)}</g>`)}</g>` + kikoCover() + coverBanner('LIMPE DO JEITO CERTO'),
  titles: [[0,2,'Placa solar suja?','suja'],[3,4,'Mas atenção!','atenção'],[5,5,'Cuidado ao limpar','limpar'],[6,6,'Fica até o final!','final'],[7,9,'Quanto a sujeira tira','sujeira'],
    [10,13,'Vamos fazer uma conta','conta'],[14,17,'Como limpar certo','certo'],[18,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[10,10],[14,14],[18,18]], worry: [[4,5],[16,16]], drop: [[s(5),s(6)]], sizzle: [], events: [],
  specs: () => {
    el('pA', box(560,460,null,`<g transform="translate(0,0) scale(1.5)">${panel('pa',false)}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('A chuva limpa,','relaxa!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('verTag', pill(320,84,'verdade?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('cai', box(820,440,null,`<g transform="translate(-200,10) scale(.95)">${panel('pc',true)}</g>${T(-20,-20,50,'a geração',{a:'start'})}${T(-20,70,84,'CAI',{a:'start',c:'r9',fill:K.orange})}${T(-20,130,32,'sem você perceber',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('estraga', box(820,440,null,`<g transform="translate(-200,10)"><rect x="-90" y="-30" width="180" height="60" rx="10" fill="#C9D3F0" class="ol"/><rect x="60" y="-14" width="120" height="28" rx="8" fill="${K.orange}" class="ol" style="stroke-width:4"/>${[0,1,2].map(i=>`<path d="M-90,${-20+i*20} L-160,${-40+i*40}" stroke="#4FC3F7" stroke-width="8" stroke-linecap="round"/>`).join('')}</g>${T(30,0,48,'jeito errado',{a:'start'})}${T(30,80,64,'ESTRAGA',{a:'start',c:'r9',fill:'#E0301E'})}`), {x:540,y:620, in:s(5), out:s(6)});
    [['1','A perda',T(0,70,70,'%',{c:'r9',fill:K.orange})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Limpar certo',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('cChu', card('cChuC','com chuva', `<g transform="translate(0,0) scale(.85)">${panel('pchu',false)}</g>${T(0,150,48,'poucos %',{c:'r9',fill:'#22A55A'})}`), {x:290,y:640, in:s(7), out:s(9)});
    el('cSec', card('cSecC','época seca, poeira', `<g transform="translate(0,0) scale(.85)">${panel('psec',true)}</g>${T(0,140,40,'pode passar',{c:'r9',fill:K.orange})}${T(0,178,40,'de 10%',{c:'r9',fill:K.orange})}`), {x:790,y:640, in:s(8), out:s(9)});
    el('app', box(820,480,'olha o app do inversor',`<g transform="translate(-200,10) scale(.95)">${phoneApp('ap')}</g>${T(0,-20,46,'geração caindo',{a:'start'})}${T(0,40,46,'sem motivo?',{a:'start'})}${T(0,120,52,'= alerta',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:630, in:s(9), out:s(10)});
    el('sist', box(860,440,'sistema de 3 kWp',`<g transform="translate(-230,10) scale(.8)">${panel('ps',false)}</g>${T(-40,-10,52,'gera uns',{a:'start'})}${T(-40,80,80,'360 kWh',{a:'start',c:'r9',fill:K.blue})}${T(-40,130,36,'por mês',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(11), out:s(12)});
    el('perda', box(860,460,'10% de perda',`${T(0,-40,64,'≈ 36 kWh a menos')}`+sub('pr1',0,70,T(0,0,110,'≈ R$ 29/mês',{c:'r9',fill:K.orange}))+sub('pr2',0,160,pill(420,70,'mais de R$ 300/ano',K.navy,'#fff',38))+T(0,215,26,'valores aproximados',{c:'f6',fill:'#55608A'})), {x:540,y:620, in:s(12), out:s(14), subs:[['pr1',s(13)],['pr2',s(13,.6)]]});
    el('l0', row(1,'Água e pano macio','nada de abrasivo ou palha de aço',`<g transform="scale(.6)">${cloth()}</g>`), {x:540,y:450, in:s(15), out:s(18)});
    el('l1', row(2,'Manhã ou fim de tarde','evita choque térmico',`<g transform="scale(.5)">${sunI()}</g>`), {x:540,y:620, in:s(16), out:s(18)});
    el('l2', row(3,'Sem alta pressão','telhado é altura: profissional',`<g transform="scale(.55)">${ladder()}</g>`), {x:540,y:790, in:s(17), out:s(18)});
    el('rule', box(880,460,null,`<g transform="translate(-260,20) scale(.75)">${phoneApp('ar')}</g>${T(-130,-40,50,'acompanha o',{a:'start'})}${T(-130,50,96,'APP',{a:'start',c:'r9',fill:K.blue})}${T(-130,120,32,'caiu sem motivo? limpa ou assistência',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(18), out:s(19)});
    el('manual', pill(560,90,'siga o manual do fabricante',K.orange,'#fff',40), {x:540,y:620, in:s(19), out:s(20), sfx:'ding'});
    el('resumo', box(880,480,null,`<g transform="translate(-150,-110) scale(.6)">${panel('rz1',true)}</g>${T(0,-100,60,'→',{c:'r9',fill:K.orange})}<g transform="translate(150,-110) scale(.6)">${panel('rz2',false)}</g>${T(0,60,56,'placa suja gera MENOS',{c:'r9',fill:K.orange})}${T(0,140,44,'limpa na hora certa, com segurança')}`), {x:540,y:620, in:s(20), out:s(21)});
  },
  fx: (t) => { $('pa_dirt').setAttribute('opacity', C(s(0,.3),s(1,.3),t)); for(let i=0;i<6;i++){ const g=1-C(s(9),s(9,.6),t)*[0,0,0,.2,.3,.4][i]; } },
});
