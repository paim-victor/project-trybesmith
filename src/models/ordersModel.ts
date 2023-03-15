import { Pool } from 'mysql2/promise';
import Order from './interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT  orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders JOIN Trybesmith.products 
    ON products.order_id = orders.id GROUP BY orders.id`,
    );
    const [rows] = result;
    return rows as Order[];
  }
}