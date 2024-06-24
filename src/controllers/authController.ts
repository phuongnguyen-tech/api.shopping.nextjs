import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import customersData from "../data/customers";
import adminsData from "../data/admins";
import { adminRepository } from "../data/AdminRepository";

const JWT_SECRET = process.env.JWT_SECRET || "phuong_dap_chai_jwt_secret";

let customers = [...customersData];
let admins = [...adminsData];

export const loginCustomer = async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  const customer = customers.find((c) => c.phone === phone);
  if (!customer || !customer.password) {
    return res.status(404).json({ message: "Customer not found" });
  }
  const isMatch = await bcrypt.compare(password, customer.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: customer.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

export const loginAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const admin = await adminRepository.getByUserName(username);
  if (!admin || !admin.password) {
    return res.status(404).json({ message: "Admin not found" });
  }
  console.log({
    passwordRequest: password,
    passwordHashRequest: await bcrypt.hash(password, 10),
    adminHash: admin.password,
  });
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
