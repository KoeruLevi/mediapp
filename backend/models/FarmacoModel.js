/* Se importa la conexión a la base de datos */
import db from "../database/db.js";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";
import FarmaciaModel from "./FarmaciaModel.js";
import LaboratorioModel from "./LaboratorioModel.js";
import PrincipioModel from "./PrincipioModel.js";

/* Se construye el modelo */
const FarmacoModel = db.define('farmaco', {
    id_farmaco: {type: DataTypes.INTEGER,
        primarykey: true,
    },
    nombre_farmaco: {type: DataTypes.STRING},
    mg_farmaco: {type: DataTypes.NUMBER},
    cant_farmaco: {type: DataTypes.NUMBER},
    precio_farmaco: {type: DataTypes.STRING},
    foto_farmaco: {type: DataTypes.STRING},
})

FarmacoModel.belongsTo(FarmaciaModel, { as: 'farmacia', foreignKey: 'farmaciaId' });
FarmacoModel.belongsTo(LaboratorioModel, { as: 'laboratorio', foreignKey: 'laboratorioId' });
FarmacoModel.belongsTo(PrincipioModel, { as: 'principio', foreignKey: 'principioId' });

export default FarmacoModel