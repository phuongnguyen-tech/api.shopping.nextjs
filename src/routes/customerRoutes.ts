import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customerController";

const router = Router();

router.get("/", authenticate, getAllCustomers);
router.get("/:id", authenticate, getCustomerById);
router.post("/", createCustomer);
router.put("/:id", authenticate, updateCustomer);
router.delete("/:id", authenticate, deleteCustomer);

export default router;
