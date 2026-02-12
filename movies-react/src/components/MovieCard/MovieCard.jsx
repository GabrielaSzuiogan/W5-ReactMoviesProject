import "./MovieCard.css";

function MovieCard({
  movie,
  isWatchlisted,
  toggleWatchlist,
  isFavorited,
  toggleFavorite,
}) {
  const watchlistClass = `action-btn add-btn ${isWatchlisted ? "active" : ""}`;
  const favoritesClass = `action-btn fav-btn ${isFavorited ? "active" : ""}`;

  return (
    <div className="movie-card">
      <img
        src={
          movie.image
            ? `src/assets/images/${movie.image}`
            : `src/assets/images/default.jpg`
        }
        alt={movie.title}
        className="movie-img"
      />

      <div className="movie-body">
        <button
          className={watchlistClass}
          title="Add to Watchlist"
          onClick={toggleWatchlist}
        >
          {isWatchlisted ? "✔" : "+"}
        </button>

        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-details">
            <span className="movie-genre">{movie.genre}</span>
            <span className="movie-rating">★ {movie.rating}</span>
          </div>
        </div>

        <button
          className={favoritesClass}
          title="Add to Favourites"
          onClick={toggleFavorite}
        >
          {isFavorited ? "♥︎" : "♡︎"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
