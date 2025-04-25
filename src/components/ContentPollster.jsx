import React from "react";
import imagePollster from "/form1.png";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../styles/contentPollster.css";

const Pollster = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section
      className="pollster"
      style={{ backgroundImage: `url(${imagePollster})` }}
    >
      <div className="pollster_info">
        <div>
          <p>
            En nuestra empresa, contamos con un equipo altamente capacitado y
            comprometido en escuchar, guiar y formar activamente a nuevos
            talentos. Nos enorgullece ofrecer un ambiente de aprendizaje
            constante, donde cada miembro tiene la oportunidad de crecer
            profesionalmente. Estamos comprometidos en brindar herramientas y
            conocimientos que permitan a nuestros colaboradores desarrollarse en
            sus áreas de interés, contribuyendo al éxito tanto personal como
            colectivo. <br /> <br />
            Quieres ser parte de nuestro equipo de trabajo???
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: " center",
            }}
            className={`floating-button-container ${
              isFloating ? "floating" : ""
            }`}
          >
            <a href="https://forms.gle/bUun8QVeF1tEb8DW8" target="_blank">
              <Button
                className="floating-button"
                style={{ backgroundColor: "#143a6d" }}
              >
                Formulario de inscripcion
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pollster;
