import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, ...props }) => {
    const seccion = useSelector((state) => state.cursos.seccion);
    return (
        <Route
            {...props}
            render={() => (seccion ? children : <Redirect to="/login" />)}
        />
    );
};
