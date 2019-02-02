import React, { Component } from 'react'

import Button from './Button'

export default class SearchBar extends Component {

  state = {
    value:null
  }

  onSubmit(){
      return this.state.value;
  }

  onChange(event){
    console.log(event);
    // this.setState({value:})
  }

  render() {
    return <div>
        <input className="movie-db-searchbar" onChange={this.onChange} placeholder="Search" type='text'></input>
        <Button onClick={this.onSubmit} color="Green">Submit</Button>
      </div>
  }
}
