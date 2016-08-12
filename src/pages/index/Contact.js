import React, { Component } from 'react'
import { render } from 'react-dom'
import Ajax from '../../method/Ajax'
import { Row, Col, Card, Form, Checkbox, Input, Button, Modal } from 'antd'
const confirm = Modal.confirm
const CheckboxGroup = Checkbox.Group
const FormItem = Form.Item

const reasons = [
  { label: '鼓励一下', value: 'encourage' },
  { label: '提供建议', value: 'suggest' },
  { label: '反馈Bug', value: 'bug' },
  { label: '其他原因', value: 'other' }
]

let Contact = React.createClass({
  getInitialState() {
    return {
      reason: ['encourage'],
      mobile: '',
      username: window.localStorage.getItem('username'),
      content: ''
    }
  },
  onChange(checkedValues) {
    this.setState({ reason: checkedValues })
  },
  numberInput(event) {
    this.setState({ mobile: event.target.value })
  },
  formSubmit() {
    Ajax.post(`${serviceUrl}/contact`, this.state, function (err, data) {
      debugger
      if (err) {
        confirm({
          content: '对不起，您的登录已过期，请重新登录',
          onOk() {
            location.href = '/login.html'    
          }
        })
      }
    })
  },
  render() {
    return (
      <Row type="flex" justify="center">
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <Card>
            <h2>联系我们</h2>
            <p>感谢您提供的任何宝贵的意见和建议，您的支持是我们持续升级系统的动力</p>
            <br /><br />

            <Form horizontal onSubmit={this.formSubmit}>
              <FormItem
                label="联系原因 "
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <CheckboxGroup options={reasons} defaultValue={this.state.reason} onChange={this.onChange} />
              </FormItem>
            </Form>

            <FormItem
              id="control-input"
              label="联系方式（可不提供）"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
              onChange={this.numberInput}
            >
              <Input id="control-input" placeholder="非必填" />
            </FormItem>

            <FormItem
              id="control-textarea"
              label="联系内容 "
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 14 }}
            >
              <Input type="textarea" id="control-textarea" rows="5" />
            </FormItem>

            <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">提交</Button>
            </FormItem>
          </Card>
        </Col>
      </Row>
    )
  }
})

export default Contact
