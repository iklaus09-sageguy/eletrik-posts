# Roteiro: Disjuntor caindo
LINES = [
 # --- gancho
 ("Seu disjuntor desarma toda hora?", [("Seu disjuntor",""),("desarma toda hora?","toda hora")], .15),
 ("Aí vem alguém e manda colocar um maior.", [("Aí vem alguém",""),("e manda colocar",""),("um MAIOR.","MAIOR")], .2),
 ("Parece resolver...", [("Parece resolver...","")], .4),
 ("Mas aqui está o detalhe:", [("Mas aqui está",""),("o detalhe:","detalhe")], .12),
 ("o disjuntor não protege o aparelho.", [("o disjuntor",""),("não protege o aparelho.","não")], .12),
 ("Ele protege o fio.", [("Ele protege o FIO.","FIO")], .45),
 ("E se esse fio for fino demais?", [("E se esse fio",""),("for fino demais?","fino")], .3),
 ("Aí o problema vira outro... bem mais perigoso.", [("Aí o problema vira outro...",""),("bem mais perigoso.","perigoso")], .5),
 # --- promessa
 ("Hoje eu vou te mostrar por que isso acontece, e qual é o jeito certo de resolver.", [("Hoje eu vou te mostrar",""),("por que isso acontece,","por que"),("e qual é o jeito certo","jeito certo"),("de resolver.","")], .45),
 # --- analogia
 ("Pensa no fio como um cano, e na corrente elétrica como a água.", [("Pensa no fio como um cano,","cano"),("e na corrente elétrica",""),("como a água.","água")], .2),
 ("Cano fino aguenta pouca água.", [("Cano fino","fino"),("aguenta pouca água.","")], .15),
 ("Se você força demais, ele esquenta.", [("Se você força demais,","demais"),("ele esquenta.","esquenta")], .25),
 ("O disjuntor é o vigia desse cano. Passou do limite, ele desliga.", [("O disjuntor é o vigia","vigia"),("desse cano.",""),("Passou do limite,","limite"),("ele desliga.","")], .5),
 # --- a conta
 ("Agora, vamos fazer uma conta.", [("Vamos fazer uma conta.","conta")], .2),
 ("Você trocou o chuveiro por um de sete mil e quinhentos watts.", [("Você trocou o chuveiro",""),("por um de 7.500 W.","7.500 W")], .25),
 ("Em duzentos e vinte volts, ele puxa uns trinta e quatro ampères.", [("Em 220 V,",""),("ele puxa uns 34 A.","34 A")], .25),
 ("Só que o fio de dois e meio milímetros aguenta uns vinte e quatro.", [("Só que o fio de 2,5 mm²",""),("aguenta uns 24 A.","24 A")], .3),
 ("Por isso o disjuntor de vinte desarmava. Ele estava certo!", [("Por isso o de 20 A desarmava.","20 A"),("Ele estava certo!","certo")], .35),
 ("Com um de quarenta, ele deixa passar os trinta e quatro...", [("Com um de 40 A,","40 A"),("ele deixa passar os 34...","")], .1),
 ("e o fio esquenta o dobro.", [("e o fio esquenta o DOBRO.","DOBRO")], .35),
 ("Dentro da parede, ninguém vê. Até começar a cheirar queimado.", [("Dentro da parede,",""),("ninguém vê.","ninguém"),("Até começar a cheirar",""),("queimado.","queimado")], .55),
 # --- 3 motivos
 ("Então, por que o disjuntor cai? Os três motivos mais comuns:", [("Então, por que ele cai?","por que"),("Os 3 motivos mais comuns:","3 motivos")], .25),
 ("Um: sobrecarga. Muita coisa ligada no mesmo circuito.", [("1: sobrecarga.","sobrecarga"),("Muita coisa ligada",""),("no mesmo circuito.","")], .25),
 ("Dois: curto-circuito. Fio desencapado, ou aparelho com defeito.", [("2: curto-circuito.","curto-circuito"),("Fio desencapado",""),("ou aparelho com defeito.","")], .25),
 ("Três: mau contato. Parafuso frouxo esquenta e derruba o disjuntor.", [("3: mau contato.","mau contato"),("Parafuso frouxo esquenta",""),("e derruba o disjuntor.","")], .3),
 ("Em nenhum desses casos, aumentar o disjuntor resolve.", [("Em nenhum desses casos,","nenhum"),("aumentar o disjuntor resolve.","")], .55),
 # --- regra de ouro
 ("A regra de ouro é simples: o disjuntor é escolhido pelo fio, e não pelo aparelho.", [("A regra de ouro:","regra de ouro"),("o disjuntor é escolhido",""),("pelo FIO,","FIO"),("e não pelo aparelho.","")], .35),
 ("Numa casa, como referência, fica mais ou menos assim.", [("Como referência,",""),("fica mais ou menos assim:","")], 1.9),
 ("Precisa de mais potência? Troca o fio junto, ou faz um circuito novo.", [("Precisa de mais potência?","potência"),("Troca o fio junto",""),("ou faz um circuito novo.","circuito novo")], .25),
 ("E sempre com um eletricista qualificado.", [("E sempre com",""),("um eletricista qualificado.","qualificado")], .55),
 # --- resumo + CTA
 ("Resumindo: disjuntor caindo é um aviso, não um defeito.", [("Resumindo:",""),("disjuntor caindo",""),("é um AVISO,","AVISO"),("não um defeito.","")], .45),
 ("Quer aprender mais sobre elétrica, do jeito simples? Segue o perfil e assiste os outros vídeos.", [("Quer aprender mais",""),("sobre elétrica","elétrica"),("do jeito simples?",""),("Segue o perfil","Segue"),("e assiste os outros vídeos.","outros vídeos")], .25),
 ("E manda esse vídeo pra quem vive trocando disjuntor.", [("Manda pra quem","Manda"),("vive trocando disjuntor.","")], 0),
]
