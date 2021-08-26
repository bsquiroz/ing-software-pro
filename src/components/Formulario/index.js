import React, { useEffect, useRef } from "react";
import "./styles.css";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { addUser } from "../../state/actions/cursosActions";
import { scrollReveal } from "../../helpers/scrollReveals";

const initial_values = {
    nameFull: "",
    user: "",
    pass: "",
    passReply: "",
    genero: "masculino",
    format: "",
    email: "",
    dateBorn: "",
    barrio: "",
    dir: "",
    cc: "",
};

export const Formulario = () => {
    const formularioRef = useRef(null);

    const [valuesInput, setvaluesInput] = useState(initial_values);
    const {
        nameFull,
        user,
        pass,
        format,
        email,
        passReply,
        dateBorn,
        barrio,
        dir,
        cc,
    } = valuesInput;
    const [openForm, setOpenForm] = useState(false);
    const [currentCourse] = useSelector((state) => state.cursos.cursoActual);
    const dispatch = useDispatch();

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
            nameFull.trim() === "" ||
            user.trim() === "" ||
            pass.trim() === "" ||
            format.trim() === "" ||
            email.trim() === "" ||
            passReply.trim() === "" ||
            dateBorn.trim() === "" ||
            barrio.trim() === "" ||
            dir.trim() === ""
        ) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos son necesarios 😨",
            });
        }

        if (pass.trim() !== passReply.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Las contraseñas no coinciden 😕",
            });
        }

        if (pass.length < 8) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes de ingresar mas de 8 caracteres 😕",
            });
        }

        await Swal.fire({
            icon: "success",
            title: "Muy bien",
            text: "Dejanos revisar y pronto estaremos contigo 😎",
        });

        valuesInput.idUser = Date.now();
        valuesInput.cursoInscripto = name;
        valuesInput.rol = 2;

        dispatch(addUser(valuesInput));
        setvaluesInput(initial_values);
        history.push("/cursos");
    };

    useEffect(() => {
        scrollReveal({
            component: formularioRef.current,
            direction: "bottom",
            time: 900,
        });
    }, []);

    return (
        <div ref={formularioRef} id="formulario" className="container">
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
                                id="nameFull"
                                name="nameFull"
                                onChange={handleInputs}
                                value={nameFull}
                            />
                            <label htmlFor="nameFull" className="form__label">
                                Nombres y apellidos
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="date"
                                className="form__input"
                                placeholder=" "
                                id="dateBorn"
                                name="dateBorn"
                                onChange={handleInputs}
                                value={dateBorn}
                            />
                            <label htmlFor="dateBorn" className="form__label">
                                Fecha de nacimiento
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="number"
                                className="form__input"
                                placeholder=" "
                                id="cc"
                                name="cc"
                                onChange={handleInputs}
                                value={cc}
                            />
                            <label htmlFor="cc" className="form__label">
                                Cedula
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
                                id="email"
                                name="email"
                                onChange={handleInputs}
                                value={email}
                            />
                            <label htmlFor="name" className="form__label">
                                Correo
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
                        <div className="form__group">
                            <input
                                type="password"
                                className="form__input"
                                placeholder=" "
                                id="passReply"
                                name="passReply"
                                onChange={handleInputs}
                                value={passReply}
                            />
                            <label htmlFor="passReply" className="form__label">
                                Por favor repita la contraseña
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
                                Selecciona tu comuna
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
                                    <option value="Comuna 1">Comuna 1</option>
                                    <option value="Comuna 2">Comuna 2</option>
                                    <option value="Comuna 3">Comuna 3</option>
                                    <option value="Comuna 4">Comuna 4</option>
                                    <option value="Comuna 5">Comuna 5</option>
                                </select>
                            </div>
                        </div>
                        <div className="form__group">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                id="barrio"
                                name="barrio"
                                onChange={handleInputs}
                                value={barrio}
                            />
                            <label htmlFor="barrio" className="form__label">
                                Barrio
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div className="form__group">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                id="dir"
                                name="dir"
                                onChange={handleInputs}
                                value={dir}
                            />
                            <label htmlFor="dir" className="form__label">
                                Direccion
                            </label>
                            <span className="form__line"></span>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="btn-confirm"
                                value="Enviar postulacion"
                            />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};
