import { Router, Request, Response } from 'express';
import Item from '../models/items.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;