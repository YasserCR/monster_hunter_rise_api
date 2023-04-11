import { Sequelize } from 'sequelize';
import * as configJson from '../config/config.json';

const env = process.env.NODE_ENV || 'development';
const config = (configJson as any)[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    logging: false // deshabilitar el logging de Sequelize
  }
);