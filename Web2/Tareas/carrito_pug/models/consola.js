// consola.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";
import JuegoConsola from "./juegoConsola.js";

const Consola = db.define("consola", {
  id_consola: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

// Relación con juegoConsola
Consola.hasMany(JuegoConsola, { foreignKey: "id_consola" });

export default Consola;

