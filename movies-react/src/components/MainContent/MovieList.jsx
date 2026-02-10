import MovieCard from "../MovieCard/MovieCard.jsx";
import moviesData from "../../movies.json";
import "./Content.css";

const MovieList = () => {
  return (
    <div className="movie-container">
      <div className="movie-grid">
        {moviesData.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
