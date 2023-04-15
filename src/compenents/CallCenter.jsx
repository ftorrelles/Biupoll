// import { useEffect, useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";

// const CallCenter = () => {
//     const [isFloating, setIsFloating] = useState(false);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setIsFloating((prevIsFloating) => !prevIsFloating);
//         }, 3000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);
//     return (
//         <>
//             <Container>
//                 <hr />
//                 <br />
//                 <Row xs={1} md={2} lg={2}>
//                     <Col className="div_info_about" lg={6}>
//                         <h3>Call center</h3>
//                         <p>
//                             Realizamos control de calidad y entrevistas
//                             telefonicas mediante nuestro call center ubicado en
//                             la ciudad de Bogota D.C
//                         </p>
//                         <div
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "center",
//                             }}
//                             className={`floating-button-container ${
//                                 isFloating ? "floating" : ""
//                             }`}
//                         >
//                             <a
//                                 href="https://www.google.com/maps/place/Cra.+53f+%234-10,+Bogot%C3%A1,+Colombia/@4.6191299,-74.1198713,17.25z/data=!4m5!3m4!1s0x8e3f99519274dd35:0x9a2857adcb89ed7b!8m2!3d4.6191373!4d-74.117351?hl=es"
//                                 target="_blank"
//                             >
//                                 <Button
//                                     className="floating-button"
//                                     variant="primary"
//                                 >
//                                     Ubicación
//                                 </Button>
//                             </a>
//                         </div>
//                     </Col>
//                     <Col lg={6}>
//                         <div className="div_img_about">
//                             <img src="alt="call center" />
//                             <div className="img-overlay"></div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <br />
//                 <hr />
//             </Container>
//         </>
//     );
// };

// export default CallCenter;
