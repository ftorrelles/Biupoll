import React from "react";
import "../styles/home.css";

const ContentHome = () => {
  return (
    <section className="home-hero-alt space-navbar-pages">
      <div className="overlay" />
      <div className="hero-alt-content">
        <img src="BiupollHome2.png" alt="Logo Home" />
        <h1>
          Investigación que impulsa tu estrategia <br />
          {/* <span>para decisiones acertadas</span> */}
        </h1>
        <p>
          Analizamos tendencias, entendemos comportamientos y te ayudamos a
          construir estrategias sólidas basadas en datos reales.
        </p>
        <a
          href="https://wa.me/573106417839?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-alt-button"
        >
          Solicita información
        </a>
      </div>
    </section>
  );
};

export default ContentHome;
