<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const solutions = [
  {
    icon: '🏭',
    title: 'Корпоративные платформы',
    desc: 'Единые цифровые экосистемы для управления процессами предприятия. Интеграция с ERP, SAP, 1С.',
    dark: false,
  },
  {
    icon: '🔐',
    title: 'B2B-порталы и личные кабинеты',
    desc: 'Автоматизация работы с дилерами, партнёрами, клиентами. Документооборот, заказы, аналитика.',
    dark: false,
  },
  {
    icon: '⚙️',
    title: 'Веб-сервисы и автоматизация',
    desc: 'Цифровизация производственных и операционных процессов. Снижение ручного труда.',
    dark: false,
  },
  {
    icon: '🇷🇺',
    title: 'Импортозамещение ПО',
    desc: 'Разработка отечественных аналогов, российский стек, соответствие 166-ФЗ и ФСТЭК.',
    dark: true,
  },
  {
    icon: '🔧',
    title: 'Поддержка и развитие',
    desc: 'Технический аудит, SLA-поддержка, развитие функционала существующих систем.',
    dark: false,
  },
  {
    icon: '📐',
    title: 'Аналитика и проектирование',
    desc: 'Предпроектные исследования, CJM, архитектурное проектирование, техническое задание.',
    dark: false,
  },
]
</script>

<template>
  <section class="solutions">
    <div class="container">
      <div class="solutions__hdr r">
        <div>
          <SectionLabel label="Что разрабатываем" />
          <h2 class="solutions__heading">Типы решений</h2>
        </div>
        <p class="solutions__sub">
          Проектируем и разрабатываем цифровые продукты под конкретные бизнес-задачи — от MVP до промышленных экосистем.
        </p>
      </div>

      <div class="sol-grid">
        <div
          v-for="(sol, i) in solutions"
          :key="sol.title"
          class="sol-card r"
          :class="[sol.dark ? 'sol-card--dark' : '', i > 0 ? `d${Math.min(i, 5)}` : '']"
        >
          <div class="sol-card__ico">{{ sol.icon }}</div>
          <div class="sol-card__title">{{ sol.title }}</div>
          <div class="sol-card__desc">{{ sol.desc }}</div>
          <div class="sol-card__arr">→</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions {
  padding: var(--section-py) 0;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.solutions__hdr {
  margin-bottom: clamp(40px, 5vw, 64px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
}

@media (max-width: 719px) {
  .solutions__hdr {
    grid-template-columns: 1fr;
  }
}

.solutions__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
}

.solutions__sub {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  align-self: end;
}

.sol-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

@media (max-width: 1279px) {
  .sol-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 719px) {
  .sol-grid {
    grid-template-columns: 1fr;
  }
}

.sol-card {
  padding: clamp(26px, 3vw, 38px);
  border: 1px solid var(--border);
  background: var(--color-mono-white);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: background var(--t2), border-color var(--t2), transform var(--t2);
  cursor: default;
  min-height: 240px;
}

.sol-card:hover {
  background: var(--surface);
  border-color: var(--black-a15);
  transform: translateY(-3px);
}

.sol-card--dark {
  background: var(--color-mono-black);
  border-color: var(--color-mono-black);
}

.sol-card--dark:hover {
  background: var(--dark-surface);
  border-color: var(--dark-surface-2);
}

.sol-card__ico {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.sol-card--dark .sol-card__ico {
  background: var(--white-a07);
}

.sol-card__title {
  font-size: clamp(15px, 1.2vw, 19px);
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--color-mono-black);
  line-height: 1.25;
}

.sol-card--dark .sol-card__title {
  color: var(--color-accent-yellow);
}

.sol-card__desc {
  font-size: clamp(12px, 0.88vw, 14px);
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.6;
  flex: 1;
}

.sol-card--dark .sol-card__desc {
  color: var(--white-a35);
}

.sol-card__arr {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--surface-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-mono-black);
  font-size: 13px;
  align-self: flex-start;
  transition: background var(--t1), color var(--t1), transform var(--t1);
}

.sol-card:hover .sol-card__arr {
  background: var(--color-accent-red);
  color: var(--color-mono-white);
  transform: translateX(3px);
}

.sol-card--dark .sol-card__arr {
  background: var(--white-a07);
  color: var(--color-accent-yellow);
}

.sol-card--dark:hover .sol-card__arr {
  background: var(--color-accent-yellow);
  color: var(--color-mono-black);
}
</style>
