<script setup lang="ts">
defineProps<{
  label: string
  light?: boolean
}>()
</script>

<template>
  <div
    class="section-label"
    :class="light ? 'section-label--light' : ''"
  >
    {{ label }}
  </div>
</template>

<style scoped>
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  margin-bottom: 20px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section-label::before {
  content: '';
  width: 18px;
  height: 1.5px;
  background: var(--color-accent-red);
  flex-shrink: 0;
}

.section-label--light {
  color: var(--white-a30);
}

.section-label--light::before {
  background: var(--color-accent-yellow);
}
</style>
