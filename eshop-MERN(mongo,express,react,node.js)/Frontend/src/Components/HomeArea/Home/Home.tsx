import "./Home.css";
import homeImage from "../../../Assets/Images/ecommerce-img.webp"
import Product from "../Product/Product";
import ProductModel from "../../../Models/ProductModel";
import { useEffect, useState } from "react";
import productsService from "../../../Services/ProductsService";

function Home(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]); 
    
    useEffect(() => {
        productsService.getAllProducts()
        .then(setProducts)
        .catch(() => console.log("Error"))
    }, []); 
   
   
    return (
        <div className="Home">
			<div className="container">
                <img src={homeImage} alt="Home_Image" className="homeImage"/>
                <div className="homeRow">
                   {products.map( (p,index) => <Product key={index} product={p} />)}
                </div>
                
            </div>
        </div>
    );
}

export default Home;
