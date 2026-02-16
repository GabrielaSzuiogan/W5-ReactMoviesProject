import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../MainContent/Content.css";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <div className="search-nf">Movie not found!</div>;
  }

  return (
    <div
      className="movie-detail-container"
      style={{
        color: "white",
        padding: "40px",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        gap: "5%",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          width: "5rem",
          height: "5rem",
        }}
      >
        ← Back
      </button>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <img
          src={`../src/assets/images/${movie.image}`}
          alt={movie.title}
          style={{ width: "300px", borderRadius: "16px" }}
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
          <p
            style={{ marginTop: "20px", maxWidth: "600px", lineHeight: "1.6" }}
          >
            {/* Placeholder description since JSON doesn't have it */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
