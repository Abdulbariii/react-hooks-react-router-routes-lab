import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movie Page</h1>
      {movies.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <h1>{movie.time}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Movies;
