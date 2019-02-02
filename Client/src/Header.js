import React, { Component } from 'react'

import SearchBar from './SearchBar'

import './main.css'

export default class Header extends Component {

  render() {
    return(
      <div className="header">
        <h1>Aviato Movie Database</h1>
        <button>Favorites</button>
        <SearchBar placeholder="Search" onSubmit={this.props.onSubmit()}></SearchBar>
      </div>
    )
  }
  
}
