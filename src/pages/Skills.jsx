import './Skills.css'

const skillCategories = [
  {
    title: "Linguagens",
    skills: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Python", level: 70, icon: "🐍" },
    ]
  },
  {
    title: "Front-end",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TailwindCSS", level: 95, icon: "🎨" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ]
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express", level: 85, icon: "🚀" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
    ]
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", level: 90, icon: "📝" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "Vite", level: 85, icon: "⚡" },
      { name: "VSCode", level: 95, icon: "💻" },
      { name: "Postman", level: 85, icon: "📮" },
    ]
  }
]

const SkillBar = ({ skill }) => (
  <div className="skill-item">
    <div className="skill-header">
      <div className="skill-name">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-label">{skill.name}</span>
      </div>
      <span className="skill-level">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <div 
        className="skill-progress"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
)

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          Minhas <span className="gradient-text">Habilidades</span>
        </h2>
        <p className="skills-subtitle">
          Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <div className="category-header">
                <div className="category-indicator"></div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Seção adicional */}
        <div className="learning-section">
          <div className="learning-card">
            <h3 className="learning-title">
              Sempre Aprendendo
            </h3>
            <p className="learning-description">
              A tecnologia evolui constantemente, e eu também. Sempre buscando novas tecnologias, 
              melhores práticas e formas mais eficientes de resolver problemas complexos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}