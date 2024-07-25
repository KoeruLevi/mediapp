import express from 'express'
import { getAllFarmacos, getFarmaco } from '../controllers/FarmacoController.js'
import { getAllFarmacia, getFarmacia } from '../controllers/FarmaciaController.js'
const router = express.Router()


router.get('/', getAllFarmacos)
router.get('/:id', getFarmaco)
router.get('/', getAllFarmacia)
router.get('/:id', getFarmacia)

export default router