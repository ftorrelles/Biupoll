import { Container } from "react-bootstrap";
import "../styles/services.css";
//libreria de animaciones
import "animate.css";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const services = [
  {
    options: [
      {
        titleOption: "Cliente incógnito",
        descritionOption:
          "Evaluamos la experiencia real del cliente mediante visitas encubiertas. Identificamos mejoras ocultas en procesos, atención y calidad del servicio.",
        url: "/incognito2.png",
      },
      {
        titleOption: "Reclutamiento",
        descritionOption:
          "Buscamos y seleccionamos perfiles ideales para tus investigaciones. Contamos con bases actualizadas y segmentación efectiva.",
        url: "/reclutamiento2.png",
      },
      {
        titleOption: "Pruebas de producto",
        descritionOption:
          "Validamos tus productos desde el concepto hasta el lanzamiento. Más de 200 estudios respaldan nuestra experiencia y metodología.",
        url: "/pruebaProducto2.png",
      },
      {
        titleOption: "Estudios en campo",
        descritionOption:
          "Recolectamos datos precisos con personal capacitado y herramientas modernas. Más de 10 años de experiencia en estudios cuantitativos.",
        url: "/campo3.png",
      },
    ],
  },
];

const ContentServices = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Container fluid className="services-container">
      <div
        className={`title_section animate__animated ${
          inView ? "animate__zoomIn" : ""
        }`}
        ref={ref}
      >
        <h2>Nuestros servicios</h2>
        <p>Te contamos brevemente porque somos tu mejor opción</p>
      </div>

      {services.map((section, index) => (
        <div key={index} className="services-section ">
          <div className="options-container curved">
            {section.options.map((option, index) => (
              <div
                key={index}
                className={`option animate__animated animate__delay-1s ${
                  inView ? "animate__zoomIn" : ""
                }`}
              >
                <div className="option-content">
                  <h3>{option.titleOption}</h3>
                  <p>{option.descritionOption}</p>
                </div>
                <div className="option-img">
                  <img src={option.url} alt={option.titleOption} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ContentServices;
