const { getAllUsers, updateUser } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/auth");
const userRoute = require("express").Router();

userRoute.get("/", authMiddleware, getAllUsers);
userRoute.put("/:userId", authMiddleware, updateUser);

exports.userRoute = userRoute;;