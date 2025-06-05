import { useState } from "react";
// import "./App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="container navbar-content">
        <img
          src="/bongo.svg"
          alt="Profile Icon"
          className="navbar-icon"
        />
        <div className="navbar-logo">My Portfolio</div>
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path
                  d="M4 6H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>
        <ul className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#tools" onClick={() => setIsOpen(false)}>
              Tools and Framework
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Sosmed
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;