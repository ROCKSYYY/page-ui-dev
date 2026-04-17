<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'yellow' | 'pink' | 'ghost-light' | 'ghost-dark'
    size?: 'md' | 'sm'
    href?: string
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'yellow',
    size: 'md',
    type: 'button',
  },
)

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :type="href ? undefined : type"
    class="ui-btn"
    :class="[`ui-btn--${variant}`, size === 'sm' ? 'ui-btn--sm' : '']"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  border-radius: 8px;
  height: 40px;
  padding: 0 var(--spacing-xl);
  font-family: var(--font);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: nowrap;
  transition: var(--t2);
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.ui-btn:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.ui-btn:active {
  transform: scale(0.98);
}

.ui-btn:focus-visible {
  outline: 2px solid var(--color-accent-yellow);
  outline-offset: 3px;
}

.ui-btn--sm {
  height: 34px;
  padding: 0 var(--spacing-lg);
  font-size: 13px;
}

.ui-btn--yellow {
  background: var(--color-accent-yellow);
  color: var(--color-mono-black);
}

.ui-btn--pink {
  background: var(--color-accent-red);
  color: var(--color-mono-white);
}

.ui-btn--ghost-light {
  background: transparent;
  color: var(--color-mono-white);
  border: 1.5px solid var(--white-a20);
}

.ui-btn--ghost-dark {
  background: transparent;
  color: var(--color-mono-black);
  border: 1.5px solid var(--black-a15);
}

.ui-btn--ghost-dark:hover {
  background: var(--color-mono-black);
  color: var(--color-mono-white);
  border-color: var(--color-mono-black);
  opacity: 1;
  transform: translateY(-1px);
}
</style>
