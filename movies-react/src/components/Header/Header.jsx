import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Dropdown from "../DropDown/Dropdown.jsx";
import { Link, NavLink } from "react-router-dom"; // 1. Import Router components

function Header({ setSearchGenre, setGenre }) {
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
        <SearchBar setSearchGenre={setSearchGenre} />
        <Dropdown setGenre={setGenre} />
      </div>
    </div>
  );
}

export default Header;
