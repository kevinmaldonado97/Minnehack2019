import React from 'react'

import Header from './Header'
import MovieList from './MovieList'

const Home = () => {
  return (
    <div className="movie-container">
      <Header />
      <MovieList />
    </div>
  )
}

export default Home
