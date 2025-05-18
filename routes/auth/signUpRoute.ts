import { Router } from "express";
import { signUp } from "../../controllers/authControllers/signUp";

const signUpRoute: Router = Router();

signUpRoute.post("/", signUp);

export { signUpRoute };
