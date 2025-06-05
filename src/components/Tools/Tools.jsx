import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import tools from "../../data/tools";

const Tools = () => {
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
      id="tools"
      className="tools-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2 className="section-title">Tools and Framework</h2>
        <div className="tools-grid">
          {tools.map((toolGroup, index) => (
            <motion.div
              key={index}
              className="tool-category"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="tool-category-title">{toolGroup.category}</h4>
              <div className="tool-items">
                {toolGroup.items.map((tool, i) => (
                  <motion.div 
                    key={i} 
                    className="tool-item"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img 
                      src={tool.img} 
                      alt={tool.name} 
                      className="tool-icon"
                    />
                    <span className="tool-name">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Tools;