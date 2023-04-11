import { Request, Response } from "express";
import { getAllJewels, getJewelById } from "../services/jewel.service";

export async function getAllJewelsController(req: Request, res: Response) {
    try {
        const jewels = await getAllJewels();
        res.json(jewels);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

export async function getJewelByIdController(req: Request, res: Response) {
    try {
        const jewel = await getJewelById(parseInt(req.params.id));
        res.json(jewel);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}