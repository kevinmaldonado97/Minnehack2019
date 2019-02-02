import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    value:null
  }

  render() {
    return <div>
        <input className="movie-db-searchbar" placeholder="Search" type='text'></input>
        <button className="movie-db-searchsubmit">Submit</button>
      </div>
  }
}
