const express = require('express');
const juegoRouter = express.Router();
const gameController = require('./carrito_pug/controllers/juegos/juegosController.js');

juegoRouter.get('/:company', gameController.getGamesByCompany);

module.exports = juegoRouter;
