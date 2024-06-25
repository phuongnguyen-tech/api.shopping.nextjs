import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createCustomer,
  customerDropdown,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customerController";

const router = Router();

router.get("/getDropdown", customerDropdown);

router.get("/", getAllCustomers);
router.post("/", createCustomer);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
