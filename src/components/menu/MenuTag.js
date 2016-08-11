import React, { Component } from 'react'
import { render } from 'react-dom'

let MenuTag = React.createClass({
  render() {
    return (
      <span style={{ lineHeight: '22px', margin: '10px 0 5px 13px' }}>{this.props.text}</span>
    )
  }
})

export default MenuTag
