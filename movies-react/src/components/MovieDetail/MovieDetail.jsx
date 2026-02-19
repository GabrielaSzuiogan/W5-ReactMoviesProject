import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // 1. Import Redux Hook
import "../MainContent/Content.css";
import "./MovieDetail.css";

const MovieDetail = () => {
  // 2. Read from Redux Store instead of Context
  const moviesData = useSelector((state) => state.movies.allMovies);

  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.find((m) => m.id.toString() === id);

  const handleImageError = (e) => {
    e.target.src = "../src/assets/images/default.jpg";
  };

  if (!movie) {
    return <div className="search-nf">Movie not found!</div>;
  }

  return (
    <div className="movie-detail-container">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        title="Go Back"
      >
        ←
      </button>

      <div className="movie-detail-img ">
        <img
          src={`../src/assets/images/${movie.image}`}
          alt={movie.title}
          style={{ width: "300px", borderRadius: "16px" }}
          onError={handleImageError}
        />
        <div className="movie-info">
          <h1 style={{ fontSize: "3rem", margin: "0 0 20px" }}>
            {movie.title}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#ccc" }}>
            Genre: {movie.genre}
          </p>
          <p style={{ fontSize: "1.5rem", color: "#ffc107" }}>
            ★ {movie.rating}
          </p>
          <p className="movie-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
