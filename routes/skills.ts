import { Router } from 'express';
import { getAllSkillsController, getSkillByIdController, getSkillByNameAndLevelController } from '../controllers/skills.controller';

const router = Router();

router.get('/', getAllSkillsController);

router.get('/:id', getSkillByIdController);

router.get('/:nombre/:nivel', getSkillByNameAndLevelController);

module.exports = router
