import React from 'react'
import "./styles.css"

import { useSelector, useDispatch } from "react-redux";
import {applyDarkMode} from '../../state/actions/cursosActions'

export const DarkMode = () => {
    const stateDarkMode = useSelector((state) => state.cursos.darkMode);
    const dispatch = useDispatch()

    const handleDarkMode = () => {
        dispatch(applyDarkMode())
    }

    const IconTheme = stateDarkMode ? <span>Dark</span> : <span>Light</span>
    
    return (
        <div onClick={handleDarkMode} class="darkMode">
            {IconTheme}
        </div>
    )
}

