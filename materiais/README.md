# Materiais Age in Move — Ebooks e PowerPoints

## 📘 Ebooks — Coleção "Fatores Psicomotores" (`ebooks/pdf/`)

7 volumes em PDF (A4, 11 páginas cada), um por fator psicomotor (modelo de Vítor da Fonseca).
Cada volume tem 6 atividades que juntam o fator psicomotor a funções cognitivas.

| Vol. | Fator | Ficheiro |
|---|---|---|
| 1 | Tonicidade | `Vol1-tonicidade.pdf` |
| 2 | Equilibração | `Vol2-equilibracao.pdf` |
| 3 | Lateralização | `Vol3-lateralizacao.pdf` |
| 4 | Noção do Corpo | `Vol4-nocao-do-corpo.pdf` |
| 5 | Estruturação Espácio-Temporal | `Vol5-estruturacao-espacio-temporal.pdf` |
| 6 | Praxia Global | `Vol6-praxia-global.pdf` |
| 7 | Praxia Fina | `Vol7-praxia-fina.pdf` |

Cada volume tem: capa, como usar e regras de segurança, explicação do fator (o que é, como muda com a idade, sinais a observar, objetivos),
6 atividades (objetivo, funções cognitivas, duração, nível, posição, materiais, passos, como facilitar e dificultar, dica, espaço para notas),
ficha de registo para fotocopiar e referências.

## 📊 PowerPoints temáticos (`powerpoints/pptx/`)

6 apresentações (16:9, 15–16 diapositivos) para sessões de grupo de 45–60 min, cada uma com cores e tipos de letra próprios:

- `santos-populares.pptx` — Santos Populares
- `viagem-por-portugal.pptx` — Viagem por Portugal
- `cozinha-da-avo.pptx` — Na Cozinha da Avó
- `quatro-estacoes.pptx` — As Quatro Estações
- `musica-e-memorias.pptx` — Música e Memórias
- `natal-em-familia.pptx` — Natal em Família

Todas seguem a mesma estrutura de sessão: orientação → aquecimento → memorizar → perguntas → intruso → qual desapareceu? →
provérbios → pôr por ordem → (ligar os pares) → movimento com dupla tarefa → cálculo → conversa (reminiscência) → relaxamento → soluções.
As respostas e as orientações para quem dinamiza estão nas **notas do orador** e no último diapositivo (que pode ser ocultado).

## Editar e voltar a gerar

O conteúdo está em ficheiros de texto fáceis de editar:

- `ebooks/dados.js` — textos dos ebooks
- `powerpoints/temas.js` — conteúdos dos PowerPoints (para criar um tema novo, copie um bloco e altere-o)

```bash
cd materiais
npm install
node ebooks/gerar-ebooks.js          # todos os ebooks (ou: node ebooks/gerar-ebooks.js tonicidade)
node powerpoints/gerar-powerpoints.js  # todos os PowerPoints (ou: ... natal-em-familia)
```

## ✨ Versão 2 (em teste): fotografias reais e três níveis

Novo modelo, para **animadores e auxiliares**, adaptado a pessoas autónomas, com défice cognitivo ligeiro,
com demência ligeira a moderada e residentes em lar (tudo sentado).

- `ebooks/pdf/v2/Vol7-praxia-fina.pdf` — **Mãos Ativas** (Praxia Fina): 6 atividades com materiais de casa
  (feijão, molas, panos, moedas, massa, frascos), cada uma com fotografia, custo, o que preparar, passo a passo
  com **o que fazer** e **o que dizer**, 3 níveis (mais apoio / algum apoio / autónomos), segurança e o que fazer se correr mal.
- `powerpoints/pptx/v2/natal-em-familia.pptx` — **Natal em Família**: fotografias reais grandes, uma ideia por diapositivo,
  2–3 opções no máximo, resposta mostrada logo a seguir, notas com o que dizer e como adaptar,
  diapositivo oculto "Para o animador" e créditos das fotografias.

Conteúdos: `ebooks/v2/*.js` e `powerpoints/v2/*.js`. Gerar: `node ebooks/v2/gerar.js` e `node powerpoints/v2/gerar.js`.

### Fotografias
Fotografias do Wikimedia Commons com licenças livres (CC0, CC BY, CC BY-SA), em `fotos/img/`.
Autor e licença de cada uma em `fotos/creditos.json`; os créditos aparecem no fim de cada ebook e PowerPoint e **não devem ser removidos**.
Para trocar uma fotografia: `node fotos/procurar.js <pasta> "chave|pesquisa"`, escolher, editar `fotos/escolhidas.json` e correr `node fotos/descarregar.js`.
