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
        titleOption: "ESTUDIOS TELEFÓNICOS",
        descritionOption:
          "Si tu marca necesita resultados rápidos, con gran confiabilidad y con metodologías CATI (Computer-Assisted Telephone Interviewing) tenemos la solución. Contamos con un Contact Center que nos permite tener múltiples agentes gestionando llamadas, correos electrónicos, atendiendo consultas.",
        url: "/call2.png",
        color: "radial-gradient(circle, #2d7d9c, #0f1626)",
      },
      {
        titleOption: "ESTUDIOS EN CAMPO",
        descritionOption:
          "Ofrecemos toda la experiencia de más de 10 años de trabajo en el área de recolección cuantitativa. Contamos con personal capacitado en el uso de las herramientas de recolección más demandadas por el mercado actual.",
        url: "/campo3.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
      {
        titleOption: "PRUEBAS DE PRODUCTO",
        descritionOption:
          "Las pruebas de productos brindan información valiosa durante todo el ciclo de vida del producto, desde su primer concepto. Descubre cómo ejecutar un proyecto de prueba de productos con nosotros. Más de 200 estudios realizados con diferentes agencias validan nuestra experiencia.",
        url: "/pruebaProducto2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
      {
        titleOption: "CLIENTE INCÓGNITO",
        descritionOption:
          "Hemos realizado más de 50 proyectos de recolección bajo la modalidad de cliente misterioso, permitiendo que las marcas comprueben la calidad y el buen funcionamiento de sus servicios, permitiéndoles redefinir sus estrategias en pro de sus negocios.",
        url: "/incognito2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
      {
        titleOption: "RECLUTAMIENTOS",
        descritionOption:
          "Llevamos a cabo rigurosas búsquedas que nos permitan contar con los perfiles que las investigaciones de nuestros clientes necesitan. De manera constante estamos actualizando nuestras bases de contactos para contar con múltiples posibilidades que ayuden a los resultados de las marcas.",
        url: "/reclutamiento2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
      {
        titleOption: "ASAMBLEAS",
        descritionOption:
          "¡Descubre el servicio perfecto para tus asambleas! Con nuestro completo paquete, garantizamos un flujo sin contratiempos desde la planificación hasta la ejecución.",
        url: "/asamblea2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "ESTUDIOS TELEFÓNICOS",
        descritionOption:
          "Si tu marca necesita resultados rápidos, con gran confiabilidad y con metodologías CATI (Computer-Assisted Telephone Interviewing) tenemos la solución. Contamos con un Contact Center que nos permite tener múltiples agentes gestionando llamadas, correos electrónicos, atendiendo consultas.",
        url: "/call2.png",
        color: "radial-gradient(circle, #2d7d9c, #0f1626)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "ESTUDIOS EN CAMPO",
        descritionOption:
          "Ofrecemos toda la experiencia de más de 10 años de trabajo en el área de recolección cuantitativa. Contamos con personal capacitado en el uso de las herramientas de recolección más demandadas por el mercado actual.",
        url: "/campo3.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "PRUEBAS DE PRODUCTO",
        descritionOption:
          "Las pruebas de productos brindan información valiosa durante todo el ciclo de vida del producto, desde su primer concepto. Descubre cómo ejecutar un proyecto de prueba de productos con nosotros. Más de 200 estudios realizados con diferentes agencias validan nuestra experiencia.",
        url: "/pruebaProducto2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "CLIENTE INCÓGNITO",
        descritionOption:
          "Hemos realizado más de 50 proyectos de recolección bajo la modalidad de cliente misterioso, permitiendo que las marcas comprueben la calidad y el buen funcionamiento de sus servicios, permitiéndoles redefinir sus estrategias en pro de sus negocios.",
        url: "/incognito2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "RECLUTAMIENTOS",
        descritionOption:
          "Llevamos a cabo rigurosas búsquedas que nos permitan contar con los perfiles que las investigaciones de nuestros clientes necesitan. De manera constante estamos actualizando nuestras bases de contactos para contar con múltiples posibilidades que ayuden a los resultados de las marcas.",
        url: "/reclutamiento2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
      },
    ],
  },
  {
    options: [
      {
        titleOption: "ASAMBLEAS",
        descritionOption:
          "¡Descubre el servicio perfecto para tus asambleas! Con nuestro completo paquete, garantizamos un flujo sin contratiempos desde la planificación hasta la ejecución.",
        url: "/asamblea2.png",
        color: "radial-gradient(circle, #d3d1d1, #7a7979)",
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
    <Container fluid style={{ backgroundColor: "#f8f8f8", color: "#143a6d" }}>
      <div>
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
                  // style={{ background: option.color }}
                  className={`option animate__animated animate__delay-1s ${
                    inView ? "animate__zoomIn" : ""
                  }`}
                >
                  <div className="option-content">
                    <h3>{option.titleOption}</h3>
                    <p>{option.descritionOption}</p>
                  </div>
                  <div className="option-img">
                    <img
                      src={option.url}
                      alt={option.titleOption}
                      // className="floating-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContentServices;
