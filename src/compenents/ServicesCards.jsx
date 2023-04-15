import React from "react";
import { Button, Card } from "react-bootstrap";

const ServicesCards = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col mb-4">
                        <Card
                            bg="white"
                            text="black"
                            className="shadow card-hover card-shadow"
                        >
                            <Card.Header style={{ backgroundColor: "white" }}>
                                Capacitaciones
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Contamos con un equipo completamente
                                    capacitado y dispuesto a escuchar y formar
                                    activamente nuevos talentos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col mb-4">
                        <Card
                            bg="white"
                            text="black"
                            className="shadow card-hover card-shadow"
                        >
                            <Card.Header style={{ backgroundColor: "white" }}>
                                Estudios propios
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Realizando estudios propios para generar
                                    nuestro panel de hábitos de consumo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col mb-4">
                        <Card
                            bg="white"
                            text="black"
                            className="shadow card-hover card-shadow"
                        >
                            <Card.Header style={{ backgroundColor: "white" }}>
                                Estrategia
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Somos conscientes de las estrategias que se
                                    hacen y se desarrollan en cada una de las
                                    investigaciones de mercado
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col mb-4">
                        <Card
                            bg="white"
                            text="black"
                            className="shadow card-hover card-shadow"
                        >
                            <Card.Header style={{ backgroundColor: "white" }}>
                                Tecnología
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Estamos implementando el uso de herramientas
                                    tecnológicas, para optimizar los procesos
                                    tanto de recolección en campo como para
                                    procesamiento y análisis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCards;
