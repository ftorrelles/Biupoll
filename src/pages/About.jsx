import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Row xs={1} md={2} lg={2}>
                <Col className="div_info_about" lg={8}>
                    <h2>sobre nosotros</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum aspernatur alias ex similique perferendis iste
                        vitae sequi sit laborum, illum numquam magnam. Ipsa
                        praesentium eum est enim autem dolorem tempore. Lorem
                        <br />
                        <br />
                        ipsum dolor sit amet consectetur adipisicing elit. Earum
                        aspernatur alias ex similique perferendis iste vitae
                        sequi sit laborum, illum numquam magnam. Ipsa
                        praesentium eum est enim autem dolorem tempore.
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
