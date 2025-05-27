import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => (
  <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
    <div className="mobile-menu-container">
      <img className="logo" src="./assets/images/Logo.png" alt="Logo" />

      <ul className="mobile-links">
        <li><a href="#home"          className="menu-item">Home</a></li>
        <li><a href="#skills"        className="menu-item">Skills</a></li>
        <li><a href="#experience"    className="menu-item">Work Experience</a></li>
        <li><a href="#projects"      className="menu-item">Projects</a></li>
      </ul>

      <a href="#contact" className="contact-btn">Hire Me</a>

      <button className="menu-btn" onClick={toggleMenu}>
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>
    </div>
  </div>
);

export default MobileNav;
