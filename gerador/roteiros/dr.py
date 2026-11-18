# Roteiro: DR desarmando
LINES = [
 # --- gancho (0-6)
 ("O DR da sua casa vive desarmando?", [("O DR da sua casa",""),("vive desarmando?","desarmando")], .15),
 ("E alguém sugeriu: tira ele, que resolve.", [("E alguém sugeriu:",""),("tira ele, que resolve.","tira ele")], .2),
 ("Parece resolver...", [("Parece resolver...","")], .4),
 ("Mas aqui está o detalhe:", [("Mas aqui está",""),("o detalhe:","detalhe")], .12),
 ("o DR é o que te protege de choque elétrico.", [("o DR é o que te protege",""),("de CHOQUE elétrico.","CHOQUE")], .2),
 ("O disjuntor protege o fio. O DR protege você.", [("O disjuntor protege o fio.","fio"),("O DR protege VOCÊ.","VOCÊ")], .3),
 ("Tirar ele é como arrancar o cinto de segurança, porque ele aperta.", [("Tirar o DR é como arrancar",""),("o cinto de segurança","cinto"),("porque ele aperta.","")], .45),
 # --- promessa (7)
 ("Hoje eu te mostro como ele funciona, por que ele desarma, e o que fazer.", [("Hoje eu te mostro",""),("como ele funciona,","funciona"),("por que ele desarma,","desarma"),("e o que fazer.","o que fazer")], .45),
 # --- como funciona (8-12)
 ("Pensa no DR como um porteiro.", [("Pensa no DR",""),("como um PORTEIRO.","PORTEIRO")], .2),
 ("Ele confere a corrente que sai pela fase, e a que volta pelo neutro.", [("Ele confere a corrente",""),("que sai pela fase,","sai"),("e a que volta pelo neutro.","volta")], .2),
 ("Saiu dez, voltou dez? Tudo certo.", [("Saiu 10, voltou 10?","10"),("Tudo certo.","certo")], .25),
 ("Mas se volta menos, uma parte fugiu... e pode estar passando por alguém.", [("Mas se volta MENOS,","MENOS"),("uma parte fugiu...","fugiu"),("e pode estar passando","" ),("por alguém.","alguém")], .2),
 ("Aí ele desliga, em menos de três décimos de segundo.", [("Aí ele desliga",""),("em menos de 0,3 s.","0,3 s")], .5),
 # --- a conta (13-17)
 ("Agora, a conta que impressiona.", [("Agora, a conta","conta"),("que impressiona.","")], .2),
 ("Um disjuntor de vinte ampères só desarma com vinte mil miliampères.", [("Um disjuntor de 20 A",""),("só desarma com 20.000 mA.","20.000 mA")], .2),
 ("O DR desarma com trinta.", [("O DR desarma com 30 mA.","30 mA")], .25),
 ("Ou seja: ele é mais de seiscentas vezes mais sensível.", [("Ou seja: ele é",""),("mais de 600 VEZES","600 VEZES"),("mais sensível.","")], .3),
 ("E é por isso que ele salva vidas: algumas dezenas de miliampères pelo corpo já podem ser fatais.", [("É por isso que ele","" ),("salva vidas:","salva vidas"),("algumas dezenas de mA",""),("pelo corpo já podem","" ),("ser fatais.","fatais")], .5),
 # --- 3 motivos (18-22)
 ("Então, por que ele desarma? Os três motivos mais comuns:", [("Então, por que ele desarma?","por que"),("Os 3 motivos mais comuns:","3 motivos")], .25),
 ("Um: umidade. Água em tomada, caixinha ou área externa.", [("1: umidade.","umidade"),("Água em tomada,",""),("caixinha ou área externa.","")], .25),
 ("Dois: aparelho com fuga. O chuveiro velho é o campeão.", [("2: aparelho com fuga.","fuga"),("O chuveiro velho",""),("é o campeão.","campeão")], .25),
 ("Três: neutro misturado entre circuitos. Um erro de instalação.", [("3: neutro misturado","neutro misturado"),("entre circuitos.",""),("Erro de instalação.","")], .3),
 ("Em nenhum desses casos, tirar o DR resolve. Ele só está te mostrando o problema.", [("Em nenhum desses casos,","nenhum"),("tirar o DR resolve.",""),("Ele só está mostrando","" ),("o problema.","problema")], .5),
 # --- teste do suspeito (23-25)
 ("Um truque pra achar o culpado:", [("Um truque pra achar",""),("o culpado:","culpado")], .2),
 ("Desliga todos os disjuntores, liga o DR, e vai religando um por um.", [("Desliga todos os disjuntores,","Desliga"),("liga o DR,",""),("e religa um por um.","um por um")], .3),
 ("O circuito que derrubar o DR é o suspeito.", [("O circuito que derrubar",""),("o DR é o SUSPEITO.","SUSPEITO")], .5),
 # --- regra de ouro (26-29)
 ("A regra de ouro: DR desarmando é sinal de fuga. Investiga, não desliga.", [("A regra de ouro:","regra de ouro"),("DR desarmando",""),("é sinal de FUGA.","FUGA"),("Investiga, não desliga.","Investiga")], .3),
 ("E pela norma, banheiro, cozinha, lavanderia e área externa precisam de DR.", [("E pela norma,",""),("banheiro, cozinha,",""),("lavanderia e área externa",""),("precisam de DR.","DR")], .6),
 ("Ah, e aperta o botão de teste dele uma vez por mês.", [("Aperta o botão de teste","teste"),("1 vez por mês.","1 vez por mês")], .25),
 ("Sempre com um eletricista qualificado.", [("Sempre com um eletricista",""),("qualificado.","qualificado")], .55),
 # --- resumo + CTA (30-32)
 ("Resumindo: o disjuntor protege o fio. O DR protege você.", [("Resumindo:",""),("o disjuntor protege o FIO.","FIO"),("O DR protege VOCÊ.","VOCÊ")], .45),
 ("Quer aprender mais sobre elétrica, do jeito simples? Segue o perfil e assiste os outros vídeos.", [("Quer aprender mais",""),("sobre elétrica","elétrica"),("do jeito simples?",""),("Segue o perfil","Segue"),("e assiste os outros vídeos.","outros vídeos")], .25),
 ("E manda esse vídeo pra quem quer tirar o DR de casa.", [("Manda pra quem","Manda"),("quer tirar o DR de casa.","tirar o DR")], 0),
]
