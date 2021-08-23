import { types } from "../actions/cursosActions";
import { imagenes } from "../../helpers/imagenes";

const INITIAL_STATE = {
    cursos: [
        {
            id: 1,
            name: "desarrollo frontend",
            img: imagenes[0],
            info: "Frontend es la parte de un sitio web que interactúa con los usuarios, por eso decimos que está del lado del cliente. Backend es la parte que se conecta con la base de datos y el servidor que utiliza dicho sitio web, por eso decimos que el backend corre del lado del servidor. Estos dos conceptos explican a grandes rasgos cómo funciona una página web y son fundamentales para cualquier persona que trabaje en el mundo digital, ya sea en programación, marketing, diseño o emprendimiento.",
        },
        {
            id: 2,
            name: "desarrollo backend",
            img: imagenes[1],
            info: "Backend es la capa de acceso a datos de un software o cualquier dispositivo, que no es directamente accesible por los usuarios, además contiene la lógica de la aplicación que maneja dichos datos. El Backend también accede al servidor, que es una aplicación especializada que entiende la forma como el navegador solicita cosas.",
        },
        {
            id: 3,
            name: "desarrollo fullstak",
            img: imagenes[2],
            info: "Un programador Full Stack es un perfil híbrido entre el desarrollador Front End y Back End. Es un experto con conocimientos en diseño web, lenguajes de programación, base de datos, servidores, API's y Sistemas de Control de Versiones. Un desarrollador Full-Stack no necesariamente domina todas las tecnologías.",
        },
        {
            id: 4,
            name: "Arquitectura de software",
            img: imagenes[3],
            info: "En palabras simples la arquitectura de software son patrones o lineamientos que ayudan a la construcción de un programa (aplicación). Estos patrones permiten tener una guia para los desarrolladores, analistas y todos los cargos relacionados para lograr cumplir con los requerimientos de la aplicación.",
        },
        {
            id: 5,
            name: "Machine learning",
            img: imagenes[4],
            info: "El Machine Learning es una disciplina del campo de la Inteligencia Artificial que, a través de algoritmos, dota a los ordenadores de la capacidad de identificar patrones en datos masivos y elaborar predicciones (análisis predictivo).",
        },
        {
            id: 6,
            name: "Big data",
            img: imagenes[5],
            info: "Los macrodatos, ​ también llamados datos masivos, inteligencia de datos, datos a gran escala o big data es un término que hace referencia a conjuntos de datos tan grandes y complejos que precisan de aplicaciones informáticas no tradicionales de procesamiento de datos para tratarlos adecuadamente",
        },
    ],
    cursoActual: [
        {
            id: 1,
            name: "desarrollo frontend",
            img: imagenes[0],
            info: "Frontend es la parte de un sitio web que interactúa con los usuarios, por eso decimos que está del lado del cliente. Backend es la parte que se conecta con la base de datos y el servidor que utiliza dicho sitio web, por eso decimos que el backend corre del lado del servidor. Estos dos conceptos explican a grandes rasgos cómo funciona una página web y son fundamentales para cualquier persona que trabaje en el mundo digital, ya sea en programación, marketing, diseño o emprendimiento.",
        },
    ],
    menuOpen: false,
};

const cursosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OBTENER_CURSO_ACTUAL:
            return {
                ...state,
                cursoActual: state.cursos.filter(
                    (curso) => curso.id === action.payload.id
                ),
            };

        case types.OPEN_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen,
            };

        default:
            return state;
    }
};

export default cursosReducer;
