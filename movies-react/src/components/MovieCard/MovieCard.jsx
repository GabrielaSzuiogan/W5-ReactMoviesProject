import "./MovieCard.css";

function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const watchlistClass = `action-btn add-btn ${isWatchlisted ? "active" : ""}`;

  return (
    <div className="movie-card">
      <img
        src={`src/assets/images/${movie.image}`}
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

        <button className="action-btn add-btn" title="Add to Favourites">
          ♥
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
