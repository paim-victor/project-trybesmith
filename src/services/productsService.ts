import connection from '../models/connection';
import Product from '../models/interfaces/productInterface';
import ProductModel from '../models/productsModel';

class ProductService {
  public ProductModel: ProductModel;

  constructor() {
    this.ProductModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.ProductModel.getAll();
    return products;
  }

  public async create({ name, amount }: Product) {
    const addProduct = await this.ProductModel.create({ name, amount });
    return { status: 201, item: addProduct };
  }
}

export default ProductService;