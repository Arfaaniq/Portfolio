import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import skills from "../../data/skills";

const AboutSection = () => {
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
      id="about"
      className="about-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className="container-about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Saya merupakan mahasiswa semester 4 di Politeknik Negeri Batam
              dengan pengalaman dalam desain UI/UX menggunakan Figma.
            </p>
            <p>
              Selain design, saya juga dapat mengembangkan aplikasi web
              front-end menggunakan framework CSS seperti Tailwind CSS dan Bootstrap.
            </p>
          </div>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, #2563eb, #7c3aed)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;