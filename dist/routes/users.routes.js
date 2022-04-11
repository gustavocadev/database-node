"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const index_1 = require("../controllers/index");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
// Creamos un nuevo usuario
router.post("/users/new-user", index_1.createUser);
// Elinamos un usuario
router.delete("/users/delete/:id", index_1.deleteUser);
