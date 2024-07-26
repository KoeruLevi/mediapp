import { where } from "sequelize";
import FarmaciaModel from "../models/FarmaciaModel.js";

/* Métodos para el CRUD */

/* Mostrar todos los registros */
export const getAllFarmacia = async (req, res) => {
    try{
        const farmacias = await FarmaciaModel.findAll()
        res.json(farmacias)
    } catch (error){
        res.json( {message: error.message} )
    }

}

/* Mostrar un registro */
export const getFarmacia = async (req, res) => {
    try{

        

        const farmacia = await FarmaciaModel.findAll({
            where:{id_farmacia:req.params.id}
        }) 
        res.json(farmacia[0])
    } catch (error){
        res.json( {message: error.message} )
    }
}

