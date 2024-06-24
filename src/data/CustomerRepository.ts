import { Customer } from "../models/customers";
import { BaseRepository } from "./BaseRepository";
import customersData from "./customers";

class CustomerRepository extends BaseRepository<Customer> {
  constructor() {
    super();
    this.memoryEntity = customersData;
  }
}

export const customerRepository = new CustomerRepository();
