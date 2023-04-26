import express from 'express';
import { mongoConnection } from './utils/mongo';
import router from './routes/index';

const app = express();
app.use('/', router);

mongoConnection();

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
