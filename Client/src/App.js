import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

<<<<<<< HEAD
import Header from './Header'
=======
import Home from './Home'
import Login from './Login'
>>>>>>> eec408ec412f5362677c1ed3ffdee61125b6ac90

import './main.css'

export default class App extends Component {
<<<<<<< HEAD

  onSubmit() {
    return <h1>Clicked me!</h1>
  }

  render() {
    return <Header onSubmit={this.onSubmit}></Header>
=======
  state = {
    movies: null
  }

  // componentWillMount() {
  //   const response = api.get('/movies')
  //   this.setState({ movies: response.data })
  // }

  render() {
    return (
      <Router>
        <Route push to="/login" component={Login} />
        <Route push to="/" component={Home} />
      </Router>
    )
>>>>>>> eec408ec412f5362677c1ed3ffdee61125b6ac90
  }
}
