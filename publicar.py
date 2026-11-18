#!/usr/bin/env python3
"""Publica o proximo item da fila no Instagram @eletrikhub.

Uso:
  python3 publicar.py            # sincroniza a fila e publica o proximo item pendente
  python3 publicar.py --dry      # so mostra o que seria publicado
  python3 publicar.py --sync     # so sincroniza a fila (adiciona pastas novas)

Conteudo novo: crie uma pasta em videos/NN-slug/ (video.mp4 + legenda.txt)
ou posts/NNN-slug/ (post.jpg + legenda.txt) e faca push. Ela entra na fila
automaticamente como "pendente", na ordem do nome da pasta.

O token da Meta NAO fica aqui: o proxy da sessao injeta o header Authorization
nas chamadas para graph.facebook.com.
"""
import json, subprocess, sys, time, datetime, pathlib, urllib.parse

ROOT = pathlib.Path(__file__).resolve().parent
FILA = ROOT / "fila.json"
IG_USER = "17841451960066151"  # @eletrikhub
API = "https://graph.facebook.com/v21.0"
RAW = "https://raw.githubusercontent.com/iklaus09-sageguy/eletrik-posts/main/"


def graph(method, path, params=None):
    url = f"{API}/{path}"
    cmd = ["curl", "-sS", "-H", "Authorization: Bearer proxy-injected"]
    if method == "GET":
        if params:
            url += "?" + urllib.parse.urlencode(params)
    else:
        cmd += ["-X", "POST"]
        for k, v in (params or {}).items():
            cmd += ["--data-urlencode", f"{k}={v}"]
    out = subprocess.run(cmd + [url], capture_output=True, text=True, timeout=120)
    try:
        data = json.loads(out.stdout)
    except json.JSONDecodeError:
        raise RuntimeError(f"resposta invalida: {out.stdout[:300]} {out.stderr[:300]}")
    if "error" in data:
        raise RuntimeError(json.dumps(data["error"], ensure_ascii=False))
    return data


def carregar():
    return json.loads(FILA.read_text()) if FILA.exists() else []


def salvar(fila):
    FILA.write_text(json.dumps(fila, ensure_ascii=False, indent=2) + "\n")


def sincronizar(fila):
    conhecidos = {i["pasta"] for i in fila}
    novos = []
    for tipo, base, arquivo in (("video", "videos", "video.mp4"), ("imagem", "posts", "post.jpg")):
        for pasta in sorted((ROOT / base).glob("*/")):
            rel = f"{base}/{pasta.name}"
            if rel in conhecidos or not (pasta / arquivo).exists() or not (pasta / "legenda.txt").exists():
                continue
            novos.append({"pasta": rel, "tipo": tipo, "arquivo": f"{rel}/{arquivo}", "status": "pendente"})
    fila.extend(novos)
    return novos


def publicar(item):
    legenda = (ROOT / item["pasta"] / "legenda.txt").read_text().strip()
    url = RAW + urllib.parse.quote(item["arquivo"])
    if item["tipo"] == "video":
        c = graph("POST", f"{IG_USER}/media", {"media_type": "REELS", "video_url": url, "caption": legenda, "share_to_feed": "true"})
    else:
        c = graph("POST", f"{IG_USER}/media", {"image_url": url, "caption": legenda})
    cid = c["id"]
    for _ in range(60):  # ate ~10 min de processamento
        st = graph("GET", cid, {"fields": "status_code,status"})
        if st.get("status_code") == "FINISHED":
            break
        if st.get("status_code") in ("ERROR", "EXPIRED"):
            raise RuntimeError(f"processamento falhou: {st}")
        time.sleep(10)
    else:
        raise RuntimeError("processamento passou de 10 minutos")
    pub = graph("POST", f"{IG_USER}/media_publish", {"creation_id": cid})
    info = graph("GET", pub["id"], {"fields": "permalink"})
    return pub["id"], info.get("permalink", "")


def main():
    fila = carregar()
    novos = sincronizar(fila)
    salvar(fila)
    for n in novos:
        print("novo na fila:", n["pasta"])
    if "--sync" in sys.argv:
        return
    prox = next((i for i in fila if i["status"] == "pendente"), None)
    if not prox:
        print("FILA VAZIA: nada para publicar")
        return
    print("proximo:", prox["pasta"])
    if "--dry" in sys.argv:
        return
    agora = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
    try:
        mid, link = publicar(prox)
        prox.update(status="publicado", publicado_em=agora, media_id=mid, link=link)
        print("PUBLICADO:", link)
    except Exception as e:
        prox.update(status="erro", erro=str(e)[:500], tentado_em=agora)
        print("ERRO:", e)
        salvar(fila)
        sys.exit(1)
    salvar(fila)


if __name__ == "__main__":
    main()
