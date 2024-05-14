import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./CheckoutSlice";
import productsReducer from "./ProductsSlice"; 


export const store = configureStore({
    reducer: {
        checkout:checkoutReducer,
        products:productsReducer
    }
}); 

export type RootState = ReturnType<typeof store.getState>