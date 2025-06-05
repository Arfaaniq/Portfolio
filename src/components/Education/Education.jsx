import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import education from "../../data/education";

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="education"
      className="education-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title">Education and Independent Study</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
            >
              <div className="education-header">
                <h4>{edu.institution}</h4>
                <span className="education-year">{edu.year}</span>
              </div>
              <h5 className="education-degree">{edu.degree}</h5>
              <p className="education-description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;