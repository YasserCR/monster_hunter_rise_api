import { Router } from 'express';
import { getAllWeaponsController, getWeaponByIdController } from '../controllers/weapons.controller';

const router = Router();

router.get('/', getAllWeaponsController);

router.get('/:id', getWeaponByIdController);

module.exports = router;