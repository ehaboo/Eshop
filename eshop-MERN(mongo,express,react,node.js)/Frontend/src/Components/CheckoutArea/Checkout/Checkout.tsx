import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import checkoutAdImg from "../../../Assets/Images/checkoutAd.jpeg"

import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";

function Checkout(): JSX.Element {

    const productsList = useSelector((state:RootState) => state.checkout.checkoutList )

    
    return (
        <div className="Checkout">
			<div className="checkoutLeft">
                <img src={checkoutAdImg} alt="" className="checkoutAd"/>
                <div>
                    <h2 className="checkoutTitle">
                        Your Shopping Basket
                    </h2>
                    {productsList.map( (p, index) => <CheckoutProduct key={index} product={p} />)} 
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal /> 
            </div>
        </div>
    );
}

export default Checkout;


