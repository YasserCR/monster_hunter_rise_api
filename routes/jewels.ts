import { Router, Request, Response } from 'express';
import Jewel from '../models/jewels.model';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    try {
        const jewels = await Jewel.findAll();
        res.json(jewels);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const jewel = await Jewel.findByPk(req.params.id);
        if (jewel) {
            res.json(jewel);
        } else {
            res.status(404).json({ message: 'Jewel not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router