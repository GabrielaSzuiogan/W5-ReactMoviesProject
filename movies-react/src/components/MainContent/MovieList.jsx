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
  currentView,
}) => {
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchGenre.toLowerCase());
    const matchesGenre = genre ? movie.genre === genre : true;
    return matchesTitle && matchesGenre;
  });

  let emptyMessage = "Movie not found";

  if (currentView === "watchlist" && movies.length === 0) {
    emptyMessage = "Your Watch List is empty";
  } else if (currentView === "favorites" && movies.length === 0) {
    emptyMessage = "No Favorites selected yet ";
  }
  return (
    <div className="movie-container">
      <div className="movie-grid">
        {filteredMovies.map((movie) => {
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
        <div className="search-nf">{emptyMessage}</div>
      )}
    </div>
  );
};

export default MovieList;
