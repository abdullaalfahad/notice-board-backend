import cors from 'cors';
import express, { Application } from 'express';
import errorMiddleware from './middlewares/error.middleware';
import { noticeRoutes } from './modules/notice/notice.routes';
import { uploadRoutes } from './modules/upload/upload.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).send('API health is OK');
});

app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/uploads', uploadRoutes);

app.use(errorMiddleware);

export default app;
