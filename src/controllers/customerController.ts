import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import customersData from "../data/customers";
import { Customer } from "../models/customers";

let customers = [...customersData];

// GET /api/customers
export const getAllCustomers = (req: Request, res: Response) => {
  res.json(customers);
};

// GET /api/customers/:id
export const getCustomerById = (req: Request, res: Response) => {
  const customerId = req.params.id;
  const customer = customers.find((c) => c.id === customerId);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

// POST /api/customers
export const createCustomer = async (req: Request, res: Response) => {
  const { email, phone, address, firstName, lastName, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newCustomer: Customer = {
    id: uuidv4(),
    email,
    phone,
    address,
    firstName,
    lastName,
    password: hashedPassword,
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer.id);
};

// PUT /api/customers/:id
export const updateCustomer = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  const { email, phone, address, firstName, lastName, password } = req.body;
  const index = customers.findIndex((c) => c.id === customerId);
  if (index !== -1) {
    const hashedPassword = await bcrypt.hash(password, 10);
    customers[index] = {
      id: customerId,
      email,
      phone,
      address,
      firstName,
      lastName,
      password: hashedPassword,
    };
    res.json(customerId);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

// DELETE /api/customers/:id
export const deleteCustomer = (req: Request, res: Response) => {
  const customerId = req.params.id;
  customers = customers.filter((c) => c.id !== customerId);
  res.json({ message: "Customer deleted successfully" });
};
