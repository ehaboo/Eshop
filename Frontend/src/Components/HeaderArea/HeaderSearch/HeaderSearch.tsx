import "./HeaderSearch.css";
import SearchIcon from '@mui/icons-material/Search';

function HeaderSearch(): JSX.Element {
    return (
        <div className="HeaderSearch">
			<input type="search" className="headerSearchInput" />
            <SearchIcon className="headerSearchIcon" fontSize="large" />
        </div>
    );
}

export default HeaderSearch;
