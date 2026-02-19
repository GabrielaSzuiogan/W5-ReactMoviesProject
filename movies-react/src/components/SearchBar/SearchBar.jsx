import "./SearchBar.css";

function SearchBar({ setSearchGenre, initialValue }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Movies..."
        className="search-input"
        defaultValue={initialValue} // <--- Add this
        onChange={(e) => setSearchGenre(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
