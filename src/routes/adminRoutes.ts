import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createAdmin,
  deleteAdmin,
  getAdminById,
  getAllAdmin,
  updateAdmin,
} from "../controllers/adminController";

const router = Router();

router.get("/", getAllAdmin);
router.get("/:id", getAdminById);
router.post("/", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
