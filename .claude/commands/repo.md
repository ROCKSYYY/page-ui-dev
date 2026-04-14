# repo

## Goal
Quickly understand the repository: stack, architecture, and important conventions.

## What to look at first
- `CLAUDE.md` for architecture rules (FSD boundaries)
- `references/` for design inputs
- `package.json` scripts + tooling
- `src/app/` for initialization (router, store, global styles)

## Working conventions
- Prefer small, focused commits (if committing is requested).
- Keep changes within the correct FSD slice.
- Run `npm run typecheck` and `npm run test:run` after meaningful changes.

