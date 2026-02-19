import { useMoviesCtx } from "../../context/MovieContext";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { watchlist, favorites, toggleWatchlist, toggleFavorite } =
    useMoviesCtx();

  const isWatchlisted = watchlist.some((m) => m.id === movie.id);
  const isFavorited = favorites.some((m) => m.id === movie.id);

  const watchlistClass = `action-btn add-btn ${isWatchlisted ? "active" : ""}`;
  const favoritesClass = `action-btn fav-btn ${isFavorited ? "active" : ""}`;

  const handleImageError = (e) => {
    e.target.src = "src/assets/images/default.jpg";
  };

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
          onClick={() => toggleWatchlist(movie)}
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
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorited ? "♥︎" : "♡︎"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
