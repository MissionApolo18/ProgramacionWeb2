import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Consola from "./consola.js"; // Importa Consola
import Juego from "./juego.js"; // Importa Juego

const JuegoConsola = db.define(
    "juegoConsola",
    {
        id_consola: {
            type: DataTypes.INTEGER,
            references: {
                model: Consola, // Relaciona con Consola
                key: "id_consola",
            },
        },
        id_juego: {
            type: DataTypes.INTEGER,
            references: {
                model: Juego, // Relaciona con Juego
                key: "id_juego",
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precio_real: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
        precio_usuario: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        },
    },
    {
        tableName: "juegoConsola",
        timestamps: false,
        primaryKey: false, // Desactivar clave primaria si no es necesario
    }
);

// Configura las relaciones
JuegoConsola.belongsTo(Consola, { foreignKey: "id_consola" });
JuegoConsola.belongsTo(Juego, { foreignKey: "id_juego" });

export default JuegoConsola;
