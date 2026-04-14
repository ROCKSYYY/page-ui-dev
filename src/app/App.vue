<script setup lang="ts">
import { RouterView } from 'vue-router'

import { AppHeader } from '@/widgets/app-header'
</script>

<template>
  <div class="min-h-dvh">
    <AppHeader />
    <main class="mx-auto w-full max-w-5xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

