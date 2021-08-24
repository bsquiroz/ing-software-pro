import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const PanelAdm = () => {
    const users = useSelector((state) => state.cursos.users);
    const { id } = useParams();

    const [currentUser] = users.filter(
        (user) => Number(user.idUser) === Number(id)
    );

    const allUser = users.filter((user) => user.rol === 2);

    const name = currentUser.data.name;
    const persona = currentUser.data.ocu;

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

    return (
        <div className="container">
            <div className="panel__adm">
                <div className="ocupacion">
                    <b>{persona}</b>
                </div>

                <h2>Panel de administrador</h2>
                <br />
                <p>
                    Bienvenido <b>{name}</b>
                </p>
                <br />
                <div>
                    <h4>Estas son las personas que estan en los cursos: </h4>
                    <br />
                    <div>
                        <Data />
                    </div>
                </div>
            </div>
        </div>
    );
};
