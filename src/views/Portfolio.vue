<template>
  <div class="portfolio">
    <div class="container">

      <h2 class="section-title">
        <span class="section-icon"><i class="fas fa-briefcase"></i></span>
        Proyectos
      </h2>

      <div class="portfolio-grid" ref="grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="portfolio-item"
          @click="viewProject(project.id)"
        >
          <div class="portfolio-card">

            <div class="portfolio-image">
              <img :src="project.image" :alt="project.title" />
              <div class="portfolio-overlay">
                <h3>{{ project.title }}</h3>
                <p>{{ project.category }}</p>
              </div>
            </div>

            <div class="project-card-info">
              <div class="project-card-header">
                <span class="project-card-label">
                  {{ project.cardTitle || project.projectType || 'Proyecto' }}
                </span>
                <div class="tech-badges" v-if="project.mainTechnologies && project.mainTechnologies.length > 0">
                  <span
                    v-for="(tech, index) in project.mainTechnologies"
                    :key="index"
                    class="tech-badge"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div v-if="!projects || projects.length === 0" class="empty-state">
          <i class="fas fa-folder-open"></i>
          <p>No hay proyectos disponibles aún.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { projects } from '../data/projects'

export default {
  name: 'Portfolio',
  data() {
    return { projects }
  },
  mounted() {
    this.animateEntrance()
  },
  methods: {
    viewProject(id) {
      this.$router.push(`/proyectos/${id}`)
    },
    animateEntrance() {
      const items = this.$el.querySelectorAll('.portfolio-item')
      items.forEach((el, i) => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        setTimeout(() => {
          el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, i * 100)
      })
    }
  }
}
</script>

<style scoped>
/* ─── BASE ─────────────────────────────────────────── */
.portfolio {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.portfolio::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(circle at 15% 20%, var(--aura-a) 0%, transparent 45%),
    radial-gradient(circle at 85% 80%, var(--aura-b) 0%, transparent 45%);
  pointer-events: none;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ─── TÍTULO ───────────────────────────────────────── */
.section-title {
  font-size: 1.6rem;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font-weight: 700;
}

.section-icon {
  width: 38px;
  height: 38px;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-icon i {
  color: var(--accent-primary);
  font-size: 0.95rem;
}

/* ─── GRID ─────────────────────────────────────────── */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.75rem;
}

/* ─── CARD ─────────────────────────────────────────── */
.portfolio-item {
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              border-color 0.35s ease;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
}

.portfolio-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
  border-color: var(--badge-border);
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  height: 340px;
}

/* ─── IMAGEN ───────────────────────────────────────── */
.portfolio-image {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: var(--bg-card);
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.07);
}

/* ─── OVERLAY ──────────────────────────────────────── */
.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 30%, rgba(0, 0, 0, 0.88) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

/* El overlay siempre usa blanco — va sobre imagen oscura, no cambia con el tema */
.portfolio-overlay h3 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.portfolio-overlay p {
  color: #60a5fa;
  font-size: 0.82rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

/* ─── CARD INFO ────────────────────────────────────── */
.project-card-info {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.project-card-header {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.project-card-label {
  color: var(--text-muted);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-badge {
  background: var(--badge-bg);
  color: var(--accent-primary);
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  border: 1px solid var(--badge-border);
  transition: background 0.25s ease, border-color 0.25s ease;
}

.tech-badge:hover {
  background: var(--badge-bg-hover);
  border-color: var(--accent-primary);
}

/* ─── ESTADO VACÍO ─────────────────────────────────── */
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-muted);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.empty-state p {
  font-size: 1rem;
}

/* ─── TABLET ───────────────────────────────────────── */
@media (max-width: 968px) {
  .portfolio { padding: 3rem 1.5rem; }
  .portfolio-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
}

/* ─── MÓVIL ────────────────────────────────────────── */
@media (max-width: 768px) {
  .portfolio { padding: 7.5rem 1.25rem 2.5rem; }

  .portfolio-grid { grid-template-columns: 1fr; gap: 1rem; }

  .portfolio-image { height: 180px; }

  .portfolio-overlay { opacity: 1; }

  .portfolio-overlay h3 { font-size: 1.05rem; }
  .portfolio-overlay p  { font-size: 0.75rem; }

  .project-card-info { padding: 1rem 1.25rem; }

  .tech-badge { font-size: 0.68rem; padding: 0.25rem 0.6rem; }

  .portfolio-item:hover { transform: none; box-shadow: none; }

  .portfolio-card { height: 250px; }
}

/* ─── MÓVIL PEQUEÑO ────────────────────────────────── */
@media (max-width: 480px) {
  .portfolio { padding: 7rem 1rem 2rem; }
  .portfolio-image { height: 160px; }

  .portfolio-card {
    height: 250px;
  }
}
</style>