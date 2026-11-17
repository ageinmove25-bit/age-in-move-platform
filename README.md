# Age in Move — Plataforma Clínica GeroCare Pro

> **"idade em movimento"** · @age_in_move

Plataforma clínica integrada de **exercício físico** e **estimulação cognitiva** para terapeutas que trabalham com populações geriátricas.

## Funcionalidades

- 🧠 **6 módulos cognitivos** — Memória, Linguagem, Executivas, Espacial, Visuo-Espacial, Praxias
- 🏃 **5 módulos físicos** — Equilíbrio, Força, Mobilidade, Aeróbico, Coordenação
- 📊 **Dashboard clínico** com alertas de risco e escalas validadas (MMSE, MoCA, GDS, Barthel)
- 👥 **Gestão de pacientes** — historial, avaliações, sessões, cuidadores
- 📅 **Calendário clínico** com agendamento de sessões
- 💬 **Fórum profissional** para partilha clínica
- 📥 **PDFs profissionais** com branding Age in Move — 3 variantes por exercício (Simples / Standard / Criativa)
- 💶 **Preçário** — Básico (€0), Profissional (€29/mês), Clínica (€79/mês)

## Materiais (ebooks e PowerPoints)

A pasta [`materiais/`](materiais/README.md) tem 7 ebooks em PDF (coleção *Fatores Psicomotores*) e 6 PowerPoints temáticos para sessões de grupo.

## Como usar

Abrir `index.html` diretamente no browser (Chrome/Edge recomendado).

Não requer instalação, servidor ou base de dados.

## Estrutura

```
age-in-move-platform/
├── index.html          # Aplicação completa (self-contained)
├── README.md           # Esta documentação
├── CHANGELOG.md        # Histórico de alterações
└── backups/            # Versões anteriores
```

## Tecnologias

- React 18 (CDN)
- jsPDF 2.5 (geração de PDF real)
- CSS puro (sem frameworks)
- HTML5 Canvas (logótipo Age in Move)

## Branding

- **Marca:** Age in Move
- **Slogan:** idade em movimento
- **Handle:** @age_in_move
- **Cores:** Laranja (#FF6200) · Vermelho-laranja (#EE2800)

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

*GeroCare Pro © 2026 · gerocarepro.pt*
