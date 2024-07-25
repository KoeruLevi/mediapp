import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import FarmaRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/farmaco', FarmaRoutes)


try {
    await db.authenticate()
    console.log('Conexion exitosa a la BBDD')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}


app.get('/', (req, res)=>{
    res.send('Hey nas')
})

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})