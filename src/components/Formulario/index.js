import React from "react";
import "./styles.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const initial_values = {
    nameUser: "",
    user: "",
    pass: "",
    genero: "masculino",
    format: "",
    email: "",
};

export const Formulario = () => {
    const [valuesInput, setvaluesInput] = useState(initial_values);
    const { nameUser, user, pass, format, email } = valuesInput;
    const [openForm, setOpenForm] = useState(false);
    const [currentCourse] = useSelector((state) => state.cursos.cursoActual);

    const name = currentCourse.name;
    const alt = currentCourse.img.title;
    const url = currentCourse.img.img;
    const info = currentCourse.info;

    const history = useHistory();

    const handleOpenForm = () => {
        setOpenForm(!openForm);
    };

    const handleInputs = (e) => {
        setvaluesInput({
            ...valuesInput,
            [e.target.name]: e.target.value,
        });
    };

    const textOpenForm = openForm ? "Cerrar formulario" : "Abrir formulario";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            nameUser.trim() === "" ||
            user.trim() === "" ||
            pass.trim() === "" ||
            format.trim() === "" ||
            email.trim() === ""
        ) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos son necesarios",
            });
        }

        await Swal.fire({
            icon: "success",
            title: "Muy bien",
            text: "Dejanos revisar y pronto estaremos contigo",
        });

        setvaluesInput(initial_values);

        history.push("/cursos");
    };

    return (
        <div className="container">
            <div className="formulario">
                <div className="formulario__title">
                    <h2>
                        Hola bienvenido al curso de <span>{name}</span>
                    </h2>
                </div>
                <div className="formulario__boxBody">
                    <div className="formulario_boxImg">
                        <img src={url} alt={alt} />
                    </div>
                    <div className="formulario_boxInfo">
                        <p>{info}</p>
                        <span
                            className="btn-confirm"
                            onClick={() => handleOpenForm()}
                        >
                            {textOpenForm}
                        </span>
                    </div>
                </div>

                {openForm && (
                    <form className="form__container" onSubmit={handleSubmit}>
                        <h2 className="formulario__title_form">
                            Formulario de inscripcion a <span>{name}</span>
                        </h2>
                        <div className="form__group">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                id="nameUser"
                                name="nameUser"
                                onChange={handleInputs}
                                value={nameUser}
                            />
                            <label htmlFor="name" className="form__label">
                                Nombre
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                id="user"
                                name="user"
                                onChange={handleInputs}
                                value={user}
                            />
                            <label htmlFor="user" className="form__label">
                                Usuario
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="email"
                                className="form__input"
                                placeholder=" "
                                id="nameUser"
                                name="nameUser"
                                onChange={handleInputs}
                                value={email}
                            />
                            <label htmlFor="name" className="form__label">
                                correo
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="password"
                                className="form__input"
                                placeholder=" "
                                id="pass"
                                name="pass"
                                onChange={handleInputs}
                                value={pass}
                            />
                            <label htmlFor="pass" className="form__label">
                                Contraseña
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="radio__container">
                            <h3 className="title__section">Elige tu genero</h3>
                            <input
                                className="input__radio"
                                type="radio"
                                name="genero"
                                id="masculino"
                                onChange={handleInputs}
                                value="masculino"
                            />
                            <label className="label__radio" htmlFor="masculino">
                                Masculino
                            </label>
                            <input
                                className="input__radio"
                                type="radio"
                                name="genero"
                                id="femenino"
                                onChange={handleInputs}
                                value="femenino"
                            />
                            <label className="label__radio" htmlFor="femenino">
                                Fermenino
                            </label>
                            <input
                                className="input__radio"
                                type="radio"
                                name="genero"
                                id="nn"
                                onChange={handleInputs}
                                value="otro"
                            />
                            <label className="label__radio" htmlFor="nn">
                                Otro
                            </label>
                        </div>
                        <div className="select__container">
                            <h3 className="title__section">
                                Seleciona tu comuna
                            </h3>
                            <div className="select">
                                <select
                                    name="format"
                                    id="format"
                                    onChange={handleInputs}
                                    value={format}
                                >
                                    <option
                                        defaultValue
                                        disabled
                                        className="select__default"
                                    >
                                        Escoge una de estas comunas
                                    </option>
                                    <option value="1">Comuna 1</option>
                                    <option value="2">Comuna 2</option>
                                    <option value="3">Comuna 3</option>
                                    <option value="4">Comuna 4</option>
                                    <option value="5">Comuna 5</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="btn-confirm btn-form"
                                value="Enviar postulacion"
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};
