import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Creating Unique Web Experiences</h2>
        <p>Full Stack Developer | Transforming Ideas into Engaging Applications</p>
        <div className="about-me">
          <h3>About Me</h3>
          <ul>
            <li>
              <strong>Dedicated Full Stack Developer</strong> with expertise in
              Java and Spring Boot for the backend, and React with TypeScript for
              the frontend. Passionate about building scalable APIs and delivering
              seamless user experiences.
            </li>
            <li>
              My journey in web development has equipped me with the skills to turn
              concepts into visually appealing, high-performance applications.
            </li>
            <li>
              Whether working on interface design or server-side logic, I prioritize
              efficiency, maintainability, and user satisfaction.
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-img">
        <img src="./assets/images/hero.jpg" alt="Hero" />
        <div className="tech-icons-right">
          <img
            src="./assets/images/spring.png"
            alt="Spring"
            className="tech-icon-right spring"
          />
          <img
            src="./assets/images/react.png"
            alt="React"
            className="tech-icon-right react"
          />
          <img
            src="./assets/images/java.png"
            alt="Java"
            className="tech-icon-right java"
          />
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
