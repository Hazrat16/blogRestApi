import { NextFunction, Request, Response } from "express";
import Category from "../models/categoryModel";

// POST /api/category
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name } = req.body;
    const newCategory = new Category({
      name,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
    return;
  } catch (err) {
    next(err);
  }
};

// GET /api/category/
export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const categories = await Category.find();
    res.json(categories);
    return;
  } catch (err) {
    next(err);
  }
};

// GET /api/category/:categoryId
export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const category = await Category.findOne();
    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.json(category);
    return;
  } catch (err) {
    next(err);
  }
};

// PUT /api/category/:categoryId
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updated = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.json(updated);
    return;
  } catch (err) {
    next(err);
  }
};

// DELETE /api/category/:categoryId
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deleted = await Category.findByIdAndDelete({ _id: req.params.id });
    if (!deleted) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.json({ message: "Category deleted successfully" });
    return;
  } catch (err) {
    next(err);
  }
};
