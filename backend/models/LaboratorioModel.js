/* Se importa la conexión a la base de datos */
import db from "../database/db.js";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";

/* Se construye el modelo */
const LaboratorioModel = db.define('laboratorio', {
    id_lab: {type: DataTypes.INTEGER,
        primarykey: true,
    },
    nombre_lab: {type: DataTypes.STRING},
})

export default LaboratorioModel