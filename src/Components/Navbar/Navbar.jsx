import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {/* Mobile Navigation Overlay */}
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      {/* Main Navigation Bar */}
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/Logo.png" alt="Logo" />

          {/* Desktop Menu Links */}
          <ul className="nav-links">
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#experience">
                Work Experience & Education
              </a>
            </li>
            <li>
              <a className="contact-btn" href="#contact">
                Hire Me
              </a>
            </li>
          </ul>

          {/* Hamburger / Close Button */}
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined nav-icon">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
