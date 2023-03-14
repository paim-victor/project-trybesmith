import express from 'express';
import ProductRouter from './routes/productsRoutes';

const app = express();

app.use(express.json());
app.use(ProductRouter);

export default app;
