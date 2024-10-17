import Gerente from "../../models/gerente.js"
import { Hotel } from "../../models/hotel.js"
import MisDatos from "../../models/misdatos.js";


const accionMostrarGerente = async (req, res) => {
    res.render("gerente/altaGerente",{
        pagina: "Alta Gerente",
        info: await consulta()
    });
}

const accionAltaGerente = async (req, res) => {
    const gerentes = await Gerente.findAll({
        include: {
            model: Gerente
        },
        raw: true,
        nest: true
    });
    res.render("hotel/consultaHotel",{
        pagina: "Alta Gerente",
        info: hoteles
    });
}

async function consulta () {
    let hoteles = await db.query(
        "select id_htl as dato1, nombre as dato2"+
        "from hoteles where id_htl not in"+
        "(select id_htl from gerentes", 
        {
            model: MisDatos,
            mapToModel: true
        }
    )
    return hoteles
}


export{accionMostrarGerente, accionAltaGerente}