import { Router } from "express";
import { loginAdmin, loginCustomer } from "../controllers/authController";

const router = Router();

router.post("/customer", loginCustomer);
router.post("/admin", loginAdmin);

export default router;
