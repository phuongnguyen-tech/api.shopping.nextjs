// src/controllers/OrderController.ts
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { orderRepository } from "../repository/OrderRepository";
import { Order } from "../entities/order";

// GET /api/orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderRepository.getAll();
    res.json(orders);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch orders" });
  }
};

// GET /api/orders/:id
export const getOrderById = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  const order = await orderRepository.getById(orderId);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// POST /api/orders
export const createOrder = (req: Request, res: Response) => {
  const { customerId, orderDate, totalAmount, status } = req.body;

  const newOrder: Order = {
    id: uuidv4(),
    customerId,
    orderDate,
    totalAmount,
    status,
    createdAt: new Date(),
  };

  orderRepository.create(newOrder);
  res.status(201).json(newOrder.id);
};

// PUT /api/orders/:id
export const updateOrder = async (req: Request, res: Response) => {
  const requestBody: Order = req.body;
  await orderRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) => res.status(404).json({ message: "Order not found" }));
};

// DELETE /api/orders/:id
export const deleteOrder = async (req: Request, res: Response) => {
  const orderId = req.params.id;
  await orderRepository.delete(orderId);

  res.json({ message: "Order deleted successfully" });
};
