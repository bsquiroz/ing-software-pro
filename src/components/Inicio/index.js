import React, { useEffect, useRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { scrollReveal } from "../../helpers/scrollReveals";

export const Inicio = () => {
    const inicioRef = useRef(null);

    useEffect(() => {
        scrollReveal({
            component: inicioRef.current,
            direction: "top",
            time: 900,
        });
    }, []);

    return (
        <section ref={inicioRef} id="inicio" className="container">
            <div className="home">
                <div className="home__text">
                    <h2>
                        Hola, bienvenido a <span className="slogan">MLB</span>
                    </h2>
                    <br />
                    <div>
                        <h4>Es un placer para nosotros tenerte aqui</h4>
                        <p>
                            Domina las carreras del futuro y trabaja en
                            cualquier lugar del mundo sin salir de casa
                        </p>
                        <br />
                        <br />
                        <p>
                            <b>
                                Recordar que solo puedes inscribirte a 2 cursos
                                maximo
                            </b>
                        </p>
                        <br />
                        <br />
                        <div>
                            <Link to="/cursos">
                                <span className="btn-confirm">
                                    Comienza a estudiar ya
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home__img">
                    <img
                        src="https://ed.team/static/images/utils/students.png"
                        alt="imagen"
                    />
                </div>
            </div>
        </section>
    );
};
