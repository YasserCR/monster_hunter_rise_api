import { Router } from 'express';
import { getAllItemsController, getItemByIdController } from '../controllers/items.controller';

const router = Router();

router.get('/', getAllItemsController);

router.get('/:id', getItemByIdController);

module.exports = router