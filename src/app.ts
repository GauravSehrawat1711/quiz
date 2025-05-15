import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import { setupSwagger } from './config/swagger';

const app = express();
setupSwagger(app);
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.get('/health-check', (_req, res) => {
  res.send('API is running');
});

export default app;