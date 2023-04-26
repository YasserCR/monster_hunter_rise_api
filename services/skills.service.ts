import { Skill, ISkill } from '../models/nosql/skills.model';

  export async function getAllSkills(): Promise<ISkill[]> {
    try {
      const habilidades = await Skill.find();
      return habilidades;
    } catch (error) {
      console.error('Error al listar habilidades:', error);
      throw error;
    }
  }

  export async function getSkillById(id: number): Promise<ISkill | null> {
    try {
      const habilidad = await Skill.findOne({ id });
      return habilidad;
    } catch (error) {
      console.error(`Error al consultar habilidad con id ${id}:`, error);
      throw error;
    }
  }

  export async function getSkillByNameAndLevel(nombre: string, nivel: string): Promise<string | null> {
    const skill = await Skill.findOne({ nombre });
    if (skill) {
      const nivelValue = skill.nivel[nivel];
      if (nivelValue) {
        return nivelValue;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }