/* EletriK - Solar desliga no apagão */
const panel = () => `<rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/>`;
const inverter = (id) => `<rect x="-90" y="-110" width="180" height="220" rx="18" fill="#fff" class="ol"/><rect x="-60" y="-80" width="120" height="60" rx="8" fill="#C8F0D4" class="ol" style="stroke-width:4"/><text id="${id}_t" x="0" y="-40" text-anchor="middle" class="r9" font-size="28" fill="${K.navy}">ON</text><circle id="${id}_l" cx="0" cy="40" r="18" fill="#22A55A" class="ol" style="stroke-width:3"/>`;
const trafo = () => `<rect x="-20" y="-180" width="40" height="360" fill="#8A6A52" class="ol" style="stroke-width:4"/><rect x="-70" y="-120" width="140" height="120" rx="16" fill="#9AA3BD" class="ol"/>${T(0,-50,24,'trafo',{c:'r8',fill:'#fff'})}`;
const worker = () => `<g transform="scale(.9)">${personIcon(K.orange)}</g><path d="M-36,-100 Q0,-130 36,-100 Z" fill="#FFC21A" class="ol" style="stroke-width:4"/>`;
const scn = (id) => `<rect x="-280" y="-230" width="560" height="460" rx="30" fill="${K.navy}" opacity=".18" transform="translate(10,12)"/><rect x="-280" y="-230" width="560" height="460" rx="30" fill="#2B3A6E" class="ol"/>
  <g transform="translate(-80,150) scale(.8)">${house()}</g><g transform="translate(-80,-70) scale(.45,.32)">${panel()}</g><g transform="translate(160,30) scale(.6)">${inverter(id+'_i')}</g>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'TEM PLACA SOLAR E') + T(540,495,78,'FICA SEM LUZ?') +
    T(540,640,100,'NÃO É DEFEITO!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${scn('cv')}</g>` + kikoCover() + coverBanner('É SEGURANÇA'),
  init: () => { $('cv_i_t').textContent='OFF'; $('cv_i_l').setAttribute('fill','#E0301E'); },
  titles: [[0,2,'Solar e apagão','apagão'],[3,4,'Mas atenção!','atenção'],[5,5,'Protege uma vida','vida'],[6,6,'Fica até o final!','final'],[7,8,'Quem ela protege','protege'],
    [9,12,'Vamos fazer uma conta','conta'],[13,16,'3 coisas importantes','3 coisas'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.5),820,400,8,'OFF!','clack']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[9,9],[13,13],[17,17]], worry: [[5,5],[8,8],[11,11],[15,15]], drop: [[s(8,.4),s(9)],[s(11),s(12)]], sizzle: [], events: [],
  specs: () => {
    el('cena', scn('a'), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('É defeito! Fizeram','errado!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('defTag', pill(320,84,'defeito?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('prop', box(860,440,null,`<g transform="translate(-240,10) scale(.85)">${inverter('pi')}</g>${T(-110,-30,46,'desliga',{a:'start'})}${T(-110,40,60,'DE PROPÓSITO',{a:'start',c:'r9',fill:K.blue})}${T(-110,110,36,'proteção anti-ilhamento',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('vida', box(440,460,'protege quem?',`<g transform="translate(0,60) scale(1.3)">${worker()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('vidaQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','Quem protege',`<g transform="translate(0,40) scale(.6)">${worker()}</g>`],['2','A tensão',T(0,60,60,'kV',{c:'r9',fill:K.orange})],['3','Luz no apagão',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('poste', box(880,500,'faltou luz: chega o eletricista',`<g transform="translate(-260,30) scale(.75)">${trafo()}</g><path d="M-230,-80 H200" stroke="${K.navy}" stroke-width="8"/><g transform="translate(40,80) scale(1.1)">${worker()}</g><g transform="translate(270,80) scale(.45)">${house()}</g>
       <g id="back" opacity="0"><path d="M200,-80 H-200" stroke="#FFD84D" stroke-width="10" stroke-dasharray="20 14"/><path d="${star(8,40,16)}" fill="#FFD84D" class="ol" transform="translate(40,-30)"/></g>`), {x:540,y:640, in:s(7), out:s(9)});
    el('choq', pill(500,84,'se o inversor seguisse: CHOQUE','#E0301E','#fff',36), {x:510,y:940, in:s(8,.5), out:s(9), sfx:'buzz'});
    el('trf', box(880,460,'o transformador do poste',`<g transform="translate(-280,30) scale(.7)">${trafo()}</g>${sub('d0',80,-60,`<rect x="-260" y="-50" width="520" height="100" rx="22" fill="#EEF1FA"/>${T(-230,16,46,'13.800 V',{a:'start',c:'r9'})}<path d="M-20,0 H40 M20,-16 L40,0 L20,16" stroke="${K.navy}" stroke-width="8" fill="none"/>${T(230,16,46,'220 V',{a:'end',c:'r9',fill:K.blue})}`)}${sub('d1',80,90,`<rect x="-260" y="-50" width="520" height="100" rx="22" fill="#FFE4D2"/>${T(-230,16,46,'220 V',{a:'start',c:'r9'})}<path d="M-20,0 H40 M20,-16 L40,0 L20,16" stroke="${K.navy}" stroke-width="8" fill="none"/>${T(230,16,46,'13.800 V',{a:'end',c:'r9',fill:'#E0301E'})}`)}`), {x:540,y:620, in:s(10), out:s(12), subs:[['d0',s(10,.2)],['d1',s(11,.4)]]});
    el('dois', box(860,440,'a norma exige',`<g transform="translate(-230,10) scale(.85)">${inverter('di')}</g>${T(-90,-20,50,'desligar em até',{a:'start'})}${T(-90,80,110,'2 s',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(12), out:s(13)});
    el('k0', row(1,'Não é defeito','perigoso é não desligar',`<g transform="scale(.7)">${badgeOK('k0b')}</g>`), {x:540,y:450, in:s(14), out:s(17)});
    el('k1', row(2,'Placa no sol tem tensão','nunca mexe nos cabos',`<g transform="scale(.32)">${panel()}</g>`), {x:540,y:620, in:s(15), out:s(17)});
    el('k2', row(3,'Luz no apagão','inversor híbrido + bateria',`<rect x="-40" y="-60" width="80" height="120" rx="12" fill="#22A55A" class="ol"/>`), {x:540,y:790, in:s(16), out:s(17)});
    el('rule', box(880,460,null,`${T(0,-100,52,'rede caiu,')}${T(0,0,64,'INVERSOR DESLIGA',{c:'r9',fill:K.blue})}${T(0,90,52,'segurança, não defeito',{fill:'#22A55A'})}`), {x:540,y:620, in:s(17), out:s(18)});
    el('pro', proCard(), {x:540,y:620, in:s(18), out:s(19), subs:[['proOk',s(18,.6)]]});
    el('resumo', box(880,480,null,`${sub('z0',0,-80,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3E9FF"/>${T(-360,16,40,'desliga pra proteger',{a:'start'})}${T(360,18,44,'o eletricista',{a:'end',c:'r9',fill:K.blue})}`)}${sub('z1',0,90,`<rect x="-400" y="-60" width="800" height="120" rx="24" fill="#E3F6EA"/>${T(-360,16,40,'luz no apagão:',{a:'start'})}${T(360,18,48,'BATERIA',{a:'end',c:'r9',fill:'#22A55A'})}`)}`), {x:540,y:620, in:s(19), out:s(20), subs:[['z0',s(19,.2)],['z1',s(19,.55)]]});
  },
  fx: (t) => {
    const off = t>s(0,.5); $('a_i_t').textContent = off?'OFF':'ON'; $('a_i_l').setAttribute('fill', off?'#E0301E':'#22A55A');
    ['win1','win2'].forEach(w=>{ const e=$(w); if(e) e.setAttribute('fill', off?'#56608A':'#FFE07A'); }); const g=$('glow'); if(g) g.setAttribute('opacity', off?0:1);
    $('pi_t').textContent='OFF'; $('pi_l').setAttribute('fill','#E0301E'); $('di_t').textContent='OFF'; $('di_l').setAttribute('fill','#E0301E');
    $('back').setAttribute('opacity', C(s(8,.3),s(8,.5),t)*(Math.floor(t*8)%2?1:.4));
  },
});
