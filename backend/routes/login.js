import express from "express";
import { loginUser, getUser } from "../controllers/loginController.js";

const router = express.Router();


// Ruta para obtener los datos del usuario
router.get("/", getUser);
// Ruta para manejar el login
router.post("/", loginUser);

export default router;
