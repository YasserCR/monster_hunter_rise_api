import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/db';

class Weapon extends Model {
    public id!: number;
    public name!: string;
    public damage!: number;
    public element!: string;
    public sharpness!: string;
    public affinity!: number;
    public defense!: number;
    public rarity!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Weapon.init(
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
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        element: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sharpness: {
            type: DataTypes.STRING,
            allowNull: true
        },
        affinity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rarity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        tableName: 'weapons',
        sequelize,
    }
);

export default Weapon;

/*import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../databases/db';

export class Weapon extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Weapon.init({
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
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'weapons',
});

Weapon.sync();*/