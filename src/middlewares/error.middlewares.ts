import { Request, Response, NextFunction } from "express";
import IError from "../interfaces/IError";

const middlewareDeErro = (error: IError,  _req: Request, res: Response, next: NextFunction ): Response => {
const {status, response} = error;
return res.status(status).json({message: response})
}

export default middlewareDeErro