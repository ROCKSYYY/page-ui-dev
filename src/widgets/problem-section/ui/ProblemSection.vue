<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const problems = [
  'Сотрудники тратят часы на ручные операции, которые можно автоматизировать',
  'Устаревшие системы не интегрируются — данные теряются при передаче между отделами',
  'Иностранное ПО заблокировано или требует замены по 166-ФЗ',
  'Подрядчики не понимают специфику отрасли — делают «как обычно»',
]
</script>

<template>
  <section class="problem">
    <div class="container">
      <div class="problem__inner">
        <div class="r">
          <SectionLabel label="С чем приходят к нам" />
          <h2 class="problem__heading">Промышленные компании сталкиваются с одними и теми же барьерами</h2>
          <p class="problem__text">
            За 14 лет работы с предприятиями уровня УГМК, Северсталь и Газпром мы видели одни и те же задачи. И научились их решать.
          </p>
          <div class="problem__aside">Атвинта знает, как это решается →</div>
        </div>

        <div class="problem__items">
          <div
            v-for="(item, i) in problems"
            :key="i"
            class="p-item r"
            :class="`d${i + 1}`"
          >
            <span class="p-item__n">0{{ i + 1 }}</span>
            <p class="p-item__t">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem {
  padding: var(--section-py) 0;
  background: var(--surface);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.problem__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

@media (max-width: 1279px) {
  .problem__inner {
    grid-template-columns: 1fr;
  }
}

.problem__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin-bottom: 18px;
}

.problem__text {
  font-size: clamp(15px, 1.1vw, 17px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  margin-bottom: 36px;
  max-width: 420px;
}

.problem__aside {
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 300;
  color: var(--color-accent-red);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: default;
  transition: gap var(--t1);
}

.problem__aside:hover {
  gap: 14px;
}

.problem__items {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.p-item {
  display: flex;
  gap: 18px;
  padding: clamp(18px, 2vw, 26px) clamp(18px, 2.2vw, 28px);
  background: var(--color-mono-white);
  border: 1px solid var(--border);
  transition: border-color var(--t2), transform var(--t2);
  cursor: default;
}

.p-item:hover {
  border-color: var(--color-accent-red);
  transform: translateX(5px);
}

.p-item__n {
  font-size: 11px;
  font-weight: 400;
  color: var(--color-accent-red);
  letter-spacing: 0.06em;
  padding-top: 2px;
  flex-shrink: 0;
}

.p-item__t {
  font-size: clamp(14px, 1.05vw, 16px);
  font-weight: 300;
  line-height: 1.55;
  color: var(--color-mono-black);
  letter-spacing: -0.01em;
}
</style>
