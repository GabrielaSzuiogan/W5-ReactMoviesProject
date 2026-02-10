import MovieCard from "../MovieCard/MovieCard";
import "./Content.css";
function Content() {
  return (
    <div className="contentWrapper">
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default Content;
