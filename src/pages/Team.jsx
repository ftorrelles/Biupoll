import React from "react";
import Typewriter from "typewriter-effect";

const Team = () => {
    return (
        <>
            <section className="section_team">
                <div>
                    <h3>Nuestro equipo.. </h3>
                    <h2 style={{ color: "#1c4c96" }}>
                        <Typewriter
                            options={{
                                strings: [
                                    "Nuestra mayor fortaleza",
                                    "Nuestro valor agregado",
                                    "Nuestra cara",
                                    "Nuestro orgullo",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>
                <div className="team">
                    <div className="team_member">
                        <h3 className="member_name">Diana Valencia </h3>
                        <div className="member_image">
                            <img src="/example.jpg" className="active" alt="" />
                        </div>
                        <div className="member_description">
                            <p>
                                CEO
                                <br />
                                <br />
                                Licienciada negocios internacionales <br />
                                <br />
                                20 años de experiencia
                            </p>
                        </div>
                    </div>
                    <div className="team_member">
                        <h3 className="member_name">Maria Jimenez</h3>
                        <div className="member_image">
                            <img src="/example.jpg" className="active" alt="" />
                        </div>
                        <div className="member_description">
                            <p>
                                CEO
                                <br />
                                <br />
                                Licienciada negocios internacionales <br />
                                <br />
                                20 años de experiencia
                            </p>
                        </div>
                    </div>
                    <div className="team_member">
                        <h3 className="member_name">Lucia Perez</h3>
                        <div className="member_image">
                            <img src="/example.jpg" className="active" alt="" />
                        </div>
                        <div className="member_description">
                            <p>
                                CEO
                                <br />
                                <br />
                                Licienciada negocios internacionales <br />
                                <br />
                                20 años de experiencia
                            </p>
                        </div>
                    </div>
                    <div className="team_member">
                        <h3 className="member_name">Carmen Malave</h3>
                        <div className="member_image">
                            <img src="/example.jpg" className="active" alt="" />
                        </div>
                        <div className="member_description">
                            <p>
                                CEO
                                <br />
                                <br />
                                Licienciada negocios internacionales <br />
                                <br />
                                20 años de experiencia
                            </p>
                        </div>
                    </div>
                    <div className="team_member">
                        <h3 className="member_name">Rosa Torres</h3>
                        <div className="member_image">
                            <img src="/example.jpg" className="active" alt="" />
                        </div>
                        <div className="member_description">
                            <p>
                                CEO
                                <br />
                                <br />
                                Licienciada negocios internacionales <br />
                                <br />
                                20 años de experiencia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
