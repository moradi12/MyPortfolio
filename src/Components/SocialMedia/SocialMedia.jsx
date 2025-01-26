// src/Components/SocialMedia/SocialMedia.jsx

import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://linkedin.com/in/tamir-moradi-1a62b0260"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/moradi12"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:Tamirmoradi@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialMedia;
