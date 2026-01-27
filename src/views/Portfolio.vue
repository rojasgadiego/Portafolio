<template>
  <div class="portfolio">
    <div class="container">
      <h1 class="page-title">Proyectos</h1>
      
      <div class="portfolio-grid">
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
                <span class="project-card-label">{{ project.cardTitle || project.projectType || 'Proyecto' }}</span>
                <div class="tech-badges" v-if="project.mainTechnologies && project.mainTechnologies.length > 0">
                  <span v-for="(tech, index) in project.mainTechnologies" :key="index" class="tech-badge">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
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
    return {
      projects
    }
  },
  methods: {
    viewProject(id) {
      this.$router.push(`/proyectos/${id}`)
    }
  }
}
</script>

<style scoped>
.portfolio {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
}

.portfolio-item:hover {
  transform: translateY(-10px);
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.portfolio-image {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

/* Card Info Section (Outside Overlay) */
.project-card-info {
  padding: 1.5rem;
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 0 0 15px 15px;
}

/* Card Header with Title and Tech Badges */
.project-card-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-card-label {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(59, 130, 246, 0.3);
  border-color: #3b82f6;
  transform: scale(1.05);
}

.portfolio-overlay h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.portfolio-overlay p {
  color: #3b82f6;
  margin-bottom: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .portfolio-overlay h3 {
    font-size: 1.25rem;
  }

  .tech-badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>