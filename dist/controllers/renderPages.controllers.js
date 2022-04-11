"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTeamPage = exports.renderIndex = void 0;
const readJSON_1 = require("../jsonMethods/readJSON");
const renderIndex = async (req, res) => {
    const { users } = await (0, readJSON_1.readJSON)();
    users.reverse();
    res.render("index", {
        users,
    });
};
exports.renderIndex = renderIndex;
const renderTeamPage = (req, res) => {
    // creo un array con los datos de nuestros integrantes
    const team = [
        {
            name: "René",
            picture: "https://picsum.photos/350/350",
            description: "Es extraño que sólo las personas extraordinarios hagan descubrimientos que luego aparecen de manera fácil y sencilla",
        },
        {
            name: "Edward",
            picture: "https://picsum.photos/200/200",
            description: "No se puede enseñar nada a un hombre, sólo se le puede ayudar a descubrirse a sí mismo",
        },
        {
            name: "Gustavo",
            picture: "https://picsum.photos/400/400",
            description: "La ciencia nunca resuelve un problema sin crear otros 10 más. ",
        },
        {
            name: "Romel",
            picture: "https://picsum.photos/250/250",
            description: "El experimentador que no sabe lo que está buscando no comprenderá lo que encuentra.",
        },
    ];
    // Renderizamos la vista de team
    res.render("team", {
        team,
    });
};
exports.renderTeamPage = renderTeamPage;
