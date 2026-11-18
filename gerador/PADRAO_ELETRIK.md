# Padrão de vídeo EletriK (@eletrikhub)

Referência oficial: `EletriK_disjuntor_caindo_1.2x.mp4`. Todo vídeo novo segue este padrão.

## Identidade visual
| Item | Padrão |
|---|---|
| Formato | 1080x1920 (9:16), 30 fps, 1min30 a 2min |
| Cores | Azul royal `#1630D8` · Marinho `#0B1A4F` · Laranja `#FF6A13` · Creme `#FBF8F1` |
| Significado das cores | Laranja = destaque/perigo/erro · Azul = correto/ok · Marinho = texto/contornos |
| Fontes | Fredoka (títulos, legendas, textos) · Rubik Black (números, carimbos) |
| Cenário | Céu azul claro com faíscas, prédios ao fundo, poste com fios, calçada e rua marinho com faixa laranja |
| Mascote | Kiko: capacete e tênis laranja, camisa azul com o K no peito |
| Marca d'água | Logo empilhada (K + "EletriK" + @eletrikhub) no topo, ao centro, o vídeo inteiro |
| Título | Etiqueta marinho no topo, palavra-chave em laranja |
| Legenda | Branca sobre o asfalto, 2 a 5 palavras por vez, palavra-chave em laranja |
| Elementos | Cartões brancos com cabeçalho azul, contorno marinho, entram "pulando" |
| Barra de progresso | Laranja, no rodapé |

## Áudio
- Narração com voz neural pt-BR (Piper "faber") em **1,2x**
- Trilha leve própria que **abaixa quando a voz entra** e some nos momentos de tensão
- Efeitos: pop (elementos), clack (disjuntor), ding (acerto), buzz (erro), whoosh (troca de cena)
- Volume final: −14 LUFS

## Estrutura do roteiro
1. **Capa** (1º quadro): pergunta + número/valor + selo de perigo + "entenda em 1 minuto"
2. **Gancho** (0–15s): problema real + palpite errado + "mas aqui está o detalhe" + suspense
3. **Promessa**: "Hoje eu vou te mostrar..." com 3 cartões do que vem
4. **Analogia** simples (ex.: fio = cano, corrente = água)
5. **A conta**: números reais na tela, passo a passo
6. **Lista** de motivos/erros numerada (1, 2, 3)
7. **Regra de ouro** + referência técnica (citar norma, com ressalva)
8. **Resumo** em uma frase
9. **Chamada final**: celular com o perfil @eletrikhub, toque em "Seguir", pedir para assistir os outros vídeos e compartilhar

Frases de virada para usar a cada 20–40s: "Mas aqui está o detalhe", "E aqui vem a parte interessante", "Mas atenção", "Um detalhe que muita gente não sabe".

## Como fazer um vídeo novo (ex.: tema "tomada")
1. Roteiro em `roteiros/<tema>.py` (frase falada + trechos de legenda + palavra-chave + pausa)
2. `python3 build_voice.py <tema>` → voz 1,2x e tempos em `out/<tema>/`
3. Cenas em `<tema>.html` usando o motor `engine.js` (identidade, Kiko, marca d'água, legenda, CTA) e `lib.js` (cores, cenário, ícones). Modelo: `tomada.html`
4. `node render.js <tema>.html full` → quadros
5. `python3 mix.py <tema>` → trilha + efeitos + voz
6. Juntar com ffmpeg:

```
ffmpeg -framerate 30 -i frames/%05d.png -i out/<tema>/audio.wav -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -af "loudnorm=I=-14:TP=-1.0:LRA=7" -ar 48000 -c:a aac -b:a 192k -shortest -movflags +faststart saida.mp4
```

## Atalho (vídeos novos)
1. Roteiro em `roteiros/<tema>.py` → `python3 build_voice.py <tema>`
2. Cenas em `cenas/<tema>.js` (modelos: `cenas/extensao.js`, `cenas/conta.js`, `cenas/lampada.js`)
3. `bash build_all.sh <tema>` → gera a página, os quadros, o áudio e o MP4

## Vídeos já feitos
| Tema | Arquivo | Duração |
|---|---|---|
| Disjuntor caindo | `EletriK_disjuntor_caindo_1.2x.mp4` | 1min35 |
| Tomada derretendo | `EletriK_tomada_derretendo.mp4` | 1min30 |
| DR desarmando | `EletriK_DR_desarmando.mp4` | 1min39 |
| Chuveiro queimando a resistência | `EletriK_chuveiro_resistencia.mp4` | 1min40 |
| Aterramento (3º pino) | `EletriK_aterramento.mp4` | 1min35 |
| Extensão esquentando | `EletriK_extensao.mp4` | 1min34 |
| Conta de luz subiu | `EletriK_conta_de_luz.mp4` | 1min47 |
| Lâmpada piscando | `EletriK_lampada_piscando.mp4` | 1min25 |
| Alumínio + cobre | `EletriK_aluminio_cobre.mp4` | 1min21 |
| Primeiros socorros no choque | `EletriK_primeiros_socorros_choque.mp4` | 1min37 |
| Standby | `EletriK_standby.mp4` | 1min36 |
