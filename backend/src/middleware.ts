import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"
import {JWT_PASSWORD} from "./config"

export const UserMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    const header = req.headers["authorization"]
    const decoded = jwt.verify(header as string,JWT_PASSWORD)
    if (decoded){
        //@ts-ignore

        console.log(decoded.id)
        //@ts-ignore
        
        req.userId = decoded.id;
        next()
    }else{
        res.status(443).json({msg:"User not found"})
    }
}