import connection from '../models/connection';
import Order from '../models/interfaces/orderInterface';
import OrderModel from '../models/ordersModel';

class OrderService {
  public OrderModel: OrderModel;

  constructor() {
    this.OrderModel = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.OrderModel.getAll();
    return orders;
  }
}

export default OrderService;