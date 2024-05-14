import ProductModel from "../Models/ProductModel";
import { addToCheckout, deleteFromCheckout } from "../Redux/CheckoutSlice";
import { store } from "../Redux/Store";


class CheckoutService {

    public  getCheckoutList() {
        let checkoutList = store.getState().checkout.checkoutList; 
        
        return checkoutList; 
    }

    public addCheckoutProduct(product:ProductModel){
        store.dispatch(addToCheckout(product)); 
    }

    public deleteCheckoutProduct(_id:string){
        store.dispatch(deleteFromCheckout(_id)); 
    }

}

const checkoutService = new CheckoutService(); 
export default checkoutService; 