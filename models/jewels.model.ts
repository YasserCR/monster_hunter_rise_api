import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

class Jewel extends Model {
    public id!: number;
    public name!: string;
    public slotLevel!: number;
    public skillName!: string;
    public skillValue!: number;
    public rarity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Jewel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slotLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    skillName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    skillValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rarity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'jewels',
});

export default Jewel;