import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h6>{details.title}</h6>
        <span className="experience-duration">{details.date}</span>
      </div>
      <div className="experience-body">
        <ul>
          {details.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
