import React from "react";
import imagePollster from "/team2.jpeg";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

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
                    <p>Quieres ser parte de nuestro equipo de trabajo???</p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: " center",
                        }}
                        className={`floating-button-container ${
                            isFloating ? "floating" : ""
                        }`}
                    >
                        <a
                            href="https://forms.gle/bUun8QVeF1tEb8DW8"
                            target="_blank"
                        >
                            <Button
                                className="floating-button"
                                variant="primary"
                            >
                                Inscribirme
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pollster;
