import { BaseRepository } from "./BaseRepository";
import { Category } from "../entities/category";
import categoriesData from "../datas/categoriesData";

class CategoryRepository extends BaseRepository<Category> {
  constructor() {
    super();
    this.memoryEntity = categoriesData;
  }

  getByCategoryName(name: string): Promise<Category | undefined> {
    const findName = this.memoryEntity.find((x) => x.name == name);
    return Promise.resolve(findName);
  }
}

export const categoryRepository = new CategoryRepository();
