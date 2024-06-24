// src/controllers/productController.ts
import { Request, Response } from "express";
import productsData from "../data/products";
import { Product } from "../models/products";
import { v4 as uuidv4 } from "uuid";

let products = [...productsData];

// POST /api/products
export const createProduct = (req: Request, res: Response) => {
  const { name, description, price, bannerUrl, quantity, categoryId } =
    req.body;

  const newProduct: Product = {
    id: uuidv4(),
    name,
    description,
    price,
    bannerUrl,
    quantity,
    categoryId,
    createdAt: new Date(), // Thêm createdAt ở đây
  };

  products.push(newProduct);
  res.status(201).json(newProduct.id);
};

// GET /api/products/:id
export const getProductById = (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// GET /api/products
export const getAllProducts = (req: Request, res: Response) => {
  // Sắp xếp danh sách sản phẩm theo createdAt (giảm dần)
  const sortedProducts = products.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
  res.json(sortedProducts);
};

// PUT /api/products/:id
export const updateProduct = (req: Request, res: Response) => {
  const productId = req.params.id;
  const updatedProduct: Product = req.body;
  const index = products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    products[index] = updatedProduct;
    res.json(productId);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// DELETE /api/products/:id
export const deleteProduct = (req: Request, res: Response) => {
  const productId = req.params.id;
  products = products.filter((p) => p.id !== productId);
  res.json({ message: "Product deleted successfully" });
};
