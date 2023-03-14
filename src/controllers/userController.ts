import { Request, Response } from 'express';
import UserService from '../services/usersService';
import User from '../models/interfaces/userInterface';

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
}

export default ProductController;