import express from 'express';
import { getXboxGames } from '../controllers/juegos/xbox_controller.js';
import { getPspGames } from '../controllers/juegos/psp_controller.js';
import { getNintendoGames } from '../controllers/juegos/nintendo_controller.js';

const juegos_router = express.Router();

// Ruta para los juegos de Xbox
juegos_router.get('/xbox', getXboxGames);

// Ruta para los juegos de PSP
juegos_router.get('/psp', getPspGames);

// Ruta para los juegos de Nintendo
juegos_router.get('/nintendo', getNintendoGames);

export default juegos_router;
