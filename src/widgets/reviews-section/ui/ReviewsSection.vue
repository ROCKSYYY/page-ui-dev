<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const reviews = [
  {
    text: 'Работы были выполнены с надлежащим качеством и в установленные сроки. Сотрудники в проактивном порядке предлагали оптимизационные меры. Будем рады рекомендовать Атвинту как компетентную IT-компанию для выполнения масштабных проектов государственного уровня.',
    avatar: 'Г',
    name: 'Госсамова Ч. Ф.',
    role: 'Заместитель руководителя',
    company: 'Аналитический центр при Правительстве РФ',
  },
  {
    text: 'По результатам опроса более 80% клиентов отметили, что им нравится сайт компании. Высокая оценка потребителей — самое значимое свидетельство того, что мы не ошиблись при выборе подрядчика.',
    avatar: 'К',
    name: 'Кранзеев В. А.',
    role: 'Директор департамента информационных технологий и технического аудита',
    company: 'ООО «Мечел»',
  },
  {
    text: 'Очень радует, что системность Атвинты, на которую я обратил внимание несколько лет назад, не была единичной. Все задачи чётко планируются и успешно выполняются.',
    avatar: 'Д',
    name: 'Анатолий Денисов',
    role: 'Главный редактор',
    company: 'Рейтинг Рунета',
  },
]
</script>

<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__hdr r">
        <SectionLabel label="Что говорят клиенты" />
        <h2 class="reviews__heading">Отзывы</h2>
      </div>

      <div class="reviews__grid">
        <div
          v-for="(review, i) in reviews"
          :key="review.name"
          class="review-card r"
          :class="i > 0 ? `d${i}` : ''"
        >
          <div class="review-card__stars">★★★★★</div>
          <p class="review-card__text">{{ review.text }}</p>
          <div class="review-card__author">
            <div class="review-card__avatar">{{ review.avatar }}</div>
            <div>
              <div class="review-card__name">{{ review.name }}</div>
              <div class="review-card__role">{{ review.role }}</div>
              <div class="review-card__company">{{ review.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  padding: var(--section-py) 0;
  background: var(--surface);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.reviews__hdr {
  margin-bottom: clamp(36px, 5vw, 56px);
}

.reviews__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: var(--text-primary);
}

.reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}

@media (max-width: 1279px) {
  .reviews__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 719px) {
  .reviews__grid {
    grid-template-columns: 1fr;
  }
}

.review-card {
  padding: clamp(28px, 3vw, 40px);
  border: 1px solid var(--border);
  background: var(--color-mono-white);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: background var(--t2), border-color var(--t2);
  cursor: default;
}

.review-card:hover {
  background: var(--surface);
  border-color: var(--black-a14);
}

.review-card__stars {
  font-size: 16px;
  letter-spacing: 2px;
  color: var(--color-accent-red);
}

.review-card__text {
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.7;
  letter-spacing: -0.01em;
  flex: 1;
  font-style: italic;
}

.review-card__author {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.review-card__avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--color-accent-red-dim);
  border: 1px solid var(--color-accent-red);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-accent-red);
  flex-shrink: 0;
}

.review-card__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 2px;
}

.review-card__role {
  font-size: 12px;
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.review-card__company {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-accent-red);
  letter-spacing: -0.01em;
  margin-top: 3px;
}
</style>
