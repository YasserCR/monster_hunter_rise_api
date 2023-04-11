import { Request, Response } from "express";
import { getAllItems, getItemById } from "../services/items.service";

export async function getAllItemsController(req: Request, res: Response) {
    try {
        const items = await getAllItems();
        res.json(items);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

export async function getItemByIdController(req: Request, res: Response) {
    try {
        const item = await getItemById(parseInt(req.params.id));
        res.json(item);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}