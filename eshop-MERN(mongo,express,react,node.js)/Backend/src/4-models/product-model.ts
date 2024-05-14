import mongoose from "mongoose"; 

export interface IProductModel extends mongoose.Document {
    title: string; 
    price: number; 
    rating: number; 
    imageUrl: string; 
}


export const ProductSchema = new mongoose.Schema<IProductModel>({
    title: {
        type:String, 
        trim: true, 
        required: [true, "Missing Title"], 
        minlength: [2, "Title to short"],
        maxlength: [500, "Title too long"] 
    }, 
    price: {
        type:Number, 
        required: [true, "Missing Price"], 
        min: [0, "Price can't be negative"],
        max: [1000, "Price can't be more than 1000"] 
    },
    rating: {
        type:Number, 
        required: [true, "Missing Rating"], 
        min: [1, "Rating must be 1-5"],
        max: [5, "Rating must be 1-5"] 
    },
    imageUrl: {
        type:String, 
        trim: true, 
        unique: true,
        required: [true, "Missing ImageUrl"], 
        minlength: [2, "ImageUrl to short"],
        maxlength: [500, "ImageUrl too long"] 
    }
},{
    versionKey: false,
    id:false,
})

export const ProductModel = mongoose.model<IProductModel>("ProductModel", ProductSchema, "products")


