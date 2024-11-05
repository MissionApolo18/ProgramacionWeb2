import express from "express";
import {inicioSesion,registrandoEnlace,registrAr} from "../controllers/credenciales/loginController.js"
const credenciales_router=express.Router();
//Routing
//para la vista alta credenciales
credenciales_router.get('/',inicioSesion);
credenciales_router.get('/',registrandoEnlace);
credenciales_router.post('/',registrAr);
export default credenciales_router