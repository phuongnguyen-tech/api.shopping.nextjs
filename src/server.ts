// src/server.ts
import app from "./app";
import { adminRepository } from "./repository/AdminRepository";
import { Admin } from "./entities/admin";
import bcrypt from "bcrypt";

const PORT = process.env.PORT || 4000;

// Function to create an initial admin account
const createInitialAdmin = async () => {
  const existingAdmins = await adminRepository.getAll();
  if (existingAdmins.length === 0) {
    const hashedPassword = await bcrypt.hash("123", 10);
    const initialAdmin: Admin = {
      id: "1",
      username: "adm",
      password: hashedPassword,
      fullName: "Admin ",
      email: "admin@example.com",
      createdAt: new Date(),
    };
    await adminRepository.create(initialAdmin);
    console.log("Initial admin account created");
  }
};

createInitialAdmin().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
