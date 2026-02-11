import '/Users/apple/portfolio/src/styles/Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'HTML5', 'CSS3'],
      color: 'primary',
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Redux.js', 'CSS Grid', 'Flexbox', 'Responsive Design'],
      color: 'accent',
    },
    {
      title: 'Tools & Platforms',
      skills: ['VS Code', 'Git', 'GitHub', 'Postman', 'Vite', 'Firebase', 'Render'],
      color: 'success',
    },
    {
      title: 'Core Concepts',
      skills: ['OOP', 'Data Structures', 'Algorithms', 'CRUD Operations'],
      color: 'warning',
    },
    {
      title: 'Soft Skills',
      skills: ['Leadership', 'Teamwork', 'Public Speaking', 'Problem Solving', 'Time Management'],
      color: 'primary',
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive set of technologies and tools I have mastered
        </p>

        <div className="skills-grid">
          {skillCategories.map(function(category, index) {
            return (
              <div key={index} className={'skill-category category-' + category.color}>
                <div className="category-header">
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map(function(skill, skillIndex) {
                    return (
                      <div key={skillIndex} className="skill-item">
                        <span className="skill-dot"></span>
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="proficiency-section">
          <h3 className="proficiency-title">Proficiency Overview</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>React.js</span>
                <span className="proficiency-percent">95%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>JavaScript</span>
                <span className="proficiency-percent">90%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>CSS & Styling</span>
                <span className="proficiency-percent">95%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Firebase</span>
                <span className="proficiency-percent">80%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Git & GitHub</span>
                <span className="proficiency-percent">85%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="proficiency-item">
              <div className="proficiency-label">
                <span>Problem Solving</span>
                <span className="proficiency-percent">88%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}