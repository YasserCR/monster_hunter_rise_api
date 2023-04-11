import { Router } from 'express';
import { getAllSkillsController, getSkillByIdController } from '../controllers/skills.controller';

const router = Router();

router.get('/', getAllSkillsController);

router.get('/:id', getSkillByIdController);

module.exports = router