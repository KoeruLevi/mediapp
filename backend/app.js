import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import FarmaRoutes from './routes/routes.js'
import FarmaciaRoutes from './routes/FarmaciaRoutes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/farmaco', FarmaRoutes)
app.use('/farmacia', FarmaciaRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BBDD')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});