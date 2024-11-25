import JuegoConsola from "../models/juegoConsola.js";
import Consola from "../models/consola.js";

const gameNames = {
    1: "The Legend of Zelda",
    2: "Super Mario Bros",
    3: "Halo Infinite",
    4: "God of War",
    // Agrega más nombres según el ID del juego
};

export const mostrarJuegos = async (req, res) => {
    const { plataforma } = req.params;

    try {
        const juegos = await JuegoConsola.findAll({
            include: [
                {
                    model: Consola,
                    attributes: ["nombre", "precio"],
                    where: { nombre: plataforma },
                },
            ],
        });

        const games = juegos.map((juego) => ({
            title: gameNames[juego.id_juego] || `Juego ${juego.id_juego}`,
            price: juego.precio_usuario || juego.precio_real,
            image: `game_${juego.id_juego}.png`, // Ajusta según tus imágenes
        }));

        res.render("juegos", { plataforma, games });
    } catch (error) {
        console.error("Error al obtener los juegos:", error);
        res.status(500).send("Hubo un error");
    }
};
