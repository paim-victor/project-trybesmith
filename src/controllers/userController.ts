import { Request, Response } from 'express';
import Login from '../models/interfaces/loginInterface';
import User from '../models/interfaces/userInterface';
import UserService from '../services/usersService';

class ProductController {
  constructor(private userService = new UserService()) { 
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  public create = async (req: Request, res:Response) => {
    const user = req.body as User;
    const { status, data } = await this.userService.create(user);

    return res.status(status).json(data);
  };

  public login = async (req: Request, res: Response) => {
    const login = req.body as Login;
    const { status, data } = await this.userService.login(login);

    return res.status(status).json(data);
  };
}

export default ProductController;