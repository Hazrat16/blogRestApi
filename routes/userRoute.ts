import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController";
import { authMiddleware } from "../middlewares/auth";

const userRoute: Router = Router();

userRoute.get("/", authMiddleware, getAllUsers);
userRoute.put("/:userId", authMiddleware, updateUser);
userRoute.delete("/:userId", authMiddleware, deleteUser);
userRoute.get("/:userId", authMiddleware, getUserById);

export { userRoute };
