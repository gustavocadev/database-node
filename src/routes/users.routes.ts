import { createUser, deleteUser } from "../controllers/index"
import { Router } from "express"

const router = Router()

// Creamos un nuevo usuario
router.post("/users/new-user", createUser)

// Elinamos un usuario
router.delete("/users/delete/:id", deleteUser)

export { router }
