import express from "express";
import { inicio } from "./controllers/inicioController.js";

//crear aplicación
const app = express();
//accesos a los datos del formulario
app.use(express.urlencoded({extended: true}))
//configurar pug
app.set("view engine", "pug");
app.set("views", "./views")
//Carpeta pública
app.use(express.static("public"))
//routing
app.use("/", inicio);
//definir el puerto
const port = 2800
app.listen(port, () => {
    console.log(`Esperando peticiones en el puerto: ${port}`);
});
