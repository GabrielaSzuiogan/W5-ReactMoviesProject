import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({
  movie,
  isWatchlisted,
  toggleWatchlist,
  isFavorited,
  toggleFavorite,
}) {
  const handleImageError = (e) => {
    e.target.src = "src/assets/images/default.jpg";
  };

  const watchlistClass = `action-btn add-btn ${isWatchlisted ? "active" : ""}`;
  const favoritesClass = `action-btn fav-btn ${isFavorited ? "active" : ""}`;

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`src/assets/images/${movie.image}`}
          alt={movie.title}
          className="movie-img"
          onError={handleImageError}
        />
      </Link>

      <div className="movie-body">
        <button
          className={watchlistClass}
          title="Add to Watchlist"
          onClick={toggleWatchlist}
        >
          {isWatchlisted ? "✔" : "+"}
        </button>

        <div className="movie-info">
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
            <h3 className="movie-title">{movie.title}</h3>
          </Link>

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
