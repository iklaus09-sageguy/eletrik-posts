#!/bin/bash
# Prepara o ambiente para gerar vídeos EletriK (rodar dentro de gerador/)
set -e
pip install -q piper-tts numpy
npm install --silent
mkdir -p voices
for f in pt_BR-faber-medium.onnx pt_BR-faber-medium.onnx.json; do
  [ -f voices/$f ] || curl -sSL -o voices/$f "https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/faber/medium/$f"
done
echo "ambiente pronto"
