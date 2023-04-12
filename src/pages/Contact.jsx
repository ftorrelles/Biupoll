import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Contacts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [infoForm, setInfoForm] = useState("");

    const submit = (data) => {
        setInfoForm(data);
        reset();
    };
    console.log(infoForm);
    return (
        <>
            <section className="contact">
                <Row xs={1} md={2} lg={2}>
                    <Col lg={3} className="col_contactInfo">
                        <h2 className="titles_contact">
                            Informacion de contacto
                        </h2>
                        <ul style={{ padding: "0" }}>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    Cede Principal:{" "}
                                </span>
                                Colombia
                            </li>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    Email:{" "}
                                </span>
                                Biupoll@gmail.com
                            </li>
                            <li>
                                <span style={{ color: "#1c4c96" }}>
                                    telefonos:
                                </span>
                                +57 3134890987
                            </li>
                        </ul>
                        <h6>Puedes ver nuestras resdes sociales</h6>

                        <div className="div_icons_contact">
                            <a
                                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/francisco.alejandro.524"
                                target="_blank"
                            >
                                <i className="bx bxl-facebook-circle"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                                target="_blank"
                            >
                                <i className="bx bxl-twitter"></i>
                            </a>
                        </div>
                    </Col>
                    <Col style={{ padding: " 0 6rem" }} lg={9}>
                        <h2 className="titles_contact">
                            ¿Tienes dudas?¿Quieres saber más información? !deja
                            tu informacion y nos pondremos en contacto contigo¡
                        </h2>{" "}
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="form_field">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="nombre y apellido"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="phone">Telefono</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="nombre y apellido"
                                    {...register("phone", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="email-input">Email</label>
                                <input
                                    type="email"
                                    id="email-input"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form_field">
                                <label htmlFor="comment">Comentarios</label>
                                <textarea
                                    rows="10"
                                    cols="20"
                                    name="comment"
                                    id="comment"
                                    placeholder="Dejame un comentario de tu duda o servicio deseado para tener una idea de como ayudarte"
                                    {...register("comment", { required: true })}
                                ></textarea>
                            </div>

                            <Button type="submit" className="bt_contact">
                                enviar
                            </Button>
                        </form>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Contacts;
