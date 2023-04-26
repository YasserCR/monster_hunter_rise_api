import { Router } from 'express';
import { getAllSkillsController, getSkillByIdController, getSkillByNameAndLevelController } from '../controllers/skills.controller';

const router = Router();

router.get('/', getAllSkillsController);

router.get('/:id', getSkillByIdController);

router.get('/name/:nombre/:nivel', getSkillByNameAndLevelController); // Ruta para buscar habilidad por nombre y nivel

module.exports = router
