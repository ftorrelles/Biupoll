import React from "react";
import CountUp from "react-countup";
import imageStats from "/estadisticas3.png";
import { useInView } from "react-intersection-observer";
import "../styles/contentStats.css";

const ContentStats = () => {
  const Projects = 300;
  const surveys = 191000;
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <section
        ref={ref}
        className={`stats ${inView ? "animate__animated " : ""}`}
        style={{
          backgroundImage: `url(${imageStats})`,
          filter: " brightness(1.2) contrast(1.2)",
        }}
      >
        <h4 className="info_stats">
          Porque los números nos respaldan y detrás hay historias de éxito
        </h4>
        {inView && (
          <div className="counter">
            <div className="counter__item">
              <i className="bx bx-notepad"></i>
              <CountUp
                start={0}
                end={surveys}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" encuestas realizadas"
              />
            </div>
            <div className="counter__item">
              <i className="bx bx-check-square"></i>
              <CountUp
                start={0}
                end={Projects}
                duration={2.5}
                delay={0.5}
                separator=","
                decimals={0}
                prefix="+ de "
                suffix=" proyectos exitosos"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContentStats;
