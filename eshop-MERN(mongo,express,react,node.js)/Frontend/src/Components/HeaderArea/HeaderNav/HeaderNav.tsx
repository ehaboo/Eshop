import { NavLink } from "react-router-dom";
import "./HeaderNav.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";

function HeaderNav(): JSX.Element {

    const list = useSelector((state:RootState) => state.checkout.checkoutList); 

    return (
        <div className="HeaderNav">
            <NavLink to="/login">
                <div className="navItem">
                    <span className="navItemLineOne">
                        Hello Guest
                    </span>
                    <span className="navItemLineTwo">
                        Sing In
                    </span>
                </div>
            </NavLink>
            <div className="navItem">
                <span className="navItemLineOne">
                    Your
                </span>
                <span className="navItemLineTwo">
                    Shop
                </span>
            </div>
            <NavLink to="/checkout">
                <div className="itemBasket">
                    <ShoppingBasketIcon className="pointer" fontSize="large" />
                    <span className="navItemLineTwo navBasketCount">
                        {list.length}
                    </span>
                </div>
            </NavLink>
        </div>
    );
}

export default HeaderNav;
