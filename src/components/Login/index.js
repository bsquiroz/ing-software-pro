import React, { useState } from "react";
import Swal from "sweetalert2";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { showLogout } from "../../state/actions/cursosActions";

const initial_values = {
    email: "",
    pass: "",
};

export const Login = () => {
    const [values, setvalues] = useState(initial_values);
    const { email, pass } = values;
    let bandera = 0;

    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.cursos.users);

    const handleInputs = (e) => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "" || pass.trim() === "") {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos son necesarios",
            });
        }

        users.forEach(async (user) => {
            if (user.email === email && user.pass === pass && bandera === 0) {
                bandera++;
                const AlertConfirm = async () => {
                    await Swal.fire({
                        icon: "success",
                        title: "Vas pa entro",
                        text: "Como marrano estrenando lazo",
                    });
                };
                await AlertConfirm();
                dispatch(showLogout());
                if (user.rol === 1) return history.push(`/adm/${user.idUser}`);
                if (user.rol === 2) return history.push(`/user/${user.idUser}`);
            }
        });

        if (!bandera) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales incorrectas",
            });
        }

        setvalues(initial_values);
    };
    return (
        <section className="container">
            <div className="login">
                <h2>Ingresa con tus datos</h2>
                <form className="form__container" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            className="form__input"
                            onChange={handleInputs}
                            value={email}
                        />
                        <label htmlFor="email" className="form__label">
                            Correo
                        </label>
                        <span className="form__line"></span>
                    </div>
                    <div className="form__group">
                        <input
                            type="password"
                            name="pass"
                            id="pass"
                            placeholder=" "
                            className="form__input"
                            onChange={handleInputs}
                            value={pass}
                        />
                        <label htmlFor="pass" className="form__label">
                            Contraseña
                        </label>
                        <span className="form__line"></span>
                    </div>

                    <button className="form__btn">Enviar</button>
                </form>
            </div>
        </section>
    );
};
