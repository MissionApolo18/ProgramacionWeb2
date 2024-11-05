import express from 'express';
import juegosRouter from './routes/juegos_router.js'; // Importar las rutas de juegos
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configurar Pug
app.set("view engine", "pug");
app.set("views", join(__dirname, 'views'));

// Configurar body-parser para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta raíz
app.get('/juegos', (req, res) => {
    const platform = req.query.platform || 'xbox'; // Puedes obtener la plataforma de una consulta
    const games = [
        { image: 'game1.jpg', title: 'Juego 1', price: 49.99 },
        { image: 'game2.jpg', title: 'Juego 2', price: 59.99 },
        // Agrega más juegos aquí
    ];

    res.render('juegos', { platform, games });
});


// Conectar a la base de datos MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Patito24',
    database: 'clientes_db'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a la BD');
});

// Ruta para manejar la recepción de datos del formulario
app.post('/registrar-cliente', (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo, telefono } = req.body;

    const query = `INSERT INTO clientes (nombre, apellido_paterno, apellido_materno, correo, telefono) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [nombre, apellido_paterno, apellido_materno, correo, telefono], (err, result) => {
        if (err) {
            console.error('Error al guardar en la BD:', err);
            res.send('Error al registrar el cliente');
        } else {
            console.log('Cliente registrado:', result);
            res.send('Cliente registrado exitosamente');
        }
    });
});

// Carpeta pública
app.use(express.static("public"));

// Rutas
app.use("/juegos", juegosRouter); // Todas las rutas bajo "/juegos" se gestionarán aquí

// Puerto
const port = 2828;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
