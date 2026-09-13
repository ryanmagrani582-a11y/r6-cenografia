# R6 Cenografia — Fundação

Base técnica da experiência digital premium. Hero definitivo e páginas
completas chegam nas próximas etapas.


## Comandos

```bash
npm run dev
npm run build
npm run lint
```

## Estrutura

- `src/app` — `/`, `/projetos`, `/projetos/[slug]`, `/servicos`, `/sobre`, `/contato`
- `src/components/{layout,ui,animation}` — base minima reutilizavel
- `src/content` — dados institucionais + 3 placeholders de cases
- `src/lib` — `utils`, `constants`, base GSAP (`src/lib/gsap.ts`)
- `src/hooks` — `usePrefersReducedMotion`
- `src/types` — contratos TypeScript
- `public/images/placeholders` — capas SVG temporarias

## Tokens

Ver `src/app/globals.css`: void `#050505`, coal `#0B0B0B`, surface
`#111111`, bone `#F5F5F5`, muted `#9A9A9A`, acid `#F96423`
(cor institucional laranja), bordas `rgba(255,255,255,0.10)`.
Tipografia Space Grotesk + Inter via `next/font`. Layout:
`.r6-container`, `.r6-section`, `.r6-grid-12`.

## Pendencias reais

- `src/content/company.ts`: e-mail, telefone e endereco reais.
- `src/content/projects.ts`: substituir 3 placeholders por cases reais.
- Proximas etapas: Hero, menu, animacoes de scroll, paginas completas.

