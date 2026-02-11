import MovieCard from "../MovieCard/MovieCard.jsx";
import moviesData from "../../movies.json";
import "./Content.css";

const MovieList = ({ searchGenre }) => {
  const filteredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(searchGenre.toLowerCase());
  });

  return (
    <div className="movie-container">
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </div>
      {filteredMovies.length === 0 && (
        <div className="search-nf">Movie not found</div>
      )}
    </div>
  );
};

export default MovieList;
