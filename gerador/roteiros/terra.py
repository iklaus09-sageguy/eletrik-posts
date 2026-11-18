# Roteiro: Aterramento - o terceiro pino
LINES = [
 # --- gancho (0-5)
 ("Você corta o terceiro pino do plugue, pra caber na tomada?", [("Você corta o terceiro pino","terceiro pino"),("do plugue,",""),("pra caber na tomada?","")], .15),
 ("Ou usa um adaptador que some com ele?", [("Ou usa um adaptador","adaptador"),("que some com ele?","")], .2),
 ("Parece resolver...", [("Parece resolver...","")], .4),
 ("Mas aqui está o detalhe:", [("Mas aqui está",""),("o detalhe:","detalhe")], .12),
 ("esse pino é o fio terra. Ele te protege quando o aparelho dá defeito.", [("esse pino é o FIO TERRA.","FIO TERRA"),("Ele te protege",""),("quando o aparelho","" ),("dá defeito.","defeito")], .3),
 ("E tem uma gambiarra muito comum, que é ainda pior.", [("E tem uma gambiarra","gambiarra"),("muito comum,",""),("que é ainda PIOR.","PIOR")], .45),
 # --- promessa (6)
 ("Hoje eu te mostro como o terra funciona, a conta do choque, e as gambiarras que você nunca deve fazer.", [("Hoje eu te mostro",""),("como o terra funciona,","funciona"),("a conta do choque,","choque"),("e as gambiarras","gambiarras"),("que você nunca deve fazer.","nunca")], .45),
 # --- como funciona (7-10)
 ("Pensa no terra como uma saída de emergência.", [("Pensa no terra como","" ),("uma saída de emergência.","saída de emergência")], .2),
 ("Se um fio solta, e encosta na carcaça da máquina de lavar, ela fica energizada.", [("Se um fio solta",""),("e encosta na carcaça",""),("da máquina de lavar,",""),("ela fica ENERGIZADA.","ENERGIZADA")], .2),
 ("Com terra, a corrente foge pelo fio verde, e o DR ou o disjuntor desliga.", [("Com terra,","terra"),("a corrente foge pelo fio verde,","fio verde"),("e o DR ou o disjuntor",""),("desliga.","desliga")], .3),
 ("Sem terra, a carcaça fica esperando... até alguém encostar.", [("Sem terra,","Sem"),("a carcaça fica esperando...",""),("até alguém encostar.","alguém")], .5),
 # --- a conta (11-15)
 ("Agora, a conta.", [("Agora, a conta.","conta")], .2),
 ("O corpo humano tem uns mil ohms de resistência.", [("O corpo humano tem",""),("uns 1.000 Ω","1.000 Ω"),("de resistência.","")], .2),
 ("Em cento e vinte e sete volts, passam uns cento e vinte e sete miliampères pelo corpo.", [("Em 127 V,",""),("passam uns 127 mA","127 mA"),("pelo corpo.","")], .25),
 ("É mais de quatro vezes o limite do DR.", [("É mais de 4 VEZES","4 VEZES"),("o limite do DR.","DR")], .3),
 ("E o fio terra é um caminho milhares de vezes mais fácil que você.", [("E o fio terra é um caminho","fio terra"),("milhares de vezes","milhares"),("mais fácil que você.","")], .5),
 # --- gambiarras (16-20)
 ("Agora, as três gambiarras que você nunca deve fazer:", [("Agora, as 3 gambiarras","3 gambiarras"),("que você nunca deve fazer:","nunca")], .25),
 ("Um: cortar o terceiro pino.", [("1: cortar","cortar"),("o terceiro pino.","")], .25),
 ("Dois: ligar o terra no neutro, dentro da tomada.", [("2: ligar o terra no neutro","terra no neutro"),("dentro da tomada.","")], .25),
 ("Três: aterrar no cano de água, ou deixar o fio solto.", [("3: aterrar no cano de água","cano"),("ou deixar o fio solto.","solto")], .3),
 ("Todas parecem funcionar. Nenhuma te protege.", [("Todas parecem funcionar.",""),("NENHUMA te protege.","NENHUMA")], .5),
 # --- como saber (21-23)
 ("Como saber se a sua tomada tem terra?", [("Como saber se a sua tomada",""),("tem terra?","terra")], .2),
 ("Com a energia desligada, abre a tomada, e procura um fio verde, ou verde e amarelo, no furo do meio.", [("Com a energia DESLIGADA,","DESLIGADA"),("abre a tomada",""),("e procura um fio verde,","verde"),("ou verde e amarelo,",""),("no furo do meio.","meio")], .3),
 ("Tem o fio, mas não sabe se está ligado de verdade? Só medindo. Chama um eletricista.", [("Tem o fio, mas não sabe",""),("se está ligado de verdade?",""),("Só MEDINDO.","MEDINDO"),("Chama um eletricista.","eletricista")], .55),
 # --- regra de ouro (24-26)
 ("A regra de ouro: plugue de três pinos vai em tomada de três pinos, com terra de verdade.", [("A regra de ouro:","regra de ouro"),("plugue de 3 pinos","3 pinos"),("em tomada de 3 pinos,",""),("com terra de verdade.","de verdade")], .3),
 ("Terra de verdade é uma haste no padrão de entrada, com o fio verde chegando em cada tomada.", [("Terra de verdade é uma HASTE","HASTE"),("no padrão de entrada,",""),("com o fio verde",""),("chegando em cada tomada.","cada tomada")], .3),
 ("Sempre com um eletricista qualificado.", [("Sempre com um eletricista",""),("qualificado.","qualificado")], .55),
 # --- resumo + CTA (27-29)
 ("Resumindo: o terceiro pino não é enfeite. É o caminho da corrente, pra ela não passar por você.", [("Resumindo:",""),("o terceiro pino",""),("NÃO é enfeite.","NÃO"),("É o caminho da corrente",""),("pra ela não passar por você.","você")], .45),
 ("Quer aprender mais sobre elétrica, do jeito simples? Segue o perfil e assiste os outros vídeos.", [("Quer aprender mais",""),("sobre elétrica","elétrica"),("do jeito simples?",""),("Segue o perfil","Segue"),("e assiste os outros vídeos.","outros vídeos")], .25),
 ("E manda esse vídeo pra quem corta o pino do plugue.", [("Manda pra quem","Manda"),("corta o pino do plugue.","corta")], 0),
]
