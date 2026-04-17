<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const integrations = [
  { icon: '🔗', name: 'SAP' },
  { icon: '1С', name: '1С:ERP / ЗУП' },
  { icon: '🗃️', name: 'Oracle EBS' },
  { icon: '📦', name: 'Bitrix24' },
  { icon: '📋', name: 'amoCRM' },
  { icon: '📄', name: 'СМЭВ / ЕСИА' },
  { icon: '📜', name: 'ЭДО / ЮЗДО' },
  { icon: '💳', name: 'Платёжные системы' },
  { icon: '🚚', name: 'Транспортные API' },
]

const russianStack = [
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🐧', name: 'Linux / Astra Linux' },
  { icon: '☁️', name: 'SberCloud / VK Cloud' },
  { icon: '🛡️', name: 'ФСТЭК-совместимость' },
  { icon: '📋', name: 'Реестр РФ ПО' },
  { icon: '🔒', name: 'КриптоПро / ЭЦП' },
  { icon: '⚡', name: 'NGINX / Kubernetes' },
  { icon: '🔧', name: 'Laravel / Symfony' },
]
</script>

<template>
  <section class="stack">
    <div class="container">
      <div class="stack__hdr r">
        <SectionLabel label="Технологии" />
        <h2 class="stack__heading">Технологический стек</h2>
        <p class="stack__sub">Интегрируемся в ваш существующий ИТ-ландшафт — не ломаем, а встраиваемся.</p>
      </div>

      <div class="stack__cols">
        <div class="stack__col r">
          <div class="stack__col-title">Интеграции и корпоративные системы</div>
          <div class="stack__items">
            <div v-for="item in integrations" :key="item.name" class="stack__item">
              <div class="stack__item-ico">{{ item.icon }}</div>
              <span class="stack__item-name">{{ item.name }}</span>
            </div>
          </div>
        </div>

        <div class="stack__col stack__col--dark r d1">
          <div class="stack__col-title">Российский стек · Импортозамещение</div>
          <div class="stack__items">
            <div v-for="item in russianStack" :key="item.name" class="stack__item">
              <div class="stack__item-ico">{{ item.icon }}</div>
              <span class="stack__item-name">{{ item.name }}</span>
            </div>
          </div>
          <div class="stack__note">
            Помогаем с переходом на отечественное ПО и прохождением требований 166-ФЗ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding: var(--section-py) 0;
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

.stack__hdr {
  margin-bottom: clamp(40px, 5vw, 64px);
}

.stack__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
}

.stack__sub {
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
  max-width: 500px;
}

.stack__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
}

@media (max-width: 719px) {
  .stack__cols {
    grid-template-columns: 1fr;
  }
}

.stack__col {
  background: var(--color-mono-white);
  border: 1px solid var(--border);
  padding: clamp(28px, 3vw, 40px);
}

.stack__col-title {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.stack__col-title::before {
  content: '';
  width: 14px;
  height: 1.5px;
  background: var(--color-accent-red);
  flex-shrink: 0;
}

.stack__col--dark {
  background: var(--color-mono-black);
  border-color: var(--color-mono-black);
}

.stack__col--dark .stack__col-title {
  color: var(--white-a30);
}

.stack__col--dark .stack__col-title::before {
  background: var(--color-accent-yellow);
}

.stack__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.stack__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
  cursor: default;
  transition: border-color var(--t1), background var(--t1);
}

.stack__item:hover {
  border-color: var(--color-accent-red);
  background: var(--color-mono-white);
}

.stack__col--dark .stack__item {
  background: var(--white-a05);
  border-color: var(--white-a08);
}

.stack__col--dark .stack__item:hover {
  border-color: var(--yellow-a40);
  background: var(--yellow-a05);
}

.stack__item-ico {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: var(--surface-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
}

.stack__col--dark .stack__item-ico {
  background: var(--white-a08);
}

.stack__item-name {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.stack__col--dark .stack__item-name {
  color: var(--white-a75);
}

.stack__note {
  margin-top: 24px;
  padding: var(--spacing-md) 20px;
  background: var(--color-accent-yellow-dim);
  border: 1px solid var(--color-accent-yellow-border);
  border-radius: 4px;
  font-size: 13px;
  font-weight: 300;
  color: var(--yellow-a80);
  line-height: 1.5;
}
</style>
