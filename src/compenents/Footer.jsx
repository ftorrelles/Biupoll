import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>
                            <a href="/#">
                                <strong>Biupoll</strong>
                            </a>
                        </h3>
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>Redes sociales</h3>
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
                    </div>
                    <div className="footer-content">
                        <h3 style={{ textAlign: "center" }}>
                            Nuestros servicios
                        </h3>
                        <div style={{ textAlign: "center" }}>
                            <ul>
                                <li>
                                    <Link to="/services">
                                        Estudios Telefonicos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Estudios en campo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Prueba de producto
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Cliente incognito
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">Reclutamiento</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p className="footer_copy">
                        © BIUPOLL. All rigths reserved{" "}
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
