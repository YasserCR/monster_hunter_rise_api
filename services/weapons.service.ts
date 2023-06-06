import Weapon from "../models/mysql/weapons.model";

export async function getAllWeapons() {
    try {
        const weapons = await Weapon.findAll();
        return weapons;
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}

export async function getWeaponById(id: number) {
    try {
        const weapon = await Weapon.findByPk(id);
        if (weapon) {
           return weapon;
        } else {
            throw new Error('Armor not found');
        }
    } catch (err) {
        console.error(err);
        throw new Error('Server error');
    }
}