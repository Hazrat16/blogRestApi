const { getAllUsers } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/auth");
const userRoute = require("express").Router();

userRoute.get("/", authMiddleware, getAllUsers);

exports.userRoute = userRoute;;