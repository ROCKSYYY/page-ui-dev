<script setup lang="ts">
import { computed } from 'vue'

import { useTypewriter } from '@/shared/lib/useTypewriter'
import { UiButton } from '@/shared/ui/button'

const words = ['цифровые платформы', 'веб-сервисы', 'B2B-порталы', 'экосистемы']
const { currentIndex } = useTypewriter(words, 2400)

const translateY = computed(() => `translateY(calc(${-currentIndex.value} * var(--slot-h)))`)

const clients = ['УГМК', 'Северсталь', 'Газпром', 'Сбер', 'Мечел', 'Технониколь', 'DNS']
</script>

<template>
  <section class="hero">
    <div class="hero__grid" aria-hidden="true" />
    <div class="hero__glow-1" aria-hidden="true" />
    <div class="hero__glow-2" aria-hidden="true" />

    <div class="hero__body">
      <div class="container">
        <div class="hero__tag r">
          <span class="hero__tag-pulse" />
          Разработка · Промышленность · B2B
        </div>

        <h1 class="hero__heading r d1">
          <span class="hero__heading-static">Разрабатываем</span>
          <span class="hero__heading-row">
            <span class="hero__word-wrap">
              <span class="hero__word-inner" :style="{ transform: translateY }">
                <span v-for="word in words" :key="word" class="hero__word">{{ word }}</span>
              </span>
            </span>
            <span class="hero__heading-muted">для промышленности</span>
          </span>
          <span class="hero__heading-static hero__heading-muted">и крупного бизнеса</span>
        </h1>

        <p class="hero__sub r d2">
          Начинаем с анализа бизнес-процессов — проектируем архитектуру,
          разрабатываем, поддерживаем. От первого кода до развития платформы.
        </p>

        <div class="hero__actions r d3">
          <UiButton href="#contact" variant="red">
            Обсудить задачу
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M2.5 7.5h10M9 4l3.5 3.5L9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </UiButton>
          <UiButton href="#cases" variant="ghost-dark">Смотреть кейсы</UiButton>
        </div>
      </div>
    </div>

    <div class="hero__clients r d4">
      <span class="hero__clients-label">Среди клиентов</span>
      <div class="hero__clients-list">
        <span v-for="client in clients" :key="client" class="client-name">{{ client }}</span>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-track" />
      <span>scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  background: var(--color-mono-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: var(--nav-height);
  overflow: hidden;
  position: relative;
}

.hero__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--black-a04) 1px, transparent 1px),
    linear-gradient(90deg, var(--black-a04) 1px, transparent 1px);
  background-size: var(--grid-bg-size) var(--grid-bg-size);
}

.hero__glow-1 {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 55vw;
  height: 55vw;
  max-width: 700px;
  max-height: 700px;
  background: radial-gradient(circle, var(--red-a10) 0%, transparent 65%);
  pointer-events: none;
}

.hero__glow-2 {
  position: absolute;
  bottom: 5%;
  left: -10%;
  width: 40vw;
  height: 40vw;
  max-width: 500px;
  max-height: 500px;
  background: radial-gradient(circle, var(--yellow-a12) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.hero__body {
  position: relative;
  z-index: 2;
  padding-bottom: clamp(48px, 7vh, 80px);
}

.hero__tag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--color-accent-red-dim);
  border: 1px solid var(--color-accent-yellow-border);
  color: var(--color-accent-red);
  padding: 5px 14px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.hero__tag-pulse {
  width: 6px;
  height: 6px;
  background: var(--color-accent-red);
  border-radius: 50%;
  animation: pulse 2.2s ease infinite;
}

.hero__heading {
  font-size: clamp(38px, 5.5vw, 80px);
  font-weight: 500;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--color-mono-black);
  max-width: 960px;
  margin-bottom: 28px;
}

.hero__heading-static {
  display: block;
}

.hero__heading-muted {
  color: var(--text-muted);
}

.hero__heading-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.22em;
}

.hero__word-wrap {
  --slot-h: 1.15em;
  display: inline-block;
  height: var(--slot-h);
  overflow: hidden;
  vertical-align: bottom;
  min-width: 10ch;
}

.hero__word-inner {
  display: flex;
  flex-direction: column;
  transition: transform 0.56s var(--ease);
}

.hero__word {
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: var(--color-accent-red);
  height: var(--slot-h);
}

.hero__sub {
  font-size: clamp(15px, 1.3vw, 19px);
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: var(--text-secondary);
  max-width: 520px;
  margin-bottom: 44px;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.hero__clients {
  position: relative;
  z-index: 2;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
}

.hero__clients-label {
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
  padding: 20px var(--px);
  flex-shrink: 0;
}

.hero__clients-list {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3.5vw, 48px);
  padding: 20px var(--px);
  border-left: 1px solid var(--border);
  flex-wrap: wrap;
}

.client-name {
  font-size: clamp(12px, 1vw, 14px);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-muted);
  text-transform: uppercase;
  transition: color var(--t2);
  cursor: default;
}

.client-name:hover {
  color: var(--text-primary);
}

.hero__scroll {
  position: absolute;
  bottom: 32px;
  right: var(--px);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  z-index: 2;
}

.hero__scroll-track {
  width: 36px;
  height: 1.5px;
  background: var(--border);
  position: relative;
  overflow: hidden;
}

.hero__scroll-track::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--color-accent-red);
  animation: track 2.4s ease infinite;
}
</style>
