import express from 'express';
import { sequelize } from './databases/db';
import itemsRouter from './routes/items.router';

// Importa los modelos de Sequelize para que puedan ser sincronizados con la base de datos
/*
import { Weapon } from './models/weapon';
import { Armor } from './models/armor';
import { Monster } from './models/monster';
import { Skill } from './models/skill';
import { Jewel } from './models/jewel';
import { Item } from './models/item';
*/
const app = express();

// Middleware para procesar las solicitudes JSON
app.use(express.json());
app.use('/items', itemsRouter);

// Define las rutas para cada modelo
/*
app.use('/weapons', require('./routes/weapons'));
app.use('/armor', require('./routes/armor'));
app.use('/monsters', require('./routes/monsters'));
app.use('/skills', require('./routes/skills'));
app.use('/jewels', require('./routes/jewels'));
app.use('/items', require('./routes/items'));
*/

app.use('/items', itemsRouter);

// Sincroniza los modelos con la base de datos
sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
}).catch((err: Error) => {
    console.error('Error al sincronizar la base de datos:', err);
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});