import "./MovieCard.css";

function MovieCard({ title, image, genre, rating }) {
  return (
    <div className="movie-card">
      <img
        src={`src//assets/images/${image}`}
        alt={title}
        className="movie-img"
      />
      <div className="movie-body">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-details">
          <span className="movie-genre">{genre}</span>
          <span className="movie-rating">★ {rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
