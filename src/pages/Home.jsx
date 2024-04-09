import React from "react";

import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import imageHome from "/home4.jpeg";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Team from "./Team";
import Pollster from "./Pollster";
import Deparments from "../compenents/Deparments";
import ServicesMap from "../compenents/ServicesMap";
import ServicesCards from "../compenents/ServicesCards";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import ContentServices from "../compenents/contentServices";
import ValuePreposition from "../compenents/ValuePreposition";
import PhotoGallery from "../compenents/PhotoGallery";
import ContentContact from "../compenents/ContentContact";

const Home = () => {
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
    <>
      {/* <section
        className="home"
        style={{
          backgroundImage: `url(${imageHome})`,
        }}
      >
        <div className="home_logo">
          <img className="img_logo" src="/logo4.png" alt="logo" />
          <img className="img_logo-mobile" src="/logo2.png" alt="logo" />
          <div>
            <p style={{ padding: "10px 10px 0 10px" }}>
              Convierte datos en decisiones: Nuestro enfoque analítico te
              proporciona información valiosa para tomar decisiones informadas y
              estratégicas
            </p>
            <div
              className={`floating-button-container ${
                isFloating ? "floating" : ""
              }`}
            >
              <Button
                as={Link}
                to="/contact"
                className="floating-button"
                variant="primary"
              >
                Quiero informacion
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="home">
        <Carousel indicators={false} fade>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 1020px)" srcSet="/imgHome10.png" />
              <source media="(max-width: 1019px)" srcSet="/imgMobile1.png" />
              <img
                className="d-block w-100"
                src="/imgHome8.png"
                alt="first slide"
              />
            </picture>
            <div className="text-container">
              <h3>
                <strong style={{ color: "#ffffff" }}>
                  Te proporcionamos información y asesoría para tomar decisiones
                  estratégicas.
                </strong>
              </h3>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 1020px)" srcSet="/imgHome9.png" />
              <source media="(max-width: 1019px)" srcSet="/imgMobile2.png" />
              <img
                className="d-block w-100"
                src="/imgHome7.png"
                alt="Second slide"
              />
            </picture>
            <div className="text-container">
              <h3>
                <strong style={{ color: "#ffffff" }}>
                  Te entregamos información precisa, verídica y confiable, en
                  los tiempos requeridos.
                </strong>
              </h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <About />
      <Deparments />
      <ServicesMap />
      <ValuePreposition />
      {/* <ServicesCards />
      <div className="effect">
        <h4 style={{ color: "black", padding: "2rem 0" }}>
          <strong>
            "La calidad humana es parte fundamental en nuestra familia BIUPOLL"
          </strong>
        </h4>
        <h5 style={{ color: "#1c4c96" }}>
          <Typewriter
            options={{
              strings: [
                "Realizamos estudios de investigación de mercado y de opinión pública.",
                "Utilizamos diferentes metodologías, las cuales nos han permitido tener eficiencia y eficacia",
              ],
              autoStart: true,
              loop: true,
              typeSpeed: 50,
              backDelay: 1000,
            }}
          />
        </h5>
      </div>
      <br /> */}
      <Stats />
      <ContentServices />
      {/* <Services /> */}
      <Pollster />
      <PhotoGallery />
      <ContentContact />

      {/* <Team /> */}
    </>
  );
};

export default Home;
