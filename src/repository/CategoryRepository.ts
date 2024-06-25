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

export const categoryRepository = new CategoryRepository();
