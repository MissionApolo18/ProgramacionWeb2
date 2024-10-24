import express from 'express';
import { getXboxGames } from '../controllers/juegos/xbox_controller.js';
import { getPspGames } from '../controllers/juegos/psp_controller.js';
import { getNintendoGames } from '../controllers/juegos/nintendo_controller.js';

const router = express.Router();

// Ruta para los juegos de Xbox
router.get('/xbox', getXboxGames);

// Ruta para los juegos de PSP
router.get('/psp', getPspGames);

// Ruta para los juegos de Nintendo
router.get('/nintendo', getNintendoGames);

export default router;
