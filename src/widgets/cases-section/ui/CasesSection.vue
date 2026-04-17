<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'
import { UiButton } from '@/shared/ui/button'

const cases = [
  {
    industry: 'Металлургия · B2B-портал',
    title: 'B2B-портал для работы с дилерской сетью крупной металлургической компании',
    metricNum: '+8 900',
    metricText: 'пользователей в системе',
    task: 'Автоматизация оформления заказов, ЛК дилеров, интеграция с ERP',
    dark: false,
  },
  {
    industry: 'Производство · HR-автоматизация',
    title: 'Автоматизация 46 кадровых сервисов для крупного производственного предприятия',
    metricNum: '−30%',
    metricText: 'время оформления заявки',
    task: 'Единая HR-платформа, документооборот, интеграция с 1С:ЗУП',
    dark: true,
  },
  {
    industry: 'Энергетика · Импортозамещение',
    title: 'Замена иностранной платформы и переход на российский стек',
    metricNum: '8 мес',
    metricText: 'без остановки предприятия',
    task: 'Миграция данных, перепроектирование архитектуры, соответствие 166-ФЗ',
    dark: false,
  },
  {
    industry: 'Госсектор · BI-система',
    title: 'BI-система Аналитического центра при Правительстве РФ',
    metricNum: '100%',
    metricText: 'положительная оценка',
    task: 'Дашборды для высшего руководства, тёмная тема, realtime-данные',
    dark: true,
  },
]
</script>

<template>
  <section id="cases" class="cases">
    <div class="container">
      <div class="cases__hdr r">
        <div>
          <SectionLabel label="Портфолио" />
          <h2 class="cases__heading">Кейсы</h2>
        </div>
        <UiButton href="/projects" variant="red" size="sm">Все проекты →</UiButton>
      </div>

      <div class="cases__grid">
        <div
          v-for="(c, i) in cases"
          :key="c.title"
          class="case r"
          :class="[c.dark ? 'case--dark' : '', i > 0 ? `d${i}` : '']"
        >
          <div class="case__ind">{{ c.industry }}</div>
          <div class="case__title">{{ c.title }}</div>
          <div class="case__metric">
            <span class="case__metric-n">{{ c.metricNum }}</span>
            <span class="case__metric-t">{{ c.metricText }}</span>
          </div>
          <div class="case__foot">
            <p class="case__task">{{ c.task }}</p>
            <div class="case__btn">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases {
  padding: var(--section-py) 0;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.cases__hdr {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-bottom: clamp(36px, 5vw, 56px);
  flex-wrap: wrap;
}

.cases__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
}

.cases__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

@media (max-width: 719px) {
  .cases__grid {
    grid-template-columns: 1fr;
  }
}

.case {
  background: var(--color-mono-white);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: clamp(26px, 3.5vw, 44px);
  transition: transform var(--t2), border-color var(--t2);
  cursor: default;
  min-height: 290px;
}

.case:hover {
  transform: translateY(-4px);
  border-color: var(--black-a18);
}

.case--dark {
  background: var(--surface);
  border-color: var(--color-accent-red);
}

.case--dark:hover {
  border-color: var(--color-accent-red);
  transform: translateY(-4px);
}

.case__ind {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-red);
}

.case--dark .case__ind {
  color: var(--color-accent-red);
}

.case__title {
  font-size: clamp(17px, 1.4vw, 22px);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--text-primary);
  flex: 1;
}

.case--dark .case__title {
  color: var(--text-primary);
}

.case__metric {
  display: inline-flex;
  align-items: baseline;
  gap: var(--spacing-sm);
  padding: 9px 18px;
  border-radius: 100px;
  align-self: flex-start;
  background: var(--color-accent-red-dim);
}

.case--dark .case__metric {
  background: var(--color-accent-red-dim);
}

.case__metric-n {
  font-size: clamp(20px, 1.8vw, 26px);
  font-weight: 500;
  letter-spacing: -0.04em;
  color: var(--color-accent-red);
}

.case--dark .case__metric-n {
  color: var(--color-accent-red);
}

.case__metric-t {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-secondary);
}

.case--dark .case__metric-t {
  color: var(--text-secondary);
}

.case__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.case--dark .case__foot {
  border-color: var(--border);
}

.case__task {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.45;
  max-width: 340px;
}

.case--dark .case__task {
  color: var(--text-muted);
}

.case__btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 13px;
  transition: all var(--t1);
}

.case:hover .case__btn {
  background: var(--color-accent-red);
  border-color: var(--color-accent-red);
  color: var(--color-mono-white);
}

.case--dark .case__btn {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
}

.case--dark:hover .case__btn {
  background: var(--color-accent-red);
  border-color: var(--color-accent-red);
  color: var(--color-mono-white);
}
</style>
