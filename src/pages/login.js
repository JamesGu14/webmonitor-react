import React, { Component } from 'react'
import { render } from 'react-dom'
import { Card, Row, Col } from 'antd'
import LoginWindow from '../components/login/LoginWindow'

class App extends Component {
  render () {
    return (
      <div>
        <br /><br /><br /><br />
        <Row type="flex" justify="center">
          <Col xs={{ span: 20 }} md={{ span: 8 }}>
            <Card>
              <br />  
              <h2 style={{ textAlign: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                  <path d="M 4 4 L 44 4 L 44 44 Z" fill="#a88add"></path>
                  <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
                  <path d="M 4 4 L 24 4 L 4  44 Z" fill="#0cc2aa"></path>
                </svg> <span style={{ position: 'relative', bottom: '5px' }}> 网 站 管 家</span>
              </h2>
              <br /><br />
              <LoginWindow />
            </Card>
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
