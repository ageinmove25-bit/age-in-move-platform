# Age in Move — Plataforma Clínica

> **"idade em movimento"** · @age_in_move

Plataforma clínica integrada de **exercício físico** e **estimulação cognitiva** para terapeutas que trabalham com populações geriátricas.

## Funcionalidades

- 🧠 **6 módulos cognitivos** — Memória, Linguagem, Executivas, Espacial, Visuo-Espacial, Praxias
- 🏃 **5 módulos físicos** — Equilíbrio, Força, Mobilidade, Aeróbico, Coordenação
- 📊 **Dashboard clínico** com alertas de risco e escalas validadas (MMSE, MoCA, GDS, Barthel)
- 📈 **Gráficos de evolução** das escalas por paciente
- 💾 **Dados guardados no browser** com exportação/importação de backup
- 👥 **Gestão de pacientes** — historial, avaliações, sessões, cuidadores
- 📅 **Calendário clínico** com agendamento de sessões
- 💬 **Fórum profissional** para partilha clínica
- 📥 **PDFs profissionais** com branding Age in Move — 3 variantes por exercício (Simples / Standard / Criativa)
- 💶 **Preçário** — Básico (€0), Profissional (€29/mês), Clínica (€79/mês)

## Como usar

Abrir `index.html` diretamente no browser (Chrome/Edge recomendado).

Não requer instalação, servidor ou base de dados.

### Instalar no iPhone

1. No iPhone, abrir no **Safari**: https://ageinmove25-bit.github.io/age-in-move-platform/
2. Tocar no botão **Partilhar** (quadrado com seta para cima)
3. Escolher **Adicionar ao ecrã principal** → **Adicionar**

A app fica com o ícone Age in Move, abre em ecrã inteiro e funciona sem internet depois da primeira abertura.
Os dados da app instalada ficam separados dos do Safari: use **Definições → Dados & Backup** para os passar de um lado para o outro.

### Onde ficam os dados

Tudo o que é registado (pacientes, sessões, avaliações, calendário, fórum, perfil) fica guardado **automaticamente no browser**, neste computador (localStorage). Nada é enviado para servidores.

- Limpar o histórico/dados do browser **apaga** os registos — exporte um backup regularmente em **Definições → Dados & Backup**.
- O ficheiro de backup (`.json`) também serve para passar os dados para outro computador ou browser.
- Para começar com dados reais: **Definições → Dados & Backup → Apagar todos os dados**.

## Estrutura

```
age-in-move-platform/
├── index.html          # Aplicação completa (self-contained)
├── manifest.webmanifest # Instalação como app (ecrã principal)
├── sw.js               # Funcionamento offline
├── icons/              # Ícones da app
├── README.md           # Esta documentação
├── CHANGELOG.md        # Histórico de alterações
└── backup.bat          # Script de backup local (Windows)
```

## Tecnologias

- React 18.3.1 (CDN, versão de produção)
- Babel Standalone 7.24.7 (JSX no browser)
- jsPDF 2.5 (geração de PDF real)
- CSS puro (sem frameworks)
- HTML5 Canvas (logótipo Age in Move)

## Branding

- **Marca:** Age in Move
- **Slogan:** idade em movimento
- **Handle:** @age_in_move
- **Cores:** Azul-noite (#16224F) · Azul (#4361EE) · Violeta (#6D4CE0) · Rosa-lilás (#E58BD3)
- **Logótipo:** círculo azul-violeta com anel rosa-lilás e figura branca de braços no ar

## Conformidade RGPD

Esta versão contém apenas dados de demonstração.
Para uso clínico real, ver secção **Segurança** abaixo.

## Segurança (produção)

- [ ] Autenticação real (OAuth2 / JWT)
- [ ] Base de dados encriptada (não localStorage)
- [ ] HTTPS obrigatório
- [ ] Registo de acessos (audit log)
- [ ] Backup diário automatizado
- [ ] DPA (Data Processing Agreement) com fornecedor de hosting
- [ ] Política de privacidade publicada
- [ ] Nomeação de DPO (se aplicável)

---

*Age in Move © 2026 · idade em movimento · @age_in_move*
