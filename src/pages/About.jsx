import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="container_about">
      <Row xs={1} md={2} lg={2}>
        <Col className="div_info_about" lg={6}>
          <h2>Nosotros</h2>
          <p>
            Somos un equipo especializado en la investigación de mercados y la
            recolección de datos, que, por medio de una asesoría integral y
            personalizada, te orientamos en la toma de decisiones, la gestión de
            proyectos en torno a la consolidación de tu marca o empresa.
            <br />
            <br />
            Te entregamos información precisa, verídica y confiable, en los
            tiempos requeridos, creando soluciones.
          </p>
        </Col>
        <Col lg={6}>
          <div className="div_img_about">
            <img src="/a.jpeg" alt="sobre nosotros" />
            <div className="img-overlay"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
