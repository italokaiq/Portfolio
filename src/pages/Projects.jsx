import { ExternalLink, Github } from "lucide-react"
import './Projects.css'

const projects = [
  {
    id: 1,
    title: "E-commerce API",
    description: "API REST completa para e-commerce com autenticação JWT, pagamentos e gestão de produtos.",
    image: "/api/placeholder/400/250",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Dashboard React",
    description: "Dashboard administrativo responsivo com gráficos interativos e gestão de usuários.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Aplicação full-stack para gerenciamento de tarefas com drag & drop e colaboração em tempo real.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Sistema de gerenciamento de conteúdo com editor rich text e sistema de comentários.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <p className="projects-subtitle">
          Uma seleção dos meus trabalhos mais recentes, demonstrando domínio técnico e diversidade de soluções.
        </p>

        {/* Projetos em destaque */}
        <div className="featured-projects">
          {projects.filter(project => project.featured).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Preview</span>
                </div>
                <div className="project-overlay">
                  <a href={project.demoUrl} className="btn btn-outline">
                    <ExternalLink className="btn-icon" />
                    Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-ghost">
                    <Github className="btn-icon" />
                    Código
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outros projetos */}
        <div className="other-projects">
          {projects.filter(project => !project.featured).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Preview</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.demoUrl} className="btn btn-outline">
                    <ExternalLink className="btn-icon" />
                    Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-ghost">
                    <Github className="btn-icon" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}