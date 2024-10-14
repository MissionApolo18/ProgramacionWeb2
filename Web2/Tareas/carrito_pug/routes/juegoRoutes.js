const express = require('express');
const router = express.Router();
const gameController = require('./carrito_pug/controllers/juegos/juegosController.js');

router.get('/:company', gameController.getGamesByCompany);

module.exports = router;
