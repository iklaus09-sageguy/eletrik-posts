"""EletriK - passo 1: narração (Piper pt-BR) -> voice.wav + timeline.js
Cada linha: (texto FALADO, [(trecho de LEGENDA, palavra-chave)], pausa depois em s)."""
import subprocess, json, wave, numpy as np

SR, MODEL, SPEED = 22050, 'voices/pt_BR-faber-medium.onnx', 1/1.2   # 1.2x mais rápido
START, TAIL = 0.45, 2.2

import sys, importlib.util
NAME = sys.argv[1]
spec = importlib.util.spec_from_file_location('r', f'roteiros/{NAME}.py'); r = importlib.util.module_from_spec(spec); spec.loader.exec_module(r)
LINES = r.LINES
import os; OUT = f'out/{NAME}'; os.makedirs(OUT, exist_ok=True)

def tts(text):
    raw = subprocess.run(['python3','-m','piper','-m',MODEL,'--output-raw','--length-scale',str(SPEED),'--sentence-silence','0.15'],
                         input=text.encode(), capture_output=True, check=True).stdout
    x = np.frombuffer(raw, np.int16).astype(np.float32)/32768
    idx = np.where(np.abs(x) > 0.02)[0]
    return x[max(0,idx[0]-200): idx[-1]+400]

parts, S, E, caps = [], [], [], []
t = START
for txt, chunks, gap in LINES:
    a = tts(txt); d = len(a)/SR
    S.append(round(t,3)); E.append(round(t+d,3)); parts.append((t,a))
    tot = sum(len(c) for c,_ in chunks); tt = t
    for c,kw in chunks:
        cd = d*len(c)/tot; caps.append([round(tt,3), 0, c, kw]); tt += cd
    t += d + (gap if gap > 1.5 else gap/1.2)
D = round(E[-1] + TAIL, 2)
for i in range(len(caps)-1): caps[i][1] = caps[i+1][0]
caps[-1][1] = D + .1
open(f'{OUT}/timeline.js','w').write('window.TL='+json.dumps(dict(D=D,S=S,E=E,CAPS=caps),ensure_ascii=False)+';')

R = 48000; N = int(D*R); v = np.zeros(N)
for t0,a in parts:
    y = np.interp(np.arange(int(len(a)*R/SR))*SR/R, np.arange(len(a)), a); i=int(t0*R); n=min(len(y),N-i); v[i:i+n]+=y[:n]
v *= .9/np.abs(v).max()
w=wave.open(f'{OUT}/voice.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(R); w.writeframes((v*32767).astype(np.int16).tobytes()); w.close()
print('duração total', D, 's | linhas', len(LINES))
