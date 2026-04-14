# ui

## Goal
Implement UI components in `src/shared/ui/` aligned with design references.

## Inputs
- Tokens: `references/design-tokens.json`
- UI kit notes: `references/ui-kit.md`
- Reference markup: `references/design-reference.html`

## Output rules
- Components live in `src/shared/ui/<component>/ui/*.vue`
- Public API re-export from `src/shared/ui/<component>/index.ts`
- Tailwind-first styling; avoid custom CSS unless necessary
- Accessibility first: focus states, labels, keyboard, aria when needed

