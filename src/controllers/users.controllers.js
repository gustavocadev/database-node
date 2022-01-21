const writeJSON = require("../jsonMethods/writeJSON");
const readJSON = require("../jsonMethods/readJSON");
const { nanoid } = require("nanoid");

const NANO_ID = nanoid();

const createUser = async (req, res) => {
    const { users } = await readJSON();
    // Desectructuramos la info del usuario
    const { name, age, country } = req.body;
    // Hacemos una validación de la info del usuario
    if (!name || !age || !country) {
        res.status(404).send("Entries must have a name, age and country");
        return;
    }
    // creamos un objeto y en su interior agregamos la info que nos pasa el usuario
    const newData = {
        ...req.body,
        picNum: Math.round(Math.random() * 25),
        id: NANO_ID,
    };
    // console.log(newData);
    users.push(newData);
    // Escribimos en nuestro data.json
    await writeJSON(users);
    // redireccionamos al usuario de nuevo a la página principal
    res.redirect("/");
};

const deleteUser = async (req, res) => {
    const { users } = await readJSON();
    // Desestructuramos el id recibido por url
    const { id } = req.params;
    // Realizamos un filtro, este filtro eliminará el array con el id seleccionado
    const dataFound = users.filter((el) => el.id !== id);

    // Volvemos a introducir los datos con el nuevo arreglo generado despúes del filtro
    await writeJSON(dataFound);

    // Le redirigimos al cliente a la ruta inicial
    res.redirect("/");
};

module.exports = { createUser, deleteUser };
