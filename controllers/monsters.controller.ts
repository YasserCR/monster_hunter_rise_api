import { Request, Response } from "express";
import { getAllMonsters, getMonsterById } from "../services/monsters.service";

export async function getAllMonstersController(req: Request, res: Response) {
    try {
        const monsters = await getAllMonsters();
        res.json(monsters);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function getMonsterByIdController(req: Request, res: Response) {
    try {
        const monster = await getMonsterById(parseInt(req.params.id));
        res.json(monster);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}