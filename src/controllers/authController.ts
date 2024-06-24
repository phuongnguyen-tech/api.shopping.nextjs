import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { adminRepository } from "../repository/AdminRepository";
import { customerRepository } from "../repository/CustomerRepository";

const JWT_SECRET = process.env.JWT_SECRET || "dap_chai_jwt_secret";

export const loginCustomer = async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  const customer = await customerRepository.getByPhone(phone)
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
  // console.log({
  //   passwordRequest: password,
  //   passwordHashRequest: await bcrypt.hash(password, 10),
  //   adminHash: admin.password,
  // });
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
