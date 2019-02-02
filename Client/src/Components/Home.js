import React, { Component } from 'react'

import Header from './Header'
import MovieList from './MovieList'

class Home extends Component {
  onSubmit(text) {
    console.log(text)
  }
  render() {
    return (
      <div className="movie-container">
        <Header onSubmit={this.onSubmit} />
        <MovieList />
      </div>
    )
  }
}

export default Home
