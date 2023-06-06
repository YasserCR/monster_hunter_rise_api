import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../utils/db';

class Armor extends Model {
    public id!: number;
    public name!: string;
    public defense!: number;
    public fireRes!: number;
    public waterRes!: number;
    public thunderRes!: number;
    public iceRes!: number;
    public dragonRes!: number;
    public rarity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Armor.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fireRes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        waterRes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        thunderRes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        iceRes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dragonRes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rarity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        tableName: 'armors',
        sequelize,
    }
);

export default Armor;