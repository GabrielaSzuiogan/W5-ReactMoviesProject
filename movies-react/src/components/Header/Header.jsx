import "./Header.css";
import headerLogo from "../../assets/popcorn.png";
function Header() {
  return (
    <div className="headerWrapper">
      <img src={headerLogo} className="headerLogo" alt="Header Logo" />
      <h1 className="headerTitle">Popcorn</h1>
    </div>
  );
}

export default Header;
