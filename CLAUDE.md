# 🏗 Architecture: FSD (Feature-Sliced Design)
- **Strict layering:** `app → pages → widgets → features → entities → shared`
- **NO cross-layer imports:** Lower layers CANNOT import from higher layers
- **Shared is dumb:** UI components, utils, API clients, types ONLY. No business logic.
- **Features:** User-facing interactions (forms, auth, search, filters)
- **Entities:** Business objects with models/types (User, Product, Order)
- **Widgets:** Complex blocks combining features (Header, Sidebar, ProductCard)
- **Pages:** Route-level components that compose widgets

# 🎨 Design System: Vibecoding Kit
- **Tokens:** `references/design-tokens.json`
- **Guidelines:** `references/ui-kit.md`
- **Strict Rules:**
  - ONLY use CSS variables from tokens (`var(--color-accent-red)`, `var(--spacing-md)`)
  - NEVER hardcode `#hex`, `px`, or arbitrary Tailwind values (`w-[317px]`)
  - Follow 8px grid system strictly
  - Respect breakpoints: mobile (320-719px), tablet (720-1279px), desktop (1280-1679px), desktop-lg (1680px+)
- **Workflow:** Run `/load-ui` before UI tasks. Run `/ui` to verify rules.

# 🛠 Vue 3 + TypeScript Conventions
- **API Style:** Composition API with `<script setup lang="ts">` ONLY
- **Typing:** Strict mode, no `any`, explicit prop/emits types
- **Props:** `defineProps<{ modelValue: string }>()` + `withDefaults()` for optionals
- **Emits:** `defineEmits<{ (e: 'update:modelValue', v: string): void }>()`
- **Composables:** `useSomething()` prefix, camelCase, return reactive refs
- **Styling:** Tailwind utility classes in templates. NO scoped CSS unless truly required.

# 🚫 Anti-Patterns (NEVER DO)
- Options API (`data()`, `methods: {}`)
- Runtime props (`defineProps(['title'])`)
- Missing emits typing or `@ts-ignore` without comment
- Hardcoded colors/spacings or inline styles
- Wrapper `<div>` soup without semantic meaning
- Importing from higher FSD layers

# ✅ Quality & Workflow
- Tests: Vitest + Vue Test Utils (features/widgets require coverage)
- Lint/Format: ESLint + Prettier (auto-fix on save)
- Pre-commit: `/check-design` → `/repo` → `npm run test` → `npm run lint` → `npm run build`