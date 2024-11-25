export const obtenerJuegosPorConsola = (req, res) => {
    const { plataforma } = req.params;
  
    const plataformas = {
      1: "Xbox",
      2: "PSP",
      3: "Nintendo",
    };
  
    const juegos = {
      1: [
        { title: "Halo", image: "/images/halo.jpg", price: 50, stock: 10 },
        { title: "Forza Horizon", image: "/images/forza.jpg", price: 60, stock: 5 },
      ],
      2: [
        { title: "God of War", image: "/images/godofwar.jpg", price: 40, stock: 8 },
        { title: "Tekken", image: "/images/tekken.jpg", price: 30, stock: 12 },
      ],
      3: [
        { title: "Mario Kart", image: "/images/mario_kart.jpg", price: 35, stock: 15 },
        { title: "Zelda", image: "/images/zelda.jpg", price: 45, stock: 7 },
      ],
    };
  
    if (!plataformas[plataforma]) {
      return res.status(404).send("Plataforma no encontrada");
    }
  
    res.render("index", {
      plataforma: plataformas[plataforma],
      games: juegos[plataforma],
    });
  };
  
