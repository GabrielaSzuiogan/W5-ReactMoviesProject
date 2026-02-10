function Dropdown() {
  return (
    <>
      <label htmlFor="genre">Choose a movie genre</label>
      <select id="genre">
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
      </select>
    </>
  );
}

export default Dropdown;
