import { NextFunction, Request, Response } from "express";
import { ErrorCodes, HttpException } from "../exceptions/root";
import { JWT_SECRET } from "../secrets";
import * as jwt from 'jsonwebtoken';
import { prismaClient } from "..";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // 1. extract the token from header
    const token = req.headers.authorization;
    // 2. If token is not present throw error like unauth
    if(!token) {
        next(new HttpException("Un Authorized",401,ErrorCodes.INTERNAL_SERVER_ERROR,"User not authorized"));
    }
    if(token) {
            try {
            // 3. If the token is present verify the token and extract the payload
            const payload = jwt.verify(token,JWT_SECRET) as any;
            // 4. to get the user from the payload
            const user = await prismaClient.user.findFirst({where:{id: payload.userId}})
            if(!user) {
                 next(new HttpException("Un Authorized",401,ErrorCodes.INTERNAL_SERVER_ERROR,"User not authorized"));
            }
            // 5. to attach the user to current req object
            if(user) {
                req.user = user;
            }
            next();
        }
        catch(err) {
            next(new HttpException("Un Authorized",401,ErrorCodes.INTERNAL_SERVER_ERROR,"User not authorized"));
        }
    }
}

export default authMiddleware