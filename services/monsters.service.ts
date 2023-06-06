import Monster from "../models/mysql/monsters.model";

export async function getAllMonsters() {
    try {
        const monsters = await Monster.findAll();
        return monsters;
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}

export async function getMonsterById(id: number) {
    try {
        const monster = await Monster.findByPk(id);
        if (monster) {
           return monster;
        } else {
            throw new Error('Monster not found');
        }
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}