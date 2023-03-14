import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import User from '../models/interfaces/userInterface';
import UserModel from '../models/usersModel';
import { secret, config } from '../middlewares/jwtConfig';

class UserService {
  public UserModel: UserModel;

  constructor() {
    this.UserModel = new UserModel(connection);
  }

  public async create(user: User) {
    const payload = await this.UserModel.create(user);
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };
    return { status: 201, data };
  }
}

export default UserService;