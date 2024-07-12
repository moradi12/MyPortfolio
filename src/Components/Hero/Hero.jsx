import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
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
