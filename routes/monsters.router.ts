import { Router, Request, Response } from 'express';
import Monster from '../models/monsters.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const monsters = await Monster.findAll();
        res.json(monsters);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const monster = await Monster.findByPk(req.params.id);
        if (monster) {
            res.json(monster);
        } else {
            res.status(404).json({ message: 'Monster not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;