<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'
import { UiButton } from '@/shared/ui/button'

const reasons = [
  {
    n: '01',
    title: 'Аналитический центр внутри',
    desc: 'Каждый проект начинается с исследования бизнес-процессов. Снижаем риск переделок.',
  },
  {
    n: '02',
    title: 'Опыт в промышленности',
    desc: 'Клиенты: УГМК, Северсталь, Газпром. Знаем требования к ИТ-системам и специфику КИИ.',
  },
  {
    n: '03',
    title: 'Долгосрочное партнёрство',
    desc: 'Средний срок с клиентом — 5 лет. Поддерживаем и развиваем платформы по SLA.',
  },
  {
    n: '04',
    title: 'Команда в штате',
    desc: 'Аналитики, архитекторы, разработчики, дизайнеры — все свои. Нет аутсорсинга.',
  },
  {
    n: '05',
    title: '14 лет и 400+ проектов',
    desc: 'Финансовая устойчивость, зрелые процессы, топ рейтингов Рунета и Tagline.',
  },
]
</script>

<template>
  <section class="why">
    <div class="container">
      <div class="why__inner">
        <div class="r">
          <SectionLabel label="Наши преимущества" />
          <h2 class="why__heading">5 причин работать с Атвинтой</h2>
          <p class="why__desc">
            Работаем с промышленными компаниями 14 лет. За это время выработали подход,
            который минимизирует риски и обеспечивает результат.
          </p>
          <UiButton href="#contact" variant="red">Обсудить проект</UiButton>
        </div>

        <div class="why__list r d1">
          <div v-for="item in reasons" :key="item.n" class="why-item">
            <span class="why-item__n">{{ item.n }}</span>
            <div>
              <div class="why-item__title">{{ item.title }}</div>
              <p class="why-item__desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  padding: var(--section-py) 0;
  background: var(--surface);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.why__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

@media (max-width: 1279px) {
  .why__inner {
    grid-template-columns: 1fr;
  }
}

.why__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin-bottom: var(--spacing-md);
}

.why__desc {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  margin-bottom: 36px;
}

.why__list {
  display: flex;
  flex-direction: column;
}

.why-item {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
  padding: clamp(18px, 2vw, 26px) 0;
  border-bottom: 1px solid var(--border);
  transition: background var(--t1);
  cursor: default;
}

.why-item:first-child {
  border-top: 1px solid var(--border);
}

.why-item__n {
  font-size: 11px;
  font-weight: 400;
  color: var(--color-accent-red);
  letter-spacing: 0.06em;
  padding-top: 3px;
}

.why-item__title {
  font-size: clamp(15px, 1.1vw, 18px);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--color-mono-black);
  margin-bottom: 5px;
}

.why-item__desc {
  font-size: clamp(12px, 0.88vw, 14px);
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.55;
}
</style>
