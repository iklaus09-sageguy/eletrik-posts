/* EletriK - Como ler o medidor */
const digi = (id, v='04821') => `<rect x="-160" y="-190" width="320" height="380" rx="26" fill="#E3E8F6" class="ol"/><rect x="-120" y="-150" width="240" height="90" rx="12" fill="#C8F0D4" class="ol" style="stroke-width:4"/>
  <text id="${id}_d" x="0" y="-88" text-anchor="middle" class="r9" font-size="58" fill="${K.navy}">${v}</text>${T(0,-30,24,'kWh',{c:'r8',fill:'#55608A'})}<circle id="${id}_led" cx="0" cy="40" r="18" fill="#E0301E" class="ol" style="stroke-width:3"/>${T(0,110,22,'MEDIDOR',{c:'r9',fill:'#8A93B2'})}`;
const dial = (n, dir, id) => `<g><circle r="58" fill="#fff" class="ol" style="stroke-width:5"/>${[...Array(10)].map((_,k)=>{const a=(dir>0?k:-k)*36-90;const r=44;return T((Math.cos(a*Math.PI/180)*r).toFixed(0),(Math.sin(a*Math.PI/180)*r+7).toFixed(0),18,k,{c:'r8'});}).join('')}
  <path id="${id}" d="M0,0 L0,-36" stroke="${K.orange}" stroke-width="7" stroke-linecap="round" transform="rotate(${(dir>0?n:-n)*36})"/><circle r="7" fill="${K.navy}"/></g>`;
const analog = () => `<rect x="-330" y="-110" width="660" height="220" rx="26" fill="#E3E8F6" class="ol"/>${[4,8,2,1].map((n,i)=>`<g transform="translate(${-225+i*150},-10)">${dial(n+.4, i%2?-1:1, 'dl'+i)}</g>`).join('')}${[4,8,2,1].map((n,i)=>`<g id="dg${i}">${T(-225+i*150,90,40,n,{c:'r9',fill:K.blue})}</g>`).join('')}`;
const box3 = () => `<rect x="-110" y="-150" width="220" height="300" rx="16" fill="#C9D3F0" class="ol"/><rect x="-80" y="-120" width="160" height="110" rx="10" fill="#fff" class="ol" style="stroke-width:4"/>${T(0,-55,28,'0482',{c:'r9'})}<rect x="-30" y="40" width="60" height="40" rx="6" fill="${K.orange}"/><path d="M-20,60 H20" stroke="#fff" stroke-width="4"/>`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'VOCÊ SABE LER') + T(540,495,78,'O SEU MEDIDOR?') +
    T(540,640,104,'É FÁCIL!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,460,null,`<g transform="translate(0,10) scale(1.05)">${digi('cv')}</g>`)}</g>` + kikoCover() + coverBanner('CONFIRA SUA CONTA'),
  titles: [[0,2,'Sabe ler o medidor?','medidor'],[3,4,'Mas atenção!','atenção'],[5,5,'E tem mais','mais'],[6,6,'Fica até o final!','final'],[7,8,'Medidor digital','digital'],
    [9,11,'Medidor de ponteiro','ponteiro'],[12,15,'Vamos fazer uma conta','conta'],[16,19,'3 usos práticos','usos'],[20,20,'Tem energia solar?','solar'],[21,21,'Regra de ouro','ouro'],[22,22,'Resumindo',''],[23,24,null,null]]
    .map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 23,
  point: [[3,3],[6,6],[7,7],[12,12],[21,21]], worry: [[5,5],[18,18]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('mA', box(480,460,null,`<g transform="translate(0,10) scale(1.05)">${digi('ma')}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Isso é coisa da','companhia!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('compTag', pill(360,84,'complicado?',K.navy,'#fff',44), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('facil', box(820,440,null,`<g transform="translate(-230,10) scale(.8)">${digi('mf')}</g>${T(-80,-20,52,'ler é',{a:'start'})}${T(40,-20,70,'FÁCIL',{a:'start',c:'r9',fill:'#22A55A'})}${T(-80,60,40,'confere a conta',{a:'start'})}${T(-80,110,40,'antes de chegar',{a:'start'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('fuga', box(820,440,'energia escapando?',`<g transform="translate(-220,10) scale(.8)">${digi('mfu')}</g><path d="M-60,40 Q60,-60 260,40" stroke="#E0301E" stroke-width="10" fill="none" stroke-dasharray="20 14"/>${T(100,140,44,'o medidor mostra',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(5), out:s(6)});
    [['1','Digital',T(0,60,52,'0482',{c:'r9',fill:K.blue})],['2','Ponteiro',`<g transform="translate(0,30) scale(.6)">${dial(3,1,'pvd')}</g>`],['3','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('dig', box(860,500,'medidor digital',`<g transform="translate(-220,10) scale(.95)">${digi('md')}</g>${T(-40,-60,46,'o número do',{a:'start'})}${T(-40,0,60,'visor, em kWh',{a:'start',c:'r9',fill:K.blue})}`+sub('telas',140,130,pill(440,76,'espera a tela de kWh',K.orange,'#fff',34))), {x:540,y:630, in:s(7), out:s(9), subs:[['telas',s(8)]]});
    el('ana', box(900,480,'medidor de ponteiro',`<g transform="translate(0,-30)">${analog()}</g>`+sub('esq',0,170,pill(540,66,'da esquerda pra direita →',K.navy,'#fff',34))), {x:540,y:630, in:s(9), out:s(12), subs:[['esq',s(9,.5)]]});
    el('menor', pill(560,84,'entre dois números? o MENOR',K.orange,'#fff',38), {x:510,y:930, in:s(10), out:s(11)});
    el('alt', pill(560,84,'giram em sentidos alternados',K.blue,'#fff',38), {x:510,y:930, in:s(11), out:s(12)});
    el('cHoje', card('cHojeC','hoje', `<g transform="translate(0,20) scale(.55)">${digi('mh','04821')}</g>`), {x:290,y:640, in:s(13), out:s(16)});
    el('cAntes', card('cAntesC','30 dias atrás', `<g transform="translate(0,20) scale(.55)">${digi('mb','04521')}</g>`), {x:790,y:640, in:s(13,.4), out:s(16)});
    el('sub', pill(560,90,'4.821 − 4.521 = 300 kWh',K.orange,'#fff',42), {x:510,y:930, in:s(14), out:s(15), sfx:'ding'});
    el('rs', pill(600,90,'≈ R$ 240 (fora impostos e taxas)',K.navy,'#fff',36), {x:510,y:930, in:s(15), out:s(16)});
    el('u0', row(1,'Anota toda semana','vê quando o consumo dispara',`<rect x="-40" y="-50" width="80" height="100" rx="10" fill="#fff" class="ol"/><path d="M-24,-24 H24 M-24,0 H24 M-24,24 H10" stroke="${K.blue}" stroke-width="6"/>`), {x:540,y:450, in:s(17), out:s(20)});
    el('u1', row(2,'Teste da fuga','tudo desligado e conta? fuga',`<g transform="scale(.32)">${digi('mu')}</g>`), {x:540,y:620, in:s(18), out:s(20)});
    el('u2', row(3,'Confere a conta','muito diferente? pede revisão',`<g transform="scale(.7)">${alertIcon()}</g>`), {x:540,y:790, in:s(19), out:s(20)});
    el('solar', box(860,440,'energia solar',`<g transform="translate(-220,10) scale(.75)">${digi('msol')}</g>${T(-80,-20,42,'registra também',{a:'start'})}${T(-80,30,42,'o que',{a:'start'})}${T(-80,100,60,'você INJETA',{a:'start',c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(20), out:s(21)});
    el('rule', box(880,460,null,`<g transform="translate(-250,20) scale(.75)">${box3()}</g>${T(-110,-50,50,'olha o medidor,',{a:'start'})}${T(-110,20,50,'não espera a conta',{a:'start'})}`+sub('lacre',90,130,pill(500,76,'NUNCA abre: é lacrado','#E0301E','#fff',36))), {x:540,y:620, in:s(21), out:s(22), subs:[['lacre',s(21,.55)]]});
    el('resumo', box(880,480,null,`${T(0,-110,52,'consumo do mês =')}${T(0,-20,64,'leitura de HOJE',{c:'r9',fill:K.blue})}${T(0,60,56,'−',{c:'r9'})}${T(0,140,64,'leitura do mês passado',{c:'r9',fill:K.orange,extra:'font-size="52"'})}`), {x:540,y:620, in:s(22), out:s(23)});
  },
  fx: (t) => {
    ['ma','mf','mfu','md','msol','mu'].forEach(i=>{ const l=$(i+'_led'); if(l) l.style.opacity=(Math.floor(t*3)%2)?1:.25; });
    $('ma_d').textContent = String(4821+Math.floor(t*2)).padStart(5,'0');
    for(let i=0;i<4;i++) $('dg'+i).style.opacity = pop(t, s(9,.6)+i*.3);
  },
});
