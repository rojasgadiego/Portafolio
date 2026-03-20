<template>
  <div class="home">
    <canvas ref="bgCanvas" class="bg-canvas"></canvas>

    <div class="hero-section">

      <div class="hero-content">
        <span class="hero-greeting">👋 Hola, soy</span>
        <h1 class="hero-title">Diego Rojas García</h1>
        <h2 class="hero-role">Desarrollador Backend - Fullstack</h2>

        <p class="hero-description">
          Ingeniero Civil Informático con 3 años de experiencia en desarrollo de software, especializado en backend con .NET Core y Angular. He trabajado en sistemas empresariales del sector financiero, migración de aplicaciones y optimización de arquitecturas. Hoy me desempeño como desarrollador fullstack, explorando tecnologías modernas como agentes de IA y nuevos frameworks para seguir construyendo soluciones de mayor impacto.
        </p>

        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">3+</span>
            <span class="stat-label">Años de experiencia</span>
          </div>
          <div class="stat-divider" aria-hidden="true"></div>
          <div class="stat-item">
            <span class="stat-number">4+</span>
            <span class="stat-label">Proyectos completados</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="floating-card">
          <div class="tech-groups">

            <div class="tech-group">
              <span class="tech-group-label">Backend</span>
              <div class="tech-stack">
                <span class="tech-badge">.NET CORE / NESTJS / PYTHON</span>
                <span class="tech-badge">MONOLITOS / MICROSERVICIOS</span>
              </div>
            </div>

            <div class="tech-group">
              <span class="tech-group-label">Frontend</span>
              <div class="tech-stack">
                <span class="tech-badge">NEXTJS / VUEJS / ANGULAR</span>
                <span class="tech-badge">JAVASCRIPT / TYPESCRIPT</span>
              </div>
            </div>

            <div class="tech-group">
              <span class="tech-group-label">APIs & Datos</span>
              <div class="tech-stack">
                <span class="tech-badge">REST / SOAP / GRPC / GRAPHQL</span>
                <span class="tech-badge">SQL SERVER / POSTGRESQL / PLSQL</span>
              </div>
            </div>

            <div class="tech-group">
              <span class="tech-group-label">Cloud</span>
              <div class="tech-stack">
                <span class="tech-badge">AZURE / AWS</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="hero-buttons">
        <router-link to="/proyectos" class="btn btn-primary">
          <span>Ver Proyectos</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </router-link>
        <router-link to="/contact" class="btn btn-secondary">
          Hablemos
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      animFrameId: null,
      resizeObserver: null
    }
  },
  mounted() {
    this.animateElements()
    this.initCanvas()
  },
  beforeUnmount() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
    if (this.resizeObserver) this.resizeObserver.disconnect()
  },
  methods: {
    // ── Animación de entrada ──────────────────────────
    animateElements() {
      const contentEls = this.$el.querySelectorAll('.hero-content > *')
      contentEls.forEach((el, i) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, i * 100)
      })
      const card = this.$el.querySelector('.hero-visual')
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        setTimeout(() => {
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          card.style.opacity = '1'
          card.style.transform = 'translateY(0)'
        }, contentEls.length * 100 + 100)
      }
      const buttons = this.$el.querySelector('.hero-buttons')
      if (buttons) {
        buttons.style.opacity = '0'
        buttons.style.transform = 'translateY(20px)'
        setTimeout(() => {
          buttons.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          buttons.style.opacity = '1'
          buttons.style.transform = 'translateY(0)'
        }, contentEls.length * 100 + 250)
      }
    },

    // ── Canvas: diagonal sweep + particles ───────────
    initCanvas() {
      const canvas = this.$refs.bgCanvas
      const ctx    = canvas.getContext('2d')
      let W, H, puffs

      const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light'

      const smokeColor = () => isDark() ? '180,178,172' : '180,178,172'

      const makePuff = (initialSpread = false) => ({
        x:          Math.random() * W,
        y:          initialSpread ? Math.random() * H : H + Math.random() * 30,
        vx:         (Math.random() - 0.5) * 0.18,
        vy:         -(0.06 + Math.random() * 0.12),
        radius:     40 + Math.random() * 60,
        alpha:      initialSpread ? Math.random() * 0.05 : 0,
        targetAlpha: 0.04 + Math.random() * 0.05,
        growing:    true,
        scale:      1,
        scaleSpeed: 0.0012 + Math.random() * 0.001
      })

      const setup = () => {
        W = this.$el.offsetWidth
        H = this.$el.offsetHeight
        canvas.width  = W
        canvas.height = H
        puffs = Array.from({ length: 14 }, () => makePuff(true))
      }

      const draw = () => {
        ctx.clearRect(0, 0, W, H)

        const col = smokeColor()
        puffs.forEach(p => {
          p.x     += p.vx
          p.y     += p.vy
          p.scale += p.scaleSpeed

          if (p.growing) {
            p.alpha += 0.0007
            if (p.alpha >= p.targetAlpha) p.growing = false
          } else {
            p.alpha -= 0.00035
          }

          if (p.alpha <= 0 || p.y < -(p.radius * p.scale)) {
            Object.assign(p, makePuff(false))
          }

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * p.scale)
          grad.addColorStop(0,   `rgba(${col},${p.alpha})`)
          grad.addColorStop(1,   `rgba(${col},0)`)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * p.scale, 0, Math.PI * 2)
          ctx.fill()
        })

        this.animFrameId = requestAnimationFrame(draw)
      }

      setup()
      draw()

      this.resizeObserver = new ResizeObserver(() => { setup() })
      this.resizeObserver.observe(this.$el)
    }
  }
}
</script>

<style scoped>
/* ─── BASE ─────────────────────────────────────────── */
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

/* ─── CANVAS FONDO ─────────────────────────────────── */
.bg-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* El aura radial encima del canvas, debajo del contenido */
.home::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, var(--aura-a) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, var(--aura-b) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

/* ─── DESKTOP ──────────────────────────────────────── */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "content visual"
    "buttons visual";
  gap: 3rem 6rem;
  max-width: 1300px;
  margin: 0 auto;
  align-items: start;
  position: relative;
  z-index: 2;
}

.hero-content { grid-area: content; }
.hero-visual  { grid-area: visual; align-self: center; }
.hero-buttons { grid-area: buttons; }

.hero-greeting {
  font-size: 1.1rem;
  color: var(--accent-primary);
  font-weight: 500;
  display: block;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-role {
  font-size: 1.75rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 540px;
}

/* ─── STATS ────────────────────────────────────────── */
.stats-grid {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.stat-divider {
  width: 1px;
  height: 3rem;
  background: var(--border-default);
  flex-shrink: 0;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--stat-number);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--stat-label);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ─── BOTONES ──────────────────────────────────────── */
.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--accent-primary);
  color: #fff;
  box-shadow: 0 4px 20px var(--accent-primary-glow);
}
.btn-primary:hover {
  background: var(--accent-primary-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px var(--accent-primary-glow);
}
.btn-primary svg { transition: transform 0.3s ease; }
.btn-primary:hover svg { transform: translateX(4px); }

.btn-secondary {
  background: var(--btn-ghost-bg);
  color: var(--text-primary);
  border: 2px solid var(--btn-ghost-border);
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  background: var(--btn-ghost-bg-hover);
  border-color: var(--btn-ghost-border-hover);
  transform: translateY(-3px);
}

/* ─── CARD Y GRUPOS ────────────────────────────────── */
.hero-visual {
  position: relative;
  height: 500px;
}

.floating-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

.tech-groups {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-group-label {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-badge {
  padding: 0.6rem 1.25rem;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  border-radius: 50px;
  color: var(--accent-primary);
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
}
.tech-badge:hover {
  background: var(--badge-bg-hover);
  transform: translateY(-2px);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-20px); }
}

/* ─── TABLET ───────────────────────────────────────── */
@media (max-width: 968px) {
  .home { padding: 2rem 1.5rem; }

  .hero-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-title  { font-size: 3rem; }
  .hero-role   { font-size: 1.5rem; }
  .hero-visual { height: auto; }
  .stat-number { font-size: 2rem; }
}

/* ─── MÓVIL ────────────────────────────────────────── */
@media (max-width: 768px) {
  .home {
    padding: 7.5rem 1.25rem 2.5rem;
    align-items: flex-start;
  }

  .hero-section { gap: 1.75rem; }

  .hero-greeting { font-size: 1rem; }
  .hero-title    { font-size: 2.4rem; line-height: 1.15; }
  .hero-role     { font-size: 1.25rem; margin-bottom: 1rem; }
  .hero-description {
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 0;
  }

  .stats-grid {
    justify-content: center;
    gap: 1.5rem;
    padding: 1.25rem 0;
    text-align: center;
  }
  .stat-item    { align-items: center; flex: unset; }
  .stat-number  { font-size: 2rem; }
  .stat-label   { font-size: 0.7rem; }
  .stat-divider { height: 2.5rem; }

  .hero-visual { height: auto; }
  .floating-card {
    padding: 2rem;
    animation: none;
    border-radius: 16px;
  }
  .tech-group { display: flex; flex-direction: column; width: 100%; }
  .tech-groups { gap: 1.5rem; }
  .tech-group-label { font-size: 0.68rem; }
  .tech-stack { display: flex; flex-direction: column; gap: 0.5rem; }
  .tech-badge {
    padding: 0.75rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 10px;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
  .btn {
    display: flex;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 12px;
    box-sizing: border-box;
  }
}

/* ─── MÓVIL PEQUEÑO ────────────────────────────────── */
@media (max-width: 480px) {
  .home { padding: 7rem 1rem 2rem; }
  .hero-title { font-size: 2rem; }
  .hero-role  { font-size: 1.1rem; }
  .hero-description { font-size: 0.9rem; }
  .stats-grid { padding: 1rem 0; }
  .stat-number { font-size: 1.75rem; }
  .floating-card { padding: 1.5rem; }
  .tech-badge { font-size: 0.82rem; padding: 0.65rem 1rem; display: block; width: 100%; box-sizing: border-box; }
}
</style>