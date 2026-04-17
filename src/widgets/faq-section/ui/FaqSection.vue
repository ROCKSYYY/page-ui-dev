<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'
import { UiButton } from '@/shared/ui/button'
import { useAccordion } from '@/shared/lib/useAccordion'

const { toggle, isOpen } = useAccordion()

const faqs = [
  {
    q: 'Сколько стоит разработка корпоративной платформы?',
    a: 'От 1,5 млн руб. (MVP) до 10–20 млн руб. (полный цикл). Стоимость зависит от функционала и интеграций. Точная оценка — после брифинга, занимает 1–2 рабочих дня.',
  },
  {
    q: 'Сколько времени занимает разработка веб-сервиса?',
    a: 'MVP — 3–4 месяца. Промышленная платформа с интеграциями — 6–12 месяцев. Срок фиксируется в договоре. Первые рабочие функции — через 4–6 недель после старта.',
  },
  {
    q: 'Помогаете с импортозамещением ПО?',
    a: 'Да. Разрабатываем отечественные аналоги, помогаем с регистрацией в реестре российского ПО. Работаем с требованиями 166-ФЗ и ФСТЭК. Есть опыт миграции без остановки производства.',
  },
  {
    q: 'Что будет после запуска платформы?',
    a: 'Работаем по SLA: техподдержка, мониторинг, обновления, плановое развитие функционала. Средний срок с клиентом — 5 лет. Не уходим после сдачи.',
  },
  {
    q: 'Возьмёте на поддержку уже работающую систему?',
    a: 'Да. Проводим технический аудит, принимаем в поддержку, развиваем функционал. Работали с системами на любых стеках.',
  },
  {
    q: 'Как проходит предпроектная аналитика?',
    a: 'Интервью с командой, изучение процессов, построение CJM, анализ ИТ-ландшафта. Результат — ТЗ и архитектурная концепция. Обычно занимает 2–4 недели.',
  },
  {
    q: 'Работаете с промышленными предприятиями?',
    a: 'Да, это наш ключевой сегмент. Клиенты: УГМК, Северсталь, Газпром, Мечел. Понимаем требования к ИТ-системам предприятий, работали с объектами КИИ.',
  },
]
</script>

<template>
  <section class="faq">
    <div class="container">
      <div class="faq__inner">
        <div class="r">
          <SectionLabel label="Частые вопросы" />
          <h2 class="faq__heading">FAQ</h2>
          <p class="faq__sub">Ответы на вопросы, которые задают до начала работы. Не нашли своего — напишите нам.</p>
          <UiButton href="#contact" variant="red" size="sm">Задать вопрос</UiButton>
        </div>

        <div class="faq__list r d1">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ open: isOpen(i) }"
          >
            <button class="faq-item__btn" @click="toggle(i)">
              <span class="faq-item__q">{{ item.q }}</span>
              <span class="faq-item__ico">+</span>
            </button>
            <div class="faq-item__body">
              <div class="faq-item__inner">
                <p class="faq-item__a">{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: var(--section-py) 0;
  background: var(--surface);
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.faq__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

@media (max-width: 1279px) {
  .faq__inner {
    grid-template-columns: 1fr;
  }
}

.faq__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin-bottom: 14px;
}

.faq__sub {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.faq__list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-item:first-child {
  border-top: 1px solid var(--border);
}

.faq-item__btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: clamp(16px, 2vw, 24px) 0;
  cursor: pointer;
  text-align: left;
  background: none;
  border: none;
  font-family: var(--font);
}

.faq-item__btn:hover .faq-item__q {
  color: var(--color-accent-red);
}

.faq-item__btn:focus-visible {
  outline: 2px solid var(--color-accent-red);
  outline-offset: 3px;
  border-radius: 2px;
}

.faq-item__q {
  font-size: clamp(14px, 1.05vw, 17px);
  font-weight: 400;
  color: var(--color-mono-black);
  letter-spacing: -0.02em;
  line-height: 1.35;
  transition: color var(--t1);
}

.faq-item.open .faq-item__q {
  color: var(--color-accent-red);
}

.faq-item__ico {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-muted);
  font-size: 16px;
  font-weight: 300;
  transition: all var(--t2);
}

.faq-item.open .faq-item__ico {
  background: var(--color-accent-red);
  border-color: var(--color-accent-red);
  color: var(--color-mono-white);
  transform: rotate(45deg);
}

.faq-item__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s var(--ease);
}

.faq-item.open .faq-item__body {
  grid-template-rows: 1fr;
}

.faq-item__inner {
  overflow: hidden;
}

.faq-item__a {
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.65;
  letter-spacing: -0.01em;
  padding-bottom: clamp(14px, 1.8vw, 22px);
  max-width: 600px;
}
</style>
