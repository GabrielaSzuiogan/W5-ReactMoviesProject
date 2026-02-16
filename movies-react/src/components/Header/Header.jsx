import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { Link, NavLink, useSearchParams } from "react-router-dom";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="header-wrapper">
      <div className="header-left">
        <div className="logo-title">
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <Link to="/" className="header-title">
            Popcorn
          </Link>
        </div>

        <div className="nav-links">
          <NavLink to="/watchlist">Watch List</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>
      </div>

      <div className="header-right">
        <SearchBar setSearchGenre={(value) => updateParams("search", value)} />
        <Dropdown setGenre={(value) => updateParams("genre", value)} />
      </div>
    </div>
  );
}

export default Header;
