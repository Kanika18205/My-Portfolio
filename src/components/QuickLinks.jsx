import { Link } from 'react-router-dom';
import '../styles/QuickLinks.css';

export default function QuickLinks() {
  const links = [
    { icon: '👤', title: 'About Me', desc: 'Know more about me', path: '/about' },
    { icon: '⚙️', title: 'My Skills', desc: 'Technologies I use', path: '/skills' },
    { icon: '📜', title: 'Certifications', desc: 'My credentials', path: '/certifications' },
    { icon: '🚀', title: 'Projects', desc: 'See my work', path: '/projects' },
  ];

  return (
    <section className="quick-links-section">
      <div className="container">
        <h2 className="section-title">Explore My Portfolio</h2>
        <div className="quick-links-grid">
          {links.map(function(link, index) {
            return (
              <Link key={index} to={link.path} className="quick-link-card">
                <span className="quick-icon">{link.icon}</span>
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                <span className="arrow">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}