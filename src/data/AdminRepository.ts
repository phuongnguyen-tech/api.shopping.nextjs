import { Admins } from "../models/admins";
import { BaseRepository } from "./BaseRepository";
import adminsData from "./admins";

class AdminRepository extends BaseRepository<Admins> {
  constructor() {
    super();
    this.memoryEntity = adminsData;
  }

  getByUserName(username: string): Promise<Admins | undefined> {
    const findUser = this.memoryEntity.find((x) => x.username == username);
    return Promise.resolve(findUser);
  }
}

export const adminRepository = new AdminRepository();
