import React from "react";
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
            <section
                className="home"
                style={{
                    backgroundImage: `url(${imageHome})`,
                }}
            >
                <div className="home_logo">
                    <img className="img_logo" src="/logo4.png" alt="logo" />
                    <img
                        className="img_logo-mobile"
                        src="/logo2.png"
                        alt="logo"
                    />
                    <div>
                        <p style={{ padding: "10px 10px 0 10px" }}>
                            Convierte datos en decisiones: Nuestro enfoque
                            analítico te proporciona información valiosa para
                            tomar decisiones informadas y estratégicas
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
            </section>
            <About />
            <Deparments />

            <ServicesMap />
            <ServicesCards />
            <div className="effect">
                <h4 style={{ color: "black", padding: "2rem 0" }}>
                    <strong>
                        "La calidad humana es parte fundamental en nuestra
                        familia BIUPOLL"
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
                            typeSpeed: 25,
                        }}
                    />
                </h5>
            </div>
            <br />
            <Stats />
            <Services />
            <Pollster />
            {/* <Team /> */}
        </>
    );
};

export default Home;
