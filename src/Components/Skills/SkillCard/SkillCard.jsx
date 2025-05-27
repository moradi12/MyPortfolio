import './SkillCard.css';

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skill-card ${isActive ? "active" : ""}`}
      data-title={title}
      onClick={onClick}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={`${title} icon`} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
