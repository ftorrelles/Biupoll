import { Button, Col, Container, Row } from "react-bootstrap";
import ModalDepartments from "./ModalDepartments";
import { useState } from "react";
import imgCoverage from "/fondoCol2.png";
import "../styles/departments.css";

const Departments = () => {
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
          <h2 className="coverage_title">Cobertura Nacional</h2>
          <Row xs={1} md={1} lg={2}>
            <Col className="coverage_info" lg={7}>
              <img src="/departments1.png" alt="" />
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

export default Departments;
