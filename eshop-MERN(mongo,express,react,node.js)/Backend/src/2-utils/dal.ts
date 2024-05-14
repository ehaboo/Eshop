import mongoose from "mongoose"; 
import appConfig from "./app-config";

async function connect():Promise<void> {
    try {
        const db = await mongoose.connect(appConfig.mongoDbConnectionString); 
        console.log(`We are connected to ${db.connections[0].name} on MongoDB`);
        
    } catch (error:any) {
        console.error(error)
    }
}

export default {
    connect
}