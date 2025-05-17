const categoryModel = require("../models/categoryModel");

// POST /api/category
exports.createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const newCategory = new categoryModel({
        name,
      });
  
      const savedCategory = await newCategory.save();
      res.status(201).json(savedCategory);
    } catch (err) {
      res.status(500).json({ error: "Failed to create category" });
    }
  };

// GET /api/category/
exports.getAllCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// GET /api/category/:categoryId
exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.findOne();
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving category" });
  }
};

// PUT /api/category/:categoryId
exports.updateCategory = async (req, res) => {
  try {
    const updated = await categoryModel.findOneAndUpdate(
        req.params.id, req.body, {new: true}
    );
    if (!updated) return res.status(404).json({ error: "Category not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

// DELETE /api/category/:categoryId
exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await categoryModel.findOneAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Category not found" });
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};
