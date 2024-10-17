// Datos de juegos por compañía
const gamesData = {
    xbox: [
        { title: 'Halo', image: 'halo.jpg', price: 50 },
        { title: 'Forza Horizon', image: 'forza.jpg', price: 40 },
        { title: 'Gears of War', image: 'gears.jpg', price: 45 },
        { title: 'FIFA 2024', image: 'fifa.jpg', price: 30 },
        { title: 'Call of Duty', image: 'cod.jpg', price: 60 }
    ],
    psp: [
        { title: 'God of War', image: 'gow.jpg', price: 35 },
        { title: 'Tekken', image: 'tekken.jpg', price: 25 },
        { title: 'FIFA 2024', image: 'fifa.jpg', price: 30 },
        { title: 'GTA: Liberty City', image: 'gta.jpg', price: 40 },
        { title: 'Assassin\'s Creed', image: 'ac.jpg', price: 50 }
    ],
    nintendo: [
        { title: 'Mario Kart', image: 'mario.jpg', price: 55 },
        { title: 'Zelda: Breath of the Wild', image: 'zelda.jpg', price: 70 },
        { title: 'Animal Crossing', image: 'animal.jpg', price: 45 },
        { title: 'Super Smash Bros', image: 'smash.jpg', price: 60 },
        { title: 'Splatoon', image: 'splatoon.jpg', price: 50 }
    ]
};

// Controlador para mostrar la página de inicio
const inicio = (req, res) => {
    res.render('inicio'); // Renderiza la vista "inicio"
};

// Controlador para obtener juegos por compañía
const getGamesByCompany = (req, res) => {
    const company = req.params.company; // Obtiene la compañía desde la URL
    const games = gamesData[company]; // Busca los juegos de esa compañía

    if (games) {
        res.json({ games }); // Si encuentra los juegos, los devuelve en formato JSON
    } else {
        res.status(404).json({ message: 'Compañía no encontrada' }); // Si no encuentra, envía un error 404
    }
};

// Exportar las funciones para usarlas en el enrutador
export {
    inicio,
    getGamesByCompany
};
