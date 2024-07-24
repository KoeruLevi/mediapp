/* Se importa Sequelize para su uso en la conexión a la bbdd */
import { Sequelize } from "sequelize";


/* Se realiza la conexión a la base de datos */
const db = new Sequelize('database_ma', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db