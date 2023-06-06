import Jewel from "../models/mysql/jewels.model";

export async function getAllJewels() {
    try {
        const jewels = await Jewel.findAll();
        return jewels
    } catch (err) {
        console.error(err);
        throw new Error("Server error");
    }
}

export async function getJewelById(id: number) {
    try {
        const jewel = await Jewel.findByPk(id);
        if (jewel) {
            return jewel;
        } else {
            throw new Error("Jewel not found");
            
        }
    } catch (err) {
        console.error(err);
        throw new Error("Server error");      
    }
}