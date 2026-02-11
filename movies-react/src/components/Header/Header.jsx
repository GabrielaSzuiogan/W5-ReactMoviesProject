import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Dropdown from "../DropDown/Dropdown.jsx";
function Header({ setSearchGenre, setGenre }) {
  return (
    <div className="header-wrapper">
      <div className="header-left">
        <div className="logo-title">
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <a href="#" className="header-title">
            Popcorn
          </a>
        </div>
        <a href="#">Watch List</a>
        <a href="#">Favourites</a>
      </div>
      <div className="header-right">
        <SearchBar setSearchGenre={setSearchGenre} />
        <Dropdown setGenre={setGenre} />
      </div>
    </div>
  );
}

export default Header;
