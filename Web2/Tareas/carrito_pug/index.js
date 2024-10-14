// Importaciones
import express from 'express';
import router from './routes/inicio_router.js'; // Asegúrate de que la ruta sea correcta

// Crear la aplicación
const app = express();

// Configurar Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta pública
app.use(express.static("public"));

// Routing
app.get('/', (req, res) => {
    res.render('./views/index.pug');
});
// Definir puerto
const port = 2828;
app.listen(port, () =>
  console.log(`Esperando peticiones en el puerto: ${port}`)
);
