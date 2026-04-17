<script setup lang="ts">
import { ref } from 'vue'

import { UiButton } from '@/shared/ui/button'

const submitted = ref(false)
const form = ref({ name: '', company: '', contact: '', message: '' })

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', company: '', contact: '', message: '' }
  }, 3000)
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__row">
      <div class="form__field">
        <label class="form__lbl">Имя</label>
        <input v-model="form.name" class="form__inp" type="text" placeholder="Иван Иванов" required />
      </div>
      <div class="form__field">
        <label class="form__lbl">Компания</label>
        <input v-model="form.company" class="form__inp" type="text" placeholder="ООО «Компания»" required />
      </div>
    </div>

    <div class="form__field">
      <label class="form__lbl">Телефон или Email</label>
      <input v-model="form.contact" class="form__inp" type="text" placeholder="+7 999 000 00 00 или mail@company.ru" required />
    </div>

    <div class="form__field">
      <label class="form__lbl">Коротко о задаче</label>
      <textarea v-model="form.message" class="form__ta" placeholder="Что нужно разработать или улучшить" />
    </div>

    <div class="form__foot">
      <p class="form__policy">
        Нажимая кнопку, вы соглашаетесь с
        <a href="/documents">политикой конфиденциальности</a>
      </p>
      <UiButton
        type="submit"
        variant="yellow"
        :class="{ 'form__btn--sent': submitted }"
      >
        <template v-if="submitted">Отправлено ✓</template>
        <template v-else>
          Отправить заявку
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M2.5 7.5h10M9 4l3.5 3.5L9 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </template>
      </UiButton>
    </div>

    <div class="form__alt">
      <span class="form__alt-lbl">или</span>
      <a href="tel:+74993501390" class="form__contact">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M12.5 9.5c-.8-.8-1.7-1.3-2.5-1.3-.4 0-.9.2-1.8 1l-.4.4c-.2.2-.4.2-.6 0L4.4 6.8c-.2-.2-.2-.4 0-.6l.4-.4c.8-.9 1-1.4 1-1.8 0-.8-.5-1.7-1.3-2.5C3.7.7 3.1.5 2.5.5c-.5 0-1 .2-1.4.6l-.6.6C-.1 2.3-.1 3.5.7 5c.8 1.4 2 2.9 3.4 4.4 1.4 1.4 2.9 2.5 4.4 3.3 1.5.8 2.7.8 3.4.1l.6-.6c.4-.4.6-.9.6-1.4 0-.6-.3-1.2-.6-1.3z" fill="currentColor" />
        </svg>
        +7 (499) 350-13-90
      </a>
      <a href="mailto:info@atwinta.ru" class="form__contact">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x=".5" y="2.5" width="13" height="9" rx="1.5" stroke="currentColor" />
          <path d="M1 3l6 5 6-5" stroke="currentColor" stroke-linecap="round" />
        </svg>
        info@atwinta.ru
      </a>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 719px) {
  .form__row {
    grid-template-columns: 1fr;
  }
}

.form__field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form__lbl {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--white-a28);
}

.form__inp,
.form__ta {
  width: 100%;
  background: var(--white-a05);
  border: 1px solid var(--white-a09);
  color: var(--color-mono-white);
  font-family: var(--font);
  font-size: 14px;
  font-weight: 300;
  padding: 13px 16px;
  border-radius: var(--card-radius);
  outline: none;
  resize: none;
  transition: border-color var(--t1), background var(--t1);
  letter-spacing: -0.01em;
}

.form__inp::placeholder,
.form__ta::placeholder {
  color: var(--white-a18);
}

.form__inp:focus,
.form__ta:focus {
  border-color: var(--yellow-a35);
  background: var(--white-a07);
}

.form__ta {
  min-height: 96px;
}

.form__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.form__policy {
  font-size: 11px;
  font-weight: 300;
  color: var(--white-a20);
  line-height: 1.5;
  max-width: 240px;
}

.form__policy a {
  color: var(--white-a35);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color var(--t1);
}

.form__policy a:hover,
.form__policy a:focus-visible {
  color: var(--color-accent-yellow);
}

.form__btn--sent {
  background: var(--color-accent-red) !important;
  color: var(--color-mono-white) !important;
  pointer-events: none;
}

.form__alt {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--white-a06);
  flex-wrap: wrap;
}

.form__alt-lbl {
  font-size: 11px;
  font-weight: 300;
  color: var(--white-a20);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.form__contact {
  font-size: 13px;
  font-weight: 300;
  color: var(--white-a40);
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color var(--t1);
  text-decoration: none;
}

.form__contact:hover,
.form__contact:focus-visible {
  color: var(--color-accent-yellow);
  outline: 2px solid var(--color-accent-yellow);
  outline-offset: 3px;
  border-radius: 2px;
}
</style>
