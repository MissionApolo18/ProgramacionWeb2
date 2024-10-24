const nintendoGames = [
    { title: 'Mario Kart', image: 'mario.jpg', price: 55 },
    { title: 'Zelda: Breath of the Wild', image: 'zelda.jpg', price: 70 },
    { title: 'Animal Crossing', image: 'animal.jpg', price: 45 },
    { title: 'Super Smash Bros', image: 'smash.jpg', price: 60 },
    { title: 'Splatoon', image: 'splatoon.jpg', price: 50 }
];

export const getNintendoGames = (req, res) => {
    res.json({ games: nintendoGames });
};
