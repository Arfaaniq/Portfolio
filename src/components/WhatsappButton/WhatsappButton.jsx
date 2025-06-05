import { FaWhatsapp } from "react-icons/fa6";
// import "./App.css";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;