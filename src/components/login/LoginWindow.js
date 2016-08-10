import React from 'react'
import jQuery from 'jquery'
import { Form, Input, Button, Checkbox, Tooltip, Icon, Alert } from 'antd'
const FormItem = Form.Item

let LoginWindow = React.createClass({
  getInitialState() {
    return {
      iconLoading: false,
      isLoginFailed: false
    }
  },
  handleSubmit (e) {
    var _this = this
    e.preventDefault()
    this.setState({ iconLoading: true })
    jQuery.post('http://localhost:3001/login', {
      username: this.props.form.getFieldsValue().username,
      password: this.props.form.getFieldsValue().password
    }, function (result) {
      if (!result.success) {
        _this.setState({ iconLoading: false, isLoginFailed: true })
      } else {
        localStorage.setItem('token', result.token)
        localStorage.setItem('profile', JSON.stringify(result.profile))
        location.href= '/'
      }
    })
  },
  render () {
    const { getFieldProps } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="用户名">
          <Input type="email" {...getFieldProps('username', { initialValue: '' })} placeholder="example@hotmail.com" />
        </FormItem>
        <FormItem {...formItemLayout} label="密码">
          <Input type="password" {...getFieldProps('password', { initialValue: '' })} />
        </FormItem>
        <FormItem {...formItemLayout} 
          label={<span>记住我 <Tooltip title="下次您无需再次输入用户名和密码">
          <Icon type="question-circle-o" /></Tooltip></span>}>
          <Checkbox {...getFieldProps('agree', { initialValue: false, valuePropName: 'checked' })}></Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit" icon="poweroff" 
            loading={this.state.iconLoading}>登录</Button>
            <br /><br />
            { this.state.isLoginFailed ? 
              <Alert message="对不起，登录失败" type="warning" showIcon /> : null
            }
        </FormItem>
      </Form>
    )
  }
})

export default Form.create()(LoginWindow)
