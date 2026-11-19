# Ligar ageinmove.pt e ageinmove.com à Age in Move

Endereço principal: **https://ageinmove.pt**. O **ageinmove.com** redireciona para ele.
O site continua alojado no GitHub Pages (grátis, com HTTPS); só muda o endereço.

> ⚠️ **Antes de tudo: exporte os seus dados.**
> Os dados da app ficam guardados no browser *por endereço*. Quando o site passar para ageinmove.pt,
> o endereço antigo (ageinmove25-bit.github.io) é redirecionado e a app deixa de conseguir ver os dados guardados lá.
> 1. Em cada aparelho onde usa a app (computador, iPhone): **Definições → Dados & Backup → Exportar backup**.
> 2. Depois da mudança, abra **https://ageinmove.pt**, entre e use **Importar backup**.
> 3. No iPhone, apague o ícone antigo do ecrã principal e volte a instalar a partir de https://ageinmove.pt (Safari → Partilhar → Adicionar ao ecrã principal).

## 1. DNS do ageinmove.pt (no sítio onde registou o domínio)

Apague os registos A/AAAA/CNAME antigos do domínio principal e de `www`, se existirem, e crie:

| Tipo | Nome / Host | Valor |
|---|---|---|
| A | `@` (ou vazio) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `ageinmove25-bit.github.io` |

Os registos de email (MX) não se mexem.

## 2. ageinmove.com → ageinmove.pt

No painel do registo do **.com**, crie um **redirecionamento (URL forwarding) permanente (301)**:
- `ageinmove.com` → `https://ageinmove.pt`
- `www.ageinmove.com` → `https://ageinmove.pt`

(O GitHub Pages só serve um domínio por site; o segundo tem de ser redirecionado no registo.)

## 3. GitHub

1. Junte as alterações ao ramo `main` (o ficheiro `CNAME` com `ageinmove.pt` já está no repositório).
2. No repositório: **Settings → Pages → Custom domain**: confirme `ageinmove.pt` e carregue em **Save**.
3. Espere a verificação de DNS (de minutos a algumas horas) e ative **Enforce HTTPS**.
4. Recomendado: em **github.com → Settings (da conta) → Pages → Add a domain**, verifique `ageinmove.pt` com o registo TXT indicado. Impede que outra pessoa use o domínio noutro repositório.

## 4. Google

1. Em **Google Search Console**, adicione a propriedade de domínio `ageinmove.pt` (verificação por registo TXT no DNS).
2. Em **Sitemaps**, submeta `https://ageinmove.pt/sitemap.xml`.

## Depois

- A app passa a estar em https://ageinmove.pt, o teste grátis em https://ageinmove.pt/#teste
  e as páginas por condição em https://ageinmove.pt/condicoes/.
- Os links da família criados a partir daqui usam ageinmove.pt.
