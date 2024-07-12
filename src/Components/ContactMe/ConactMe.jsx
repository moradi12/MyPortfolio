import React from "react";
import "./ContactMe.css";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div className="contact-info">
          <a 
            href="mailto:TamirMoradi@Gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link email-link"
          >
            <img src="./assets/images/mail.png" alt="Email" className="contact-icon" />
            <span className="contact-text">TamirMoradi@Gmail.com</span>
          </a>
          <a 
            href="https://github.com/moradi12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link github-link"
          >
            <img src="./assets/images/Github.png" alt="GitHub" className="contact-icon" />
            <span className="contact-text">github.com/moradi12</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/tamir-moradi-1a62b0260/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
          >
            <img src="./assets/images/Linkedin.png" alt="LinkedIn" className="contact-icon" />
            <span className="contact-text">LinkedIn/Tamir Moradi</span>
          </a>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
