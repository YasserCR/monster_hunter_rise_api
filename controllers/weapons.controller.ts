import { Request, Response } from "express";
import { getAllWeapons, getWeaponById } from "../services/weapons.service";

export async function getAllWeaponsController(req: Request, res: Response) {
    try {
        const weapons = await getAllWeapons();
        res.json(weapons);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

export async function getWeaponByIdController(req: Request, res: Response) {
    try {
        const weapon = await getWeaponById(parseInt(req.params.id));
        res.json(weapon);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}