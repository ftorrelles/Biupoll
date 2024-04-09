import React from "react";
import "../styles/contentContact.css";

const ContentContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Informacion de contacto
        </h3>
        <ul>
          <li>
            <div className="contact-item">
              <i className="bx bxs-phone"></i>
              <p>+57 3113118867</p>
            </div>
          </li>
          <li>
            <div className="contact-item">
              <i className="bx bx-globe"></i>
              <p>www.biupoll.com.co</p>
            </div>
          </li>
          <li>
            <div className="contact-item">
              <i className="bx bx-envelope"></i>
              <p>contacto@biupoll.com.co</p>
            </div>
          </li>
          <li>
            <div className="contact-item">
              <i className="bx bx-map"></i>
              <p>Bogotá Cra 53f 4-10</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-img">
        <img src="/call3.png" alt="" />
      </div>
    </section>
  );
};

export default ContentContact;
