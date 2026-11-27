# eletrik-posts

Mídias dos posts do Instagram @eletrikhub. Arquivos aqui são públicos: o Instagram baixa as imagens e vídeos por link na hora de publicar.

- `posts/NNN-tema/`: arte (`post.png` ou `video.mp4`) e `legenda.txt` de cada post
- `marca/`: logo e foto de perfil

## Fila de publicação (automática)

- `fila.json`: todos os itens e o status de cada um (`pendente`, `publicado`, `pausado`, `erro`).
- `publicar.py`: publica o próximo `pendente`. Roda 2 vezes por dia: ~8h (vídeo) e ~18h (carrossel), horário de Brasília. Se faltar um tipo, publica o outro.
- **Para adicionar conteúdo:** faça push de uma pasta `videos/NN-slug/` com `video.mp4` + `legenda.txt`, , `posts/NNN-slug/` com `post.jpg` + `legenda.txt`, ou `carrosseis/NNN-slug/` com `01.jpg` … `10.jpg` + `legenda.txt` (terminando com um código único, ex.: `EK-01-01`). Ela entra na fila sozinha, na ordem do nome da pasta.
- **Para segurar um item:** mude o status dele para `pausado` no `fila.json`.
