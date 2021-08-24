import React from "react";
import { useDispatch } from "react-redux";
import { showLogout } from "../../state/actions/cursosActions";
import { useHistory } from "react-router-dom";
import logoutIcon from "../../assets/icons/logout.svg";

export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClic = () => {
        dispatch(showLogout());
        history.push(`/login`);
    };
    return (
        <div className="logout__icon" onClick={() => handleClic()}>
            <img src={logoutIcon} alt="logout" />
        </div>
    );
};
