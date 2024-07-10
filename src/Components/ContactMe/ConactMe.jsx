import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/mail.png"
            text={
              <a 
                href="mailto:TamirMoradi@Gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="email-link"
              >
                TamirMoradi@Gmail.com
              </a>
            }
          />
          <ContactInfoCard
            iconUrl="./assets/images/Github.png"
            text={
              <a 
                href="https://github.com/moradi12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                github.com/moradi12
              </a>
            }
          />
          <ContactInfoCard
            iconUrl="./assets/images/Linkedin.png"
            text={
              <a 
                href="https://www.linkedin.com/in/tamir-moradi-1a62b0260/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                LinkedIn/Tamir Moradi
              </a>
            }
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
