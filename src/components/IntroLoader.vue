<template>
  <div v-if="visible" ref="root" class="intro" aria-hidden="true">
    <div class="intro-inner">
      <div class="intro-name">
        <span class="intro-line"><span class="intro-word">Diego</span></span>
        <span class="intro-line"><span class="intro-word">Rojas García</span></span>
      </div>
      <div class="intro-bar"><div class="intro-bar-fill"></div></div>
      <div class="intro-meta">
        <span class="intro-role">Software Developer</span>
        <span class="intro-count">{{ count }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, shouldShowIntro, finishIntro } from '../animations/gsap'

export default {
  name: 'IntroLoader',
  data() {
    return { visible: shouldShowIntro(), count: 0 }
  },
  mounted() {
    if (!this.visible) return
    document.body.style.overflow = 'hidden'

    const counter = { value: 0 }
    this.ctx = gsap.context(() => {
      gsap.timeline({ onComplete: this.done })
        .from('.intro-word', { yPercent: 110, duration: 0.9, stagger: 0.12, ease: 'power4.out' })
        .from('.intro-meta', { opacity: 0, y: 10, duration: 0.5 }, '-=0.4')
        .to(counter, {
          value: 100,
          duration: 1.3,
          ease: 'power2.inOut',
          onUpdate: () => { this.count = Math.round(counter.value) }
        }, '<')
        .to('.intro-bar-fill', { scaleX: 1, duration: 1.3, ease: 'power2.inOut' }, '<')
        .to('.intro-word', { yPercent: -110, duration: 0.6, stagger: 0.06, ease: 'power3.in' }, '+=0.15')
        .to('.intro-meta, .intro-bar', { opacity: 0, duration: 0.3 }, '<')
        .add(() => finishIntro(), '-=0.1')
        .to(this.$refs.root, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1')
    }, this.$refs.root)
  },
  beforeUnmount() {
    this.ctx?.revert()
  },
  methods: {
    done() {
      document.body.style.overflow = ''
      this.visible = false
    }
  }
}
</script>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #0a0a0a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.intro-inner {
  width: min(560px, 100%);
}

.intro-name {
  display: flex;
  flex-direction: column;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
}

.intro-line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
}

.intro-word {
  display: inline-block;
}

.intro-line:last-child .intro-word {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-bar {
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin-bottom: 0.875rem;
}

.intro-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transform-origin: left;
}

.intro-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-variant-numeric: tabular-nums;
}
</style>
