<template>
  <div class="resume">
    <div class="container">
      
      <div class="resume-section">
        <h2><i class="fas fa-briefcase"></i> Experiencia Laboral</h2>
        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-date">Jul 2025 - Enero 2026</div>
            <h3>.NET Developer C#</h3>
            <p class="company">XMS - Larrainvial | Santiago, Chile</p>
            <ul class="responsibilities">
              <li>Desarrollo y mantenimiento de aplicaciones backend utilizando .NET Core 6/8</li>
              <li>Actualización y migración de frameworks desde .NET 6 a .NET 8</li>
              <li>Diseño y optimización de procedimientos almacenados en SQL Server</li>
              <li>Resolución de incidencias y análisis de requerimientos técnicos</li>
              <li>Mantención y mejora de funcionalidades existentes en backend end como frontend</li>
            </ul>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">Ago 2024 - Jun 2025</div>
            <h3>.NET Developer C#</h3>
            <p class="company">Socius IARQ - MetLife | Santiago, Chile</p>
            <ul class="responsibilities">
              <li>Desarrollo de servicios RESTful utilizando .NET Core 8</li>
              <li>Optimización de consultas SQL y procedimientos almacenados para DB2 en IBM AS400</li>
              <li>Migración de aplicaciones Genexus v8/v9 a .NET Core 8</li>
            </ul>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">Oct 2021 - Abr 2023</div>
            <h3>Analista de Sistemas de TI</h3>
            <p class="company">Socius IARQ - Banco Santander | Santiago, Chile</p>
            <ul class="responsibilities">
              <li>Monitoreo y mantenimiento preventivo de servidores de producción</li>
              <li>Gestión de más de 700 incidencias a través de ServiceNow</li>
              <li>Manipulación de bases de datos y ejecución de servicios REST/SOAP para la continuidad del sistema en ambiente producción</li>
              <li>Participación en equipos multidisciplinarios para resolver incidentes críticos</li>
            </ul>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-date">Ago 2021 - Oct 2021</div>
            <h3>TIBCO BW Developer</h3>
            <p class="company">Socius IARQ | Coquimbo, Chile</p>
            <ul class="responsibilities">
              <li>Desarrollo de aplicaciones y componentes de TIBCO BW en entorno SOA</li>
              <li>Confección de documentos técnicos detallados</li>
              <li>Integración de procedimientos almacenados, llamados REST/SOAP en flujos de trabajo del negocio</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h2><i class="fas fa-graduation-cap"></i> Educación</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Ene 2019 - Dic 2024</div>
            <h3>Ingeniería Civil en Computación e Informática</h3>
            <p class="company">Universidad Católica del Norte | Coquimbo, Chile</p>
            <p>Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos.</p>
          <ul class="responsibilities">
              <li>Proyecto de título: Desarrollo de una plataforma web de monitoreo, con captura automática de 
pantallas, procesamiento de video y dashboard de visualización en tiempo real.</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div class="resume-section">
        <h2><i class="fas fa-tools"></i> Tecnologías y Herramientas</h2>
        <div class="tech-grid">
          <div class="tech-item">
            <i class="fas fa-code"></i>
            <span>C# / .NET Core 6/8</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-code"></i>
            <span>Nest JS</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-code"></i>
            <span>Python</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-database"></i>
            <span>SQL Server / DB2</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-database"></i>
            <span>PostgreSQL</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-network-wired"></i>
            <span>REST / SOAP APIs</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-cube"></i>
            <span>Microservicios</span>
          </div>
          <div class="tech-item">
            <i class="fab fa-react"></i>
            <span>Next JS</span>
          </div>
          <div class="tech-item">
            <i class="fab fa-react"></i>
            <span>React JS</span>
          </div>
          <div class="tech-item">
            <i class="fab fa-react"></i>
            <span>Vue JS / Vite</span>
          </div>
          <div class="tech-item">
            <i class="fab fa-node-js"></i>
            <span>Node JS</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-code-branch"></i>
            <span>Git</span>
          </div>
          <div class="tech-item">
            <i class="fas fa-file-code"></i>
            <span>Visual Studio / VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style scoped>
.resume {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #1a1a1a;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
}

.resume-section {
  margin-bottom: 4rem;
}

.resume-section h2 {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.resume-section h2 i {
  color: #3b82f6;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #3b82f6, rgba(59, 130, 246, 0.2));
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.timeline-date {
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.timeline-item h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.company {
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin-bottom: 0.75rem;
}

.timeline-item p:last-child {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.responsibilities {
  list-style: none;
  padding: 0;
  margin-top: 0.75rem;
}

.responsibilities li {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.responsibilities li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-size: 1.2rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.tech-item {
  background: rgba(59, 130, 246, 0.1);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.tech-item:hover {
  background: rgba(59, 130, 246, 0.15);
  transform: translateX(5px);
  border-color: #3b82f6;
}

.tech-item i {
  color: #3b82f6;
  font-size: 1.5rem;
}

.tech-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

@media (max-width: 640px) {
  .page-title {
    font-size: 2.5rem;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }

  .timeline-item::before {
    left: -2rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>