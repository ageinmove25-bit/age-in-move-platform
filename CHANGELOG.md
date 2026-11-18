# Changelog — Age in Move Platform

## [1.6.0] — 2026-11-18

### Plano de exercícios por paciente
- Novo separador **Plano** no perfil do paciente: atribuir exercícios de qualquer módulo, com versão (Standard / Simples / Criativa), frequência e dose
- Pré-visualização do texto que vai aparecer na ficha
- **Ficha para casa (PDF)**: letra grande para o paciente e o cuidador, instruções da versão escolhida, material, grelha semanal Seg–Dom para marcar, conselhos de segurança e contacto do terapeuta

### Relatório clínico do paciente (PDF)
- Botão **📄 Relatório** no perfil: identificação, gráficos de evolução das escalas com pontos de corte, histórico de avaliações, resumo e lista de sessões, plano em curso, objetivos, notas clínicas, assinatura e aviso de confidencialidade
- No telemóvel, os PDFs abrem a folha **Partilhar** (Guardar em Ficheiros, WhatsApp, Mail…); no computador são descarregados
- Cabeçalho e rodapé de todos os PDFs passam a vir de funções comuns

## [1.5.0] — 2026-11-18

### Instalar no iPhone / Android (app web)
- Ícone Age in Move para o ecrã principal e abertura em ecrã inteiro, sem barras do Safari
- Funciona sem internet depois da primeira abertura (service worker `sw.js`)
- Respeita o notch e a barra inferior do iPhone
- Novos ficheiros: `manifest.webmanifest`, `sw.js`, `icons/`

## [1.4.0] — 2026-11-18

### Versão para telemóvel
- Menu lateral passa a abrir com o botão ☰ no topo e fecha com ✕, ao tocar fora ou ao escolher uma página
- Todas as páginas cabem no ecrã do telemóvel (sem deslocamento lateral da página)
- Cartões e colunas passam a uma coluna; estatísticas do dashboard em grelha 2×2
- Tabelas deslizam lateralmente dentro do seu cartão
- Separadores deslizam lateralmente; janelas (nova sessão, avaliação, evento) abrem a partir de baixo
- Calendário compacto, com lista "Eventos do mês" por baixo para tocar e ver detalhes
- Gráfico de evolução redimensionado para ser legível em ecrã pequeno
- Landing page, preçário e login adaptados; campos com letra de 16px para o iPhone não fazer zoom

## [1.3.0] — 2026-11-17

### Identidade visual azul-noite (alinhada com o Instagram @age_in_move)
- **Novo logótipo**: círculo azul-violeta, anel rosa-lilás aberto e figura branca de braços no ar — em todas as vistas e nos PDFs
- Interface passa do laranja para **azul-noite / azul-violeta**: landing, login, menu lateral, botões, separadores, calendário e gráficos
- "Despertar a Mente." em degradé azul → lilás → rosa; "idade em movimento" em rosa-lilás
- PDFs com cabeçalho e rodapé azul Age in Move

## [1.2.1] — 2026-11-17

### Logótipo
- Logótipo passa ao degradé azul-violeta (substituído na 1.3.0 pelo logótipo do Instagram)

## [1.2.0] — 2026-11-17

### Marca Age in Move
- "GeroCare Pro" substituído por **Age in Move · idade em movimento** em toda a interface, nas fichas HTML e nos PDFs
- Paleta laranja (#FF6200 / #EE2800) nos botões, menus, separadores, calendário e landing page
- Logótipo Age in Move na landing page, no rodapé e no ecrã de login
- Emails de exemplo passam para `@exemplo.pt` (removido o domínio gerocarepro.pt)

### Gráficos de evolução
- Novo cartão **Evolução das Escalas** no separador Avaliações do paciente (MMSE, MoCA, GDS-15, Barthel)
- Linhas de referência clínica (pontos de corte), variação desde a primeira avaliação e detalhe ao passar o rato

### Limpeza e desempenho
- React passa para as versões de produção (mais rápidas) e todas as bibliotecas ficam com versão fixa (React 18.3.1, Babel 7.24.7, jsPDF 2.5.1)
- Ecrã "A carregar…" com a marca enquanto a aplicação arranca
- Removido o ficheiro duplicado `índex base.html` (continua disponível no histórico do Git)

## [1.1.0] — 2026-11-17

### Persistência de dados
- Todos os dados passam a ficar guardados no browser (localStorage, prefixo `aim_v1_`): pacientes, sessões, avaliações, eventos do calendário, fórum, perfil e preferências
- **Novo paciente** grava de facto: valida os campos obrigatórios, calcula a idade a partir da data de nascimento e o risco a partir de MMSE/GDS/Barthel, e regista a avaliação inicial
- **Perfil do paciente**: registar sessões (data, módulo, exercícios, duração, desempenho, notas) e avaliações (MMSE, MoCA, GDS-15, Barthel); editar notas clínicas; eliminar sessões ou o paciente
- **Calendário**: abre no mês atual, eventos com hora e paciente associado, clicar num evento para ver os detalhes ou eliminá-lo
- **Dashboard**: números reais (pacientes, sessões do mês, alertas), próximos eventos e pacientes em risco calculados a partir dos dados
- **Definições → Dados & Backup**: exportar e importar backup em JSON, repor os dados de demonstração, apagar todos os dados
- Perfil profissional e preferências clínicas/notificações passam a ser guardados

## Materiais — 2026-11-17

### Ebooks e PowerPoints
- 7 ebooks em PDF — Coleção "Fatores Psicomotores" (Tonicidade, Equilibração, Lateralização, Noção do Corpo, Estruturação Espácio-Temporal, Praxia Global, Praxia Fina), 6 atividades cognitivo-motoras cada, com ficha de registo
- 6 PowerPoints temáticos para sessões de grupo (Santos Populares, Viagem por Portugal, Na Cozinha da Avó, As Quatro Estações, Música e Memórias, Natal em Família), com respostas nas notas do orador
- Geradores editáveis (`materiais/ebooks/dados.js`, `materiais/powerpoints/temas.js`)

## [1.0.0] — 2026-06-06

### Lançamento inicial

#### Módulos Cognitivos (6 módulos · 40 exercícios)
- Memória e Atenção (8 exercícios)
- Linguagem e Comunicação (6 exercícios)
- Funções Executivas (7 exercícios)
- Orientação Espacial (5 exercícios)
- Habilidades Visuo-Espaciais (6 exercícios)
- Praxias e Motricidade (8 exercícios)

#### Módulos Físicos (5 módulos · 35 exercícios)
- Equilíbrio e Prevenção de Quedas (8 exercícios)
- Força e Prevenção da Sarcopenia (8 exercícios)
- Mobilidade e Flexibilidade (7 exercícios)
- Exercício Aeróbico Adaptado (6 exercícios)
- Coordenação e Dupla Tarefa (6 exercícios)

#### Funcionalidades
- Dashboard com sessões do dia e alertas de risco
- Gestão de 5 pacientes de demonstração
- Calendário clínico com eventos
- Fórum clínico (5 tópicos)
- PDF real (jsPDF) com branding Age in Move
  - 3 variantes por exercício (Simples / Standard / Criativa)
  - Plano de progressão 8 semanas
  - Referências científicas
- Preçário (Básico €0 / Profissional €29 / Clínica €79)
- Landing page com slogan "Mover o Corpo. Despertar a Mente. Cuidar com Propósito."

#### Branding
- Logótipo Age in Move gerado via Canvas (blob orgânico + figura dançante + coração)
- Slogan: "idade em movimento" · @age_in_move
- Integrado em cabeçalho/rodapé de todos os PDFs
