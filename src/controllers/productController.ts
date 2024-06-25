// src/controllers/productController.ts
import { Request, Response } from "express";
import { Product } from "../entities/product";
import { v4 as uuidv4 } from "uuid";
import { productRepository } from "../repository/ProductRepository";

// GET /api/products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productRepository.getAll();
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch products" });
  }
};

// GET /api/products/:id
export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await productRepository.getById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// POST /api/products
export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, bannerUrl, quantity, categoryId } =
    req.body;

  const checkProductName = await productRepository.getByProductName(name);
  if (checkProductName == null) {
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

    productRepository.create(newProduct);
    res.status(201).json(newProduct.id);
  } else res.status(404).json({ message: "Product already exist" });
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  const requestBody: Product = req.body;
  await productRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) => res.status(404).json({ message: "Customer not found" }));
};

// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  await productRepository.delete(productId);

  res.json({ message: "Product deleted successfully" });
};

// GET /api/products/getDropdown
export const productDropdown = async (req: Request, res: Response) => {
  try {
    const result = await productRepository.getDropdown();
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch products dropdown" });
  }
};
