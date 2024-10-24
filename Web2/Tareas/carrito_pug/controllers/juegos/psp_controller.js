const pspGames = [
    { title: 'God of War', image: 'gow.jpg', price: 35 },
    { title: 'Tekken', image: 'tekken.jpg', price: 25 },
    { title: 'FIFA 2024', image: 'fifa.jpg', price: 30 },
    { title: 'GTA: Liberty City', image: 'gta.jpg', price: 40 },
    { title: 'Assassin\'s Creed', image: 'ac.jpg', price: 50 }
];

export const getPspGames = (req, res) => {
    res.json({ games: pspGames });
};
