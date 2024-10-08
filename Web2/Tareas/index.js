const express = require("express");
const { inicio } = require("./controllers/inicioController");
const app = express();

// Configura Pug como motor de vistas
app.set("views", "./views");
//app.set('views', path.join(__dirname, 'views'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render("index");
});

// Configura archivos estáticos
app.use(express.static("public"));
//Routing
app.use("/", inicio)
// Escucha en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
