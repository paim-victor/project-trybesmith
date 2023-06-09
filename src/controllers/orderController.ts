import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

class OrderController {
  constructor(private orderService = new OrderService()) { 
    this.orderService = orderService;
    this.getAll = this.getAll.bind(this);
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    return res.status(200).json(orders);
  };
}

export default OrderController;