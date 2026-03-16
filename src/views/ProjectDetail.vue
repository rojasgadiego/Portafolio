<template>
  <div class="project-detail">
    <div class="container">

      <!-- Header del Proyecto -->
      <div class="project-header">
        <div class="back-btn-wrapper">
          <button @click="goBack" class="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Volver
          </button>
        </div>
        
        <div class="project-title-section">
          <div class="project-category-wrapper">
            <span class="project-category">{{ project.category }}</span>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="github-icon-link" title="Ver repositorio en GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-subtitle">{{ project.subtitle }}</p>
        </div>

        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Cliente</span>
            <span class="meta-value">{{ project.client }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Fecha</span>
            <span class="meta-value">{{ project.date }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Rol</span>
            <span class="meta-value">{{ project.role }}</span>
          </div>
        </div>
      </div>

      <!-- Imagen Principal -->
      <div class="project-hero" @click="openLightbox(0)">
        <img :src="project.heroImage" :alt="project.title" />
        <div class="zoom-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>

      <!-- Contenido del Proyecto -->
      <div class="project-content">

        <section class="content-section">
          <h2 class="section-title">Descripción del Proyecto</h2>
          <p class="section-text">{{ project.description }}</p>
        </section>

        <section class="content-section">
          <h2 class="section-title">El Desafío</h2>
          <p class="section-text">{{ project.challenge }}</p>
        </section>

        <section class="content-section">
          <h2 class="section-title">Tecnologías Utilizadas</h2>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </section>

        <section v-if="project.architecture" class="content-section">
          <h2 class="section-title">Arquitectura</h2>
          <div class="architecture-grid">
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div class="architecture-content">
                <span class="architecture-label">Backend</span>
                <span class="architecture-value">{{ project.architecture.backend }}</span>
              </div>
            </div>
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div class="architecture-content">
                <span class="architecture-label">Frontend</span>
                <span class="architecture-value">{{ project.architecture.frontend }}</span>
              </div>
            </div>
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div class="architecture-content">
                <span class="architecture-label">Base de Datos</span>
                <span class="architecture-value">{{ project.architecture.database }}</span>
              </div>
            </div>
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div class="architecture-content">
                <span class="architecture-label">Autenticación</span>
                <span class="architecture-value">{{ project.architecture.authentication }}</span>
              </div>
            </div>
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="architecture-content">
                <span class="architecture-label">API</span>
                <span class="architecture-value">{{ project.architecture.apiStyle }}</span>
              </div>
            </div>
          </div>
        </section>

        <section v-if="project.features && project.features.length > 0" class="content-section">
          <h2 class="section-title">Características Principales</h2>
          <div class="features-grid">
            <div v-for="(feature, index) in project.features" :key="index" class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="feature-text">{{ feature }}</span>
            </div>
          </div>
        </section>

        <section class="content-section">
          <h2 class="section-title">Galería</h2>
          <div class="gallery-grid">
            <div 
              v-for="(image, index) in project.gallery" 
              :key="index" 
              class="gallery-item"
              @click="openLightbox(index)"
            >
              <img :src="image" :alt="`${project.title} - imagen ${index + 1}`" />
              <div class="gallery-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="project-links">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="project-link live-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Ver Proyecto en Vivo
            </a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="project-link github-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Ver en GitHub
            </a>
          </div>
        </section>
      </div>

      <!-- Navegación entre proyectos -->
      <div class="project-navigation">
        <button
          class="nav-btn prev-btn"
          :class="{ 'nav-btn--disabled': !prevProject }"
          :disabled="!prevProject"
          @click="goToPrev"
        >
          <span class="nav-btn-direction">← Anterior</span>
          <span class="nav-btn-title">{{ prevProject ? prevProject.title : 'No hay proyecto anterior' }}</span>
        </button>
        <button
          class="nav-btn next-btn"
          :class="{ 'nav-btn--disabled': !nextProject }"
          :disabled="!nextProject"
          @click="goToNext"
        >
          <span class="nav-btn-direction">Siguiente →</span>
          <span class="nav-btn-title">{{ nextProject ? nextProject.title : 'No hay proyecto siguiente' }}</span>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-container">
          <button class="lightbox-close" @click="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <button v-if="currentImageIndex > 0" class="lightbox-nav lightbox-prev" @click="previousImage">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div class="lightbox-image-wrapper">
            <img :src="project.gallery[currentImageIndex]" :alt="`${project.title} - imagen ${currentImageIndex + 1}`" class="lightbox-image" />
          </div>
          <button v-if="currentImageIndex < project.gallery.length - 1" class="lightbox-nav lightbox-next" @click="nextImage">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
          <div class="lightbox-counter">{{ currentImageIndex + 1 }} / {{ project.gallery.length }}</div>
          <div class="lightbox-thumbnails">
            <div v-for="(image, index) in project.gallery" :key="index" class="thumbnail" :class="{ active: index === currentImageIndex }" @click="currentImageIndex = index">
              <img :src="image" :alt="`Thumbnail ${index + 1}`" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getProjectById, projects } from '../data/projects'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null,
      lightboxOpen: false,
      currentImageIndex: 0
    }
  },
  created() {
    const projectId = this.$route.params.id
    this.project = getProjectById(projectId)
    if (!this.project) this.$router.push('/portfolio')
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  watch: {
    '$route.params.id'(newId) {
      this.project = getProjectById(newId)
      this.lightboxOpen = false
      this.currentImageIndex = 0
      window.scrollTo(0, 0)
    },
    lightboxOpen(isOpen) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }
  },
  computed: {
    currentIndex() {
      return projects.findIndex(p => p.id === this.project?.id)
    },
    prevProject() {
      return this.currentIndex > 0 ? projects[this.currentIndex - 1] : null
    },
    nextProject() {
      return this.currentIndex < projects.length - 1 ? projects[this.currentIndex + 1] : null
    }
  },
  methods: {
    goBack() { this.$router.push('/proyectos') },
    goToPrev() { if (this.prevProject) this.$router.push(`/proyectos/${this.prevProject.id}`) },
    goToNext() { if (this.nextProject) this.$router.push(`/proyectos/${this.nextProject.id}`) },
    openLightbox(index) { this.currentImageIndex = index; this.lightboxOpen = true },
    closeLightbox() { this.lightboxOpen = false },
    nextImage() { if (this.currentImageIndex < this.project.gallery.length - 1) this.currentImageIndex++ },
    previousImage() { if (this.currentImageIndex > 0) this.currentImageIndex-- },
    handleKeydown(e) {
      if (!this.lightboxOpen) return
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowRight') this.nextImage()
      if (e.key === 'ArrowLeft') this.previousImage()
    }
  }
}
</script>

<style scoped>
/* ─── BASE ─────────────────────────────────────────── */
.project-detail {
  min-height: 100vh;
  padding: 2rem 2rem 4rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.project-detail::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.06) 0%, transparent 40%);
  pointer-events: none;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* ─── BACK BTN ─────────────────────────────────────── */
.back-btn-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: inherit;
  transition: all 0.25s ease;
}

.back-btn:hover {
  color: #fff;
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.08);
  transform: translateX(-4px);
}

/* ─── HEADER ───────────────────────────────────────── */
.project-header { margin-bottom: 2.5rem; }

.project-title-section { margin-bottom: 2rem; }

.project-category-wrapper {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 0.875rem;
}

.project-category {
  font-size: 0.72rem;
  font-weight: 600;
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.github-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.25s ease;
}

.github-icon-link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.project-title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.project-subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
}

/* ─── META ─────────────────────────────────────────── */
.project-meta {
  display: flex;
  gap: 3rem;
  padding: 1.75rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-item { display: flex; flex-direction: column; gap: 0.35rem; }

.meta-label {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.meta-value {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
}

/* ─── HERO IMAGE ───────────────────────────────────── */
.project-hero {
  position: relative;
  margin: 2.5rem 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-hero:hover { transform: scale(1.005); }
.project-hero:hover .zoom-indicator { opacity: 1; }

.project-hero img {
  width: 100%;
  height: auto;
  display: block;
}

.zoom-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(59, 130, 246, 0.9);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

/* ─── CONTENT SECTIONS ─────────────────────────────── */
.project-content { margin-top: 0.5rem; }

.content-section { margin-bottom: 3rem; }

.section-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.25rem;
  font-weight: 700;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.section-text {
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.05rem;
  line-height: 1.8;
}

/* ─── TECH STACK ───────────────────────────────────── */
.tech-stack { display: flex; flex-wrap: wrap; gap: 0.6rem; }

.tech-tag {
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
  padding: 0.5rem 1.1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.25s ease;
}

.tech-tag:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

/* ─── ARCHITECTURE ─────────────────────────────────── */
.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.architecture-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.25rem;
  border-radius: 12px;
  transition: all 0.25s ease;
}

.architecture-item:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-3px);
  background: rgba(59, 130, 246, 0.05);
}

.architecture-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.architecture-content { display: flex; flex-direction: column; gap: 0.2rem; }

.architecture-label {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.architecture-value {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
}

/* ─── FEATURES ─────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 1.25rem;
  border-radius: 10px;
  transition: all 0.25s ease;
}

.feature-item:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.feature-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.feature-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ─── GALLERY ──────────────────────────────────────── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
  border-color: rgba(59, 130, 246, 0.3);
}

.gallery-item:hover .gallery-overlay { opacity: 1; }

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #fff;
}

/* ─── PROJECT LINKS ────────────────────────────────── */
.project-links { display: flex; flex-wrap: wrap; gap: 1rem; }

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 1.75rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.25s ease;
  border: 1px solid transparent;
}

.live-link {
  background: #3b82f6;
  color: #fff;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.live-link:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.github-link {
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border-color: rgba(255, 255, 255, 0.15);
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  transform: translateY(-2px);
}

/* ─── PROJECT NAVIGATION ───────────────────────────── */
.project-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-btn {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  padding: 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: left;
}

.next-btn { text-align: right; }

.nav-btn-direction {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3b82f6;
  display: block;
}

.nav-btn-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-btn:hover:not(.nav-btn--disabled) {
  border-color: rgba(59, 130, 246, 0.4);
  background: rgba(59, 130, 246, 0.06);
  transform: translateY(-2px);
}

.nav-btn:hover:not(.nav-btn--disabled) .nav-btn-title {
  color: #fff;
}

.nav-btn--disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ─── LIGHTBOX ─────────────────────────────────────── */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.96);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 0; right: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  z-index: 10001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: rotate(90deg);
}

.lightbox-image-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  z-index: 10001;
}

.lightbox-nav:hover {
  background: rgba(59, 130, 246, 0.7);
  border-color: transparent;
  transform: translateY(-50%) scale(1.08);
}

.lightbox-prev { left: 16px; }
.lightbox-next { right: 16px; }

.lightbox-counter {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.82rem;
  z-index: 10001;
}

.lightbox-thumbnails {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 0.75rem 0;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: rgba(59, 130, 246, 0.5) transparent;
}

.thumbnail {
  flex-shrink: 0;
  width: 80px;
  height: 56px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.25s ease;
  opacity: 0.5;
}

.thumbnail:hover { opacity: 0.8; }
.thumbnail.active { opacity: 1; border-color: #3b82f6; }

.thumbnail img { width: 100%; height: 100%; object-fit: cover; }

.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.3s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }

/* ─── TABLET ───────────────────────────────────────── */
@media (max-width: 768px) {
  .project-detail { padding: 7.5rem 1.25rem 3rem; }

  .back-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -5.8rem;
  }

  .project-title { font-size: 2.2rem; }
  .project-subtitle { font-size: 0.95rem; }

  .project-meta { flex-direction: column; gap: 1.25rem; }

  .architecture-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: 1fr; }

  .project-navigation { flex-direction: column; }

  .project-links { flex-direction: column; }
  .project-link { justify-content: center; }

  .lightbox-overlay { padding: 1rem; }
  .lightbox-container { height: 95vh; }
  .lightbox-nav { width: 40px; height: 40px; }
  .lightbox-prev { left: 8px; }
  .lightbox-next { right: 8px; }
  .thumbnail { width: 60px; height: 44px; }
}

/* ─── MÓVIL PEQUEÑO ────────────────────────────────── */
@media (max-width: 480px) {
  .project-detail { padding: 7rem 1rem 2.5rem; }
  .back-btn-wrapper { margin-top: -5.8rem; }
  .project-title { font-size: 1.65rem; }
  .section-title { font-size: 1.15rem; }
}
</style>