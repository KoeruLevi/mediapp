/* Se importa la conexión a la base de datos */
import db from "../database/db";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";

/* Se construye el modelo */
const FarmacoModel = db.define('farmaco', {
    nombre_farmaco: {type: DataTypes.STRING},
    mg_farmaco: {type: DataTypes.NUMBER},
    cant_farmaco: {type: DataTypes.NUMBER},
    precio_farmaco: {type: DataTypes.STRING},
    foto_farmaco: {type: DataTypes.STRING},
})

export default FarmacoModel