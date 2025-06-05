import { motion } from "framer-motion";
import { useState, useCallback } from "react";

const ProjectCard = ({ project, index, controls }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prev => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }, [project.images.length]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(prev => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }, [project.images.length]);

  return (
    <>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <button 
            className="preview-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageModalOpen(true);
              setCurrentImageIndex(0);
            }}
          >
            See Preview
          </button>
        </div>
        <div className="project-overlay"></div>
      </motion.div>

      {/* Modal Gambar dengan Slide */}
      {isImageModalOpen && (
        <div className="image-modal" onClick={() => setIsImageModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={(e) => {
                e.stopPropagation();
                setIsImageModalOpen(false);
              }}
            >
              &times;
            </button>
            
            <div className="slider-container">
              <button className="nav-button prev" onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}>
                &lt;
              </button>
              
              <img 
                src={project.images[currentImageIndex]} 
                alt={`Preview ${project.title} ${currentImageIndex + 1}`}
                className="project-preview-image"
              />
              
              <button className="nav-button next" onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}>
                &gt;
              </button>
            </div>
            
            <div className="image-indicator">
              {project.images.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;