// src/controllers/OrderDetailController.ts
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { orderDetailRepository } from "../repository/OrderDetailRepository";
import { OrderDetail } from "../entities/orderdetail";

// GET /api/orderDetail
export const getAllorderDetail = async (req: Request, res: Response) => {
  try {
    const orderDetails = await orderDetailRepository.getAll();
    res.json(orderDetails);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch order detail" });
  }
};

// GET /api/orderDetail/:id
export const getOrderDetailById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const orderDetail = await orderDetailRepository.getById(id);
  if (orderDetail) {
    res.json(orderDetail);
  } else {
    res.status(404).json({ message: "Order detail not found" });
  }
};

// POST /api/orderDetail
export const createOrderDetail = (req: Request, res: Response) => {
  const { orderId, productId, quantity, unitPrice } = req.body;

  const newOrderDetail: OrderDetail = {
    id: uuidv4(),
    orderId,
    productId,
    quantity,
    unitPrice,
    createdAt: new Date(),
  };

  orderDetailRepository.create(newOrderDetail);
  res.status(201).json(newOrderDetail.id);
};

// PUT /api/orderDetail/:id
export const updateOrderDetail = async (req: Request, res: Response) => {
  const requestBody: OrderDetail = req.body;
  await orderDetailRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) =>
      res.status(404).json({ message: "Order detail not found" })
    );
};

// DELETE /api/orderDetail/:id
export const deleteOrderDetail = async (req: Request, res: Response) => {
  const id = req.params.id;
  await orderDetailRepository.delete(id);

  res.json({ message: "Order detail deleted successfully" });
};
