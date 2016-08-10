import React, { Component } from 'react'
import { render } from 'react-dom'
import { Row, Col } from 'antd'
import LoginWindow from '../components/login/LoginWindow'

class App extends Component {
  render () {
    return (
      <div>
        <br /><br /><br /><br />
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
            <h2>WEB MONITOR</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 8, offset: 8 }}>
            <LoginWindow />
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
