# /ui
## Vibecoding Design System — Strict Rules

### 🎨 Colors & Backgrounds (from references/design-tokens.json)
- **Accent:** `red (#FF2159)`, `yellow (#F0FF40)` → use `var(--color-accent-red)` / `var(--color-accent-yellow)`
- **Monochrome:** `black (#222222) → white (#FFFFFF)` → use `var(--color-monochrome-*)`
- **🚫 STRICT BACKGROUND RULE:** 
  - Page, section, wrapper, and card backgrounds MUST be `white` (`#FFFFFF` or `bg-white`).
  - NEVER use dark monochrome tones (`#222222`, `#424242`, `#787878`, etc.) for any background layer.
  - Dark colors are ONLY allowed for: text, icons, borders, hover/active states, or explicit overlays/modals.
  - If visual separation is needed, use `extra-light-gray` (`#F4F4F4`), NEVER dark/gray backgrounds.
- NEVER hardcode hex values. NEVER use opacity directly in CSS; use token variants.

### 📏 Spacing (8px Grid)
- `xs: 4px` | `sm: 8px` | `md: 16px` | `lg: 24px` | `xl: 32px` | `2xl: 48px`
- Use `var(--spacing-*)` or Tailwind equivalents mapped to tokens. NO arbitrary `px`.

### 📐 Breakpoints
- **Mobile:** 320-719px → 4 columns, 20px margin/gap
- **Tablet:** 720-1279px → 12 columns, 40px margin/gap
- **Desktop:** 1280-1679px → 12 columns, 80px margin/gap
- **Desktop-lg:** 1680px+ → 12 columns, 120px margin/gap

### 🧩 Component Specs
- **Button:** 40px height, 8px radius, 600 weight, hover: opacity 0.85 + translateY(-1px)
- **Card:** 24px padding, 12px radius, shadow-md, **bg: white** (strictly no dark/gray fills)
- **Input:** 40px height, 8px radius, border light-gray, focus: ring primary/20, **bg: white**
- **Section/Wrapper:** Always `bg-white` or `bg-extra-light-gray`. Padding follows 8px grid.

### ✅ Validation Checklist
Before marking UI task complete:
1. ☐ NO hardcoded colors/spacing
2. ☐ NO dark backgrounds on pages/sections/cards (white/light-only rule enforced)
3. ☐ Responsive breakpoints implemented
4. ☐ Hover/focus/disabled states defined
5. ☐ Semantic HTML structure matches reference
6. ☐ WCAG 2.1 AA contrast & keyboard navigation
Run `/check-design` to validate before commit.