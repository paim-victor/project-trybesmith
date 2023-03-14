import express from 'express';
import ProductRouter from './routes/productsRoutes';
import UserRouter from './routes/usersRoutes';

const app = express();

app.use(express.json());
app.use(ProductRouter);
app.use(UserRouter);

export default app;
