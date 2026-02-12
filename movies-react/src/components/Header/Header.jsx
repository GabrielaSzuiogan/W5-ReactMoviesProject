import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Dropdown from "../DropDown/Dropdown.jsx";
function Header({ setSearchGenre, setGenre, onNavigate }) {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <div className="logo-title">
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <a
            href="#"
            className="header-title"
            onClick={() => onNavigate("home")}
          >
            Popcorn
          </a>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
          <a href="#" onClick={() => onNavigate("watchlist")}>
            Watch List
          </a>
          <a href="#" onClick={() => onNavigate("favorites")}>
            Favourites
          </a>
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
