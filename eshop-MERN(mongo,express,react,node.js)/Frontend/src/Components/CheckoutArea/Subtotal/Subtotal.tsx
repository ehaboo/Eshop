import { useSelector } from "react-redux";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"; 
import { RootState } from "../../../Redux/Store";

function Subtotal(): JSX.Element {

    const checkoutList = useSelector((state:RootState) => state.checkout.checkoutList );

    return (
        <div className="Subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <p>
                        Subtotal ({checkoutList.length} items): <strong>${value}</strong>
                    </p>
                    <small className="subtotalGift">
                            <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={checkoutList.map(c => c.price).reduce((prev, curr) => prev + curr,0)}
                displayType={"text"}
                thousandSeparator={true}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
