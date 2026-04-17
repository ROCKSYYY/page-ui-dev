<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const steps = [
  {
    num: '01',
    title: 'Предпроектная аналитика',
    desc: 'Интервью с командой, CJM, анализ ИТ-ландшафта. Аналитический центр Атвинты.',
    badge: '★ Ключевое отличие',
    accent: true,
  },
  {
    num: '02',
    title: 'Архитектурное проектирование',
    desc: 'Проектируем систему, выбираем стек, согласовываем до первой строки кода.',
    badge: null,
    accent: false,
  },
  {
    num: '03',
    title: 'Разработка итерациями',
    desc: 'Спринты, еженедельные демо, прозрачный статус. Первая версия — раньше срока.',
    badge: null,
    accent: false,
  },
  {
    num: '04',
    title: 'Тестирование и запуск',
    desc: 'Нагрузочное тестирование, пилотный запуск, обучение пользователей.',
    badge: null,
    accent: false,
  },
  {
    num: '05',
    title: 'Поддержка и развитие',
    desc: 'SLA, техподдержка, развитие функционала. Не уходим после сдачи.',
    badge: null,
    accent: false,
  },
]
</script>

<template>
  <section class="approach">
    <div class="container">
      <div class="approach__hdr">
        <div class="r">
          <SectionLabel label="Как мы работаем" />
          <h2 class="approach__heading">
            Начинаем с аналитики —<br><em>не с кода</em>
          </h2>
        </div>
        <p class="approach__desc r d1">
          Большинство агентств сразу пишут код. Мы начинаем с исследования бизнес-процессов —
          это снижает риск переделок и гарантирует, что система решит реальную задачу.
        </p>
      </div>

      <div class="approach__steps">
        <div
          v-for="(step, i) in steps"
          :key="step.num"
          class="step r"
          :class="[step.accent ? 'step--a' : '', i > 0 ? `d${i}` : '']"
        >
          <div class="step__circle">{{ step.num }}</div>
          <div v-if="step.badge" class="step__badge">{{ step.badge }}</div>
          <div class="step__title">{{ step.title }}</div>
          <div class="step__desc">{{ step.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approach {
  padding: var(--section-py) 0;
  background: var(--surface);
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.approach__hdr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: clamp(56px, 7vw, 88px);
  align-items: end;
}

@media (max-width: 719px) {
  .approach__hdr {
    grid-template-columns: 1fr;
  }
}

.approach__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

.approach__heading em {
  font-style: normal;
  color: var(--color-accent-red);
}

.approach__desc {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  align-self: end;
}

.approach__steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
}

.approach__steps::before {
  content: '';
  position: absolute;
  top: 38px;
  left: calc(10% + 14px);
  right: calc(10% + 14px);
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border) 20%,
    var(--border) 80%,
    transparent
  );
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 1279px) {
  .approach__steps {
    grid-template-columns: 1fr 1fr;
  }

  .approach__steps::before {
    display: none;
  }
}

@media (max-width: 719px) {
  .approach__steps {
    grid-template-columns: 1fr;
  }
}

.step {
  padding: clamp(26px, 2.8vw, 38px) clamp(18px, 1.8vw, 24px);
  border: 1px solid var(--border);
  background: var(--color-mono-white);
  transition: background var(--t2), border-color var(--t2);
  cursor: default;
  position: relative;
  z-index: 1;
}

.step:hover {
  background: var(--surface);
  border-color: var(--black-a14);
}

.step--a {
  border-color: var(--color-accent-red);
  background: var(--color-accent-red-dim);
}

.step--a:hover {
  background: var(--color-accent-red-dim);
  border-color: var(--color-accent-red);
}

.step__circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  margin-bottom: 36px;
  background: var(--color-mono-white);
}

.step--a .step__circle {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
  background: var(--color-mono-white);
}

.step__badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--color-accent-red-dim);
  border: 1px solid var(--color-accent-red);
  color: var(--color-accent-red);
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.step__title {
  font-size: clamp(14px, 1.1vw, 17px);
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.step--a .step__title {
  color: var(--color-accent-red);
}

.step__desc {
  font-size: clamp(12px, 0.8vw, 13px);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
}

.step--a .step__desc {
  color: var(--text-secondary);
}
</style>
