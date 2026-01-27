export const projects = [
{
  id: 1,
  cardTitle: 'Proyecto de Título',  // O 'Proyecto Freelance', 'Proyecto Comercial', etc.
  mainTechnologies: ['.NET', 'NestJS', 'Next.js'],
  title: 'Plataforma Web de Monitoreo en Tiempo Real para Laboratorios Académicos',
  subtitle: 'Sistema integral con captura automática de pantallas, procesamiento de video y dashboard de visualización en tiempo real',
  category: 'Full Stack Development & DevOps',
  client: 'Universidad Católica del Norte - Escuela de Ingeniería Coquimbo',
  date: 'Junio 2024',
  role: 'Full Stack Developer & DevOps Engineer',
  image: '/images/proyectos/proyectotitulo/imgproject2.png',
  heroImage: '/images/proyectos/proyectotitulo/imgproject2.png',
  description: 'Desarrollo de una plataforma web completa de monitoreo en tiempo real para los laboratorios de ingeniería de la Universidad Católica del Norte. El sistema captura automáticamente las pantallas de los computadores de múltiples laboratorios, procesa y almacena videos de las sesiones, y proporciona un dashboard intuitivo para que los profesores puedan supervisar las actividades académicas de los estudiantes. La solución integra un servicio de Windows para captura de pantallas, transferencia segura de archivos mediante SSH, procesamiento de video, y una interfaz web moderna para visualización y gestión.',
  challenge: 'El principal desafío fue crear una arquitectura distribuida que pudiera operar de manera confiable en múltiples componentes: (1) Un servicio Windows que captura pantallas automáticamente sin interrumpir las actividades de los estudiantes, (2) Transferencia segura y eficiente de grandes volúmenes de imágenes desde máquinas Windows hacia un servidor CentOS mediante SSH, (3) Procesamiento y conversión de imágenes a videos en el servidor, (4) Desarrollo de un backend robusto con NestJS que maneje autenticación por tokens, gestión de laboratorios, streaming de videos y monitoreo en tiempo real, (5) Diseño de una interfaz web intuitiva con Next.js que permita a los profesores visualizar múltiples pantallas simultáneamente, filtrar por fecha, actividad y computador, y reproducir videos históricos de las sesiones. La sincronización entre todos estos componentes, la optimización del ancho de banda, y garantizar la privacidad de los estudiantes fueron aspectos críticos del proyecto.',
  technologies: [
    '.NET Framework',
    'Windows Service',
    'SSH.NET',
    'CentOS Linux',
    'NestJS',
    'Next.js',
    'PostgreSQL',
    'TypeScript',
    'Nginx',
    'Docker',
    'FFmpeg',
    'JWT Authentication',
    'WebSocket',
    'REST API'
  ],
  gallery: [
    '/images/proyectos/proyectotitulo/imgproject1.png',
    '/images/proyectos/proyectotitulo/imgproject2.png',
    '/images/proyectos/proyectotitulo/imgproject3.png'
  ],
  features: [
    'Servicio Windows para captura automática de pantallas en segundo plano',
    'Transferencia segura de archivos mediante protocolo SSH',
    'Procesamiento automático de imágenes a videos con FFmpeg',
    'Dashboard en tiempo real con visualización de múltiples laboratorios',
    'Sistema de autenticación seguro con JWT tokens',
    'Reproducción de videos históricos de sesiones académicas',
    'Filtros avanzados por fecha, actividad y computador específico',
    'Vista en mosaico de múltiples pantallas simultáneas',
    'Gestión de laboratorios (labcivil4, labcivil7, Laboratorio 207, Laboratorio 208)',
    'Arquitectura distribuida Windows-Linux con sincronización automática',
    'Interfaz intuitiva y responsive para profesores',
    'Monitoreo no intrusivo para estudiantes',
    'Sistema de logs y trazabilidad de actividades',
    'Almacenamiento optimizado de videos con compresión',
    'Servidor web con Nginx y contenedores Docker'
  ],
  architecture: {
    captureService: 'Servicio Windows (.NET Framework)',
    fileTransfer: 'SSH Protocol (Windows → CentOS)',
    videoProcessing: 'FFmpeg en CentOS Linux',
    backend: 'NestJS con REST API y WebSocket',
    frontend: 'Next.js (React)',
    database: 'PostgreSQL',
    authentication: 'JWT Token',
    webServer: 'Nginx',
    containerization: 'Docker',
    apiStyle: 'RESTful API + WebSocket para tiempo real'
  },
  technicalHighlights: [
    {
      title: 'Captura Automática',
      description: 'Servicio Windows desarrollado en .NET Framework que opera silenciosamente en segundo plano, capturando pantallas a intervalos configurables sin afectar el rendimiento del sistema.'
    },
    {
      title: 'Transferencia SSH Segura',
      description: 'Implementación de SSH.NET para transferencia cifrada y confiable de archivos desde múltiples máquinas Windows hacia el servidor CentOS central.'
    },
    {
      title: 'Procesamiento de Video',
      description: 'Pipeline automatizado con FFmpeg que convierte secuencias de imágenes en videos comprimidos y optimizados para reproducción web.'
    },
    {
      title: 'Monitoreo en Tiempo Real',
      description: 'Dashboard web con actualización en vivo mediante WebSocket que permite visualizar el estado actual de todos los computadores en los laboratorios.'
    }
  ],
  results: [
    { value: '4', metric: 'Laboratorios Monitoreados' },
    { value: '50+', metric: 'Computadores Gestionados' },
    { value: '99%', metric: 'Uptime del Sistema' },
    { value: '100%', metric: 'Transferencia Segura (SSH)' }
  ],
  projectType: 'Proyecto de Título',
  liveUrl: null,
  githubUrl: 'https://github.com/tu-usuario/masanalytics-frontend'
},
{
  id: 2,
  title: 'Sistema de Gestión Integral para Florería con Control de Inventario y Punto de Venta',
  subtitle: 'Plataforma completa de administración de ventas, inventario y trazabilidad para negocio floral',
  cardTitle: 'Proyecto Freelance',  // O 'Proyecto Freelance', 'Proyecto Comercial', etc.
  mainTechnologies: ['NestJS', 'Next.js', 'PostgreSQL'],
  category: 'Full Stack Development',
  client: 'Florería Colibrí',
  date: 'Septiembre 2025',
  role: 'Full Stack Developer',
  image: '/images/proyectos/floreria-colibri/1.png',
  heroImage: '/images/proyectos/floreria-colibri/1.png',
  description: 'Sistema web integral desarrollado para la gestión completa de una florería, incluyendo control de inventario por lotes con alertas de vencimiento, punto de venta con múltiples métodos de pago, generación automática de códigos de barras, gestión de productos categorizados (flores, eventos, accesorios), seguimiento de movimientos y dashboard estadístico para análisis del negocio en tiempo real. El sistema está construido sobre una arquitectura monolítica en el backend con NestJS, implementando autenticación JWT y gestión de contexto, mientras que el frontend utiliza Vue.js para una experiencia de usuario fluida y reactiva.',
  challenge: 'El principal desafío consistió en desarrollar un sistema de gestión de inventario especializado para productos perecederos (flores), implementando un control por lotes que permitiera rastrear fechas de ingreso y vencimiento, alertas automáticas para stock crítico, y trazabilidad completa de movimientos. Además, se requería un punto de venta ágil con carrito de compras, cálculo automático de IVA, soporte para múltiples métodos de pago (efectivo y transferencia electrónica), y generación dinámica de códigos de barras únicos para cada producto. La arquitectura monolítica del backend permitió una integración cohesiva entre todos los módulos del sistema, facilitando transacciones consistentes y manteniendo la integridad de los datos a través de PostgreSQL. La autenticación segura mediante JWT y el registro completo de todas las acciones de usuarios fueron requisitos fundamentales para garantizar la integridad y auditabilidad del sistema.',
  technologies: [
    'NestJS',
    'Vue.js',
    'PostgreSQL',
    'JWT Authentication',
    'TypeScript',
    'Node.js',
    'REST API',
    'Monolithic Architecture',
    'Barcode Generation',
    'Context Management'
  ],
  gallery: [
    '/images/proyectos/floreria-colibri/1.png',
    '/images/proyectos/floreria-colibri/2.png',
    '/images/proyectos/floreria-colibri/3.png',
    '/images/proyectos/floreria-colibri/4.png',
    '/images/proyectos/floreria-colibri/5.png',
    '/images/proyectos/floreria-colibri/6.png',
    '/images/proyectos/floreria-colibri/7.png',
    '/images/proyectos/floreria-colibri/8.png',
    '/images/proyectos/floreria-colibri/9.png',
    '/images/proyectos/floreria-colibri/10.png',
    '/images/proyectos/floreria-colibri/11.png',
    '/images/proyectos/floreria-colibri/12.png'
  ],
  features: [
    'Arquitectura monolítica con NestJS para backend cohesivo',
    'Sistema de autenticación seguro con JWT',
    'Gestión completa de inventario por lotes con control de vencimientos',
    'Punto de venta con carrito de compras y múltiples métodos de pago',
    'Generación automática de códigos de barras para productos',
    'Alertas de stock crítico y productos próximos a vencer',
    'Categorización de productos (Flores, Eventos, Accesorios)',
    'Gestión de clientes, proveedores y usuarios del sistema',
    'Registro completo de movimientos (entradas/salidas/ventas)',
    'Dashboard con estadísticas en tiempo real del negocio',
    'Cálculo automático de IVA y totales de venta',
    'Trazabilidad completa de operaciones por usuario con context management',
    'Sistema de ramos preparados para agilizar ventas',
    'Base de datos relacional PostgreSQL para integridad de datos'
  ],
  architecture: {
    backend: 'Monolítico - NestJS',
    frontend: 'Vue.js',
    database: 'PostgreSQL',
    authentication: 'JWT Token',
    apiStyle: 'RESTful API'
  },
  liveUrl: null,
  githubUrl: 'https://github.com/tu-usuario/masanalytics-frontend'
},
{
  id: 3,
  title: 'Sistema de Gestión de Call Center con Agentes de IA',
  subtitle: 'Plataforma web para control y monitoreo de agentes virtuales de atención telefónica',
  cardTitle: 'Prueba Técnica',  // O 'Proyecto Freelance', 'Proyecto Comercial', etc.
  mainTechnologies: ['Vue.js'],
  category: 'Frontend Development',
  client: 'Consultora Tecnológica - Prueba Técnica',
  date: 'Agosto 2024',
  role: 'Frontend Developer',
  image: '/images/proyectos/masanalitycs/masa1.png',
  heroImage: '/images/proyectos/masanalitycs/masa1.png',
  description: 'Desarrollo de una aplicación web completa para la gestión y monitoreo de un call center con agentes de inteligencia artificial. El sistema permite ejecutar llamadas individuales o masivas, monitorear en tiempo real el estado de las llamadas, gestionar múltiples agentes virtuales con diferentes perfiles y voces, y visualizar métricas clave del rendimiento del centro de contacto. La plataforma incluye autenticación de usuarios, dashboard con estadísticas, log detallado de llamadas con estados (planificada, en curso, finalizada, cancelada), y un sistema completo de administración de agentes de IA con personalización de scripts y voces.',
  challenge: 'El desafío principal consistió en crear una interfaz de usuario intuitiva y profesional que pudiera manejar la complejidad de un sistema de call center con IA. Fue necesario implementar: (1) Un sistema de autenticación robusto con diferentes roles de usuario, (2) Dashboard con métricas en tiempo real que mostrara cantidad de llamadas, tasas de contacto, duración promedio y tasa de éxito, (3) Sistema de ejecución de llamadas con dos modalidades (individual y masiva), (4) Monitor de llamadas con actualización en tiempo real y filtros por fecha y estado, (5) Gestión completa de agentes virtuales con configuración de nombres, scripts personalizados y selección de voces en diferentes idiomas, (6) Panel de configuración de cuenta con gestión de perfil y seguridad. Todo esto utilizando Vue.js como framework principal, experimentando con sus capacidades y aprendiendo buenas prácticas de desarrollo frontend durante el proceso.',
  technologies: [
    'Vue.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Vuex (State Management)',
    'Vue Router',
    'Axios',
    'RESTful API Integration',
    'Responsive Design',
    'Component-Based Architecture'
  ],
  gallery: [
    '/images/proyectos/masanalitycs/masa1.png',
    '/images/proyectos/masanalitycs/masa2.png',
    '/images/proyectos/masanalitycs/masa3.png',
    '/images/proyectos/masanalitycs/masa4.png',
    '/images/proyectos/masanalitycs/masa5.png',
    '/images/proyectos/masanalitycs/masa6.png'
  ],
  features: [
    'Sistema de autenticación con roles (Admin y Usuario)',
    'Dashboard con métricas clave del call center',
    'Ejecución de llamadas individuales personalizadas',
    'Sistema de llamadas masivas para múltiples contactos',
    'Monitor en tiempo real con log detallado de llamadas',
    'Estados de llamada: Planificada, En Curso, Finalizada, Cancelada',
    'Filtros por fecha y estado en el monitor',
    'Gestión completa de agentes virtuales de IA',
    'Configuración de scripts/prompts personalizados para cada agente',
    'Selección de voces sintéticas en múltiples idiomas (María/Pedro - Español, Sarah - Inglés)',
    'Panel de configuración de cuenta de usuario',
    'Cambio de contraseña con validación',
    'Actualización de correo electrónico',
    'Información de seguridad con último acceso',
    'Barra lateral de navegación intuitiva',
    'Diseño responsive y moderno',
    'Interfaz limpia con paleta de colores profesional'
  ],
  uiComponents: {
    authentication: 'Pantalla de login con credenciales de demostración',
    dashboard: 'Tarjetas con métricas principales y comparativas',
    callExecution: 'Dual: Llamadas individuales y masivas',
    monitoring: 'Tabla con log completo y acciones por llamada',
    agentManagement: 'CRUD de agentes con configuración detallada',
    settings: 'Panel multi-sección para gestión de cuenta'
  },
  technicalDetails: [
    {
      title: 'Arquitectura de Componentes',
      description: 'Desarrollo siguiendo la arquitectura de componentes de Vue.js, creando componentes reutilizables y mantenibles para cada sección de la aplicación.'
    },
    {
      title: 'Gestión de Estado',
      description: 'Implementación de Vuex para manejo centralizado del estado de la aplicación, facilitando la comunicación entre componentes y la persistencia de datos.'
    },
    {
      title: 'Routing',
      description: 'Configuración de Vue Router para navegación entre vistas, con guards de navegación para proteger rutas según roles de usuario.'
    },
    {
      title: 'Integración con API',
      description: 'Consumo de API REST mediante Axios para operaciones CRUD, autenticación y actualización de datos en tiempo real.'
    }
  ],
  learningOutcomes: [
    'Experimentación profunda con Vue.js y su ecosistema',
    'Implementación de patrones de diseño frontend modernos',
    'Manejo de estado complejo con Vuex',
    'Creación de interfaces intuitivas para sistemas complejos',
    'Desarrollo de componentes reutilizables',
    'Buenas prácticas en estructura de proyecto Vue'
  ],
  projectType: 'Prueba Técnica',
  developmentContext: 'Proyecto desarrollado como prueba técnica para consultora, utilizado como oportunidad de experimentación y aprendizaje profundo de Vue.js',
  liveUrl: null,
  githubUrl: 'https://github.com/tu-usuario/masanalytics-frontend'
}
]

// Función helper para obtener un proyecto por ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id))
}

// Función helper para obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category)
}