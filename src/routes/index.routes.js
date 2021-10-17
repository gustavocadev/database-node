const { Router } = require("express");
const fs = require("fs");
const router = Router();

// Cargamos los datos del data.json
const jsonDataParsed = fs.readFileSync("src/data.json", "utf-8");
let data = JSON.parse(jsonDataParsed);

// Renderizamos la vista del index
router.get("/", (req, res) => {
  res.render("index", {
    data,
  });
});

// Renderizamos la vista de new-user
router.get("/new-user", (req, res) => {
  res.render("new-user");
});

router.get("/team", (req, res) => {
  // creo un array con los datos de nuestros integrantes
  const team = [
    {
      name: "René",
      picture: "https://picsum.photos/350/350",
      description:
        "Es extraño que sólo las personas extraordinarios hagan descubrimientos que luego aparecen de manera fácil y sencilla",
    },
    {
      name: "Edward",
      picture: "https://picsum.photos/200/200",
      description:
        "No se puede enseñar nada a un hombre, sólo se le puede ayudar a descubrirse a sí mismo",
    },
    {
      name: "Gustavo",
      picture: "https://picsum.photos/400/400",
      description:
        "La ciencia nunca resuelve un problema sin crear otros 10 más. ",
    },
    {
      name: "Sebastian",
      picture: "https://picsum.photos/250/250",
      description:
        "El experimentador que no sabe lo que está buscando no comprenderá lo que encuentra.",
    },
  ];
  // Renderizamos la vista de team
  res.render("team", {
    team,
  });
});

// Creamos un nuevo usuario
router.post("/new-user", (req, res) => {
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
    id: data.length + 1,
  };
  // console.log(newData);
  data.push(newData);
  // Escribimos en nuestro data.json
  const json_data = JSON.stringify(data);
  // Escribimos el nuevo json en nuestro data.json
  fs.writeFileSync("src/data.json", json_data, "utf-8");
  // redireccionamos al usuario de nuevo a la página principal
  res.redirect("/");
});

router.get("/delete/:id", (req, res) => {
  // Desestructuramos el id recibido por url
  const { id } = req.params;
  // Realizamos un filtro, este filtro eliminará el array con el id seleccionado
  data = data.filter((el) => el.id !== parseInt(id));
  // Usamos el método JSON stringify para convertir a formato json, un arreglo de javascript
  const json_data = JSON.stringify(data);
  // Volvemos a introducir los datos con el nuevo arreglo generado despúes del filtro
  fs.writeFileSync("src/data.json", json_data, "utf-8");

  // Le redirigimos al cliente a la ruta inicial
  res.redirect("/");
});
module.exports = router;
