import axios from "axios";
import { store } from "../Redux/Store";
import appConfig from "../Utils/Config";
import {fetchAllProducts} from "../Redux/ProductsSlice"


class ProductsService {

    public async getAllProducts () {
        let products = store.getState().products.productsList; 
        
        if(products.length === 0) {

            const response = await axios.get(appConfig.productsUrl);
            products = response.data; 
            console.log(products);
            store.dispatch(fetchAllProducts(products))
        }


        return products; 
    }
}

const productsService = new ProductsService(); 
export default productsService; 