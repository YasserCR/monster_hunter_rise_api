import { Router, Request, Response } from 'express';
import Weapon from '../models/weapons.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const weapons = await Weapon.findAll();
        res.json(weapons);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const weapon = await Weapon.findByPk(req.params.id);
        if (weapon) {
            res.json(weapon);
        } else {
            res.status(404).json({ message: 'Weapon not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;