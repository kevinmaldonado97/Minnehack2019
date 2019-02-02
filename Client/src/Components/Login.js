import React, { Component } from 'react'

import './Components/Login.css'

export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  login() {
    console.log(2);
  }

  render() {
    return (
    <div className="movie-db-login">
        <h1>
            Aviato Movie Database
        </h1>
        <h3>
            Please login
        </h3>
        <form id="login" onClick={this.login} onSubmit={this.handleSubmit}>
            <label id="email">
                Email: 
                <input type="text" name="email" />
            </label>
            <label id="pass">
                Password: 
                <input type="text" name="password" />
            </label>
            <input type="submit" value="Login"/>
        </form>
    </div>
    )
  }
}
