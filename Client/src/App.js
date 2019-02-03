import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ContractItem from './Components/ContractItem'

import ContractList from './Components/ContractList'
export default class App extends Component {

  render() {
    return <ContractList></ContractList>
  }
}
