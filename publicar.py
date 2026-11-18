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


def chave(texto):
    return " ".join(texto.split())[:80]


def ja_publicados():
    """Chaves das legendas que ja estao no Instagram (fonte da verdade)."""
    chaves, params = set(), {"fields": "caption", "limit": "100"}
    data = graph("GET", f"{IG_USER}/media", params)
    while True:
        for m in data.get("data", []):
            chaves.add(chave(m.get("caption", "")))
        nxt = data.get("paging", {}).get("cursors", {}).get("after")
        if not data.get("paging", {}).get("next") or not nxt:
            return chaves
        data = graph("GET", f"{IG_USER}/media", dict(params, after=nxt))


def legenda_de(item):
    return (ROOT / item["pasta"] / "legenda.txt").read_text().strip()


def criar_container(item, legenda):
    url = RAW + urllib.parse.quote(item["arquivo"])
    if item["tipo"] == "video":
        c = graph("POST", f"{IG_USER}/media", {"media_type": "REELS", "video_url": url, "caption": legenda, "share_to_feed": "true"})
    else:
        c = graph("POST", f"{IG_USER}/media", {"image_url": url, "caption": legenda})
    cid = c["id"]
    for _ in range(60):  # ate ~10 min de processamento
        st = graph("GET", cid, {"fields": "status_code,status"})
        if st.get("status_code") == "FINISHED":
            return cid
        if st.get("status_code") in ("ERROR", "EXPIRED"):
            raise RuntimeError(f"processamento falhou: {st}")
        time.sleep(10)
    raise RuntimeError("processamento passou de 10 minutos")


def publicar(item):
    legenda = legenda_de(item)
    try:
        cid = criar_container(item, legenda)
    except RuntimeError as e:  # falhas do Instagram costumam ser temporarias: tenta 1 vez mais
        print("falhou, tentando de novo em 60 s:", e)
        time.sleep(60)
        cid = criar_container(item, legenda)
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
    # O Instagram e a fonte da verdade do que ja saiu: assim a fila funciona
    # mesmo quando a execucao nao consegue salvar o fila.json no GitHub.
    publicados = ja_publicados()
    for i in fila:
        if i["status"] in ("pendente", "erro") and chave(legenda_de(i)) in publicados:
            i["status"] = "publicado"
    candidatos = [i for i in fila if i["status"] in ("pendente", "erro")]
    candidatos.sort(key=lambda i: i["status"] == "erro")  # pendentes primeiro, erros antigos por ultimo
    print("restantes na fila:", len(candidatos))
    if not candidatos:
        print("FILA VAZIA: nada para publicar")
        salvar(fila)
        return
    if "--dry" in sys.argv:
        print("proximo:", candidatos[0]["pasta"])
        return
    agora = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
    for item in candidatos[:2]:  # se um item falhar, tenta o seguinte (publica no maximo 1)
        print("tentando:", item["pasta"])
        try:
            mid, link = publicar(item)
        except Exception as e:
            item.update(status="erro", erro=str(e)[:500], tentado_em=agora)
            print("ERRO:", item["pasta"], e)
            continue
        item.update(status="publicado", publicado_em=agora, media_id=mid, link=link)
        item.pop("erro", None)
        print("PUBLICADO:", item["pasta"], link)
        print("restantes depois desta:", len(candidatos) - 1)
        salvar(fila)
        return
    salvar(fila)
    sys.exit(1)


if __name__ == "__main__":
    main()
