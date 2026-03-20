<template>
  <div>
    <div v-if="isOpen" class="sidebar-overlay" @click="closeSidebar"></div>

    <aside class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <div class="sidebar-header">
        <div class="profile-image">
          <img src="/images/me/1.jpg" alt="Diego Rojas García" />
        </div>
        <h2 class="profile-name">Diego Rojas García</h2>
        <p class="profile-title">Desarrollador de Software - fullstack</p>
      </div>

      <nav class="navigation">
        <router-link to="/about"     class="nav-item" active-class="active" @click="closeSidebar">
          <i class="fas fa-user"></i><span>Sobre mí</span>
        </router-link>
        <router-link to="/resume"    class="nav-item" active-class="active" @click="closeSidebar">
          <i class="fas fa-file-alt"></i><span>Currículum</span>
        </router-link>
        <router-link to="/proyectos" class="nav-item" active-class="active" @click="closeSidebar">
          <i class="fas fa-briefcase"></i><span>Proyectos</span>
        </router-link>
        <router-link to="/contact"   class="nav-item" active-class="active" @click="closeSidebar">
          <i class="fas fa-envelope"></i><span>Contacto</span>
        </router-link>
      </nav>

      <!-- Toggle de tema -->
      <div class="theme-row" @click="toggleTheme">
        <div class="theme-row-left">
          <span class="theme-icon">
            <svg v-if="isDark" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1"  x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1"  y1="12" x2="3"  y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78"  x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
            </svg>
            <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </span>
          <span class="theme-label">{{ isDark ? 'Modo claro' : 'Modo oscuro' }}</span>
        </div>
        <!-- Pill switch -->
        <div class="theme-pill" :class="{ 'pill-dark': isDark }">
          <div class="theme-pill-thumb"></div>
        </div>
      </div>

      <div class="social-links">
        <a href="https://github.com/rojasgadiego"        target="_blank" class="social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/diego-rojas-garcia" target="_blank" class="social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:rojasgadiego@gmail.com"          target="_blank" class="social-link" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/56961282075"              target="_blank" class="social-link" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>

      <button class="close-button" @click="closeSidebar">
        <i class="fas fa-times"></i>
      </button>
    </aside>

    <button class="mobile-toggle" @click="toggleSidebar" :class="{ 'hidden': isOpen }">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<script>
import { useThemeStore } from '../store/theme'
import { computed } from 'vue'

export default {
  name: 'Sidebar',
  setup() {
    const themeStore = useThemeStore()
    const isDark = computed(() => themeStore.isDark)
    const toggleTheme = () => themeStore.toggleTheme()
    return { isDark, toggleTheme }
  },
  data() {
    return { isOpen: false }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
      this.toggleBodyScroll()
    },
    closeSidebar() {
      this.isOpen = false
      this.toggleBodyScroll()
    },
    toggleBodyScroll() {
      if (window.innerWidth <= 768) {
        document.body.style.overflow = this.isOpen ? 'hidden' : ''
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isOpen = false
        document.body.style.overflow = ''
      }
    })
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* ─── SIDEBAR ──────────────────────────────────────── */
.sidebar {
  position: fixed;
  left: 0; top: 0;
  width: 250px;
  height: 100vh;
  background: #0a0a0a;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
  color: #fff;
  padding: 2rem 0;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ─── HEADER ───────────────────────────────────────── */
.sidebar-header {
  text-align: center;
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-image {
  width: 100px; height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #3b82f6;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}

.profile-image img { width: 100%; height: 100%; object-fit: cover; }

.profile-name  { font-size: 1.5rem; font-weight: 600; margin: 0; color: #fff; }
.profile-title { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-top: 0.5rem; font-weight: 400; }

/* ─── NAV ──────────────────────────────────────────── */
.navigation { padding: 1rem 0; flex: 1; }

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-item i    { width: 20px; margin-right: 1rem; font-size: 1.1rem; }
.nav-item span { font-size: 0.95rem; font-weight: 400; }

.nav-item:hover { color: #fff; background: rgba(59, 130, 246, 0.1); }

.nav-item.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  border-left: 3px solid #3b82f6;
}

/* ─── TOGGLE DE TEMA ───────────────────────────────── */
.theme-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  margin: 0 0.75rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.2s ease, border-color 0.2s ease;
  user-select: none;
}

.theme-row:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.14);
}

.theme-row-left {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.theme-icon {
  color: rgba(255, 255, 255, 0.65);
  display: flex;
  align-items: center;
}

.theme-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
}

/* Pill switch */
.theme-pill {
  width: 34px;
  height: 18px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  transition: background 0.25s ease;
  flex-shrink: 0;
}

.theme-pill.pill-dark {
  background: #3b82f6;
}

.theme-pill-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: transform 0.25s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.theme-pill.pill-dark .theme-pill-thumb {
  transform: translateX(16px);
}

/* ─── REDES SOCIALES ───────────────────────────────── */
.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link {
  width: 36px; height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.social-link:hover {
  background: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
}

/* ─── BOTÓN CERRAR (solo móvil) ────────────────────── */
.close-button { display: none; }
.sidebar-overlay { display: none; }
.mobile-toggle { display: none; }

/* ─── TABLET ───────────────────────────────────────── */
@media (max-width: 968px) {
  .sidebar { width: 280px; }
}

/* ─── MÓVIL ────────────────────────────────────────── */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    width: 280px;
    z-index: 1001;
  }

  .sidebar.sidebar-open { transform: translateX(0); }

  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .close-button {
    display: flex;
    position: absolute;
    top: 1rem; right: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: none;
    width: 40px; height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }

  .close-button:hover { background: rgba(255,255,255,0.2); transform: rotate(90deg); }

  .mobile-toggle {
    display: flex;
    position: fixed;
    top: 1.5rem; left: 1.5rem;
    z-index: 998;
    background: #3b82f6;
    color: #fff;
    border: none;
    width: 50px; height: 50px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    transition: all 0.3s ease;
  }

  .mobile-toggle:hover  { background: #2563eb; transform: scale(1.05); }
  .mobile-toggle:active { transform: scale(0.95); }
  .mobile-toggle.hidden { opacity: 0; pointer-events: none; }

  .sidebar-header { padding: 3rem 1.5rem 1.5rem; }
  .profile-image  { width: 80px; height: 80px; }
  .profile-name   { font-size: 1.3rem; }
}

/* ─── MÓVIL PEQUEÑO ────────────────────────────────── */
@media (max-width: 480px) {
  .sidebar { width: 85vw; max-width: 300px; }

  .mobile-toggle { width: 45px; height: 45px; top: 1rem; left: 1rem; }

  .profile-image { width: 70px; height: 70px; }
  .profile-name  { font-size: 1.2rem; }
  .social-links  { gap: 0.5rem; }
  .social-link   { width: 32px; height: 32px; font-size: 0.85rem; }
  .nav-item      { padding: 0.75rem 1.25rem; }
  .nav-item span { font-size: 0.9rem; }
}

/* ─── SCROLLBAR ────────────────────────────────────── */
.sidebar::-webkit-scrollbar       { width: 6px; }
.sidebar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
.sidebar::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.5); border-radius: 3px; }
.sidebar::-webkit-scrollbar-thumb:hover { background: rgba(59,130,246,0.7); }
</style>