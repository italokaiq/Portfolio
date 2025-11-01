import { Github, Linkedin, FileText, ArrowDown } from "lucide-react";
import "./Home.css";
import profileImage from "../assets/images/profile.png";

export default function Home() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content animate-fade-in-up">
          {/* Avatar */}
          <div className="home-avatar">
            <div className="avatar-container">
              <div className="avatar-inner">
                <img
                  src={profileImage}
                  alt="Italo Kaiq"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
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

          {/* Apresentação */}
          <h1 className="home-title">
            Olá, eu sou <span className="gradient-text">Italo Kaiq</span>
          </h1>

          <p className="home-subtitle">
            Desenvolvedor JavaScript focado em{" "}
            <strong>back-end com Node.js</strong> e{" "}
            <strong>front-end em React</strong>
          </p>

          {/* Botões de ação */}
          <div className="home-actions">
            <a
              href="https://www.linkedin.com/in/italo-kaiq/"
              className="btn btn-primary"
            >
              <Linkedin />
              LinkedIn
            </a>
            <a href="https://github.com/italokaiq" className="btn btn-outline">
              <Github />
              GitHub
            </a>
            <a href="#" className="btn btn-ghost">
              <FileText />
              Currículo PDF
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator animate-bounce">
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}
