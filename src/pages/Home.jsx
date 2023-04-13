import React from "react";
import imageHome from "/home4.jpeg";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import About from "./About";
import Stats from "./Stats";
import Services from "./Services";
import Team from "./Team";
import Pollster from "./Pollster";

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
                    <img className="img_logo" src="/Biupoll.jpg" alt="" />
                    <div>
                        <p style={{ padding: "10px" }}>
                            Estamos aquí para ayudarlo a tomar decisiones
                            basadas en datos.
                        </p>
                        <div
                            className={`floating-button-container ${
                                isFloating ? "floating" : ""
                            }`}
                        >
                            <Button
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
            <Stats />
            <Services />
            <Pollster />
            <Team />
        </>
    );
};

export default Home;
