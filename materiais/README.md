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
node ebooks/exportar-para-app.js       # copia os textos dos ebooks para a app (Biblioteca e plano)
```

Depois de editar `ebooks/dados.js`, corra também `exportar-para-app.js` para a Biblioteca da app ficar igual aos PDFs.
