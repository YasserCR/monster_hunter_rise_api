import { Router, Request, Response } from 'express';
import Armor from '../models/armors.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const armors = await Armor.findAll();
        res.json(armors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const armor = await Armor.findByPk(req.params.id);
        if (armor) {
            res.json(armor);
        } else {
            res.status(404).json({ message: 'Armor not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;