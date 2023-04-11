import Skill from "../models/skills.model";

export async function getAllSkills(){
    try {
        const skills = await Skill.findAll();
        return skills;
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}

export async function getSkillById(id: number) {
    try {
        const skill = await Skill.findByPk(id);
        if (skill) {
            return skill;
        } else {
            throw new Error("Skill not found");    
        }
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}