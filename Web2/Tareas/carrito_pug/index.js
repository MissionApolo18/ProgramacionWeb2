//Importaciones
import express, { Router } from "express";
import inicio from router;
import router from "./routes/inicio_router";
//Crear la aplicación
const app = express();

//Datos formulario

//conectar a la BD

//configurar pug
app.set("view engine", "pug");
app.set("views", "./views");
//Carpeta pública
app.use(express.static("public"));
//Routing
app.use("/", inicio);

//Definir puerto
const port =2828;
app.listen(port, () =>
console.log(`Esperando peticiones en el puerto: ${port}`));