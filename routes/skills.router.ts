import { Router, Request, Response } from 'express';
import Skill from '../models/skills.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const skills = await Skill.findAll();
        res.json(skills);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const skill = await Skill.findByPk(req.params.id);
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;