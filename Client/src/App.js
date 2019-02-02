import React, { Component } from 'react'

import Header from './Header'

import './main.css'

export default class App extends Component {

  onSubmit() {
    return <h1>Clicked me!</h1>
  }

  render() {
    return <Header onSubmit={this.onSubmit}></Header>
  }
}
