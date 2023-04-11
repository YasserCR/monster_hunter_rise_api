import Item from "../models/items.model";

export async function getAllItems() {
    try {
        const items = await Item.findAll();
        return items;
    } catch (err) {
        console.error(err);
        throw new Error('Server error')
    }
}

export async function getItemById(id: number) {
    try {
        const item = await Item.findByPk(id);
        if (item) {
            return item;
        } else {
            throw new Error("Item not found");
        }
    } catch (err) {
        console.error(err);
        throw new Error("Server error");
    }
}