import { NextFunction, Request, Response } from "express";
import User from "../../models/userModel";
const bcrypt = require("bcrypt");

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extract user data from the request body
    const { name, username, email, password, profile } = req.body;

    // Validate the input data
    if (!name || !username || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    // Create a new user
    const newUser = new User({
      name,
      username,
      email,
      password,
      profile,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
