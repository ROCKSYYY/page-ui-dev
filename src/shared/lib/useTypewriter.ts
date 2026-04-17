import { onMounted, onUnmounted, ref } from 'vue'

export function useTypewriter(words: string[], intervalMs = 2400) {
  const currentIndex = ref(0)
  let timer: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    timer = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % words.length
    }, intervalMs)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { currentIndex }
}
