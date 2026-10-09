<template>
  <div v-if="enabled" class="cursor" aria-hidden="true">
    <div ref="ring" class="cursor-ring"></div>
    <div ref="dot" class="cursor-dot"></div>
  </div>
</template>

<script>
import { gsap, reduceMotion, finePointer } from '../animations/gsap'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, .portfolio-item, .theme-row, .gallery-item'

export default {
  name: 'CursorFollower',
  data() {
    return { enabled: finePointer && !reduceMotion }
  },
  mounted() {
    if (!this.enabled) return
    const { ring, dot } = this.$refs
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 })

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' })

    let hovering = false
    this.onMove = (e) => {
      ringX(e.clientX); ringY(e.clientY)
      dotX(e.clientX);  dotY(e.clientY)

      const over = !!e.target.closest?.(INTERACTIVE)
      if (over !== hovering) {
        hovering = over
        gsap.to(ring, { scale: over ? 1.8 : 1, duration: 0.35 })
        gsap.to(dot, { scale: over ? 0 : 1, duration: 0.25 })
      }
    }
    this.onEnter = () => gsap.to([ring, dot], { opacity: 1, duration: 0.3 })
    this.onLeave = () => gsap.to([ring, dot], { opacity: 0, duration: 0.3 })
    this.onDown = () => gsap.to(ring, { scale: hovering ? 1.4 : 0.75, duration: 0.15 })
    this.onUp = () => gsap.to(ring, { scale: hovering ? 1.8 : 1, duration: 0.3 })

    window.addEventListener('mousemove', this.onMove)
    window.addEventListener('mousedown', this.onDown)
    window.addEventListener('mouseup', this.onUp)
    document.documentElement.addEventListener('mouseenter', this.onEnter)
    document.documentElement.addEventListener('mouseleave', this.onLeave)
    window.addEventListener('mousemove', this.onEnter, { once: true })
  },
  beforeUnmount() {
    if (!this.enabled) return
    window.removeEventListener('mousemove', this.onMove)
    window.removeEventListener('mousedown', this.onDown)
    window.removeEventListener('mouseup', this.onUp)
    document.documentElement.removeEventListener('mouseenter', this.onEnter)
    document.documentElement.removeEventListener('mouseleave', this.onLeave)
  }
}
</script>

<style scoped>
.cursor {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10001;
  mix-blend-mode: difference;
}

.cursor-ring,
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  will-change: transform;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid #fff;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: #fff;
}
</style>
