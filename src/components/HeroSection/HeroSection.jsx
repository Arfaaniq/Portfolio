// import "./App.css";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Halo, Saya <span className="gradient-text">BILA</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer & UI/UX Enthusiast</p>
        <a
          href="https://drive.google.com/file/d/1LIqceQ1-hn1okzwWjmL8ADMIPX71neJP/view?usp=sharing"
          className="cta-button-resume"
        >
          <FaDownload style={{ marginRight: "8px" }} />
          GET RESUME
        </a>
        <a
          href={`https://wa.me/62895385169992?text=${encodeURIComponent("Halo, saya tertarik dengan portofolio Anda.")}`} className="cta-button"
        >
          <FaWhatsapp style={{ marginRight: "8px" }} />
          CONTACT ME
        </a>
      </div>
      <div className="hero-image-container">
        <img src="/bongo.svg" alt="Your Profile" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
