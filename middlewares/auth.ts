import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    // TODO: Add your token verification logic here
    // If token is valid:
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
