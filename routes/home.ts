import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
    res.send("Monster Hunter Rise SB Wiki home page");
});

module.exports = router