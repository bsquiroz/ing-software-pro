import React, { useRef, useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import { imagenes_filtradas } from "../../helpers/filters_img";
import { scrollReveal } from "../../helpers/scrollReveals";

export const PanelAdm = () => {
    const panelAdminRef = useRef(null);

    useEffect(() => {
        scrollReveal({
            component: panelAdminRef.current,
            direction: "top",
            time: 900,
        });
    }, []);

    // logica para obtener los datos
    const users = useSelector((state) => state.cursos.users);
    const cousers = useSelector((state) => state.cursos.cursos);

    const { id } = useParams();

    const [currentUser] = users.filter(
        (user) => Number(user.idUser) === Number(id)
    );

    const allUser = users.filter((user) => user.rol === 2);

    const name = currentUser.data.name;
    const persona = currentUser.data.ocu;

    //logica del componente
    const [showUser, setShowUser] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [showCourse, setShowCourse] = useState(false);

    const handleShowUser = () => {
        setShowUser(!showUser);
        setFilterValue(null);
        setShowCourse(false);
    };

    const handleShowCourse = () => {
        setShowUser(false);
        setFilterValue(null);
        setShowCourse(!showCourse);
    };

    const handleInput = (e) => {
        setFilterValue(e.target.value);
        setShowUser(false);
        setShowCourse(false);
    };

    const imgFilter =
        filterValue === "genero"
            ? imagenes_filtradas[0]
            : filterValue === "edad"
            ? imagenes_filtradas[1]
            : filterValue === "curso"
            ? imagenes_filtradas[2]
            : filterValue === "comuna"
            ? imagenes_filtradas[3]
            : filterValue === "del" && null;

    const ImgFilterShow = () => {
        if (imgFilter) {
            const { url, alt, title } = imgFilter;
            return (
                <div className="imgFilter">
                    <h3>{title}</h3>
                    <div className="imgFilter_box">
                        <img src={url} alt={alt} />
                    </div>
                </div>
            );
        }
        return;
    };

    const Data = () => (
        <>
            {allUser.map((user) => (
                <div className="card__user" key={user.idUser}>
                    <div>
                        <p>
                            <b>Nombre</b>: <small>{user.nameFull}</small>
                        </p>
                        <p>
                            <b>curso inscrito</b>:{" "}
                            <small>{user.cursoInscripto}</small>
                        </p>
                    </div>
                    <div className="box__action">
                        <button className="btn btn-delete">Eliminar</button>
                        <button className="btn btn-update">Modificar</button>
                    </div>
                </div>
            ))}
        </>
    );

    const DataCourse = () => (
        <>
            {cousers.map((course) => (
                <div className="card__user" key={course.id}>
                    <div>
                        <p>
                            <b>Nombre</b>: <small>{course.name}</small>
                        </p>
                        <p>
                            <b>Numero de clases</b>:{" "}
                            <small>{course.lessons}</small>
                        </p>
                    </div>
                    <div className="box__action">
                        <button className="btn btn-delete">Eliminar</button>
                        <button className="btn btn-update">Modificar</button>
                    </div>
                </div>
            ))}
        </>
    );

    const ComponentShowUsers = showUser && (
        <div>
            <h4>Estas son las personas que estan en los cursos: </h4>
            <br />
            <div>
                <Data />
            </div>
        </div>
    );

    const ComponentShowCourse = showCourse && (
        <div>
            <h4>Hasta el momento cuentas con estos cursos: </h4>
            <br />
            <div>
                <DataCourse />
            </div>
        </div>
    );

    return (
        <div ref={panelAdminRef} id="panelAdmin" className="container">
            <div className="panel__adm">
                <div className="ocupacion">
                    <span>{persona}</span>
                    <span className="btn btn-expo">Exportar información</span>
                    <span className="btn btn-expo">Leer documentación</span>
                </div>
                <h2>Panel de administrador</h2>
                <br />
                <p>
                    Bienvenido <b>{name}</b>
                </p>
                <br />
                <div className="btn__options">
                    <span
                        className="btn btn__showUser"
                        onClick={handleShowUser}
                    >
                        {showUser ? "Ocultar usuarios" : "Administrar usuarios"}
                    </span>
                    {ComponentShowUsers}
                    <span
                        className="btn btn__showUser"
                        onClick={handleShowCourse}
                    >
                        {showCourse ? "Ocultar cursos" : "Administrar cursos"}
                    </span>
                    {ComponentShowCourse}
                </div>
                <div className="select__container">
                    <h3 className="title__section">Selecciona un filtro</h3>
                    <div className="select">
                        <select
                            name="format"
                            id="format"
                            onChange={handleInput}
                            value={filterValue}
                        >
                            <option
                                defaultValue
                                disabled
                                className="select__default"
                            >
                                Filtar por
                            </option>
                            <option value="genero">Genero</option>
                            <option value="edad">Edad</option>
                            <option value="curso">Curso</option>
                            <option value="comuna">Comuna</option>
                            {imgFilter && (
                                <option value="del">ELIMINAR FILTRO</option>
                            )}
                        </select>
                    </div>
                </div>
                {imgFilter && <ImgFilterShow />}
            </div>
        </div>
    );
};
