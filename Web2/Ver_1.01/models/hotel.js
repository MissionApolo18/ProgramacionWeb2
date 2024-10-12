import { Sequelize } from "sequelize";
import db from "./db.js";
import Gerente from "./Gerente.js"

export const Hotel = db.define("hoteles", {
    id_htl: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    direccion: {
        type: Sequelize.STRING,
    },
    telefono: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING,
    },  
    timestamps: false
    }
)