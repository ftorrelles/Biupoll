import React from "react";
import CountUp from "react-countup";
import imageStats from "/stats.jpg";

const Stats = () => {
    const Projects = 250;
    const surveys = 75000;
    return (
        <>
            <section
                className="stats"
                style={{ backgroundImage: `url(${imageStats})` }}
            >
                <h4 className="info_stats">
                    Porque los numeros nos respaldan y detras hay historias de
                    exito
                </h4>

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
            </section>
        </>
    );
};

export default Stats;
