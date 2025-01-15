import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>BOOLFLIX</h1>
            </div>
            <div className="navbar-search">
                <SearchBar />
            </div>
        </nav>
    );
};

export default Header;