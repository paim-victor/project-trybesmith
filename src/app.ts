import express from 'express';
import ProductRouter from './routes/productsRoutes';
import UserRouter from './routes/usersRoutes';
import OrderRouter from './routes/ordersRoutes';

const app = express();

app.use(express.json());
app.use(ProductRouter);
app.use(UserRouter);
app.use(OrderRouter);

export default app;
