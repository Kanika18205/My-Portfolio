import { FiDownload, FiExternalLink } from 'react-icons/fi';
import '../styles/Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      title: 'Frontend Development Internship',
      issuer: 'Cognifyz Technologies',
      date: 'March - April 2025',
      description: 'Internship completion certificate for work on frontend development projects',
      icon: '🎯',
      type: 'internship',
      viewLink: 'https://drive.google.com/file/d/13eI5KPfDi4S7_GHAGeRQXpxS-MvERUX_/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=13eI5KPfDi4S7_GHAGeRQXpxS-MvERUX_',
    },
    {
      title: 'Web Development Internship',
      issuer: 'Codsoft',
      date: '10 April - 10 May 2025',
      description: 'Internship completion certificate for comprehensive web development training',
      icon: '🌐',
      type: 'internship',
      viewLink: 'https://drive.google.com/file/d/1LO0Q_7bqdMzIUXlWBUHep2YrUEGxicr2/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1LO0Q_7bqdMzIUXlWBUHep2YrUEGxicr2',
    },
    {
      title: 'React.js, Redux & Firebase Development',
      issuer: 'Stigasoft Pvt Ltd',
      date: '20 June - 20 August 2025',
      description: 'Frontend Developer Internship - Built dynamic applications with React, Redux, Firebase and JavaScript',
      icon: '⚛️',
      type: 'internship',
      viewLink: 'https://drive.google.com/file/d/1PG9ymOrRthaUtVENdXB0JYnfZwRDx1Ao/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1PG9ymOrRthaUtVENdXB0JYnfZwRDx1Ao',
    },
    {
      title: 'AWS Cloud Computing - Course Completion',
      issuer: 'SkillForge E-learning Solutions Pvt Ltd',
      date: '1 July - 31 August 2024',
      description: 'Industrial training course completion certificate in AWS and cloud computing concepts',
      icon: '☁️',
      type: 'course',
      viewLink: 'https://drive.google.com/file/d/1vJPKnhnkeXXKTBUnMy84wustvOlQ1MTA/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1vJPKnhnkeXXKTBUnMy84wustvOlQ1MTA',
    },
    {
      title: 'AWS Cloud Computing - Internship Completion',
      issuer: 'SkillForge E-learning Solutions Pvt Ltd',
      date: '1 July - 31 August 2024',
      description: 'Industrial training internship completion certificate in AWS cloud computing',
      icon: '☁️',
      type: 'internship',
      viewLink: 'https://drive.google.com/file/d/1kyf_QpUV8HqOYVIsboHgVCf80LYquHVu/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1kyf_QpUV8HqOYVIsboHgVCf80LYquHVu',
    },
    {
      title: 'Programming in Java - NPTEL Certification',
      issuer: 'NPTEL, IIT Kharagpur',
      date: 'July - October 2024',
      description: '12-week online course completion with consolidated score of 64%',
      icon: '☕',
      type: 'course',
      viewLink: 'https://drive.google.com/file/d/1Ub_pBT0ytpl6s02AGX_q3Y-23gi_L5Vk/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1Ub_pBT0ytpl6s02AGX_q3Y-23gi_L5Vk',
      score: '64%',
    },
    {
      title: 'Java Programming Test',
      issuer: 'TMU with Spoken Tutorial, IIT Bombay',
      date: '29 April 2024',
      description: 'Successfully completed Java programming test with excellent performance',
      icon: '☕',
      type: 'test',
      viewLink: 'https://drive.google.com/file/d/1egjeqFDP_atJUz3Xa1fs-5CIjpdWw9-f/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1egjeqFDP_atJUz3Xa1fs-5CIjpdWw9-f',
      score: '67.50%',
      credits: '4',
    },
    {
      title: 'Python 3.4.3 Test',
      issuer: 'TMU with Spoken Tutorial, IIT Bombay',
      date: '8 December 2023',
      description: 'Successfully completed Python 3.4.3 programming test',
      icon: '🐍',
      type: 'test',
      viewLink: 'https://drive.google.com/file/d/1RzCTwnDRjlYPupJ2yL8j07U_i3g7Ot4F/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1RzCTwnDRjlYPupJ2yL8j07U_i3g7Ot4F',
      score: '80.00%',
      credits: '4',
    },
    {
      title: 'HTML Test',
      issuer: 'TMU with EduPyramids, SINE, IIT Bombay',
      date: '15 January 2026',
      description: 'Successfully completed HTML fundamentals test with outstanding score',
      icon: '📄',
      type: 'test',
      viewLink: 'https://drive.google.com/file/d/1OTxeUGO5LPBaqf5dqX8ZrWN5x1hRMOA3/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1OTxeUGO5LPBaqf5dqX8ZrWN5x1hRMOA3',
      score: '92.50%',
      credits: '1',
    },
    {
      title: 'Full Stack Developer Roadmap Workshop',
      issuer: 'Softpro India Computer Technologies Pvt Ltd',
      date: '3 December 2024',
      description: 'Attended comprehensive workshop on the roadmap to become a full stack developer',
      icon: '🛣️',
      type: 'workshop',
      viewLink: 'https://drive.google.com/file/d/1cTUkMhu-mhXdVQHOu4H98iH-u0K4SKv8/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?export=download&id=1cTUkMhu-mhXdVQHOu4H98iH-u0K4SKv8',
    },
  ];

  const internships = certifications.filter(function(c) { return c.type === 'internship'; });
  const courses = certifications.filter(function(c) { return c.type === 'course'; });
  const tests = certifications.filter(function(c) { return c.type === 'test'; });
  const workshops = certifications.filter(function(c) { return c.type === 'workshop'; });

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Training</h2>
        <p className="section-subtitle">
          Professional certifications, internships, and training programs completed
        </p>

        {internships.length > 0 && (
          <div className="cert-section">
            <h3 className="cert-section-title">🎯 Internships</h3>
            <div className="certifications-grid">
              {internships.map(function(cert, index) {
                return (
                  <CertCard key={index} cert={cert} />
                );
              })}
            </div>
          </div>
        )}

        {courses.length > 0 && (
          <div className="cert-section">
            <h3 className="cert-section-title">📚 Online Courses</h3>
            <div className="certifications-grid">
              {courses.map(function(cert, index) {
                return (
                  <CertCard key={index} cert={cert} />
                );
              })}
            </div>
          </div>
        )}

        {tests.length > 0 && (
          <div className="cert-section">
            <h3 className="cert-section-title">✅ Tests & Assessments</h3>
            <div className="certifications-grid">
              {tests.map(function(cert, index) {
                return (
                  <CertCard key={index} cert={cert} />
                );
              })}
            </div>
          </div>
        )}

        {workshops.length > 0 && (
          <div className="cert-section">
            <h3 className="cert-section-title">🎤 Workshops</h3>
            <div className="certifications-grid">
              {workshops.map(function(cert, index) {
                return (
                  <CertCard key={index} cert={cert} />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CertCard({ cert }) {
  const handleDownload = function() {
    window.open(cert.downloadLink, '_blank');
  };

  const handleView = function() {
    window.open(cert.viewLink, '_blank');
  };

  return (
    <div className="cert-card">
      <div className="cert-icon">{cert.icon}</div>
      
      <h3 className="cert-title">{cert.title}</h3>
      
      <p className="cert-issuer">{cert.issuer}</p>
      <p className="cert-date">{cert.date}</p>
      
      {cert.score && (
        <p className="cert-score">Score: <strong>{cert.score}</strong></p>
      )}
      
      {cert.credits && (
        <p className="cert-credits">Credits: <strong>{cert.credits}</strong></p>
      )}
      
      <p className="cert-description">{cert.description}</p>
      
      <div className="cert-buttons">
        <button className="cert-btn cert-btn-download" onClick={handleDownload}>
          <FiDownload /> Download
        </button>
        <button className="cert-btn cert-btn-view" onClick={handleView}>
          <FiExternalLink /> View
        </button>
      </div>
    </div>
  );
}
