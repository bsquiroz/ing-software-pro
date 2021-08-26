import React, { useEffect, useRef } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { scrollReveal } from "../../helpers/scrollReveals";

export const PanelUser = () => {
    const panelUserRef = useRef(null);

    useEffect(() => {
        scrollReveal({
            component: panelUserRef.current,
            direction: "bottom",
            time: 900,
        });
    }, []);

    //login del componente
    const users = useSelector((state) => state.cursos.users);
    const course = useSelector((state) => state.cursos.cursos);

    let { id } = useParams();

    const [currentUser] = users.filter(
        (user) => Number(user.idUser) === Number(id)
    );

    if (!currentUser) {
        return (
            <div className="container">
                <h1>Lo sentimos, usuario no encontrado</h1>
            </div>
        );
    }

    const { cursoInscripto, nameFull } = currentUser;

    const [currentCourse] = course.filter(
        (course) => course.name === cursoInscripto
    );

    //Arrriba es la capa de extraccion de los datos

    return (
        <div ref={panelUserRef} id="panelUserRef" className="container">
            <div className="panel">
                <h2 className="title">
                    Hola, <span>{nameFull}</span>, espero estes muy bien
                </h2>
                <br />
                <div className="info">
                    <b>
                        Actualmente cuentas con el curso de:{" "}
                        <span>{currentCourse.name}</span>
                    </b>
                </div>
                <div className="box__img">
                    <img
                        src={currentCourse.img.img}
                        alt={currentCourse.img.alt}
                    />
                </div>
                <div>
                    <span className="btn-confirm">
                        Clic aqui para ver las {currentCourse.lessons} clases
                    </span>
                </div>
            </div>
        </div>
    );
};
