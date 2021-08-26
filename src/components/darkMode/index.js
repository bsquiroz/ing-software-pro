import React, { useEffect } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
import { applyDarkMode } from "../../state/actions/cursosActions";

export const DarkMode = () => {
    const stateDarkMode = useSelector((state) => state.cursos.darkMode);
    const dispatch = useDispatch();

    const handleDarkMode = () => {
        dispatch(applyDarkMode());
    };

    useEffect(() => {
        if (!stateDarkMode) {
            document.querySelector("html").removeAttribute("scheme");
            document.querySelector("html").setAttribute("scheme", "dark-mode");
        } else {
            document.querySelector("html").removeAttribute("scheme");
            document.querySelector("html").setAttribute("scheme", "light-mode");
        }
    }, [stateDarkMode]);

    const IconTheme = stateDarkMode ? <span>☀️</span> : <span>🌑</span>;

    return (
        <div onClick={handleDarkMode} className="darkMode">
            {IconTheme}
        </div>
    );
};
