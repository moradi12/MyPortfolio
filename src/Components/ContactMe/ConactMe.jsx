import { FaFileDownload } from 'react-icons/fa'; // Only import the resume icon
import ContactForm from "./ContactForm/ContactForm";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div className="contact-info">
          {/* Email Icon */}
          <a 
            href="mailto:TamirMoradi@Gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link email-link"
          >
            <img src="assets/images/mail.png" alt="Email" className="contact-icon" />
          </a>
          {/* GitHub Icon */}
          <a 
            href="https://github.com/moradi12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link github-link"
          >
            <img src="assets/images/Github.png" alt="GitHub" className="contact-icon" />
          </a>
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/tamir-moradi-1a62b0260/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
          >
            <img src="assets/images/Linkedin.png" alt="LinkedIn" className="contact-icon" />
          </a>
          {/* Resume Download Button with React Icon */}
          <a 
            href="/TAMIR MORADI.pdf"
            download="Tamir-Moradi-Resume.pdf"
            className="contact-link resume-link"
          >
            <FaFileDownload size={48} style={{ color: '#d048d5' }} /> {}
            <span className="contact-label">Resume</span>
          </a>
        </div>

        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
