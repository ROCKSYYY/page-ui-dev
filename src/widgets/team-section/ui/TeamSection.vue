<script setup lang="ts">
import { SectionLabel } from '@/shared/ui/section-label'

const members = [
  {
    initials: 'АЦ',
    badge: 'Аналитика',
    name: 'Имя Фамилия',
    role: 'Руководитель аналитического центра',
    exp: 'Лид предпроектных исследований. Промышленные проекты — N лет.',
  },
  {
    initials: 'ТД',
    badge: null,
    name: 'Имя Фамилия',
    role: 'Технический директор',
    exp: 'Архитектура highload-систем, интеграции с ERP/SAP/1С.',
  },
  {
    initials: 'РР',
    badge: null,
    name: 'Имя Фамилия',
    role: 'Руководитель разработки',
    exp: 'N лет в разработке. Ключевые платформенные проекты.',
  },
  {
    initials: 'ДР',
    badge: null,
    name: 'Имя Фамилия',
    role: 'Директор по развитию',
    exp: 'Точка контакта на всём пути проекта.',
  },
]
</script>

<template>
  <section class="team">
    <div class="container">
      <div class="team__hdr r">
        <SectionLabel label="Кто работает над проектом" />
        <h2 class="team__heading">Команда</h2>
      </div>

      <div class="team__grid">
        <div
          v-for="(member, i) in members"
          :key="member.role"
          class="team-card r"
          :class="i > 0 ? `d${i}` : ''"
        >
          <div class="team-card__img">
            <div class="team-card__bg">
              <span class="team-card__init">{{ member.initials }}</span>
            </div>
            <span v-if="member.badge" class="team-card__badge">{{ member.badge }}</span>
          </div>
          <div class="team-card__info">
            <div class="team-card__name">{{ member.name }}</div>
            <div class="team-card__role">{{ member.role }}</div>
            <div class="team-card__exp">{{ member.exp }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding: var(--section-py) 0;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--px);
}

.team__hdr {
  margin-bottom: clamp(36px, 5vw, 56px);
}

.team__heading {
  font-size: clamp(24px, 2.6vw, 38px);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.025em;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

@media (max-width: 1279px) {
  .team__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 719px) {
  .team__grid {
    grid-template-columns: 1fr;
  }
}

.team-card {
  background: var(--color-mono-white);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform var(--t2);
  cursor: default;
}

.team-card:hover {
  transform: translateY(-4px);
}

.team-card__img {
  aspect-ratio: 3/4;
  background: var(--surface-2);
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 14px;
}

.team-card__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, var(--team-avatar-bg) 0%, var(--team-avatar-bg-2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-card__init {
  font-size: 56px;
  font-weight: 500;
  color: var(--black-a10);
  letter-spacing: -0.05em;
  user-select: none;
}

.team-card__badge {
  position: relative;
  z-index: 1;
  background: var(--color-accent-yellow);
  color: var(--color-mono-black);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 100px;
}

.team-card__info {
  padding: clamp(14px, 1.8vw, 22px);
}

.team-card__name {
  font-size: clamp(14px, 1.1vw, 17px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-bottom: 3px;
}

.team-card__role {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-accent-red);
  letter-spacing: -0.01em;
  margin-bottom: var(--spacing-sm);
}

.team-card__exp {
  font-size: 11px;
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
