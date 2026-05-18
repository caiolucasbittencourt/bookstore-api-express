import 'express-async-errors';
import express from 'express';
import type { Express } from 'express';
import routes from '../src/routes/index.js';
import manipuladorDeErros from '../src/middlewares/manipuladorDeErros.js';

const app: Express = express();
routes(app);
app.use(manipuladorDeErros);

export default app;
