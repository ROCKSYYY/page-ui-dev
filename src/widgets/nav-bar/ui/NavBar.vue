<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { UiButton } from '@/shared/ui/button'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 36
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { href: '/about', label: 'Агентство' },
  { href: '/services', label: 'Услуги' },
  { href: '/projects', label: 'Проекты' },
  { href: '/blog', label: 'Блог' },
  { href: '/contacts', label: 'Контакты' },
]
</script>

<template>
  <nav class="nav" :class="{ 's': scrolled }">
    <div class="container">
      <div class="nav__inner">
        <a href="/" class="nav__logo">
          <div class="nav__logo-mark">
            <span>А</span>
          </div>
          <span class="nav__logo-text">Атвинта</span>
        </a>

        <ul class="nav__links">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>

        <UiButton href="#contact" variant="yellow" size="sm">Обсудить проект</UiButton>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--t2), backdrop-filter var(--t2), border-color var(--t2);
  border-bottom: 1px solid transparent;
}

.nav.s {
  background: var(--white-a90);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-color: var(--border);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  gap: var(--spacing-lg);
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.nav__logo-mark {
  width: 30px;
  height: 30px;
  background: var(--color-mono-black);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__logo-mark span {
  color: var(--color-accent-yellow);
  font-size: 13px;
  font-weight: 700;
}

.nav__logo-text {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--color-mono-black);
}

.nav__links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav__links a {
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  letter-spacing: -0.01em;
  transition: color var(--t1);
}

.nav__links a:hover {
  color: var(--color-accent-red);
}

.nav__links a:focus-visible {
  color: var(--color-accent-red);
  outline: 2px solid var(--color-accent-red);
  outline-offset: 3px;
  border-radius: 2px;
}

.nav__logo:focus-visible {
  outline: 2px solid var(--color-accent-red);
  outline-offset: 3px;
  border-radius: 4px;
}

@media (max-width: 1279px) {
  .nav__links {
    display: none;
  }
}
</style>
