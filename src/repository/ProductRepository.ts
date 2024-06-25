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

  getDropdown(): Promise<Array<{ id: string; name: string }>> {
    return new Promise((resolve) => {
      const dropdown = this.memoryEntity.map((entity) => ({
        id: entity.id,
        name: entity.name ?? "No Name",
      }));
      resolve(dropdown);
    });
  }
}

export const productRepository = new ProductRepository();
