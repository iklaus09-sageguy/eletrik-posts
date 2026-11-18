# Roteiro: Chuveiro queimando a resistência
LINES = [
 # --- gancho (0-6)
 ("O seu chuveiro vive queimando a resistência?", [("O seu chuveiro vive",""),("queimando a resistência?","queimando")], .15),
 ("Aí você compra outra, troca, e pronto.", [("Aí você compra outra,","outra"),("troca, e pronto.","")], .2),
 ("Parece resolver...", [("Parece resolver...","")], .4),
 ("Mas aqui está o detalhe:", [("Mas aqui está",""),("o detalhe:","detalhe")], .12),
 ("a resistência nova vai queimar também.", [("a resistência nova",""),("vai queimar TAMBÉM.","TAMBÉM")], .2),
 ("Porque ela não é a culpada. Ela é a vítima.", [("Ela não é a culpada.","culpada"),("Ela é a VÍTIMA.","VÍTIMA")], .3),
 ("E tem um hábito que quase todo mundo tem, que acaba com ela.", [("E tem um hábito","hábito"),("que quase todo mundo tem,",""),("que acaba com ela.","acaba")], .45),
 # --- promessa (7)
 ("Hoje eu te mostro os quatro vilões da resistência, e como fazer ela durar muito mais.", [("Hoje eu te mostro",""),("os 4 vilões","4 vilões"),("da resistência,",""),("e como fazer ela durar","durar"),("muito mais.","")], .45),
 # --- como funciona (8-11)
 ("Primeiro, entende como ela funciona.", [("Primeiro, entende",""),("como ela funciona.","funciona")], .2),
 ("A resistência é um fio que esquenta, pra aquecer a água.", [("A resistência é um fio","fio"),("que esquenta,","esquenta"),("pra aquecer a água.","")], .2),
 ("E é a própria água passando que esfria ela.", [("E é a própria água","água"),("passando que esfria ela.","esfria")], .2),
 ("Sem água, ou com pouca água, ela passa do ponto, e rompe.", [("Sem água, ou com pouca,",""),("ela passa do ponto,",""),("e ROMPE.","ROMPE")], .5),
 # --- vilão 1 (12-15)
 ("Vilão número um: o hábito.", [("Vilão número 1:","1"),("o hábito.","hábito")], .2),
 ("Mudar a chave de inverno pra verão, com o chuveiro ligado.", [("Mudar a chave",""),("de inverno pra verão",""),("com o chuveiro LIGADO.","LIGADO")], .2),
 ("Na troca, salta uma faísca nos contatos, e a resistência sofre.", [("Na troca, salta uma faísca","faísca"),("nos contatos,",""),("e a resistência sofre.","sofre")], .25),
 ("O certo é: fecha a água, muda a chave, e abre de novo.", [("O certo é:","certo"),("fecha a água,","fecha"),("muda a chave,",""),("e abre de novo.","")], .45),
 # --- vilões 2, 3, 4 (16-18)
 ("Vilão dois: pouca água. Abrir só um fiozinho deixa a resistência quente demais.", [("Vilão 2: pouca água.","pouca água"),("Abrir só um fiozinho",""),("deixa ela quente demais.","quente demais")], .4),
 ("Vilão três: ar no cano. Depois que falta água, deixa a água correr com o chuveiro desligado, antes de ligar.", [("Vilão 3: ar no cano.","ar no cano"),("Depois que falta água,",""),("deixa a água correr","correr"),("com ele desligado,","desligado"),("antes de ligar.","")], .4),
 ("Vilão quatro: resistência da tensão errada.", [("Vilão 4:","4"),("tensão errada.","tensão errada")], .3),
 # --- a conta (19-22)
 ("E aqui vem a conta.", [("E aqui vem a conta.","conta")], .2),
 ("Uma resistência de cento e vinte e sete volts, e cinco mil e quinhentos watts...", [("Uma resistência de 127 V","127 V"),("e 5.500 W...","5.500 W")], .1),
 ("se for ligada em duzentos e vinte, vira uns dezesseis mil e quinhentos watts.", [("se for ligada em 220 V,","220 V"),("vira uns 16.500 W.","16.500 W")], .25),
 ("É o triplo. Ela queima na hora.", [("É o TRIPLO.","TRIPLO"),("Ela queima na hora.","na hora")], .5),
 # --- bônus (23-24)
 ("E tem um bônus: fio emendado com fita, perto do chuveiro, esquenta e derrete.", [("E tem um bônus:","bônus"),("fio emendado com fita","fita"),("perto do chuveiro,",""),("esquenta e derrete.","derrete")], .25),
 ("Usa conector apropriado. E se o chuveiro dá choque, ou derruba o DR, lembra do último vídeo: é fuga.", [("Usa conector apropriado.","conector"),("E se dá choque",""),("ou derruba o DR,","DR"),("lembra do último vídeo:",""),("é FUGA.","FUGA")], .5),
 # --- regra de ouro (25-27)
 ("A regra de ouro: muda a chave sem água, abre bem a água, e confere a tensão antes de comprar.", [("A regra de ouro:","regra de ouro"),("muda a chave SEM água,","SEM água"),("abre BEM a água,","BEM"),("e confere a tensão","tensão"),("antes de comprar.","")], .3),
 ("Na embalagem, a tensão e a potência têm que ser iguais às do seu chuveiro.", [("Na embalagem,",""),("tensão e potência","tensão"),("iguais às do seu chuveiro.","iguais")], .4),
 ("E na dúvida, chama um eletricista qualificado.", [("E na dúvida,",""),("chama um eletricista",""),("qualificado.","qualificado")], .55),
 # --- resumo + CTA (28-30)
 ("Resumindo: a resistência é a vítima. O culpado é o jeito de usar, ou a instalação.", [("Resumindo:",""),("a resistência é a VÍTIMA.","VÍTIMA"),("O culpado é o jeito de usar,","culpado"),("ou a instalação.","")], .45),
 ("Quer aprender mais sobre elétrica, do jeito simples? Segue o perfil e assiste os outros vídeos.", [("Quer aprender mais",""),("sobre elétrica","elétrica"),("do jeito simples?",""),("Segue o perfil","Segue"),("e assiste os outros vídeos.","outros vídeos")], .25),
 ("E manda esse vídeo pra quem já trocou três resistências esse ano.", [("Manda pra quem já trocou","Manda"),("3 resistências esse ano.","3 resistências")], 0),
]
