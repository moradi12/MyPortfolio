import { useState } from 'react';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import './Skills.css';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        {/* Left: Skill Category Cards */}
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.id}
              iconUrl={skill.icon}
              title={skill.title}
              isActive={selectedSkill.id === skill.id}
              onClick={() => handleSelectSkill(skill)}
              dataTitle={skill.title} // ✅ For CSS data-attribute targeting
            />
          ))}
        </div>

        {/* Right: Selected Skill Details */}
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
