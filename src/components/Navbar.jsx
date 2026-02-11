import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Projects', href: '/projects' },
  ];

  const handleLinkClick = function() {
    setIsOpen(false);
  };

  const navLinksClass = isOpen ? 'nav-links active' : 'nav-links';

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          {/* <span className="gradient-text">KJ</span> */}
        </Link>

        <div className={navLinksClass}>
          {navLinks.map(function(link) {
            return (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/contact" className="btn btn-primary" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
            Get in Touch
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}