import Navigation from './components/Navigation'
import MouseBackground from './components/MouseBackground'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <MouseBackground />
      <Navigation />
      
      <main>
        <div id="home">
          <Home />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: '#94a3b8' }}>
            © 2024 Italo Kaiq. Desenvolvido com ❤️ usando React e CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App