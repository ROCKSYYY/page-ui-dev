<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'
import { ContactForm } from '@/features/contact-form'

const contacts = [
  { href: 'tel:+74993501390', label: '+7 (499) 350-13-90 — Москва', type: 'phone' },
  { href: 'tel:+73842452531', label: '+7 (3842) 45-25-31 — Кемерово', type: 'phone' },
  { href: 'mailto:info@atwinta.ru', label: 'info@atwinta.ru', type: 'email' },
]
</script>

<template>
  <section id="contact" class="cta">
    <div class="cta__grid-bg" aria-hidden="true" />
    <div class="cta__glow" aria-hidden="true" />

    <div class="container">
      <div class="cta__inner">
        <div class="r">
          <SectionLabel label="Начать работу" :light="true" />
          <h2 class="cta__heading">
            Обсудите задачу —<br>расскажем, как решали<br><em>похожие проекты</em>
          </h2>
          <p class="cta__sub">Ответим в течение 2 рабочих часов. Первая консультация — бесплатно.</p>

          <div class="cta__contacts">
            <a
              v-for="c in contacts"
              :key="c.href"
              :href="c.href"
              class="cta__contact-item"
            >
              <svg v-if="c.type === 'phone'" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M12.5 9.5c-.8-.8-1.7-1.3-2.5-1.3-.4 0-.9.2-1.8 1l-.4.4c-.2.2-.4.2-.6 0L4.4 6.8c-.2-.2-.2-.4 0-.6l.4-.4c.8-.9 1-1.4 1-1.8 0-.8-.5-1.7-1.3-2.5C3.7.7 3.1.5 2.5.5c-.5 0-1 .2-1.4.6l-.6.6C-.1 2.3-.1 3.5.7 5c.8 1.4 2 2.9 3.4 4.4 1.4 1.4 2.9 2.5 4.4 3.3 1.5.8 2.7.8 3.4.1l.6-.6c.4-.4.6-.9.6-1.4 0-.6-.3-1.2-.6-1.3z" fill="currentColor" />
              </svg>
              <svg v-else width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x=".5" y="2.5" width="13" height="9" rx="1.5" stroke="currentColor" />
                <path d="M1 3l6 5 6-5" stroke="currentColor" stroke-linecap="round" />
              </svg>
              {{ c.label }}
            </a>
            <div class="cta__contact-item cta__contact-item--addr">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1a4.5 4.5 0 0 1 4.5 4.5c0 3-4.5 7.5-4.5 7.5S2.5 8.5 2.5 5.5A4.5 4.5 0 0 1 7 1z" stroke="currentColor" stroke-width="1.2" />
                <circle cx="7" cy="5.5" r="1.5" stroke="currentColor" stroke-width="1.2" />
              </svg>
              Москва, Дмитровское ш. 87, оф. 403
            </div>
          </div>

          <div class="cta__proof">
            <p class="cta__quote">
              Работы были выполнены с надлежащим качеством и в установленные сроки. Будем рады рекомендовать Атвинту как компетентную IT-компанию для выполнения масштабных проектов государственного уровня.
            </p>
            <div class="cta__author">
              <div class="cta__avatar">Г</div>
              <div>
                <div class="cta__author-name">Госсамова Ч. Ф.</div>
                <div class="cta__author-role">Замруководителя, Аналитический центр при Правительстве РФ</div>
              </div>
            </div>
          </div>
        </div>

        <div class="r d2">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: var(--section-py) 0;
  background: var(--color-mono-black);
  overflow: hidden;
  position: relative;
}

.cta__grid-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--white-a02) 1px, transparent 1px),
    linear-gradient(90deg, var(--white-a02) 1px, transparent 1px);
  background-size: var(--grid-bg-size) var(--grid-bg-size);
}

.cta__glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 40vh;
  background: radial-gradient(ellipse, var(--red-a07) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
  position: relative;
  z-index: 1;
}

.cta__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: start;
}

@media (max-width: 1279px) {
  .cta__inner {
    grid-template-columns: 1fr;
  }
}

.cta__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  color: var(--color-mono-white);
  margin-bottom: 18px;
}

.cta__heading em {
  font-style: normal;
  color: var(--color-accent-yellow);
}

.cta__sub {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--white-a40);
  margin-bottom: 36px;
}

.cta__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.cta__contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 300;
  color: var(--white-a50);
  letter-spacing: -0.01em;
  transition: color var(--t1);
  text-decoration: none;
}

.cta__contact-item:hover,
.cta__contact-item:focus-visible {
  color: var(--color-accent-yellow);
  outline: 2px solid var(--color-accent-yellow);
  outline-offset: 3px;
  border-radius: 2px;
}

.cta__contact-item svg {
  flex-shrink: 0;
  color: var(--white-a25);
}

.cta__contact-item--addr {
  cursor: default;
}

.cta__contact-item--addr:hover {
  color: var(--white-a50);
}

.cta__proof {
  padding: 22px;
  border: 1px solid var(--white-a08);
  background: var(--white-a03);
}

.cta__quote {
  font-size: clamp(13px, 0.9vw, 14px);
  font-weight: 300;
  color: var(--white-a50);
  line-height: 1.65;
  margin-bottom: var(--spacing-md);
  font-style: italic;
}

.cta__author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cta__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--white-a08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-accent-yellow);
  flex-shrink: 0;
}

.cta__author-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--white-a65);
}

.cta__author-role {
  font-size: 11px;
  font-weight: 300;
  color: var(--white-a30);
}
</style>
