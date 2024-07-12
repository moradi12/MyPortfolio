import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="mobile-menu-container">
        <img className="logo" src="./assets/images/logo.png" alt="Logo" />
        <ul>
          <li>
            <a href="#home" className="menu-item">Home</a>
          </li>
          <li>
            <a href="#skills" className="menu-item">Skills</a>
          </li>
          <li>
            <a href="#work-experience" className="menu-item">Work Experience</a>
          </li>
        </ul>
        <button className="contact-btn" onClick={() => { }}>
          Hire Me
        </button>
        <button className="menu-btn" onClick={toggleMenu}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.8rem" }}
          >
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
