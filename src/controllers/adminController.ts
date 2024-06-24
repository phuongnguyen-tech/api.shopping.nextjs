import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import adminsData from "../data/admins";
import { Admins } from "../models/admins";
import { adminRepository } from "../data/AdminRepository";

// GET /api/admins
export const getAllAdmins = async (req: Request, res: Response) => {
  res.json(await adminRepository.getAll());
};

// GET /api/admins/:id
export const getAdminById = async (req: Request, res: Response) => {
  const adminId = req.params.id;
  const admin = await adminRepository.getById(adminId);
  if (admin) {
    res.json(admin);
  } else {
    res.status(404).json({ message: "Admin not found" });
  }
};

// POST /api/admins
export const createAdmin = async (req: Request, res: Response) => {
  const { username, password, fullName, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin: Admins = {
    id: uuidv4(),
    username,
    password: hashedPassword,
    fullName,
    email,
  };

  await adminRepository.create(newAdmin);
  res.status(201).json(newAdmin.id);
};

// PUT /api/admins/:id
export const updateAdmin = async (req: Request, res: Response) => {
  const adminId = req.params.id;
  const requestBody = req.body as Admins;
  const hashedPassword = await bcrypt.hash(requestBody.password, 10);
  requestBody.password = hashedPassword;
  await adminRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) => res.status(404).json({ message: "Not found" }));
};

// DELETE /api/admins/:id
export const deleteAdmin = async (req: Request, res: Response) => {
  const adminId = req.params.id;
  await adminRepository.delete(adminId);
  res.json({ message: "Admin deleted successfully" });
};
