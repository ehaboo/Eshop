import express, {NextFunction, Request, Response} from "express";
import productsService from "../5-services/products-service";



const router = express.Router(); 


router.get("/", async (req:Request, res:Response, next:NextFunction) => {
    try {
        const products = await productsService.getAllProducts(); 
        res.json(products)
    } catch (error:any) {
        next(error)
    }
})






export default router; 