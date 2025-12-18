import React from "react";
import movie from './data';

const FavoriteMovie = () => {
  const cardStyle = {
    margin: "auto",
    width: "260px",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid rgba(18, 55, 102, 0.06)",
  };

  const posterStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "12px"
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "8px 0"
  };

  const yearStyle = {
    fontSize: "16px",
  };

  const reasonStyle = {
    fontSize: "14px",
  };

  return (
    <div style={cardStyle}>
      <img src={movie.poster} alt={movie.title} style={posterStyle} />
      <h2 style={titleStyle}>{movie.title}</h2>
      <div style={yearStyle}>{movie.year}</div>
      <p style={reasonStyle}>{movie.reason}</p>
    </div>
  );
};

export default FavoriteMovie;
