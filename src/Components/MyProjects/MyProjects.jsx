// MyProjects.jsx

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useRef, useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import the lightbox CSS
import { PROJECTS } from "../../utils/data";
import "./MyProjects.css";

const ProjectCard = memo(({ project, onImageClick }) => {
  const cardClass = `project-card-section project-card-${project.variant}`;

  return (
    <div className={cardClass} tabIndex="0">
      <h4>{project.title}</h4>
      
      <p>{project.description}</p>
      
      {/* Technologies Used */}
      <div className="project-technologies">
        {project.technologies.map((tech, i) => (
          <span key={i} className="project-technology-item">
            {tech}
          </span>
        ))}
      </div>
      
      {project.images && project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((img, i) => (
            <img
              src={img}
              alt={`${project.title} preview ${i + 1}`}
              key={i}
              className="project-image"
              onClick={() => onImageClick(project.images, i)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onImageClick(project.images, i);
                }
              }}
            />
          ))}
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-section-link"
        >
          View Project
        </a>
      )}
    </div>
  );
});

const MyProjects = () => {
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleImageClick = (images, index) => {
    if (!images || images.length === 0) return;
    
    const slides = images.map((img) => ({
      src: img,
      alt: "Project Image",
    }));
    setCurrentImages(slides);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="project-section-container">
      <h2 className="project-section-title">My Projects</h2>
      
      <div className="project-section-slider">
        {/* Left Arrow */}
        <button
          className="project-arrow-left"
          onClick={slideLeft}
          aria-label="Previous Projects"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id || project.title} 
              project={project}
              onImageClick={handleImageClick}
            />
          ))}
        </Slider>

        <button
          className="project-arrow-right"
          onClick={slideRight}
          aria-label="Next Projects"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={currentImages}
          index={currentIndex}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            buttonPrev: { backgroundColor: "#a044ff" },
            buttonNext: { backgroundColor: "#a044ff" },
            buttonClose: { backgroundColor: "#a044ff" },
          }}
          carousel={{ finite: false }} 
          keyboard={{ enabled: true }} 
        />
      )}
    </section>
  );
};

export default MyProjects;
