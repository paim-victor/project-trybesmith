import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from './interfaces/userInterface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: User): Promise<User> {
    const { username, vocation, level, password } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getByUserName(username: string): Promise<User | null> {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
    const values = [username];

    const [data] = await this.connection.execute(query, values);
    const [user] = data as User[];

    return user || null;
  }
}