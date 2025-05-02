import React from "react";
import "../styles/whyChooseUs.css";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const reasons = [
    {
      icon: "bx bxs-user-voice",
      title: "Asesoría Integral",
      text: "Ofrecemos un acompañamiento cercano y personalizado durante todo el proceso.",
    },
    {
      icon: "bx bxs-flag-checkered",
      title: "Compromiso con los Resultados",
      text: "Trabajamos para alcanzar los objetivos que nuestros clientes se proponen, con un enfoque claro hacia el éxito.",
    },
    {
      icon: "bx bxs-time",
      title: "Calidad y Puntualidad",
      text: "Cumplimos con los tiempos de entrega sin sacrificar la calidad del servicio.",
    },
  ];

  const values = [
    {
      icon: "bx bxs-bulb",
      title: "Creatividad",
      text: "Pensamos fuera de la caja para ofrecer soluciones innovadoras.",
    },
    {
      icon: "bx bxs-hand",
      title: "Confianza",
      text: "Nos basamos en la transparencia y confiabilidad en todas nuestras interacciones.",
    },
    {
      icon: "bx bxs-medal",
      title: "Excelencia",
      text: "Siempre buscamos superarnos, ofreciendo resultados que hablen por sí mismos.",
    },
  ];

  return (
    <>
      <section className="why-bg" ref={ref}>
        <h2
          className={`section-title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
        >
          ¿Por qué Elegirnos?
        </h2>
        <div className="cards-wrapper">
          {reasons.map((item, index) => (
            <div
              className={`card card-dark animate__animated ${
                inView ? "animate__fadeInUp" : ""
              }`}
              key={index}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,0 C480,100 960,0 1440,100 L1440,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      <section className="white-bg">
        <h2
          className={`section-title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
        >
          Lo que Nos Define
        </h2>
        <div className="cards-wrapper">
          {values.map((item, index) => (
            <div
              className={`card animate__animated ${
                inView ? "animate__fadeInUp" : ""
              }`}
              key={index}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
