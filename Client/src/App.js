import React, { Component } from 'react'

import Movie from './Movie'

import './main.css'

export default class App extends Component {
  state = {
    movies: null
  }

  componentWillMount() {
    const response = api.get('/movies')
    this.setState({ movies: response.data })
  }

  renderMovies = () => {
    this.state.movies.map(movie => {
      if (movie.title === 'inception') {
        return <Movie movie={movie} />
      }
      return <div className="movie">{movie.title}</div>
    })
  }

  render() {
    return <div className="movie-db-container">{this.renderMovies()}</div>
  }
}
