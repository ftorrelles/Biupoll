import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ServicesMap from "../compenents/ServicesMap";
import imgAmericanContinent from "/americanContinent.jpg";
import imgCallCenter from "/callCenter.jpeg";
import imgColombia from "/colombia2.jpg";
import imgTrain from "/train.jpg";

const Services = () => {
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFloating((prevIsFloating) => !prevIsFloating);
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <section className="services">
                <div>
                    <h3>Nuestros servicios y soluciones </h3>
                    <h2 style={{ color: "#1c4c96" }}>
                        <Typewriter
                            options={{
                                strings: [
                                    "Tus soluciones",
                                    "Tu tranquilidad",
                                    "Tu crecimiento",
                                    "Tu mejor aliado",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h5 style={{ color: "#1c4c96" }}>
                                Estudios telefónicos
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="primary">
                                    Si tu marca necesita resultados rápidos, con
                                    gran confiabilidad y con metodologías CATI
                                    (Computer-Assisted Telephone Interviewing)
                                    tenemos la solución. Contamos con un{" "}
                                    <strong>Contact Center</strong> que nos
                                    permite tener múltiples agentes gestionando
                                    llamadas, correos electrónicos, atendiendo
                                    consultas. <hr />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        className={`floating-button-container ${
                                            isFloating ? "floating" : ""
                                        }`}
                                    >
                                        <Button variant="primary">
                                            Contactanos
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h5 style={{ color: "#1c4c96" }}>
                                Estudios en Campo
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="primary">
                                    Ofrecemos toda la experiencia de{" "}
                                    <strong>más de 10 años</strong> de trabajo
                                    en el área de recolección cuantitativa.
                                    Contamos con personal capacitado en el uso
                                    de las herramientas de recolección más
                                    demandadas por el mercado actual.
                                    <hr />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        className={`floating-button-container ${
                                            isFloating ? "floating" : ""
                                        }`}
                                    >
                                        <Button variant="primary">
                                            Contactanos
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h5 style={{ color: "#1c4c96" }}>
                                Pruebas de Producto
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="primary">
                                    Las pruebas de productos brindan información
                                    valiosa durante todo el ciclo de vida del
                                    producto , desde su primer concepto.
                                    Descubre cómo ejecutar un proyecto de prueba
                                    de productos con nosotros.{" "}
                                    <strong>
                                        Más de 200 estudios realizados
                                    </strong>{" "}
                                    con diferentes agencias validan nuestra
                                    experiencia.
                                    <hr />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        className={`floating-button-container ${
                                            isFloating ? "floating" : ""
                                        }`}
                                    >
                                        <Button variant="primary">
                                            Contactanos
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <h5 style={{ color: "#1c4c96" }}>
                                Cliente incógnito
                            </h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="primary">
                                    Hemos realizado{" "}
                                    <strong>más de 50 proyectos</strong> de
                                    recolección bajo la modalidad de cliente
                                    misterioso, permitiendo que las marcas
                                    comprueben la calidad y el buen
                                    funcionamientos de sus servicios,
                                    permitiéndoles redefinir sus estrategias en
                                    pro de sus negocios.
                                    <hr />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        className={`floating-button-container ${
                                            isFloating ? "floating" : ""
                                        }`}
                                    >
                                        <Button variant="primary">
                                            Contactanos
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            <h5 style={{ color: "#1c4c96" }}>Reclutamientos</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item variant="primary">
                                    Llevamos a cabo rigurosas búsquedas que nos
                                    permitan contar con los perfiles que las
                                    investigaciones de nuestros clientes
                                    necesitan. De manera constante estamos
                                    actualizando nuestras bases de contactos
                                    para contar con múltiples posibilidades que
                                    ayuden a los resultados de las marcas.
                                    <hr />
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        className={`floating-button-container ${
                                            isFloating ? "floating" : ""
                                        }`}
                                    >
                                        <Button variant="primary">
                                            Contactanos
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr />
                <h2>Como lo hacemos</h2>
                <ServicesMap />
                <hr />
                <Container>
                    <Row xs={1} md={2} lg={2}>
                        <Col lg={4}>
                            <div className="div_img_about">
                                <img src={imgCallCenter} alt="call center" />
                                <div className="img-overlay"></div>
                            </div>
                        </Col>
                        <Col className="div_info_about" lg={8}>
                            <h3>Call center</h3>
                            <p>
                                Realizamos control de calidad y entrevistas
                                telefonicas mediante nuestro call center ubicado
                                en la ciudad de Bogota D.C
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                                className={`floating-button-container ${
                                    isFloating ? "floating" : ""
                                }`}
                            >
                                <a
                                    href="https://www.google.com/maps/place/Cra.+53f+%234-10,+Bogot%C3%A1,+Colombia/@4.6191299,-74.1198713,17.25z/data=!4m5!3m4!1s0x8e3f99519274dd35:0x9a2857adcb89ed7b!8m2!3d4.6191373!4d-74.117351?hl=es"
                                    target="_blank"
                                >
                                    <Button
                                        className="floating-button"
                                        variant="primary"
                                    >
                                        Ubicación
                                    </Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
