/* import express from 'express'
import { getAllFarmaco, getFarmaco } from '../controllers/FarmacoController.js'
const router = express.Router()


router.get('/', getAllFarmaco)
router.get('/buscar', getFarmaco)


export default router */
import express from 'express';
import { getAllFarmaco, buscarFarmacos } from '../controllers/FarmacoController.js';

const router = express.Router();

router.get('/', getAllFarmaco);
router.get('/buscar', buscarFarmacos); // Ruta de búsqueda

export default router;