import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img className="footer-logo" src="logoFooter.png" alt="logo" />
        </div>
        <div className="footer-section">
          <h4>Enlaces rápidos</h4>
          <ul className="footer-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sobre mi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/businessCard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tarjeta de presentación
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@biupoll.com.co</p>
          <p>Tel: +57 3106417839</p>
          <div className="footer-socials">
            <a href="" className="social-icon" target="_blank">
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://wa.me/573106417839?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita"
              className="social-icon"
              target="_blank"
            >
              <i class="bx bxl-whatsapp-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
              className="social-icon"
              target="_blank"
            >
              <i class="bx bxl-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Biupoll. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
