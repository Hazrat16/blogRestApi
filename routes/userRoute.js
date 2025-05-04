const { getAllUsers, updateUser, deleteUser, getUserById } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/auth");
const userRoute = require("express").Router();

userRoute.get("/", authMiddleware, getAllUsers);
userRoute.put("/:userId", authMiddleware, updateUser);
userRoute.delete("/:userId", authMiddleware, deleteUser);
userRoute.get("/:userId", authMiddleware, getUserById);

exports.userRoute = userRoute;;