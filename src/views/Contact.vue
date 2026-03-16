<template>
  <div class="contact">
    <div class="container">
      <h1 class="page-title">Contacto</h1>
      <p class="page-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Dirección</h3>
            <p>Quilicura - Santiago</p>
          </div>
          <div class="info-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>rojasgadiego@gmail.com</p>
          </div>
          <div class="info-card">
            <i class="fab fa-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+56 9 61282075</p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                placeholder="Tu nombre"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="subject">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              placeholder="Asunto del mensaje"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="6" 
              placeholder="Tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">
            <i class="fab fa-whatsapp"></i>
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      const { name, email, subject, message } = this.form

      const text = [
        `👋 Hola Diego, te escribo desde tu portafolio.`,
        ``,
        `*Nombre:* ${name}`,
        `*Email:* ${email}`,
        `*Asunto:* ${subject}`,
        ``,
        `*Mensaje:*`,
        message
      ].join('\n')

      const encoded = encodeURIComponent(text)
      window.open(`https://wa.me/56961282075?text=${encoded}`, '_blank')

      this.form = { name: '', email: '', subject: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(147, 51, 234, 0.06) 0%, transparent 45%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.3);
}

.info-card i {
  font-size: 2rem;
  color: #3b82f6;
  margin-bottom: 1rem;
  display: block;
}

.info-card h3 {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.info-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

.contact-form {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 3rem;
  border-radius: 15px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  font-family: inherit;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: #25d366;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.submit-btn i {
  font-size: 1.2rem;
}

.submit-btn:hover {
  background: #1ebe5d;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
}

.submit-btn:active {
  transform: translateY(0);
}

/* ─── TABLET ───────────────────────────────────────── */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

/* ─── MÓVIL ────────────────────────────────────────── */
@media (max-width: 768px) {
  .contact {
    padding: 7.5rem 1.5rem 2.5rem;
  }

  .page-subtitle {
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }

  .contact-form {
    padding: 2rem 1.5rem;
  }

  .info-card {
    padding: 1.5rem;
  }
}

/* ─── MÓVIL PEQUEÑO ────────────────────────────────── */
@media (max-width: 480px) {
  .contact {
    padding: 7rem 1rem 2rem;
  }

  .page-title { font-size: 2rem; }

  .contact-form { padding: 1.5rem 1rem; }
}
</style>