import "./Dropdown.css";

function Dropdown({ setGenre }) {
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select id="genre" name="genre" onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
      </select>
    </div>
  );
}

export default Dropdown;
