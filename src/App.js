import Header from './components/Header'
import MoviesList from './components/MoviesList'
import Details from './components/Details'
import Footer from './components/Footer'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { Route , Routes } from 'react-router-dom'

function App() {

  const [movies , setMovies] = useState([])

  const getMovies = async ()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
    setMovies(response.data.results)
  } //getMovies

  const search = async (word)=>{
    if( word === ""){
      getMovies()
    }
    else{ 
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
      setMovies(response.data.results)
    }
  } //getMovies

  useEffect( ()=>{
    getMovies()
  } , [])

  return (
    <div>
    <Header search={search} />

    <Routes>
      <Route path='/' element={ <MoviesList movies={movies}/> } />
      <Route path='/details/:id' element={ <Details/> } />
    </Routes>
    
    <Footer/>
    
    </div>
    
  )
}

export default App
