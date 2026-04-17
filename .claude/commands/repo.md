# /repo
## Git Workflow
- **Main:** `main` (protected, no direct commits)
- **Branches:** `feature/<name>`, `fix/<issue>`, `release/<version>`
- **Strategy:** Squash merge, linear history

## Commits (Conventional)
Format: `<type>(<scope>): <description>`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Examples:
  ✅ `feat(ui): add responsive header with Vibecoding tokens`
  ✅ `fix(auth): resolve login redirect loop`
  ❌ `fixed stuff`, `update code`

## Pre-PR Checklist
1. `npm run test` → all pass, ≥80% coverage for features/widgets
2. `npm run lint` → 0 errors, Prettier applied
3. `npm run build` → 0 TS errors, dist generated
4. `/check-design` → 0 hardcoded values, tokens compliant
5. Update `CHANGELOG.md` if `feat`/`fix`

## PR Rules
- Title: Conventional format
- Description: What changed / Why / Testing done / Screenshots (UI) / Linked issue
- Requirements: ≥1 approval, CI green, no conflicts