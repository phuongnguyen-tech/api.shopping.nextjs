// src/controllers/CategoryController.ts
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { categoryRepository } from "../repository/CategoryRepository";
import { Category } from "../entities/category";

// GET /api/categories
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryRepository.getAll();
    res.json(categories);
  } catch (error) {
    res.status(404).json({ message: "Failed to fetch categories" });
  }
};

// GET /api/categories/:id
export const getCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const category = await categoryRepository.getById(categoryId);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

// POST /api/categories
export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  const checkCategoryName = await categoryRepository.getByCategoryName(name);
  if (!checkCategoryName) {
    const newCategory: Category = {
      id: uuidv4(),
      name,
      createdAt: new Date(),
    };

    categoryRepository.create(newCategory);
    res.status(201).json(newCategory.id);
  } else res.status(404).json({ message: "Category already exist" });
};

// PUT /api/categories/:id
export const updateCategory = async (req: Request, res: Response) => {
  const requestBody: Category = req.body;
  await categoryRepository
    .update(requestBody)
    .then((r) => {
      res.json(r.id);
    })
    .catch((error) => res.status(404).json({ message: "Category not found" }));
};

// DELETE /api/categories/:id
export const deleteCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  await categoryRepository.delete(categoryId);

  res.json({ message: "Category deleted successfully" });
};
