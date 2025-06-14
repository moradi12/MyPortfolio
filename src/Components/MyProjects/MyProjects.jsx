// MyProjects.jsx
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PROJECTS } from "../../utils/data";
import "./MyProjects.css";

const ProjectCard = memo(({ project, onImageClick }) => {
  const cardClass = `project-card-section project-card-${project.variant}`;

  return (
    <div className={cardClass} tabIndex={0}>
      <h4>{project.title}</h4>

      <p>{project.description}</p>

      {/* Technologies */}
      <div className="project-technologies">
        {project.technologies.map((tech, i) => (
          <span key={i} className="project-technology-item">
            {tech}
          </span>
        ))}
      </div>

      {/* Images */}
      {project.images?.length > 0 && (
        <div className="project-images">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} preview ${i + 1}`}
              className="project-image"
              loading="lazy"
              onClick={() => onImageClick(project.images, i)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onImageClick(project.images, i)}
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

export default function MyProjects() {
  const prevRef   = useRef(null);
  const nextRef   = useRef(null);
  const swiperRef = useRef(null);

  const [isOpen, setIsOpen]       = useState(false);
  const [images, setImages]       = useState([]);
  const [index,  setIndex]        = useState(0);

  const handleImageClick = (imgs, idx) => {
    if (!imgs?.length) return;
    setImages(imgs.map((src) => ({ src, alt: "Project Image" })));
    setIndex(idx);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="project-section-container">
      <h2 className="project-section-title">My Projects</h2>

      <div className="project-section-slider">
        {/* Arrows */}
        <button
          ref={prevRef}
          className="project-arrow-left"
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          ref={nextRef}
          className="project-arrow-right"
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(sw) => {
            sw.params.navigation.prevEl = prevRef.current;
            sw.params.navigation.nextEl = nextRef.current;
            sw.navigation.update();
          }}
          onSwiper={(instance) => (swiperRef.current = instance)}
          loop={true}                     
          slidesPerView={2}
          spaceBetween={24}
          grabCursor
          speed={600}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
          }}
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.id ?? p.title}>
              <ProjectCard project={p} onImageClick={handleImageClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images}
          index={index}
          styles={{
            container:   { backgroundColor: "rgba(0,0,0,0.9)" },
            buttonPrev:  { backgroundColor: "#a044ff" },
            buttonNext:  { backgroundColor: "#a044ff" },
            buttonClose: { backgroundColor: "#a044ff" },
          }}
          carousel={{ finite: false }}
        />
      )}
    </section>
  );
}
