import express from "express";
import {inicio} from "../controllers/inicioController.js";

const router = express.Router();

router.get('/', inicio);

// Ruta para iniciar sesión y establecer una variable de sesión
app.get('/login', (req, res) => {
    req.session.username = 'Usuario';  // Establece la variable de sesión 'username'
    res.send('Sesión iniciada con usuario: ' + req.session.username);
  });
  
// Ruta para acceder a una página protegida que necesita la sesión
app.get('/profile', (req, res) => {
    if (req.session.username) {
      res.render('profile', { username: req.session.username });
    } else {
      res.redirect('/login');  // Redirige si no hay sesión iniciada
    }
  });


export default router;