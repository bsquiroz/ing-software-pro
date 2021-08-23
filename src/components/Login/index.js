import React, { useState } from "react";
import Swal from "sweetalert2";
import "./styles.css";

const initial_values = {
    email: "",
    pass: "",
};

export const Login = () => {
    const [values, setvalues] = useState(initial_values);
    const { email, pass } = values;

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

        Swal.fire({
            icon: "success",
            title: "Muy bien",
            text: "vas pa´entro",
        });

        setvalues(initial_values);
    };
    return (
        <section className="container">
            <div className="login">
                <h2>Ingresa con tus datos</h2>
                <form className="form__container" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder=" "
                            className="form__input"
                            onChange={handleInputs}
                            value={email}
                        />
                        <label htmlFor="name" class="form__label">
                            Correo
                        </label>
                        <span class="form__line"></span>
                    </div>
                    <div className="form__group">
                        <input
                            type="text"
                            name="pass"
                            id="pass"
                            placeholder=" "
                            className="form__input"
                            onChange={handleInputs}
                            value={pass}
                        />
                        <label htmlFor="name" class="form__label">
                            Contraseña
                        </label>
                        <span class="form__line"></span>
                    </div>

                    <button className="form__btn">Enviar</button>
                </form>
            </div>
        </section>
    );
};
