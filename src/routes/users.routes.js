const { createUser, deleteUser } = require("../controllers/index");

const { Router } = require("express");

const router = Router();

// Creamos un nuevo usuario
router.post("/users/new-user", createUser);

// Elinamos un usuario
router.delete("/users/delete/:id", deleteUser);
module.exports = router;
