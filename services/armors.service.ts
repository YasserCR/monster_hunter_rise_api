import Armor from '../models/mysql/armors.model';

export async function getAllArmors() {
    try {
        const armors = await Armor.findAll();
        return armors;
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}

export async function getArmorById(id: number) {
    try {
        const armor = await Armor.findByPk(id);
        if (armor) {
            return armor;
        } else {
            throw new Error('Armor not found');
        }
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}