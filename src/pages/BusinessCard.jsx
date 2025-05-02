import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/businessCard.css";

const BusinessCard = () => {
  return (
    <div className="card-business-container">
      <div className="card-business">
        <div className="card-business-logo">
          <img src="/BiupollHome2.png" alt="Logo" />
        </div>

        <p className="card-business-subtitle">
          Síguenos en nuestras redes sociales y visita nuestro sitio web
        </p>
        <div className="card-business-buttons card-business-icons">
          <a href="" target="_blank" className="card-business-button">
            <FaFacebook className="icon" /> Síguenos en Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
            target="_blank"
            className="card-business-button"
          >
            <FaLinkedin className="icon" />
            Síguenos en Linkedin
          </a>
          <Link to="/" className="card-business-button">
            <CgWebsite className="icon" />
            Visita nuestro sitio web
          </Link>
          <a
            href="https://wa.me/573106417839?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita"
            target="_blank"
            className="card-business-button"
          >
            <FaWhatsapp className="icon" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
