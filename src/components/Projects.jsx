import { FiExternalLink, FiGithub } from 'react-icons/fi';
import '/Users/apple/portfolio/src/styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'TUNIX - Music Mood Playlist',
      description: 'A beautiful music streaming landing page that creates personalized playlists based on user moods. Features smooth navigation, curated collections, and a modern, responsive design. Users can create, manage, and share playlists with one-click sharing functionality.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      image: '🎵',
      link: 'https://tunix-landing-page.onrender.com',
      github: 'https://github.com/Kanika18205/Codsoft/tree/main/landing_page',
      highlights: ['Mood-based playlists', 'Modern UI design', 'Responsive layout', 'Smooth navigation'],
      difficulty: 'Beginner',
      year: '2024',
    },
    {
      title: 'Calculator Application',
      description: 'A fully functional calculator with a clean, intuitive interface. Supports basic arithmetic operations (addition, subtraction, multiplication, division) with a responsive design that works on all devices. Features percentage calculations and clear functionality.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '🧮',
      link: 'https://calculator-vbrh.onrender.com',
      github: 'https://github.com/Kanika18205/CodSoft/tree/main/calculator',
      highlights: ['Basic arithmetic operations', 'Responsive design', 'Clean UI', 'Percentage calculation'],
      difficulty: 'Beginner',
      year: '2024',
    },
    {
      title: 'Quiz Application',
      description: 'An interactive, intermediate-level quiz application with multiple categories (Programming, English, History, Entertainment). Features real-time timer, progress tracking, instant feedback, detailed statistics, and performance analytics. Users can select difficulty and number of questions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: '🧠',
      link: 'https://quiz-application-rqjc.onrender.com',
      github: 'https://github.com/Kanika18205/quiz-app-front-end.git',
      highlights: ['Multiple categories', 'Real-time timer', 'Performance analytics', 'Instant feedback', 'Difficulty selection'],
      difficulty: 'Intermediate',
      year: '2024',
    },
    {
      title: 'Travel Booking System UI',
      description: 'A fully functional React travel booking application with advanced search and filtering capabilities. Features multi-destination filtering by price range and duration, complete booking workflow with form validation, real-time price calculation, localStorage data persistence, and country-specific phone validation for 15+ countries.',
      technologies: ['React.js', 'React Router', 'Vite', 'CSS3', 'localStorage'],
      image: '✈️',
      link: 'https://travel-booking-system-ui.onrender.com',
      github: 'https://github.com/Kanika18205/TravelBookingSystemFrontend.git',
      highlights: ['Advanced search & filtering', 'Multi-page routing', 'Form validation', 'Real-time price calculation', 'Phone validation (15+ countries)', 'Data persistence'],
      difficulty: 'Advanced',
      year: '2025',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A stunning, modern portfolio website showcasing my professional journey, skills, and projects. Features smooth animations, glassmorphism design, gradient effects, fully functional contact form with email integration, responsive layout, and professional styling with advanced CSS techniques.',
      technologies: ['React.js', 'Vite', 'CSS3', 'react-icons', 'Web3Forms'],
      image: '💼',
      link: '/Home',
      github: 'https://github.com/Kanika18205/My-Portfolio.git',
      highlights: ['Smooth animations', 'Glassmorphism design', 'Contact form with email', 'Fully responsive', 'Modern aesthetics', 'Performance optimized'],
      difficulty: 'Advanced',
      year: '2026',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my best work, demonstrating expertise in frontend development, UI design, and modern web technologies
        </p>

        <div className="projects-grid">
          {projects.map(function(project, index) {
            return (
              <div key={index} className="project-card">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-badge">{project.difficulty}</div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    {project.highlights.map(function(highlight, i) {
                      return (
                        <span key={i} className="highlight-badge">{highlight}</span>
                      );
                    })}
                  </div>

                  <div className="project-tech">
                    {project.technologies.map(function(tech, i) {
                      return (
                        <span key={i} className="tech-badge">{tech}</span>
                      );
                    })}
                  </div>

                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-cta">
          <h3>Interested in my work?</h3>
          <p>Let's collaborate and bring your ideas to life</p>
          <a href="/contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}