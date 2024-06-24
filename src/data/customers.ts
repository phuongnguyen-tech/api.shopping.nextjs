import { Customer } from "../models/customers";

const customersData: Customer[] = [
  {
    id: "1",
    email: "customer1@example.com",
    phone: "123456789",
    address: "123 Street, City",
    firstName: "Customer",
    lastName: "One",
    password: "$2b$10$QaMmMDjN0X03f1EqxqO3OezNEmSPc/v.t7vJstjzZLm4/75t8RyyK", // hashed password for "123"
  },
  {
    id: "2",
    email: "customer2@example.com",
    phone: "987654321",
    address: "456 Avenue, Town",
    firstName: "Customer",
    lastName: "Two",
    password: "$2b$10$QaMmMDjN0X03f1EqxqO3OezNEmSPc/v.t7vJstjzZLm4/75t8RyyK", // hashed password for "123"
  },
  {
    id: "3",
    email: "customer3@example.com",
    phone: "555123456",
    address: "789 Road, Village",
    firstName: "Customer",
    lastName: "Three",
    password: "$2b$10$QaMmMDjN0X03f1EqxqO3OezNEmSPc/v.t7vJstjzZLm4/75t8RyyK", // hashed password for "123"
  },
];
export default customersData;
