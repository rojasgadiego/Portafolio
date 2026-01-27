<template>
  <transition name="fade-slide">
    <button 
      v-if="showButton" 
      @click="goToHome"
      class="home-button"
      :class="{ 'show': showButton }"
      aria-label="Volver al inicio"
    >
      <i class="fas fa-home"></i>
      <span class="tooltip">Volver al inicio</span>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'HomeButton',
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    this.checkRoute()
    // Mostrar el botón después de un pequeño delay
    setTimeout(() => {
      this.showButton = true
    }, 500)
  },
  watch: {
    '$route'() {
      this.checkRoute()
    }
  },
  methods: {
    checkRoute() {
      // Mostrar el botón solo si NO estamos en la página de inicio
      this.showButton = this.$route.path !== '/'
    },
    goToHome() {
      if (this.$route.path !== '/about') {
        this.$router.push('/about')
      }
    }
  }
}
</script>

<style scoped>
.home-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-button:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6);
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}

.home-button:active {
  transform: translateY(-2px) scale(1.05);
}

.home-button i {
  transition: transform 0.3s ease;
}

.home-button:hover i {
  transform: scale(1.2);
}

/* Tooltip */
.tooltip {
  position: absolute;
  right: 70px;
  background: #1f2937;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.tooltip::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border: 8px solid transparent;
  border-left-color: #1f2937;
}

.home-button:hover .tooltip {
  opacity: 1;
}

/* Animación de entrada */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .home-button {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .tooltip {
    display: none; /* Ocultar tooltip en móvil */
  }
}

/* Animación de pulso sutil */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  }
  50% {
    box-shadow: 0 4px 30px rgba(59, 130, 246, 0.6);
  }
}

.home-button.show {
  animation: pulse 2s infinite;
}
</style>