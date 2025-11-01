import "./About.css";
import profileImage from "../assets/images/profile.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          Sobre <span className="gradient-text">Mim</span>
        </h2>

        <div className="about-content">
          <div className="about-info">
            <div className="info-card">
              <h3>Minha Jornada</h3>
              <p>
                Comecei minha jornada no desenvolvimento web movido pela
                curiosidade de entender como as coisas funcionam por trás das
                telas. O que começou como um hobby rapidamente se tornou uma
                paixão.
              </p>
              <p>
                Hoje, me especializo em criar soluções robustas no back-end com
                Node.js e interfaces modernas e responsivas com React.
              </p>
            </div>

            <div className="info-card">
              <h3>O que me motiva</h3>
              <p>
                <span className="highlight">
                  "Amo transformar ideias em código funcional"
                </span>{" "}
                - Cada projeto é uma oportunidade de resolver problemas reais e
                criar experiências que fazem a diferença na vida das pessoas.
              </p>
            </div>

            <div className="info-card">
              <h3>Principais Stacks</h3>
              <div className="tech-tags">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "SQL",
                ].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src={profileImage}
              alt="Italo Kaiq"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <span style={{ display: "none" }}>IK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
