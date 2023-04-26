import { Request, Response } from "express";
import { getAllSkills, getSkillById, getSkillByNameAndLevel } from "../services/skills.service";

export async function getAllSkillsController(req: Request, res: Response): Promise<void> {
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

export async function getSkillByNameAndLevelController(req: Request, res: Response): Promise<void> {
    try {
        const nombre = req.params.nombre;
        const nivel = req.params.nivel;
        const skill = await getSkillByNameAndLevel(nombre, nivel);
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ message: 'Habilidad no encontrada' });
        }
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}