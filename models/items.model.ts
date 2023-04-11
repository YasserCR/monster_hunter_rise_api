import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

class Item extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public rarity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rarity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'items',
});

export default Item;