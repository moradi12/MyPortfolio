// MyProjects.jsx

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from "react";
import Slider from "react-slick";
import { PROJECTS } from "../../utils/data"; // Ensure this path is correct
import './MyProjects.css';

const MyProjects = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // We'll handle arrows manually
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="projects" className="project-section-container">
      <h5 className="project-section-title">My Projects</h5>
      <div className="project-section-slider">
        {/* Left Arrow */}
        <div className="project-arrow-left" onClick={slideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((project, index) => {
            // Assign a unique class based on the project's variant
            const cardClass = `project-card-section project-card-${project.variant}`;
            return (
              <div key={index} className={cardClass}>
                {/* Removed project.icon rendering */}

                <h4>{project.title}</h4>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-technology-item">{tech}</span>
                  ))}
                </div>

                {/* Render images if available */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    {project.images.map((img, i) => (
                      <img
                        src={img}
                        alt={`${project.title} preview ${i + 1}`}
                        key={i}
                        className="project-image"
                      />
                    ))}
                  </div>
                )}

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-section-link">
                  View Project
                </a>
              </div>
            );
          })}
        </Slider>

        {/* Right Arrow */}
        <div className="project-arrow-right" onClick={slideRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
