import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./ExperienceCard.css";

const variants = {
  hidden:  { opacity: 0, y: 40 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const ExperienceCard = ({ details, index = 0 }) => (
  <motion.div
    className="experience-card"
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.15 }}
  >
    <div className="experience-header">
      <h6>{details.title}</h6>
      {details.date && (
        <span className="experience-duration">{details.date}</span>
      )}
    </div>

    <div className="experience-body">
      <ul>
        {details.responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

ExperienceCard.propTypes = {
  details: PropTypes.object.isRequired,
  index:   PropTypes.number,
};

export default ExperienceCard;
