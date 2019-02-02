import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    value:null
  }

  onSubmit(){
      return this.state.value;
  }

  render() {
    return <div>
        <input className="movie-db-searchbar" placeholder="Search" type='text'></input>
        <button className="movie-db-searchsubmit" onClick={this.onSubmit}>Submit</button>
      </div>
  }
}
