import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios' 

function Details() {

  const params = useParams()

  const [movie , setMovie] = useState([])

  const getMovieDetails = async ()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
    setMovie(response.data)
  } //getMovies

  useEffect( ()=>{
    getMovieDetails()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);

  return (
    <section className="py-5 container">
      <div className="row">
        <div className="col-md-6 mb-1">
          <h1> {movie.title} </h1>
          <h2>Release Date : {movie.release_date} </h2>
          <h4>Vote Average : {movie.vote_average} </h4>
          <h4>Vote Count : {movie.vote_count} </h4>
          <h4>Popularity : {movie.popularity} </h4>
          <p>Overview : {movie.overview} </p>
          
        </div>
        <div className="col-md-6 mb-1 text-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-50" alt="" />
        </div>
      </div> {/* row */}
    </section>

  )
}

export default Details