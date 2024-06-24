import { Customer } from "../entities/customer";
import { BaseRepository } from "./BaseRepository";
import customersData from "../datas/customersData";

class CustomerRepository extends BaseRepository<Customer> {
  constructor() {
    super();
    this.memoryEntity = customersData;
  }

  getByPhone(phone: string): Promise<Customer | undefined> {
    const findPhone = this.memoryEntity.find((x) => x.phone == phone);
    return Promise.resolve(findPhone);
  }
}

export const customerRepository = new CustomerRepository();
