import React from 'react'
import { Form, Input, Button, Checkbox, Tooltip, Icon } from 'antd'
const FormItem = Form.Item

let LoginWindow = React.createClass({
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.props.form.getFieldsValue())
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
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    )
  }
})

export default Form.create()(LoginWindow)
