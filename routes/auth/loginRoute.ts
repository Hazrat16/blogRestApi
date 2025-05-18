import { NextFunction, Request, Response, Router } from "express";
import { login } from "../../controllers/authControllers/login";

const loginRoute: Router = Router();

loginRoute.post("/", (req: Request, res: Response, next: NextFunction) => {
  login(req, res, next);
});

export { loginRoute };
