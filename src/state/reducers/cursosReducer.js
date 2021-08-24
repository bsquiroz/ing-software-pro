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
            name: "desarrollo fullstack",
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
    iconLogout: false,
    users: [
        {
            idUser: 1,
            email: "admin1@gmail.com",
            pass: "admin12345",
            data: {
                name: "brayan muñoz",
                ocu: "Administrador 1",
            },
            rol: 1,
        },
        {
            idUser: 2,
            email: "admin2@gmail.com",
            pass: "admin12345",
            data: {
                name: "stiven quiroz",
                ocu: "Administrador 2",
            },
            rol: 1,
        },
        {
            nameFull: "camila morales",
            user: "camimora",
            pass: "user12345",
            passReply: "user12345",
            genero: "femenino",
            format: "Comuna 3",
            email: "user1@gmail.com",
            dateBorn: "2021-08-07",
            barrio: "maria cano carambolas",
            dir: "carrera 23 # 91 b 84",
            idUser: 1629771219094,
            cursoInscripto: "desarrollo backend",
            rol: 2,
        },
        {
            nameFull: "felipe morales",
            user: "felimora",
            pass: "user12345",
            passReply: "user12345",
            genero: "masculino",
            format: "Comuna 3",
            email: "user2@gmail.com",
            dateBorn: "2021-08-07",
            barrio: "maria cano carambolas",
            dir: "carrera 23 # 91 b 84",
            idUser: 1629771219095,
            cursoInscripto: "desarrollo frontend",
            rol: 2,
        },
        {
            nameFull: "valentina morales",
            user: "valenmora",
            pass: "user12345",
            passReply: "user12345",
            genero: "masculino",
            format: "Comuna 3",
            email: "user3@gmail.com",
            dateBorn: "2021-08-07",
            barrio: "maria cano carambolas",
            dir: "carrera 23 # 91 b 84",
            idUser: 1629771219096,
            cursoInscripto: "desarrollo fullstack",
            rol: 2,
        },
    ],
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

        case types.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case types.SHOW_LOGOUT:
            return {
                ...state,
                iconLogout: !state.iconLogout,
            };

        default:
            return state;
    }
};

export default cursosReducer;
