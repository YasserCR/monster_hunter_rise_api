import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

class Monster extends Model {
    public id!: number;
    public name!: string;
    public type!: string;
    public weakness!: string;
    public habitat!: string;
    public size!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Monster.init(
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weakness: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        habitat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'monsters',
        sequelize,
    }
);

export default Monster;