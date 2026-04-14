<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b border-slate-200 bg-white/80 backdrop-blur">
    <div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
      <RouterLink to="/" class="font-semibold tracking-tight">page-ui-dev</RouterLink>
      <nav class="flex items-center gap-4 text-sm text-slate-600">
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noreferrer"
          class="hover:text-slate-900"
        >
          Vue
        </a>
        <a
          href="https://pinia.vuejs.org/"
          target="_blank"
          rel="noreferrer"
          class="hover:text-slate-900"
        >
          Pinia
        </a>
        <a
          href="https://router.vuejs.org/"
          target="_blank"
          rel="noreferrer"
          class="hover:text-slate-900"
        >
          Router
        </a>
      </nav>
    </div>
  </header>
</template>

