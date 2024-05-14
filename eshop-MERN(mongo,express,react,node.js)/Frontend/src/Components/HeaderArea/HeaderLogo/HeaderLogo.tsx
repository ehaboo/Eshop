import { NavLink } from "react-router-dom";
import "./HeaderLogo.css";
import StorefrontIcon from '@mui/icons-material/Storefront';

function HeaderLogo(): JSX.Element {
    return (
        <div className="HeaderLogo">
            <NavLink to="/home">
                <StorefrontIcon className="headerLogoImg" fontSize="large" />
                <h2 className="headerLogoTitle">eSHOP</h2>
            </NavLink>
        </div>
    );
}

export default HeaderLogo;
