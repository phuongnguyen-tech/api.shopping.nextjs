import { BaseEntity } from "../entities/BaseEntity";
import { Paging } from "./Paging";

export class BaseRepository<T extends BaseEntity> {
  protected memoryEntity: T[] = [];

  create(t: T): Promise<T> {
    return new Promise((resolve) => {
      this.memoryEntity.push(t);
      resolve(t);
    });
  }

  getById(id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const entity = this.memoryEntity.find((entity) => entity.id === id);
      if (entity) {
        resolve(entity);
      } else {
        reject(new Error("Entity not found"));
      }
    });
  }

  update(t: T): Promise<T> {
    return new Promise((resolve, reject) => {
      const index = this.memoryEntity.findIndex((entity) => entity.id === t.id);
      if (index !== -1) {
        this.memoryEntity[index] = t;
        resolve(t);
      } else {
        reject(new Error("Entity not found"));
      }
    });
  }

  getAll(): Promise<T[]> {
    return new Promise((resolve) => {
      resolve(this.memoryEntity);
    });
  }

  getPaging(
    page: number,
    pageSize: number,
    filter: Record<string, string>
  ): Promise<Paging<T>> {
    return new Promise((resolve) => {
      let filteredEntities = [...this.memoryEntity];

      // Apply filters
      for (const key in filter) {
        filteredEntities = filteredEntities.filter((entity) =>
          entity[key as keyof T]?.toString().includes(filter[key])
        );
      }

      // Calculate paging
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const rows = filteredEntities.slice(start, end);

      const paging: Paging<T> = {
        rows,
        page,
        pageSize,
      };

      resolve(paging);
    });
  }

  delete(id: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const index = this.memoryEntity.findIndex((entity) => entity.id === id);
      if (index !== -1) {
        this.memoryEntity.splice(index, 1);
        resolve(id);
      } else {
        reject(new Error("Entity not found"));
      }
    });
  }
}
