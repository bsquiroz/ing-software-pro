import { combineReducers } from "redux";
import cursosReducer from "./cursosReducer";

export default combineReducers({
    cursos: cursosReducer,
});
