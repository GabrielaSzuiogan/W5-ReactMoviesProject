import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <textarea
        type="text"
        className="input-search"
        placeholder="Type to Search..."
      >
        {" "}
      </textarea>
    </div>
  );
}

export default SearchBar;
