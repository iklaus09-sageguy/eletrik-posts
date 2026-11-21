# eletrik-posts

Mídias dos posts do Instagram @eletrikhub. Arquivos aqui são públicos: o Instagram baixa as imagens e vídeos por link na hora de publicar.

- `posts/NNN-tema/`: arte (`post.png` ou `video.mp4`) e `legenda.txt` de cada post
- `marca/`: logo e foto de perfil

## Fila de publicação (automática)

- `fila.json`: todos os itens e o status de cada um (`pendente`, `publicado`, `pausado`, `erro`).
- `publicar.py`: publica o próximo `pendente`. Roda 2 vezes por dia: ~8h e ~18h (horário de Brasília).
- **Para adicionar conteúdo:** faça push de uma pasta `videos/NN-slug/` com `video.mp4` + `legenda.txt`, ou `posts/NNN-slug/` com `post.jpg` + `legenda.txt`. Ela entra na fila sozinha, na ordem do nome da pasta.
- **Para segurar um item:** mude o status dele para `pausado` no `fila.json`.
