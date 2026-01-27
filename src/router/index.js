import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Portfolio
  },
  {
    path: '/proyectos/:id', // Ruta dinámica con parámetro :id
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router