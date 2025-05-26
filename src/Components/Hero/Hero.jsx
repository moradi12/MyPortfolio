import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="intro">
          <h1 className="my-name">Tamir Moradi</h1>
          <h2>Creating Unique Web Experiences</h2>
          <p>
            Full Stack Developer | Transforming Ideas into Engaging Applications
          </p>
        </div>

        <div className="about-me">
          <h3>About Me</h3>
          <ul>
            <li>
              <strong>Dedicated Full Stack Developer</strong> with expertise in
              Java and Spring Boot (backend), and React with TypeScript
              (frontend). Passionate about scalable APIs and great UX.
            </li>
            <li>
              I transform concepts into high-performance applications with
              attention to detail and efficiency.
            </li>
            <li>
              Whether it's interface design or backend logic, I focus on
              maintainability and user satisfaction.
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-img">
        <img src="./assets/images/hero.jpg" alt="Tamir Moradi Avatar" />

        <div className="tech-icons-right">
          {["spring", "react", "java"].map((tech, i) => (
            <img
              key={tech}
              src={`./assets/images/${tech}.png`}
              alt={tech}
              className="tech-icon right"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <div className="tech-icons">
          {["js", "mysql", "ts", "css"].map((tech, i) => (
            <img
              key={tech}
              src={`./assets/images/${tech}.png`}
              alt={tech}
              className="tech-icon"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
