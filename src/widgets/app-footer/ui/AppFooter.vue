<script setup lang="ts">
const links = [
  { href: '/about', label: 'О компании' },
  { href: '/projects', label: 'Проекты' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/documents', label: 'Политика' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <span class="footer__copy">© 2025 ООО «Атвинта». Москва · Кемерово</span>
        <ul class="footer__links">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--footer-bg);
  padding: clamp(28px, 4vw, 44px) 0;
  border-top: 1px solid var(--white-a05);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__copy {
  font-size: 12px;
  font-weight: 300;
  color: var(--white-a22);
}

.footer__links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.footer__links a {
  font-size: 12px;
  font-weight: 300;
  color: var(--white-a28);
  transition: color var(--t1);
}

.footer__links a:hover {
  color: var(--color-accent-yellow);
}

.footer__links a:focus-visible {
  outline: 2px solid var(--color-accent-yellow);
  outline-offset: 3px;
  border-radius: 2px;
}
</style>
