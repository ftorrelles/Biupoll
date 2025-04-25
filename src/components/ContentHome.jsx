// import React from "react";
// import "../styles/home.css";
// import "animate.css";

// const ContentHome = () => {
//   return (
//     <section className="home-hero">
//       <div className="hero-content animate__animated animate__fadeInLeft">
//         <h1>Investigación que impulsa tu estrategia</h1>
//         <p>
//           Transformamos datos en decisiones. Te ayudamos a entender tu mercado,
//           tus clientes y tus oportunidades de crecimiento.
//         </p>
//         <a href="#contacto" className="cta-button">
//           Contáctanos
//         </a>
//       </div>
//       <div className="hero-image animate__animated animate__fadeInRight">
//         <img src="imgHome.jpg" alt="Investigación de Mercado" />
//       </div>
//     </section>
//   );
// };

// export default ContentHome;

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
          href="https://wa.me/573113118867?text=Hola%20Biupoll,%20me%20gustaría%20agendar%20una%20cita"
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
