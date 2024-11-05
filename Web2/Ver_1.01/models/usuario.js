import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import db from '../config/db.js';
import Rol from './rol.js';
import bcrypt from "bcrypt";

const Usuario = db.define('usuarios', {
    id_usr: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmar: DataTypes.BOOLEAN,
    token: DataTypes.STRING
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async function (usuario) {
            const rep= await bcrypt.genSalt(10);
            usuario.password=await bcrypt.hash(usuario.password,rep);

        }
    },

});
Rol.hasOne(Usuario, {
    foreignKey: {
        name: "id_rls",
    },
});
Usuario.belongsTo(Rol, {
    foreignKey: {
        name: "id_rls",
    },
});
export default Usuario;