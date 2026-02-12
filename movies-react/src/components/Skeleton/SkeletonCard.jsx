import React from "react";
import "./SkeletonCard.css";

const Skeleton = () => {
  return (
    <div className="movie-card skeleton-card">
      <div className="skeleton-img"></div>

      <div className="movie-body">
        <div className="skeleton-btn"></div>

        <div className="movie-info">
          <div className="skeleton-text title-bar"></div>
          <div className="skeleton-text detail-bar"></div>
        </div>

        <div className="skeleton-btn"></div>
      </div>
    </div>
  );
};

export default Skeleton;
