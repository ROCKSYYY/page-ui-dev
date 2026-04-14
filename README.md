# page-ui-dev

Production-ready **Vue 3 + TypeScript** frontend starter with **FSD architecture** and **Claude Code** integration.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- TypeScript (strict)
- Vite
- Tailwind CSS
- Pinia
- Vue Router
- Vitest + Vue Test Utils
- ESLint (flat config) + Prettier

## Architecture (FSD)

`src/` is organized as:
- `app/` init (router, store, global styles)
- `pages/` route pages
- `widgets/` complex blocks
- `features/` user scenarios
- `entities/` domain entities
- `shared/` reusable ui/lib/api/config/types

See `CLAUDE.md` for strict dependency direction rules.

## Getting started

```bash
npm i
npm run dev
```

## Useful commands

```bash
npm run typecheck
npm run test:run
npm run lint
npm run format:fix
```
