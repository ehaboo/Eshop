import express from "express"; 
import appConfig from "./2-utils/app-config";
import productsRouter from "./6-routes/products-route"
import dal from "./2-utils/dal";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import cors from "cors"


const server = express(); 
server.use(express.json()); 
server.use(cors())


server.use("/api/products", productsRouter)





server.use("*", routeNotFound)
server.use(catchAll);
server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log("Listening on http://localhost:" + appConfig.port);
}); 