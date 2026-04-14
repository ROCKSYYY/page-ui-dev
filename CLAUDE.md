# Claude Code — Project Guide

This repository is a Vue 3 + TypeScript project structured with **Feature-Sliced Design (FSD)**.

## Architecture (STRICT)

Slices:
- `app/`: app initialization (router, store setup, providers, global styles)
- `pages/`: route-level pages
- `widgets/`: large UI blocks composing pages
- `features/`: user scenarios (auth, search, filters)
- `entities/`: business entities (User, Product, Order)
- `shared/`: reusable infrastructure (ui, lib, api, config, types)

Rules of dependency direction:
- `shared` → used by anyone
- `entities` → may use `shared`
- `features` → may use `entities` and `shared`
- `widgets` → may use `features`, `entities`, `shared`
- `pages` → may use `widgets`, `features`, `entities`, `shared`
- `app` → wires everything together; avoid putting domain logic here

## Commands

- Install: `npm i`
- Dev: `npm run dev`
- Typecheck: `npm run typecheck`
- Test: `npm run test:run`
- Lint: `npm run lint`
- Format: `npm run format:fix`

## Design references

Use the files in `references/` as the single source of truth for:
- design tokens: `references/design-tokens.json`
- UI kit expectations: `references/ui-kit.md`
- HTML reference: `references/design-reference.html`

## Output expectations

- Use Vue 3 Composition API with `<script setup lang="ts">`
- Keep TypeScript in strict mode
- Keep FSD boundaries (no cross-imports that break direction)
- Prefer `@/` alias for `src/`

