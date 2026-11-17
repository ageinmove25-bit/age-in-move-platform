# Changelog — Age in Move Platform

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
