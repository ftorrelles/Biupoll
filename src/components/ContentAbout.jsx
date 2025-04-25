import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/ContentAbout.css";

const ContentAbout = () => {
  return (
    <Container className="container_about">
      <Row xs={1} md={1} lg={2}>
        <Col className="div_info_about" lg={6}>
          <h2>Nosotros</h2>
          <p>
            Somos un equipo creativo y comprometido, con amplia experiencia en
            brindar soluciones estratégicas a empresas y agencias que buscan
            destacar en el mercado. <br />
            <br /> Nos especializamos en entender las necesidades de nuestros
            clientes y ofrecerles servicios personalizados que garanticen el
            éxito de cada proyecto.
          </p>
        </Col>
        <Col lg={6}>
          <div className="div_img_about">
            <img src="/imgAbout.png" alt="sobre nosotros" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentAbout;
