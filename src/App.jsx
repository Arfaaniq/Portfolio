import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Education from "./components/Education/Education";
import Tools from "./components/Tools/Tools";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton";
import "./App.css";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Education />
      <Tools />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton
        phoneNumber="62895385169992"
        message="Halo, saya tertarik dengan portofolio Anda."
      />
    </div>
  );
}

export default App;