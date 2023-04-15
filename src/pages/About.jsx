import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={2}>
                <Col className="div_info_about" lg={8}>
                    <h2>sobre nosotros</h2>
                    <p>
                        Somos un equipo creativo, comprometido con las
                        necesidades tanto de empresas como agencias que
                        requieran de nuestros servicios, cumpliendo con todos
                        los lineamientos de calidad brindándoles una asesoría
                        integral para alcanzar los objetivos propuestos
                        <br />
                        <br />
                        Entregamos información precisa, verídica y confiable en
                        los tiempos requeridos por nuestros clientes.
                    </p>
                </Col>
                <Col lg={4}>
                    <div className="div_img_about">
                        <img src="/about4.png" alt="sobre nosotros" />
                        <div className="img-overlay"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
