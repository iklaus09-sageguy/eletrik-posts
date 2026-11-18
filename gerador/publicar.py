"""Copia um vídeo gerado para videos/NN-slug/ com legenda e atualiza o INDEX.md.
uso: python3 publicar.py <arquivo.mp4> <slug> "<título>" <legenda.txt>"""
import sys, os, re, shutil, subprocess
mp4, slug, title, leg = sys.argv[1:5]
V = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'videos')
nums = [int(d[:2]) for d in os.listdir(V) if re.match(r'^\d\d-', d)]
nn = f"{max(nums, default=0)+1:02d}"; d = os.path.join(V, f"{nn}-{slug}"); os.makedirs(d)
shutil.copy(mp4, os.path.join(d, 'video.mp4')); shutil.copy(leg, os.path.join(d, 'legenda.txt'))
dur = float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',mp4],capture_output=True,text=True).stdout)
idx = open(os.path.join(V,'INDEX.md')).read()
row = f"| {nn} | {title} | {int(dur//60)}min{int(dur%60):02d} | `videos/{nn}-{slug}/video.mp4` |"
idx = idx.replace("\n\n## Não encontrados", "\n" + row + "\n\n## Não encontrados", 1)
open(os.path.join(V,'INDEX.md'),'w').write(idx); print(nn, d, f"{os.path.getsize(mp4)/1e6:.1f} MB")
