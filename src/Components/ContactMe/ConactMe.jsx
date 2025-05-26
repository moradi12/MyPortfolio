
import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          {/* Email Icon */}
          <a
            href="mailto:TamirMoradi@Gmail.com"
            className="contact-link email-link"
            aria-label="Send an email to Tamir Moradi"
          >
            <FaEnvelope className="contact-icon" />
            <span className="contact-label">Email</span>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/moradi12"
            className="contact-link github-link"
            aria-label="Visit my GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <span className="contact-label">GitHub</span>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/tamir-moradi-1a62b0260/"
            className="contact-link linkedin-link"
            aria-label="Connect with me on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <span className="contact-label">LinkedIn</span>
          </a>

          <a
            href="/Tmoradi.pdf" // Make sure this matches the actual file name
            download="Tamir-Moradi-Resume.pdf"
            className="contact-link resume-link"
            aria-label="Download my resume"
          >
            <FaFileDownload className="resume-icon" />
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
