import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <section className="container">
            <div className="home">
                <div className="home__text">
                    <h2>Hola, bienvenido a __________</h2>
                    <br />
                    <div>
                        <h4>Es un placer para nosotros tenerte aqui</h4>
                        <p>
                            Domina las carreras del futuro y trabaja en
                            cualquier lugar del mundo sin salir de casa
                        </p>
                        <br />
                        <b>Solo debes contar con esto: </b>
                        <ul>
                            <li>Estar viviendo en medellin</li>
                            <li>Contar con un rango de edad</li>
                            <li>Ser estrato </li>
                        </ul>
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
