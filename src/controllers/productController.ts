import { Request, Response } from 'express';
import ProductService from '../services/productsService';

class ProductController {
  constructor(private productService = new ProductService()) { 
    this.productService = productService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res:Response) => {
    const { name, amount } = req.body;

    const productCreated = await this.productService.create({ name, amount });
    return res.status(201).json(productCreated.item);
  };
}

export default ProductController;