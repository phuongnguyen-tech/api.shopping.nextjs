// src/routes/productRoutes.ts
import express from "express";
import * as categoryController from "../controllers/categoryController";

const router = express.Router();

router.get("/getDropdown", categoryController.categoryDropdown);

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;
