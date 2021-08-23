export const types = {
    OBTENER_CURSO_ACTUAL: "OBTENER_CURSO_ACTUAL",
    OPEN_MENU: "OPEN_MENU",
};

export const getCurrentCourse = (quote) => ({
    type: types.OBTENER_CURSO_ACTUAL,
    payload: quote,
});

export const openMenu = () => ({
    type: types.OPEN_MENU,
});
