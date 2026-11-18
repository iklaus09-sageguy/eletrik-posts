# Roteiro: Tomada esquentando / derretendo
# (texto FALADO, [(trecho de LEGENDA, palavra-chave)], pausa depois)
LINES = [
 # --- gancho (0-6)
 ("Sua tomada está esquentando... ou já derreteu?", [("Sua tomada está esquentando...","esquentando"),("ou já derreteu?","derreteu")], .2),
 ("Muita gente culpa a tomada, e troca por uma nova.", [("Muita gente culpa a tomada,",""),("e troca por uma nova.","nova")], .2),
 ("Parece resolver...", [("Parece resolver...","")], .4),
 ("Mas aqui está o detalhe:", [("Mas aqui está",""),("o detalhe:","detalhe")], .12),
 ("a tomada nova vai derreter de novo.", [("a tomada nova",""),("vai derreter DE NOVO.","DE NOVO")], .2),
 ("Porque o problema não é a tomada. É o que você liga nela.", [("O problema não é a tomada.","não"),("É o que você liga nela.","liga")], .3),
 ("E tem um aparelho na sua cozinha que é campeão nisso.", [("E tem um aparelho",""),("na sua cozinha","cozinha"),("que é campeão nisso.","campeão")], .45),
 # --- promessa (7)
 ("Hoje eu te mostro quem é, a conta que ninguém faz, e o jeito certo de ligar.", [("Hoje eu te mostro quem é,","quem é"),("a conta que ninguém faz,","conta"),("e o jeito certo de ligar.","jeito certo")], .45),
 # --- analogia (8-10)
 ("Lembra do cano do último vídeo?", [("Lembra do cano","cano"),("do último vídeo?","")], .2),
 ("Na tomada é igual: ela tem um limite de corrente.", [("Na tomada é igual:",""),("ela tem um LIMITE","LIMITE"),("de corrente.","")], .25),
 ("A comum aguenta dez ampères. A de pino grosso, vinte.", [("A comum aguenta 10 A.","10 A"),("A de pino grosso, 20 A.","20 A")], .45),
 # --- o culpado + a conta (11-18)
 ("Agora, o culpado: a air fryer.", [("Agora, o culpado:",""),("a AIR FRYER.","AIR FRYER")], .3),
 ("Uma de mil e quinhentos watts, em cento e vinte e sete volts, puxa uns doze ampères.", [("Uma de 1.500 W,","1.500 W"),("em 127 V,",""),("puxa uns 12 A.","12 A")], .25),
 ("Por isso ela vem com o pino grosso, de vinte.", [("Por isso ela vem",""),("com o pino grosso.","pino grosso")], .25),
 ("Aí a pessoa usa um adaptador pra encaixar na tomada de dez...", [("Aí a pessoa usa","" ),("um adaptador","adaptador"),("pra encaixar na de 10 A...","10 A")], .1),
 ("e passa doze ampères por um contato feito pra dez.", [("e passa 12 A","12 A"),("por um contato feito pra 10.","")], .3),
 ("Coloca o micro-ondas no mesmo T, e chega a vinte e três.", [("Coloca o micro-ondas","micro-ondas"),("no mesmo T,",""),("e chega a 23 A.","23 A")], .25),
 ("O calor no contato sobe mais de cinco vezes.", [("O calor no contato",""),("sobe mais de 5 VEZES.","5 VEZES")], .3),
 ("E é exatamente ali, no contato, que a tomada derrete.", [("E é exatamente ali,",""),("no contato,","contato"),("que a tomada derrete.","derrete")], .5),
 # --- sinais de alerta (19-23)
 ("Fica de olho nesses três sinais:", [("Fica de olho",""),("nesses 3 sinais:","3 sinais")], .25),
 ("Um: tomada ou plugue quente ao toque.", [("1: tomada ou plugue",""),("quente ao toque.","quente")], .25),
 ("Dois: cheiro de queimado, ou manchas escuras.", [("2: cheiro de queimado,","queimado"),("ou manchas escuras.","manchas")], .25),
 ("Três: plugue folgado, que cai sozinho.", [("3: plugue folgado,","folgado"),("que cai sozinho.","")], .3),
 ("Viu algum desses? Desliga o aparelho e chama um eletricista.", [("Viu algum desses?",""),("Desliga o aparelho","Desliga"),("e chama um eletricista.","eletricista")], .55),
 # --- regra de ouro (24-27)
 ("A regra de ouro: aparelho de pino grosso vai em tomada de vinte. Sem adaptador, e sem T.", [("A regra de ouro:","regra de ouro"),("pino grosso","pino grosso"),("vai em tomada de 20 A.","20 A"),("Sem adaptador, e sem T.","Sem")], .35),
 ("Pra você ter uma ideia, em cento e vinte e sete volts:", [("Pra você ter uma ideia,",""),("em 127 V:","127 V")], 2.0),
 ("E lembra do último vídeo: a tomada de vinte precisa de fio e disjuntor compatíveis.", [("E lembra do último vídeo:",""),("a tomada de 20 A precisa","20 A"),("de fio e disjuntor","fio"),("compatíveis.","")], .25),
 ("Sempre com um eletricista qualificado.", [("Sempre com um eletricista",""),("qualificado.","qualificado")], .55),
 # --- resumo + CTA (28-30)
 ("Resumindo: tomada quente nunca é normal. É corrente demais, ou contato ruim.", [("Resumindo:",""),("tomada quente","quente"),("NUNCA é normal.","NUNCA"),("É corrente demais,",""),("ou contato ruim.","")], .45),
 ("Quer aprender mais sobre elétrica, do jeito simples? Segue o perfil e assiste os outros vídeos.", [("Quer aprender mais",""),("sobre elétrica","elétrica"),("do jeito simples?",""),("Segue o perfil","Segue"),("e assiste os outros vídeos.","outros vídeos")], .25),
 ("E manda esse vídeo pra quem vive usando T na cozinha.", [("Manda pra quem","Manda"),("vive usando T na cozinha.","T")], 0),
]
