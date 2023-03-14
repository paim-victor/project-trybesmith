import Product from '../models/interfaces/productInterface';
import ProductModel from '../models/productsModel';
import connection from '../models/connection';

class ProductService {
  public ProductModel: ProductModel;

  constructor() {
    this.ProductModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.ProductModel.getAll();
    return products;
  }
}

export default ProductService;