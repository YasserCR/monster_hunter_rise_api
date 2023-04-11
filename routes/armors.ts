import { Router } from 'express';
import { getAllArmorsController, getArmorByIdController } from '../controllers/armors.controller';

const router = Router();

router.get('/', getAllArmorsController);

router.get('/:id', getArmorByIdController);

module.exports = router