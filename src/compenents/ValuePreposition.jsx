import React from "react";
import "../styles/valuePreposition.css"; // Archivo CSS para estilizar el componente

import "animate.css/animate.min.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const ValuePreposition = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section className="social-innovation">
      <h2
        className={`section-title animate__animated ${
          inView ? "animate__fadeInDown" : ""
        }`}
        ref={ref}
      >
        PROPUESTA DE VALOR
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <div className="octagon-wrapper">
              <div className="octagon octagon-4">
                <i className="bx bx-group"></i>
                <p className="octagon-description">
                  Somos un equipo que constantemente está formando personal, que
                  tiene la capacidad de incorporar nuevos talentos locales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="octagon-wrapper">
              <div className="octagon octagon-4">
                <i className="bx bx-time-five"></i>
                <p className="octagon-description">
                  Estamos en la capacidad de contar con un equipo disponible de
                  manera inmediata, para dar inicio a la recolección de datos,
                  en cualquier parte de los territorios en los que tenemos
                  cobertura.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="octagon-wrapper">
              <div className="octagon octagon-4">
                <i className="bx bx-news"></i>
                <p className="octagon-description">
                  Generamos boletines informativos, basados en estudios propios
                  con temáticas sociales o académicas, para mantener informados
                  a nuestros paneles de opinión.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <div className="octagon-wrapper">
              <div className="octagon octagon-4">
                <i className="bx bx-chart"></i>
                <p className="octagon-description">
                  Realizamos estudios propios, con un foco preciso para
                  encontrar el público objetivo, de los estudios que requieren
                  nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePreposition;
