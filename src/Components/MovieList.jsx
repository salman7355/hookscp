import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movie }) => {
  return (
    <div className="d-flex gap-2 p-4">
      {movie.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
