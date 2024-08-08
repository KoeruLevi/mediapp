/* Se importa Sequelize para su uso en la conexión a la bbdd */
/* import { Sequelize } from "sequelize"; */


/* Se realiza la conexión a la base de datos */
/* const db = new Sequelize('database_ma', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
    
});

export default db */

import { Sequelize } from "sequelize";

// Obtener los valores de las variables de entorno
const dbName = process.env.DB_NAME || 'databaseMP';
const dbUser = process.env.DB_USER || 'admin';
const dbPassword = process.env.DB_PASSWORD || 'MediPrecio';
const dbHost = process.env.DB_HOST || 'database-ma.clmecm0u0u5k.us-east-2.rds.amazonaws.com';
const dbPort = process.env.DB_PORT || 3306;

// Realizar la conexión a la base de datos utilizando Sequelize
const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

export default db;
