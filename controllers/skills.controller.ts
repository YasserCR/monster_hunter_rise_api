import { Request, Response } from "express";
import { getAllSkills, getSkillById } from "../services/skills.service";

export async function getAllSkillsController(req: Request, res: Response) {
    try {
        const skills = await getAllSkills();
        res.json(skills);
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

export async function getSkillByIdController(req: Request, res: Response) {
    try {
        const skill = await getSkillById(parseInt(req.params.id));
        res.json(skill);
    } catch (err: any) {
        console.error(err);
        res.status(404).json({ message: err.message });
    }
}