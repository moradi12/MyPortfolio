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
        <div className="tech-icons">
          <img src="./assets/images/spring.png" alt="Spring" />
          <img src="./assets/images/js.png" alt="js" />
          <img src="./assets/images/mysql.png" alt="mysql" />
          <img src="./assets/images/ts.png" alt="TypeScript" />
          <img src="./assets/images/css.png" alt="CSS" />
          <img src="./assets/images/java.png" alt="Java" />
          <img src="./assets/images/react.png" alt="React" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
