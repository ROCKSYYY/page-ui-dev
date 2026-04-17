<script setup lang="ts">
const stats = [
  { num: '14', sup: '+', text: 'лет работы с промышленными и крупными B2B-компаниями' },
  { num: '400', sup: '+', text: 'реализованных проектов — от веб-сервисов до платформ' },
  { num: '100', sup: '+', text: 'специалистов в штате: аналитики, архитекторы, разработчики' },
  { num: '5', sup: '+', text: 'лет — средний срок сотрудничества с клиентом' },
]
</script>

<template>
  <section class="stats">
    <div class="container">
      <div class="stats__grid">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="stat r"
          :class="i > 0 ? `d${i}` : ''"
        >
          <div class="stat__num">
            {{ stat.num }}<sup>{{ stat.sup }}</sup>
          </div>
          <p class="stat__text">{{ stat.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: clamp(56px, 7vw, 88px) 0;
  border-bottom: 1px solid var(--border);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

@media (max-width: 719px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat {
  padding: clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 34px);
  border: 1px solid var(--border);
  transition: background var(--t2), border-color var(--t2);
  cursor: default;
}

.stat:hover {
  background: var(--surface);
  border-color: var(--black-a14);
}

.stat__num {
  font-size: clamp(40px, 4.8vw, 68px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--color-mono-black);
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.stat__num sup {
  font-size: 0.42em;
  font-weight: 400;
  color: var(--color-accent-red);
}

.stat__text {
  font-size: clamp(12px, 0.88vw, 14px);
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 160px;
}
</style>
