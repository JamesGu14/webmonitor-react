import React, { Component } from 'react'
import { render } from 'react-dom'
import { Row, Col } from 'antd'

class App extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={4} offset={4}>
            Hello
          </Col>
        </Row>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
