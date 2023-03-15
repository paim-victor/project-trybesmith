import jwt from 'jsonwebtoken';
import { config, secret } from '../middlewares/jwtConfig';
import connection from '../models/connection';
import Login from '../models/interfaces/loginInterface';
import User from '../models/interfaces/userInterface';
import UserModel from '../models/usersModel';

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

  public async login(login: Login) {
    const data = await this.UserModel.getByUserName(login.username);

    if (data === null || data.password !== login.password) {
      return { status: 403, error: { message: 'não autorizado' } };
    }
    return { status: 200, data };
  }
}

export default UserService;