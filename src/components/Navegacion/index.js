import React from "react";
import "./styles.css";
import { Logout } from "../Logout";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../state/actions/cursosActions";

export const Navegacion = () => {
    const menu = useSelector((state) => state.cursos.menuOpen);
    const logout = useSelector((state) => state.cursos.iconLogout);

    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(openMenu());
    };

    const handleShowMenu = menu ? "menu menu_show" : "menu";

    return (
        <nav className="navegacion">
            <span className="logo">
                <Link to="/">MLB</Link>
            </span>
            <ul className={handleShowMenu}>
                {logout ? (
                    <div onClick={() => handleMenu()}>
                        <Logout />
                    </div>
                ) : (
                    <>
                        <li onClick={() => handleMenu()}>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li onClick={() => handleMenu()}>
                            <Link to="/cursos">Cursos</Link>
                        </li>
                        <li onClick={() => handleMenu()}>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}
            </ul>
            <div className="box_icons">
                <div className="icon" onClick={() => handleMenu()}>
                    {menu ? (
                        <img src={closeIcon} alt="close" />
                    ) : (
                        <img src={menuIcon} alt="menu" />
                    )}
                </div>
            </div>
        </nav>
    );
};
