import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-md-3 col-sm-6 mb-2">
      <div className="card p-3 text-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <h3 className="mt-2 fs-5">{movie.title}</h3>
        <h4 className="fs-5"> Release Date : {movie.release_date} </h4>
        <Link to={`/details/${movie.id}`} className="btn btn-warning"> Details </Link>
      </div>
      {/* card */}
    </div>
  );
}

export default MovieCard;
