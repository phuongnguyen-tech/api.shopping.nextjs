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

  getDropdown(): Promise<Array<{ id: string; name: string }>> {
    return new Promise((resolve) => {
      const dropdown = this.memoryEntity.map((entity) => ({
        id: entity.id,
        name: entity.firstName ?? "No Name",
      }));
      resolve(dropdown);
    });
  }
}

export const customerRepository = new CustomerRepository();
