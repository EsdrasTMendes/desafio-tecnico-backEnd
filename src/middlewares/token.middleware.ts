import { Request, Response, NextFunction } from "express";
import JWTToken from "../utils/JWTToken";

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const {error, response, status, } = await JWTToken.verifyToken(token);
  if(error) {
    next({
      status,
      response
    })
  }
  res.locals.payload = response;
  next()
}