import React, { Component } from 'react'

import SearchBar from './SearchBar'
import Button from './Button'

import './Movies.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Aviato Movie Database</h1>
        <Button>Favorites</Button>
        <SearchBar placeholder="Search" onSubmit={this.props.onSubmit()} />
      </div>
    )
  }
}
