<template>
  <div class="project-detail">
    <div class="container">
      <!-- Header del Proyecto -->
      <div class="project-header">
        <button @click="goBack" class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Volver
        </button>
        
        <div class="project-title-section">
          <div class="project-category-wrapper">
            <span class="project-category">{{ project.category }}</span>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="github-icon-link" title="Ver repositorio en GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>

      <!-- Contenido del Proyecto -->
      <div class="project-content">
        <!-- Descripción -->
        <section class="content-section">
          <h2 class="section-title">Descripción del Proyecto</h2>
          <p class="section-text">{{ project.description }}</p>
        </section>

        <!-- Desafío -->
        <section class="content-section">
          <h2 class="section-title">El Desafío</h2>
          <p class="section-text">{{ project.challenge }}</p>
        </section>

        <!-- Tecnologías -->
        <section class="content-section">
          <h2 class="section-title">Tecnologías Utilizadas</h2>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </section>

        <!-- Arquitectura -->
        <section v-if="project.architecture" class="content-section">
          <h2 class="section-title">Arquitectura</h2>
          <div class="architecture-grid">
            <div class="architecture-item">
              <div class="architecture-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

        <!-- Features -->
        <section v-if="project.features && project.features.length > 0" class="content-section">
          <h2 class="section-title">Características Principales</h2>
          <div class="features-grid">
            <div v-for="(feature, index) in project.features" :key="index" class="feature-item">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="feature-text">{{ feature }}</span>
            </div>
          </div>
        </section>

        <!-- Galería de Imágenes -->
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
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <!-- Links del Proyecto -->
        <section class="content-section">
          <div class="project-links">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="project-link live-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Ver Proyecto en Vivo
            </a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="project-link github-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Ver Repositorio en GitHub
            </a>
          </div>
        </section>
      </div>

      <!-- Navegación a otros proyectos -->
      <div class="project-navigation">
        <button class="nav-btn prev-btn">
          <span>← Proyecto Anterior</span>
        </button>
        <button class="nav-btn next-btn">
          <span>Siguiente Proyecto →</span>
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <transition name="lightbox">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-container">
          <!-- Botón Cerrar -->
          <button class="lightbox-close" @click="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Botón Anterior -->
          <button 
            v-if="currentImageIndex > 0"
            class="lightbox-nav lightbox-prev" 
            @click="previousImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <!-- Imagen -->
          <div class="lightbox-image-wrapper">
            <img 
              :src="project.gallery[currentImageIndex]" 
              :alt="`${project.title} - imagen ${currentImageIndex + 1}`"
              class="lightbox-image"
            />
          </div>

          <!-- Botón Siguiente -->
          <button 
            v-if="currentImageIndex < project.gallery.length - 1"
            class="lightbox-nav lightbox-next" 
            @click="nextImage"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <!-- Contador -->
          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ project.gallery.length }}
          </div>

          <!-- Thumbnails -->
          <div class="lightbox-thumbnails">
            <div 
              v-for="(image, index) in project.gallery" 
              :key="index"
              class="thumbnail"
              :class="{ active: index === currentImageIndex }"
              @click="currentImageIndex = index"
            >
              <img :src="image" :alt="`Thumbnail ${index + 1}`" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getProjectById } from '../data/projects'

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
    
    if (!this.project) {
      this.$router.push('/portfolio')
    }
  },
  mounted() {
    // Escuchar eventos de teclado para navegación
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  watch: {
    '$route.params.id'(newId) {
      this.project = getProjectById(newId)
    },
    lightboxOpen(isOpen) {
      // Prevenir scroll cuando el lightbox está abierto
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/proyectos')
    },
    openLightbox(index) {
      this.currentImageIndex = index
      this.lightboxOpen = true
    },
    closeLightbox() {
      this.lightboxOpen = false
    },
    nextImage() {
      if (this.currentImageIndex < this.project.gallery.length - 1) {
        this.currentImageIndex++
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    handleKeydown(e) {
      if (!this.lightboxOpen) return
      
      switch(e.key) {
        case 'Escape':
          this.closeLightbox()
          break
        case 'ArrowRight':
          this.nextImage()
          break
        case 'ArrowLeft':
          this.previousImage()
          break
      }
    }
  }
}
</script>

<style scoped>
.project-detail {
  min-height: 100vh;
  padding: 2rem 2rem 4rem;
  background: #1a1a1a;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Header */
.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #333;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.back-btn:hover {
  background: #2d2d2d;
  border-color: #3b82f6;
  transform: translateX(-5px);
}

.project-header {
  margin-bottom: 3rem;
}

.project-title-section {
  margin-bottom: 2rem;
}

.project-category-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-category {
  display: inline-block;
  color: #3b82f6;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.github-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github-icon-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
}

.github-icon-link svg {
  width: 20px;
  height: 20px;
}

.project-title {
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.project-subtitle {
  font-size: 1.25rem;
  color: #888;
  line-height: 1.6;
}

.project-meta {
  display: flex;
  gap: 3rem;
  padding: 2rem 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meta-label {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.meta-value {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Hero Image */
.project-hero {
  position: relative;
  margin-bottom: 4rem;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-hero:hover {
  transform: scale(1.01);
}

.project-hero:hover .zoom-indicator {
  opacity: 1;
}

.project-hero img {
  width: 100%;
  height: auto;
  display: block;
}

.zoom-indicator {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(59, 130, 246, 0.9);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

/* Content Sections */
.content-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.section-text {
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  color: #3b82f6;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
}

/* Architecture Grid */
.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.architecture-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.architecture-item:hover {
  border-color: #3b82f6;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.architecture-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.architecture-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.architecture-label {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.architecture-value {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  padding: 1.25rem;
  border-radius: 10px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #3b82f6;
  transform: translateX(5px);
}

.feature-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-text {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-overlay svg {
  color: white;
}

/* Project Links */
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.live-link {
  background: #3b82f6;
  color: #fff;
}

.live-link:hover {
  background: #2563eb;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.github-link {
  background: transparent;
  color: #fff;
  border-color: #333;
}

.github-link:hover {
  background: #2d2d2d;
  border-color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}

/* Project Navigation */
.project-navigation {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #333;
}

.nav-btn {
  flex: 1;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  border: 1px solid #333;
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  border-color: #3b82f6;
  transform: translateY(-3px);
}

/* ===== LIGHTBOX STYLES ===== */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
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
  top: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-image-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
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
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10001;
}

.lightbox-nav:hover {
  background: rgba(59, 130, 246, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

.lightbox-counter {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 500;
  z-index: 10001;
}

.lightbox-thumbnails {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  max-width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 rgba(255, 255, 255, 0.1);
}

.lightbox-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.lightbox-thumbnails::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.lightbox-thumbnails::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 3px;
}

.thumbnail {
  flex-shrink: 0;
  width: 100px;
  height: 70px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.thumbnail:hover {
  opacity: 1;
  border-color: rgba(59, 130, 246, 0.5);
}

.thumbnail.active {
  opacity: 1;
  border-color: #3b82f6;
  transform: scale(1.05);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-active .lightbox-image,
.lightbox-leave-active .lightbox-image {
  transition: transform 0.3s ease;
}

.lightbox-enter-from .lightbox-image,
.lightbox-leave-to .lightbox-image {
  transform: scale(0.9);
}

/* Responsive */
@media (max-width: 768px) {
  .project-title {
    font-size: 2.5rem;
  }

  .project-meta {
    flex-direction: column;
    gap: 1.5rem;
  }

  .architecture-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .project-navigation {
    flex-direction: column;
  }

  .tech-stack {
    gap: 0.75rem;
  }

  .tech-tag {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .project-links {
    flex-direction: column;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }

  .lightbox-overlay {
    padding: 1rem;
  }

  .lightbox-container {
    height: 95vh;
  }

  .lightbox-nav {
    width: 45px;
    height: 45px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }

  .lightbox-close {
    width: 40px;
    height: 40px;
  }

  .thumbnail {
    width: 70px;
    height: 50px;
  }

  .lightbox-counter {
    top: 10px;
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}
</style>