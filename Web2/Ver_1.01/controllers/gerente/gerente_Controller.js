import Gerente from "../../models/Gerente.js";
import {Hotel} from "../../models/Hotel.js";
import MisDatos from '../../models/MisDatos.js';
import db from "../../config/db.js";

//se traen todos los hoteles que no tienen Gerente
async function consulta(){
    let hoteles = await db.query(
        "select id_htl as dato1,nombre as dato2 "+
         "from hoteles where id_htl not in"+
         "(select id_htl from gerentes);"
      ,{
        model:MisDatos,
        mapToModel:true
      });
    return hoteles;
}


const accionMostrarGerente=async(req,res)=>{
    res.render('gerente/altaGerente',{
        pagina:"Alta Gerente",
        info:await consulta()
    });
}
const accionAltaGerente=async(req,res)=>{
    console.log(req.body);
    const gerente=new Gerente(req.body);
    await gerente.save();
    res.render('gerente/altaGerente',{
        pagina:"Exito para salvar",
        info:await consulta()
    });

}

export {accionMostrarGerente,accionAltaGerente}