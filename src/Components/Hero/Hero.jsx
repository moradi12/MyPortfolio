import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Creating Unique Web Experiences</h2>
        <p>
          Passionate Frontend Developer | Bringing Ideas to Life with Elegant Designs
        </p>
        <div className="about-me">
          <h3>About Me</h3>
          <ul>
            <li><strong>Dedicated and innovative Full Stack Developer</strong> with a strong passion for creating impactful web solutions.</li>
            <li>My journey in web development has equipped me with the skills and knowledge to transform ideas into functional and visually appealing websites.</li>
            <li>Whether working on the frontend or backend, I strive to deliver seamless user experiences and efficient solutions.</li>
          </ul>
        </div>
      </div>

      <div className="hero-img">
        <img src="./assets/images/hero.jpg" alt="Hero" />
        <div className="tech-icons-right">
          <img src="./assets/images/spring.png" alt="Spring" className="tech-icon-right spring" />
          <img src="./assets/images/react.png" alt="React" className="tech-icon-right react" />
          <img src="./assets/images/java.png" alt="Java" className="tech-icon-right java" />
        </div>
        <div className="tech-icons">
          <img src="./assets/images/js.png" alt="JavaScript" />
          <img src="./assets/images/mysql.png" alt="MySQL" />
          <img src="./assets/images/ts.png" alt="TypeScript" />
          <img src="./assets/images/css.png" alt="CSS" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
