abstract class ClientErrors {
    constructor(public status:number, public message:string) {}
}

export class RouteNotFoundError extends ClientErrors {
    public constructor(public route:string){
        super(404, `Route: ${route} not Found.`);
    }
}

export class ResourceNotFoundError extends ClientErrors {
    public constructor(public _id:number){
        super(404, `ID: ${_id} not Found.`); 
    }
}

export class ValidationError extends ClientErrors {
    public constructor(public message:string){
        super(400, message)
    }
}

export class UnauthorizedError extends ClientErrors {
    public constructor(public message:string){
        super(401, message)
    }
}