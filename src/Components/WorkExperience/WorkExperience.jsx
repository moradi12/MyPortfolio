import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Slider from "react-slick";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="experience" className="experience-container">
      <h5 className="experience-title">Work Experience & Education</h5>
      <div className="experience-slider-wrapper">
        <button
          className="arrow-btn arrow-btn--left"
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="experience-slider">
          <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item, idx) => (
              <ExperienceCard key={idx} details={item} index={idx} />
            ))}{" "}
          </Slider>
        </div>

        <button
          className="arrow-btn arrow-btn--right"
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
