import express from "express";
import {accionMostrarHotel} from "../controllers/hotel/hotelController.js"
const router_hotel=express.Router();

//Ruta para consultar hotel
//

//ruta hotel
router_hotel.get("/mostrarHotel", accionMostrarHotel);

export default router_hotel