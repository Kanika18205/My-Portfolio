import '/Users/apple/portfolio/src/styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Kanika Jain</h3>
          <p>Frontend Developer | React Specialist | UI Enthusiast</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/Kanika18205" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/kanikajain1825" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:jainkanika1825@gmail.com">Email</a></li>
            <li><a href="tel:+918168757441">Phone</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Kanika Jain. All rights reserved. Built with React & Love ❤️</p>
      </div>
    </footer>
  );
}