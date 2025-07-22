import { Router } from "express";
import { signin, signup } from "../controllers/authController";
import { errorHandler } from "../errorHandler";

const authRouter = Router();

authRouter.post("/signup", errorHandler(signup));
authRouter.post("/signin", errorHandler(signin));

export default authRouter;
