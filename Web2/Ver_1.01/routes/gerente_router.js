import express from "express";
import {accionMostrarGerente,accionAltaGerente} 
from "../controllers/gerente/gerenteController.js";

const router_Gerente=express.Router();

//ruta de hoteles
router_Gerente.get("/verGerente",accionMostrarGerente)
router_Gerente.post("/altaGerente",accionAltaGerente);

export default router_Gerente;