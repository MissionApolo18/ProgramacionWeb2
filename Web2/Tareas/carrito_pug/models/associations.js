import Consola from "./consola.js";
import Juego from "./juego.js";
import JuegoConsola from "./juegoConsola.js";

// Establecer asociaciones después de que los modelos estén definidos
JuegoConsola.belongsTo(Consola, { foreignKey: "id_consola" });
JuegoConsola.belongsTo(Juego, { foreignKey: "id_juego" });

// Si necesitas hacer asociaciones adicionales, puedes agregarlas aquí.

export default () => {};  // Función vacía o cualquier export que no interfiera con la inicialización
