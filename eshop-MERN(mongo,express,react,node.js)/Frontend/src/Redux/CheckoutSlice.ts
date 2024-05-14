import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";


interface checkoutListState {
    checkoutList : ProductModel []; 
}


const initialState:checkoutListState = {
    checkoutList: []
}


const checkoutSlice = createSlice({
    name: "checkoutSlice", 
    initialState, 
    reducers: {
        addToCheckout: (state, action:PayloadAction<ProductModel>) => {
            state.checkoutList.push(action.payload)   
        }, 
        deleteFromCheckout: (state, action:PayloadAction<string>) => {
            const index = state.checkoutList.findIndex(c => c._id === action.payload);
            console.log(index);
            
            if(index >= 0){
                state.checkoutList.splice(index,1);            
            }else {
                console.log("Nothing to delete")
            }
        }
    }

})

export const {addToCheckout,deleteFromCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;  