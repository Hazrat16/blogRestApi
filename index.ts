import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";

import connectDB from "./connectDB";
import { loginRoute } from "./routes/auth/loginRoute";
import { signUpRoute } from "./routes/auth/signUpRoute";
import { categoryRoute } from "./routes/categoryRoute";
import { postRoute } from "./routes/postRoute";
import { userRoute } from "./routes/userRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Multer storage configuration
const uploadStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images"); // Ensure this folder exists
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: uploadStorage });

// File upload route
app.post(
  "/api/upload",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
      }
      console.log("file found", req.file);
      res.status(200).json({ message: "File uploaded", file: req.file });
    } catch (error) {
      next(error);
    }
  }
);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Blog REST API");
});

// Routes
app.use("/api/signup", signUpRoute);
app.use("/api/login", loginRoute);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      connectDB();
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
