import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import db from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configurar Pug
app.set("view engine", "pug");
app.set("views", join(__dirname, 'views'));

// Configurar body-parser para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// Datos de juegos por plataforma
const gamesData = {
    xbox: [
        { image: './public/images/halo.jpg', title: 'Halo', price: 49.99 },
        { image: './public/images/halo.jpg', title: 'Forza Horizon', price: 59.99 },
        { image: './public/images/halo.jpg', title: 'Gears of War', price: 39.99 },
        { image: './public/images/halo.jpg', title: 'FIFA 2024', price: 69.99 },
        { image: './public/images/halo.jpg', title: 'Call of Duty', price: 54.99 }
    ],
    psp: [
        { image: 'Recursos/cod.jpg', title: 'God of War', price: 49.99 },
        { image: 'Recursos/cod.jpg', title: 'Tekken', price: 39.99 },
        { image: 'Recursos/cod.jpg', title: 'FIFA 2024', price: 69.99 },
        { image: 'Recursos/cod.jpg', title: 'GTA: Liberty City', price: 59.99 },
        { image: 'Recursos/cod.jpg', title: 'Assassin\'s Creed', price: 64.99 }
    ],
    nintendo: [
        { image: 'Recursos/cod.jpg', title: 'Mario Kart', price: 59.99 },
        { image: 'Recursos/cod.jpg', title: 'Zelda: Breath of the Wild', price: 79.99 },
        { image: 'Recursos/cod.jpg', title: 'Animal Crossing', price: 49.99 },
        { image: 'Recursos/cod.jpg', title: 'Super Smash Bros', price: 69.99 },
        { image: 'Recursos/cod.jpg', title: 'Splatoon', price: 54.99 }
    ]
};

// Ruta principal
app.get('/', (req, res) => {
    const platform = 'xbox'; // Cambia esta plataforma según la plataforma que necesites
    const games = gamesData[platform] || []; // Obtiene juegos para la plataforma, o un arreglo vacío si no existe

    res.render('index', { platform, games }); // Pasa 'platform' y 'games' a 'index.pug'
});

// Ruta para obtener los videojuegos según la plataforma
app.get('/games/:platform', async (req, res) => {
    const platform = req.params.platform;
    try {
      const [rows] = await db.execute('SELECT * FROM videojuegos WHERE plataforma = ?', [platform]);
      res.json({ games: rows });
    } catch (error) {
      console.error('Error al obtener los juegos:', error);
      res.status(500).json({ games: [] });
    }
});


  
// Carpeta pública
app.use(express.static("public"));

// Puerto
const port = 2828;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
