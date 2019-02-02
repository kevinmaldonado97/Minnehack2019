import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'

import './main.css'

export default class App extends Component {
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
        <>
          <Route push to="/login" component={Login} />
          <Route push to="/" component={Home} />
        </>
      </Router>
    )
  }
}
