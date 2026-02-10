import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
function Header() {
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
        <div className="drop-down">DropMenu</div>
        <div className="search-bar">Search Bar</div>
      </div>
    </div>
  );
}

export default Header;
