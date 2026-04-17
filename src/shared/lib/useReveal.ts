import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
    )

    document.querySelectorAll('.r').forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(() => el.classList.add('on'), i * 70)
      } else {
        observer?.observe(el)
      }
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
