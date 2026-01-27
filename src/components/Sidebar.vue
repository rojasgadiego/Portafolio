<template>
  <div>
    <!-- Overlay para cerrar el sidebar en móvil -->
    <div 
      v-if="isOpen" 
      class="sidebar-overlay" 
      @click="closeSidebar"
    ></div>

    <aside class="sidebar" :class="{ 'sidebar-open': isOpen }">
      <div class="sidebar-header">
        <div class="profile-image">
          <img src="/images/me/1.jpg" alt="Diego Rojas García" />
        </div>
        <h2 class="profile-name">Diego Rojas García</h2>
        <p class="profile-title">Desarrollador de Software - fullstack</p>
      </div>

      <div class="social-links">
        <a href="https://github.com/rojasgadiego" target="_blank" class="social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/diego-rojas-garcia" target="_blank" class="social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:rojasgadiego@gmail.com" target="_blank" class="social-link" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/56961282075" target="_blank" class="social-link" aria-label="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>

      <nav class="navigation">
        <router-link 
          to="/about" 
          class="nav-item" 
          active-class="active"
          @click="closeSidebar"
        >
          <i class="fas fa-user"></i>
          <span>About</span>
        </router-link>

        <router-link 
          to="/resume" 
          class="nav-item" 
          active-class="active"
          @click="closeSidebar"
        >
          <i class="fas fa-file-alt"></i>
          <span>Resume</span>
        </router-link>

        <router-link 
          to="/proyectos" 
          class="nav-item" 
          active-class="active"
          @click="closeSidebar"
        >
          <i class="fas fa-briefcase"></i>
          <span>Proyectos</span>
        </router-link>

        <!-- <router-link 
          to="/services" 
          class="nav-item" 
          active-class="active"
          @click="closeSidebar"
        >
          <i class="fas fa-cogs"></i>
          <span>Services</span>
        </router-link> -->

        <router-link 
          to="/contact" 
          class="nav-item" 
          active-class="active"
          @click="closeSidebar"
        >
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </router-link>
      </nav>

      <!-- Botón cerrar dentro del sidebar (móvil) -->
      <button class="close-button" @click="closeSidebar">
        <i class="fas fa-times"></i>
      </button>
    </aside>

    <!-- Botón toggle para abrir (móvil) -->
    <button class="mobile-toggle" @click="toggleSidebar" :class="{ 'hidden': isOpen }">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false
    }
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
      // Prevenir scroll del body cuando el sidebar está abierto en móvil
      if (window.innerWidth <= 768) {
        if (this.isOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = ''
        }
      }
    }
  },
  mounted() {
    // Cerrar sidebar al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isOpen = false
        document.body.style.overflow = ''
      }
    })
  },
  beforeUnmount() {
    // Limpiar el overflow del body al destruir el componente
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%);
  color: #fff;
  padding: 2rem 0;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.sidebar-header {
  text-align: center;
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-image {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #3b82f6;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}

.profile-title {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
  font-weight: 400;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link {
  width: 36px;
  height: 36px;
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

.navigation {
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.nav-item i {
  width: 20px;
  margin-right: 1rem;
  font-size: 1.1rem;
}

.nav-item span {
  font-size: 0.95rem;
  font-weight: 400;
}

.nav-item:hover {
  color: #fff;
  background: rgba(59, 130, 246, 0.1);
}

.nav-item.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  border-left: 3px solid #3b82f6;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #3b82f6;
}

/* Botón cerrar (solo visible en móvil) */
.close-button {
  display: none;
}

/* Overlay oscuro (solo móvil) */
.sidebar-overlay {
  display: none;
}

/* Botón toggle para abrir */
.mobile-toggle {
  display: none;
}

/* RESPONSIVE - TABLET Y MÓVIL */
@media (max-width: 968px) {
  .sidebar {
    width: 280px;
  }
}

@media (max-width: 768px) {
  /* Sidebar oculto por defecto en móvil */
  .sidebar {
    transform: translateX(-100%);
    width: 280px;
    z-index: 1001;
  }

  /* Sidebar visible cuando está abierto */
  .sidebar.sidebar-open {
    transform: translateX(0);
  }

  /* Overlay oscuro cuando el sidebar está abierto */
  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Botón cerrar dentro del sidebar */
  .close-button {
    display: flex;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  /* Botón toggle hamburguesa */
  .mobile-toggle {
    display: flex;
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 998;
    background: #3b82f6;
    color: #fff;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
    transition: all 0.3s ease;
  }

  .mobile-toggle:hover {
    background: #2563eb;
    transform: scale(1.05);
  }

  .mobile-toggle:active {
    transform: scale(0.95);
  }

  /* Ocultar el botón toggle cuando el sidebar está abierto */
  .mobile-toggle.hidden {
    opacity: 0;
    pointer-events: none;
  }

  /* Ajustar el header en móvil */
  .sidebar-header {
    padding: 3rem 1.5rem 1.5rem;
  }

  .profile-image {
    width: 80px;
    height: 80px;
  }

  .profile-name {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 85vw;
    max-width: 300px;
  }

  .mobile-toggle {
    width: 45px;
    height: 45px;
    top: 1rem;
    left: 1rem;
  }

  .profile-image {
    width: 70px;
    height: 70px;
  }

  .profile-name {
    font-size: 1.2rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    width: 32px;
    height: 32px;
    font-size: 0.85rem;
  }

  .nav-item {
    padding: 0.75rem 1.25rem;
  }

  .nav-item span {
    font-size: 0.9rem;
  }
}

/* Scrollbar personalizado */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* Transiciones suaves */
.sidebar,
.sidebar-overlay,
.mobile-toggle {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>