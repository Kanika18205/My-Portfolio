import '/Users/apple/portfolio/src/styles/About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a <span className="highlight">B.Tech Computer Science student</span> at Teerthankar Mahaveer University, specializing in <span className="highlight">AI-ML-DL</span> with a strong passion for frontend development.
            </p>

            <p>
              Currently maintaining a <span className="highlight">9.27 CGPA</span>, I combine solid fundamentals with practical experience. I recently completed an internship as a <span className="highlight">Frontend Developer Intern at Stigasoft Pvt. Ltd.</span>, where I built dynamic React applications, developed reusable UI components, and implemented CRUD operations.
            </p>

            <p>
              My journey in tech has been driven by curiosity and a commitment to continuous learning. I'm proficient in React.js, JavaScript, CSS, and Firebase, with hands-on experience in building scalable web applications. Beyond coding, I'm an accomplished public speaker and team player who thrives in collaborative environments.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-large">B.Tech CSE</div>
              <div className="stat-small">Computer Science & Engineering</div>
              <div className="stat-detail">Specialization: AI-ML-DL</div>
            </div>

            <div className="stat-card">
              <div className="stat-large">9.27</div>
              <div className="stat-small">Current CGPA</div>
              <div className="stat-detail">Consistent Academic Excellence</div>
            </div>

            <div className="stat-card">
              <div className="stat-large">2+</div>
              <div className="stat-small">Years Learning</div>
              <div className="stat-detail">2022 - Present</div>
            </div>
          </div>
        </div>

        <div className="achievements">
          <h3 className="achievements-title">Achievements & Recognition</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <span className="achievement-icon">🥉</span>
              <p><strong>4th Position</strong> - BTech 6th Semester 2025</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🥈</span>
              <p><strong>5th Position</strong> - BTech 5th Semester 2024</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎤</span>
              <p><strong>Finalist</strong> - The SpeechMasters 2.0 (2024)</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎭</span>
              <p><strong>Hosted</strong> - IGNITE Annual Cultural Event 2024</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🎊</span>
              <p><strong>Hosted</strong> - AAROHAN Fresher's Party 2023</p>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">💡</span>
              <p><strong>Internship</strong> - Frontend Developer at Stigasoft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}