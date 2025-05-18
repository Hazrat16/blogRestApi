import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../controllers/postController";
import { authMiddleware } from "../middlewares/auth";

const postRoute: Router = Router();

postRoute.post("/", authMiddleware, createPost);
postRoute.get("/", getAllPosts);
postRoute.get("/:id", getPostById);
postRoute.put("/:id", updatePost);
postRoute.delete("/:id", deletePost);

export { postRoute };
