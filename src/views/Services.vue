<template>
  <div class="services">
    <div class="container">
      <h1 class="page-title">Servicios</h1>
      <p class="page-subtitle">Soluciones creativas para tus necesidades digitales</p>
      
      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          id: 1,
          icon: 'fas fa-paint-brush',
          title: 'UI/UX Design',
          description: 'Creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.'
        },
        {
          id: 2,
          icon: 'fas fa-code',
          title: 'Aplicaciones Web',
          description: 'Desarrollo de aplicaciones web modernas con Vue.js, Nest.js. escalables y de alto rendimiento.'
        },
        {
          id: 3,
          icon: 'fas fa-chart-line',
          title: 'Consultoría Digital',
          description: 'Asesoramiento estratégico para transformar tu presencia digital.'
        },
        {
          id: 4,
          icon: 'fas fa-rocket',
          title: 'Optimización',
          description: 'Mejora del rendimiento y la conversión de tus plataformas digitales.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
}

.page-subtitle {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1f1f1f 100%);
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.1);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #3b82f6;
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-icon i {
  font-size: 2rem;
  color: #fff;
}

.service-card h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>