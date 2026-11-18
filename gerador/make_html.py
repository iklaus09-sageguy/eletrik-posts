"""EletriK: gera <tema>.html a partir de cenas/<tema>.js (cabeçalho padrão + motor)."""
import sys
name=sys.argv[1]; body=open(f'cenas/{name}.js').read()
head=open('tomada.html').read().split('<script>window.NAME')[0]
html=head.replace('<title>EletriK - Tomada derretendo</title>',f'<title>EletriK - {name}</title>')
html+=f"""<script>window.NAME='{name}'</script>
<script src="out/{name}/timeline.js"></script>
<script src="lib.js"></script>
<script src="engine.js"></script>
<script>
{body}
</script></body></html>
"""
open(f'{name}.html','w').write(html); print('ok', name)
