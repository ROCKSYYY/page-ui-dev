<script setup lang="ts">
import { UiButton } from '@/shared/ui/button'

const cards = [
  { type: 'MVP', range: '1,5 — 4 млн ₽', time: '3–4 месяца', accent: false },
  { type: 'Платформа', range: '4 — 12 млн ₽', time: '6–10 месяцев', accent: false },
  { type: 'Enterprise', range: 'от 12 млн ₽', time: 'индивидуально', accent: true },
]
</script>

<template>
  <section class="price-strip">
    <div class="container">
      <div class="price-strip__inner r">
        <div class="price-strip__left">
          <span class="price-strip__label">Стоимость разработки</span>
          <div class="price-strip__value">от <strong>1,5 млн ₽</strong></div>
          <p class="price-strip__note">
            Точная стоимость формируется после брифинга — зависит от функционала,
            числа интеграций и объёма аналитики
          </p>
        </div>

        <div class="price-strip__cards">
          <div
            v-for="card in cards"
            :key="card.type"
            class="price-card"
            :class="{ 'price-card--accent': card.accent }"
          >
            <div class="price-card__type">{{ card.type }}</div>
            <div class="price-card__range">{{ card.range }}</div>
            <div class="price-card__time">{{ card.time }}</div>
          </div>
        </div>

        <UiButton href="#contact" variant="red" size="sm">Получить оценку →</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.price-strip {
  padding: clamp(32px, 4vw, 48px) 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.price-strip__inner {
  display: flex;
  align-items: center;
  gap: clamp(24px, 4vw, 56px);
  flex-wrap: wrap;
}

.price-strip__left {
  flex-shrink: 0;
  min-width: 200px;
}

.price-strip__label {
  display: block;
  color: var(--text-muted);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 0.08em;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
}

.price-strip__value {
  font-size: clamp(22px, 2.2vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.price-strip__value strong {
  font-weight: 500;
  color: var(--color-accent-red);
}

.price-strip__note {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.5;
  max-width: 260px;
}

.price-strip__cards {
  display: flex;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

@media (max-width: 719px) {
  .price-strip__cards {
    display: none;
  }
}

.price-card {
  flex: 1;
  padding: var(--spacing-md) 20px;
  border: 1px solid var(--border);
  background: var(--color-mono-white);
  transition: background var(--t2), border-color var(--t2);
  cursor: default;
  min-width: 0;
}

.price-card:hover {
  background: var(--surface);
  border-color: var(--black-a14);
}

.price-card--accent {
  border-color: var(--color-accent-red);
  background: var(--color-accent-red-dim);
}

.price-card--accent:hover {
  background: var(--color-accent-red-dim);
  border-color: var(--color-accent-red);
}

.price-card__type {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--spacing-sm);
}

.price-card--accent .price-card__type {
  color: var(--color-accent-red);
}

.price-card__range {
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.price-card--accent .price-card__range {
  color: var(--color-accent-red);
}

.price-card__time {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-secondary);
}
</style>
