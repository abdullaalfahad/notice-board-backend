import express, { Application } from 'express';
import errorMiddleware from './middlewares/error.middleware';
import { noticeRoutes } from './modules/notice/notice.routes';

const app: Application = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('API health is OK');
});

app.use('/api/v1/notices', noticeRoutes);

app.use(errorMiddleware);

export default app;
