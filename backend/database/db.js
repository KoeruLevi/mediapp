/* Se importa Sequelize para su uso en la conexión a la bbdd */
import { Sequelize } from "sequelize";


/* Se realiza la conexión a la base de datos */
const db = new Sequelize('database_ma', 'root', 'password',{
    host:'database',
    dialect: 'mysql',
    port: 3306 
});

export default db