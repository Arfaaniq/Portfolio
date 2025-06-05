import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
// import "./App.css";

const ContactSection = () => {
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
      id="contact"
      className="contact-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container">
        <h2 className="section-title">Social Media</h2>
        <div className="github-content">
          <a
            href="https://github.com/Arfaaniq"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub className="github-icon" /> Kunjungi GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arfa-aniq-sabila-6809b4299/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaLinkedin className="linkedin-icon" /> Kunjungi LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;