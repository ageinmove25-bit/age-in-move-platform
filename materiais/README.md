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
  (botões, molas, panos, moedas, lã, frascos — sem alimentos), cada uma com fotografia, custo, o que preparar, passo a passo
  com **o que fazer** e **o que dizer**, 3 níveis (mais apoio / algum apoio / autónomos), segurança e o que fazer se correr mal.
- `powerpoints/pptx/v2/natal-em-familia.pptx` — **Natal em Família**: fotografias reais grandes, uma ideia por diapositivo,
  2–3 opções no máximo, resposta mostrada logo a seguir, notas com o que dizer e como adaptar,
  diapositivo oculto "Para o animador" e créditos das fotografias.

Conteúdos: `ebooks/v2/*.js` e `powerpoints/v2/*.js`. Gerar: `node ebooks/v2/gerar.js` e `node powerpoints/v2/gerar.js`.

### Fotografias
Fotografias do Wikimedia Commons com licenças livres (CC0, CC BY, CC BY-SA), em `fotos/img/`.
Autor e licença de cada uma em `fotos/creditos.json`; os créditos aparecem no fim de cada ebook e PowerPoint e **não devem ser removidos**.
Para trocar uma fotografia: `node fotos/procurar.js <pasta> "chave|pesquisa"`, escolher, editar `fotos/escolhidas.json` e correr `node fotos/descarregar.js`.

### Fichas de atividade (`fichas/pdf/`)
- `lanca-o-dado.pdf` — **Lança o Dado**: jogo de grupo com exercícios sentados (dado grande de espuma + tabuleiro).
  Guia do animador (2 páginas, com 3 níveis, variantes e registo) + tabuleiro "Dado dos Exercícios" + tabuleiro "Dado das Palavras"
  para dupla tarefa. Imprimir os tabuleiros em A3 se possível. Conteúdo em `fichas/lanca-o-dado.js`; gerar com `node fichas/gerar.js`.

- `bola-a-dois.pdf` — **Bola a Dois**: em pares, sentados frente a frente, segurar uma bola leve (ou balão) entre as palmas e movê-la juntos.
  Guia do animador (2 páginas) + cartão "Movimentos" (6 trajetórias desenhadas) + cartão "Letras no ar".

- `sem-esmagar-a-bola.pdf` — **Sem Esmagar a Bola**: força das pernas junto à cadeira (pairar, subir e descer, um pé à frente),
  com bola pequena no assento como referência. Guia (2 páginas, nível 1 totalmente sentado) + cartão "Os 3 passos" com desenhos.

- `pista-dos-pontos.pdf` — **A Pista dos Pontos** (combinada): pista de esparguetes de piscina com pratos numerados (10–100); rolar a bola com o pé ou a mão e somar os pontos.
  Inclui números para colar nos pratos e placar.
- `duas-maos.pdf` — **Duas Mãos, Duas Tarefas** (combinada): peso leve numa mão e bola de ténis na outra, cada mão faz uma coisa diferente.
  Cartão com 6 combinações, da mais fácil à mais difícil (incluindo regras com números).
- `escada-das-decisoes.pdf` — **A Escada das Decisões** (combinada): escada de fita-cola no chão com setas; em cada casa, decidir e dar o passo certo.
  Versão de pé (Grupo 1) e sentada (Grupo 2). Cartão de montagem + 6 cartões de setas.
- `tres-com-a-bola.pdf` — **Três com a Bola** (física): sentado, com bola pequena — passar por baixo da perna, pressionar com o pé, rolar em linha reta.
- `caras-divertidas.pdf` — **Caras Divertidas** (combinada): segurar uma cara de cartão à frente do rosto e pôr olhos, nariz e boca sem ver.
  Inclui 12 peças para recortar e o molde da cara.
- `circuito-das-maos.pdf` — **Circuito das Mãos** (física): 5 estações de motricidade fina com materiais baratos (pinça e rolhas, pompons na grelha, "come-come" com bola de ténis, tesouros na plasticina, pompons entre os dedos).
- `equilibrio-sem-aborrecer.pdf` — **Equilíbrio sem Aborrecer** (física): circuito de 5 estações, de sentado a levantar do chão (esta só com fisioterapeuta).
- `bola-no-sapato.pdf` — **A Bola no Sapato** (reabilitação após AVC, só com fisioterapeuta): disco de plástico preso ao sapato com uma bola em cima, como aviso para controlar o pé durante a marcha.
- `postits-parkinson.pdf` — **5 Exercícios com Post-its** (doença de Parkinson): post-its como alvos para movimentos amplos — alvos na parede, levantar e rodar, levantar a anca sentado, passo à frente e atrás, marcha com pés afastados.
- `trave-do-equilibrio.pdf` — **A Trave do Equilíbrio** (física): equilíbrio dinâmico numa "trave" de fita-cola ou toalha — andar com garrafas, rolar a bola aos cones, apanhar cones.
- `pe-que-nao-arrasta.pdf` — **O Pé que Não Arrasta** (pé pendente, só com fisioterapeuta): passar cones e bloco, joelho à frente, pontas para cima na parede, descolar da parede.
- `roda-dos-baloes.pdf` — **A Roda dos Balões** (combinada, residentes + colaboradores): roda ligada por balões entre as mãos, seguir instruções sem deixar cair (ninguém é eliminado). 6 cartões de instruções.
- `tronco-forte-deitado.pdf` — **Tronco Forte, Deitado** (física): 5 exercícios de tronco na cama ou colchão — báscula + marcha, deslizar o calcanhar, cortar lenha, rodar os joelhos, tocar nos alvos. Indicada também para acamados.
- `coordenacao-parkinson.pdf` — **Coordenação em Parkinson** (física): em pares — passar a bola, duas bolas, rodar e pôr no poste, bola nos pés, a estrela de obstáculos.
- `demencia-em-acao.pdf` — **Demência em Ação** (combinada): 4 estações — cartas partidas, bola ao cone numerado, sopa de letras de pé, pedalar pelo alfabeto — cada uma com versão mais fácil e mais difícil. Inclui sopa de letras para imprimir.
- `nao-cair-para-tras.pdf` — **Não Cair para Trás** (retropulsão, só com fisioterapeuta): alcançar sentado, rolar a bola e levantar, descolar da parede, levantar contra o elástico, anca à frente ajoelhado.

Todas as fichas indicam **para que grupos de dependência** se adequam (físico e cognitivo) e em que ebook da coleção encaixam. O registo está numa página própria.

Regra destes materiais: **nenhuma atividade usa alimentos**.

## 📚 Versão 3 (atual): ebooks por tipo de atividade e grau de dependência

9 ebooks = 3 tipos × 3 grupos (ver `ebooks/v3/colecao.js`):

| | Grupo 1 / A · autónomos | Grupo 2 / B · dependência moderada | Grupo 3 / C · dependência grave |
|---|---|---|---|
| **Físicas** (Barthel) | Em Forma | **Corpo em Movimento** ✅ | Movimento Suave |
| **Cognitivas** (MMSE / GDS-R) | Mente Desperta | **Mente Ativa** ✅ | Sentidos e Memórias |
| **Combinadas** (grupo mais limitativo) | **Corpo e Mente** ✅ | Mexer e Pensar | Toque e Ritmo |

✅ = já feito, em `ebooks/pdf/v3/`. Grupos físicos pelo Índice de Barthel (91–100 / 61–90 / 0–60);
grupos cognitivos pelo MMSE ajustado à escolaridade (Morgado et al., 2009) e pela Escala de Deterioração Global de Reisberg.
Ilustrações em `lib/ilustracoes.js`. Gerar: `node ebooks/v3/gerar.js`.

## 📕 Volumes (ebooks que juntam fichas) — `volumes/pdf/`

- `parkinson-e-avc.pdf` — **Parkinson e AVC**: capa, introdução (dicas práticas para cada condição), índice e as fichas
  5 Exercícios com Post-its · Coordenação em Parkinson · Não Cair para Trás · A Bola no Sapato · O Pé que Não Arrasta.

**Para acrescentar fichas a um volume:** juntar o nome da ficha (ficheiro em `fichas/`, sem `.js`) à lista `fichas`
da secção certa em `volumes/colecoes.js` e correr `node fichas/gerar.js && node volumes/gerar.js`.
O índice e os números de página atualizam-se sozinhos. Para criar um volume novo, copiar um bloco em `colecoes.js`.
