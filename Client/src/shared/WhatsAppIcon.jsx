import React from "react";
import whatsappImage from "../assets/images/WhatsApp-removebg.png";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+923150009655"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon-container" // Apply the CSS class
    >
      <img
        src={whatsappImage}
        alt="WhatsApp"
        className="whatsapp-icon" // Apply the CSS class
      />
    </a>
  );
};

export default WhatsAppIcon;
