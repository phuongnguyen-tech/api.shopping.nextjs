import { Admin } from "../entities/admin";
import { BaseRepository } from "./BaseRepository";
import adminsData from "../datas/adminsData";

class AdminRepository extends BaseRepository<Admin> {
  constructor() {
    super();
    this.memoryEntity = adminsData;
  }

  getByUserName(username: string): Promise<Admin | undefined> {
    const findUser = this.memoryEntity.find((x) => x.username == username);
    return Promise.resolve(findUser);
  }
}

export const adminRepository = new AdminRepository();
