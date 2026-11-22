/* EletriK - Lâmpada queimando */
const bulb = (id, dead=false) => `<path d="M-70,-20 A70,70 0 1,1 70,-20 Q70,20 40,45 V70 H-40 V45 Q-70,20 -70,-20 Z" fill="${dead?'#C9D3F0':'#FFE07A'}" class="ol"/><rect x="-40" y="70" width="80" height="22" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/><rect x="-36" y="92" width="72" height="20" rx="6" fill="#B9C2DA" class="ol" style="stroke-width:4"/>
  ${dead?`<path d="M-30,-40 L30,10 M30,-40 L-30,10" stroke="#E0301E" stroke-width="10" stroke-linecap="round"/>`:''}`;
const plafon = (id) => `<path d="M-160,-40 H160 V0 Q160,60 0,60 Q-160,60 -160,0 Z" fill="#F4F6FB" class="ol"/><g transform="translate(0,10) scale(.4)">${bulb(id)}</g>${heatWaves(id+'_hw',[-60,0,60],-50)}`;
const cal = () => `<rect x="-90" y="-80" width="180" height="170" rx="18" fill="#fff" class="ol"/><path d="M-90,-40 V-60 Q-90,-80 -70,-80 H70 Q90,-80 90,-60 V-40 Z" fill="${K.orange}" class="ol"/>${T(0,50,64,'6',{c:'r9',fill:K.navy})}${T(0,80,20,'meses',{c:'r8',fill:'#55608A'})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'A LÂMPADA QUEIMA') + T(540,495,78,'TODA HORA?') +
    T(540,640,100,'NÃO É A MARCA',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(480,440,null,`<g transform="translate(0,0) scale(1.4)">${bulb('cv',true)}</g>`)}</g>` + kikoCover() + coverBanner('O VILÃO É O CALOR'),
  titles: [[0,2,'Lâmpada queimando?','queimando'],[3,4,'Mas atenção!','atenção'],[5,5,'O vilão escondido','vilão'],[6,6,'Fica até o final!','final'],
    [7,9,'Vamos fazer uma conta','conta'],[10,14,'4 causas comuns','causas'],[15,18,'Como resolver','resolver'],[19,19,'Regra de ouro','ouro'],[20,20,'Resumindo',''],[21,22,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [[s(0,.6),800,420,8,'PLIC!','clack']], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 21,
  point: [[3,3],[6,6],[7,7],[15,15],[19,19]], worry: [[5,5],[9,9]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('lA', box(480,460,null,`<g transform="scale(1.5)"><g id="lAon">${bulb('la')}</g><g id="lAoff" opacity="0">${bulb('lb',true)}</g></g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('É a marca, lâmpada','hoje não presta!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('podeTag', pill(360,84,'pode até ser...',K.navy,'#fff',42), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('onde', box(860,440,null,`<g transform="translate(-240,20) scale(.8)">${plafon('po')}</g>${T(-90,-20,48,'o problema é',{a:'start'})}${T(-90,60,84,'ONDE',{a:'start',c:'r9',fill:K.orange})}${T(-90,120,36,'ela está',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('vil', box(440,460,'o vilão escondido',`<g transform="translate(0,40) scale(1.2)">${thermoIcon()}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('vilQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['2','As causas',T(0,70,110,'4',{c:'r9',fill:K.orange})],['3','Resolver',`<g transform="translate(0,25) scale(1.3)">${badgeOK('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('vida', box(860,460,'LED boa: ~15.000 h',`<g transform="translate(-240,10) scale(.9)">${bulb('lv')}</g>${T(-90,-20,48,'4 horas por dia',{a:'start'})}`+sub('v1',90,70,T(0,0,90,'≈ 10 anos',{c:'r9',fill:'#22A55A'}))), {x:540,y:620, in:s(7), out:s(9), subs:[['v1',s(8,.3)]]});
    el('seis', box(860,460,'queimou em 6 meses?',`<g transform="translate(-240,10)">${cal()}</g>${T(-90,-20,48,'durou só',{a:'start'})}${T(-90,70,96,'~5%',{a:'start',c:'r9',fill:'#E0301E'})}${T(-90,130,36,'tem coisa errada',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(9), out:s(10)});
    el('c0', row(1,'Calor','luminária fechada mata o circuito',`<g transform="scale(.32)">${plafon('cp')}</g>`), {x:540,y:400, in:s(11), out:s(15)});
    el('c1', row(2,'Mau contato no soquete','esquenta e faz faísca',`<g transform="scale(.7)">${sparkIcon()}</g>`), {x:540,y:545, in:s(12), out:s(15)});
    el('c2', row(3,'Tensão errada','127 V em 220 V queima',`<g transform="scale(.45)">${pill(200,90,'220 V',K.orange,'#fff',50)}</g>`), {x:540,y:690, in:s(13), out:s(15)});
    el('c3', row(4,'Liga e desliga demais','fluorescente sofre mais',`<g transform="scale(.32)">${bulb('c3b')}</g>`), {x:540,y:835, in:s(14), out:s(15)});
    el('r0', row(1,'Luminária fechada?','lâmpada indicada pra ela',`<g transform="scale(.32)">${plafon('rp')}</g>`), {x:540,y:450, in:s(16), out:s(19)});
    el('r1', row(2,'Sempre o mesmo ponto?','eletricista: soquete e tensão',`<g transform="scale(.55)">${helmetIcon()}</g>`), {x:540,y:620, in:s(17), out:s(19)});
    el('r2', row(3,'Na embalagem','tensão, bivolt e Inmetro',`<g transform="scale(.7)">${badgeOK('r2b')}</g>`), {x:540,y:790, in:s(18), out:s(19)});
    el('rule', box(880,460,null,`${T(0,-100,48,'queima sempre no mesmo lugar?')}${T(0,0,84,'OLHA O LUGAR',{c:'r9',fill:K.orange})}${T(0,90,44,'não só a lâmpada')}`), {x:540,y:620, in:s(19), out:s(20)});
    el('resumo', box(880,480,null,`<g transform="translate(0,-130) scale(.6)">${bulb('rz')}</g>${T(0,30,46,'calor, mau contato, tensão,')}${T(0,90,46,'liga-desliga')}`+sub('rs',0,180,pill(520,76,'resolve a causa: dura ANOS','#22A55A','#fff',36))), {x:540,y:620, in:s(20), out:s(21), subs:[['rs',s(20,.6)]]});
  },
  fx: (t) => {
    const off = t>s(0,.6); $('lAon').setAttribute('opacity',off?0:1); $('lAoff').setAttribute('opacity',off?1:0);
    ['po','cp','rp'].forEach(i=>animWaves(i+'_hw',t,1));
  },
});
