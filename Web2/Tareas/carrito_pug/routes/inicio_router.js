import express from 'express';

const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.render('.views/index.pug'); // Asegúrate de que 'index' sea el nombre correcto de tu archivo Pug en la carpeta 'views'
});

export default router;
