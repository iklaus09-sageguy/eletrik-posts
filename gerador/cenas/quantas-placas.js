/* EletriK - Quantas placas */
const panel = () => `<rect x="-120" y="-80" width="240" height="160" rx="10" fill="#1F3FA8" class="ol"/>${[-60,0,60].map(x=>`<path d="M${x},-80 V80" stroke="#7FA2FF" stroke-width="4"/>`).join('')}<path d="M-120,0 H120" stroke="#7FA2FF" stroke-width="4"/>`;
const bill = () => `<path d="M-120,-160 H120 V140 L95,160 L70,140 L45,160 L20,140 L-5,160 L-30,140 L-55,160 L-80,140 L-105,160 L-120,140 Z" fill="#fff" class="ol"/><rect x="-120" y="-160" width="240" height="50" fill="${K.blue}" class="ol"/>${T(0,-126,22,'HISTÓRICO',{fill:'#fff'})}
  ${[70,90,80,110,100,85,95,120,100,90,80,75].map((h,i)=>`<rect x="${-100+i*17}" y="${80-h}" width="12" height="${h}" rx="3" fill="${i===7?K.orange:K.blue}"/>`).join('')}<path d="M-104,80 H104" stroke="${K.navy}" stroke-width="3"/>`;
const roof = (n) => `<path d="M-260,120 L0,-90 L260,120 Z" fill="#C0504D" class="ol"/>${[...Array(n)].map((_,i)=>`<g transform="translate(${-110+(i%2)*110+ (i>1?-40:0)},${20+Math.floor(i/2)*-50}) rotate(-38) scale(.36,.26)">${panel()}</g>`).join('')}`;
const compass = () => `<circle r="70" fill="#fff" class="ol"/><path d="M0,-55 L16,0 L0,55 L-16,0 Z" fill="#E0301E"/><path d="M0,0 L16,0 L0,55 L-16,0 Z" fill="#9AA3BD"/>${T(0,-80,32,'N',{c:'r9',fill:'#E0301E'})}`;
VIDEO({
  cover: () => coverBase() + T(540,410,78,'QUANTAS PLACAS') + T(540,495,78,'VOCÊ PRECISA?') +
    T(540,640,100,'FAZ A CONTA!',{c:'r9',fill:K.orange,extra:'paint-order="stroke" stroke="#fff" stroke-width="12"'}) +
    `<g transform="translate(600,1000) scale(.85)">${box(540,440,null,`<g transform="translate(0,40) scale(.9)">${roof(4)}</g>`)}</g>` + kikoCover() + coverBanner('PELO CONSUMO, EM kWh'),
  titles: [[0,2,'Quantas placas?','placas'],[3,4,'Mas atenção!','atenção'],[5,5,'O que não zera','zera'],[6,6,'Fica até o final!','final'],[7,7,'Onde achar','achar'],
    [8,12,'Vamos fazer uma conta','conta'],[13,16,'3 erros comuns','erros'],[17,18,'Regra de ouro','ouro'],[19,19,'Resumindo',''],[20,21,null,null]].map(([a,b,txt,kw])=>[S[a], b+1<S.length?S[b+1]:D+1, txt, kw]),
  clacks: [], palp: {in:s(1), out:s(3)}, kikoIn: s(3), cta: 20,
  point: [[3,3],[6,6],[8,8],[13,13],[17,17]], worry: [[5,5],[14,14]], drop: [], sizzle: [], events: [],
  specs: () => {
    el('tel', box(600,440,null,`<g transform="translate(0,40)">${roof(4)}</g>`), {x:540,y:560, in:s(0), out:s(4)});
    el('bubble', bubbleSVG('Põe o máximo que','cabe no telhado!'), {x:540,y:880, in:s(1,.2), out:s(2,.1), sfx:'boing'});
    el('segTag', pill(300,84,'seguro?',K.navy,'#fff',46), {x:540,y:880, in:s(2,.1), out:s(4)});
    el('kwh', box(860,440,null,`<g transform="translate(-250,10) scale(.6)">${bill()}</g>${T(-120,-30,48,'calcula pelo',{a:'start'})}${T(-120,50,76,'kWh',{a:'start',c:'r9',fill:K.blue})}${T(-120,110,36,'placa demais = dinheiro parado',{a:'start',c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(4), out:s(5)});
    el('zera', box(440,460,'nenhuma placa zera',`<g transform="translate(0,20) scale(1.1)">${T(0,60,120,'R$',{c:'r9',fill:K.orange})}</g>`), {x:470,y:620, in:s(5,.2), out:s(6)});
    el('zeraQ', bigQ(), {x:860,y:480, in:s(5,.5), out:s(6), sfx:'boing'});
    [['1','O consumo',T(0,60,60,'kWh',{c:'r9',fill:K.blue})],['2','A conta',T(0,60,120,'÷',{c:'r9',fill:K.blue})],['3','Os erros',`<g transform="translate(0,25) scale(1.3)">${badgeX('pv3')}</g>`]]
      .forEach(([n,l,ic],i)=>el('prev'+i, previewCard(n,l,ic), {x:[195,540,885][i], y:620, in:s(6,[.2,.45,.72][i]), out:s(7)}));
    el('hist', box(860,500,'média de 12 meses',`<g transform="translate(-220,20) scale(.85)">${bill()}</g>${T(-50,-20,48,'no histórico',{a:'start'})}${T(-50,40,48,'da conta,',{a:'start'})}${T(-50,120,64,'em kWh',{a:'start',c:'r9',fill:K.blue})}`), {x:540,y:630, in:s(7), out:s(8)});
    el('c1', box(880,460,'casa de 300 kWh/mês',`${sub('m0',0,-70,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#EEF1FA"/>${T(-360,16,40,'mínimo (bifásico)',{a:'start'})}${T(360,18,48,'~50 kWh',{a:'end',c:'r9',fill:K.orange})}`)}${sub('m1',0,80,`<rect x="-400" y="-55" width="800" height="110" rx="22" fill="#E3F6EA"/>${T(-360,16,40,'o sistema cobre',{a:'start'})}${T(360,18,48,'~250 kWh',{a:'end',c:'r9',fill:'#22A55A'})}`)}`), {x:540,y:620, in:s(8), out:s(10), subs:[['m0',s(8,.4)],['m1',s(9,.7)]]});
    el('c2', box(860,440,'1 kWp gera ~120 kWh/mês',`${T(0,-20,64,'250 ÷ 120')}`+sub('k1',0,90,T(0,0,110,'≈ 2,1 kWp',{c:'r9',fill:K.blue}))), {x:540,y:620, in:s(10), out:s(11), subs:[['k1',s(10,.6)]]});
    el('c3', box(860,460,'placas de 550 W',`<g transform="translate(-230,0)">${[0,1,2,3].map(i=>`<g transform="translate(${(i%2)*90-45},${Math.floor(i/2)*70-35}) scale(.34)">${panel()}</g>`).join('')}</g>${T(-80,-20,56,'2,1 ÷ 0,55',{a:'start'})}${T(-80,80,78,'4 PLACAS',{a:'start',c:'r9',fill:K.orange})}`), {x:540,y:620, in:s(11), out:s(13)});
    el('area', pill(440,84,'≈ 10 m² de telhado',K.navy,'#fff',42), {x:510,y:930, in:s(12), out:s(13)});
    el('e0', row(1,'Pelo valor em R$','ou por um mês só',`<g transform="scale(.3)">${bill()}</g>`), {x:540,y:450, in:s(14), out:s(17)});
    el('e1', row(2,'Sombra e direção','melhor: voltado pro norte',`<g transform="scale(.5)">${compass()}</g>`), {x:540,y:620, in:s(15), out:s(17)});
    el('e2', row(3,'Não pensar no futuro','ar? carro elétrico?',`<g transform="scale(.7)">${alertIcon()}</g>`), {x:540,y:790, in:s(16), out:s(17)});
    el('rule', box(900,460,null,`${T(0,-100,46,'média 12 meses (kWh)')}${T(0,-40,46,'− mínimo',{fill:K.orange})}<path d="M-300,-10 H300" stroke="${K.navy}" stroke-width="6"/>${T(0,60,46,'÷ geração da região',{fill:K.blue})}${T(0,140,70,'= kWp',{c:'r9',fill:'#22A55A'})}`), {x:540,y:620, in:s(17), out:s(19)});
    el('proj', pill(620,90,'projeto + simulação da sua cidade',K.blue,'#fff',36), {x:540,y:930, in:s(18), out:s(19), sfx:'ding'});
    el('resumo', box(880,480,null,`<g transform="translate(0,-110) scale(.55)">${roof(4)}</g>${T(0,60,52,'quem manda é o')}${T(0,150,90,'CONSUMO',{c:'r9',fill:K.blue})}${T(0,210,26,'valores aproximados · peça simulação',{c:'f6',fill:'#55608A'})}`), {x:540,y:620, in:s(19), out:s(20)});
  },
  fx: (t) => {},
});
