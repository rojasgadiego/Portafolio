<template>
  <div id="app" class="app-container">
    <Sidebar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="slide-up" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!-- Mostrar HomeButton solo en móvil si es necesario -->
    <HomeButton v-if="isMobile" />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
// import HomeButton from './components/HomeButton.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    //HomeButton
  },
  setup() {
    const isMobile = ref(window.innerWidth <= 768)
    
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768
    }
    
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
    
    return {
      isMobile
    }
  }
}
</script>

<style>
/* Estilos globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0a0a0a;
}

#app {
  min-height: 100vh;
}
</style>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: #0a0a0a;
  position: relative;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}

/* Transiciones */
.slide-up-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>