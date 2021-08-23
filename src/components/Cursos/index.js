import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCurrentCourse } from "../../state/actions/cursosActions";

export const Cursos = () => {
    const allCourses = useSelector((state) => state.cursos.cursos);
    const dispatch = useDispatch();

    const handleCurrentCourse = (todo) => {
        dispatch(getCurrentCourse(todo));
    };

    const printCursos = allCourses.map((curso) => (
        <div className="course__box" key={curso.id}>
            <div className="course__boxImg">
                <img src={curso.img.img} alt={curso.img.title} />
            </div>

            <div className="course__boxInfo">
                <b>{curso.name}</b>
                <div className="link">
                    <Link
                        to={`cursos/${curso.id}`}
                        onClick={() => handleCurrentCourse(curso)}
                    >
                        Ir al curso
                    </Link>
                </div>
            </div>
        </div>
    ));
    return (
        <section className="container">
            <div className="courses">
                <h2>Estos son los cursos que tenemos para ti </h2>
                <div className="courses__container">{printCursos}</div>
            </div>
        </section>
    );
};
