import React from 'react'
import MovieCard from './MovieCard'
import Slide from './Slide'

function MoviesList({movies}) {
  return (
    <section>
      <Slide/>
      <div className='py-5 container'>
        <div className="row">

          {
            movies.map( (movie)=>{
              return( <MovieCard key={movie.id} movie={movie} /> )
            })
          }
        

        </div> {/* row */}
      </div>
    </section>
  )
}

export default MoviesList