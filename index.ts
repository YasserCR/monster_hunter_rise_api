import express from 'express';
import { sequelize } from './databases/db';
import itemsRouter from './routes/items.router';
import armorRouter from './routes/armors.router';
import jewelRouter from './routes/jewels.router';
import monsterRouter from './routes/monsters.router';
import skillRouter from './routes/skills.router';
import weaponRouter from './routes/weapons.router';
import homeRouter from './routes/home.router';

const app = express();

app.use(express.json());
app.use('/items', itemsRouter);
app.use('/armors', armorRouter);
app.use('/jewels', jewelRouter);
app.use('/monsters', monsterRouter);
app.use('/skills', skillRouter);
app.use('/weapons', weaponRouter);
app.use('/', homeRouter);


sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
}).catch((err: Error) => {
    console.error('Error al sincronizar la base de datos:', err);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});