import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController";
import { authMiddleware } from "../middlewares/auth";

const categoryRoute: Router = Router();

categoryRoute.post("/", authMiddleware, createCategory);
categoryRoute.get("/", authMiddleware, getAllCategory);
categoryRoute.put("/:categoryId", authMiddleware, updateCategory);
categoryRoute.delete("/:categoryId", authMiddleware, deleteCategory);
categoryRoute.get("/:categoryId", authMiddleware, getCategoryById);

export { categoryRoute };
