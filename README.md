# Personal CS — Explore

A connected computer-science knowledge atlas inspired by the Blue Celerity Knowledge Map, redesigned as the Explore layer of a personal CS knowledge ecosystem.

## Stack

- React + TypeScript + Vite
- Material Symbols Rounded
- Responsive desktop/mobile UI
- GitHub Actions + GitHub Pages

## Explore modes

- **Atlas** — spatial knowledge universe
- **Structured View** — accessible hierarchical alternative
- **Learning Paths** — entry point for guided exploration

## Development

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the Vite app and deploys `dist` to GitHub Pages.

## GitHub Pages

Expected deployment URL:

https://sambaseness.github.io/idle/
