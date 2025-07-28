import { Router } from "express";
import { me, signin, signup } from "../controllers/authController";
import { errorHandler } from "../errorHandler";
import authMiddleware from "../middlewares/auth";

const authRouter = Router();

authRouter.post("/signup", errorHandler(signup));
authRouter.post("/signin", errorHandler(signin));
authRouter.get("/get", [authMiddleware],errorHandler(me));

export default authRouter;
