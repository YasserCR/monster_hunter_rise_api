import { Router } from 'express';
import { getAllMonstersController, getMonsterByIdController } from '../controllers/monsters.controller';

const router = Router();

router.get('/', getAllMonstersController);

router.get('/:id', getMonsterByIdController);

module.exports = router