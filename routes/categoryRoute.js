const { getAllCategory, updateCategory, deleteCategory, getCategoryById, createCategory } = require("../controllers/categoryController");
const { authMiddleware } = require("../middlewares/auth");
const categoryRoute = require("express").Router();

categoryRoute.post("/",authMiddleware,createCategory);
categoryRoute.get("/", authMiddleware, getAllCategory);
categoryRoute.put("/:categoryId", authMiddleware, updateCategory);
categoryRoute.delete("/:categoryId", authMiddleware, deleteCategory);
categoryRoute.get("/:categoryId", authMiddleware, getCategoryById);

exports.categoryRoute = categoryRoute;