import express, { Application } from 'express';
import errorMiddleware from './middlewares/error.middleware';

const app: Application = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('API health is OK');
});

app.use(errorMiddleware);

export default app;
