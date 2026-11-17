# Changelog — Age in Move Platform

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
