import "./MovieCard.css";

function MovieCard({ title, image, genre, rating }) {
  return (
    <div className="movie-card">
      <img
        src={`src/assets/images/${image}`}
        alt={title}
        className="movie-img"
      />

      <div className="movie-body">
        <button className="action-btn add-btn" title="Add to Watchlist">
          +
        </button>

        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <div className="movie-details">
            <span className="movie-genre">{genre}</span>
            <span className="movie-rating">★ {rating}</span>
          </div>
        </div>

        <button className="action-btn fav-btn" title="Add to Favourites">
          ♥
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
