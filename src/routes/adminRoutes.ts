import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createAdmin,
  deleteAdmin,
  getAdminById,
  getAllAdmins,
  updateAdmin,
} from "../controllers/adminController";

const router = Router();

router.get("/", getAllAdmins);
router.get("/:id", authenticate, getAdminById);
router.post("/", createAdmin);
router.put("/:id", authenticate, updateAdmin);
router.delete("/:id", authenticate, deleteAdmin);

export default router;
