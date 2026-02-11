// import { useState } from 'react';
// import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
// import { FiGithub, FiLinkedin } from 'react-icons/fi';
// import '/Users/apple/portfolio/src/styles/Contact.css';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = function(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(function(prev) {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const handleSubmit = async function(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: '529033bc-7eee-4b3d-a193-e0f0b620f604', // REPLACE WITH YOUR KEY
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           to_email: 'jainkanika1825@gmail.com', // Your email
//           from_email: 'portfolio@web3forms.com',
//           from_name: 'Kanika Jain Portfolio',
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSubmitStatus('success');
//         setFormData({ name: '', email: '', subject: '', message: '' });
//         setTimeout(function() { setSubmitStatus(null); }, 5000);
//       } else {
//         setSubmitStatus('error');
//         setTimeout(function() { setSubmitStatus(null); }, 5000);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//       setTimeout(function() { setSubmitStatus(null); }, 5000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="section contact">
//       <div className="container">
//         <h2 className="section-title">Let's Get In Touch</h2>
//         <p className="section-subtitle">
//           Have a project in mind? I'd love to hear from you. Drop me a message and let's create something amazing together.
//         </p>

//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="info-card">
//               <div className="info-icon">
//                 <FiMail />
//               </div>
//               <div className="info-text">
//                 <h4>Email</h4>
//                 <a href="mailto:jainkanika1825@gmail.com">jainkanika1825@gmail.com</a>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <FiPhone />
//               </div>
//               <div className="info-text">
//                 <h4>Phone</h4>
//                 <a href="tel:+918168757441">+91 8168757441</a>
//               </div>
//             </div>

//             <div className="info-card">
//               <div className="info-icon">
//                 <FiMapPin />
//               </div>
//               <div className="info-text">
//                 <h4>Location</h4>
//                 <p>Greater Noida, Uttar Pradesh, India</p>
//               </div>
//             </div>

//             <div className="social-links">
//               <h4>Connect With Me</h4>
//               <div className="social-icons">
//                 <a href="https://github.com/Kanika18205" target="_blank" rel="noopener noreferrer" className="social-icon">
//                   <FiGithub />
//                 </a>
//                 <a href="https://linkedin.com/in/kanikajain1825" target="_blank" rel="noopener noreferrer" className="social-icon">
//                   <FiLinkedin />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="6"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="form-input form-textarea"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary btn-submit"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Sending...' : 'Send Message'}
//               <FiSend style={{ marginLeft: '8px' }} />
//             </button>

//             {submitStatus === 'success' && (
//               <div className="form-message success">
//                 ✓ Message sent successfully! I'll get back to you soon.
//               </div>
//             )}
//             {submitStatus === 'error' && (
//               <div className="form-message error">
//                 ✗ Something went wrong. Please try again or email me directly.
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import '/Users/apple/portfolio/src/styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = function(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(function(prev) {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async function(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '529033bc-7eee-4b3d-a193-e0f0b620f604',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'jainkanika1825@gmail.com',
          from_name: 'Kanika Jain Portfolio Contact',
          
          // Anti-spam headers
          reply_to: formData.email,
          
          // Redirect after submission
          // redirect: 'https://your-portfolio-url.onrender.com/#contact',
          
          // Add form data for better deliverability
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(function() { setSubmitStatus(null); }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data);
        setTimeout(function() { setSubmitStatus(null); }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(function() { setSubmitStatus(null); }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? I'd love to hear from you. Drop me a message and let's create something amazing together.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:jainkanika1825@gmail.com">jainkanika1825@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <a href="tel:+918168757441">+91 8168757441</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://github.com/Kanika18205" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/kanikajain1825" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              <FiSend style={{ marginLeft: '8px' }} />
            </button>

            {submitStatus === 'success' && (
              <div className="form-message success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message error">
                ✗ Something went wrong. Please try again or email me directly at jainkanika1825@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}