import express, { Router } from "express";
import { inicio } from "./controllers/inicioController.js";
import db from "./models/db.js";
import router_hotel from "./routes/hotel_router.js"
import router_Gerente from "./routes/gerente_router.js";


//crear aplicación
const app = express();
//accesos a los datos del formulario
app.use(express.urlencoded({extended: true}))
//conectar la base de datos
try {
    await db.authenticate()
    db.sync()
    console.log("Conexión exitosa a la db")
} catch (error) {
    console.log(error)
}
//configurar pug
app.set("view engine", "pug");
app.set("views", "./views")
//Carpeta pública
app.use(express.static("public"))
//routing
app.use("/", inicio);
app.use("/hotel", Router, router_hotel);
app.use("/gerente",router_Gerente)
//definir el puerto
const port = 2800
app.listen(port, () => {
    console.log(`Esperando peticiones en el puerto: ${port}`);
});

//Variables de sesión
const session = require('express-session');

// Configuración de la sesión
app.use(session({
  secret: 'Hassaikai28', 
  resave: false,               
  saveUninitialized: false,      
  //cookie: { maxAge: 60000 }    
}));
