import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/db';

class Skill extends Model {
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Skill.init(
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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'skills',
        sequelize,
    }
);

export default Skill;