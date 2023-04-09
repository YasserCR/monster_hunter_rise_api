import express from 'express';
import { sequelize } from './databases/db';
import router from './routes/index';

const app = express();
app.use('/', router);


sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
}).catch((err: Error) => {
    console.error('Error al sincronizar la base de datos:', err);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});