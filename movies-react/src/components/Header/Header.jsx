import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import { Link, NavLink, useSearchParams } from "react-router-dom";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleGenreChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("genre", value);
    } else {
      newParams.delete("genre");
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
        <SearchBar setSearchGenre={handleSearchChange} />
        <Dropdown setGenre={handleGenreChange} />
      </div>
    </div>
  );
}

export default Header;
