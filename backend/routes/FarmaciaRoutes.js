import express from 'express'
import { getAllFarmacia, getFarmacia } from '../controllers/FarmaciaController.js'

const router = express.Router()

router.get('/', getAllFarmacia)
router.get('/:id', getFarmacia)

export default router