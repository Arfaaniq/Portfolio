import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectsCard";
// import "./App.css";

const ProjectsSection = () => {
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
      id="projects"
      className="projects-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container">
        <h2 className="section-title">Project Experience</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;