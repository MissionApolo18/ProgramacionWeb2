import express from 'express';
import { inicio, getGamesByCompany } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', inicio);

// Ruta para obtener juegos por compañía
router.get('/juegos/:company', getGamesByCompany);

export default router;