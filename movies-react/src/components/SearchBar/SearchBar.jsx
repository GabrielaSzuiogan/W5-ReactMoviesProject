import React from "react";
import "./SearchBar.css";

function SearchBar({ setSearchGenre }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Movies..."
        className="search-input"
        onChange={(e) => setSearchGenre(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
