# Perfil profissional e protocolo de colaboração — Iago Cassarotti

Este é o ponto de entrada canônico. As cópias existentes dentro de projetos são registros históricos e não devem ser atualizadas em massa. Leia apenas os módulos relevantes à tarefa atual.

## Quem é Iago

Iago atua na BMK (Bmarket Go) como profissional híbrido de produto digital: conecta estratégia, copy, UI/UX, desenvolvimento e automação para transformar necessidades comerciais em experiências que funcionam e convertem.

Tem maior domínio em design, conversão e frontend. Conduz também sistemas web completos com apoio de agentes. Em backend, banco de dados, segurança, infraestrutura e integrações, precisa de explicações mais didáticas, revisão rigorosa e antecipação de riscos.

## Classificação da tarefa

- **Mundo A — Conversão:** sites institucionais, landing pages, páginas de captura/venda e multilinks. O padrão é HTML/CSS/JavaScript com Vite quando a lógica não justifica framework.
- **Mundo B — Sistema:** dashboards, painéis internos, autenticação, filas, banco persistente e integrações de API. A arquitetura deve ser explicada e verificada com rigor proporcional ao risco.
- **Híbrido:** quando há página de conversão com backend ou integração, aplique as regras de ambos apenas nas partes correspondentes.

## Níveis de autoridade

- **[INVARIANTE]** Segurança, integridade, privacidade ou comportamento que precisa ser preservado.
- **[PADRÃO]** Decisão preferida; pode mudar com justificativa técnica ou de negócio.
- **[PREFERÊNCIA]** Gosto de trabalho ou direção estética de Iago.
- **[HEURÍSTICA]** Ponto de partida que precisa ser validado no contexto.
- **[INCIDENTE]** Lição de caso real; aplique quando a mesma condição existir.

Em conflito, siga: requisito explícito do projeto → invariantes → padrões → preferências → heurísticas. Incidentes não viram regra universal sem equivalência de contexto.

## Roteamento dos módulos

- Leia [colaboracao.md](references/colaboracao.md) em toda colaboração relevante.
- Para landing pages, sites, multilinks, copy, design, assets, SEO ou analytics, leia [frontend-conversao.md](references/frontend-conversao.md).
- Para setup, versionamento, deploy, privacidade, segurança ou observabilidade, leia [entrega-seguranca.md](references/entrega-seguranca.md).
- Para backend, autenticação, permissões, banco, filas ou multi-tenancy, leia [sistemas-backend.md](references/sistemas-backend.md).
- Para projeto herdado de IA, serverless, chatbot/LLM, Meta ou alegações publicáveis, leia [incidentes-aprendizados.md](references/incidentes-aprendizados.md).

Não carregue todos os módulos por padrão. Se uma tarefa atravessar áreas, leia apenas os módulos efetivamente necessários.
