import MovieCard from "../MovieCard/MovieCard.jsx";
import "./Content.css";

const MovieList = ({
  searchGenre,
  genre,
  movies,
  watchlist,
  onToggleWatchlist,
  favorites,
  onToggleFavorite,
}) => {
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchGenre.toLowerCase());
    const matchesGenre = genre ? movie.genre === genre : true;
    return matchesTitle && matchesGenre;
  });

  return (
    <div className="movie-container">
      <div className="movie-grid">
        {filteredMovies.map((movie) => {
          // Check if this specific movie is in the arrays
          const isWatchlisted = watchlist.some((m) => m.id === movie.id);
          const isFavorited = favorites.some((m) => m.id === movie.id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchlisted={isWatchlisted}
              toggleWatchlist={() => onToggleWatchlist(movie)}
              isFavorited={isFavorited}
              toggleFavorite={() => onToggleFavorite(movie)}
            />
          );
        })}
      </div>

      {filteredMovies.length === 0 && (
        <div className="search-nf">Movie not found</div>
      )}
    </div>
  );
};

export default MovieList;
