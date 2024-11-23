//Importaciones
import express from "express";
import db from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import Carrito from "./models/carrito.js";
import EstadoJuegos from "./models/estadoJuegos.js";
import Juego from "./models/juego.js";
import Consola from "./models/consola.js";
import JuegoConsola from "./models/juegoConsola.js";
import dotenv from 'dotenv';
import './models/associations.js'
import setupAssociations from "./models/associations.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config()
setupAssociations();

// Configuración de la base de datos
try {
    await db.authenticate();
    console.log("Conexión exitosa a la base de datos");
} catch (error) {
    console.error("Error al conectar a la base de datos:", error);
}

// Configuración de Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware para servir archivos estáticos
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.render("index");
});

// Ruta para obtener juegos por plataforma
app.get("/games/:platform", async (req, res) => {
    const { platform } = req.params;

    try {
        // Encuentra la consola según el nombre
        const consola = await Consola.findOne({ where: { nombre: platform } });

        if (!consola) {
            return res.status(404).json({ games: [], message: "Plataforma no encontrada" });
        }

        // Encuentra los juegos relacionados con esa consola
        const juegos = await JuegoConsola.findAll({
            where: { id_consola: consola.id_consola },
            include: { model: Consola },
        });

        // Prepara los datos para enviar al cliente
        const gamesData = juegos.map((juego) => ({
            title: juego.juego?.nombre || "Sin título",
            price: juego.precio_usuario,
            image: "default.jpg", // Cambiar si tienes un campo de imagen
        }));

        res.json({ games: gamesData });
    } catch (error) {
        console.error("Error al obtener juegos:", error);
        res.status(500).json({ message: "Error al obtener los juegos" });
    }
});

// Puerto de la aplicación
const PORT = 2828;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
