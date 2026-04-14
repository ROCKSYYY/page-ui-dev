<script setup lang="ts">
import { UiButton } from '@/shared/ui/button'
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-2xl font-semibold tracking-tight">Vue 3 + FSD starter</h1>
      <p class="text-sm text-slate-600">
        Стартовая страница, чтобы проверить роутер, Pinia и shared UI.
      </p>
    </div>

    <div class="flex flex-wrap gap-3">
      <UiButton>Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="ghost">Ghost</UiButton>
      <UiButton disabled>Disabled</UiButton>
    </div>
  </section>
</template>

