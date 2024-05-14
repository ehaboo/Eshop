import HeaderLogo from "../../HeaderArea/HeaderLogo/HeaderLogo";
import HeaderNav from "../../HeaderArea/HeaderNav/HeaderNav";
import HeaderSearch from "../../HeaderArea/HeaderSearch/HeaderSearch";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <HeaderLogo /> 
                <HeaderSearch /> 
                <HeaderNav /> 
            </header>

            <main>
                <Routing /> 
            </main>
        </div>
    );
}

export default Layout;
