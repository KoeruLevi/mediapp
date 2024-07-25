/* Se importa la conexión a la base de datos */
import db from "../database/db.js";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";

/* Se construye el modelo */
const FarmaciaModel = db.define('farmacia', {
    id_farmacia: {type: DataTypes.NUMBER,
        primaryKey: true,
    },
    nombre_farmacia: {type: DataTypes.STRING},
    direccion_farmacia: {type: DataTypes.STRING},
    foto_farmacia: {type: DataTypes.STRING},
},{
    tableName: 'farmacia',
    timestamps: false
})

export default FarmaciaModel