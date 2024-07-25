import FarmaciaModel from '../models/FarmaciaModel.js';
import FarmacoModel from '../models/FarmacoModel.js';

import LaboratorioModel from '../models/LaboratorioModel.js';
import PrincipioModel from '../models/PrincipioModel.js';
import { Op } from 'sequelize';


/* Método para buscar farmacos */
export const getFarmaco = async (req, res) => {
    try {
        const { nombre } = req.query;
        if (!nombre) {
            return res.status(400).json({ message: 'Por favor, proporciona un nombre de farmaco.' });
        }

        const farmaco = await FarmacoModel.findAll({
            where: {
                nombre_farmaco: {
                    [Op.like]: `%${nombre}%`
                }
            },
            include: [
                { model: FarmaciaModel, as: 'farmacia' },
                { model: LaboratorioModel, as: 'laboratorio' },
                { model: PrincipioModel, as: 'principio' }
            ]
        });

        if (farmaco.length === 0) {
            return res.status(404).json({ message: 'No se encontraron farmacos.' });
        }

        res.json(farmaco);
    } catch (error) {
        console.error('Error al buscar farmacos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

/* Método para mostrar todos los farmacos */
export const getAllFarmaco = async (req, res) => {
    try {
        const farmaco = await FarmacoModel.findAll({
            include: [
                { model: FarmaciaModel, as: 'farmacia' },
                { model: LaboratorioModel, as: 'laboratorio' },
                { model: PrincipioModel, as: 'principio' }
            ]
        });

        if (farmaco.length === 0) {
            return res.status(404).json({ message: 'No se encontraron fármacos.' });
        }

        res.json(farmaco);
    } catch (error) {
        console.error('Error al obtener todos los fármacos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};