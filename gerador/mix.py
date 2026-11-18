"""EletriK - passo 3: mixa voz + trilha + efeitos usando events.json (gerado pelo render.js)."""
import json, wave, sys, numpy as np
NAME=sys.argv[1]; OUT=f'out/{NAME}'
R=48000
ev=json.load(open(f'{OUT}/events.json')); D=ev['D']; N=int(D*R)
w=wave.open(f'{OUT}/voice.wav'); voice=np.frombuffer(w.readframes(w.getnframes()),np.int16).astype(float)/32768; voice=np.pad(voice,(0,max(0,N-len(voice))))[:N]
rng=np.random.default_rng(5)
def env(n,a=.004,k=6):
    e=np.exp(-np.linspace(0,1,n)*k); na=max(1,int(a*R)); e[:na]*=np.linspace(0,1,na); return e
def tone(f0,f1,d,sq=False):
    n=int(d*R); ph=2*np.pi*np.cumsum(np.linspace(f0,f1,n))/R; return np.sign(np.sin(ph))*.4 if sq else np.sin(ph)
def lp(x,k): return np.convolve(x,np.ones(k)/k,'same')
sfx=np.zeros(N)
def add(buf,t,x,g):
    i=int(t*R); n=min(len(x),N-i)
    if n>0 and i>=0: buf[i:i+n]+=x[:n]*g
pitch=iter(np.tile([620,700,780,660,740,820],200))
def snd(t,k):
    if k=='pop': f=next(pitch); add(sfx,t,tone(f*1.7,f,.11)*env(int(.11*R),.002,9),.4)
    elif k=='boing': add(sfx,t,tone(280,860,.2)*env(int(.2*R),.003,5),.38)
    elif k=='ding':
        n=int(.55*R); a=np.arange(n)/R; add(sfx,t,(np.sin(2*np.pi*1175*a)+.5*np.sin(2*np.pi*1760*a))*env(n,.002,7),.28)
    elif k in('clack','clack2'):
        g=.85 if k=='clack' else .35
        add(sfx,t,rng.standard_normal(int(.03*R))*env(int(.03*R),.0005,12),g); add(sfx,t,tone(150,60,.15)*env(int(.15*R),.001,8),g*.8)
    elif k in('whoosh','swish'):
        d=.35 if k=='whoosh' else .25; x=rng.standard_normal(int(d*R)); y=lp(x,10)-lp(x,40)
        add(sfx,t-.05,y*np.sin(np.linspace(0,np.pi,len(y)))**2,1.1 if k=='whoosh' else .6)
    elif k=='buzz': add(sfx,t,lp(tone(150,120,.28,True)*env(int(.28*R),.002,3),6),.3)
    elif k=='tap': add(sfx,t,rng.standard_normal(int(.015*R))*env(int(.015*R),.0005,10),.5); add(sfx,t,tone(1800,1200,.05)*env(int(.05*R),.001,8),.3)
for t,k in ev['events']: snd(t,k)
for a,b in ev['sizzle']:
    nz=rng.standard_normal(int((b-a)*R)); e=np.minimum(1,np.linspace(0,3,len(nz)))*np.minimum(1,np.linspace(3,0,len(nz))); add(sfx,a,(nz-lp(nz,4))*e,.08)
# trilha (plucks I-V-vi-IV, 112 bpm) + baixo + shaker
def pluck(f,d=.5):
    n=int(d*R); L=max(2,int(R/f)); y=np.zeros(n); y[:L]=rng.uniform(-1,1,L)
    for i in range(L,n,L):
        j=min(n,i+L); prev=y[i-L:j-L]; prev2=np.concatenate([[y[i-L-1] if i-L-1>=0 else 0],prev[:-1]]); y[i:j]=.497*(prev+prev2)*.996
    return y
mus=np.zeros(N); beat=60/112
CH=[[261.6,329.6,392.0],[196.0,246.9,293.7],[220.0,261.6,329.6],[174.6,220.0,261.6]]; BASS=[65.4,49.0,55.0,43.7]
cache={}; k=0; t=0.0
while t<D:
    bar=int(t/(4*beat))%4; step=k%8; f=CH[bar][[0,1,2,1,0,2,1,2][step]]*2
    if f not in cache: cache[f]=pluck(f)
    add(mus,t,cache[f],.22)
    if step%4==0: add(mus,t,tone(BASS[bar]*2,BASS[bar]*2,.4)*env(int(.4*R),.01,4),.35)
    if step%2==1: add(mus,t,lp(rng.standard_normal(int(.05*R)),2)*env(int(.05*R),.001,10),.05)
    t+=beat/2; k+=1
# quedas de tensão: música some e entra um grave + riser
gain=np.ones(N)
for a,b in ev['drop']:
    i0,i1=int(a*R),int(b*R); m=min(int(.3*R),i1-i0)
    gain[i0:i1]=.15; gain[i0:i0+m]=np.linspace(1,.15,m); gain[i1:i1+m]=np.linspace(.15,1,len(gain[i1:i1+m]))
    x=tone(55,55,(i1-i0)/R); n=len(x); add(sfx,a,x*np.minimum(1,np.linspace(0,4,n))*np.minimum(1,np.linspace(4,0,n)),.25)
    x=tone(200,600,(i1-i0)/R); add(sfx,a,x*np.linspace(0,1,len(x))**2,.08)
mus*=gain
mus[-int(1.5*R):]*=np.linspace(1,0,int(1.5*R))
venv=np.convolve(np.abs(voice),np.ones(int(.08*R))/int(.08*R),'same'); duck=1-.6*np.clip(venv/.08,0,1)
mix=voice+mus*.5*duck+sfx*.5
mix=mix/np.abs(mix).max()*.95
w=wave.open(f'{OUT}/audio.wav','wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(R); w.writeframes((mix*32767).astype(np.int16).tobytes()); w.close()
print('ok', D, len(ev['events']),'eventos')
