import {NextFunction, Response, Request} from "express"; 


function catchAll(err:any, req:Request, res:Response, next:NextFunction) {
    
    console.error(err);

    const status = err.status || 500; 

    let msg = err.message;
    
    if( status >= 500 ){
        msg = "Bad Connections ...";
    }

    res.status(status).send(msg)
}

export default catchAll; 