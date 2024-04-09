import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Redes sociales</h3>
            <div className="div_icons_contact">
              <a
                href="https://www.linkedin.com/in/biupoll-sas-4971a1273/"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://wa.me/573113118867" target="_blank">
                <i className="bx bxl-whatsapp"></i>
              </a>

              {/* <a
                                href=""
                                target="_blank"
                            >
                                <i className="bx bxl-facebook-circle"></i>
                            </a> */}
            </div>
          </div>{" "}
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>
              <a href="/#">
                <img src="Biupoll_image.png" alt="" />
              </a>
            </h3>
          </div>
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Nuestros servicios</h3>
            <div style={{ textAlign: "center" }}>
              <ul>
                <li>
                  <Link to="/Services">Estudios Telefonicos</Link>
                </li>
                <li>
                  <Link to="/Services">Estudios en campo</Link>
                </li>
                <li>
                  <Link to="/Services">Prueba de producto</Link>
                </li>
                <li>
                  <Link to="/Services">Cliente incognito</Link>
                </li>
                <li>
                  <Link to="/Services">Reclutamiento</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy">
          <p className="footer_copy">© BIUPOLL. All rigths reserved </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
