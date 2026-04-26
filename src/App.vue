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
    // HomeButton,
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

    return { isMobile }
  }
}
</script>

<style>
/* ─── TOKENS DE TEMA ────────────────────────────────── */
:root[data-theme="dark"],
:root:not([data-theme]) {
  --bg-primary:             #0a0a0a;
  --bg-secondary:           #111111;
  --bg-card:                rgba(255, 255, 255, 0.03);
  --bg-card-hover:          rgba(255, 255, 255, 0.06);

  --text-primary:           #ffffff;
  --text-secondary:         rgba(255, 255, 255, 0.6);
  --text-muted:             rgba(255, 255, 255, 0.35);

  --border-subtle:          rgba(255, 255, 255, 0.06);
  --border-default:         rgba(255, 255, 255, 0.1);
  --border-strong:          rgba(255, 255, 255, 0.2);

  --accent-primary:         #3b82f6;
  --accent-primary-glow:    rgba(59, 130, 246, 0.4);
  --accent-primary-hover:   #2563eb;
  --accent-secondary:       #8b5cf6;

  --badge-bg:               rgba(59, 130, 246, 0.1);
  --badge-border:           rgba(59, 130, 246, 0.3);
  --badge-bg-hover:         rgba(59, 130, 246, 0.2);

  --btn-ghost-bg:           rgba(255, 255, 255, 0.05);
  --btn-ghost-border:       rgba(255, 255, 255, 0.1);
  --btn-ghost-bg-hover:     rgba(255, 255, 255, 0.1);
  --btn-ghost-border-hover: rgba(255, 255, 255, 0.2);

  --stat-number:            #3b82f6;
  --stat-label:             rgba(255, 255, 255, 0.5);

  --aura-a:                 rgba(59, 130, 246, 0.1);
  --aura-b:                 rgba(147, 51, 234, 0.1);

}

:root[data-theme="light"] {
  --bg-primary:             #f7f6f3;
  --bg-secondary:           #f0efe9;
  --bg-card:                rgba(0, 0, 0, 0.025);
  --bg-card-hover:          rgba(0, 0, 0, 0.045);

  --text-primary:           #1a1917;
  --text-secondary:         rgba(26, 25, 23, 0.62);
  --text-muted:             rgba(26, 25, 23, 0.38);

  --border-subtle:          rgba(26, 25, 23, 0.06);
  --border-default:         rgba(26, 25, 23, 0.1);
  --border-strong:          rgba(26, 25, 23, 0.18);

  --accent-primary:         #1e4ed8;
  --accent-primary-glow:    rgba(30, 78, 216, 0.22);
  --accent-primary-hover:   #1a42c2;
  --accent-secondary:       #6d28d9;

  --badge-bg:               rgba(30, 78, 216, 0.07);
  --badge-border:           rgba(30, 78, 216, 0.22);
  --badge-bg-hover:         rgba(30, 78, 216, 0.13);

  --btn-ghost-bg:           rgba(26, 25, 23, 0.04);
  --btn-ghost-border:       rgba(26, 25, 23, 0.1);
  --btn-ghost-bg-hover:     rgba(26, 25, 23, 0.08);
  --btn-ghost-border-hover: rgba(26, 25, 23, 0.18);

  --stat-number:            #1e4ed8;
  --stat-label:             rgba(26, 25, 23, 0.5);

  --aura-a:                 rgba(30, 78, 216, 0.07);
  --aura-b:                 rgba(109, 40, 217, 0.06);

}

/* ─── RESET GLOBAL ──────────────────────────────────── */
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
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.2s ease;
}

#app {
  min-height: 100vh;
}
</style>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative;
  overflow-x: hidden;
  transition: background-color 0.3s ease;
}

.main-content {
  flex: 1;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* ─── RESPONSIVE ────────────────────────────────────── */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }

  .theme-toggle {
    top: 1rem;
    right: 1rem;
  }
}

/* ─── TRANSICIONES DE TEMA (solo views, no Sidebar) ─── */
/*
  En lugar de un overlay global, animamos directamente las
  propiedades CSS de los elementos dentro de .main-content.
  El Sidebar queda excluido y no se ve afectado.
*/
.main-content *,
.main-content *::before,
.main-content *::after {
  transition:
    background-color 0.4s ease,
    border-color     0.4s ease,
    color            0.3s ease,
    box-shadow       0.4s ease !important;
}

/* Excluir elementos que tienen sus propias animaciones para no interferir */
.main-content .slide-up-enter-active,
.main-content .slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* ─── OVERLAY DE TRANSICIÓN ─────────────────────────── */
/* ─── TRANSICIONES DE RUTA ──────────────────────────── */
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