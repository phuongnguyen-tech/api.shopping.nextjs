// src/routes/productRoutes.ts
import express from "express";
import * as orderDetailController from "../controllers/orderDetailController";

const router = express.Router();

router.get("/", orderDetailController.getAllorderDetail);
router.get("/:id", orderDetailController.getOrderDetailById);
router.post("/", orderDetailController.createOrderDetail);
router.put("/:id", orderDetailController.updateOrderDetail);
router.delete("/:id", orderDetailController.deleteOrderDetail);

export default router;
