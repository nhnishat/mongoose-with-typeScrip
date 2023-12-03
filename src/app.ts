import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { ErrorNotFound } from './app/middleware/ErrorNotFound';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import router from './app/router';
export const app: Application = express();

//parser

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Developers!');
});

app.use(globalErrorHandler);
app.use(ErrorNotFound);

export default app;
