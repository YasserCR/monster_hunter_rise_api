import { Request, Response } from 'express';
import { getAllArmors, getArmorById } from '../services/armors.service';

export async function getAllArmorsController(req: Request, res: Response) {
    try {
        const armors = await getAllArmors();
        res.json(armors);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

export async function getArmorByIdController(req: Request, res: Response) {
    try {
        const armor = await getArmorById(parseInt(req.params.id));
        res.json(armor);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}