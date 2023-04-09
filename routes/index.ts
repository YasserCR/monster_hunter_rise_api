import { Router, Request, Response } from 'express';
import fs from 'fs';

const router = Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName: string) => {
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file: string) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        console.log(`Loading route ${name}`);
        const routeModule = require(`./${file}`);
        router.use(`/${name}`, routeModule);
    }
});

export default router;