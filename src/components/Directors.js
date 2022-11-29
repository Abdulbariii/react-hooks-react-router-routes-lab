import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors page</h1>
      {directors.map((director) => (
        <div>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map((movie) => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Directors;
