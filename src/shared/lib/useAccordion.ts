import { ref } from 'vue'

export function useAccordion() {
  const openIndex = ref<number | null>(null)

  function toggle(index: number) {
    openIndex.value = openIndex.value === index ? null : index
  }

  function isOpen(index: number) {
    return openIndex.value === index
  }

  return { openIndex, toggle, isOpen }
}
