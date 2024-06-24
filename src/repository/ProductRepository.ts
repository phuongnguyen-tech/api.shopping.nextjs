import { BaseRepository } from "./BaseRepository";
import { Product } from "../entities/product";
import productsData from "../datas/productData";

class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super();
    this.memoryEntity = productsData;
  }

  getByProductName(name: string): Promise<Product | undefined> {
    const findName = this.memoryEntity.find((x) => x.name == name);
    return Promise.resolve(findName);
  }
}

export const productRepository = new ProductRepository();
