import React, { useRef } from "react";
import Slider from "react-slick"; 
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
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
    <section id="experience" className="experience-container">
      <h5 className="experience-title">Work Experience & Education</h5>
      <div className="experience-slider">
        <div className="arrow-left" onClick={slideLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </Slider>
        <div className="arrow-right" onClick={slideRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
