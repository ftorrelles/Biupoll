import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/contentContact.css";

const ContentContact = () => {
  return (
    <Container fluid className="elegant-contact-section py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h2 className="section-title">Conéctate con Nosotros</h2>
          <p className="section-subtitle">
            Estamos aquí para ayudarte a alcanzar tus metas. Si tienes alguna
            consulta o deseas saber más sobre cómo podemos trabajar juntos, no
            dudes en ponerte en contacto con nosotros. ¡Contáctanos y síguenos
            en redes!
          </p>
        </Col>
      </Row>
      <Row className="gx-5">
        {/* Información de contacto */}
        <Col xs={12} md={6} className="contact-info-column">
          <div className="contact-item">
            <FaPhoneAlt size={40} className="contact-icon" />
            <div>
              <h5>Teléfono</h5>
              <p>+57 3106417839</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={40} className="contact-icon" />
            <div>
              <h5>WhatsApp</h5>
              <p>
                <a
                  href="https://wa.me/573106417839?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chatea con nosotros
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaEnvelope size={40} className="contact-icon" />
            <div className="emailInfo">
              <h5>Correo Electrónico</h5>
              <h6>
                <a
                  href="mailto:admisiones@fundacionlazosdeamor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contacto@biupoll.com.co
                </a>
              </h6>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={40} className="contact-icon" />
            <div>
              <h5>Dirección oficina</h5>
              <p>Bogotá Cra 53f 4-10</p>
            </div>
          </div>
        </Col>
        {/* Redes sociales */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div className="social-section text-center w-100">
            <h5 className="mb-4">Síguenos en Redes Sociales</h5>
            <div className="social-icons d-flex justify-content-center">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={50} color="#143a6d" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={50} color="#143a6d" className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentContact;
