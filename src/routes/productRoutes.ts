// src/routes/productRoutes.ts
import express from "express";
import * as productController from "../controllers/productController";

const router = express.Router();

router.get("/getDropdown", productController.productDropdown);

router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
