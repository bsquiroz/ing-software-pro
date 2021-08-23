import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cursos } from "./components/Cursos";
import { Formulario } from "./components/Formulario";
import { Inicio } from "./components/Inicio";
import { Login } from "./components/Login";
import { Navegacion } from "./components/Navegacion";
import { Footer } from "./components/Footer";

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
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
