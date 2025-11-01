import { useState } from "react"
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react"
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você integraria com EmailJS, Formspree ou seu backend
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Entre em <span className="gradient-text">Contato</span>
        </h2>
        <p className="contact-subtitle">
          Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
        </p>

        <div className="contact-content">
          {/* Informações de contato */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <h3 className="info-title">
                  <Mail className="info-icon" />
                  Email
                </h3>
              </div>
              <div className="info-content">
                <p className="info-text">italokaiq@email.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <h3 className="info-title">
                  <MapPin className="info-icon" />
                  Localização
                </h3>
              </div>
              <div className="info-content">
                <p className="info-text">Brasil</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <h3 className="info-title">Redes Sociais</h3>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Github className="social-icon" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="social-link">
                  <Linkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Envie uma Mensagem</h3>
              <p className="form-description">
                Preencha o formulário abaixo e entrarei em contato o mais breve possível.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Assunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                <Send className="submit-icon" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}