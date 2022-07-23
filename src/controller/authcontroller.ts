import { NextFunction, Request, Response } from "express";
import authenticationService from "../service/authentication.service";

const authentication = async (req: Request, res: Response): Promise<Response> => {
  const {email, password} = req.body;
  const {status, response} = await authenticationService(email, password);
  return res.status(status).json({token: response})
}

export default authentication;

