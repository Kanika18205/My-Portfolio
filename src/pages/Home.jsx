import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import QuickLinks from '../components/QuickLinks';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Welcome to my portfolio
          </div>

          <h1 className="hero-title">
            Hi, I'm <br /><span className="gradient-text">Kanika Jain</span>
          </h1>

          <p className="hero-subtitle">
            A passionate <span className="text-highlight">Frontend Developer</span> specializing in <span className="text-highlight">React.js</span> and Modern Web Technologies. I transform ideas into beautiful, interactive digital experiences.
          </p>

          <div className="hero-cta">
            <button onClick={() => navigate('/contact')} className="btn btn-primary" style={{ cursor: 'pointer' }}>
              Get in Touch <FiArrowRight style={{ marginLeft: '8px' }} />
            </button>
            <button onClick={() => navigate('/projects')} className="btn btn-secondary" style={{ cursor: 'pointer' }}>
              View My Work
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat">
              <div className="stat-number">9.27</div>
              <div className="stat-label">CGPA</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">⚡</div>
            <div>React Developer</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎨</div>
            <div>UI Designer</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🚀</div>
            <div>Startup Ready</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <p>Explore more</p>
      </div>
    </section>
    <QuickLinks />
    </>
    
  );
}