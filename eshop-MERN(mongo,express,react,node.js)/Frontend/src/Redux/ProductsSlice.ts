import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";


interface ProductsState {
    productsList: ProductModel[]; 
}

const initialState:ProductsState = {
    productsList: []
}

const ProductsSlice = createSlice({
    name: "ProductsSlice", 
    initialState, 
    reducers: {
        fetchAllProducts: (state, action:PayloadAction<ProductModel[]>) => {
            state.productsList = action.payload;
        }
    }
});

export const {fetchAllProducts} = ProductsSlice.actions; 
export default ProductsSlice.reducer; 