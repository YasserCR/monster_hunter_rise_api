import { Router } from 'express';
import { getAllJewelsController, getJewelByIdController } from '../controllers/jewels.controller';

const router = Router();

router.get('/', getAllJewelsController);

router.get('/:id', getJewelByIdController);

module.exports = router