const express = require("express");
const inicioController = require("./Controllers/inicioController.js");
const router = express.Router();
const app = express();

// Configura Pug como motor de vistas
app.set('view engine', 'pug');
app.set("views", "./Views");

// Ruta para la página principal
router.get('/', inicioController.mostrarInicio);

// Configura archivos estáticos
app.use(express.static("public"));

// Usar el router
app.use("/", router);

// Escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
