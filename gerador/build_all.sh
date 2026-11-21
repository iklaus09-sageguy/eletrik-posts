#!/bin/bash
# uso: bash build_all.sh <tema> [<tema> ...]   (gera <tema>.html, quadros, áudio e MP4)
set -e
declare -A OUTN=([_w]=_w [_z]=_z [_y]=_y [_x]=_x [extensao]=EletriK_extensao [conta]=EletriK_conta_de_luz [lampada]=EletriK_lampada_piscando [aluminio]=EletriK_aluminio_cobre [choque]=EletriK_primeiros_socorros_choque [standby]=EletriK_standby)
for n in "$@"; do
  python3 make_html.py $n
  node render.js $n.html full
  python3 mix.py $n
  out=${OUTN[$n]:-EletriK_$n}
  ffmpeg -nostdin -v error -framerate 30 -i frames/%05d.png -i out/$n/audio.wav -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -af "loudnorm=I=-14:TP=-1.0:LRA=7" -ar 48000 -c:a aac -b:a 192k -shortest -movflags +faststart -y $out.mp4
  echo "PRONTO $out $(ffprobe -v error -show_entries format=duration -of csv=p=0 $out.mp4)"
done
