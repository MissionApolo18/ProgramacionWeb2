import { Router } from "express";
import { mostrarJuegos } from "../controllers/juegosController.js";

const router = Router();

// Ruta principal
router.get("/", (req, res) => {
    res.render("index");
});

// Ruta para los juegos por plataforma
router.get("/juegos/:plataforma", mostrarJuegos);

export default router;
