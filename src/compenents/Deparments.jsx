import { Button, Col, Container, Row } from "react-bootstrap";
import ModalDepartments from "./ModalDepartments";
import { useState } from "react";
import imgCoverage from "/fondoCol2.png";

const Deparments = () => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section
        className="coverage"
        style={{
          backgroundImage: `url(${imgCoverage})`,
        }}
      >
        <Container>
          <h2
            style={{
              color: "black",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Cobertura Nacional
          </h2>
          <Row xs={1} md={2} lg={2}>
            <Col className="coverage_info" lg={7}>
              {/* <h3>Call center</h3>
              <p>
                Realizamos control de calidad y entrevistas telefonicas mediante
                nuestro call center ubicado en la ciudad de Bogota D.C
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.google.com/maps/place/Cra.+53f+%234-10,+Bogot%C3%A1,+Colombia/@4.6191299,-74.1198713,17.25z/data=!4m5!3m4!1s0x8e3f99519274dd35:0x9a2857adcb89ed7b!8m2!3d4.6191373!4d-74.117351?hl=es"
                  target="_blank"
                >
                  <Button className="floating-button" variant="primary">
                    Ubicación
                  </Button>
                </a>
              </div> */}
              <img src="/deparments1.png" alt="" />
            </Col>
            <Col className="coverage_info" lg={5}>
              <h3 style={{ color: "black" }}>Cobertura en toda Colombia</h3>
              <p>
                Contamos con cobertura en
                <strong> los 32 Departamentos</strong> de nuestro pais para
                campo presencial
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="button"
                  onClick={handleShow}
                  className="floating-button"
                  style={{ backgroundColor: "#143a6d" }}
                >
                  Cobertura
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ModalDepartments show={show} handleClose={handleClose} />
    </>
  );
};

export default Deparments;
