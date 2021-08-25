import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Cursos } from "./components/Cursos";
import { Formulario } from "./components/Formulario";
import { Inicio } from "./components/Inicio";
import { Login } from "./components/Login";
import { Navegacion } from "./components/Navegacion";
import { Footer } from "./components/Footer";
import { PanelAdm } from "./components/PanelAdm";
import { PanelUser } from "./components/PanelUser";

// ruta protegida
import { ProtectedRoute } from "./helpers/protectedRoute";

function App() {
    return (
        <Router>
            <Navegacion />
            <Switch>
                <Route exact path="/">
                    <Inicio />
                </Route>
                <Route exact path="/cursos">
                    <Cursos />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/cursos/:id">
                    <Formulario />
                </Route>
                <ProtectedRoute exact path="/adm/:id">
                    <PanelAdm />
                </ProtectedRoute>
                <ProtectedRoute exact path="/user/:id">
                    <PanelUser />
                </ProtectedRoute>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
