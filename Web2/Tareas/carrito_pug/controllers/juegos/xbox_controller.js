const xboxGames = [
    { title: 'Halo', image: 'halo.jpg', price: 50 },
    { title: 'Forza Horizon', image: 'forza.jpg', price: 40 },
    { title: 'Gears of War', image: 'gears.jpg', price: 45 },
    { title: 'FIFA 2024', image: 'fifa.jpg', price: 30 },
    { title: 'Call of Duty', image: 'cod.jpg', price: 60 }
];

export const getXboxGames = (req, res) => {
    res.json({ games: xboxGames });
};
