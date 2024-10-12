import Gerente from "../../models/gerente.js"
import { Hotel } from "../../models/hotel.js"

const accionMostrarHotel = async (req, res) => {
    const gerentes = await Gerente.findAll({
        include: {
            model: Gerente
        },
        raw: true,
        nest: true
    });
    res.render("hotel/consultaHotel",{
        pagina: "Lista de Hoteles",
        hotel: hoteles
    });
}