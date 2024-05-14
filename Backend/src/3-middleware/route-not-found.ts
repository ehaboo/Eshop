import {NextFunction, Request, Response} from "express";
import { RouteNotFoundError } from "../4-models/client-errors";


function routeNotFound(req:Request, res:Response, next:NextFunction) {
    
    const err = new RouteNotFoundError(req.originalUrl); 
    next(err)
}

export default routeNotFound; 