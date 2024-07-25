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

   /*  await db.sync({ alter: true})
    console.log('BBDD y tablas creadas') */
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}


app.get('/', (req, res)=>{
    res.send('Hey nas')
})

/* app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
}) */