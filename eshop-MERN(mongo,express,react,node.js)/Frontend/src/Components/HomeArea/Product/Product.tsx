import ProductModel from "../../../Models/ProductModel";
import checkoutService from "../../../Services/CheckoutService";
import "./Product.css";


interface ProductProps {
    product: ProductModel; 
}

function Product(props: ProductProps): JSX.Element {

    function ratingToStars(){
       switch(props.product.rating){
        case 1: return <>⭐</>
        case 2: return <>⭐⭐</>
        case 3: return <>⭐⭐⭐</>
        case 4: return <>⭐⭐⭐⭐</>
        case 5: return <>⭐⭐⭐⭐⭐</>
        }
    }

    const handleClick = () => {
        checkoutService.addCheckoutProduct(props.product)
    }

    return (
        <div className="Product">
			<div className="productInfo">
                <p>{props.product.title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{props.product.price}</strong>
                </p>
                <div className="productRating">{ratingToStars()}</div>
            </div>
            <img src={props.product.imageUrl} alt="product-img" />
            <button onClick={handleClick}>Add to Basket</button>
        </div>
    );
}

export default Product;
