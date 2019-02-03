import React, { Component } from 'react'

import './ContractItem.css'

export default class ContractItem extends Component {
  
  state = {
    name:null,
    land:null,
    value:null
  }
  
  render() {
    return (
      <div className="contract-db-div">
        <h1 className="contract-db-name"></h1>
        <h2 className="contract-db-land"></h2>
        <h2 className="contract-db-value"></h2>
      </div>
    )
  }
}
