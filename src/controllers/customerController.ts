import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { Customer } from "../entities/customer";
import { customerRepository } from "../repository/CustomerRepository";

// GET /api/customers
export const getAllCustomers = async (req: Request, res: Response) => {
  res.json(await customerRepository.getAll());
};

// GET /api/customers/:id
export const getCustomerById = async (req: Request, res: Response) => {
  const customerId = req.params.id;
  const customer = await customerRepository.getById(customerId);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

// POST /api/customers
export const createCustomer = async (req: Request, res: Response) => {
  const { email, phone, address, firstName, lastName, password } = req.body;

  const checkPhone = await customerRepository.getByPhone(phone);

  if (checkPhone == null) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer: Customer = {
      id: uuidv4(),
      email,
      phone,
      address,
      firstName,
      lastName,
      password: hashedPassword,
      createdAt: new Date(),
    };

    customerRepository.create(newCustomer);
    res.status(201).json(newCustomer.id);
  } else {
    res.status(404).json({ message: "Customer already exist" });
  }
};

// PUT /api/customers/:id
export const updateCustomer = async (req: Request, res: Response) => {
  const requestBody = req.body as Customer;
  const hashedPassword = await bcrypt.hash(requestBody.password, 10);
  requestBody.password = hashedPassword;
  await customerRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) => res.status(404).json({ message: "Customer not found" }));
};

// DELETE /api/customers/:id
export const deleteCustomer = (req: Request, res: Response) => {
  const customerId = req.params.id;
  customerRepository.delete(customerId);
  res.json({ message: "Customer deleted successfully" });
};

// GET /api/customers/getDropdown
export const customerDropdown = async (req: Request, res: Response) => {
  try {
    const result = await customerRepository.getDropdown();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch customers dropdown" });
  }
};
