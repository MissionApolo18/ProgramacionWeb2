import express from "express";
import {accionAltaGerente} from "../controllers/gerente/gerente_Controller.js"
import { accionMostrarGerente } from "../controllers/gerente/gerente_Controller.js";

const router_Gerente=express.Router();

//Ruta para consultar hotel
//

//ruta hotel
router_Gerente.get("/verGerente", accionMostrarGerente)
router_Gerente.post("/altaGerente", accionAltaGerente);

export default router_Gerente;