import React, { Component } from 'react'
import { render } from 'react-dom'

let UserApp = React.createClass({
  render() {
    return (
      <div> 
        <h1>User App</h1>
        <h3>{this.props.params.appid}</h3>
      </div>
    )
  }
})

export default UserApp
