import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
// import Movie from './Pages/Movies'
import MovieCard from './components/Moviecard'
import About from './Pages/About'

const App = () => {

  return (
    <div>
      <Navbar />
      <Home />
      {/* <Movie /> */}
      <div className='flex gap-5 flex-wrap m-3'>
        <MovieCard  />
      <MovieCard />
      <MovieCard />
      <MovieCard />
 <MovieCard  />
      <MovieCard />
      <MovieCard />
      <MovieCard />
       <MovieCard  />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      </div>
      <About />
    </div>
  )
}

export default App
