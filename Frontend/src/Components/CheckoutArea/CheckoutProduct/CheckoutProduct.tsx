import ProductModel from "../../../Models/ProductModel";
import checkoutService from "../../../Services/CheckoutService";
import "./CheckoutProduct.css";

interface CheckoutProductProps {
    product: ProductModel; 
}

function CheckoutProduct(props:CheckoutProductProps): JSX.Element {

    function ratingToStars(){
        switch(props.product.rating){
         case 1: return <>⭐</>
         case 2: return <>⭐⭐</>
         case 3: return <>⭐⭐⭐</>
         case 4: return <>⭐⭐⭐⭐</>
         case 5: return <>⭐⭐⭐⭐⭐</>
         }
     }

     
    function handleDelete(_id:string){
        checkoutService.deleteCheckoutProduct(_id)
    }

    return (
        <div className="CheckoutProduct">
			<img src={props.product.imageUrl} alt="checkoutProduct-img" className="checkoutProductImg"/>

            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">{props.product.title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{props.product.price}</strong>
                </p>
                <div className="productRating">{ratingToStars()}</div>
                <button onClick={() => handleDelete(props.product._id)}>Remove from Basket</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
